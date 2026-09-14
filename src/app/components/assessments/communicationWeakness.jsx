"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Target,
  TrendingUp,
  Minus,
  AlertCircle,
  RotateCcw,
} from "lucide-react";

/* =========================================================
   MOCK CONSOLIDATED DATA
   Replace with backend aggregation later
========================================================= */

const weaknessData = [
  {
    id: "answer-structure",
    title: "Answer Structure",
    priority: "High Priority",
    frequency: "4 of 6 assessments",
    foundCount: 4,
    impact: "High",
    trend: "Needs Improvement",
    previousScore: 68,
    currentScore: 76,

    explanation:
      "Your answers often contain relevant information, but the main point and outcome are not clearly structured.",

    commonPattern:
      "Across multiple interviews, you tend to explain background information first and reach the actual answer later.",

    assessments: [
      "Microsoft HR Round",
      "Google Behavioral Round",
      "Project Discussion",
      "Technical Explanation Test",
    ],

    evidence: [
      {
        assessment: "Microsoft HR Round",
        text:
          "Your introduction took approximately 48 seconds before you clearly stated your core professional strength.",
      },
      {
        assessment: "Google Behavioral Round",
        text:
          "The situation and background were explained in detail, but your specific action appeared later.",
      },
      {
        assessment: "Project Discussion",
        text:
          "Your answer included useful context but the final outcome was not clearly emphasized.",
      },
    ],

    why:
      "In an interview, unclear structure can make strong experiences harder for the interviewer to understand and evaluate.",

    improvements: [
      "Start with the direct answer.",
      "Use Situation → Action → Result for behavioral questions.",
      "Remove unnecessary background information.",
      "State the outcome clearly.",
    ],

    areas: [
      { name: "Behavioral Answers", impact: "High Impact" },
      { name: "Technical Explanations", impact: "Medium Impact" },
      { name: "HR Questions", impact: "High Impact" },
    ],
  },

  {
    id: "conciseness",
    title: "Conciseness",
    priority: "High Priority",
    frequency: "3 of 6 assessments",
    foundCount: 3,
    impact: "High",
    trend: "Stable",
    previousScore: 69,
    currentScore: 69,

    explanation:
      "You frequently provide more background and detail than necessary before reaching the main answer.",

    commonPattern:
      "You often give useful context, but continue explaining after the interviewer already has enough information.",

    assessments: [
      "Microsoft HR Round",
      "Project Discussion",
      "Technical Explanation Test",
    ],

    evidence: [
      {
        assessment: "Microsoft HR Round",
        text:
          "You spent significant time describing project context before answering what your specific responsibility was.",
      },
      {
        assessment: "Project Discussion",
        text:
          "Your technical explanation included several implementation details that were not required to answer the question.",
      },
      {
        assessment: "Technical Explanation Test",
        text:
          "You continued adding supporting details after the core technical concept was already clear.",
      },
    ],

    why:
      "Long answers can hide your strongest points and make it harder for an interviewer to identify the information that matters.",

    improvements: [
      "Lead with the answer first.",
      "Keep supporting context relevant to the question.",
      "Remove details that do not change the conclusion.",
      "Aim for focused 60–90 second answers when appropriate.",
    ],

    areas: [
      { name: "HR Questions", impact: "High Impact" },
      { name: "Technical Explanations", impact: "High Impact" },
      { name: "Behavioral Answers", impact: "Medium Impact" },
    ],
  },

  {
    id: "filler-words",
    title: "Filler Words",
    priority: "Medium Priority",
    frequency: "3 of 6 assessments",
    foundCount: 3,
    impact: "Medium",
    trend: "Improving",
    previousScore: 67,
    currentScore: 74,

    explanation:
      "Filler words appear frequently during pauses and when you are thinking through difficult answers.",

    commonPattern:
      "Filler words become more noticeable when you need additional time to organize your response.",

    assessments: [
      "Microsoft HR Round",
      "Amazon Leadership Principles",
      "Google Behavioral Round",
    ],

    evidence: [
      {
        assessment: "Microsoft HR Round",
        text:
          "Repeated use of 'basically', 'actually', and 'like' appeared during longer responses.",
      },
      {
        assessment: "Amazon Leadership Principles",
        text:
          "Several filler words occurred while transitioning from the situation to your actions.",
      },
    ],

    why:
      "Frequent fillers can make otherwise strong answers sound less deliberate and confident.",

    improvements: [
      "Replace filler words with intentional pauses.",
      "Take 1–2 seconds to organize difficult answers.",
      "Slow down slightly when transitioning between points.",
      "Practice answering without immediately filling silence.",
    ],

    areas: [
      { name: "Behavioral Answers", impact: "Medium Impact" },
      { name: "HR Questions", impact: "Medium Impact" },
      { name: "Leadership Questions", impact: "Medium Impact" },
    ],
  },

  {
    id: "clarity",
    title: "Clarity",
    priority: "Medium Priority",
    frequency: "2 of 6 assessments",
    foundCount: 2,
    impact: "Medium",
    trend: "Improving",
    previousScore: 76,
    currentScore: 82,

    explanation:
      "Your main points are generally clear, but complex explanations can become difficult to follow.",

    commonPattern:
      "Clarity drops when multiple ideas are explained in one long response.",

    assessments: [
      "Technical Explanation Test",
      "Project Discussion",
    ],

    evidence: [
      {
        assessment: "Technical Explanation Test",
        text:
          "Several technical concepts were explained together before the primary concept was clearly defined.",
      },
      {
        assessment: "Project Discussion",
        text:
          "Multiple implementation details appeared before the main recommendation.",
      },
    ],

    why:
      "Clear communication helps interviewers quickly understand your reasoning and technical judgment.",

    improvements: [
      "Explain one idea at a time.",
      "Lead with the main point.",
      "Use simple transitions between ideas.",
      "Pause before introducing a new concept.",
    ],

    areas: [
      { name: "Technical Explanations", impact: "High Impact" },
      { name: "Project Discussions", impact: "Medium Impact" },
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

function PriorityBadge({ priority }) {
  const isHigh = priority.includes("High");

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold ${
        isHigh
          ? "border-red-100 bg-red-50 text-red-600"
          : "border-amber-100 bg-amber-50 text-amber-600"
      }`}
    >
      {priority}
    </span>
  );
}

function TrendBadge({ trend }) {
  const styles = {
    Improving: "bg-emerald-50 text-emerald-600",
    Stable: "bg-slate-100 text-slate-500",
    "Needs Improvement": "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-bold ${
        styles[trend]
      }`}
    >
      {trend}
    </span>
  );
}

/* =========================================================
   PRIORITY WEAKNESS CARD
========================================================= */

function PriorityWeaknessCard({ weakness, number, onView }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.03)]">

      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-extrabold text-blue-600">
            #{number}
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {weakness.title}
            </h3>

            <div className="mt-2">
              <PriorityBadge priority={weakness.priority} />
            </div>
          </div>
        </div>

        <TrendBadge trend={weakness.trend} />

      </div>

      <p className="mt-4 text-sm leading-5 text-slate-600">
        {weakness.explanation}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Found In
          </p>
          <p className="mt-1 text-sm font-bold text-slate-700">
            {weakness.frequency}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Impact
          </p>
          <p className="mt-1 text-sm font-bold text-slate-700">
            {weakness.impact}
          </p>
        </div>

      </div>

      <button
        onClick={() => onView(weakness.id)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
      >
        View Weakness
        <ArrowRight className="h-4 w-4" />
      </button>

    </div>
  );
}

