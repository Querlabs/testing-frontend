"use client";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   MOCK DATA
   Keep recommendation/assessment data separate from UI.
   Later this can come from:
   Assessment Engine
   Evaluation Engine
   Weakness Engine
   Recommendation Engine
========================================================= */

const improvementData = {
  readiness: {
    status: "Almost Ready",
    score: 78,
    assessmentsAnalyzed: 6,
    mainFocus: "Coding + Communication",
    summary:
      "Your technical foundation is strong, but coding optimization and communication structure are currently limiting your interview performance.",
  },

  priorities: [
    {
      category: "Coding / DSA",
      weakness: "Optimization & Edge Cases",
      priority: "High",
      score: 62,
      foundIn: "3 assessments",
      impact: "High",
      status: "Needs Improvement",
      action:
        "Complete focused coding assessments and practice identifying edge cases before implementation.",
    },
    {
      category: "Communication",
      weakness: "Answer Structure",
      priority: "High",
      score: 68,
      foundIn: "4 assessments",
      impact: "High",
      status: "Needs Improvement",
      action:
        "Practice structured behavioral and technical answers.",
    },
    {
      category: "Technical",
      weakness: "Technical Depth",
      priority: "Medium",
      score: 71,
      foundIn: "2 assessments",
      impact: "Medium",
      status: "Needs Improvement",
      action:
        "Practice technical follow-up questions and explain your reasoning in greater depth.",
    },
    {
      category: "Behavioral",
      weakness: "Impact Articulation",
      priority: "Medium",
      score: 74,
      foundIn: "2 assessments",
      impact: "Medium",
      status: "Needs Improvement",
      action:
        "Make your personal contribution and measurable outcome clearer in behavioral answers.",
    },
  ],

  plan: [
    {
      number: "01",
      title: "Improve Coding Optimization",
      category: "Coding / DSA",
      why:
        "Your coding performance is currently the biggest factor affecting your readiness.",
      actions: [
        "Practice timed coding assessments",
        "Identify edge cases before coding",
        "Analyze time and space complexity",
        "Retest coding assessment",
      ],
      practice: "3–5 sessions",
    },
    {
      number: "02",
      title: "Improve Communication Structure",
      category: "Communication",
      why:
        "Your answers are relevant but often lack a clear structure.",
      actions: [
        "Practice STAR responses",
        "Practice technical explanations",
        "Practice concise answers",
        "Retest communication assessment",
      ],
      practice: "3 sessions",
    },
    {
      number: "03",
      title: "Improve Technical Depth",
      category: "Technical",
      why:
        "You perform well on direct questions but struggle with deeper follow-ups.",
      actions: [
        "Practice technical interview questions",
        "Explain trade-offs",
        "Practice 'Why?' follow-ups",
        "Retest technical interview",
      ],
      practice: "3 sessions",
    },
  ],

  roadmap: [
    {
      label: "Coding Optimization",
      status: "Current Focus",
      priority: "High",
      action: "Practice edge cases and optimization before implementation.",
      active: true,
    },
    {
      label: "Communication Structure",
      status: "Next",
      priority: "High",
      action: "Practice STAR and structured interview answers.",
      active: false,
    },
    {
      label: "Technical Depth",
      status: "Upcoming",
      priority: "Medium",
      action: "Practice deeper follow-up and trade-off questions.",
      active: false,
    },
    {
      label: "Behavioral Answers",
      status: "Upcoming",
      priority: "Medium",
      action: "Improve impact and outcome articulation.",
      active: false,
    },
    {
      label: "Full Interview Retest",
      status: "Upcoming",
      priority: "—",
      action: "Re-evaluate overall interview readiness.",
      active: false,
    },
  ],

  weeklyFocus: [
    {
      day: "MON",
      title: "Coding Assessment",
      type: "Assessment",
    },
    {
      day: "TUE",
      title: "Edge Case Practice",
      type: "Practice",
    },
    {
      day: "WED",
      title: "Communication Practice",
      type: "Practice",
    },
    {
      day: "THU",
      title: "Technical Follow-up Practice",
      type: "Practice",
    },
    {
      day: "FRI",
      title: "Coding Retest",
      type: "Retest",
    },
  ],

  progress: {
    previous: 68,
    current: 78,
    areas: [
      {
        name: "Coding",
        previous: 58,
        current: 68,
      },
      {
        name: "Communication",
        previous: 64,
        current: 74,
      },
      {
        name: "Technical",
        previous: 70,
        current: 76,
      },
      {
        name: "Behavioral",
        previous: 72,
        current: 78,
      },
    ],
  },

  adaptive: {
    text:
      "Your improvement plan is continuously updated as you complete assessments, practice weaknesses, and retest.",
    example:
      "Once your coding optimization improves, Communication Structure will become your highest-priority focus.",
  },

  nextAction: {
    title: "Complete a Coding Assessment",
    reason:
      "Coding optimization is currently your highest-impact weakness.",
  },
};

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function PriorityBadge({ priority }) {
  const styles = {
    High: "bg-red-50 text-red-600 border-red-100",
    Medium: "bg-amber-50 text-amber-600 border-amber-100",
    "—": "bg-slate-50 text-slate-400 border-slate-200",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold ${
        styles[priority]
      }`}
    >
      {priority === "—" ? "No Priority" : `${priority} Priority`}
    </span>
  );
}

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

/* =========================================================
   1. READINESS SUMMARY
========================================================= */

function ReadinessSummary({ data }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.7fr] lg:items-center">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Current Readiness
          </p>

          <h2 className="mt-1 text-xl font-extrabold text-slate-900">
            {data.status}
          </h2>

          <p className="mt-1 text-sm font-semibold text-blue-600">
            Main Focus: {data.mainFocus}
          </p>
        </div>

        <div className="hidden h-16 w-px bg-slate-200 lg:block" />

        <div className="flex flex-wrap gap-8">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Overall Readiness
            </p>

            <p className="mt-1 text-3xl font-extrabold text-blue-600">
              {data.score}
              <span className="text-sm text-slate-400"> / 100</span>
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Assessments Analyzed
            </p>

            <p className="mt-1 text-3xl font-extrabold text-slate-900">
              {data.assessmentsAnalyzed}
            </p>
          </div>

          <div className="min-w-[260px] flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              AI Summary
            </p>

            <p className="mt-1.5 text-sm leading-5 text-slate-600">
              {data.summary}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   2. PRIORITY CARD
========================================================= */

function PriorityCard({ item, index }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">

      <div className="flex items-start justify-between gap-3">

        <div className="flex gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-extrabold text-blue-600">
            {index + 1}
          </div>

          <div>
            <p className="text-[11px] font-semibold text-blue-600">
              {item.category}
            </p>

            <h3 className="mt-1 text-sm font-bold text-slate-900">
              {item.weakness}
            </h3>
          </div>

        </div>

        <PriorityBadge priority={item.priority} />

      </div>

      <div className="mt-5 flex items-end justify-between">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Current Score
          </p>

          <p className="mt-1 text-2xl font-extrabold text-slate-900">
            {item.score}
            <span className="text-xs font-semibold text-slate-400">
              {" "}
              / 100
            </span>
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Found In
          </p>

          <p className="mt-1 text-sm font-bold text-slate-700">
            {item.foundIn}
          </p>
        </div>

      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

        <span className="text-xs font-semibold text-slate-500">
          Impact:{" "}
          <span className="text-slate-700">{item.impact}</span>
        </span>

        <span className="text-xs font-semibold text-red-500">
          {item.status}
        </span>

      </div>

      <p className="mt-4 text-sm leading-5 text-slate-600">
        {item.action}
      </p>

      <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700">
        Practice Now
        <ArrowRight className="h-4 w-4" />
      </button>

    </div>
  );
}

/* =========================================================
   3. IMPROVEMENT STEP
========================================================= */

function ImprovementStep({ step }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

      <div className="flex gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-600">
          {step.number}
        </div>

        <div className="flex-1">

          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

            <div>
              <p className="text-[11px] font-semibold text-blue-600">
                {step.category}
              </p>

              <h3 className="mt-1 text-base font-bold text-slate-900">
                {step.title}
              </h3>
            </div>

            <button className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-blue-600">
              Start Practice
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

          </div>

          <p className="mt-3 text-sm text-slate-500">
            <span className="font-bold text-slate-700">Why:</span>{" "}
            {step.why}
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">

            {step.actions.map((action) => (
              <div
                key={action}
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-600"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                {action}
              </div>
            ))}

          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Clock3 className="h-3.5 w-3.5" />
            Estimated Practice:{" "}
            <span className="text-slate-600">{step.practice}</span>
          </div>

        </div>
      </div>
    </div>
  );
}

/* =========================================================
   4. ROADMAP
========================================================= */

function Roadmap({ items }) {
  return (
    <section>

      <SectionHeading
        title="Your Roadmap"
        description="An adaptive sequence based on your current weaknesses."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

        <div className="relative space-y-0">

          {items.map((item, index) => (
            <div
              key={item.label}
              className="relative flex gap-4 pb-7 last:pb-0"
            >

              {/* Connecting line */}
              {index !== items.length - 1 && (
                <div className="absolute left-[17px] top-9 h-[calc(100%-18px)] w-px bg-slate-200" />
              )}

              <div
                className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                  item.active
                    ? "border-blue-600 bg-blue-600 text-white"
                    : item.status === "Completed"
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-slate-200 bg-white text-slate-400"
                }`}
              >
                {item.status === "Completed" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-xs font-bold">
                    {index + 1}
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.label}
                  </h3>

                  <span
                    className={`rounded-lg px-2 py-1 text-[10px] font-bold ${
                      item.active
                        ? "bg-blue-50 text-blue-600"
                        : "bg-slate-50 text-slate-500"
                    }`}
                  >
                    {item.status}
                  </span>

                  {item.priority !== "—" && (
                    <PriorityBadge priority={item.priority} />
                  )}
                </div>

                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  {item.action}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   5. WEEKLY FOCUS
========================================================= */

function WeeklyFocus({ items }) {
  return (
    <section>

      <SectionHeading
        title="This Week's Focus"
        description="A lightweight recommendation based on your current priorities."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

        {items.map((item) => (
          <div
            key={item.day}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >

            <p className="text-[10px] font-extrabold tracking-wider text-slate-400">
              {item.day}
            </p>

            <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
              {item.type === "Retest" ? (
                <RotateCcwIcon />
              ) : (
                <Target className="h-4 w-4 text-blue-600" />
              )}
            </div>

            <h3 className="mt-3 text-xs font-bold leading-4 text-slate-800">
              {item.title}
            </h3>

            <p className="mt-2 text-[10px] font-semibold text-slate-400">
              {item.type}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

function RotateCcwIcon() {
  return (
    <span className="text-blue-600">
      ↻
    </span>
  );
}

/* =========================================================
   6. READINESS PROGRESS
========================================================= */

function ReadinessProgress({ data }) {
  const improvement = data.current - data.previous;

  return (
    <section>

      <SectionHeading
        title="Progress Toward Readiness"
        description="Your overall improvement across completed assessments."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

        <div className="flex flex-wrap items-center gap-8">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Previous Readiness
            </p>

            <p className="mt-1 text-3xl font-extrabold text-slate-500">
              {data.previous}
            </p>
          </div>

          <ArrowRight className="h-5 w-5 text-slate-300" />

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Current Readiness
            </p>

            <p className="mt-1 text-3xl font-extrabold text-blue-600">
              {data.current}
            </p>
          </div>

          <div className="rounded-xl bg-emerald-50 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
              Improvement
            </p>

            <p className="mt-1 text-xl font-extrabold text-emerald-600">
              +{improvement}
            </p>
          </div>

        </div>

        <div className="mt-7 grid gap-2">

          {data.areas.map((area) => (
            <div
              key={area.name}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
            >

              <span className="text-sm font-semibold text-slate-700">
                {area.name}
              </span>

              <span className="text-sm font-bold text-slate-600">
                {area.previous}
                <span className="mx-2 text-slate-300">→</span>
                <span className="text-blue-600">
                  {area.current}
                </span>
                <span className="ml-2 text-emerald-500">↑</span>
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   7. ADAPTIVE PLAN
========================================================= */

function AdaptivePlan({ data }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">

      <div className="flex gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-blue-100">
          <Sparkles className="h-5 w-5 text-blue-600" />
        </div>

        <div>

          <h2 className="text-base font-extrabold text-slate-900">
            Your Plan Adapts With You
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {data.text}
          </p>

          <div className="mt-4 rounded-xl bg-white/80 p-4">

            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
              Example
            </p>

            <p className="mt-1.5 text-sm leading-5 text-slate-600">
              {data.example}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   8. NEXT BEST ACTION
========================================================= */

function NextBestAction({ data }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-7">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            Recommended Next Step
          </p>

          <h2 className="mt-1 text-xl font-extrabold text-slate-900">
            Your Next Best Action
          </h2>

          <p className="mt-3 text-base font-bold text-slate-800">
            {data.title}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {data.reason}
          </p>

        </div>

        <div className="flex shrink-0 flex-wrap gap-3">

          <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
            Start Practice
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 hover:bg-slate-50">
            View Weaknesses
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ImprovementPlanPage() {
  return (
    <main className="min-h-full bg-[#f8fafc]">

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

        {/* PAGE HEADER */}
        <header className="mb-8">

          <div className="flex flex-wrap items-center gap-2">

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Your Improvement Plan
            </h1>

            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">
              Adaptive Plan
            </span>

          </div>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            A personalized plan built from your interview performance,
            weaknesses, and recent assessment results.
          </p>

          <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <Sparkles className="h-3.5 w-3.5" />
            Based on your recent assessments
          </p>

        </header>

        <div className="space-y-9">

          {/* 1. CURRENT STATUS */}
          <ReadinessSummary data={improvementData.readiness} />

          {/* 2. CURRENT PRIORITIES */}
          <section>

            <SectionHeading
              title="Current Priorities"
              description="These are the areas that will have the biggest impact on your interview performance."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              {improvementData.priorities.map((item, index) => (
                <PriorityCard
                  key={item.weakness}
                  item={item}
                  index={index}
                />
              ))}
            </div>

          </section>

          {/* 3. RECOMMENDED PLAN */}
          <section>

            <SectionHeading
              title="Recommended Plan"
              description="Focus on the highest-impact weaknesses first."
            />

            <div className="space-y-3">
              {improvementData.plan.map((step) => (
                <ImprovementStep
                  key={step.number}
                  step={step}
                />
              ))}
            </div>

          </section>

          {/* 4. ROADMAP */}
          <Roadmap items={improvementData.roadmap} />

          {/* 5. WEEKLY FOCUS */}
          <WeeklyFocus items={improvementData.weeklyFocus} />

          {/* 6. PROGRESS */}
          <ReadinessProgress data={improvementData.progress} />

          {/* 7. ADAPTIVE */}
          <AdaptivePlan data={improvementData.adaptive} />

          {/* 8. NEXT ACTION */}
          <NextBestAction data={improvementData.nextAction} />

        </div>
      </div>
    </main>
  );
}