import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import User from "@/app/model/user";
import bcrypt from "bcryptjs";
import { generateToken } from "@/app/lib/tokenUtility";
import { setAuthCookie } from "@/app/lib/authCookie";
// ========================================
// VERIFY ONBOARDING OTP
// ========================================

export async function verifyOnboardingOTPController(body) {
  try {
    const { email, otp } = body;

    if (!email || !otp) {
      return {
        success: false,
        status: 400,
        message: "Email and OTP are required",
      };
    }

    await connectDB();

    const normalizedEmail = email
      .toLowerCase()
      .trim();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return {
        success: false,
        status: 404,
        message: "User not found",
      };
    }

    // Already verified
    if (user.onboardingOTPVerification) {
      return {
        success: true,
        status: 200,
        message: "Email already verified",
      };
    }

    // OTP missing
    if (
      !user.onboardingOTP ||
      !user.onboardingOTPExpiresAt
    ) {
      return {
        success: false,
        status: 400,
        message: "OTP not found. Please request a new OTP.",
      };
    }

    // OTP expired
    if (
      new Date() >
      new Date(user.onboardingOTPExpiresAt)
    ) {
      return {
        success: false,
        status: 400,
        message: "OTP has expired. Please request a new OTP.",
      };
    }

    // Compare OTP
    const isValidOTP = await bcrypt.compare(
      otp.toString(),
      user.onboardingOTP
    );

    if (!isValidOTP) {
      return {
        success: false,
        status: 400,
        message: "Invalid OTP",
      };
    }

    // -----------------------------
    // Verification successful
    // -----------------------------

    user.onboardingOTPVerification = true;

    // OTP ko remove kar do
    user.onboardingOTP = null;
    user.onboardingOTPExpiresAt = null;

    const token = generateToken(user._id);
    const setCookies = setAuthCookie(token)

    await user.save();

    return {
      success: true,
      status: 200,
      message: "Email verified successfully",
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
      "Verify OTP Error:",
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

    const result =
      await verifyOnboardingOTPController(body);

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
    console.error(
      "Verify OTP API Error:",
      error
    );

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