/* =========================================================
   ALL WEAKNESSES CARD
========================================================= */

function WeaknessCard({ weakness, onView }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">

      <div className="flex items-start justify-between gap-3">

        <div>
          <h3 className="text-sm font-bold text-slate-900">
            {weakness.title}
          </h3>

          <div className="mt-2">
            <PriorityBadge priority={weakness.priority} />
          </div>
        </div>

        <TrendBadge trend={weakness.trend} />

      </div>

      <p className="mt-4 text-sm leading-5 text-slate-500">
        {weakness.explanation}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Frequency
          </p>

          <p className="mt-1 text-sm font-bold text-slate-700">
            {weakness.frequency}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Impact
          </p>

          <p className="mt-1 text-sm font-bold text-slate-700">
            {weakness.impact}
          </p>
        </div>

      </div>

      <button
        onClick={() => onView(weakness.id)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600"
      >
        View Details
        <ArrowRight className="h-4 w-4" />
      </button>

    </div>
  );
}

/* =========================================================
   EVIDENCE ITEM
========================================================= */

function EvidenceItem({ item }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">

      <p className="text-xs font-bold text-blue-600">
        {item.assessment}
      </p>

      <p className="mt-2 text-sm leading-5 text-slate-600">
        {item.text}
      </p>

    </div>
  );
}

