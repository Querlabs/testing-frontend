// "use client";

// import {
//   ArrowRight,
//   Brain,
//   Code2,
//   Clock3,
//   ListChecks,
// } from "lucide-react";

// // ============================================================
// // MOCK DATA
// // Keep separate from UI so this can later come from an API.
// // ============================================================

// const aptitudeAssessments = [
//   {
//     id: "general-aptitude",
//     title: "General Aptitude",
//     description:
//       "Quantitative Aptitude · Logical Reasoning · Data Interpretation",
//     countLabel: "Questions",
//     count: "30 Questions",
//     duration: "30 min",
//     difficulty: "Mixed",
//   },
//   {
//     id: "logical-reasoning",
//     title: "Logical Reasoning",
//     description: "Logical Reasoning · Analytical Thinking",
//     countLabel: "Questions",
//     count: "25 Questions",
//     duration: "25 min",
//     difficulty: "Medium",
//   },
//   {
//     id: "cs-fundamentals",
//     title: "CS Fundamentals",
//     description: "OOP · DBMS · OS · Computer Networks",
//     countLabel: "Questions",
//     count: "30 Questions",
//     duration: "30 min",
//     difficulty: "Mixed",
//   },
// ];

// const codingAssessments = [
//   {
//     id: "sde1-coding",
//     title: "SDE-1 Coding Assessment",
//     description:
//       "Arrays · Strings · Hashing · Algorithms",
//     countLabel: "Problems",
//     count: "2 Coding Problems",
//     duration: "60 min",
//     difficulty: "Easy → Medium",
//   },
//   {
//     id: "backend-coding",
//     title: "Backend Coding Assessment",
//     description:
//       "Data Structures · Algorithms · Problem Solving",
//     countLabel: "Problems",
//     count: "2 Coding Problems",
//     duration: "60 min",
//     difficulty: "Medium",
//   },
//   {
//     id: "advanced-coding",
//     title: "Advanced Coding Assessment",
//     description:
//       "Algorithms · Optimization · Data Structures",
//     countLabel: "Problems",
//     count: "2 Coding Problems",
//     duration: "75 min",
//     difficulty: "Medium → Hard",
//   },
// ];

// // ============================================================
// // HELPERS
// // ============================================================

// const getDifficultyStyle = (difficulty) => {
//   if (difficulty === "Medium → Hard") {
//     return "bg-orange-50 text-orange-700 border-orange-100";
//   }

//   if (difficulty === "Medium") {
//     return "bg-blue-50 text-blue-700 border-blue-100";
//   }

//   return "bg-slate-50 text-slate-600 border-slate-100";
// };

// // ============================================================
// // REUSABLE PRACTICE CARD
// // ============================================================

// function PracticeAssessmentCard({
//   assessment,
//   type,
//   onStart,
// }) {
//   return (
//     <div className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-5 hover:border-blue-100 hover:shadow-md transition-all">
//       {/* Title */}
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <h3 className="text-base font-bold text-slate-900">
//             {assessment.title}
//           </h3>

//           <p className="mt-2 text-sm leading-5 text-slate-500">
//             {assessment.description}
//           </p>
//         </div>

//         <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
//           {type === "aptitude" ? (
//             <Brain size={18} className="text-blue-600" />
//           ) : (
//             <Code2 size={18} className="text-blue-600" />
//           )}
//         </div>
//       </div>

//       {/* Metadata */}
//       <div className="grid grid-cols-2 gap-3 mt-5">
//         <div className="rounded-xl bg-slate-50 p-3">
//           <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
//             {assessment.countLabel}
//           </p>

//           <p className="mt-1 text-sm font-semibold text-slate-700">
//             {assessment.count}
//           </p>
//         </div>

//         <div className="rounded-xl bg-slate-50 p-3">
//           <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
//             Duration
//           </p>

//           <div className="flex items-center gap-1.5 mt-1">
//             <Clock3 size={13} className="text-slate-400" />

//             <p className="text-sm font-semibold text-slate-700">
//               {assessment.duration}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Difficulty */}
//       <div className="flex items-center justify-between gap-3 mt-4">
//         <span
//           className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold ${getDifficultyStyle(
//             assessment.difficulty
//           )}`}
//         >
//           {assessment.difficulty}
//         </span>

//         <span className="text-xs text-slate-400">
//           Timed Assessment
//         </span>
//       </div>

