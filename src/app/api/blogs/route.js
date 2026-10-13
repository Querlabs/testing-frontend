import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";

import connectDB from "@/app/lib/mongodb";
import Blog from "@/app/model/blog";

export const runtime = "nodejs";

const ALLOWED_CATEGORIES = [
  "Technology",
  "Business",
  "Career",
  "Productivity",
  "Design",
  "Education",
  "Finance",
  "Other",
];

function cleanImageUrl(value) {
  if (!value) return "";

  try {
    const url = new URL(value);

    if (!["https:", "http:"].includes(url.protocol)) {
      return null;
    }

    return url.href;
  } catch {
    return null;
  }
}

function cleanCanonicalUrl(value) {
  if (!value) return "";

  try {
    const url = new URL(value);

    if (!["https:", "http:"].includes(url.protocol)) {
      return null;
    }

    return url.href;
  } catch {
    return null;
  }
}

function sanitizeBlogContent(html) {
  return sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "h1",
      "h2",
      "img",
      "u",
      "s",
      "hr",
    ],

    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      "*": ["class"],
    },

    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: {
      img: ["http", "https"],
    },

    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        rel: "noopener noreferrer",
      }),
    },
  });
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      title,
      slug,
      excerpt = "",
      content,
      coverImage = "",
      coverAlt = "",
      category,
      tags = [],
      author = "",
      status = "draft",
      readingTime = 1,
      wordCount = 0,
      seo = {},
    } = body;

    // Required fields
    if (
      typeof title !== "string" ||
      !title.trim() ||
      title.trim().length > 160
    ) {
      return NextResponse.json(
        { success: false, message: "Valid title is required." },
        { status: 400 }
      );
    }

    if (
      typeof slug !== "string" ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ||
      slug.length > 100
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid URL slug." },
        { status: 400 }
      );
    }

    if (
      typeof content !== "string" ||
      !content.trim() ||
      content.length > 2_000_000
    ) {
      return NextResponse.json(
        { success: false, message: "Valid article content is required." },
        { status: 400 }
      );
    }

    if (!ALLOWED_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { success: false, message: "Invalid blog category." },
        { status: 400 }
      );
    }

    if (!["draft", "published"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid publishing status." },
        { status: 400 }
      );
    }

    if (
      typeof excerpt !== "string" ||
      excerpt.length > 300 ||
      typeof author !== "string" ||
      author.length > 100 ||
      typeof coverAlt !== "string" ||
      coverAlt.length > 200
    ) {
      return NextResponse.json(
        { success: false, message: "One or more fields exceed allowed limits." },
        { status: 400 }
      );
    }

    if (
      status === "published" &&
      (!author.trim() || !title.trim() || !excerpt.trim())
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Published blogs require an author and excerpt.",
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(tags) || tags.length > 20) {
      return NextResponse.json(
        { success: false, message: "Invalid tags. Maximum 20 allowed." },
        { status: 400 }
      );
    }

    if (
      tags.some(
        (tag) =>
          typeof tag !== "string" ||
          tag.trim().length === 0 ||
          tag.trim().length > 50
      )
    ) {
      return NextResponse.json(
        { success: false, message: "Each tag must contain 1–50 characters." },
        { status: 400 }
      );
    }

    const safeCoverImage = cleanImageUrl(coverImage);
    const safeCanonicalUrl = cleanCanonicalUrl(
      seo?.canonicalUrl || ""
    );

    if (safeCoverImage === null) {
      return NextResponse.json(
        { success: false, message: "Invalid cover image URL." },
        { status: 400 }
      );
    }

    if (safeCanonicalUrl === null) {
      return NextResponse.json(
        { success: false, message: "Invalid canonical URL." },
        { status: 400 }
      );
    }

    const safeContent = sanitizeBlogContent(content);

    // Extract readable text from sanitized HTML.
    const contentText = sanitizeHtml(safeContent, {
      allowedTags: [],
      allowedAttributes: {},
    }).replace(/\s+/g, " ").trim();

    if (!contentText) {
      return NextResponse.json(
        { success: false, message: "Article must contain readable text." },
        { status: 400 }
      );
    }

    const safeMetaTitle =
      typeof seo?.metaTitle === "string"
        ? seo.metaTitle.trim().slice(0, 100)
        : "";

    const safeMetaDescription =
      typeof seo?.metaDescription === "string"
        ? seo.metaDescription.trim().slice(0, 200)
        : "";

    const safeFocusKeyword =
      typeof seo?.focusKeyword === "string"
        ? seo.focusKeyword.trim().slice(0, 150)
        : "";

    const existingBlog = await Blog.findOne({ slug })
      .select("_id")
      .lean();

    if (existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "This slug already exists. Please choose another slug.",
        },
        { status: 409 }
      );
    }

    const blog = await Blog.create({
      title: title.trim(),
      slug,
      excerpt: excerpt.trim(),
      content: safeContent,
      contentText,
      coverImage: safeCoverImage,
      coverAlt: coverAlt.trim(),
      category,
      tags: [...new Set(tags.map((tag) => tag.trim()))],
      author: author.trim(),
      status,
      readingTime: Math.max(
        1,
        Math.ceil(contentText.split(/\s+/).filter(Boolean).length / 200)
      ),
      wordCount: contentText.split(/\s+/).filter(Boolean).length,
      seo: {
        metaTitle: safeMetaTitle,
        metaDescription: safeMetaDescription,
        focusKeyword: safeFocusKeyword,
        canonicalUrl: safeCanonicalUrl,
      },
      publishedAt: status === "published" ? new Date() : null,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          status === "published"
            ? "Blog published successfully."
            : "Blog draft saved successfully.",
        blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("BLOG_CREATE_ERROR:", error);

    if (error?.code === 11000) {
      return NextResponse.json(
        { success: false, message: "This blog slug already exists." },
        { status: 409 }
      );
    }

    if (error?.name === "ValidationError") {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Unable to save blog." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({ status: "published" })
      .sort({ publishedAt: -1, createdAt: -1 })
      .select(
        "title slug excerpt content contentText coverImage coverAlt category tags author readingTime publishedAt seo"
        )
      .lean();

    return NextResponse.json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    console.error("Fetch blogs error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      { status: 500 }
    );
  }
}