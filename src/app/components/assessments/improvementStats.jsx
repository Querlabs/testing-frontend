"use client";

import { useMemo } from "react";

/* =========================================================
   MOCK DATA
========================================================= */

const interviewImprovementData = [
  {
    id: 1,
    name: "Coding / DSA",
    previous: 58,
    current: 72,
  },
  {
    id: 2,
    name: "Technical Knowledge",
    previous: 70,
    current: 79,
  },
  {
    id: 3,
    name: "Communication",
    previous: 64,
    current: 78,
  },
  {
    id: 4,
    name: "Behavioral",
    previous: 71,
    current: 80,
  },
];

const communicationImprovementData = [
  {
    id: 1,
    name: "Clarity",
    improvement: 12,
  },
  {
    id: 2,
    name: "Confidence",
    improvement: 8,
  },
  {
    id: 3,
    name: "Answer Structure",
    improvement: 19,
  },
  {
    id: 4,
    name: "Conciseness",
    improvement: 6,
  },
  {
    id: 5,
    name: "Speaking Pace",
    improvement: 10,
  },
  {
    id: 6,
    name: "Filler Words",
    improvement: 14,
  },
];

const practiceImprovementData = [
  {
    id: 1,
    name: "Coding Practice",
    previous: 58,
    current: 72,
  },
  {
    id: 2,
    name: "Aptitude Practice",
    previous: 68,
    current: 78.2,
  },
  {
    id: 3,
    name: "Technical Practice",
    previous: 70,
    current: 77.7,
  },
];


/* =========================================================
   HELPER
========================================================= */

function calculateImprovement(previous, current) {
  if (
    previous === null ||
    previous === undefined ||
    current === null ||
    current === undefined ||
    previous <= 0
  ) {
    return null;
  }

  return ((current - previous) / previous) * 100;
}

function formatImprovement(value) {
  if (value === null || value === undefined) {
    return "Not enough data yet";
  }

  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}


/* =========================================================
   MAIN PAGE
========================================================= */

export default function ImprovementPercentPage() {
  const overallPrevious = 68;
  const overallCurrent = 80.5;

  const overallImprovement = useMemo(
    () =>
      calculateImprovement(
        overallPrevious,
        overallCurrent
      ),
    []
  );

  const interviewData = useMemo(() => {
    return interviewImprovementData.map((item) => ({
      ...item,
      improvement: calculateImprovement(
        item.previous,
        item.current
      ),
    }));
  }, []);

  const biggestImprovement = useMemo(() => {
    return interviewData.reduce((best, item) => {
      if (!best) return item;

      return item.improvement > best.improvement
        ? item
        : best;
    }, null);
  }, [interviewData]);

  /*
   * Separate comparable example for the
   * "Needs More Improvement" card.
   *
   * This is intentionally not derived from the
   * interview Behavioral 71 -> 80 value.
   */
  const lowestImprovement = {
    name: "Behavioral",
    previous: 71,
    current: 74,
  };

  const lowestImprovementPercent =
    calculateImprovement(
      lowestImprovement.previous,
      lowestImprovement.current
    );

  return (
    <div className="w-full">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <PageHeader
        title="Improvement %"
        subtitle="See how much your interview performance has improved across assessments and practice."
      />


      {/* =====================================================
          1. OVERALL IMPROVEMENT
      ===================================================== */}

      <OverallImprovement
        previous={overallPrevious}
        current={overallCurrent}
        improvement={overallImprovement}
      />


      {/* =====================================================
          2. INTERVIEW IMPROVEMENT
      ===================================================== */}

      <section className="mt-8">

        <SectionHeader
          title="Interview Performance"
          subtitle="See how much your major interview areas have improved."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {interviewData.map((item) => (
            <ImprovementCard
              key={item.id}
              name={item.name}
              previous={item.previous}
              current={item.current}
              improvement={item.improvement}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          3. COMMUNICATION IMPROVEMENT
      ===================================================== */}

      <section className="mt-10">

        <SectionHeader
          title="Communication Improvement"
          subtitle="Improvement across your communication dimensions."
        />

        <CommunicationImprovement
          data={communicationImprovementData}
        />

      </section>


      {/* =====================================================
          4. PRACTICE IMPROVEMENT
      ===================================================== */}

      <section className="mt-10">

        <SectionHeader
          title="Practice Improvement"
          subtitle="See how your completed practice performance has changed."
        />

        <PracticeImprovement
          data={practiceImprovementData}
        />

      </section>


      {/* =====================================================
          5 + 6. BIGGEST / LOWEST
      ===================================================== */}

      <section className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">

        <BiggestImprovement
          data={biggestImprovement}
        />

        <LowestImprovement
          data={lowestImprovement}
          improvement={lowestImprovementPercent}
        />

      </section>


      {/* =====================================================
          7. FORMULA
      ===================================================== */}

      <FormulaInfo />


      {/* =====================================================
          8. AI SUMMARY
      ===================================================== */}

      <AISummary
        biggest={biggestImprovement}
        lowest={lowestImprovement}
        lowestImprovement={lowestImprovementPercent}
      />

    </div>
  );
}


/* =========================================================
   PAGE HEADER
========================================================= */

function PageHeader({
  title,
  subtitle,
}) {
  return (
    <div className="mb-7">

      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h1>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
        {subtitle}
      </p>

    </div>
  );
}


/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  subtitle,
}) {
  return (
    <div className="mb-5">

      <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
        {title}
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        {subtitle}
      </p>

    </div>
  );
}


