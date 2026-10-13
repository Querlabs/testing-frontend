import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 160,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 100,
      match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    },

    excerpt: {
      type: String,
      default: "",
      maxlength: 300,
    },

    content: {
      type: String,
      required: true,
    },

    contentText: {
      type: String,
      default: "",
    },

    coverImage: {
      type: String,
      default: "",
      maxlength: 2048,
    },

    coverAlt: {
      type: String,
      default: "",
      maxlength: 200,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Technology",
        "Business",
        "Career",
        "Productivity",
        "Design",
        "Education",
        "Finance",
        "Other",
      ],
    },

    tags: {
      type: [String],
      default: [],
      validate: {
        validator: (tags) =>
          tags.length <= 20 &&
          tags.every((tag) => tag.length <= 50),
        message: "Maximum 20 tags allowed, each up to 50 characters.",
      },
    },

    author: {
      type: String,
      default: "",
      trim: true,
      maxlength: 100,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },

    readingTime: {
      type: Number,
      default: 1,
      min: 1,
    },

    wordCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    seo: {
      metaTitle: {
        type: String,
        default: "",
        maxlength: 100,
      },

      metaDescription: {
        type: String,
        default: "",
        maxlength: 200,
      },

      focusKeyword: {
        type: String,
        default: "",
        maxlength: 150,
      },

      canonicalUrl: {
        type: String,
        default: "",
        maxlength: 2048,
      },
    },

    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Blog = mongoose.model("Blog", BlogSchema);
export default Blog
  