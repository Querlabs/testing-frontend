"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  RotateCcw,
  Target,
  X,
} from "lucide-react";

/* =========================================================
   MOCK DATA
   Later connect with real Assessment + Attempt History
========================================================= */

const retakeAssessments = [
  {
    id: 1,
    title: "Microsoft SDE-1 Simulation",
    type: "Full Interview Simulation",
    previousScore: 72,
    weakness: "Coding Optimization",
    lastAttempt: "Sep 10, 2026",
    attempts: 2,
    focus: [
      "Handle edge cases before coding",
      "Explain time and space complexity",
      "Optimize your initial approach",
    ],
    recommendation:
      "You've improved your communication score, but coding optimization is still the biggest factor affecting this assessment.",
  },
  {
    id: 2,
    title: "Google SDE-1 Technical",
    type: "Technical Interview",
    previousScore: 78,
    weakness: "Technical Depth",
    lastAttempt: "Sep 08, 2026",
    attempts: 1,
    focus: [
      "Explain technical decisions in depth",
      "Prepare for interviewer follow-ups",
      "Clearly explain trade-offs",
    ],
    recommendation:
      "Your fundamentals are strong, but deeper reasoning and follow-up handling remain the main opportunity for improvement.",
  },
  {
    id: 3,
    title: "Amazon SDE-1 Simulation",
    type: "Full Interview Simulation",
    previousScore: 69,
    weakness: "Communication & Explanation",
    lastAttempt: "Sep 05, 2026",
    attempts: 1,
    focus: [
      "Structure answers more clearly",
      "Explain your reasoning step by step",
      "Keep answers concise and direct",
    ],
    recommendation:
      "Your technical understanding is improving, but clearer explanation is still limiting your performance in this simulation.",
  },
];

/* =========================================================
   RETAKE CARD
========================================================= */

