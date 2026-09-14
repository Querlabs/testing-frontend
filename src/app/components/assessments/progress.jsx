"use client";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const readinessHistory = [
  { date: "Sep 01", score: 64 },
  { date: "Sep 05", score: 69 },
  { date: "Sep 09", score: 76 },
  { date: "Sep 14", score: 81 },
];

const skillProgress = [
  {
    name: "Coding / DSA",
    previous: 58,
    current: 72,
    change: 14,
  },
  {
    name: "Technical Knowledge",
    previous: 70,
    current: 79,
    change: 9,
  },
  {
    name: "Communication",
    previous: 64,
    current: 78,
    change: 14,
  },
  {
    name: "Problem Solving",
    previous: 62,
    current: 75,
    change: 13,
  },
  {
    name: "Reasoning & Trade-offs",
    previous: 68,
    current: 76,
    change: 8,
  },
  {
    name: "Behavioral / Interview Skills",
    previous: 71,
    current: 80,
    change: 9,
  },
];

const activityStats = [
  { label: "Completed Assessments", value: 6 },
  { label: "Retests", value: 4 },
  { label: "Communication Tests", value: 3 },
  { label: "Technical Assessments", value: 2 },
  { label: "Coding Assessments", value: 3 },
  { label: "Improved Assessments", value: 4 },
];

const improvementHistory = [
  {
    date: "Sep 14, 2026",
    title: "SDE-1 Full Simulation",
    type: "Retest",
    score: 81,
    improvement: 9,
  },
  {
    date: "Sep 09, 2026",
    title: "Technical Interview",
    type: "Assessment",
    score: 76,
    improvement: null,
  },
  {
    date: "Sep 05, 2026",
    title: "Communication Assessment",
    type: "Assessment",
    score: 69,
    improvement: null,
  },
  {
    date: "Sep 01, 2026",
    title: "SDE-1 Full Simulation",
    type: "Assessment",
    score: 64,
    improvement: null,
  },
];

const biggestImprovements = [
  {
    name: "Coding / DSA",
    previous: 58,
    current: 72,
    change: 14,
  },
  {
    name: "Communication",
    previous: 64,
    current: 78,
    change: 14,
  },
  {
    name: "Problem Solving",
    previous: 62,
    current: 75,
    change: 13,
  },
];

const currentProgress = [
  {
    name: "Technical Depth",
    previous: 71,
    current: 74,
    change: 3,
    note: "Progress is slow",
  },
  {
    name: "Conciseness",
    previous: 68,
    current: 71,
    change: 3,
    note: "Needs more focused practice",
  },
  {
    name: "Behavioral Storytelling",
    previous: 70,
    current: 73,
    change: 3,
    note: "Needs improvement",
  },
];

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-[17px] font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}

/* =========================================================
   READINESS PROGRESS
========================================================= */