/* =========================================================
   WEAKNESS TREND
========================================================= */

function WeaknessTrend({ weakness }) {
  const difference =
    weakness.currentScore - weakness.previousScore;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Weakness Trend
          </p>

          <h3 className="mt-1 text-base font-bold text-slate-900">
            {weakness.title}
          </h3>
        </div>

        <TrendBadge trend={weakness.trend} />

      </div>

      <div className="mt-6 flex items-center gap-5">

        <div>
          <p className="text-[10px] font-bold uppercase text-slate-400">
            Previous
          </p>
          <p className="mt-1 text-2xl font-extrabold text-slate-500">
            {weakness.previousScore}
          </p>
        </div>

        <ArrowRight className="h-5 w-5 text-slate-300" />

        <div>
          <p className="text-[10px] font-bold uppercase text-slate-400">
            Current
          </p>
          <p className="mt-1 text-2xl font-extrabold text-blue-600">
            {weakness.currentScore}
          </p>
        </div>

        <div className="ml-auto text-right">
          <p className="text-[10px] font-bold uppercase text-slate-400">
            Change
          </p>

          <p
            className={`mt-1 text-xl font-extrabold ${
              difference > 0
                ? "text-emerald-600"
                : difference < 0
                ? "text-red-600"
                : "text-slate-500"
            }`}
          >
            {difference > 0 ? "+" : ""}
            {difference}
          </p>
        </div>

      </div>

      {/* Simple visual */}
      <div className="mt-6">
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-500 transition-all"
            style={{
              width: `${weakness.currentScore}%`,
            }}
          />
        </div>
      </div>

    </section>
  );
}

/* =========================================================
   WEAKNESS DETAIL
========================================================= */

