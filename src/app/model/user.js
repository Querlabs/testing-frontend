import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    currentJobRole: {
      type: String,
      required: true,
      trim: true,
    },

    yearsOfExperience: {
      type: String,
      required: true,
      enum: ["0-1", "1-3", "3-5", "5+"],
    },

    // OTP verification
    onboardingOTPVerification: {
      type: Boolean,
      default: false,
    },

    onboardingOTP: {
      type: String,
      default: null,
    },

    onboardingOTPExpiresAt: {
      type: Date,
      default: null,
    },
    onBoarded : {
      type: Boolean,
      default:false
    },
    targetJobRole: {
      type: String,
      trim: true,
      default: null,
    },

    resumes: [
      {
        name: {
          type: String,
          required: true,
        },

        s3Key: {
          type: String,
          required: true,
        },

        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    targetCompanies: {
      type: [String],
      default: [],
    },

    targetExperience: {
      type: String,
      enum: ["1-2 Years", "2-3 Years", "3-5 Years", "5+ Years"],
      default: null,
    },

    onBoarded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;