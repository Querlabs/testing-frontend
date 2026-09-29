import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getFileFromS3 } from "@/app/lib/digitalToBinary";
import CustomAssessment from "@/app/model/customAssessment";
import connectDB from "@/app/lib/mongodb";
export async function POST(request) {
    try {
        const body = await request.json();
        const { jd_text,company,role,experience,type,status,resume } = body;

        if (!jd_text) {
            return NextResponse.json(
                {
                    success: false,
                    message: "jd_text is required",
                },
                { status: 400 }
            );
        }

        // Get authToken from cookies
        const cookieStore = await cookies();
        const authToken = cookieStore.get("authToken")?.value;

        if (!authToken) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Authentication token not found",
                },
                { status: 401 }
            );
        }

        // Decode / verify JWT
        const decoded = jwt.verify(
            authToken,
            process.env.JWT_SECRET
        );
        console.log(decoded)

        const candidate_id = decoded.userId;

        if (!candidate_id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Candidate ID not found in token",
                },
                { status: 401 }
            );
        }

        // Call Pre-Interview Intelligence API for JD
        const jdResponse = await fetch(
            "https://preintel.querlabs.com/api/v1/jd/analyze",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    jd_text,
                    candidate_id,
                }),
            }
        );
        const jdData = await jdResponse.json();
        // call Pre-Interview Intelligence API for resume

        const fileBuffer = await getFileFromS3(resume.s3Key);

        const formData = new FormData();

        formData.append("candidate_id", candidate_id);

        formData.append(
            "file",
            new Blob([fileBuffer], {
                type: "application/pdf",
            }),
            "resume.pdf"
        );

        const resumeResult = await fetch(
            "https://preintel.querlabs.com/api/v1/resume/upload",
            {
                method: "POST",
                body: formData,
            }
        );

        const resumeData = await resumeResult.json();

        if (!resumeResult.ok) {
            throw new Error(
                `Resume processing failed: ${JSON.stringify(resumeData)}`
            );
        }
        // const response = [jd,resumeResult];

        // const data = response;
        // console.log(data)

        // call Pre-Interview Intelligence API for experience
        const experienceResponse = await fetch(
            "https://preintel.querlabs.com/api/v1/experience/analyze",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    candidate_id,

                    resume_profile:
                        resumeData.data.resume,

                    jd_profile:
                        jdData.data.profile,
                }),
            }
        );

        const experienceData = await experienceResponse.json();

        if (!experienceResponse.ok) {
            throw new Error(
                `Experience processing failed: ${JSON.stringify(experienceData)}`
            );
        }

        const jdDocumentId = jdData?.data?.storage?.document_id;

        const resumeDocumentId =
            resumeData?.data?.storage?.document_id;

        const experienceDocumentId =
            experienceData?.data?.storage?.document_id;

        const assessment = await CustomAssessment.create({
            user: candidate_id,

            company,
            role,
            experience,
            type,
            status,

            resume: resume._id,

            preIntel: {
                resume: resumeDocumentId,
                jd: jdDocumentId,
                experience: experienceDocumentId,
            },
        });

        console.log("Assessment Created:", assessment._id);

        return NextResponse.json(
        {
            success: true,
            message: "Assessment created successfully",
            data: {
                assessmentId: assessment._id,
                company,
                role,
                experience,
                type,
                status,
                resume: resume._id,
                preIntel: {
                    resume: resumeDocumentId,
                    jd: jdDocumentId,
                    experience: experienceDocumentId,
                },
            },
        },
        { status: 201 }
    );

    } catch (error) {
        console.error("JD Analyze Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while analyzing JD",
                error: error.message,
            },
            { status: 500 }
        );
    }
}



export async function GET() {
    try {
        await connectDB();

        // -----------------------------
        // AUTH
        // -----------------------------
        const cookieStore = await cookies();
        const authToken = cookieStore.get("authToken")?.value;

        if (!authToken) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Authentication token not found",
                },
                { status: 401 }
            );
        }

        let decoded;

        try {
            decoded = jwt.verify(
                authToken,
                process.env.JWT_SECRET
            );
        } catch (error) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid or expired authentication token",
                },
                { status: 401 }
            );
        }

        const candidateId = decoded.userId;

        if (!candidateId) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Candidate ID not found in token",
                },
                { status: 401 }
            );
        }

        // -----------------------------
        // FETCH ASSESSMENTS
        // -----------------------------
        const assessments = await CustomAssessment.find({
            user: candidateId,
        })
            // .populate("resume")
            .sort({ createdAt: -1 })
            .lean();

        // -----------------------------
        // RESPONSE
        // -----------------------------
        return NextResponse.json(
            {
                success: true,
                message: "Assessments fetched successfully",
                count: assessments.length,
                data: assessments,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error(
            "Fetch Assessments Error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch assessments",
                error: error.message,
            },
            { status: 500 }
        );
    }
}