//       {/* CTA */}
//       <button
//         onClick={() => onStart?.(assessment, type)}
//         className="w-full mt-5 h-10 rounded-xl bg-blue-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
//       >
//         {type === "aptitude"
//           ? "Start Practice"
//           : "Start Assessment"}

//         <ArrowRight size={15} />
//       </button>
//     </div>
//   );
// }

// // ============================================================
// // EMPTY STATE
// // ============================================================

// function EmptyPracticeState() {
//   return (
//     <div className="rounded-2xl border border-slate-100 bg-white py-12 px-6 text-center">
//       <div className="mx-auto w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
//         <ListChecks size={19} className="text-blue-600" />
//       </div>

//       <h3 className="mt-4 font-semibold text-slate-900">
//         No practice assessments available
//       </h3>

//       <p className="mt-1.5 text-sm text-slate-500">
//         This section will show available assessments once they are
//         added.
//       </p>
//     </div>
//   );
// }

// // ============================================================
// // PRACTICE SECTION
// // ============================================================

// function PracticeSection({
//   icon,
//   title,
//   description,
//   assessments,
//   type,
//   viewAllLabel,
//   onStart,
//   onViewAll,
// }) {
//   return (
//     <section>
//       {/* Section Header */}
//       <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
//         <div className="flex items-start gap-3">
//           <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
//             {icon}
//           </div>

//           <div>
//             <h2 className="text-lg sm:text-xl font-bold text-slate-900">
//               {title}
//             </h2>

//             <p className="mt-1 text-sm text-slate-500 max-w-2xl">
//               {description}
//             </p>
//           </div>
//         </div>

//         <button
//           onClick={onViewAll}
//           className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
//         >
//           {viewAllLabel}
//           <ArrowRight size={15} />
//         </button>
//       </div>

//       {/* Cards */}
//       {assessments.length > 0 ? (
//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
//           {assessments.map((assessment) => (
//             <PracticeAssessmentCard
//               key={assessment.id}
//               assessment={assessment}
//               type={type}
//               onStart={onStart}
//             />
//           ))}
//         </div>
//       ) : (
//         <EmptyPracticeState />
//       )}
//     </section>
//   );
// }

// // ============================================================
// // MAIN COMPONENT
// // ============================================================

// export default function TechnicalPractice({
//   onStart,
//   onViewAllAptitude,
//   onViewAllCoding,
// }) {
//   return (
//     <div className="w-full max-w-7xl mx-auto space-y-10 pb-8">
//       {/* ======================================================
//           PAGE HEADER
//       ====================================================== */}
// {/* 
//       <header>
//         <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
//           Technical Practice
//         </h1>

//         <p className="mt-1.5 text-sm text-slate-500">
//           Practice aptitude and coding assessments before your real
//           interview.
//         </p>
//       </header> */}

//         {/* ======================================================
//             CODING ASSESSMENT
//         ====================================================== */}

//         <PracticeSection
//         icon={<Code2 size={20} className="text-blue-600" />}
//         title="Coding Assessment"
//         description="Test your coding skills under timed assessment conditions."
//         assessments={codingAssessments}
//         type="coding"
//         viewAllLabel="View All Coding Assessments"
//         onStart={onStart}
//         onViewAll={onViewAllCoding}
//         />
//       {/* ======================================================
//           APTITUDE PRACTICE
//       ====================================================== */}

//       <PracticeSection
//         icon={<Brain size={20} className="text-blue-600" />}
//         title="Aptitude Practice"
//         description="Practice the aptitude and reasoning assessments commonly used in technical hiring."
//         assessments={aptitudeAssessments}
//         type="aptitude"
//         viewAllLabel="View All Aptitude Practice"
//         onStart={onStart}
//         onViewAll={onViewAllAptitude}
//       />

//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Brain,
  Code2,
  Clock3,
  ListChecks,
  Search,
  SlidersHorizontal,
  Clock
} from "lucide-react";
import { useTest } from "@/app/context/tests.context";

const ROLES = [
  "core-sde-1",
  "core-sde-2",
  "full-stack-developer",
  "backend-engineer",
  "frontend-engineer",
  "data-engineer",
  "ai-ml-engineer",
  "devops-cloud-engineer",
  "java-spring-boot-developer",
];

