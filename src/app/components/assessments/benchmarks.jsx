"use client";

import { useMemo } from "react";

/* =========================================================
   ILLUSTRATIVE MOCK BENCHMARK DATA
   Replace this object with real Benchmark Engine data later.
========================================================= */

const benchmarkData = {
  isAvailable: true,
  isMockData: true,

  role: "SDE-1",

  overview: {
    yourReadiness: 78,
    benchmark: 75,
    readyRange: 80,
    percentile: 72,
  },

  skills: [
    {
      id: 1,
      name: "Coding / DSA",
      you: 72,
      benchmark: 70,
    },
    {
      id: 2,
      name: "Technical Knowledge",
      you: 79,
      benchmark: 75,
    },
    {
      id: 3,
      name: "Communication",
      you: 78,
      benchmark: 72,
    },
    {
      id: 4,
      name: "Problem Solving",
      you: 75,
      benchmark: 73,
    },
    {
      id: 5,
      name: "Behavioral",
      you: 68,
      benchmark: 74,
    },
    {
      id: 6,
      name: "Reasoning & Trade-offs",
      you: 76,
      benchmark: 72,
    },
  ],

  simulations: [
    {
      id: 1,
      company: "Google",
      role: "SDE-1",
      yourScore: 82,
      benchmark: 79,
    },
    {
      id: 2,
      company: "Microsoft",
      role: "SDE-1",
      yourScore: 78,
      benchmark: 76,
    },
    {
      id: 3,
      company: "Amazon",
      role: "SDE-1",
      yourScore: 74,
      benchmark: 77,
    },
  ],

  methodology: {
    benchmarkGroup: "SDE-1 Candidates",
    sampleSize: "1,240 candidates",
    lastUpdated: "Sep 2026",
  },
};

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
   MAIN PAGE
========================================================= */

export default function BenchmarksPage() {
  const data = benchmarkData;

  const skillData = useMemo(() => {
    return data.skills.map((skill) => ({
      ...skill,
      difference: skill.you - skill.benchmark,
    }));
  }, []);

  const aboveBenchmark = useMemo(() => {
    return skillData
      .filter((skill) => skill.difference > 0)
      .sort((a, b) => b.difference - a.difference);
  }, [skillData]);

  const belowBenchmark = useMemo(() => {
    return skillData
      .filter((skill) => skill.difference < 0)
      .sort((a, b) => a.difference - b.difference);
  }, [skillData]);

  if (!data.isAvailable) {
    return (
      <div className="w-full">
        <PageHeader />

        <BenchmarkEmptyState />

        <PersonalScoreNotice />

      </div>
    );
  }

  return (
    <div className="w-full">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <PageHeader />


      {/* =====================================================
          MOCK DATA NOTICE
      ===================================================== */}

      {data.isMockData && (
        <MockDataNotice />
      )}


      {/* =====================================================
          1. YOUR BENCHMARK POSITION
      ===================================================== */}

      <BenchmarkOverview
        data={data.overview}
      />


      {/* =====================================================
          2. ROLE BENCHMARK
      ===================================================== */}

      <RoleBenchmark
        data={data.overview}
        role={data.role}
      />


      {/* =====================================================
          3. SKILL BENCHMARKS
      ===================================================== */}

      <section className="mt-10">

        <SectionHeader
          title="Skill Benchmarks"
          subtitle="Compare your performance with the current benchmark for your role."
        />

        <SkillBenchmark
          data={skillData}
        />

      </section>


      {/* =====================================================
          4. PERCENTILE
      ===================================================== */}

      <section className="mt-10">

        <PercentileCard
          percentile={data.overview.percentile}
        />

      </section>


      {/* =====================================================
          5. SIMULATION BENCHMARK
      ===================================================== */}

      {data.simulations?.length > 0 && (
        <section className="mt-10">

          <SectionHeader
            title="Simulation Benchmark"
            subtitle="Comparison is shown only for comparable simulation formats and scoring."
          />

          <SimulationBenchmark
            data={data.simulations}
          />

        </section>
      )}


      {/* =====================================================
          6 + 7. WHERE YOU STAND OUT / BEHIND
      ===================================================== */}

      <section className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">

        <StandOutCard
          data={aboveBenchmark}
        />

        <BehindCard
          data={belowBenchmark}
        />

      </section>


      {/* =====================================================
          8. AI BENCHMARK INSIGHT
      ===================================================== */}

      <section className="mt-10">

        <BenchmarkInsight
          aboveBenchmark={aboveBenchmark}
          belowBenchmark={belowBenchmark}
        />

      </section>


      {/* =====================================================
          9. METHODOLOGY
      ===================================================== */}

      <section className="mt-10">

        <BenchmarkMethodology
          data={data.methodology}
        />

      </section>

    </div>
  );
}


