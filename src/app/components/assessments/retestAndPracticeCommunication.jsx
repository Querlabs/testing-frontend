"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock3,
  Mic,
  RotateCcw,
  Target,
  Sparkles,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   MOCK DATA
   Replace with Weakness Engine / Assessment Engine data later
========================================================= */

const practiceData = {
  priority: {
    title: "Answer Structure",
    priority: "High Priority",
    description:
      "Your answers often contain relevant information but lack a clear beginning, middle, and conclusion.",
    foundIn: "4 of 6 assessments",
    impact: "High",
  },

  practices: [
    {
      id: "structure",
      title: "Answer Structure Practice",
      description:
        "Practice organizing behavioral answers using a clear structure.",
      focus: "Answer Structure",
      duration: "10 min",
      mode: "Voice Practice",
    },
    {
      id: "concise",
      title: "Concise Answer Practice",
      description:
        "Learn to communicate your main point without unnecessary detail.",
      focus: "Conciseness",
      duration: "10 min",
      mode: "Voice Practice",
    },
    {
      id: "technical",
      title: "Technical Explanation Practice",
      description:
        "Practice explaining technical concepts clearly and confidently.",
      focus: "Clarity",
      duration: "15 min",
      mode: "Voice Practice",
    },
    {
      id: "confidence",
      title: "Confidence Practice",
      description:
        "Practice answering difficult interview questions with confident delivery.",
      focus: "Confidence",
      duration: "10 min",
      mode: "Voice Practice",
    },
  ],

  retests: [
    {
      id: "microsoft",
      title: "Microsoft HR Round",
      previousScore: 72,
      weakness: "Answer Structure",
      lastAttempt: "Sep 10, 2026",
    },
    {
      id: "google",
      title: "Google Behavioral Round",
      previousScore: 78,
      weakness: "Conciseness",
      lastAttempt: "Sep 08, 2026",
    },
    {
      id: "technical",
      title: "Technical Explanation Test",
      previousScore: 74,
      weakness: "Clarity",
      lastAttempt: "Sep 05, 2026",
    },
  ],

  improvement: {
    assessment: "Microsoft HR Round",
    previous: 72,
    latest: 84,
    comparisons: [
      {
        name: "Answer Structure",
        previous: 64,
        latest: 82,
      },
      {
        name: "Conciseness",
        previous: 68,
        latest: 77,
      },
      {
        name: "Confidence",
        previous: 76,
        latest: 81,
      },
      {
        name: "Clarity",
        previous: 80,
        latest: 84,
      },
    ],
    summary:
      "Your answer structure improved significantly after focused practice. You now reach the main point faster and provide clearer outcomes. Conciseness has improved, but long background explanations still appear in some answers.",
    nextFocus: "Conciseness",
  },
};

/* =========================================================
   COMMON
========================================================= */

function SectionHeading({ title, description }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>

      {description && (
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      )}
    </div>
  );
}

function PriorityBadge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-600">
      {children}
    </span>
  );
}

/* =========================================================
   1. PRIORITY WEAKNESS
========================================================= */

function PriorityWeakness({ weakness, onPractice }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-blue-100">
            <Target className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-extrabold text-slate-900">
                {weakness.title}
              </h2>

              <PriorityBadge>{weakness.priority}</PriorityBadge>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-5 text-slate-600">
              {weakness.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-5 text-xs text-slate-500">
              <span>
                Found in{" "}
                <strong className="text-slate-700">
                  {weakness.foundIn}
                </strong>
              </span>

              <span>
                Impact{" "}
                <strong className="text-slate-700">
                  {weakness.impact}
                </strong>
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onPractice}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm hover:bg-blue-700"
        >
          Practice This Weakness
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>
    </section>
  );
}

/* =========================================================
   2. PRACTICE CARD
========================================================= */

function PracticeCard({ practice, onStart }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)]">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
        <Mic className="h-5 w-5 text-blue-600" />
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-900">
        {practice.title}
      </h3>

      <p className="mt-2 min-h-[40px] text-sm leading-5 text-slate-500">
        {practice.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600">
          Focus: {practice.focus}
        </span>

        <span className="flex items-center gap-1 rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600">
          <Clock3 className="h-3 w-3" />
          {practice.duration}
        </span>

        <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600">
          {practice.mode}
        </span>
      </div>

      <button
        onClick={() => onStart(practice)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
      >
        Start Practice
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>

    </div>
  );
}

/* =========================================================
   3. PRACTICE SESSION
========================================================= */

