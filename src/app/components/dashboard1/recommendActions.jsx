"use client";

import {
  ArrowRight,
  Sparkles,
  Clock3,
} from "lucide-react";

// ==========================================
// MOCK DATA
// Replace with API response later
// ==========================================

const recommendedActionData = {
  hasRecommendation: true,

  action: {
    title: "Your Next Best Action",
    recommendation: "Improve Communication & Explanation",
    reason:
      "Your recent assessments show that answer structure is consistently affecting your interview score.",
    activity: "10 min Communication Practice",
  },
};


// ==========================================
// Empty State
// ==========================================

function EmptyRecommendedAction({ onStartAssessment }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm p-6">

      <div className="flex items-center gap-4">

        <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-blue-600" />
        </div>

        <div className="flex-1 min-w-0">

          <h3 className="text-base font-bold text-slate-950">
            Your Next Best Action
          </h3>

          <p className="text-sm text-slate-500 mt-1 leading-5">
            Complete an assessment to get your personalized recommendation.
          </p>

          <button
            onClick={onStartAssessment}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Start Assessment
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
}


// ==========================================
// Recommended Action
// ==========================================

export default function RecommendedAction({
  data = recommendedActionData,
  onStartPractice = () => {},
  onStartAssessment = () => {},
}) {

  // Empty state
  if (!data?.hasRecommendation || !data?.action) {
    return (
      <EmptyRecommendedAction
        onStartAssessment={onStartAssessment}
      />
    );
  }

  const { action } = data;

  return (
    <div className="w-full">

      <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm overflow-hidden">

        <div className="p-6">

          {/* ======================================
              LABEL
          ====================================== */}

          <div className="flex items-center gap-2">

            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">

              <Sparkles className="w-4 h-4 text-blue-600" />

            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-blue-600">
              Recommended for you
            </span>

          </div>


          {/* ======================================
              ACTION
          ====================================== */}

          <div className="mt-5">

            <p className="text-xs font-medium text-slate-400">
              {action.title}
            </p>

            <h3 className="text-xl font-bold tracking-tight text-slate-950 mt-1.5">
              {action.recommendation}
            </h3>

          </div>


          {/* ======================================
              AI REASON
          ====================================== */}

          <div className="mt-4">

            <p className="text-sm text-slate-500 leading-6">
              {action.reason}
            </p>

          </div>


          {/* ======================================
              ACTIVITY + CTA
          ====================================== */}

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            {/* Activity */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-2 rounded-xl bg-blue-50/70 border border-blue-100">

              <Clock3 className="w-4 h-4 text-blue-600" />

              <span className="text-xs font-semibold text-blue-700">
                {action.activity}
              </span>

            </div>


            {/* CTA */}
            <button
              onClick={() => onStartPractice(action)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all duration-200 hover:shadow-md hover:shadow-blue-100"
            >
              Start Practice
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}