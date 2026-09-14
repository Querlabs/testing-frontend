"use client";

import {
  ArrowRight,
  Brain,
  Code2,
  Clock3,
  ListChecks,
} from "lucide-react";

// ============================================================
// MOCK DATA
// Keep separate from UI so this can later come from an API.
// ============================================================

const aptitudeAssessments = [
  {
    id: "general-aptitude",
    title: "General Aptitude",
    description:
      "Quantitative Aptitude · Logical Reasoning · Data Interpretation",
    countLabel: "Questions",
    count: "30 Questions",
    duration: "30 min",
    difficulty: "Mixed",
  },
  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    description: "Logical Reasoning · Analytical Thinking",
    countLabel: "Questions",
    count: "25 Questions",
    duration: "25 min",
    difficulty: "Medium",
  },
  {
    id: "cs-fundamentals",
    title: "CS Fundamentals",
    description: "OOP · DBMS · OS · Computer Networks",
    countLabel: "Questions",
    count: "30 Questions",
    duration: "30 min",
    difficulty: "Mixed",
  },
];

const codingAssessments = [
  {
    id: "sde1-coding",
    title: "SDE-1 Coding Assessment",
    description:
      "Arrays · Strings · Hashing · Algorithms",
    countLabel: "Problems",
    count: "2 Coding Problems",
    duration: "60 min",
    difficulty: "Easy → Medium",
  },
  {
    id: "backend-coding",
    title: "Backend Coding Assessment",
    description:
      "Data Structures · Algorithms · Problem Solving",
    countLabel: "Problems",
    count: "2 Coding Problems",
    duration: "60 min",
    difficulty: "Medium",
  },
  {
    id: "advanced-coding",
    title: "Advanced Coding Assessment",
    description:
      "Algorithms · Optimization · Data Structures",
    countLabel: "Problems",
    count: "2 Coding Problems",
    duration: "75 min",
    difficulty: "Medium → Hard",
  },
];

// ============================================================
// HELPERS
// ============================================================

const getDifficultyStyle = (difficulty) => {
  if (difficulty === "Medium → Hard") {
    return "bg-orange-50 text-orange-700 border-orange-100";
  }

  if (difficulty === "Medium") {
    return "bg-blue-50 text-blue-700 border-blue-100";
  }

  return "bg-slate-50 text-slate-600 border-slate-100";
};

// ============================================================
// REUSABLE PRACTICE CARD
// ============================================================

function PracticeAssessmentCard({
  assessment,
  type,
  onStart,
}) {
  return (
    <div className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-5 hover:border-blue-100 hover:shadow-md transition-all">
      {/* Title */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            {assessment.title}
          </h3>

          <p className="mt-2 text-sm leading-5 text-slate-500">
            {assessment.description}
          </p>
        </div>

        <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
          {type === "aptitude" ? (
            <Brain size={18} className="text-blue-600" />
          ) : (
            <Code2 size={18} className="text-blue-600" />
          )}
        </div>
      </div>

      {/* Metadata */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
            {assessment.countLabel}
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-700">
            {assessment.count}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
            Duration
          </p>

          <div className="flex items-center gap-1.5 mt-1">
            <Clock3 size={13} className="text-slate-400" />

            <p className="text-sm font-semibold text-slate-700">
              {assessment.duration}
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty */}
      <div className="flex items-center justify-between gap-3 mt-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold ${getDifficultyStyle(
            assessment.difficulty
          )}`}
        >
          {assessment.difficulty}
        </span>

        <span className="text-xs text-slate-400">
          Timed Assessment
        </span>
      </div>

      {/* CTA */}
      <button
        onClick={() => onStart?.(assessment, type)}
        className="w-full mt-5 h-10 rounded-xl bg-blue-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
      >
        {type === "aptitude"
          ? "Start Practice"
          : "Start Assessment"}

        <ArrowRight size={15} />
      </button>
    </div>
  );
}

// ============================================================
// EMPTY STATE
// ============================================================

function EmptyPracticeState() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white py-12 px-6 text-center">
      <div className="mx-auto w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
        <ListChecks size={19} className="text-blue-600" />
      </div>

      <h3 className="mt-4 font-semibold text-slate-900">
        No practice assessments available
      </h3>

      <p className="mt-1.5 text-sm text-slate-500">
        This section will show available assessments once they are
        added.
      </p>
    </div>
  );
}

// ============================================================
// PRACTICE SECTION
// ============================================================

function PracticeSection({
  icon,
  title,
  description,
  assessments,
  type,
  viewAllLabel,
  onStart,
  onViewAll,
}) {
  return (
    <section>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
            {icon}
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {title}
            </h2>

            <p className="mt-1 text-sm text-slate-500 max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
        >
          {viewAllLabel}
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Cards */}
      {assessments.length > 0 ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {assessments.map((assessment) => (
            <PracticeAssessmentCard
              key={assessment.id}
              assessment={assessment}
              type={type}
              onStart={onStart}
            />
          ))}
        </div>
      ) : (
        <EmptyPracticeState />
      )}
    </section>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function TechnicalPractice({
  onStart,
  onViewAllAptitude,
  onViewAllCoding,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-10 pb-8">
      {/* ======================================================
          PAGE HEADER
      ====================================================== */}
{/* 
      <header>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Technical Practice
        </h1>

        <p className="mt-1.5 text-sm text-slate-500">
          Practice aptitude and coding assessments before your real
          interview.
        </p>
      </header> */}

        {/* ======================================================
            CODING ASSESSMENT
        ====================================================== */}

        <PracticeSection
        icon={<Code2 size={20} className="text-blue-600" />}
        title="Coding Assessment"
        description="Test your coding skills under timed assessment conditions."
        assessments={codingAssessments}
        type="coding"
        viewAllLabel="View All Coding Assessments"
        onStart={onStart}
        onViewAll={onViewAllCoding}
        />
      {/* ======================================================
          APTITUDE PRACTICE
      ====================================================== */}

      <PracticeSection
        icon={<Brain size={20} className="text-blue-600" />}
        title="Aptitude Practice"
        description="Practice the aptitude and reasoning assessments commonly used in technical hiring."
        assessments={aptitudeAssessments}
        type="aptitude"
        viewAllLabel="View All Aptitude Practice"
        onStart={onStart}
        onViewAll={onViewAllAptitude}
      />

    </div>
  );
}