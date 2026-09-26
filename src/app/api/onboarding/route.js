import connectDB from "@/app/lib/mongodb";
import User from "@/app/model/user";
import { uploadToS3 } from "@/app/lib/s3";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sendOnboardingSuccessEmail } from "@/app/lib/onboardEmail";

import { verifyToken } from "@/app/lib/tokenUtility";
export async function onboardingController(userId, formData) {
  try {
    console.log("1. Controller started");

    const targetJobRole = formData.get("targetJobRole");

    const targetCompanies = JSON.parse(
      formData.get("targetCompanies") || "[]"
    );

    const targetExperience = formData.get("targetExperience");
    const resume = formData.get("resume");

    console.log("2. Form data received");
    console.log("Resume:", resume?.name, resume?.size);

    if (
      !targetJobRole ||
      !targetExperience ||
      !targetCompanies.length ||
      !resume
    ) {
      return {
        success: false,
        status: 400,
        message: "All onboarding fields are required",
      };
    }

    console.log("3. Validation passed");

    await connectDB();

    console.log("4. DB connected");

    const user = await User.findById(userId);

    console.log("5. User found");

    if (!user) {
      return {
        success: false,
        status: 404,
        message: "User not found",
      };
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    console.log("6. Resume converted to buffer");
    console.log("Buffer size:", buffer.length);

    const s3Key = `resumes/${userId}/${Date.now()}-${resume.name}`;

    console.log("7. Uploading to S3:", s3Key);

    await uploadToS3({
      buffer,
      key: s3Key,
      contentType: resume.type,
    });

    console.log("8. S3 upload completed");

    user.targetJobRole = targetJobRole;
    user.targetCompanies = targetCompanies;
    user.targetExperience = targetExperience;

    user.resumes.push({
      name: resume.name,
      s3Key,
    });

    user.onBoarded = true;

    await user.save();

    console.log("9. User saved");

    try {
    await sendOnboardingSuccessEmail(user.email, user);
    } catch (error) {
    console.error("Onboarding Email Error:", error);
    }
    return {
      success: true,
      status: 200,
      message: "Onboarding completed successfully",
      user,
    };
  } catch (error) {
    console.error("Onboarding Controller Error:", error);

    return {
      success: false,
      status: 500,
      message: "Something went wrong during onboarding",
    };
  }
}


export async function POST(request) {
  try {
    // Get auth token from cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated",
        },
        {
          status: 401,
        }
      );
    }

    // Verify JWT
    const decoded = verifyToken(token);

    // Get multipart form data
    const formData = await request.formData();

    // Call controller
    const result = await onboardingController(
      decoded.userId,
      formData
    );

    return NextResponse.json(
      {
        success: result.success,
        message: result.message,

        ...(result.user && {
          user: result.user,
        }),
      },
      {
        status: result.status,
      }
    );
  } catch (error) {
    console.error("Onboarding API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}