/* =========================================================
   PAGE HEADER
========================================================= */

function PageHeader() {
  return (
    <div className="mb-7">

      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Benchmarks
      </h1>

      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px]">
        See how your interview performance compares with candidates targeting similar roles.
      </p>

      <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-400 sm:text-sm">
        Benchmarks are based on comparable assessment performance and are updated as more reliable data becomes available.
      </p>

    </div>
  );
}


/* =========================================================
   MOCK DATA NOTICE
========================================================= */

function MockDataNotice() {
  return (
    <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">

      <div className="mt-0.5 shrink-0 text-amber-600">
        <InfoIcon />
      </div>

      <div>
        <p className="text-xs font-semibold text-amber-800">
          Illustrative frontend benchmark data
        </p>

        <p className="mt-1 text-xs leading-5 text-amber-700">
          These benchmark values are mock data for UI development only. They do not represent actual platform statistics or company hiring cutoffs.
        </p>
      </div>

    </div>
  );
}


/* =========================================================
   1. BENCHMARK OVERVIEW
========================================================= */

function BenchmarkOverview({ data }) {
  const difference =
    data.yourReadiness - data.benchmark;

  const above = difference > 0;

  return (
    <section className="rounded-2xl border border-blue-100 bg-white shadow-sm">

      <div className="bg-blue-50/60 p-5 sm:p-7">

        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

          {/* Main Score */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <TargetIcon />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  Your Benchmark Position
                </p>

                <p className="text-sm font-bold text-slate-900">
                  Current readiness vs role benchmark
                </p>
              </div>

            </div>

            <div className="mt-5 flex flex-wrap items-end gap-3">

              <span className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {data.yourReadiness}
              </span>

              <span className="mb-1 text-sm text-slate-400">
                / 100
              </span>

              <span className="mb-1 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-700">
                {above
                  ? "Above Benchmark"
                  : "Below Benchmark"}
              </span>

            </div>

          </div>


          {/* Comparison */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            <SmallScore
              label="Your Readiness"
              value={data.yourReadiness}
              primary
            />

            <SmallScore
              label="SDE-1 Benchmark"
              value={data.benchmark}
            />

            <SmallScore
              label="Difference"
              value={`${difference >= 0 ? "+" : ""}${difference}`}
              text
            />

          </div>

        </div>


        <div className="mt-6 rounded-xl border border-blue-100 bg-white px-4 py-4">

          <div className="flex items-start gap-3">

            <div className="mt-0.5 text-blue-600">
              <SparkIcon />
            </div>

            <p className="text-sm leading-6 text-slate-700">
              Your current readiness is{" "}
              <span className="font-semibold text-blue-600">
                above the benchmark
              </span>{" "}
              for comparable SDE-1 candidates.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SMALL SCORE
========================================================= */

function SmallScore({
  label,
  value,
  primary = false,
  text = false,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">

      <p className="text-[10px] leading-4 text-slate-400">
        {label}
      </p>

      <p
        className={`mt-1 text-xl font-bold ${
          primary
            ? "text-blue-600"
            : text
              ? "text-blue-600"
              : "text-slate-800"
        }`}
      >
        {value}
        {!text && (
          <span className="ml-1 text-[10px] font-medium text-slate-400">
            /100
          </span>
        )}
      </p>

    </div>
  );
}


/* =========================================================
   2. ROLE BENCHMARK
========================================================= */

function RoleBenchmark({
  data,
  role,
}) {
  return (
    <section className="mt-10">

      <SectionHeader
        title="Role Benchmark"
        subtitle={`Benchmark position for your selected ${role} role.`}
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        {/* Scores */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

          <RoleScore
            label="Your Score"
            value={data.yourReadiness}
            primary
          />

          <RoleScore
            label="Benchmark"
            value={data.benchmark}
          />

          <RoleScore
            label="Ready Range"
            value={`${data.readyRange}+`}
          />

        </div>


        {/* Simple Visual */}
        <div className="mt-7">

          <div className="relative">

            <div className="h-3 overflow-hidden rounded-full bg-slate-100">

              <div
                className="h-full rounded-full bg-blue-500"
                style={{
                  width: `${Math.min(
                    data.yourReadiness,
                    100
                  )}%`,
                }}
              />

            </div>

            {/* Benchmark marker */}
            <div
              className="absolute top-[-5px] h-5 w-0.5 bg-slate-700"
              style={{
                left: `${data.benchmark}%`,
              }}
            />

            {/* Ready marker */}
            <div
              className="absolute top-[-5px] h-5 w-0.5 bg-blue-700"
              style={{
                left: `${data.readyRange}%`,
              }}
            />

          </div>


          <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-500 sm:grid-cols-4">

            <Legend
              label="Below Benchmark"
              marker="bg-slate-200"
            />

            <Legend
              label="Near Benchmark"
              marker="bg-slate-400"
            />

            <Legend
              label="Above Benchmark"
              marker="bg-blue-400"
            />

            <Legend
              label="Ready Range"
              marker="bg-blue-700"
            />

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   ROLE SCORE
========================================================= */

function RoleScore({
  label,
  value,
  primary = false,
}) {
  return (
    <div className="rounded-xl bg-slate-50 px-4 py-4">

      <p className="text-xs font-medium text-slate-400">
        {label}
      </p>

      <p
        className={`mt-2 text-2xl font-bold ${
          primary
            ? "text-blue-600"
            : "text-slate-800"
        }`}
      >
        {value}
        <span className="ml-1 text-xs font-medium text-slate-400">
          {typeof value === "number" ? "/100" : ""}
        </span>
      </p>

    </div>
  );
}


/* =========================================================
   LEGEND
========================================================= */

function Legend({
  label,
  marker,
}) {
  return (
    <div className="flex items-center gap-2">

      <span
        className={`h-2.5 w-2.5 rounded-full ${marker}`}
      />

      <span>
        {label}
      </span>

    </div>
  );
}


/* =========================================================
   3. SKILL BENCHMARK
========================================================= */

function SkillBenchmark({ data }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">

              <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500">
                Skill
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold text-slate-500">
                You
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold text-slate-500">
                Benchmark
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold text-slate-500">
                Difference
              </th>

            </tr>
          </thead>

          <tbody>

            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 last:border-0"
              >

                <td className="px-5 py-4">
                  <span className="text-sm font-semibold text-slate-800">
                    {item.name}
                  </span>
                </td>

                <td className="px-5 py-4 text-center">
                  <span className="text-sm font-bold text-blue-600">
                    {item.you}
                  </span>
                </td>

                <td className="px-5 py-4 text-center">
                  <span className="text-sm font-medium text-slate-600">
                    {item.benchmark}
                  </span>
                </td>

                <td className="px-5 py-4 text-center">
                  <DifferenceBadge
                    difference={item.difference}
                  />
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>


      {/* Mobile */}
      <div className="divide-y divide-slate-100 md:hidden">

        {data.map((item) => (
          <div
            key={item.id}
            className="p-4"
          >

            <div className="flex items-center justify-between gap-3">

              <p className="text-sm font-semibold text-slate-800">
                {item.name}
              </p>

              <DifferenceBadge
                difference={item.difference}
              />

            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-blue-50 p-3">

                <p className="text-[10px] text-blue-400">
                  You
                </p>

                <p className="mt-1 text-lg font-bold text-blue-600">
                  {item.you}
                </p>

              </div>

              <div className="rounded-xl bg-slate-50 p-3">

                <p className="text-[10px] text-slate-400">
                  Benchmark
                </p>

                <p className="mt-1 text-lg font-bold text-slate-700">
                  {item.benchmark}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   DIFFERENCE BADGE
========================================================= */

function DifferenceBadge({
  difference,
}) {
  const positive = difference > 0;
  const negative = difference < 0;

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
        positive
          ? "bg-blue-50 text-blue-600"
          : negative
            ? "bg-rose-50 text-rose-600"
            : "bg-slate-100 text-slate-500"
      }`}
    >
      {difference > 0 ? "+" : ""}
      {difference}
    </span>
  );
}


/* =========================================================
   4. PERCENTILE
========================================================= */

function PercentileCard({
  percentile,
}) {
  if (
    percentile === null ||
    percentile === undefined
  ) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Your Percentile
        </p>

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          Percentile Coming Soon
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Complete more comparable assessments to establish a reliable percentile.
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Your Percentile
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {percentile}th Percentile
          </p>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            You performed better than approximately{" "}
            <span className="font-semibold text-slate-700">
              {percentile}%
            </span>{" "}
            of candidates in the comparable benchmark group.
          </p>

        </div>


        {/* Percentile Visual */}
        <div className="w-full sm:max-w-[280px]">

          <div className="mb-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>

          <div className="relative h-3 rounded-full bg-slate-100">

            <div
              className="h-3 rounded-full bg-blue-500"
              style={{
                width: `${percentile}%`,
              }}
            />

            <div
              className="absolute top-[-4px] h-5 w-1 rounded-full bg-blue-700"
              style={{
                left: `calc(${percentile}% - 2px)`,
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   5. SIMULATION BENCHMARK
========================================================= */

function SimulationBenchmark({
  data,
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

      {data.map((item) => {

        const difference =
          item.yourScore - item.benchmark;

        const above = difference >= 0;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >

            <div className="flex items-start justify-between gap-3">

              <div>
                <p className="text-sm font-bold text-slate-900">
                  {item.company} {item.role}
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  Comparable simulation
                </p>
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                  above
                    ? "bg-blue-50 text-blue-600"
                    : "bg-rose-50 text-rose-600"
                }`}
              >
                {above
                  ? "Above Benchmark"
                  : "Below Benchmark"}
              </span>

            </div>


            <div className="mt-6 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-blue-50 p-3">

                <p className="text-[10px] text-blue-400">
                  Your Score
                </p>

                <p className="mt-1 text-xl font-bold text-blue-600">
                  {item.yourScore}
                </p>

              </div>

              <div className="rounded-xl bg-slate-50 p-3">

                <p className="text-[10px] text-slate-400">
                  Benchmark
                </p>

                <p className="mt-1 text-xl font-bold text-slate-700">
                  {item.benchmark}
                </p>

              </div>

            </div>


            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

              <span className="text-xs text-slate-400">
                Difference
              </span>

              <DifferenceBadge
                difference={difference}
              />

            </div>

          </div>
        );
      })}

    </div>
  );
}


/* =========================================================
   6. WHERE YOU STAND OUT
========================================================= */

function StandOutCard({
  data,
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
          <ArrowUpIcon />
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900">
            Where You Stand Out
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            Areas meaningfully above benchmark.
          </p>
        </div>

      </div>


      <div className="mt-5 space-y-2">

        {data.length > 0 ? (
          data.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-white px-4 py-3"
            >

              <span className="text-sm font-medium text-slate-700">
                {item.name}
              </span>

              <span className="text-sm font-bold text-blue-600">
                +{item.difference}
              </span>

            </div>
          ))
        ) : (
          <NotEnoughDataInline />
        )}

      </div>

    </div>
  );
}


/* =========================================================
   7. WHERE YOU ARE BEHIND
========================================================= */

function BehindCard({
  data,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          <ArrowDownIcon />
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900">
            Where You Are Behind
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            Areas currently below benchmark.
          </p>
        </div>

      </div>


      <div className="mt-5 space-y-2">

        {data.length > 0 ? (
          data.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
            >

              <span className="text-sm font-medium text-slate-700">
                {item.name}
              </span>

              <span className="text-sm font-bold text-rose-600">
                {item.difference}
              </span>

            </div>
          ))
        ) : (
          <NotEnoughDataInline />
        )}

      </div>


      {data.length > 0 && (
        <>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            {data[0].name} performance is currently the largest gap compared with your benchmark group.
          </p>

          <button
            type="button"
            className="mt-4 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View Improvement Plan →
          </button>
        </>
      )}

    </div>
  );
}