function ReadinessProgress() {
  const width = 100;
  const height = 190;
  const paddingX = 32;
  const paddingTop = 18;
  const paddingBottom = 38;

  const minScore = 60;
  const maxScore = 85;

  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingTop - paddingBottom;

  const points = readinessHistory.map((item, index) => {
    const x =
      paddingX +
      (index / (readinessHistory.length - 1)) * chartWidth;

    const y =
      paddingTop +
      ((maxScore - item.score) / (maxScore - minScore)) *
        chartHeight;

    return {
      ...item,
      x,
      y,
    };
  });

  const line = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const area = [
    `${points[0].x},${height - paddingBottom}`,
    ...points.map((point) => `${point.x},${point.y}`),
    `${points[points.length - 1].x},${height - paddingBottom}`,
  ].join(" ");

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div>
          <SectionHeading title="Overall Readiness" />

          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold tracking-tight text-slate-950">
              81
            </span>

            <span className="mb-1.5 text-sm text-slate-400">
              / 100
            </span>

            <span className="mb-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              Almost Ready
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />

            <span className="text-sm font-bold text-blue-700">
              +17 points
            </span>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            64 → 81 since first assessment
          </p>
        </div>
      </div>

      <div className="mt-7">
        <div className="h-[210px] w-full">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
          >
            {[64, 70, 76, 81].map((score) => {
              const y =
                paddingTop +
                ((maxScore - score) / (maxScore - minScore)) *
                  chartHeight;

              return (
                <line
                  key={score}
                  x1={paddingX}
                  x2={width - paddingX}
                  y1={y}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeWidth="0.35"
                />
              );
            })}

            <polygon points={area} fill="#eff6ff" />

            <polyline
              points={line}
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {points.map((point) => (
              <circle
                key={point.date}
                cx={point.x}
                cy={point.y}
                r="2.2"
                fill="#2563eb"
              />
            ))}
          </svg>
        </div>

        <div className="mt-1 flex justify-between px-2 text-xs text-slate-400">
          {readinessHistory.map((item) => (
            <div key={item.date} className="text-center">
              <p>{item.date}</p>
              <p className="mt-1 font-semibold text-slate-600">
                {item.score}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-blue-600">
          <ArrowUpRight className="h-4 w-4" />
          Improving
        </span>

        <span className="text-xs text-slate-400">
          Based on completed assessments and retests
        </span>
      </div>
    </section>
  );
}

/* =========================================================
   SKILL PROGRESS CARD
========================================================= */

function SkillProgressCard({ skill }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold text-slate-800">
          {skill.name}
        </p>

        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <ArrowUpRight className="h-3.5 w-3.5" />
          +{skill.change}
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-[11px] text-slate-400">Previous</p>
          <p className="mt-0.5 text-xl font-semibold text-slate-400">
            {skill.previous}
          </p>
        </div>

        <ArrowRight className="mb-2 h-4 w-4 text-slate-300" />

        <div className="text-right">
          <p className="text-[11px] text-slate-400">Current</p>
          <p className="mt-0.5 text-xl font-bold text-slate-900">
            {skill.current}
          </p>
        </div>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${skill.current}%` }}
        />
      </div>

      <p className="mt-2 text-xs font-medium text-emerald-600">
        Improving
      </p>
    </div>
  );
}

/* =========================================================
   ACTIVITY STATS
========================================================= */

function ActivityStats() {
  return (
    <section>
      <SectionHeading title="Assessment Activity" />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {activityStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-2xl font-bold tracking-tight text-slate-900">
              {stat.value}
            </p>

            <p className="mt-1.5 text-xs leading-5 text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   IMPROVEMENT HISTORY
========================================================= */

function ImprovementTimeline() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <SectionHeading
        title="Improvement History"
        subtitle="Your assessment and retest performance over time."
      />

      <div className="relative mt-6">
        <div className="absolute bottom-5 left-[7px] top-2 w-px bg-slate-200" />

        <div className="space-y-6">
          {improvementHistory.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              className="relative flex gap-4"
            >
              <div className="relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-4 border-white bg-blue-500 ring-1 ring-blue-100" />

              <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      {item.date}
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {item.type}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="sm:text-right">
                      <p className="text-lg font-bold text-slate-900">
                        {item.score}
                        <span className="text-xs font-normal text-slate-400">
                          {" "}
                          / 100
                        </span>
                      </p>

                      {item.improvement !== null && (
                        <p className="text-xs font-semibold text-emerald-600">
                          +{item.improvement} improvement
                        </p>
                      )}
                    </div>

                    <button className="hidden items-center gap-1 text-xs font-semibold text-blue-600 sm:flex">
                      View Report
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <button className="mt-2 flex items-center gap-1 text-xs font-semibold text-blue-600 sm:hidden">
                  View Report
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BIGGEST IMPROVEMENT
========================================================= */

function BiggestImprovement({ item, rank }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
        #{rank}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-800">
          {item.name}
        </p>

        <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
          <span>{item.previous}</span>
          <ArrowRight className="h-3 w-3" />
          <span className="font-semibold text-slate-700">
            {item.current}
          </span>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm font-bold text-emerald-600">
          +{item.change}
        </p>
        <p className="text-[10px] text-slate-400">points</p>
      </div>
    </div>
  );
}

/* =========================================================
   CURRENT PROGRESS
========================================================= */

function CurrentProgress() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <SectionHeading
        title="Still Needs Improvement"
        subtitle="Areas where your recent progress has been limited."
      />

      <div className="space-y-3">
        {currentProgress.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-800">
                {item.name}
              </p>

              <span className="flex items-center gap-1 text-xs font-semibold text-amber-600">
                <ArrowUpRight className="h-3.5 w-3.5" />
                +{item.change}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="text-slate-400">
                {item.previous}
              </span>

              <ArrowRight className="h-3.5 w-3.5 text-slate-300" />

              <span className="font-semibold text-slate-800">
                {item.current}
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              {item.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   READINESS JOURNEY
========================================================= */

function ReadinessJourney() {
  const stages = [
    "Not Ready",
    "Needs Improvement",
    "Almost Ready",
    "Ready",
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <SectionHeading title="Your Readiness Journey" />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stages.map((stage, index) => {
          const active = stage === "Almost Ready";

          return (
            <div key={stage} className="relative">
              <div
                className={`rounded-xl border p-3 text-center ${
                  active
                    ? "border-blue-200 bg-blue-50"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <p
                  className={`text-xs font-semibold ${
                    active ? "text-blue-700" : "text-slate-500"
                  }`}
                >
                  {stage}
                </p>

                {active && (
                  <span className="mt-1.5 inline-block rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white">
                    CURRENT
                  </span>
                )}
              </div>

              {index < stages.length - 1 && (
                <ChevronRight className="absolute -right-2.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-slate-300 sm:block" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Current
          </p>

          <p className="mt-1 text-lg font-bold text-slate-900">
            81 / 100
          </p>

          <p className="mt-1 text-xs font-semibold text-blue-600">
            Almost Ready
          </p>
        </div>

        <div className="rounded-xl bg-blue-50/60 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Next Milestone
          </p>

          <p className="mt-1 text-lg font-bold text-slate-900">
            Ready — 85+
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            You are close to the readiness threshold. Consistent
            improvement across weaker areas is still required.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AI PROGRESS SUMMARY
========================================================= */

function AIProgressSummary() {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100">
          <TrendingUp className="h-4 w-4 text-blue-600" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            AI Progress Summary
          </p>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">
            You have improved by <strong>17 points</strong> since your
            first assessment. Your strongest progress has been in coding
            and communication. Technical depth has improved more slowly
            and remains one of the areas limiting your readiness.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BEFORE / AFTER
========================================================= */

function BeforeAfterComparison() {
  const dimensions = [
    ["Coding", 58, 72],
    ["Communication", 64, 78],
    ["Technical", 70, 79],
    ["Problem Solving", 62, 75],
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <SectionHeading
          title="Before vs After"
          subtitle="Measured improvement after practice and retesting."
        />

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
          +17 overall
        </span>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold text-slate-400">
          SDE-1 Simulation
        </p>

        <div className="mt-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-slate-400">Previous</p>
            <p className="mt-1 text-2xl font-bold text-slate-400">
              64
              <span className="text-xs font-normal"> / 100</span>
            </p>
          </div>

          <ArrowRight className="h-5 w-5 text-slate-300" />

          <div>
            <p className="text-[11px] text-slate-400">Latest</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              81
              <span className="text-xs font-normal"> / 100</span>
            </p>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-slate-400">
              Improvement
            </p>

            <p className="mt-1 text-xl font-bold text-emerald-600">
              +17
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 divide-y divide-slate-100">
        {dimensions.map(([name, previous, current]) => (
          <div
            key={name}
            className="flex items-center justify-between py-3"
          >
            <p className="text-sm font-medium text-slate-700">
              {name}
            </p>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-400">{previous}</span>

              <ArrowRight className="h-3.5 w-3.5 text-slate-300" />

              <span className="font-semibold text-slate-800">
                {current}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ProgressPage() {
  return (
    <main className="min-h-full ">
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">

        {/* HEADER */}
        {/* <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">
            Your Progress
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Track how your interview performance and readiness have
            improved over time.
          </p>
        </div> */}

        {/* READINESS */}
        <ReadinessProgress />

        {/* SKILLS */}
        <section className="mt-9">
          <SectionHeading
            title="Skill Progress"
            subtitle="See how your core interview skills have changed over time."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillProgress.map((skill) => (
              <SkillProgressCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </section>

        {/* ACTIVITY */}
        <div className="mt-9">
          <ActivityStats />
        </div>

        {/* HISTORY + BIGGEST */}
        <div className="mt-9 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <ImprovementTimeline />

          <section>
            <SectionHeading
              title="Biggest Improvements"
              subtitle="Areas where you've made the most progress."
            />

            <div className="space-y-3">
              {biggestImprovements.map((item, index) => (
                <BiggestImprovement
                  key={item.name}
                  item={item}
                  rank={index + 1}
                />
              ))}
            </div>
          </section>
        </div>

        {/* CURRENT + JOURNEY */}
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          <CurrentProgress />
          <ReadinessJourney />
        </div>

        {/* AI SUMMARY */}
        <div className="mt-9">
          <AIProgressSummary />
        </div>

        {/* BEFORE / AFTER */}
        <div className="mt-9">
          <BeforeAfterComparison />
        </div>

        <div className="h-8" />
      </div>
    </main>
  );
}