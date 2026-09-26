import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/app/lib/mongodb";
import User from "@/app/model/user";

import { sendOTPEmail } from "@/app/lib/sendMailUtility";
import { generateOTP, getOTPExpiry } from "@/app/lib/otp";

// ========================================
// SIGNUP
// ========================================

export async function signupController(body) {
  try {
    const {
      fullName,
      email,
      phone,
      password,
      confirmPassword,
      currentJobRole,
      yearsOfExperience,
    } = body;

    // -----------------------------
    // Validation
    // -----------------------------

    if (
      !fullName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword ||
      !currentJobRole ||
      !yearsOfExperience
    ) {
      return {
        success: false,
        status: 400,
        message: "All fields are required",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        status: 400,
        message: "Password must be at least 6 characters",
      };
    }

    if (password !== confirmPassword) {
      return {
        success: false,
        status: 400,
        message: "Passwords do not match",
      };
    }

    const allowedExperience = [
      "0-1",
      "1-3",
      "3-5",
      "5+",
    ];

    if (!allowedExperience.includes(yearsOfExperience)) {
      return {
        success: false,
        status: 400,
        message: "Invalid experience range",
      };
    }

    // -----------------------------
    // DB connection
    // -----------------------------

    await connectDB();

    const normalizedEmail = email.toLowerCase().trim();

    // -----------------------------
    // Check existing user
    // -----------------------------

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return {
        success: false,
        status: 409,
        message: "User already exists with this email",
      };
    }

    // -----------------------------
    // Hash password
    // -----------------------------

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    // -----------------------------
    // Generate OTP
    // -----------------------------

    const otp = generateOTP();

    const hashedOTP = await bcrypt.hash(
      otp,
      10
    );

    const otpExpiry = getOTPExpiry();

    // -----------------------------
    // Create user
    // -----------------------------

    const user = await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password: hashedPassword,
      currentJobRole: currentJobRole.trim(),
      yearsOfExperience,
      onBoarded:false,
      onboardingOTPVerification: false,
      onboardingOTP: hashedOTP,
      onboardingOTPExpiresAt: otpExpiry,
    });

    // -----------------------------
    // Send OTP Email
    // -----------------------------

    try {
      await sendOTPEmail(
        normalizedEmail,
        otp
      );
    } catch (emailError) {
      console.error(
        "OTP EMAIL ERROR:",
        emailError
      );

      // Remove user if email failed
      await User.findByIdAndDelete(user._id);

      return {
        success: false,
        status: 500,
        message:
          "Unable to send verification email. Please try again.",
      };
    }

    // -----------------------------
    // Response
    // -----------------------------

    return {
      success: true,
      status: 201,
      message:
        "Signup successful. OTP sent to your email.",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        onboardingOTPVerification:
          user.onboardingOTPVerification,
      },
    };
  } catch (error) {
    console.error(
      "Signup Controller Error:",
      error
    );

    return {
      success: false,
      status: 500,
      message: "Internal server error",
    };
  }
}


export async function POST(request) {
  try {
    const body = await request.json();

    const result = await signupController(body);

    return NextResponse.json(
      {
        success: result.success,
        message: result.message,
        ...(result.user && {
          user: result.user,
        }),
      },
      {
        status: result.status,
      }
    );
  } catch (error) {
    console.error("Signup API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}