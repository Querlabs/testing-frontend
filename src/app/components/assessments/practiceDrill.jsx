"use client";

import { useState } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Mic,
  Sparkles,
  Target,
  RotateCcw,
  Trophy,
} from "lucide-react";

/* =========================================================
   MOCK DATA
   Later replace with:
   Assessment Engine
   Evaluation Engine
   Weakness Engine
   Recommendation Engine
   LLM
========================================================= */

const personalizedDrills = [
  {
    id: 1,
    title: "Answer Structure Drill",
    category: "Communication",
    basedOn: "Answer Structure",
    description:
      "Practice structuring behavioral answers using realistic interviewer questions and follow-ups.",
    duration: "10 min",
    questions: 5,
    priority: "High",
  },
  {
    id: 2,
    title: "Edge Case Challenge",
    category: "Coding",
    basedOn: "Edge Case Handling",
    description:
      "Solve short coding problems and identify hidden edge cases before submitting your solution.",
    duration: "15 min",
    questions: 3,
    priority: "High",
  },
  {
    id: 3,
    title: "Technical Depth Drill",
    category: "Technical",
    basedOn: "Technical Depth",
    description:
      "Explain technical concepts while the AI progressively probes your reasoning and trade-offs.",
    duration: "10 min",
    questions: 5,
    priority: "Medium",
  },
  {
    id: 4,
    title: "Concise Answer Drill",
    category: "Communication",
    basedOn: "Conciseness",
    description:
      "Practice answering interview questions directly and communicating your strongest points quickly.",
    duration: "10 min",
    questions: 5,
    priority: "Medium",
  },
];

const recentDrills = [
  {
    title: "Answer Structure Drill",
    date: "Sep 14",
  },
  {
    title: "Edge Case Challenge",
    date: "Sep 13",
  },
  {
    title: "Technical Depth Drill",
    date: "Sep 12",
  },
];

/* =========================================================
   SMALL UI COMPONENTS
========================================================= */

function PriorityBadge({ priority }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
        priority === "High"
          ? "bg-blue-50 text-blue-700"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {priority}
    </span>
  );
}

