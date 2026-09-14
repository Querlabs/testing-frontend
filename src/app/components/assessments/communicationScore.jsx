"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  RotateCcw,
  Target,
} from "lucide-react";

/* =========================================================
   MOCK DATA
   Replace this object with API / evaluation-engine data later
========================================================= */

const communicationAssessments = [
  {
    id: "microsoft-hr",
    title: "Microsoft HR Round",
    type: "HR Communication Assessment",
    completed: "Sep 14, 2026",
    score: 78,
    summary:
      "Good communication with room for improvement in answer structure and conciseness.",

    status: "Good — Needs Refinement",

    aiSummary:
      "Your communication is generally clear and confident. However, your answers become less structured when explaining detailed situations, and some responses contain unnecessary background information.",

    metrics: [
      {
        title: "Clarity",
        score: 82,
        explanation:
          "Your main points are usually easy to understand.",
        evidence:
          "Most answers communicated the intended point clearly, although some introductions were longer than necessary.",
      },
      {
        title: "Answer Structure",
        score: 71,
        explanation:
          "Your answers contain relevant information but need stronger structure.",
        evidence:
          "Behavioral answers often described the situation and action without clearly emphasizing the result.",
      },
      {
        title: "Confidence",
        score: 78,
        explanation:
          "Your tone is generally confident.",
        evidence:
          "You maintained a steady delivery, with slight hesitation when discussing unfamiliar situations.",
      },
      {
        title: "Speaking Pace",
        score: 80,
        explanation:
          "Your pace was mostly comfortable and easy to follow.",
        evidence:
          "Most responses maintained a consistent conversational pace.",
      },
      {
        title: "Conciseness",
        score: 68,
        explanation:
          "Some answers contain more background than necessary.",
        evidence:
          "You frequently explained context before reaching your main answer.",
      },
      {
        title: "Filler Words",
        score: 74,
        explanation:
          "Moderate filler-word usage was detected.",
        evidence:
          "Words such as 'basically', 'actually', and 'like' appeared during longer pauses.",
      },
    ],

    observations: [
      {
        priority: "High",
        observation:
          "Your answers often reach the main point too late.",
        evidence:
          "In the project challenge question, you spent approximately 42 seconds explaining the background before describing your actual contribution.",
        impact:
          "An interviewer may find the response less structured and may redirect you.",
      },
      {
        priority: "Medium",
        observation:
          "Your answers could use stronger structure.",
        evidence:
          "You described the situation and actions well, but the final outcome was not clearly stated.",
        impact:
          "This makes it harder for an interviewer to understand the impact of your work.",
      },
      {
        priority: "Low",
        observation:
          "Some filler words appear during pauses.",
        evidence:
          "Repeated use of 'basically', 'actually', and 'like' was detected during longer responses.",
        impact:
          "Frequent fillers can make otherwise strong answers sound less confident.",
      },
    ],

    answers: [
      {
        number: "01",
        question: "Tell me about yourself.",
        score: 84,
        transcript:
          "I have been working in software development for the last few years. I started mainly with frontend development and later moved into building complete web applications. In my current role I work closely with product and engineering teams, and one of my strengths is understanding requirements quickly and converting them into practical solutions.",
        worked: [
          "Clear career background",
          "Confident delivery",
          "Relevant experience",
        ],
        better: [
          "Introduction was too long",
          "Main professional strength appeared too late",
        ],
        structure: "Present → Experience → Strength → Goal",
      },
      {
        number: "02",
        question: "Tell me about a challenging project you worked on.",
        score: 72,
        transcript:
          "One project was particularly challenging because we had to deliver a new feature within a very short timeline. There were some issues with the existing architecture and we also had dependency problems with another team. I first looked at how the current system was working and then discussed some possible approaches with the team.",
        worked: [
          "Good technical context",
          "Specific example",
        ],
        better: [
          "Too much background",
          "Contribution was unclear initially",
          "Result was not emphasized",
        ],
        structure: "Situation → Challenge → Action → Result",
      },
      {
        number: "03",
        question: "How do you handle disagreements with your team?",
        score: 77,
        transcript:
          "Usually I first try to understand why the other person has a different opinion. Sometimes there is a requirement or technical concern that I haven't considered. I prefer discussing the issue directly and comparing both approaches based on what is best for the project.",
        worked: [
          "Calm professional tone",
          "Clear conflict-resolution approach",
        ],
        better: [
          "Could use a specific example",
          "Final outcome could be stronger",
        ],
        structure: "Approach → Example → Resolution → Outcome",
      },
    ],

    weaknesses: [
      {
        priority: "High",
        title: "Answer Structure",
        why:
          "Interviewers need to quickly understand your situation, action, and result.",
      },
      {
        priority: "High",
        title: "Conciseness",
        why:
          "Long answers can hide your strongest points.",
      },
      {
        priority: "Medium",
        title: "Filler Words",
        why:
          "Frequent fillers can make otherwise strong answers sound less confident.",
      },
    ],

    improvementPlan: [
      {
        title: "Improve Answer Structure",
        action:
          "Use Situation → Action → Result for behavioral questions.",
        practice:
          "Keep each answer focused on one clear story.",
      },
      {
        title: "Become More Concise",
        action:
          "Lead with the answer first, then provide supporting context.",
        practice:
          "Try keeping most answers within 60–90 seconds.",
      },
      {
        title: "Reduce Filler Words",
        action:
          "Replace filler words with a short intentional pause.",
        practice:
          "Pause for 1–2 seconds before answering difficult questions.",
      },
    ],

    previousScore: 72,
  },

  {
    id: "google-behavioral",
    title: "Google Behavioral Round",
    type: "Behavioral Communication Assessment",
    completed: "Sep 12, 2026",
    score: 84,
    summary:
      "Strong confidence and clarity with minor issues in answer length.",
    status: "Strong Communication",
    previousScore: null,
  },

  {
    id: "amazon-leadership",
    title: "Amazon Leadership Principles",
    type: "Leadership Communication Assessment",
    completed: "Sep 10, 2026",
    score: 72,
    summary:
      "Good examples, but answers need stronger structure and clearer outcomes.",
    status: "Good — Needs Refinement",
    previousScore: null,
  },

  {
    id: "technical-explanation",
    title: "Technical Explanation Test",
    type: "Technical Communication Assessment",
    completed: "Sep 08, 2026",
    score: 81,
    summary:
      "Strong technical explanation with some unnecessary detail.",
    status: "Strong Communication",
    previousScore: null,
  },
];

