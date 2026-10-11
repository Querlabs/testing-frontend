// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";
// import mongoose from "mongoose";

// import connectDB from "@/app/lib/mongodb";
// import AssessmentResponse from "@/app/model/testResponse";
// export async function POST(request) {
//   try {
//     // 1. Get auth token from cookies
//     const cookieStore = await cookies();
//     const token = cookieStore.get("authToken")?.value;

//     if (!token) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Authentication required",
//         },
//         { status: 401 }
//       );
//     }

//     // 2. Verify token and extract user ID
//     let decoded;

//     try {
//       decoded = jwt.verify(token, process.env.JWT_SECRET);
//     } catch {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid or expired token",
//         },
//         { status: 401 }
//       );
//     }

//     console.log(decoded);
//     const userId = decoded.userId ?? decoded.id;


//     if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid user ID in token",
//         },
//         { status: 401 }
//       );
//     }

//     // 3. Read payload
//     const payload = await request.json();
//     const { assessmentId, mode, answers, submittedAt } = payload;

//     if (
//       !assessmentId ||
//       !mongoose.Types.ObjectId.isValid(assessmentId) ||
//       !Array.isArray(answers) ||
//       answers.length === 0
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid assessment submission payload",
//         },
//         { status: 400 }
//       );
//     }

//     // 4. Validate answers
//     const normalizedAnswers = answers.map((answer) => {
//       if (
//         !answer.questionId ||
//         !mongoose.Types.ObjectId.isValid(answer.questionId) ||
//         !Number.isInteger(answer.selectedAnswer) ||
//         answer.selectedAnswer < -1
//       ) {
//         throw new Error("INVALID_ANSWER");
//       }

//       return {
//         questionId: answer.questionId,
//         selectedAnswer: answer.selectedAnswer,
//         selectedOption:
//           answer.selectedAnswer === -1
//             ? null
//             : answer.selectedOption ?? null,
//       };
//     });

//     // 5. Connect to MongoDB
//     await connectDB();

//     // 6. Save using Mongoose model
//     // Model must use the same MongoDB connection/database.
//     const response = await AssessmentResponse.create({
//       userId,
//       assessmentId,
//       mode: mode?.toLowerCase() ?? "coding",
//       answers: normalizedAnswers,
//       submittedAt: submittedAt ? new Date(submittedAt) : new Date(),
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Assessment response saved successfully",
//         responseId: response._id,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Assessment submission error:", error);

//     if (error.message === "INVALID_ANSWER") {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid question ID or selected answer",
//         },
//         { status: 400 }
//       );
//     }

//     if (error.name === "ValidationError" || error.name === "CastError") {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid submission data",
//           errors: error.errors
//             ? Object.values(error.errors).map((item) => item.message)
//             : undefined,
//         },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to save assessment response",
//       },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";
// import mongoose from "mongoose";

// import connectDB from "@/app/lib/mongodb";
// import AssessmentResponse from "@/app/model/testResponse";

// export const runtime = "nodejs";

// function getCorrectAnswerIndex(question) {
//   const value =
//     question.correctAnswerIndex ??
//     question.correctOptionIndex ??
//     question.answerIndex ??
//     question.correct_answer_index ??
//     question.correctAnswer ??
//     question.correctOption ??
//     question.correct_answer ??
//     question.answer;

//   if (Number.isInteger(value)) {
//     return value;
//   }

//   if (typeof value === "string") {
//     const answer = value.trim();

//     // Database stores the zero-based index as a string.
//     if (/^\d+$/.test(answer)) {
//       return Number(answer);
//     }

//     // Database stores the correct answer as text or A/B/C/D.
//     const options = Array.isArray(question.options)
//       ? question.options
//       : [];

//     const index = options.findIndex((option, i) => {
//       const text =
//         typeof option === "object" && option !== null
//           ? String(
//               option.text ??
//                 option.label ??
//                 option.value ??
//                 option.option ??
//                 ""
//             )
//           : String(option);

//       return (
//         text.trim().toLowerCase() === answer.toLowerCase() ||
//         String.fromCharCode(65 + i).toLowerCase() ===
//           answer.toLowerCase()
//       );
//     });

//     if (index !== -1) return index;
//   }

