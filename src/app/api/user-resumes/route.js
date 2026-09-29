// app/api/user/resumes/route.js

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import User from "@/app/model/user";
import connectDB from "@/app/lib/mongodb";

export async function GET() {
    try {
        const cookieStore = await cookies();

        const authToken = cookieStore.get("authToken")?.value;

        if (!authToken) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Authentication token not found",
                },
                { status: 401 }
            );
        }

        const decoded = jwt.verify(
            authToken,
            process.env.JWT_SECRET
        );

        const userId = decoded.userId;

        if (!userId) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User ID not found in token",
                },
                { status: 401 }
            );
        }

        await connectDB();

        const user = await User.findById(userId).select("resumes");

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                resumes: user.resumes || [],
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Get User Resumes Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
            },
            { status: 500 }
        );
    }
}