
import mongoose from "mongoose";

const SupportOptionSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    nextNodeId: {
      type: String,
      default: null,
    },
  },
  { _id: true }
);

const SupportNodeSchema = new mongoose.Schema(
  {
    nodeId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    answer: {
      type: [String],
      default: [],
    },
    question: {
      type: String,
      default: "",
    },
    options: {
      type: [SupportOptionSchema],
      default: [],
    },
    type: {
      type: String,
      enum: ["question", "solution", "contact", "end"],
      default: "question",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const SupportFlowSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "CrackMate Support",
    },
    startNodeId: {
      type: String,
      required: true,
    },
    nodes: {
      type: [SupportNodeSchema],
      default: [],
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    version: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const SupportFlow =
  mongoose.models.SupportFlow ||
  mongoose.model("SupportFlow", SupportFlowSchema);

export default SupportFlow;
