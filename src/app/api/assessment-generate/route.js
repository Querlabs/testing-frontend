
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ---------------- CONFIGURATION ----------------

const DB_NAME = "ai_question_engine";
const QUESTIONS_COLLECTION = "questions";
const ASSESSMENTS_COLLECTION = "assessments";

const QUESTIONS_PER_ASSESSMENT = 30;

const CODING_ROLES = [
  "core-sde-1",
  "core-sde-2",
  "full-stack-developer",
  "backend-engineer",
  "frontend-engineer",
  "data-engineer",
  "ai-ml-engineer",
  "devops-cloud-engineer",
  "java-spring-boot-developer",
];

const DIFFICULTIES = ["easy", "medium", "hard"];

// Reuse MongoDB connection across requests.
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

// ---------------- HELPER FUNCTIONS ----------------

// Fisher-Yates shuffle.
function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

// Create complete batches of 30.
// Incomplete final batch is skipped.
function createBatches(questions) {
  const shuffled = shuffleArray(questions);
  const batches = [];

  for (
    let i = 0;
    i + QUESTIONS_PER_ASSESSMENT <= shuffled.length;
    i += QUESTIONS_PER_ASSESSMENT
  ) {
    batches.push(
      shuffled.slice(i, i + QUESTIONS_PER_ASSESSMENT)
    );
  }

  return batches;
}

// Count actual difficulty distribution.
function getDifficultyCounts(questions) {
  const counts = {
    easy: 0,
    medium: 0,
    hard: 0,
  };

  for (const question of questions) {
    const difficulty = String(
      question.difficulty || ""
    ).toLowerCase();

    if (DIFFICULTIES.includes(difficulty)) {
      counts[difficulty]++;
    }
  }

  return counts;
}

// ---------------- CORE GENERATOR ----------------

async function createAssessments({
  questionsCollection,
  assessmentsCollection,
  type,
  role,
  status = "all",
  runId,
}) {
  // Role-based filtering happens here.
  const filter = { type, role };

  // By default, all statuses are included.
  // Pass status: "approved" to include only approved questions.
  if (status !== "all") {
    filter.status = status;
  }

  const questions = await questionsCollection
    .find(filter, {
      projection: {
        _id: 1,
        difficulty: 1,
      },
    })
    .toArray();

  // Validate difficulty data before generating assessments.
  const invalidDifficultyQuestions = questions.filter(
    (question) =>
      !DIFFICULTIES.includes(
        String(question.difficulty || "").toLowerCase()
      )
  ).length;

  if (invalidDifficultyQuestions > 0) {
    throw new Error(
      `${type}/${role}: ${invalidDifficultyQuestions} questions have invalid difficulty values.`
    );
  }

  const batches = createBatches(questions);
  const now = new Date();

  const documents = batches.map((batch, index) => ({
    title:
      type === "aptitude"
        ? `Aptitude Assessment ${index + 1}`
        : `${role} Assessment ${index + 1}`,

    type,
    role,

    totalQuestions: batch.length,

    difficultyCounts: getDifficultyCounts(batch),

    // Store question IDs only, not full question documents.
    questions: batch.map((question) => question._id),

    generationRunId: runId,

    created_at: now,
    updated_at: now,
  }));

  if (documents.length > 0) {
    await assessmentsCollection.insertMany(documents);
  }

  return {
    type,
    role,
    availableQuestions: questions.length,
    assessmentsCreated: documents.length,
    unusedQuestions:
      questions.length % QUESTIONS_PER_ASSESSMENT,
  };
}

// ---------------- FUNCTION 1: APTITUDE ----------------

async function generateAptitudeAssessments(
  questionsCollection,
  assessmentsCollection,
  status,
  runId
) {
  return createAssessments({
    questionsCollection,
    assessmentsCollection,
    type: "aptitude",
    role: "aptitude",
    status,
    runId,
  });
}

// ---------------- FUNCTION 2: CODING ----------------

async function generateCodingAssessments(
  questionsCollection,
  assessmentsCollection,
  status,
  runId
) {
  const results = [];

  for (const role of CODING_ROLES) {
    const result = await createAssessments({
      questionsCollection,
      assessmentsCollection,
      type: "coding",
      role,
      status,
      runId,
    });

    results.push(result);
  }

  return results;
}

// ---------------- POST API ----------------

export async function POST(request) {
  try {
    // Protect this endpoint with a server-side secret.
    const secret = process.env.ASSESSMENT_GENERATOR_SECRET;

    if (!secret) {
      console.error("ASSESSMENT_GENERATOR_SECRET is missing.");

      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      );
    }

    if (
      request.headers.get("x-generator-secret") !== secret
    ) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const { action, status = "all" } = body;

    if (!["aptitude", "coding", "all"].includes(action)) {
      return NextResponse.json(
        {
          success: false,
          message: 'action must be "aptitude", "coding", or "all".',
        },
        { status: 400 }
      );
    }

    if (
      !["all", "approved"].includes(status)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'status must be "all" or "approved".',
        },
        { status: 400 }
      );
    }

    const db = await getDatabase();

    const questionsCollection = db.collection(
      QUESTIONS_COLLECTION
    );

    const assessmentsCollection = db.collection(
      ASSESSMENTS_COLLECTION
    );

    const runId = randomUUID();
    const results = [];

    if (action === "aptitude" || action === "all") {
      const result = await generateAptitudeAssessments(
        questionsCollection,
        assessmentsCollection,
        status,
        runId
      );

      results.push(result);
    }

    if (action === "coding" || action === "all") {
      const codingResults = await generateCodingAssessments(
        questionsCollection,
        assessmentsCollection,
        status,
        runId
      );

      results.push(...codingResults);
    }

    const totalAssessments = results.reduce(
      (sum, result) => sum + result.assessmentsCreated,
      0
    );

    return NextResponse.json({
      success: true,
      message: "Assessment generation completed.",
      runId,
      action,
      statusFilter: status,
      totalAssessments,
      results,
    });
  } catch (error) {
    console.error("Assessment generation failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Assessment generation failed.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
