
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { randomBytes } from "crypto";
import connectDB from "@/app/lib/mongodb";
import ContactQuery from "@/app/model/contact";

const ALLOWED_CATEGORIES = [
  "General Inquiry",
  "Technical Support",
  "Account Related",
  "Interview Preparation",
  "Payment & Subscription",
  "Feedback & Suggestions",
  "Other",
];

// Optional authentication
async function getOptionalUserId() {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("authToken")?.value 

    // Guest user
    if (!token || !process.env.JWT_SECRET) {
      return null;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const userId =
      decoded?.userId ||
      decoded?.id ||
      decoded?.userId;

    if (
      !userId ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return null;
    }

    return new mongoose.Types.ObjectId(userId);

  } catch (error) {
    // Invalid or expired token should not block guests.
    return null;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      category,
      subject,
      message,
    } = body;

    // Required field validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !category ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    // Length validation
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 200 ||
      cleanMessage.length < 10 ||
      cleanMessage.length > 1000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid field length.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Category validation
    if (!ALLOWED_CATEGORIES.includes(category)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid query category.",
        },
        { status: 400 }
      );
    }

    await connectDB();

    // Optional user authentication
    const userId = await getOptionalUserId();

    // Unique support ticket ID
    const ticketId =
      `IC-${Date.now()}-${randomBytes(3).toString("hex").toUpperCase()}`;

    const newQuery = await ContactQuery.create({
      ticketId,
      userId,
      name: cleanName,
      email: cleanEmail,
      category,
      subject: cleanSubject,
      message: cleanMessage,
      status: "Open",
      source: "Website",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your query has been submitted successfully.",
        data: {
          ticketId: newQuery.ticketId,
          status: newQuery.status,
        },
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
