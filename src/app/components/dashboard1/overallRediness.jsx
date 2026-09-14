"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

// ==========================================
// DATA
// Replace this object with API response later
// ==========================================

const readinessData = {
  score: 78,
  status: "Almost Ready",
  assessmentsCount: 3,

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

  insight:
    "You're close to interview-ready. Communication is currently your weakest area.",
};


// ==========================================
// Circular Score
// ==========================================

function ReadinessRing({ score }) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-[170px] h-[170px] flex items-center justify-center">

      <svg
        width="170"
        height="170"
        viewBox="0 0 170 170"
        className="-rotate-90"
      >
        {/* Background Ring */}
        <circle
          cx="85"
          cy="85"
          r={radius}
          fill="none"
          stroke="#e8f0ff"
          strokeWidth="12"
        />

        {/* Progress Ring */}
        <circle
          cx="85"
          cy="85"
          r={radius}
          fill="none"
          stroke="#2563eb"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          className="transition-all duration-700"
        />
      </svg>

      {/* Center Score */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="flex items-baseline gap-1">
          <span className="text-[42px] leading-none font-bold tracking-tight text-slate-950">
            {score}
          </span>

          <span className="text-sm font-medium text-slate-400">
            / 100
          </span>
        </div>

      </div>

    </div>
  );
}


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
    <div className="space-y-2">

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-slate-700">
          {name}
        </span>

        <span className="text-sm font-semibold text-slate-900">
          {score}/100
        </span>

      </div>

      <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">

       <div
            className={`h-full rounded-full transition-all duration-500 ${getScoreColor(
                score
            )}`}
            style={{ width: `${score}%` }}
        />

      </div>

    </div>
  );
}


// ==========================================
// Empty State
// ==========================================

function EmptyReadinessState({ onTakeAssessment }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm p-8 sm:p-10">

      <div className="max-w-xl">

        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-5 h-5 text-blue-600" />
        </div>

        <h3 className="text-xl font-bold text-slate-950">
          You haven't taken an assessment yet.
        </h3>

        <p className="text-sm leading-6 text-slate-500 mt-2 max-w-md">
          Complete your first interview simulation to discover your readiness.
        </p>

        <button
          onClick={onTakeAssessment}
          className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
        >
          Take Your First Assessment
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
}


// ==========================================
// Overall Readiness Component
// ==========================================

export default function OverallReadiness({
  data = readinessData,
  onImprove = () => {},
  onTakeAssessment = () => {},
}) {

  const hasAssessments = data.assessmentsCount > 0;


  // Empty State
  if (!hasAssessments) {
    return (
      <EmptyReadinessState
        onTakeAssessment={onTakeAssessment}
      />
    );
  }


  return (
    <div className="w-full">

      <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm overflow-hidden">

        {/* ======================================
            HEADER
        ====================================== */}

        <div className="px-6 sm:px-8 py-6 border-b border-slate-100">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>

              <p className="text-sm font-semibold text-slate-900">
                Overall Readiness
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Your current interview readiness
              </p>

            </div>


            <div className="self-start sm:self-auto px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">

              <span className="text-xs font-semibold text-blue-600">
                Based on {data.assessmentsCount} assessments
              </span>

            </div>

          </div>

        </div>


        {/* ======================================
            MAIN CONTENT
        ====================================== */}

        <div className="p-6 sm:p-8">

          <div className="grid grid-cols-1 lg:grid-cols-[210px_1fr] gap-8 lg:gap-10 items-center">

            {/* SCORE */}

            <div className="flex flex-col items-center">

              <ReadinessRing score={data.score} />

              <div className="mt-4 text-center">

                <p className="text-base font-bold text-slate-950">
                  {data.status}
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  Interview readiness
                </p>

              </div>

            </div>


            {/* SKILLS */}

            <div className="space-y-6">

              <div>

                <h3 className="text-sm font-semibold text-slate-900">
                  Skill Breakdown
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Your performance across key interview areas
                </p>

              </div>


              <div className="space-y-5">

                {data.skills.map((skill) => (
                  <SkillRow
                    key={skill.name}
                    name={skill.name}
                    score={skill.score}
                  />
                ))}

              </div>

            </div>

          </div>


          {/* ======================================
              INSIGHT
          ====================================== */}

          <div className="mt-8 rounded-2xl bg-blue-50/70 border border-blue-100 px-5 py-4">

            <p className="text-sm leading-6 text-blue-900">
              {data.insight}
            </p>

          </div>


          {/* ======================================
              CTA
          ====================================== */}

          <div className="flex justify-end mt-6">

            <button
              onClick={onImprove}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-200 hover:shadow-md hover:shadow-blue-200"
            >
              Improve Weakest Area
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}