function RetakeAssessmentCard({
  assessment,
  selected,
  onSelect,
  onRetake,
}) {
  return (
    <div
      onClick={() => onSelect(assessment)}
      className={`cursor-pointer rounded-2xl border bg-white p-5 shadow-sm transition ${
        selected
          ? "border-blue-300 ring-2 ring-blue-50"
          : "border-slate-200 hover:border-blue-200 hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-blue-600">
            {assessment.type}
          </p>

          <h3 className="mt-1.5 text-[17px] font-semibold text-slate-900">
            {assessment.title}
          </h3>
        </div>

        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
          Ready to Retake
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[11px] text-slate-400">
            Previous Score
          </p>

          <p className="mt-1 text-xl font-bold text-slate-900">
            {assessment.previousScore}
            <span className="text-xs font-normal text-slate-400">
              {" "}
              / 100
            </span>
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[11px] text-slate-400">
            Main Weakness
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-700">
            {assessment.weakness}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5" />
          Last attempt: {assessment.lastAttempt}
        </span>

        <span>
          {assessment.attempts}{" "}
          {assessment.attempts === 1 ? "attempt" : "attempts"}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <button
          onClick={(event) => {
            event.stopPropagation();
            onSelect(assessment);
          }}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800"
        >
          View Previous Result
        </button>

        <button
          onClick={(event) => {
            event.stopPropagation();
            onRetake(assessment);
          }}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-700"
        >
          Retake Assessment
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   BEFORE RETAKE RECOMMENDATION
========================================================= */

function RetakeRecommendation({ assessment, onStart }) {
  if (!assessment) return null;

  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            Before You Retake
          </p>

          <h2 className="mt-1.5 text-lg font-semibold text-slate-900">
            {assessment.title}
          </h2>
        </div>

        <div className="rounded-xl border border-blue-100 bg-white px-4 py-3">
          <p className="text-[11px] text-slate-400">
            Previous Score
          </p>

          <p className="mt-0.5 text-xl font-bold text-slate-900">
            {assessment.previousScore}
            <span className="text-xs font-normal text-slate-400">
              {" "}
              / 100
            </span>
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl border border-blue-100 bg-white p-4">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Most Important Weakness
            </p>
          </div>

          <p className="mt-2 text-sm font-bold text-slate-800">
            {assessment.weakness}
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            What To Focus On
          </p>

          <ul className="mt-2 space-y-2">
            {assessment.focus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-blue-100 bg-white p-4">
        <p className="text-xs font-semibold text-blue-600">
          AI Recommendation
        </p>

        <p className="mt-1.5 text-sm leading-6 text-slate-600">
          {assessment.recommendation}
        </p>
      </div>

      <button
        onClick={() => onStart(assessment)}
        className="mt-5 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Start Retake
        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
}

/* =========================================================
   RETAKE CONFIRMATION
========================================================= */

function RetakeConfirmation({
  assessment,
  onConfirm,
  onCancel,
}) {
  if (!assessment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/20 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              New Attempt
            </p>

            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
              Retake {assessment.title}?
            </h2>
          </div>

          <button
            onClick={onCancel}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          This will create a new attempt of the same assessment. Your
          previous result will remain available for comparison.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-[11px] text-slate-400">
              Previous Score
            </p>

            <p className="mt-1 text-xl font-bold text-slate-900">
              {assessment.previousScore}
              <span className="text-xs font-normal text-slate-400">
                {" "}
                / 100
              </span>
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-[11px] text-slate-400">
              Previous Attempts
            </p>

            <p className="mt-1 text-xl font-bold text-slate-900">
              {assessment.attempts}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
          <p className="text-sm font-medium leading-6 text-slate-700">
            You&apos;ll be evaluated using the same assessment criteria.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Start Retake
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RETAKE SIMULATION
   Mock completion state for now
========================================================= */

function RetakeSimulation({ assessment, onComplete, onExit }) {
  const [question, setQuestion] = useState(1);

  const questions = [
    "Walk me through your approach to solving this problem.",
    "What edge cases would you consider before implementing it?",
    "What is the time and space complexity of your solution?",
  ];

  const next = () => {
    if (question === questions.length) {
      onComplete(assessment);
      return;
    }

    setQuestion((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/20 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold text-blue-600">
              RETAKE · NEW ATTEMPT
            </p>

            <h2 className="mt-1 text-[16px] font-semibold text-slate-900">
              {assessment.title}
            </h2>
          </div>

          <button
            onClick={onExit}
            className="text-xs font-medium text-slate-400 hover:text-slate-700"
          >
            Exit
          </button>
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Question {question} of {questions.length}
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Retake
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
            <p className="text-xs font-semibold text-blue-600">
              INTERVIEWER
            </p>

            <p className="mt-2 text-lg font-medium leading-7 text-slate-800">
              {questions[question - 1]}
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-7 text-center">
            <RotateCcw className="mx-auto h-6 w-6 text-slate-400" />

            <p className="mt-3 text-sm text-slate-500">
              Mock retake interface. Connect your existing assessment
              runner here.
            </p>
          </div>

          <button
            onClick={next}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {question === questions.length
              ? "Complete Retake"
              : "Continue"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RETAKE COMPARISON
========================================================= */

function RetakeComparison({
  assessment,
  onViewResult,
  onContinue,
}) {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            Retake Complete
          </p>

          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            {assessment.title}
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-[11px] text-slate-400">Previous</p>

          <p className="mt-1 text-2xl font-bold text-slate-400">
            {assessment.previousScore}
            <span className="text-xs font-normal"> / 100</span>
          </p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-[11px] text-slate-400">New</p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            84
            <span className="text-xs font-normal"> / 100</span>
          </p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-[11px] text-slate-400">
            Improvement
          </p>

          <p className="mt-1 text-2xl font-bold text-emerald-600">
            +{84 - assessment.previousScore}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Key Changes
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-emerald-100 bg-white">
          {[
            ["Coding Optimization", "61", "78"],
            ["Communication", "72", "82"],
            ["Technical Knowledge", "76", "80"],
          ].map(([name, previous, current]) => (
            <div
              key={name}
              className="flex items-center justify-between border-b border-slate-100 px-4 py-3 last:border-0"
            >
              <span className="text-sm font-medium text-slate-700">
                {name}
              </span>

              <span className="flex items-center gap-2 text-sm">
                <span className="text-slate-400">{previous}</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                <span className="font-semibold text-slate-800">
                  {current}
                </span>
                <ArrowUpRight className="h-4 w-4 text-emerald-500" />
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm font-semibold text-slate-800">
        Your performance improved significantly.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={onViewResult}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          View New Result
          <ArrowRight className="h-4 w-4" />
        </button>

        <button
          onClick={onContinue}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Continue Improving
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyRetakeState() {
  return (
    <section className="flex min-h-[430px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="max-w-md">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
          <RotateCcw className="h-5 w-5 text-blue-600" />
        </div>

        <h2 className="mt-5 text-xl font-bold text-slate-900">
          No Assessments Ready for Retake
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Complete an assessment first. Once you&apos;ve practiced your
          weaknesses, you can return here to measure your improvement.
        </p>

        <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          View My Assessments
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */
function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-[17px] font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
export default function RetakeAssessmentsPage() {
  const [selectedAssessment, setSelectedAssessment] = useState(
    retakeAssessments[0]
  );

  const [confirmation, setConfirmation] = useState(null);
  const [activeRetake, setActiveRetake] = useState(null);
  const [completedRetake, setCompletedRetake] = useState(null);

  const openConfirmation = (assessment) => {
    setConfirmation(assessment);
  };

  const confirmRetake = () => {
    setActiveRetake(confirmation);
    setConfirmation(null);
  };

  const completeRetake = (assessment) => {
    setActiveRetake(null);
    setCompletedRetake(assessment);
  };

  return (
    <main className="min-h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* PAGE HEADER */}
        {/* <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">
            Retake Assessments
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Retake completed assessments to measure how much you&apos;ve
            improved.
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Focus on your weaknesses, practice, then retest yourself.
          </p>
        </div> */}

        {/* RETAKE READY */}
        <section>
          <SectionHeading
            title="Ready for Retake"
            subtitle="Assessments you've completed and can attempt again."
          />

          {retakeAssessments.length > 0 ? (
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {retakeAssessments.map((assessment) => (
                <RetakeAssessmentCard
                  key={assessment.id}
                  assessment={assessment}
                  selected={
                    selectedAssessment?.id === assessment.id
                  }
                  onSelect={setSelectedAssessment}
                  onRetake={openConfirmation}
                />
              ))}
            </div>
          ) : (
            <EmptyRetakeState />
          )}
        </section>

        {/* BEFORE RETAKE */}
        {selectedAssessment && (
          <div className="mt-9">
            <RetakeRecommendation
              assessment={selectedAssessment}
              onStart={openConfirmation}
            />
          </div>
        )}

        {/* RETAKE RESULT */}
        {completedRetake && (
          <div className="mt-9">
            <RetakeComparison
              assessment={completedRetake}
              onViewResult={() => {
                console.log("Open new result");
              }}
              onContinue={() => {
                setCompletedRetake(null);
              }}
            />
          </div>
        )}

        <div className="h-8" />
      </div>

      {/* CONFIRMATION */}
      {confirmation && (
        <RetakeConfirmation
          assessment={confirmation}
          onConfirm={confirmRetake}
          onCancel={() => setConfirmation(null)}
        />
      )}

      {/* ACTIVE RETAKE */}
      {activeRetake && (
        <RetakeSimulation
          assessment={activeRetake}
          onComplete={completeRetake}
          onExit={() => setActiveRetake(null)}
        />
      )}
    </main>
  );
}