"use client";

import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

// ==========================================
// MOCK DATA
// Replace with API response later
// ==========================================

const currentWeaknessesData = {
  weaknesses: [
    {
      id: 1,
      category: "Technical Knowledge",
      title: "System Design Fundamentals",
      description:
        "You struggle to explain scalability and component trade-offs clearly.",
      priority: "High",
      impact:
        "Technical interviewers may see this as a gap in senior-level reasoning.",
    },
    {
      id: 2,
      category: "Communication & Explanation",
      title: "Answer Structure",
      description:
        "Your answers often jump between ideas without a clear structure.",
      priority: "Medium",
      impact:
        "Makes technically correct answers harder for interviewers to follow.",
    },
    {
      id: 3,
      category: "Problem Solving / DSA",
      title: "Optimization Approach",
      description:
        "You identify a working solution but take too long to reach the optimal approach.",
      priority: "Medium",
      impact:
        "May reduce performance under interview time pressure.",
    },
  ],
};


// ==========================================
// Priority Configuration
// ==========================================

const priorityStyles = {
  High: {
    badge: "bg-red-50 text-red-600 border-red-100",
    dot: "bg-red-500",
  },

  Medium: {
    badge: "bg-orange-50 text-orange-600 border-orange-100",
    dot: "bg-orange-500",
  },

  Low: {
    badge: "bg-blue-50 text-blue-600 border-blue-100",
    dot: "bg-blue-500",
  },
};


// ==========================================
// Weakness Card
// ==========================================

function WeaknessCard({
  weakness,
  isTopPriority = false,
  onImprove = () => {},
}) {
  const priority = priorityStyles[weakness.priority] || priorityStyles.Low;

  return (
    <div
      className={`
        rounded-[20px] border p-5 transition-all duration-200
        ${
          isTopPriority
            ? "border-blue-100 bg-blue-50/40"
            : "border-slate-200 bg-white hover:border-slate-300"
        }
      `}
    >

      {/* Top Row */}
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0">

          {/* Category */}
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            {weakness.category}
          </p>

          {/* Title */}
          <h3 className="text-base font-bold text-slate-950 mt-1.5">
            {weakness.title}
          </h3>

        </div>


        {/* Priority */}
        <span
          className={`
            shrink-0 inline-flex items-center gap-1.5
            px-2.5 py-1 rounded-full border
            text-[10px] font-bold uppercase tracking-wide
            ${priority.badge}
          `}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${priority.dot}`}
          />

          {weakness.priority}
        </span>

      </div>


      {/* Description */}
      <p className="text-sm text-slate-500 leading-5 mt-3">
        {weakness.description}
      </p>


      {/* Why It Matters */}
      <div className="mt-4 pl-3 border-l-2 border-slate-200">

        <p className="text-[11px] font-semibold text-slate-700">
          Why it matters
        </p>

        <p className="text-xs text-slate-500 leading-5 mt-0.5">
          {weakness.impact}
        </p>

      </div>


      {/* CTA */}
      <div className="mt-5 flex justify-end">

        <button
          onClick={() => onImprove(weakness)}
          className={`
            inline-flex items-center gap-1.5
            px-3.5 py-2 rounded-xl
            text-xs font-semibold
            transition-all duration-200
            ${
              isTopPriority
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-100"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }
          `}
        >
          {isTopPriority ? "Start Practice" : "Improve"}

          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>

    </div>
  );
}


// ==========================================
// Empty State
// ==========================================

function EmptyWeaknesses({ onExploreProgress = () => {} }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm p-7">

      <div className="flex items-start gap-4">

        <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        </div>


        <div>

          <h3 className="text-base font-bold text-slate-950">
            You're doing well
          </h3>

          <p className="text-sm text-slate-500 leading-6 mt-1 max-w-lg">
            No significant weaknesses have been identified from your
            recent assessments.
          </p>

          <button
            onClick={onExploreProgress}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Explore Your Progress
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
}


// ==========================================
// Main Component
// ==========================================

export default function CurrentWeaknesses({
  data = currentWeaknessesData,
  onViewAll = () => {},
  onImprove = () => {},
  onExploreProgress = () => {},
}) {

  const weaknesses = data?.weaknesses || [];


  // ========================================
  // Empty State
  // ========================================

  if (weaknesses.length === 0) {
    return (
      <EmptyWeaknesses
        onExploreProgress={onExploreProgress}
      />
    );
  }


  return (
    <div className="w-full">

      <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm overflow-hidden">

        {/* ====================================
            HEADER
        ==================================== */}

        <div className="px-6 py-5 border-b border-slate-100">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div>

              <h3 className="text-sm font-bold text-slate-950">
                Current Weaknesses
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Areas that are currently holding back your interview readiness
              </p>

            </div>


            <button
              onClick={onViewAll}
              className="self-start sm:self-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              View All
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>


        {/* ====================================
            WEAKNESSES
        ==================================== */}

        <div className="p-6">

          <div className="space-y-4">

            {weaknesses.slice(0, 3).map((weakness, index) => (
              <WeaknessCard
                key={weakness.id}
                weakness={weakness}
                isTopPriority={
                  index === 0 &&
                  weakness.priority === "High"
                }
                onImprove={onImprove}
              />
            ))}

          </div>


          {/* Bottom Insight */}
          <div className="mt-5 flex items-start gap-3 px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-100">

            <AlertCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />

            <p className="text-xs text-slate-500 leading-5">
              Focus on your highest-priority weakness first.
              Consistent improvement here can have the biggest
              impact on your interview readiness.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}