/* =========================================================
   OVERALL IMPROVEMENT
========================================================= */

function OverallImprovement({
  previous,
  current,
  improvement,
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">

      <div className="bg-blue-50/60 p-5 sm:p-7">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div>

            <div className="flex items-center gap-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                <ArrowUpIcon />
              </div>

              <p className="text-sm font-semibold text-slate-700">
                Overall Improvement
              </p>

            </div>

            <div className="mt-4">

              <p className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
                {formatImprovement(improvement)}
              </p>

              <div className="mt-3 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                Improving ↑
              </div>

            </div>

          </div>


          {/* Scores */}
          <div className="grid grid-cols-2 gap-3 sm:flex">

            <ScoreBox
              label="Previous Performance"
              value={previous}
            />

            <div className="hidden items-center text-slate-300 sm:flex">
              <ArrowRightIcon />
            </div>

            <ScoreBox
              label="Current Performance"
              value={current}
              current
            />

          </div>

        </div>


        {/* AI Insight */}
        <div className="mt-6 rounded-xl border border-blue-100 bg-white px-4 py-4">

          <div className="flex items-start gap-3">

            <div className="mt-0.5 shrink-0 text-blue-600">
              <SparkIcon />
            </div>

            <div>

              <p className="text-xs font-semibold text-slate-500">
                AI Insight
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-700">
                Your overall interview performance has improved by{" "}
                <span className="font-semibold text-blue-600">
                  {formatImprovement(improvement)}
                </span>{" "}
                compared with your earlier assessments.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SCORE BOX
========================================================= */

function ScoreBox({
  label,
  value,
  current = false,
}) {
  return (
    <div className="min-w-[135px] rounded-xl border border-slate-200 bg-white px-4 py-3">

      <p className="text-[10px] font-medium leading-4 text-slate-400">
        {label}
      </p>

      <p
        className={`mt-1 text-xl font-bold ${
          current
            ? "text-blue-600"
            : "text-slate-800"
        }`}
      >
        {value}
        <span className="ml-1 text-[10px] font-medium text-slate-400">
          / 100
        </span>
      </p>

    </div>
  );
}


/* =========================================================
   IMPROVEMENT CARD
========================================================= */

function ImprovementCard({
  name,
  previous,
  current,
  improvement,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between gap-3">

        <p className="text-sm font-semibold leading-5 text-slate-800">
          {name}
        </p>

        <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600">
          {formatImprovement(improvement)}
        </span>

      </div>

      <div className="mt-5 flex items-end gap-3">

        <div>
          <p className="text-[10px] text-slate-400">
            Previous
          </p>

          <p className="mt-1 text-lg font-bold text-slate-700">
            {previous}
          </p>
        </div>

        <div className="pb-1 text-slate-300">
          <ArrowRightIcon size={16} />
        </div>

        <div>
          <p className="text-[10px] text-slate-400">
            Current
          </p>

          <p className="mt-1 text-lg font-bold text-blue-600">
            {current}
          </p>
        </div>

      </div>

      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">

        <div
          className="h-full rounded-full bg-blue-500"
          style={{
            width: `${Math.min(
              Math.max(improvement * 3, 0),
              100
            )}%`,
          }}
        />

      </div>

    </div>
  );
}


/* =========================================================
   COMMUNICATION IMPROVEMENT
========================================================= */

function CommunicationImprovement({ data }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-4"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <ArrowUpIcon size={15} />
              </div>

              <p className="text-sm font-medium text-slate-700">
                {item.name}
              </p>

            </div>

            <span className="text-sm font-bold text-blue-600">
              +{item.improvement}%
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   PRACTICE IMPROVEMENT
========================================================= */

function PracticeImprovement({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

      {data.map((item) => {
        const improvement = calculateImprovement(
          item.previous,
          item.current
        );

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >

            <div className="flex items-start justify-between gap-3">

              <p className="text-sm font-semibold text-slate-800">
                {item.name}
              </p>

              <span className="text-sm font-bold text-blue-600">
                {formatImprovement(improvement)}
              </span>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-slate-50 p-3">

                <p className="text-[10px] text-slate-400">
                  Previous
                </p>

                <p className="mt-1 text-lg font-bold text-slate-700">
                  {item.previous}
                </p>

              </div>

              <div className="rounded-xl bg-blue-50 p-3">

                <p className="text-[10px] text-blue-400">
                  Current
                </p>

                <p className="mt-1 text-lg font-bold text-blue-600">
                  {item.current}
                </p>

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}


/* =========================================================
   BIGGEST IMPROVEMENT
========================================================= */

function BiggestImprovement({ data }) {
  if (!data) {
    return (
      <NotEnoughData
        title="Biggest Improvement"
      />
    );
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
            Biggest Improvement
          </p>

          <h3 className="mt-3 text-xl font-bold text-slate-900">
            {data.name}
          </h3>

        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
          <ArrowUpIcon />
        </div>

      </div>


      <div className="mt-6 flex items-end gap-4">

        <span className="text-3xl font-bold text-slate-700">
          {data.previous}
        </span>

        <span className="pb-1 text-slate-300">
          <ArrowRightIcon />
        </span>

        <span className="text-3xl font-bold text-blue-600">
          {data.current}
        </span>

      </div>

      <p className="mt-2 text-lg font-bold text-blue-600">
        {formatImprovement(data.improvement)}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        Your strongest improvement has been in coding performance.
      </p>

    </div>
  );
}


/* =========================================================
   LOWEST IMPROVEMENT
========================================================= */

function LowestImprovement({
  data,
  improvement,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        Needs More Improvement
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">

        <h3 className="text-xl font-bold text-slate-900">
          {data.name}
        </h3>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {formatImprovement(improvement)}
        </span>

      </div>

      <div className="mt-6 flex items-end gap-4">

        <span className="text-2xl font-bold text-slate-700">
          {data.previous}
        </span>

        <span className="pb-1 text-slate-300">
          <ArrowRightIcon size={18} />
        </span>

        <span className="text-2xl font-bold text-slate-900">
          {data.current}
        </span>

      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        Your behavioral performance has improved slowly compared with other areas.
      </p>

    </div>
  );
}


/* =========================================================
   FORMULA INFO
========================================================= */

function FormulaInfo() {
  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-white px-4 py-4 sm:px-5">

      <div className="flex items-start gap-3">

        <div className="mt-0.5 shrink-0 text-slate-400">
          <InfoIcon />
        </div>

        <div>

          <p className="text-xs font-semibold text-slate-600">
            How Improvement % works
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Improvement % is calculated by comparing your latest performance with your previous comparable performance.
          </p>

          <div className="mt-3 inline-flex max-w-full overflow-x-auto rounded-lg bg-slate-50 px-3 py-2 font-mono text-[11px] text-slate-600">
            (Current Score − Previous Score) ÷ Previous Score × 100
          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   AI SUMMARY
========================================================= */

function AISummary({
  biggest,
  lowest,
  lowestImprovement,
}) {
  return (
    <section className="mt-8">

      <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">

        <div className="flex items-start gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            <SparkIcon />
          </div>

          <div className="min-w-0">

            <h2 className="text-base font-bold text-slate-900">
              What Your Improvement Shows
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
              Your strongest improvement is in{" "}
              <span className="font-semibold text-blue-600">
                {biggest?.name || "coding"}
              </span>{" "}
              and communication. Technical performance is improving steadily, while{" "}
              <span className="font-semibold text-slate-900">
                {lowest?.name || "behavioral performance"}
              </span>{" "}
              has changed more slowly.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              <span className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
                Biggest:{" "}
                <span className="font-bold text-blue-600">
                  {biggest
                    ? formatImprovement(
                        biggest.improvement
                      )
                    : "Not enough data"}
                </span>
              </span>

              <span className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
                Needs attention:{" "}
                <span className="font-bold text-slate-700">
                  {lowestImprovement !== null
                    ? formatImprovement(
                        lowestImprovement
                      )
                    : "Not enough data"}
                </span>
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   NOT ENOUGH DATA
========================================================= */

function NotEnoughData({
  title,
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6">

      <p className="text-sm font-bold text-slate-800">
        {title}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        Not enough data yet
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-400">
        Complete more assessments to calculate meaningful improvement.
      </p>

    </div>
  );
}


/* =========================================================
   ICONS
========================================================= */

function ArrowUpIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </svg>
  );
}

function ArrowRightIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
      <path d="M19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}