import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";

export async function POST(request) {
  try {
    const { assessmentId } = await request.json();

    if (!mongoose.isValidObjectId(assessmentId)) {
      return NextResponse.json(
        { success: false, message: "Invalid assessmentId" },
        { status: 400 }
      );
    }

    // Existing connection — MONGODB_URI
    const connection = await connectDB();

    // Access another database on the SAME cluster
    const db = connection.connection.useDb("ai_question_engine").db;

    const assessment = await db.collection("assessments").findOne({
      _id: new mongoose.Types.ObjectId(assessmentId),
    });

    if (!assessment) {
      return NextResponse.json(
        { success: false, message: "Assessment not found" },
        { status: 404 }
      );
    }

    const questionIds = assessment.questions || [];

    const fetchedQuestions = await db.collection("questions")
      .find({
        _id: {
          $in: questionIds.map(
            (id) => new mongoose.Types.ObjectId(id)
          ),
        },
      })
      .toArray();

    const questionMap = new Map(
      fetchedQuestions.map((q) => [q._id.toString(), q])
    );

    const questions = questionIds
      .map((id) => questionMap.get(id.toString()))
      .filter(Boolean);

    return NextResponse.json({
      success: true,
      assessment,
      questions,
    });
  } catch (error) {
    console.error("Assessment questions error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}