import connectDB from "@/app/lib/mongodb";
import User from "@/app/model/user";
import { verifyToken } from "@/app/lib/tokenUtility";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function autoLoginController() {
  try {
    // Get cookies
    const cookieStore = await cookies();

    const token = cookieStore.get("authToken")?.value;

    // No token
    if (!token) {
      return {
        success: false,
        status: 401,
        message: "Not authenticated",
      };
    }

    // Verify JWT
    const decoded = verifyToken(token);
    console.log(decoded)
    // Connect DB
    await connectDB();

    // Find user
    const user = await User.findById(decoded.userId).select(
      "-password -onboardingOTP -onboardingOTPExpiresAt"
    );

    // User doesn't exist
    if (!user) {
      return {
        success: false,
        status: 401,
        message: "User not found",
      };
    }

    // Success
    return {
      success: true,
      status: 200,
      message: "Auto login successful",

      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        currentJobRole: user.currentJobRole,
        yearsOfExperience: user.yearsOfExperience,
        onboardingOTPVerification:
          user.onboardingOTPVerification,
        onBoarded:user.onBoarded
      },
    };
  } catch (error) {
    console.error("Auto Login Controller Error:", error);

    return {
      success: false,
      status: 401,
      message: "Invalid or expired session",
    };
  }
}

export async function GET() {
  try {
    const result = await autoLoginController();

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
    console.error("Auto Login API Error:", error);

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