/* =========================================================
   COMMON COMPONENTS
========================================================= */

function Score({ value, large = false }) {
  return (
    <div className="flex items-baseline gap-1">
      <span
        className={
          large
            ? "text-4xl font-extrabold text-blue-600"
            : "text-2xl font-extrabold text-slate-900"
        }
      >
        {value}
      </span>
      <span className="text-xs font-semibold text-slate-400">/ 100</span>
    </div>
  );
}

function PriorityBadge({ priority }) {
  const classes = {
    High: "bg-red-50 text-red-600 border-red-100",
    Medium: "bg-amber-50 text-amber-600 border-amber-100",
    Low: "bg-slate-50 text-slate-500 border-slate-200",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold ${classes[priority]}`}
    >
      {priority} Priority
    </span>
  );
}

/* =========================================================
   ASSESSMENT CARD
========================================================= */

function CommunicationAssessmentCard({ assessment, onView }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] sm:p-6">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="min-w-0 flex-1">

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                {assessment.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {assessment.type}
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-5 text-slate-600">
            {assessment.summary}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              Completed {assessment.completed}
            </span>

            <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-bold text-emerald-600">
              {assessment.status === "Completed"
                ? "Completed"
                : assessment.status}
            </span>
          </div>
        </div>

        {/* Score + CTA */}
        <div className="flex items-center justify-between gap-6 border-t border-slate-100 pt-4 lg:min-w-[230px] lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">

          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Communication Score
            </p>
            <Score value={assessment.score} />
          </div>

          <button
            onClick={() => onView(assessment.id)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition hover:text-blue-700"
          >
            View Full Report
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>

        </div>
      </div>
    </div>
  );
}

/* =========================================================
   REPORT — OVERALL SCORE
========================================================= */

function OverallReport({ assessment }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

        <div className="flex shrink-0 items-center gap-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100">
            <Score value={assessment.score} large />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Overall Assessment Score
            </p>

            <h2 className="mt-1 text-lg font-extrabold text-slate-900">
              {assessment.status}
            </h2>
          </div>
        </div>

        <div className="hidden h-16 w-px bg-slate-200 lg:block" />

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            AI Summary
          </p>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {assessment.aiSummary}
          </p>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   COMMUNICATION METRIC
========================================================= */

function CommunicationMetric({ metric }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            {metric.title}
          </h3>

          <p className="mt-2 text-sm leading-5 text-slate-500">
            {metric.explanation}
          </p>
        </div>

        <Score value={metric.score} />
      </div>

      <div className="mt-4 rounded-xl bg-blue-50/60 p-3.5">
        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
          Evidence
        </p>

        <p className="mt-1.5 text-xs leading-5 text-slate-600">
          {metric.evidence}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   AI OBSERVATION
========================================================= */

function AIObservation({ item }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">

      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-3xl text-sm font-bold leading-5 text-slate-900">
          {item.observation}
        </h3>

        <PriorityBadge priority={item.priority} />
      </div>

      <div className="mt-4 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Evidence
          </p>

          <p className="mt-1.5 text-sm leading-5 text-slate-600">
            {item.evidence}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Impact
          </p>

          <p className="mt-1.5 text-sm leading-5 text-slate-600">
            {item.impact}
          </p>
        </div>

      </div>
    </div>
  );
}

/* =========================================================
   ANSWER ANALYSIS
========================================================= */

function AnswerAnalysis({ answers }) {
  const [openAnswer, setOpenAnswer] = useState("01");

  return (
    <section>

      <SectionHeading
        title="Answer-by-Answer Analysis"
        description="Feedback based on the candidate's actual responses."
      />

      <div className="space-y-3">
        {answers.map((answer) => {
          const open = openAnswer === answer.number;

          return (
            <div
              key={answer.number}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpenAnswer(open ? "" : answer.number)
                }
                className="flex w-full items-center justify-between gap-4 p-5 text-left hover:bg-slate-50/60"
              >
                <div className="flex min-w-0 items-center gap-3">

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500">
                    {answer.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-slate-900">
                      {answer.question}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Communication Score:{" "}
                      <span className="font-bold text-slate-600">
                        {answer.score}/100
                      </span>
                    </p>
                  </div>
                </div>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="border-t border-slate-100 p-5">

                  {/* Transcript */}
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Candidate Transcript
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      "{answer.transcript}"
                    </p>
                  </div>

                  <div className="mt-5 grid gap-6 md:grid-cols-2">

                    {/* Worked */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        What Worked
                      </h4>

                      <div className="mt-3 space-y-2">
                        {answer.worked.map((item) => (
                          <div
                            key={item}
                            className="flex gap-2 text-sm text-slate-600"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Better */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        What Could Be Better
                      </h4>

                      <div className="mt-3 space-y-2">
                        {answer.better.map((item) => (
                          <div
                            key={item}
                            className="flex gap-2 text-sm text-slate-600"
                          >
                            <span className="font-bold text-red-400">
                              ×
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Structure */}
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        Recommended Structure
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {answer.structure}
                      </p>
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =========================================================
   WEAKNESS CARD
========================================================= */

function WeaknessCard({ item, index }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">

      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-extrabold text-slate-500">
          {index}
        </span>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900">
              {item.title}
            </h3>

            <PriorityBadge priority={item.priority} />
          </div>

          <p className="mt-2 text-sm leading-5 text-slate-500">
            {item.why}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   IMPROVEMENT PLAN
========================================================= */

function ImprovementPlan({ plans }) {
  return (
    <section>

      <SectionHeading
        title="Your Improvement Plan"
        description="Focused actions based on the weaknesses repeated throughout this assessment."
      />

      <div className="space-y-3">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex gap-4">

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-extrabold text-blue-600">
                {index + 1}
              </span>

              <div className="flex-1">

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-slate-900">
                    {plan.title}
                  </h3>

                  <button className="text-xs font-bold text-blue-600 hover:text-blue-700">
                    Practice This Weakness →
                  </button>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      What to Change
                    </p>

                    <p className="mt-1.5 text-sm leading-5 text-slate-600">
                      {plan.action}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      How to Practice
                    </p>

                    <p className="mt-1.5 text-sm leading-5 text-slate-600">
                      {plan.practice}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   READINESS
========================================================= */

function CommunicationReadiness() {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">

      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
        Communication Readiness
      </p>

      <div className="mt-2 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Almost Interview Ready
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            You communicate confidently enough for interviews, but improving
            structure and conciseness will make your answers more impactful.
          </p>
        </div>

        <div className="shrink-0 rounded-xl border border-blue-100 bg-white p-4">

          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Focus Before Next Interview
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Answer Structure",
              "Conciseness",
              "Behavioral Storytelling",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RETEST CTA
========================================================= */

function RetestCTA({ assessment }) {
  const hasPrevious = assessment.previousScore !== null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            Ready to improve your score?
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Practice your weak areas and retake this assessment to measure
            your improvement.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              Retake Assessment
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 hover:bg-slate-50">
              Practice Weaknesses
            </button>

          </div>
        </div>

        {hasPrevious && (
          <div className="flex items-center gap-5 rounded-xl bg-slate-50 px-5 py-4">

            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Previous
              </p>
              <p className="mt-1 text-xl font-extrabold text-slate-700">
                {assessment.previousScore}
                <span className="text-xs text-slate-400"> / 100</span>
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Current
              </p>
              <p className="mt-1 text-xl font-extrabold text-blue-600">
                {assessment.score}
                <span className="text-xs text-slate-400"> / 100</span>
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Improvement
              </p>
              <p className="mt-1 text-xl font-extrabold text-emerald-600">
                +{assessment.score - assessment.previousScore}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ title, description }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   PAGE 1 — ASSESSMENT LIST
========================================================= */

function AssessmentList({ onViewReport }) {
  return (
    <div className="space-y-4">

      {communicationAssessments.map((assessment) => (
        <CommunicationAssessmentCard
          key={assessment.id}
          assessment={assessment}
          onView={onViewReport}
        />
      ))}

    </div>
  );
}

/* =========================================================
   PAGE 2 — INDIVIDUAL REPORT
========================================================= */

function CommunicationReport({ assessment, onBack }) {
  return (
    <div>

      {/* Report Header */}
      <div className="mb-7">

        <button
          onClick={onBack}
          className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Communication Score
        </button>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Communication Assessment Report
            </p>

            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {assessment.title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Completed {assessment.completed}
            </p>
          </div>

          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 hover:bg-slate-50">
            <RotateCcw className="h-4 w-4" />
            Retake Assessment
          </button>

        </div>
      </div>

      <div className="space-y-9">

        {/* Overall */}
        <OverallReport assessment={assessment} />

        {/* Breakdown */}
        <section>
          <SectionHeading
            title="Communication Breakdown"
            description="Six dimensions evaluated from your communication during this assessment."
          />

          <div className="grid gap-3 md:grid-cols-2">
            {assessment.metrics.map((metric) => (
              <CommunicationMetric
                key={metric.title}
                metric={metric}
              />
            ))}
          </div>
        </section>

        {/* Observations */}
        <section>
          <SectionHeading
            title="AI Interviewer Observations"
            description="Important observations connected to evidence from your actual interview."
          />

          <div className="space-y-3">
            {assessment.observations.map((item) => (
              <AIObservation
                key={item.observation}
                item={item}
              />
            ))}
          </div>
        </section>

        {/* Answers */}
        <AnswerAnalysis answers={assessment.answers} />

        {/* Weaknesses */}
        <section>
          <SectionHeading
            title="Your Biggest Communication Weaknesses"
            description="Prioritized by frequency, severity, repeated occurrence and interview impact."
          />

          <div className="grid gap-3 md:grid-cols-3">
            {assessment.weaknesses.map((item, index) => (
              <WeaknessCard
                key={item.title}
                item={item}
                index={index + 1}
              />
            ))}
          </div>
        </section>

        {/* Improvement */}
        <ImprovementPlan plans={assessment.improvementPlan} />

        {/* Readiness */}
        <CommunicationReadiness />

        {/* Retest */}
        <RetestCTA assessment={assessment} />

      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CommunicationScore() {
  const [selectedAssessment, setSelectedAssessment] =
    useState(null);

  const selected = communicationAssessments.find(
    (assessment) => assessment.id === selectedAssessment
  );

  return (
    <main className="min-h-full bg-[#f8fafc]">

      <div className="mx-auto max-w-[1180px] px-4  sm:px-6 ">

        {!selected ? (
          <>
            {/* LIST HEADER */}
            {/* <header className="mb-7">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Communication Score
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Review your communication performance across completed
                interview assessments.
              </p>
            </header> */}

            {/* COMPLETED ASSESSMENTS */}
            <AssessmentList
              onViewReport={setSelectedAssessment}
            />
          </>
        ) : (
          /* INDIVIDUAL REPORT */
          <CommunicationReport
            assessment={selected}
            onBack={() => setSelectedAssessment(null)}
          />
        )}

      </div>
    </main>
  );
}