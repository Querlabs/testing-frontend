
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import connectDB from "@/app/lib/mongodb";
import AssessmentResponse from "@/app/model/testResponse";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ASSESSMENT_DB = "ai_question_engine";

function getCorrectAnswer(question) {
  const options = question.options ?? question.choices ?? [];

  const indexFields = [
    "correctAnswerIndex",
    "correctOptionIndex",
    "answerIndex",
    "correct_answer_index",
  ];

  for (const field of indexFields) {
    const value = question[field];

    if (Number.isInteger(value) && value >= 0 && value < options.length) {
      return {
        index: value,
        text: getOptionText(options[value]),
      };
    }

    if (
      typeof value === "string" &&
      /^\d+$/.test(value.trim()) &&
      Number(value) < options.length
    ) {
      const index = Number(value);

      return {
        index,
        text: getOptionText(options[index]),
      };
    }
  }

  const answerFields = [
    "correctAnswer",
    "correctOption",
    "correct_answer",
    "answer",
    "correct_answer_text",
  ];

  for (const field of answerFields) {
    const value = question[field];

    if (value == null || typeof value === "object") continue;

    const answerText = String(value).trim();

    if (!answerText) continue;

    // Correct answer stored as A, B, C, D.
    if (/^[A-Z]$/i.test(answerText)) {
      const index = answerText.toUpperCase().charCodeAt(0) - 65;

      if (index >= 0 && index < options.length) {
        return {
          index,
          text: getOptionText(options[index]),
        };
      }
    }

    // Correct answer stored as option text.
    const index = options.findIndex(
      (option) =>
        getOptionText(option)?.toLowerCase() ===
        answerText.toLowerCase()
    );

    if (index !== -1) {
      return {
        index,
        text: getOptionText(options[index]),
      };
    }
  }

  return {
    index: null,
    text: null,
  };
}

function getOptionText(option) {
  if (option == null) return null;

  if (typeof option === "string" || typeof option === "number") {
    return String(option);
  }

  return (
    option.text ??
    option.label ??
    option.value ??
    null
  );
}

function getQuestionText(question) {
  return (
    question.questionText ??
    question.question ??
    question.title ??
    question.text ??
    ""
  );
}

