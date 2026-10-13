import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Blog from "@/app/model/blog";
export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({ status: "published" })
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(3)
      .select(
        "title slug excerpt content contentText coverImage coverAlt category author readingTime publishedAt"
      )
      .lean();

    return NextResponse.json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    console.error("Fetch latest blogs error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch latest blogs",
      },
      { status: 500 }
    );
  }
}