function PracticeSession({ practice, onClose }) {
  const [step, setStep] = useState("question");
  const [attempt, setAttempt] = useState(1);

  const questions = {
    "Answer Structure Practice":
      "Tell me about a challenging project you worked on.",
    "Concise Answer Practice":
      "What is your biggest professional achievement?",
    "Technical Explanation Practice":
      "Explain a technical concept you know well to a non-technical interviewer.",
    "Confidence Practice":
      "Tell me about a situation where you had to make a difficult decision.",
  };

  const question =
    questions[practice.title] ||
    "Tell me about a challenging situation you handled at work.";

  if (step === "complete") {
    return (
      <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)] sm:p-8">

        <div className="mx-auto max-w-xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
            <Check className="h-7 w-7 text-emerald-600" />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-600">
            Practice Complete
          </p>

          <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
            Nice work.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            You completed focused practice for{" "}
            <strong className="text-slate-700">
              {practice.focus}
            </strong>
            .
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-emerald-50/70 p-4 text-left">
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                What Improved
              </p>
              <p className="mt-1 text-sm font-bold text-slate-800">
                Answer structure
              </p>
            </div>

            <div className="rounded-xl bg-amber-50/70 p-4 text-left">
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                Still Needs Work
              </p>
              <p className="mt-1 text-sm font-bold text-slate-800">
                Conciseness
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setStep("question");
                setAttempt(1);
              }}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700"
            >
              Continue Practice
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={onClose}
              className="inline-flex h-11 items-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Back
            </button>
          </div>

        </div>
      </section>
    );
  }

  if (step === "feedback") {
    return (
      <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)] sm:p-8">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              AI Feedback
            </p>

            <h2 className="mt-1 text-xl font-extrabold text-slate-900">
              Good attempt.
            </h2>
          </div>

          <span className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500">
            Attempt {attempt}
          </span>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-5">

          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            What to Improve
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            Your answer is relevant, but your main action appears too late.
            Start with the situation briefly, then move quickly into what
            you personally did and what happened as a result.
          </p>

        </div>

        <div className="mt-6 flex flex-wrap gap-3">

          <button
            onClick={() => {
              setAttempt(attempt + 1);
              setStep("question");
            }}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700"
          >
            <RotateCcw className="h-4 w-4" />
            Try Again
          </button>

          <button
            onClick={() => setStep("complete")}
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)] sm:p-8">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Voice Practice
          </p>

          <h2 className="mt-1 text-xl font-extrabold text-slate-900">
            {practice.focus}
          </h2>
        </div>

        <button
          onClick={onClose}
          className="text-sm font-semibold text-slate-400 hover:text-slate-600"
        >
          Exit
        </button>

      </div>

      {/* AI */}
      <div className="mt-7 flex gap-3 rounded-xl bg-slate-50 p-4">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
          <Sparkles className="h-4 w-4 text-blue-600" />
        </div>

        <div>
          <p className="text-xs font-bold text-slate-500">
            AI Interviewer
          </p>

          <p className="mt-1 text-sm font-semibold leading-5 text-slate-800">
            {question}
          </p>
        </div>

      </div>

      {/* Mic */}
      <div className="flex flex-col items-center py-10">

        <button className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.22)] hover:bg-blue-700">
          <Mic className="h-8 w-8" />
        </button>

        <p className="mt-4 text-sm font-semibold text-slate-700">
          Tap to answer
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Speak naturally. Focus on your selected weakness.
        </p>

      </div>

      <button
        onClick={() => setStep("feedback")}
        className="w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800"
      >
        Simulate Answer & Get Feedback
      </button>

    </section>
  );
}

/* =========================================================
   4. RETEST CARD
========================================================= */

function RetestCard({ item, onRetest }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">

      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-sm font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Last Attempt: {item.lastAttempt}
          </p>
        </div>

        <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-600">
          {item.weakness}
        </span>

      </div>

      <div className="mt-5 flex items-end justify-between gap-4">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Previous Score
          </p>

          <p className="mt-1 text-2xl font-extrabold text-slate-900">
            {item.previousScore}
            <span className="text-xs font-semibold text-slate-400">
              {" "}
              / 100
            </span>
          </p>
        </div>

        <button
          onClick={() => onRetest(item)}
          className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-blue-600 px-4 text-xs font-bold text-white hover:bg-blue-700"
        >
          Retake Assessment
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

      </div>

    </div>
  );
}

/* =========================================================
   5. IMPROVEMENT COMPARISON
========================================================= */

