
import mongoose from "mongoose";

const ContactQuerySchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
      index: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "General Inquiry",
        "Technical Support",
        "Account Related",
        "Interview Preparation",
        "Payment & Subscription",
        "Feedback & Suggestions",
        "Other",
      ],
    },

    subject: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 1000,
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open",
      index: true,
    },

    source: {
      type: String,
      default: "Website",
    },
  },
  {
    timestamps: true,
  }
);

const ContactQuery =
  mongoose.models.ContactQuery ||
  mongoose.model("ContactQuery", ContactQuerySchema);

export default ContactQuery;