//   return null;
// }

// export async function POST(request) {
//   try {
//     // 1. Authenticate
//     const cookieStore = await cookies();
//     const token = cookieStore.get("authToken")?.value;

//     if (!token) {
//       return NextResponse.json(
//         { success: false, message: "Authentication required" },
//         { status: 401 }
//       );
//     }

//     let decoded;

//     try {
//       decoded = jwt.verify(token, process.env.JWT_SECRET);
//     } catch {
//       return NextResponse.json(
//         { success: false, message: "Invalid or expired token" },
//         { status: 401 }
//       );
//     }

//     const userId = decoded.userId ?? decoded.id ?? decoded._id;

//     if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid user ID in token" },
//         { status: 401 }
//       );
//     }

//     // 2. Validate payload
//     const payload = await request.json();
//     const { assessmentId, mode, answers, submittedAt } = payload;

//     if (
//       !assessmentId ||
//       !mongoose.Types.ObjectId.isValid(assessmentId) ||
//       !Array.isArray(answers) ||
//       answers.length === 0
//     ) {
//       return NextResponse.json(
//         { success: false, message: "Invalid submission payload" },
//         { status: 400 }
//       );
//     }

//     const normalizedMode = String(mode ?? "coding").toLowerCase();

//     if (!["coding", "aptitude"].includes(normalizedMode)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid assessment mode" },
//         { status: 400 }
//       );
//     }

//     const seenIds = new Set();

//     for (const answer of answers) {
//       if (
//         !answer.questionId ||
//         !mongoose.Types.ObjectId.isValid(answer.questionId) ||
//         !Number.isInteger(answer.selectedAnswer) ||
//         answer.selectedAnswer < -1
//       ) {
//         return NextResponse.json(
//           { success: false, message: "Invalid question ID or answer index" },
//           { status: 400 }
//         );
//       }

//       const id = String(answer.questionId);

//       if (seenIds.has(id)) {
//         return NextResponse.json(
//           { success: false, message: "Duplicate question IDs" },
//           { status: 400 }
//         );
//       }

//       seenIds.add(id);
//     }

//     // 3. Connect before accessing either database
//     await connectDB();

//     if (mongoose.connection.readyState !== 1) {
//       throw new Error("MongoDB connection is not ready");
//     }

//     // 4. Read questions from ai_question_engine
//     const questionDB = mongoose.connection.useDb(
//       "ai_question_engine",
//       { useCache: true }
//     );

//     const questionsCollection = questionDB.db.collection("questions");

//     const ids = answers.map(
//       (answer) => new mongoose.Types.ObjectId(answer.questionId)
//     );

//     const dbQuestions = await questionsCollection
//       .find({ _id: { $in: ids } })
//       .toArray();

//     const questionMap = new Map(
//       dbQuestions.map((question) => [
//         String(question._id),
//         question,
//       ])
//     );

//     if (dbQuestions.length !== answers.length) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "One or more questions were not found",
//         },
//         { status: 400 }
//       );
//     }

//     // 5. Check answers and calculate score
//     let correct = 0;
//     let wrong = 0;
//     let skipped = 0;

//     const checkedAnswers = [];

//     for (const answer of answers) {
//       const question = questionMap.get(String(answer.questionId));
//       const options = Array.isArray(question.options)
//         ? question.options
//         : [];

//       if (answer.selectedAnswer === -1) {
//         skipped++;

//         checkedAnswers.push({
//           questionId: question._id,
//           selectedAnswer: -1,
//           selectedOption: null,
//           isCorrect: false,
//         });

//         continue;
//       }

//       if (answer.selectedAnswer >= options.length) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: `Invalid option index for question ${question._id}`,
//           },
//           { status: 400 }
//         );
//       }

//       const correctIndex = getCorrectAnswerIndex(question);

//       if (
//         correctIndex === null ||
//         correctIndex < 0 ||
//         correctIndex >= options.length
//       ) {
//         console.error("Correct answer field not recognized:", {
//           questionId: String(question._id),
//           availableFields: Object.keys(question),
//         });

//         return NextResponse.json(
//           {
//             success: false,
//             message: "Correct answer is missing or invalid in the question database",
//             questionId: String(question._id),
//           },
//           { status: 500 }
//         );
//       }