const formatRole = (role) =>
  (role || "aptitude")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const difficultyLabel = (counts = {}) => {
  const parts = [];

  if (counts.easy) parts.push(`${counts.easy} Easy`);
  if (counts.medium) parts.push(`${counts.medium} Medium`);
  if (counts.hard) parts.push(`${counts.hard} Hard`);

  return parts.length ? parts.join(" · ") : "Mixed Difficulty";
};

function AssessmentCard({ assessment, onStart }) {
  const isAptitude = assessment.type === "aptitude";
  const counts = assessment.difficultyCounts || {};

  const difficulties = [
    {
      label: "Easy",
      count: counts.easy || 0,
      style: "bg-emerald-500",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      label: "Medium",
      count: counts.medium || 0,
      style: "bg-amber-500",
      badge: "bg-amber-50 text-amber-700 border-amber-100",
    },
    {
      label: "Hard",
      count: counts.hard || 0,
      style: "bg-rose-500",
      badge: "bg-rose-50 text-rose-700 border-rose-100",
    },
  ];

  const totalQuestions = assessment.totalQuestions ?? 30;

  return (
    <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_4px_24px_-12px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_-18px_rgba(37,99,235,0.22)]">
      {/* Decorative background */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 ${
          isAptitude
            ? "bg-gradient-to-br from-violet-100/80 via-indigo-50/50 to-transparent"
            : "bg-gradient-to-br from-sky-100/80 via-blue-50/50 to-transparent"
        }`}
      />

      <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover:bg-blue-400/20" />

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] ${
                isAptitude
                  ? "border-violet-200 bg-violet-50/90 text-violet-700"
                  : "border-blue-200 bg-blue-50/90 text-blue-700"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isAptitude ? "bg-violet-500" : "bg-blue-500"
                }`}
              />
              {isAptitude ? "Aptitude" : "Technical"}
            </span>
          </div>

          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
              isAptitude
                ? "border-violet-100 bg-white text-violet-600"
                : "border-blue-100 bg-white text-blue-600"
            }`}
          >
            {isAptitude ? (
              <Brain size={23} strokeWidth={1.8} />
            ) : (
              <Code2 size={23} strokeWidth={1.8} />
            )}
          </div>
        </div>

        {/* Title */}
        <div className="mt-5">
          <h3 className="text-lg font-extrabold leading-7 tracking-tight text-slate-900 transition-colors group-hover:text-blue-700">
            {assessment.title
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          </h3>

          {!isAptitude && (
            <div className="mt-2 inline-flex max-w-full items-center gap-2 rounded-lg bg-slate-100/80 px-2.5 py-1.5">
              <Code2 size={13} className="shrink-0 text-slate-500" />
              <span className="truncate text-xs font-semibold text-slate-600">
                {formatRole(assessment.role)}
              </span>
            </div>
          )}

          {isAptitude && (
            <p className="mt-2 text-sm leading-5 text-slate-500">
              Sharpen your analytical thinking and problem-solving skills.
            </p>
          )}
        </div>

        {/* Question count */}
        <div className="mt-6 rounded-2xl border border-slate-100 bg-white/80 p-4 backdrop-blur-sm">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-slate-500">
                Total questions
              </p>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-3xl font-black tracking-tight text-slate-900">
                  {totalQuestions}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  questions
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-2.5 text-slate-500">
              <ListChecks size={20} />
            </div>
          </div>

          {/* Difficulty distribution bar */}
          <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-slate-100">
            {difficulties.map((item) => (
              <div
                key={item.label}
                title={`${item.label}: ${item.count}`}
                style={{
                  width: `${
                    totalQuestions > 0
                      ? (item.count / totalQuestions) * 100
                      : 0
                  }%`,
                }}
                className={`${item.style} transition-all duration-500`}
              />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            {difficulties.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span
                  className={`h-2 w-2 rounded-full ${item.style}`}
                />
                <span className="text-[11px] font-medium text-slate-500">
                  {item.label}
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-2">
          <Clock className="h-4 w-4 text-blue-400" />
          <span className="text-sm text-blue-300">Time Provided:</span>
          <span className="text-sm font-semibold text-blue-400">1 Hour</span>
        </div>

        {/* Footer CTA */}
        <div className="mt-auto pt-5">
          <button
            onClick={() => onStart?.(assessment, assessment.type)}
            className={`group/btn cursor-pointer flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-lg transition-all duration-200 active:scale-[0.98] ${
              isAptitude
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 shadow-violet-600/15 hover:from-violet-700 hover:to-indigo-700 hover:shadow-violet-600/25"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-600/15 hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-600/25"
            }`}
          >
            {isAptitude ? "Start Practice" : "Start Assessment"}

            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover/btn:translate-x-1"
            />
          </button>

          <p className="mt-3 text-center text-[11px] font-medium text-slate-400">
            <Clock3 size={12} className="mr-1 inline-block" />
            Timed assessment · Track your performance
          </p>
        </div>
      </div>
    </article>
  );
}


function EmptyState({ loading, error, onRetry }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-5 py-14 text-center">
      <ListChecks className="mx-auto text-slate-400" size={32} />

      <h3 className="mt-4 font-semibold text-slate-900">
        {loading
          ? "Loading assessments..."
          : error
            ? "Couldn't load assessments"
            : "No assessments found"}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {loading
          ? "Please wait while we fetch your assessments."
          : error || "Try changing your selected filters."}
      </p>

      {!loading && error && (
        <button
          onClick={onRetry}
          className="mt-4 text-sm font-semibold text-blue-600"
        >
          Try again
        </button>
      )}
    </div>
  );
}

export default function TechnicalPractice({ onStart }) {
  const {
    allTests = [],
    fetchAllTest,
    loadingTests,
    testError,
  } = useTest();

  const [selectedType, setSelectedType] = useState("aptitude");
  const [selectedRole, setSelectedRole] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!allTests || allTests.length === 0) {
      fetchAllTest().catch(() => {});
    }
  }, [allTests, fetchAllTest]);

  const filteredAssessments = useMemo(() => {
    return allTests.filter((assessment) => {
      if (assessment.type !== selectedType) return false;

      if (
        selectedType === "coding" &&
        selectedRole !== "all" &&
        assessment.role !== selectedRole
      ) {
        return false;
      }

      const query = search.trim().toLowerCase();

      if (
        query &&
        ![
          assessment.title,
          assessment.role,
          assessment.type,
        ].some((value) =>
          String(value || "").toLowerCase().includes(query)
        )
      ) {
        return false;
      }

      return true;
    });
  }, [allTests, selectedType, selectedRole, search]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedRole("all");
    setSearch("");
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-7 pb-10">
      {/* Page heading */}
      <header>
        <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
          <SlidersHorizontal size={16} />
          Assessment Center
        </div>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Practice & Assessments
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Choose your assessment category, select your technical role,
          and start practising.
        </p>
      </header>

      {/* Filters */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-5">
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Assessment Category
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleTypeChange("aptitude")}
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  selectedType === "aptitude"
                    ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Brain size={18} />
                Aptitude
              </button>

              <button
                onClick={() => handleTypeChange("coding")}
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  selectedType === "coding"
                    ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Code2 size={18} />
                Coding
              </button>
            </div>
          </div>

          {selectedType === "coding" && (
            <div>
              <label
                htmlFor="role-filter"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Select Technical Role
              </label>

              <select
                id="role-filter"
                value={selectedRole}
                onChange={(event) => setSelectedRole(event.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:max-w-md"
              >
                <option value="all">All Coding Roles</option>

                {ROLES.map((role) => (
                  <option key={role} value={role}>
                    {formatRole(role)}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label
              htmlFor="assessment-search"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Search Assessments
            </label>

            <div className="relative max-w-xl">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="assessment-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by assessment title or role..."
                className="h-11 w-full rounded-xl border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results heading */}
      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {selectedType === "aptitude"
                ? "Aptitude Assessments"
                : "Coding Assessments"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {selectedType === "coding" && selectedRole !== "all"
                ? formatRole(selectedRole)
                : "All matching assessments"}
            </p>
          </div>

          {!loadingTests && !testError && (
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
              {filteredAssessments.length} assessments
            </span>
          )}
        </div>

        {loadingTests && allTests.length === 0 ? (
          <EmptyState loading />
        ) : testError && allTests.length === 0 ? (
          <EmptyState
            error={testError}
            onRetry={() => fetchAllTest().catch(() => {})}
          />
        ) : filteredAssessments.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredAssessments.map((assessment) => (
              <AssessmentCard
                key={assessment.id}
                assessment={assessment}
                onStart={onStart}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </section>
    </div>
  );
}
