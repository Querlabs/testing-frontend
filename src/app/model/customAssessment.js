import mongoose from "mongoose";

const customAssessmentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        company: {
            type: String,
            required: true,
            trim: true,
        },

        role: {
            type: String,
            required: true,
            trim: true,
        },

        experience: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            default: "draft",
        },

        resume: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Resume",
            required: true,
        },

        preIntel: {
            resume: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },

            jd: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },

            experience: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
        },
    },
    {
        timestamps: true,
    }
);

const CustomAssessment =
    mongoose.models.CustomAssessment ||
    mongoose.model("CustomAssessment", customAssessmentSchema);

export default CustomAssessment;