//       const isCorrect = answer.selectedAnswer === correctIndex;

//       if (isCorrect) {
//         correct++;
//       } else {
//         wrong++;
//       }

//       const selectedOption = options[answer.selectedAnswer];

//       const selectedOptionText =
//         typeof selectedOption === "object" && selectedOption !== null
//           ? String(
//               selectedOption.text ??
//                 selectedOption.label ??
//                 selectedOption.value ??
//                 selectedOption.option ??
//                 ""
//             )
//           : String(selectedOption);

//       checkedAnswers.push({
//         questionId: question._id,
//         selectedAnswer: answer.selectedAnswer,
//         selectedOption: selectedOptionText,
//         isCorrect,
//       });
//     }

//     const totalQuestions = checkedAnswers.length;
//     const totalMarks = totalQuestions;
//     const obtainedMarks = correct;

//     const percentage = Number(
//       ((correct / totalQuestions) * 100).toFixed(2)
//     );

//     const score = {
//       totalQuestions,
//       correct,
//       wrong,
//       skipped,
//       obtainedMarks,
//       totalMarks,
//       percentage,
//     };

//     // 6. Save in the DEFAULT connectDB database (test)
//     // Do not register this model on ai_question_engine.
//     const response = await AssessmentResponse.create({
//       userId: new mongoose.Types.ObjectId(userId),
//       assessmentId: new mongoose.Types.ObjectId(assessmentId),
//       mode: normalizedMode,
//       answers: checkedAnswers,
//       score,
//       submittedAt: submittedAt ? new Date(submittedAt) : new Date(),
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Assessment checked and saved successfully",
//         responseId: response._id,
//         score,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Assessment submission error:", error);

//     if (
//       error.name === "ValidationError" ||
//       error.name === "CastError"
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid submission data",
//           errors: error.errors
//             ? Object.values(error.errors).map((item) => item.message)
//             : undefined,
//         },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to check or save assessment",
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import connectDB from "@/app/lib/mongodb";
import AssessmentResponse from "@/app/model/testResponse";

export const runtime = "nodejs";

function getCorrectAnswerIndex(question) {
  const options = question.options ?? question.choices ?? [];

  // Correct answer may be stored directly as an index.
  const indexFields = [
    "correctAnswerIndex",
    "correctOptionIndex",
    "answerIndex",
    "correct_answer_index",
  ];

  for (const field of indexFields) {
    const value = question[field];

    if (Number.isInteger(value) && value >= 0 && value < options.length) {
      return value;
    }

    if (
      typeof value === "string" &&
      /^\d+$/.test(value.trim()) &&
      Number(value) < options.length
    ) {
      return Number(value);
    }
  }

  // Or it may be stored as answer text / option label.
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

    const answer = String(value).trim();
    if (!answer) continue;

    // Answer may be A/B/C/D.
    if (/^[A-Z]$/i.test(answer)) {
      const index = answer.toUpperCase().charCodeAt(0) - 65;

      if (index >= 0 && index < options.length) {
        return index;
      }
    }

    // Answer may be the option's text.
    const index = options.findIndex((option) => {
      const text =
        typeof option === "string"
          ? option
          : option?.text ?? option?.label ?? option?.value;

      return (
        text != null &&
        String(text).trim().toLowerCase() === answer.toLowerCase()
      );
    });

    if (index !== -1) return index;
  }

  return null;
}