function SectionHeading({
  title,
  subtitle,
}) {
  return (
    <div className="mb-4">
      <h2 className="text-[17px] font-semibold text-slate-900">{title}</h2>

      {subtitle && (
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}

/* =========================================================
   TODAY'S DRILL
========================================================= */

function TodaysDrill({
  onStart,
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/60">
      <div className="border-b border-blue-100 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <h2 className="text-[17px] font-semibold text-slate-900">
            Today&apos;s Drill
          </h2>
        </div>
      </div>

      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_260px]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">
              Answer Structure
            </h3>
            <PriorityBadge priority="High" />
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Why this drill
            </p>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
              Your answer structure has appeared as a weakness in 4 of your
              last 6 communication assessments.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Drill objective
            </p>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
              Learn to deliver clear, structured answers without unnecessary
              background.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-blue-100 bg-white p-4">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className="text-[11px] text-slate-400">Duration</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                10–15 min
              </p>
            </div>

            <div>
              <p className="text-[11px] text-slate-400">Questions</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">5</p>
            </div>

            <div>
              <p className="text-[11px] text-slate-400">Mode</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                AI Interactive
              </p>
            </div>
          </div>

          <button
            onClick={onStart}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Start Drill
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DRILL CARD
========================================================= */

function DrillCard({
  drill,
  onStart,
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-blue-600">
            {drill.category}
          </p>

          <h3 className="mt-1.5 text-[16px] font-semibold text-slate-900">
            {drill.title}
          </h3>
        </div>

        <PriorityBadge priority={drill.priority} />
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 px-3.5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          Based on
        </p>

        <p className="mt-1 text-sm font-medium text-slate-700">
          {drill.basedOn}
        </p>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-slate-500">
        {drill.description}
      </p>

      <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5" />
          {drill.duration}
        </span>

        <span className="flex items-center gap-1.5">
          <Target className="h-3.5 w-3.5" />
          {drill.questions} questions
        </span>
      </div>

      <button
        onClick={onStart}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
      >
        Start Drill
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/* =========================================================
   DRILL CREATION FLOW
========================================================= */

function DrillCreationFlow() {
  const steps = [
    "Your Assessments",
    "Weakness Detection",
    "AI Analysis",
    "Personalized Drill",
    "Practice",
    "Improvement",
  ];

  return (
    <section>
      <SectionHeading
        title="How Your Drill Is Created"
        subtitle="Every drill is generated from your actual interview performance."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className="flex w-full items-center gap-2">
                <div
                  className={`flex min-h-[58px] flex-1 items-center justify-center rounded-xl border px-3 text-center text-xs font-semibold ${
                    index === 3
                      ? "border-blue-200 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-slate-50 text-slate-600"
                  }`}
                >
                  {step}
                </div>

                {index < steps.length - 1 && (
                  <ChevronRight className="hidden h-4 w-4 shrink-0 text-slate-300 lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
          The AI analyzes your recent interview performance and creates
          focused practice around the areas where you need the most
          improvement.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   INTERACTIVE DRILL
========================================================= */

function InteractiveDrill({
  onComplete,
  onClose,
}) {
  const [question, setQuestion] = useState(1);
  const [feedback, setFeedback] = useState(false);
  const [recording, setRecording] = useState(false);

  const questions = [
    "Tell me about a project where you faced a major technical challenge.",
    "What was the most important action you personally took?",
    "What measurable impact did your solution have?",
  ];

  const handleAnswer = () => {
    setRecording(false);
    setFeedback(true);
  };

  const nextQuestion = () => {
    if (question >= questions.length) {
      onComplete();
      return;
    }

    setQuestion((prev) => prev + 1);
    setFeedback(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/20 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold text-blue-600">
              PERSONALIZED DRILL
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Answer Structure
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-sm font-medium text-slate-400 hover:text-slate-700"
          >
            Exit
          </button>
        </div>

        <div className="p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">
              Question {question} of {questions.length}
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              AI Coach
            </span>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Brain className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs font-semibold text-blue-700">
                  AI Interviewer
                </p>

                <p className="mt-2 text-[16px] font-medium leading-7 text-slate-800">
                  {questions[question - 1]}
                </p>
              </div>
            </div>
          </div>

          {!feedback ? (
            <div className="mt-6">
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <Mic
                  className={`mx-auto h-7 w-7 ${
                    recording ? "text-blue-600" : "text-slate-400"
                  }`}
                />

                <p className="mt-3 text-sm font-medium text-slate-700">
                  {recording
                    ? "Listening to your answer..."
                    : "Answer naturally. The AI will analyze your response."}
                </p>

                <button
                  onClick={() => setRecording(!recording)}
                  className="mt-4 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  {recording ? "Finish Answer" : "Start Speaking"}
                </button>
              </div>

              {recording && (
                <button
                  onClick={handleAnswer}
                  className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Submit Response
                </button>
              )}
            </div>
          ) : (
            <div className="mt-6">
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-xs font-semibold text-amber-700">
                  AI FEEDBACK
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Your answer gives good context, but your main action is
                  still unclear. Try answering again in a{" "}
                  <strong>Situation → Action → Result</strong> structure.
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => setFeedback(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  Try Again
                </button>

                <button
                  onClick={nextQuestion}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  {question === questions.length
                    ? "Complete Drill"
                    : "Next Question"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DRILL FEEDBACK
========================================================= */

function DrillFeedback({
  onPracticeAgain,
  onRetest,
}) {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Trophy className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs font-semibold text-emerald-600">
            DRILL COMPLETE
          </p>
          <h2 className="text-lg font-semibold text-slate-900">
            Drill Complete
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-xs text-slate-400">Target Weakness</p>
          <p className="mt-1.5 text-sm font-semibold text-slate-800">
            Answer Structure
          </p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-xs text-slate-400">What Improved</p>
          <p className="mt-1.5 text-sm font-semibold text-slate-800">
            Clearer answer structure
          </p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-xs text-slate-400">Still Needs Work</p>
          <p className="mt-1.5 text-sm font-semibold text-slate-800">
            Conclusions are sometimes unclear
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          AI Recommendation
        </p>

        <p className="mt-1.5 text-sm leading-6 text-slate-600">
          Continue practicing structured behavioral answers before your next
          full assessment.
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={onPracticeAgain}
          className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Practice Again
        </button>

        <button
          onClick={onRetest}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Retake Assessment
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   RECENT DRILLS
========================================================= */

function RecentDrills() {
  return (
    <section>
      <SectionHeading title="Recent Drills" />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {recentDrills.map((drill, index) => (
          <div
            key={drill.title}
            className={`flex items-center justify-between gap-4 px-5 py-4 ${
              index !== recentDrills.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                <CheckCircle2 className="h-4 w-4 text-slate-500" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {drill.title}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Completed {drill.date}
                </p>
              </div>
            </div>

            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
              Completed
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PersonalizedDrillPage() {
  const [activeDrill, setActiveDrill] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startDrill = () => {
    setCompleted(false);
    setActiveDrill(true);
  };

  const completeDrill = () => {
    setActiveDrill(false);
    setCompleted(true);
  };

  return (
    <main className="min-h-full ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* PAGE HEADER */}
        {/* <div className="mb-7">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
              <Sparkles className="h-4.5 w-4.5 text-blue-600" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-950">
              Personalized Drill
            </h1>
          </div>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            AI-generated practice designed specifically around your current
            interview weaknesses.
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Every drill adapts to your latest assessment performance.
          </p>
        </div> */}

        {/* TODAY */}
        <TodaysDrill onStart={startDrill} />

        {/* RECOMMENDED */}
        <section className="mt-9">
          <SectionHeading
            title="Recommended Drills"
            subtitle="Target the areas currently limiting your interview performance."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {personalizedDrills.map((drill) => (
              <DrillCard
                key={drill.id}
                drill={drill}
                onStart={startDrill}
              />
            ))}
          </div>
        </section>

        {/* CREATION FLOW */}
        <div className="mt-9">
          <DrillCreationFlow />
        </div>

        {/* FEEDBACK AFTER COMPLETION */}
        {completed && (
          <div className="mt-9">
            <DrillFeedback
              onPracticeAgain={startDrill}
              onRetest={() => {
                // Connect to existing assessment retest flow later.
                console.log("Retake existing assessment");
              }}
            />
          </div>
        )}

        {/* RECENT */}
        <div className="mt-9">
          <RecentDrills />
        </div>

        {/* ADAPTIVE LOGIC */}
        <section className="mt-9 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <Brain className="h-4 w-4 text-blue-600" />
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-slate-900">
                Your drills adapt as you improve
              </h2>

              <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-500">
                When your Answer Structure improves, the AI reduces its
                priority and moves to the next highest-impact weakness, such
                as Conciseness. Drill difficulty, question count, and the
                need for retesting can all change based on your latest
                performance.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
              Answer Structure
            </span>

            <ArrowRight className="h-4 w-4 text-slate-300" />

            <span className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-blue-700">
              AI Drill
            </span>

            <ArrowRight className="h-4 w-4 text-slate-300" />

            <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
              Practice
            </span>

            <ArrowRight className="h-4 w-4 text-slate-300" />

            <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
              Improvement
            </span>

            <ArrowRight className="h-4 w-4 text-slate-300" />

            <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
              Conciseness
            </span>
          </div>
        </section>
      </div>

      {/* INTERACTIVE DRILL */}
      {activeDrill && (
        <InteractiveDrill
          onComplete={completeDrill}
          onClose={() => setActiveDrill(false)}
        />
      )}
    </main>
  );
}