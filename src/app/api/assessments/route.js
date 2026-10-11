
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DB_NAME = "ai_question_engine";
const COLLECTION_NAME = "assessments";

let clientPromise;

async function getDatabase() {
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

  const client = await clientPromise;
  return client.db(DB_NAME);
}

export async function GET(request) {
  try {
    const db = await getDatabase();
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

    const collection = db.collection(COLLECTION_NAME);

    // Fetch ALL matching assessments without pagination or limits.
    const assessments = await collection
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

    const data = assessments.map((assessment) => ({
      id: assessment._id.toString(),
      title: assessment.title,
      type: assessment.type,
      role: assessment.role,
      totalQuestions: assessment.totalQuestions,
      difficultyCounts: assessment.difficultyCounts,
      createdAt: assessment.created_at,
    }));

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