function ImprovementComparison({ improvement }) {
  return (
    <section>

      <SectionHeading title="Your Improvement" />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-bold text-slate-900">
              {improvement.assessment}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Latest retest compared with your previous attempt
            </p>
          </div>

          <div className="flex items-center gap-5">

            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Previous
              </p>
              <p className="mt-1 text-xl font-extrabold text-slate-500">
                {improvement.previous}
              </p>
            </div>

            <ArrowRight className="h-4 w-4 text-slate-300" />

            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Latest
              </p>
              <p className="mt-1 text-xl font-extrabold text-blue-600">
                {improvement.latest}
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 px-3 py-2">
              <p className="text-[10px] font-bold uppercase text-emerald-600">
                Improvement
              </p>

              <p className="text-lg font-extrabold text-emerald-600">
                +{improvement.latest - improvement.previous}
              </p>
            </div>

          </div>

        </div>

        {/* Dimension comparison */}
        <div className="mt-6 border-t border-slate-100 pt-5">

          <div className="grid gap-2">
            {improvement.comparisons.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <span className="text-sm font-semibold text-slate-700">
                  {item.name}
                </span>

                <span className="text-sm font-bold text-slate-600">
                  {item.previous}
                  <span className="mx-2 text-slate-300">→</span>
                  <span className="text-blue-600">
                    {item.latest}
                  </span>

                  <span className="ml-2 text-emerald-500">↑</span>
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   6. AI IMPROVEMENT SUMMARY
========================================================= */

function ImprovementSummary({ improvement, onPractice }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">

      <div className="flex gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-blue-100">
          <Sparkles className="h-5 w-5 text-blue-600" />
        </div>

        <div className="flex-1">

          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            AI Improvement Summary
          </p>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">
            {improvement.summary}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">

            <span className="text-xs font-bold text-slate-500">
              Next Focus:
            </span>

            <span className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-blue-600">
              {improvement.nextFocus}
            </span>

            <button
              onClick={onPractice}
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              Practice Next Weakness
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PracticeRetestPage() {
  const [activePractice, setActivePractice] = useState(null);
  const [retestAssessment, setRetestAssessment] = useState(null);

  /* ---------------------------------------------
     Focused practice screen
  --------------------------------------------- */

  if (activePractice) {
    return (
      <main className="min-h-full bg-[#f8fafc]">
        <div className="mx-auto max-w-[850px] px-4 py-6 sm:px-6 lg:px-8">

          <button
            onClick={() => setActivePractice(null)}
            className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Practice & Retest
          </button>

          <PracticeSession
            practice={activePractice}
            onClose={() => setActivePractice(null)}
          />

        </div>
      </main>
    );
  }

  /* ---------------------------------------------
     Retest placeholder
     Existing assessment engine can be connected here
  --------------------------------------------- */

  if (retestAssessment) {
    return (
      <main className="min-h-full bg-[#f8fafc]">
        <div className="mx-auto max-w-[700px] px-4 py-10 sm:px-6 lg:px-8">

          <button
            onClick={() => setRetestAssessment(null)}
            className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Retest
          </button>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
              <RotateCcw className="h-6 w-6 text-blue-600" />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-600">
              Retest Assessment
            </p>

            <h1 className="mt-1 text-2xl font-extrabold text-slate-900">
              {retestAssessment.title}
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              This will repeat your existing assessment. Your new result
              will be compared with your previous attempt.
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Previous Score
              </p>

              <p className="mt-1 text-3xl font-extrabold text-slate-900">
                {retestAssessment.previousScore}
                <span className="text-sm text-slate-400">
                  {" "}
                  / 100
                </span>
              </p>
            </div>

            <button className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white hover:bg-blue-700">
              Start Retest
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>
      </main>
    );
  }

  /* ---------------------------------------------
     Main page
  --------------------------------------------- */

  return (
    <main className="min-h-full bg-[#f8fafc]">

      <div className="mx-auto max-w-[1180px] px-4  sm:px-6 lg:px-8">

        {/* Header */}
        {/* <header className="mb-8">

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Practice & Retest
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Work on your communication weaknesses, then retest yourself
            to measure real improvement.
          </p>

        </header> */}

        <div className="space-y-9">

          {/* Priority */}
          <PriorityWeakness
            weakness={practiceData.priority}
            onPractice={() =>
              setActivePractice(practiceData.practices[0])
            }
          />

          {/* Practice */}
          <section>

            <SectionHeading
              title="Recommended Practice"
              description="Focused practice based on your current communication weaknesses."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {practiceData.practices.map((practice) => (
                <PracticeCard
                  key={practice.id}
                  practice={practice}
                  onStart={setActivePractice}
                />
              ))}
            </div>

          </section>

          {/* Retests */}
          <section>

            <SectionHeading
              title="Retest Your Assessments"
              description="Retake completed assessments after practicing your weaknesses."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              {practiceData.retests.map((item) => (
                <RetestCard
                  key={item.id}
                  item={item}
                  onRetest={setRetestAssessment}
                />
              ))}
            </div>

          </section>

          {/* Improvement */}
          <ImprovementComparison
            improvement={practiceData.improvement}
          />

          {/* AI Summary */}
          <ImprovementSummary
            improvement={practiceData.improvement}
            onPractice={() =>
              setActivePractice(practiceData.practices[1])
            }
          />

        </div>
      </div>
    </main>
  );
}