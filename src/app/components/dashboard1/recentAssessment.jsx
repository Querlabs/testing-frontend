"use client";

import {
  ArrowRight,
  ClipboardCheck,
  CalendarDays,
} from "lucide-react";

// ==========================================
// MOCK DATA
// Replace this with API data later
// ==========================================

const recentAssessmentData = {
  completedAssessments: 3,

  assessment: {
    role: "Google SDE-1",
    type: "Technical Interview",
    completedAt: "12 Sep 2026",
    score: 82,
    status: "Almost Ready",

    skills: [
      {
        name: "Problem Solving",
        score: 86,
      },
      {
        name: "Technical Skills",
        score: 81,
      },
      {
        name: "Communication",
        score: 76,
      },
      {
        name: "Code Quality / Debugging",
        score: 94,
      },
      {
        name: "Reasoning & Trade-offs",
        score: 56,
      }
      ,
      {
        name: "Behavioral / Interview Skills",
        score: 90
      }
    ],
  },
};


// ==========================================
// Skill Row
// ==========================================

function SkillRow({ name, score }) {
    const getScoreColor = (score) => {
        if (score < 50) return "bg-red-500";
        if (score < 65) return "bg-orange-500";
        if (score < 80) return "bg-blue-500";
        return "bg-emerald-500";
    };
  return (
    <div className="flex items-center gap-3">

      <span className="w-[125px] shrink-0 text-xs font-medium text-slate-600">
        {name}
      </span>

      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">

        <div
            className={`h-full rounded-full transition-all duration-500 ${getScoreColor(
                score
            )}`}
            style={{ width: `${score}%` }}
        />

      </div>

      <span className="w-7 text-right text-xs font-semibold text-slate-900">
        {score}
      </span>

    </div>
  );
}


// ==========================================
// Empty State
// ==========================================

function EmptyRecentAssessment({ onStartAssessment }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm p-6">

      <div className="flex items-start gap-4">

        <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
          <ClipboardCheck className="w-5 h-5 text-blue-600" />
        </div>

        <div>

          <h3 className="text-base font-bold text-slate-950">
            No assessments yet
          </h3>

          <p className="text-sm leading-5 text-slate-500 mt-1 max-w-sm">
            Complete your first interview simulation to see your
            performance and readiness.
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
// Recent Assessment
// ==========================================

export default function RecentAssessment({
  data = recentAssessmentData,
  onViewHistory = () => {},
  onViewReport = () => {},
  onStartAssessment = () => {},
}) {

  // Empty state
  if (
    !data?.completedAssessments ||
    !data?.assessment
  ) {
    return (
      <EmptyRecentAssessment
        onStartAssessment={onStartAssessment}
      />
    );
  }

  const assessment = data.assessment;

  return (
    <div className="w-full">

      <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm overflow-hidden">

        {/* ======================================
            HEADER
        ====================================== */}

        <div className="px-6 py-5 border-b border-slate-100">

          <div className="flex items-center justify-between gap-4">

            <div>

              <h3 className="text-sm font-bold text-slate-950">
                Recent Assessment
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Your latest interview performance
              </p>

            </div>

            <button
              onClick={onViewHistory}
              className="shrink-0 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
            >
              View History
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>


        {/* ======================================
            ASSESSMENT CONTENT
        ====================================== */}

        <div className="p-6">

          {/* Assessment Info */}
          <div className="flex items-start gap-3">

            <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5 text-blue-600" />
            </div>

            <div className="min-w-0">

              <h4 className="text-base font-bold text-slate-900 truncate">
                {assessment.role}
              </h4>

              <p className="text-xs text-slate-500 mt-0.5">
                {assessment.type}
              </p>

              <div className="flex items-center gap-1.5 mt-2 text-[11px] text-slate-400">

                <CalendarDays className="w-3.5 h-3.5" />

                Completed {assessment.completedAt}

              </div>

            </div>

          </div>


          {/* ======================================
              SCORE + STATUS
          ====================================== */}

          <div className="mt-6 flex items-end justify-between gap-4">

            <div>

              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Score
              </p>

              <div className="flex items-baseline gap-1.5 mt-1">

                <span className="text-[36px] leading-none font-bold tracking-tight text-slate-950">
                  {assessment.score}
                </span>

                <span className="text-xs font-medium text-slate-400">
                  / 100
                </span>

              </div>

            </div>


            <span className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600">
              {assessment.status}
            </span>

          </div>


          {/* ======================================
              SKILL BREAKDOWN
          ====================================== */}

          <div className="mt-6 pt-5 border-t border-slate-100">

            <p className="text-xs font-semibold text-slate-900 mb-4">
              Skill Breakdown
            </p>

            <div className="space-y-3.5">

              {assessment.skills.map((skill) => (
                <SkillRow
                  key={skill.name}
                  name={skill.name}
                  score={skill.score}
                />
              ))}

            </div>

          </div>


          {/* ======================================
              FOOTER CTA
          ====================================== */}

          <div className="mt-6 pt-5 border-t border-slate-100 flex justify-end">

            <button
              onClick={onViewReport}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all duration-200 hover:shadow-md hover:shadow-blue-100"
            >
              View Full Report
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}