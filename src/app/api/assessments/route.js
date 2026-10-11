
// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";

// export const runtime = "nodejs";
// export const dynamic = "force-dynamic";

// const DB_NAME = "ai_question_engine";
// const COLLECTION_NAME = "assessments";

// let clientPromise;

// async function getDatabase() {
//   const uri = process.env.MONGODB_URI;

//   if (!uri) {
//     throw new Error("MONGODB_URI is missing.");
//   }

//   if (!clientPromise) {
//     const client = new MongoClient(uri);

//     clientPromise = client.connect().catch((error) => {
//       clientPromise = null;
//       throw error;
//     });
//   }

//   const client = await clientPromise;
//   return client.db(DB_NAME);
// }

// export async function GET(request) {
//   try {
//     const db = await getDatabase();
//     const { searchParams } = new URL(request.url);

//     const type = searchParams.get("type");
//     const role = searchParams.get("role");

//     const filter = {};

//     if (type) {
//       if (!["aptitude", "coding"].includes(type)) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Invalid assessment type.",
//           },
//           { status: 400 }
//         );
//       }

//       filter.type = type;
//     }

//     if (role) {
//       filter.role = role;
//     }

//     const collection = db.collection(COLLECTION_NAME);

//     // Fetch ALL matching assessments without pagination or limits.
//     const assessments = await collection
//       .find(filter, {
//         projection: {
//           title: 1,
//           type: 1,
//           role: 1,
//           totalQuestions: 1,
//           difficultyCounts: 1,
//           created_at: 1,
//         },
//       })
//       .sort({ created_at: -1, _id: -1 })
//       .toArray();

//     const data = assessments.map((assessment) => ({
//       id: assessment._id.toString(),
//       title: assessment.title,
//       type: assessment.type,
//       role: assessment.role,
//       totalQuestions: assessment.totalQuestions,
//       difficultyCounts: assessment.difficultyCounts,
//       createdAt: assessment.created_at,
//     }));

//     return NextResponse.json({
//       success: true,
//       data,
//       totalAssessments: data.length,
//     });
//   } catch (error) {
//     console.error("Fetch assessments error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch assessments.",
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ASSESSMENT_DB = "ai_question_engine";
const ASSESSMENT_COLLECTION = "assessments";

const RESPONSE_DB = "test";
const RESPONSE_COLLECTION = "assessment_responses";

let clientPromise;

async function getMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing.");
  }

  if (!clientPromise) {
    const client = new MongoClient(uri);

    clientPromise = client.connect().catch((error) => {
      clientPromise = null;
      throw error;
    });
  }

  return clientPromise;
}

async function getAuthenticatedUserId() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token || !process.env.JWT_SECRET) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId ?? decoded.id ?? decoded._id;

    if (!ObjectId.isValid(userId)) {
      return null;
    }

    return new ObjectId(userId);
  } catch {
    return null;
  }
}

export async function GET(request) {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Authentication required.",
        },
        { status: 401 }
      );
    }

    const client = await getMongoClient();

    // Assessments database
    const assessmentDb = client.db(ASSESSMENT_DB);
    const assessmentCollection = assessmentDb.collection(
      ASSESSMENT_COLLECTION
    );

    // User responses database
    const responseDb = client.db(RESPONSE_DB);
    const responseCollection = responseDb.collection(
      RESPONSE_COLLECTION
    );

    const { searchParams } = new URL(request.url);

    const type = searchParams.get("type");
    const role = searchParams.get("role");

    const filter = {};

    if (type) {
      if (!["aptitude", "coding"].includes(type)) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid assessment type.",
          },
          { status: 400 }
        );
      }

      filter.type = type;
    }

    if (role) {
      filter.role = role;
    }

    // Fetch matching assessments.
    const assessments = await assessmentCollection
      .find(filter, {
        projection: {
          title: 1,
          type: 1,
          role: 1,
          totalQuestions: 1,
          difficultyCounts: 1,
          created_at: 1,
        },
      })
      .sort({ created_at: -1, _id: -1 })
      .toArray();

    // Find which of these assessments this user has submitted.
    const assessmentIds = assessments.map(
      (assessment) => assessment._id
    );

    const submittedResponses = assessmentIds.length
      ? await responseCollection
          .find(
            {
              userId,
              assessmentId: { $in: assessmentIds },
            },
            {
              projection: {
                assessmentId: 1,
                submittedAt: 1,
                score: 1,
              },
            }
          )
          .sort({ submittedAt: -1, _id: -1 })
          .toArray()
      : [];

    // Keep one response per assessment (latest submission).
    const responseMap = new Map();

    for (const response of submittedResponses) {
      const id = response.assessmentId.toString();

      if (!responseMap.has(id)) {
        responseMap.set(id, response);
      }
    }

    const data = assessments.map((assessment) => {
      const id = assessment._id.toString();
      const submission = responseMap.get(id);

      return {
        id,
        title: assessment.title,
        type: assessment.type,
        role: assessment.role,
        totalQuestions: assessment.totalQuestions,
        difficultyCounts: assessment.difficultyCounts,
        createdAt: assessment.created_at,

        // UI flags
        isSubmitted: Boolean(submission),
        submittedAt: submission?.submittedAt ?? null,
        score: submission?.score ?? null,
      };
    });

    return NextResponse.json({
      success: true,
      data,
      totalAssessments: data.length,
    });
  } catch (error) {
    console.error("Fetch assessments error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch assessments.",
      },
      { status: 500 }
    );
  }
}