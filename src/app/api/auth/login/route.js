import { NextResponse } from "next/server";

import { generateToken } from "@/app/lib/tokenUtility";
import { setAuthCookie } from "@/app/lib/authCookie";
import connectDB from "@/app/lib/mongodb";
import User from "@/app/model/user";
import bcrypt from "bcryptjs";
// ========================================
// LOGIN
// ========================================

export async function loginController(body) {
  try {
    const { email, password } = body;

    // -----------------------------
    // Validation
    // -----------------------------

    if (!email || !password) {
      return {
        success: false,
        status: 400,
        message: "Email and password are required",
      };
    }

    await connectDB();

    const normalizedEmail = email.toLowerCase().trim();

    // -----------------------------
    // Find user
    // -----------------------------

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return {
        success: false,
        status: 401,
        message: "Invalid email or password",
      };
    }

    // -----------------------------
    // Check password
    // -----------------------------

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return {
        success: false,
        status: 401,
        message: "Invalid email or password",
      };
    }

    // -----------------------------
    // Check email verification
    // -----------------------------

    if (!user.onboardingOTPVerification) {
      return {
        success: false,
        status: 403,
        message: "Please verify your email first",
        emailVerificationRequired: true,
      };
    }

    // -----------------------------
    // Success
    // -----------------------------

    return {
      success: true,
      status: 200,
      message: "Login successful",

      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        currentJobRole: user.currentJobRole,
        yearsOfExperience: user.yearsOfExperience,
        onBoarded: user.onBoarded,
        onboardingOTPVerification:
          user.onboardingOTPVerification,
      },
    };
  } catch (error) {
    console.error("Login Controller Error:", error);

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

    const result = await loginController(body);

    console.log("re", result);

    // Login failed → immediately return response
    if (!result.success) {
      return NextResponse.json(
        {
          success: result.success,
          message: result.message,

          ...(result.emailVerificationRequired && {
            emailVerificationRequired:
              result.emailVerificationRequired,
          }),

          ...(result.onBoarded !== undefined && {
            onBoarded: result.onBoarded,
          }),
        },
        {
          status: result.status,
        }
      );
    }

    // Login successful → generate token
    const token = generateToken(result.user.id);

    await setAuthCookie(token);

    return NextResponse.json(
      {
        success: result.success,
        message: result.message,

        ...(result.user && {
          user: result.user,
        }),

        ...(result.onBoarded !== undefined && {
          onBoarded: result.onBoarded,
        }),
      },
      {
        status: result.status,
      }
    );
  } catch (error) {
    console.error("Login API Error:", error);

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