export async function POST(request) {
  try {
    await connectDB();

    if (mongoose.connection.readyState !== 1) {
      throw new Error("MongoDB connection is not ready");
    }

    // Authentication
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Authentication required" },
        { status: 401 }
      );
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId ?? decoded.id ?? decoded._id;

    if (!mongoose.isValidObjectId(userId)) {
      return NextResponse.json(
        { success: false, message: "Invalid authenticated user" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { assessmentId, answers, mode, submittedAt } = body;

    if (!mongoose.isValidObjectId(assessmentId)) {
      return NextResponse.json(
        { success: false, message: "Invalid assessmentId" },
        { status: 400 }
      );
    }

    if (!Array.isArray(answers) || answers.length === 0) {
      return NextResponse.json(
        { success: false, message: "Answers are required" },
        { status: 400 }
      );
    }

    const normalizedMode = String(mode ?? "coding").toLowerCase();

    if (!["coding", "aptitude"].includes(normalizedMode)) {
      return NextResponse.json(
        { success: false, message: "Invalid assessment mode" },
        { status: 400 }
      );
    }

    if (
      submittedAt != null &&
      Number.isNaN(new Date(submittedAt).getTime())
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid submittedAt date" },
        { status: 400 }
      );
    }

    // Validate question IDs and answers.
    const seenIds = new Set();

    for (const answer of answers) {
      if (!mongoose.isValidObjectId(answer.questionId)) {
        return NextResponse.json(
          { success: false, message: "Invalid questionId" },
          { status: 400 }
        );
      }

      const questionId = String(answer.questionId);

      if (seenIds.has(questionId)) {
        return NextResponse.json(
          { success: false, message: "Duplicate questionId found" },
          { status: 400 }
        );
      }

      seenIds.add(questionId);

      if (
        !Number.isInteger(answer.selectedAnswer) ||
        answer.selectedAnswer < -1
      ) {
        return NextResponse.json(
          { success: false, message: "Invalid selectedAnswer" },
          { status: 400 }
        );
      }
    }

    // Questions live in ai_question_engine, not the default test DB.
    const questionDB = mongoose.connection.useDb(
      "ai_question_engine",
      { useCache: true }
    );

    const questionDocs = await questionDB.db
      .collection("questions")
      .find({
        _id: {
          $in: answers.map(
            (answer) => new mongoose.Types.ObjectId(answer.questionId)
          ),
        },
      })
      .toArray();

    const questionMap = new Map(
      questionDocs.map((question) => [
        String(question._id),
        question,
      ])
    );

    if (questionMap.size !== answers.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Some submitted questions were not found",
        },
        { status: 400 }
      );
    }

    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    const checkedAnswers = answers.map((answer) => {
      const question = questionMap.get(String(answer.questionId));
      const options = question.options ?? question.choices ?? [];
      const selectedAnswer = answer.selectedAnswer;

      if (
        selectedAnswer !== -1 &&
        selectedAnswer >= options.length
      ) {
        throw new Error(
          `Selected option is out of range for question ${answer.questionId}`
        );
      }

      const correctIndex = getCorrectAnswerIndex(question);

      if (correctIndex === null) {
        throw new Error(
          `Correct answer field is missing or invalid for question ${answer.questionId}`
        );
      }

      let isCorrect = false;
      let selectedOption = null;

      if (selectedAnswer === -1) {
        skipped++;
      } else {
        const option = options[selectedAnswer];

        selectedOption =
          typeof option === "string"
            ? option
            : option?.text ?? option?.label ?? option?.value ?? null;

        isCorrect = selectedAnswer === correctIndex;

        if (isCorrect) {
          correct++;
        } else {
          wrong++;
        }
      }

      return {
        questionId: new mongoose.Types.ObjectId(answer.questionId),
        selectedAnswer,
        selectedOption,
        isCorrect,
      };
    });

    const totalQuestions = checkedAnswers.length;
    const totalMarks = totalQuestions;
    const obtainedMarks = correct;

    const score = {
      totalQuestions,
      correct,
      wrong,
      skipped,
      obtainedMarks,
      totalMarks,
      percentage:
        totalMarks > 0
          ? Number(((obtainedMarks / totalMarks) * 100).toFixed(2))
          : 0,
    };

    // Explicitly save every required field to the default test database.
    const response = await AssessmentResponse.create({
      userId: new mongoose.Types.ObjectId(userId),
      assessmentId: new mongoose.Types.ObjectId(assessmentId),
      mode: normalizedMode,
      answers: checkedAnswers,
      score,
      submittedAt: submittedAt ? new Date(submittedAt) : new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Assessment submitted successfully",
        data: {
          responseId: response._id,
          assessmentId: response.assessmentId,
          answers: response.answers,
          score: response.score,
          submittedAt: response.submittedAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Assessment submission failed:", error);

    if (
      error.name === "ValidationError" ||
      error.name === "CastError" ||
      error instanceof SyntaxError
    ) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to submit assessment",
      },
      { status: 500 }
    );
  }
}