/* =========================================================
   8. AI BENCHMARK INSIGHT
========================================================= */

function BenchmarkInsight({
  aboveBenchmark,
  belowBenchmark,
}) {
  const strongest =
    aboveBenchmark[0]?.name || "your stronger areas";

  const largestGap =
    belowBenchmark[0]?.name || "your lower-performing areas";

  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">

      <div className="flex items-start gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
          <SparkIcon />
        </div>

        <div className="min-w-0">

          <h2 className="text-base font-bold text-slate-900">
            AI Insight
          </h2>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
            Your{" "}
            <span className="font-semibold text-blue-600">
              {strongest}
            </span>{" "}
            performance is above the current SDE-1 benchmark.
            {" "}
            <span className="font-semibold text-slate-900">
              {largestGap}
            </span>{" "}
            remains below benchmark and is currently your largest relative gap.
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   9. METHODOLOGY
========================================================= */

function BenchmarkMethodology({
  data,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="flex items-start gap-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
          <InfoIcon />
        </div>

        <div className="min-w-0 flex-1">

          <h2 className="text-base font-bold text-slate-900">
            How Benchmarks Work
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
            Benchmarks are calculated from comparable candidate performance using the same role, assessment type, scoring methodology, and relevant difficulty level.
          </p>


          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

            <MethodologyItem
              label="Benchmark Group"
              value={data.benchmarkGroup}
            />

            <MethodologyItem
              label="Sample Size"
              value={data.sampleSize}
            />

            <MethodologyItem
              label="Last Updated"
              value={data.lastUpdated}
            />

          </div>


          <p className="mt-4 text-[10px] leading-5 text-slate-400">
            The values shown above are illustrative mock data for frontend development. Real benchmark values should come from validated platform data.
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   METHODOLOGY ITEM
========================================================= */

function MethodologyItem({
  label,
  value,
}) {
  return (
    <div className="rounded-xl bg-slate-50 px-4 py-3">

      <p className="text-[10px] font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-700">
        {value}
      </p>

    </div>
  );
}


/* =========================================================
   EMPTY STATE
========================================================= */

function BenchmarkEmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center shadow-sm">

      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
        <ChartIcon />
      </div>

      <h2 className="mt-4 text-lg font-bold text-slate-900">
        Benchmark Data Is Still Building
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        We need more comparable assessment results before we can provide a reliable benchmark.
      </p>

      <button
        type="button"
        className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        Take Another Assessment →
      </button>

    </div>
  );
}


/* =========================================================
   PERSONAL SCORE NOTICE
========================================================= */

function PersonalScoreNotice() {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">

      <p className="text-sm font-semibold text-slate-700">
        Your personal scores are still available.
      </p>

      <p className="mt-1 text-xs text-slate-500">
        Benchmark comparisons will appear once enough reliable comparable data exists.
      </p>

    </div>
  );
}


/* =========================================================
   INLINE EMPTY
========================================================= */

function NotEnoughDataInline() {
  return (
    <div className="rounded-xl bg-slate-50 px-4 py-3">

      <p className="text-xs font-medium text-slate-500">
        Not enough comparable data yet.
      </p>

    </div>
  );
}


/* =========================================================
   ICONS
========================================================= */

function TargetIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}


function ArrowUpIcon() {
  return (
    <svg
      width="18"
      height="18"
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


function ArrowDownIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M18 13l-6 6-6-6" />
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


function ChartIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M7 15l3-4 3 2 5-6" />
    </svg>
  );
}