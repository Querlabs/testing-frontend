import { NextResponse } from "next/server";
import Blog from "@/app/model/blog";
import connectDB from "@/app/lib/mongodb";
export async function POST(request) {
    try {
        await connectDB();

        const { slug } = await request.json();

        if (!slug) {
            return NextResponse.json(
                { success: false, message: "Blog slug is required" },
                { status: 400 }
            );
        }

        const blog = await Blog.findOne({
            slug,
            // status: "published"
        }).lean();

        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                blog
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Fetch blog error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch blog"
            },
            { status: 500 }
        );
    }
}