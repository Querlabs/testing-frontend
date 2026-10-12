import mongoose from "mongoose";

const JobDescriptionSchema = new mongoose.Schema({
  title: String,
  overview: String,
  responsibilities: [String],
  minimumQualifications: [String],
  preferredQualifications: [String],
  experience: String,
  notice: String,
}, { _id: false });

const RoundSchema = new mongoose.Schema({
  order: Number,
  name: String,
  durationMinutes: Number,
  topics: [String],
  format: String,
  candidateTasks: [String],
  evaluationCriteria: [String],
  difficulty: String,
  passCriteria: String,
}, { _id: false });

const InterviewTemplateSchema = new mongoose.Schema({
  company: { type: String, required: true },
  domain: { type: String, required: true },
  level: { type: String, required: true },
  jobDescription: { type: JobDescriptionSchema, required: true },
  rounds: { type: [RoundSchema], required: true },
  templateNote: String,
  status: {
    type: String,
    enum: ["draft", "published", "archived"],
    default: "draft",
  },
  version: { type: Number, default: 1 },
}, { timestamps: true });

InterviewTemplateSchema.index(
  { company: 1, domain: 1, level: 1 },
  { unique: true }
);
const InterviewTemplate = mongoose.model("InterviewTemplate", InterviewTemplateSchema);
export default InterviewTemplate
  