export async function POST(request) {
  try {
    // 1. Authenticate user from JWT cookie.
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Authentication required.",
        },
        { status: 401 }
      );
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured.");
    }

    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired authentication token.",
        },
        { status: 401 }
      );
    }

    const userId = decoded.userId ?? decoded.id ?? decoded._id;

    if (!mongoose.isValidObjectId(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid authenticated user.",
        },
        { status: 401 }
      );
    }

    // 2. Read assessmentId from request body.
    const body = await request.json();
    const { assessmentId } = body;

    if (!mongoose.isValidObjectId(assessmentId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid assessmentId is required.",
        },
        { status: 400 }
      );
    }

    await connectDB();

    if (mongoose.connection.readyState !== 1) {
      throw new Error("MongoDB connection is not ready.");
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);
    const assessmentObjectId = new mongoose.Types.ObjectId(assessmentId);

    // 3. Fetch only this user's submitted assessment response.
    const submission = await AssessmentResponse.findOne({
      userId: userObjectId,
      assessmentId: assessmentObjectId,
    })
      .sort({ submittedAt: -1, createdAt: -1 })
      .lean();

    if (!submission) {
      return NextResponse.json(
        {
          success: false,
          message: "No submitted response found for this assessment.",
        },
        { status: 404 }
      );
    }

    // 4. Read question documents from the separate database.
    const questionDB = mongoose.connection.useDb(
      ASSESSMENT_DB,
      { useCache: true }
    );

    const answers = submission.answers ?? [];

    const questionIds = answers
      .filter((answer) => mongoose.isValidObjectId(answer.questionId))
      .map(
        (answer) => new mongoose.Types.ObjectId(answer.questionId)
      );

    const questionDocs = questionIds.length
      ? await questionDB.db
          .collection("questions")
          .find({
            _id: { $in: questionIds },
          })
          .toArray()
      : [];

    const questionMap = new Map(
      questionDocs.map((question) => [
        String(question._id),
        question,
      ])
    );

    // 5. Combine saved answers with their question documents.
    const populatedAnswers = answers.map((answer, index) => {
      const questionId = String(answer.questionId);
      const question = questionMap.get(questionId);

      if (!question) {
        return {
          questionId,
          questionNumber: index + 1,
          questionText: "Question details unavailable",
          topic: null,
          options: [],
          codeSnippet: answer.code_snippet || null,
          selectedAnswer: answer.selectedAnswer,
          selectedOption: answer.selectedOption ?? null,
          correctAnswerIndex: null,
          correctAnswer: null,
          isCorrect: answer.isCorrect ?? null,
          explanation: null,
          status:
            answer.selectedAnswer === -1
              ? "skipped"
              : answer.isCorrect === true
                ? "correct"
                : answer.isCorrect === false
                  ? "incorrect"
                  : "unknown",
        };
      }

      const options = question.options ?? question.choices ?? [];
      const correct = getCorrectAnswer(question);
      const codeSnippet= question.code_snippet || null

      const selectedIndex = answer.selectedAnswer;
      const skipped = selectedIndex === -1;

      // Prefer the saved correctness result. If it is absent,
      // calculate it when the question's answer key is available.
      const isCorrect =
        answer.isCorrect != null
          ? answer.isCorrect
          : skipped || correct.index == null
            ? null
            : selectedIndex === correct.index;

      const status = skipped
        ? "skipped"
        : isCorrect === true
          ? "correct"
          : isCorrect === false
            ? "incorrect"
            : "unknown";

      const selectedOption =
        answer.selectedOption ??
        (selectedIndex >= 0
          ? getOptionText(options[selectedIndex])
          : null);

      return {
        questionId,
        questionNumber: index + 1,
        questionText: getQuestionText(question),
        codeSnippet: codeSnippet || null,

        topic:
          question.topic ??
          question.subject ??
          question.category ??
          null,
        difficulty: question.difficulty ?? null,

        options: options.map((option, optionIndex) => ({
          index: optionIndex,
          text: getOptionText(option),
        })),

        selectedAnswer: selectedIndex,
        selectedOption,

        correctAnswerIndex: correct.index,
        correctAnswer: correct.text,

        isCorrect,
        status,

        explanation:
          question.explanation ??
          question.solution ??
          question.rationale ??
          null,
      };
    });

    // 6. Use saved score when present; otherwise calculate from
    // the enriched answers. Unknown answer keys are not marked wrong.
    const savedScore = submission.score ?? {};

    const correctCount = populatedAnswers.filter(
      (answer) => answer.isCorrect === true
    ).length;

    const wrongCount = populatedAnswers.filter(
      (answer) => answer.status === "incorrect"
    ).length;

    const skippedCount = populatedAnswers.filter(
      (answer) => answer.status === "skipped"
    ).length;

    const totalQuestions =
      savedScore.totalQuestions ?? populatedAnswers.length;

    const totalMarks = savedScore.totalMarks ?? totalQuestions;
    const obtainedMarks = savedScore.obtainedMarks ?? correctCount;

    const percentage =
      savedScore.percentage ??
      (totalMarks > 0
        ? Number(((obtainedMarks / totalMarks) * 100).toFixed(2))
        : 0);

    // 7. Optional assessment metadata.
    const assessment = await questionDB.db
      .collection("assessments")
      .findOne(
        { _id: assessmentObjectId },
        {
          projection: {
            title: 1,
            type: 1,
            role: 1,
            totalQuestions: 1,
          },
        }
      );

    const score = {
      totalQuestions,
      correct: savedScore.correct ?? correctCount,
      wrong: savedScore.wrong ?? wrongCount,
      skipped: savedScore.skipped ?? skippedCount,
      obtainedMarks,
      totalMarks,
      percentage,
    };

    // 8. Return a frontend-ready result object.
    return NextResponse.json(
      {
        success: true,
        data: {
          responseId: String(submission._id),
          assessmentId: String(submission.assessmentId),
          title: assessment?.title ?? "Assessment Results",
          mode: submission.mode,
          role: assessment?.role ?? null,

          submittedAt: submission.submittedAt,
          createdAt: submission.createdAt,
          updatedAt: submission.updatedAt,

          score,
          answers: populatedAnswers,
        },
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Fetch assessment result error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON request body.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch assessment results.",
      },
      { status: 500 }
    );
  }
}
