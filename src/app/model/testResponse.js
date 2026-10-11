// import mongoose from "mongoose";

// const answerSchema = new mongoose.Schema(
//   {
//     questionId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Question",
//       required: true,
//     },

//     // -1 = skipped, 0+ = selected option index
//     selectedAnswer: {
//       type: Number,
//       required: true,
//       min: -1,
//     },

//     selectedOption: {
//       type: String,
//       default: null,
//     },

//     // Whether the selected answer is correct
//     isCorrect: {
//       type: Boolean,
//       default: null,
//     },
//   },
//   { _id: false }
// );

// const scoreSchema = new mongoose.Schema(
//   {
//     totalQuestions: {
//       type: Number,
//       required: true,
//       min: 0,
//       default: 0,
//     },

//     correct: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     wrong: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     skipped: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     obtainedMarks: {
//       type: Number,
//       default: 0,
//     },

//     totalMarks: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     percentage: {
//       type: Number,
//       default: 0,
//       min: 0,
//       max: 100,
//     },
//   },
//   { _id: false }
// );

// const assessmentResponseSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//       index: true,
//     },

//     assessmentId: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       index: true,
//     },

//     mode: {
//       type: String,
//       enum: ["coding", "aptitude"],
//       default: "coding",
//     },

//     answers: {
//       type: [answerSchema],
//       required: true,
//       validate: {
//         validator: (answers) => answers.length > 0,
//         message: "At least one answer is required.",
//       },
//     },

//     score: {
//       type: scoreSchema,
//       default: () => ({}),
//     },

//     submittedAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true,
//     collection: "assessment_responses",
//   }
// );

// const AssessmentResponse =
//   mongoose.models.AssessmentResponse ||
//   mongoose.model("AssessmentResponse", assessmentResponseSchema);

// export default AssessmentResponse;

import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    selectedAnswer: {
      type: Number,
      required: true,
      min: -1,
    },
    selectedOption: {
      type: String,
      default: null,
    },
    isCorrect: {
      type: Boolean,
      default: null,
    },
  },
  { _id: false }
);

const scoreSchema = new mongoose.Schema(
  {
    totalQuestions: { type: Number, default: 0, min: 0 },
    correct: { type: Number, default: 0, min: 0 },
    wrong: { type: Number, default: 0, min: 0 },
    skipped: { type: Number, default: 0, min: 0 },
    obtainedMarks: { type: Number, default: 0 },
    totalMarks: { type: Number, default: 0, min: 0 },
    percentage: { type: Number, default: 0, min: 0, max: 100 },
  },
  { _id: false }
);

const assessmentResponseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    assessmentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    mode: {
      type: String,
      enum: ["coding", "aptitude"],
      default: "coding",
    },
    answers: {
      type: [answerSchema],
      required: true,
      validate: {
        validator: (answers) => answers.length > 0,
        message: "At least one answer is required.",
      },
    },
    score: {
      type: scoreSchema,
      default: () => ({}),
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: "assessment_responses",
  }
);

// Reuse the model only when its cached schema has the required fields.
// This also handles stale models during Next.js development hot reload.
let AssessmentResponse = mongoose.models.AssessmentResponse;

if (
  AssessmentResponse &&
  (
    !AssessmentResponse.schema.path("score") ||
    !AssessmentResponse.schema.path("answers.isCorrect")
  )
) {
  mongoose.deleteModel("AssessmentResponse");
  AssessmentResponse = undefined;
}

if (!AssessmentResponse) {
  AssessmentResponse = mongoose.model(
    "AssessmentResponse",
    assessmentResponseSchema
  );
}

export default AssessmentResponse;