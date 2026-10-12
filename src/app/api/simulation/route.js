import { NextResponse } from "next/server";
import InterviewTemplate from "@/app/model/simulations";
import connectDB from "@/app/lib/mongodb";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const filter = {
      status: searchParams.get("status") || "published",
    };

    const company = searchParams.get("company");
    const domain = searchParams.get("domain");
    const level = searchParams.get("level");

    if (company) {
      filter.company = {
        $regex: `^${escapeRegex(company.trim())}$`,
        $options: "i",
      };
    }

    if (domain) filter.domain = domain;
    if (level) filter.level = level;

    const templates = await InterviewTemplate.find(filter)
      .sort({ company: 1, domain: 1, level: 1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: templates.length,
      data: templates,
    });
  } catch (error) {
    console.error("Interview templates API:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch templates." },
      { status: 500 }
    );
  }
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}