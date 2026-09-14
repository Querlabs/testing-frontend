"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";

// --------------------------------------------------
// Mock Data
// Replace this later with API/database response
// --------------------------------------------------

const mockAssessments = [
  {
    id: 1,
    company: "Google",
    role: "SDE-1",
    type: "Company Simulation",
    completed: "12 Sep 2026",
    score: 82,
    status: "Almost Ready",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "SDE-1",
    type: "Company Simulation",
    completed: "08 Sep 2026",
    score: 74,
    status: "Almost Ready",
  },
  {
    id: 3,
    company: "Amazon",
    role: "SDE-1",
    type: "Company Simulation",
    completed: "02 Sep 2026",
    score: 61,
    status: "Needs Improvement",
  },
  {
    id: 4,
    company: "Generic SDE-1",
    role: "SDE-1",
    type: "Role Simulation",
    completed: "28 Aug 2026",
    score: 88,
    status: "Ready",
  },
];

// --------------------------------------------------
// Helpers
// --------------------------------------------------

const getStatusStyle = (status) => {
  switch (status) {
    case "Ready":
      return "bg-emerald-50 text-emerald-700 border-emerald-100";

    case "Almost Ready":
      return "bg-blue-50 text-blue-700 border-blue-100";

    case "Needs Improvement":
      return "bg-orange-50 text-orange-700 border-orange-100";

    default:
      return "bg-gray-50 text-gray-600 border-gray-100";
  }
};

// --------------------------------------------------
// Reusable Assessment Row
// --------------------------------------------------

function AssessmentHistoryRow({ assessment, onViewReport }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-[1.3fr_1fr_1.3fr_1fr_0.8fr_1fr_auto] items-center gap-4 px-5 py-4 border-b border-slate-100 last:border-0">
        <div>
          <p className="font-semibold text-slate-900">
            {assessment.company}
          </p>
          <p className="text-sm text-slate-500 mt-0.5">
            {assessment.role}
          </p>
        </div>

        <div className="text-sm text-slate-600">
          {assessment.type}
        </div>

        <div className="text-sm text-slate-600">
          {assessment.completed}
        </div>

        <div>
          <p className="font-bold text-lg text-slate-900">
            {assessment.score}
            <span className="text-sm font-medium text-slate-400">
              {" "}
              / 100
            </span>
          </p>
        </div>

        <div>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium whitespace-nowrap ${getStatusStyle(
              assessment.status
            )}`}
          >
            {assessment.status}
          </span>
        </div>

        <div />

        <button
          onClick={() => onViewReport?.(assessment)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
        >
          View Report
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden p-4 sm:p-5 border-b border-slate-100 last:border-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-slate-900">
              {assessment.company}
            </h3>

            <p className="text-sm text-slate-500 mt-0.5">
              {assessment.role} · {assessment.type}
            </p>
          </div>

          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium whitespace-nowrap ${getStatusStyle(
              assessment.status
            )}`}
          >
            {assessment.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Completed
            </p>
            <p className="text-sm font-medium text-slate-700 mt-1">
              {assessment.completed}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Score
            </p>
            <p className="text-lg font-bold text-slate-900 mt-0.5">
              {assessment.score}
              <span className="text-sm font-medium text-slate-400">
                {" "}
                / 100
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={() => onViewReport?.(assessment)}
          className="w-full mt-5 h-10 rounded-xl border border-blue-100 bg-blue-50 text-blue-600 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
        >
          View Report
          <ArrowRight size={15} />
        </button>
      </div>
    </>
  );
}

// --------------------------------------------------
// Empty State
// --------------------------------------------------

function EmptyState({ onStartAssessment }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm py-16 px-6 text-center">
      <div className="mx-auto w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
        <SlidersHorizontal size={21} className="text-blue-600" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        No previous assessments
      </h3>

      <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
        Complete an assessment to see your interview performance here.
      </p>

      <button
        onClick={onStartAssessment}
        className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
      >
        Start Assessment
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

// --------------------------------------------------
// Main Component
// --------------------------------------------------

export default function PreviousAssessments({
  assessments = mockAssessments,
  onViewReport,
  onStartAssessment,
}) {
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("All Companies");
  const [sortOrder, setSortOrder] = useState("Newest First");

  const companies = useMemo(() => {
    return [
      "All Companies",
      ...new Set(assessments.map((item) => item.company)),
    ];
  }, [assessments]);

  const filteredAssessments = useMemo(() => {
    let result = [...assessments];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (item) =>
          item.company.toLowerCase().includes(query) ||
          item.role.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query)
      );
    }

    // Company filter
    if (companyFilter !== "All Companies") {
      result = result.filter(
        (item) => item.company === companyFilter
      );
    }

    // Sort
    if (sortOrder === "Highest Score") {
      result.sort((a, b) => b.score - a.score);
    } else {
      // Mock dates are DD MMM YYYY
      result.sort(
        (a, b) =>
          new Date(b.completed) - new Date(a.completed)
      );
    }

    return result;
  }, [assessments, search, companyFilter, sortOrder]);

  return (
    <div className="w-full space-y-5">
      {/* Page Header */}
      {/* <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Previous Assessments
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Review your past interview performance and results.
        </p>
      </div> */}

      {assessments.length === 0 ? (
        <EmptyState onStartAssessment={onStartAssessment} />
      ) : (
        <>
          {/* Filters */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-3 sm:p-4">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search assessments..."
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-50 transition"
                />
              </div>

              {/* Company */}
              <select
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
                className="h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-50"
              >
                {companies.map((company) => (
                  <option key={company}>{company}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-50"
              >
                <option>Newest First</option>
                <option>Highest Score</option>
              </select>
            </div>
          </div>

          {/* Assessment History */}
          {filteredAssessments.length > 0 ? (
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              {/* Desktop Header */}
              <div className="hidden lg:grid grid-cols-[1.3fr_1fr_1.3fr_1fr_0.8fr_1fr_auto] items-center gap-4 px-5 py-3 bg-slate-50/70 border-b border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Company / Role
                </p>

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Assessment Type
                </p>

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Completed
                </p>

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Score
                </p>

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </p>

                <div />

                <div />
              </div>

              {filteredAssessments.map((assessment) => (
                <AssessmentHistoryRow
                  key={assessment.id}
                  assessment={assessment}
                  onViewReport={onViewReport}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm py-14 px-6 text-center">
              <Search
                size={22}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-3 font-semibold text-slate-900">
                No assessments found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or company filter.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}