function WeaknessDetail({ weakness, onBack }) {
  return (
    <div>

      {/* Header */}
      <header className="mb-7">

        <button
          onClick={onBack}
          className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Weaknesses
        </button>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {weakness.title}
              </h1>

              <PriorityBadge priority={weakness.priority} />
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Consolidated communication pattern across your completed assessments.
            </p>
          </div>

          <TrendBadge trend={weakness.trend} />

        </div>
      </header>

      <div className="space-y-8">

        {/* Status */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

          <div className="grid gap-5 sm:grid-cols-3">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Overall Status
              </p>

              <p className="mt-1 text-lg font-extrabold text-slate-900">
                Needs Improvement
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Found Across
              </p>

              <p className="mt-1 text-lg font-extrabold text-slate-900">
                {weakness.frequency}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Interview Impact
              </p>

              <p className="mt-1 text-lg font-extrabold text-slate-900">
                {weakness.impact}
              </p>
            </div>

          </div>

        </section>

        {/* Repeated */}
        <section>

          <SectionHeading
            title="Repeated Across Your Assessments"
            description={`Found in ${weakness.frequency.replace(
              " of ",
              " of your last "
            )}.`}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {weakness.assessments.map((assessment) => (
              <div
                key={assessment}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>

                <span className="text-sm font-semibold text-slate-700">
                  {assessment}
                </span>
              </div>
            ))}
          </div>

        </section>

        {/* Common Pattern */}
        <section>

          <SectionHeading title="What We Observed" />

          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
            <div className="flex gap-3">
              <Target className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

              <p className="text-sm leading-6 text-slate-700">
                {weakness.commonPattern}
              </p>
            </div>
          </div>

        </section>

        {/* Evidence */}
        <section>

          <SectionHeading
            title="Evidence From Your Interviews"
            description="Examples that contributed to this consolidated weakness."
          />

          <div className="space-y-3">
            {weakness.evidence.map((item) => (
              <EvidenceItem
                key={item.assessment}
                item={item}
              />
            ))}
          </div>

        </section>

        {/* Why */}
        <section>

          <SectionHeading title="Why This Matters" />

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm leading-6 text-slate-600">
              {weakness.why}
            </p>
          </div>

        </section>

        {/* How */}
        <section>

          <SectionHeading
            title="How To Improve"
            description="Practical changes you can apply in your next interview."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

            <div className="space-y-3">
              {weakness.improvements.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700">
              Practice This Weakness
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </section>

        {/* Trend */}
        <WeaknessTrend weakness={weakness} />

        {/* Affected Areas */}
        <section>

          <SectionHeading
            title="Affected Communication Areas"
            description="Where this weakness has the biggest effect on interview communication."
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {weakness.areas.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-bold text-slate-900">
                  {area.name}
                </p>

                <p className="mt-2 text-xs font-bold text-blue-600">
                  {area.impact}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* Bottom CTA */}
        <ImprovementCTA weakness={weakness} />

      </div>
    </div>
  );
}

/* =========================================================
   IMPROVEMENT CTA
========================================================= */

function ImprovementCTA({ weakness }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-7">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            Focused Practice
          </p>

          <h2 className="mt-1 text-xl font-extrabold text-slate-900">
            Fix Your Biggest Communication Weakness
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Practice focused exercises designed around your current weakness,
            then retake an assessment to see whether your communication has improved.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">

          <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700">
            Practice Now
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 hover:bg-slate-50">
            Retake Assessment
            <RotateCcw className="h-4 w-4" />
          </button>

        </div>

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
   MAIN WEAKNESSES LIST
========================================================= */

function WeaknessesList({ onView }) {
  const topWeaknesses = weaknessData.slice(0, 3);

  return (
    <>
      {/* What To Fix First */}
      <section>

        <SectionHeading
          title="What To Fix First"
          description="These weaknesses have the highest impact on your interview communication."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {topWeaknesses.map((weakness, index) => (
            <PriorityWeaknessCard
              key={weakness.id}
              weakness={weakness}
              number={index + 1}
              onView={onView}
            />
          ))}
        </div>

      </section>

      {/* All Weaknesses */}
      <section>

        <SectionHeading
          title="All Communication Weaknesses"
          description="Patterns detected across your completed communication assessments."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {weaknessData.map((weakness) => (
            <WeaknessCard
              key={weakness.id}
              weakness={weakness}
              onView={onView}
            />
          ))}
        </div>

      </section>
    </>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WeaknessesPage() {
  const [selectedWeakness, setSelectedWeakness] =
    useState(null);

  const weakness = weaknessData.find(
    (item) => item.id === selectedWeakness
  );

  return (
    <main className="min-h-full bg-[#f8fafc]">

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

        {!weakness ? (
          <>
            {/* PAGE HEADER */}
            <header className="mb-8">

              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Your Communication Weaknesses
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-500">
                Understand the communication patterns that repeatedly
                affect your interview performance.
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                Based on your completed communication assessments.
              </p>

            </header>

            <div className="space-y-9">

              <WeaknessesList
                onView={setSelectedWeakness}
              />

            </div>
          </>
        ) : (
          <WeaknessDetail
            weakness={weakness}
            onBack={() => setSelectedWeakness(null)}
          />
        )}

      </div>
    </main>
  );
}