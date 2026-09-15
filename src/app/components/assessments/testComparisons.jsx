"use client";

import { useMemo, useState } from "react";

/* =========================================================
   MOCK DATA
========================================================= */

const interviewAssessments = [
  {
    id: 1,
    name: "Google SDE-1",
    overall: 82,
    coding: 84,
    technical: 81,
    communication: 86,
    behavioral: 77,
    status: "Almost Ready",
    completed: "Sep 14, 2026",
  },
  {
    id: 2,
    name: "Microsoft SDE-1",
    overall: 78,
    coding: 76,
    technical: 79,
    communication: 72,
    behavioral: 80,
    status: "Almost Ready",
    completed: "Sep 11, 2026",
  },
  {
    id: 3,
    name: "Amazon SDE-1",
    overall: 74,
    coding: 71,
    technical: 76,
    communication: 78,
    behavioral: 70,
    status: "Needs Improvement",
    completed: "Sep 08, 2026",
  },
];

const communicationAssessments = [
  {
    id: 1,
    name: "Google Behavioral Round",
    overall: 84,
    clarity: 86,
    confidence: 82,
    structure: 81,
    conciseness: 76,
    pace: 78,
    fillerWords: 84,
    completed: "Sep 13, 2026",
  },
  {
    id: 2,
    name: "Technical Explanation Test",
    overall: 81,
    clarity: 88,
    confidence: 79,
    structure: 78,
    conciseness: 73,
    pace: 80,
    fillerWords: 81,
    completed: "Sep 12, 2026",
  },
  {
    id: 3,
    name: "Microsoft HR Round",
    overall: 78,
    clarity: 82,
    confidence: 75,
    structure: 71,
    conciseness: 68,
    pace: 76,
    fillerWords: 76,
    completed: "Sep 10, 2026",
  },
  {
    id: 4,
    name: "Tell Me About Yourself",
    overall: 72,
    clarity: 76,
    confidence: 73,
    structure: 65,
    conciseness: 70,
    pace: 72,
    fillerWords: 70,
    completed: "Sep 08, 2026",
  },
];

const practiceData = {
  coding: [
    {
      name: "SDE-1 Coding Assessment",
      score: 82,
      accuracy: 88,
      solved: 8,
      time: 84,
      difficulty: "Medium",
    },
    {
      name: "Backend Coding Assessment",
      score: 76,
      accuracy: 81,
      solved: 7,
      time: 76,
      difficulty: "Medium",
    },
    {
      name: "Advanced Coding Assessment",
      score: 68,
      accuracy: 72,
      solved: 5,
      time: 61,
      difficulty: "Hard",
    },
  ],

  aptitude: [
    {
      name: "Quantitative Aptitude",
      score: 84,
      accuracy: 90,
      attempted: 30,
      correct: 27,
      time: 87,
    },
    {
      name: "Logical Reasoning",
      score: 79,
      accuracy: 84,
      attempted: 28,
      correct: 24,
      time: 80,
    },
    {
      name: "Data Interpretation",
      score: 76,
      accuracy: 81,
      attempted: 25,
      correct: 20,
      time: 74,
    },
    {
      name: "CS Fundamentals",
      score: 72,
      accuracy: 77,
      attempted: 30,
      correct: 23,
      time: 70,
    },
  ],

  technical: [
    {
      name: "OOP Fundamentals",
      score: 81,
      accuracy: 87,
      attempted: 25,
      correct: 22,
    },
    {
      name: "DBMS Fundamentals",
      score: 76,
      accuracy: 82,
      attempted: 25,
      correct: 20,
    },
    {
      name: "Operating Systems",
      score: 73,
      accuracy: 78,
      attempted: 25,
      correct: 19,
    },
    {
      name: "Computer Networks",
      score: 78,
      accuracy: 84,
      attempted: 25,
      correct: 21,
    },
  ],
};


/* =========================================================
   MAIN PAGE
========================================================= */

export default function ScoreComparisonPage() {
  const [assessmentType, setAssessmentType] = useState("All");
  const [timeRange, setTimeRange] = useState("All Time");

  const filteredInterviews = useMemo(() => {
    if (
      assessmentType !== "All" &&
      assessmentType !== "Interview"
    ) {
      return [];
    }

    return interviewAssessments;
  }, [assessmentType]);

  const filteredCommunication = useMemo(() => {
    if (
      assessmentType !== "All" &&
      assessmentType !== "Communication"
    ) {
      return [];
    }

    return communicationAssessments;
  }, [assessmentType]);

  const showPractice =
    assessmentType === "All" ||
    assessmentType === "Practice";

  return (
    <div className="w-full">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <PageHeader
        title="Score Comparison"
        subtitle="Compare your performance across interviews, communication tests, and practice assessments."
        supportingText="See where you perform strongest and where your biggest gaps remain."
      />


      {/* =====================================================
          FILTERS
      ===================================================== */}

      <FilterBar
        assessmentType={assessmentType}
        setAssessmentType={setAssessmentType}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />


      {/* =====================================================
          SECTION 1 — INTERVIEW ASSESSMENTS
      ===================================================== */}

      {(assessmentType === "All" ||
        assessmentType === "Interview") && (
        <section className="mt-8">

          <SectionHeader
            title="Interview Assessment Comparison"
            subtitle="Compare your performance across completed interview simulations."
          />

          {filteredInterviews.length > 0 ? (
            <>
              <InterviewComparison
                data={filteredInterviews}
              />

              <ComparisonVisual
                data={filteredInterviews}
              />

              <AIInsightCard
                title="AI Insight"
                text="You perform strongest in Google-style technical interviews, while Amazon-style behavioral evaluation is currently your biggest gap."
                supportingText="Your coding and technical scores remain consistently above 75, while behavioral performance varies more across assessments."
              />
            </>
          ) : (
            <EmptyState
              text="No interview assessments completed yet."
              button="Take an Assessment →"
            />
          )}

        </section>
      )}


      {/* =====================================================
          SECTION 2 — COMMUNICATION
      ===================================================== */}

      {(assessmentType === "All" ||
        assessmentType === "Communication") && (
        <section className="mt-12">

          <SectionHeader
            title="Communication Test Comparison"
            subtitle="Compare how you communicate across different interview scenarios."
          />

          {filteredCommunication.length > 0 ? (
            <>
              <CommunicationComparison
                data={filteredCommunication}
              />

              <CommunicationVisual
                data={filteredCommunication}
              />

              <AIInsightCard
                title="AI Insight"
                text="Your technical explanations are stronger than your behavioral communication. Answer structure is the most consistent weakness across your communication tests."
                supportingText="Strongest: Clarity — 88"
                warningText="Needs Attention: Answer Structure"
              />
            </>
          ) : (
            <EmptyState
              text="No communication assessments completed yet."
              button="Practice Communication →"
            />
          )}

        </section>
      )}


      {/* =====================================================
          SECTION 3 — PRACTICE
      ===================================================== */}

      {showPractice && (
        <section className="mt-12">

          <SectionHeader
            title="Practice Performance"
            subtitle="Compare your performance across completed coding, aptitude, and technical practice assessments."
          />

          <PracticeComparison
            data={practiceData}
          />

          <AIInsightCard
            title="AI Insight"
            text="Your coding practice performance is improving, but advanced problems remain significantly weaker than SDE-1 level problems. CS Fundamentals is currently your weakest technical practice area."
            supportingText="Strongest Practice Area: Quantitative Aptitude — 84"
            warningText="Needs Attention: Advanced Coding — 68"
          />

        </section>
      )}


      {/* =====================================================
          OVERALL SUMMARY
      ===================================================== */}

      {assessmentType === "All" && (
        <OverallComparisonSummary
          interviews={interviewAssessments}
          communications={communicationAssessments}
          practice={practiceData}
        />
      )}


      {/* =====================================================
          FINAL AI INSIGHTS
      ===================================================== */}

      {assessmentType === "All" && (
        <FinalAIInsights />
      )}

    </div>
  );
}


/* =========================================================
   PAGE HEADER
========================================================= */

function PageHeader({
  title,
  subtitle,
  supportingText,
}) {
  return (
    <div className="mb-6">

      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h1>

      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px]">
        {subtitle}
      </p>

      <p className="mt-1 text-xs text-slate-400 sm:text-sm">
        {supportingText}
      </p>

    </div>
  );
}


/* =========================================================
   FILTER BAR
========================================================= */

function FilterBar({
  assessmentType,
  setAssessmentType,
  timeRange,
  setTimeRange,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

          <span className="text-xs font-semibold text-slate-500">
            Assessment Type
          </span>

          <div className="flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1">

            {[
              "All",
              "Interview",
              "Communication",
              "Practice",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setAssessmentType(item)}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                  assessmentType === item
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>


        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

          <span className="text-xs font-semibold text-slate-500">
            Time
          </span>

          <select
            value={timeRange}
            onChange={(e) =>
              setTimeRange(e.target.value)
            }
            className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 outline-none focus:border-blue-400"
          >
            <option>All Time</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>

        </div>

      </div>

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
   INTERVIEW COMPARISON
========================================================= */

function InterviewComparison({ data }) {
  const metrics = [
    ["Overall", "overall"],
    ["Coding", "coding"],
    ["Technical", "technical"],
    ["Communication", "communication"],
    ["Behavioral", "behavioral"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">

        <table className="w-full min-w-[760px]">

          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">

              <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500">
                Assessment
              </th>

              {metrics.map(([label]) => (
                <th
                  key={label}
                  className="px-4 py-4 text-center text-xs font-semibold text-slate-500"
                >
                  {label}
                </th>
              ))}

              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-500">
                Status
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-500">
                Completed
              </th>

            </tr>
          </thead>

          <tbody>

            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 last:border-0"
              >

                <td className="px-5 py-5">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                </td>

                {metrics.map(([, key]) => (
                  <td
                    key={key}
                    className="px-4 py-5 text-center"
                  >
                    <ScoreBadge
                      score={item[key]}
                      large={key === "overall"}
                    />
                  </td>
                ))}

                <td className="px-4 py-5">
                  <StatusBadge status={item.status} />
                </td>

                <td className="whitespace-nowrap px-4 py-5 text-xs text-slate-500">
                  {item.completed}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>


      {/* Mobile Cards */}
      <div className="divide-y divide-slate-100 md:hidden">

        {data.map((item) => (
          <div
            key={item.id}
            className="p-4"
          >

            <div className="flex items-start justify-between gap-3">

              <div>
                <p className="text-sm font-bold text-slate-900">
                  {item.name}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {item.completed}
                </p>
              </div>

              <StatusBadge status={item.status} />

            </div>


            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">

              {metrics.map(([label, key]) => (
                <MetricBox
                  key={key}
                  label={label}
                  score={item[key]}
                  highlight={key === "overall"}
                />
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   INTERVIEW VISUAL
========================================================= */

function ComparisonVisual({ data }) {
  const metrics = [
    ["Overall Score", "overall"],
    ["Coding", "coding"],
    ["Technical Knowledge", "technical"],
    ["Communication", "communication"],
    ["Behavioral", "behavioral"],
  ];

  return (
    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="mb-6">
        <h3 className="text-sm font-bold text-slate-900">
          Interview Performance Comparison
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Compare key dimensions across completed simulations.
        </p>
      </div>

      <div className="space-y-5">

        {metrics.map(([label, key]) => (
          <div key={key}>

            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600">
                {label}
              </span>
            </div>

            <div className="space-y-2">

              {data.map((item) => (
                <div
                  key={`${key}-${item.id}`}
                  className="flex items-center gap-3"
                >

                  <span className="w-[110px] shrink-0 truncate text-[11px] text-slate-500 sm:w-[140px]">
                    {item.name}
                  </span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{
                        width: `${item[key]}%`,
                      }}
                    />
                  </div>

                  <span className="w-7 text-right text-xs font-bold text-slate-700">
                    {item[key]}
                  </span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   COMMUNICATION COMPARISON
========================================================= */

function CommunicationComparison({ data }) {
  const metrics = [
    ["Overall", "overall"],
    ["Clarity", "clarity"],
    ["Confidence", "confidence"],
    ["Answer Structure", "structure"],
    ["Conciseness", "conciseness"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">

        <table className="w-full min-w-[700px]">

          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">

              <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500">
                Test
              </th>

              {metrics.map(([label]) => (
                <th
                  key={label}
                  className="px-4 py-4 text-center text-xs font-semibold text-slate-500"
                >
                  {label}
                </th>
              ))}

              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-500">
                Completed
              </th>

            </tr>
          </thead>

          <tbody>

            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 last:border-0"
              >

                <td className="px-5 py-5">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                </td>

                {metrics.map(([, key]) => (
                  <td
                    key={key}
                    className="px-4 py-5 text-center"
                  >
                    <ScoreBadge
                      score={item[key]}
                      large={key === "overall"}
                    />
                  </td>
                ))}

                <td className="whitespace-nowrap px-4 py-5 text-xs text-slate-500">
                  {item.completed}
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

            <div className="flex items-start justify-between gap-3">

              <div>
                <p className="text-sm font-bold text-slate-900">
                  {item.name}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {item.completed}
                </p>
              </div>

              <ScoreBadge
                score={item.overall}
                large
              />

            </div>


            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">

              <MetricBox
                label="Clarity"
                score={item.clarity}
              />

              <MetricBox
                label="Confidence"
                score={item.confidence}
              />

              <MetricBox
                label="Structure"
                score={item.structure}
              />

              <MetricBox
                label="Conciseness"
                score={item.conciseness}
              />

              <MetricBox
                label="Speaking Pace"
                score={item.pace}
              />

              <MetricBox
                label="Filler Words"
                score={item.fillerWords}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   COMMUNICATION VISUAL
========================================================= */

function CommunicationVisual({ data }) {
  const metrics = [
    ["Overall", "overall"],
    ["Clarity", "clarity"],
    ["Confidence", "confidence"],
    ["Answer Structure", "structure"],
    ["Conciseness", "conciseness"],
    ["Speaking Pace", "pace"],
  ];

  return (
    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <h3 className="text-sm font-bold text-slate-900">
        Communication Performance Comparison
      </h3>

      <p className="mt-1 text-xs text-slate-500">
        Compare communication dimensions across different scenarios.
      </p>

      <div className="mt-6 space-y-5">

        {metrics.map(([label, key]) => (
          <div key={key}>

            <div className="mb-2 text-xs font-semibold text-slate-600">
              {label}
            </div>

            <div className="space-y-2">

              {data.map((item) => (
                <div
                  key={`${key}-${item.id}`}
                  className="flex items-center gap-3"
                >

                  <span className="w-[110px] shrink-0 truncate text-[11px] text-slate-500 sm:w-[150px]">
                    {item.name}
                  </span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{
                        width: `${item[key]}%`,
                      }}
                    />
                  </div>

                  <span className="w-7 text-right text-xs font-bold text-slate-700">
                    {item[key]}
                  </span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   PRACTICE COMPARISON
========================================================= */

function PracticeComparison({ data }) {
  return (
    <div className="space-y-6">

      <PracticeCategory
        title="Coding Practice"
        subtitle="Compare coding performance across different difficulty levels."
        data={data.coding}
        columns={[
          ["Score", "score"],
          ["Accuracy", "accuracy"],
          ["Problems Solved", "solved"],
          ["Time Performance", "time"],
          ["Difficulty", "difficulty"],
        ]}
      />

      <PracticeCategory
        title="Aptitude Practice"
        subtitle="Compare aptitude performance across completed assessments."
        data={data.aptitude}
        columns={[
          ["Score", "score"],
          ["Accuracy", "accuracy"],
          ["Questions", "attempted"],
          ["Correct", "correct"],
          ["Time Performance", "time"],
        ]}
      />

      <PracticeCategory
        title="Technical Practice"
        subtitle="Compare performance across core technical subjects."
        data={data.technical}
        columns={[
          ["Score", "score"],
          ["Accuracy", "accuracy"],
          ["Questions", "attempted"],
          ["Correct", "correct"],
        ]}
      />

    </div>
  );
}


/* =========================================================
   PRACTICE CATEGORY
========================================================= */

function PracticeCategory({
  title,
  subtitle,
  data,
  columns,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-100 px-5 py-4">

        <h3 className="text-sm font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          {subtitle}
        </p>

      </div>


      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">

              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500">
                Assessment
              </th>

              {columns.map(([label]) => (
                <th
                  key={label}
                  className="px-4 py-3 text-center text-xs font-semibold text-slate-500"
                >
                  {label}
                </th>
              ))}

            </tr>
          </thead>

          <tbody>

            {data.map((item) => (
              <tr
                key={item.name}
                className="border-b border-slate-100 last:border-0"
              >

                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-slate-800">
                    {item.name}
                  </span>
                </td>

                {columns.map(([label, key]) => (
                  <td
                    key={key}
                    className="px-4 py-4 text-center"
                  >

                    {key === "difficulty" ? (
                      <span className="text-xs font-medium text-slate-500">
                        {item[key]}
                      </span>
                    ) : (
                      <span
                        className={`text-xs font-semibold ${
                          key === "score"
                            ? "text-blue-600"
                            : "text-slate-600"
                        }`}
                      >
                        {item[key]}
                        {["score", "accuracy", "time"].includes(key)
                          ? "%"
                          : ""}
                      </span>
                    )}

                  </td>
                ))}

              </tr>
            ))}

          </tbody>

        </table>

      </div>


      {/* Mobile */}
      <div className="divide-y divide-slate-100 md:hidden">

        {data.map((item) => (
          <div
            key={item.name}
            className="p-4"
          >

            <div className="flex items-center justify-between gap-3">

              <p className="text-sm font-semibold text-slate-800">
                {item.name}
              </p>

              <span className="text-base font-bold text-blue-600">
                {item.score}
              </span>

            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">

              {columns
                .filter(([label]) => label !== "Score")
                .map(([label, key]) => (
                  <div
                    key={key}
                    className="rounded-xl bg-slate-50 px-3 py-2"
                  >
                    <p className="text-[10px] font-medium text-slate-400">
                      {label}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-700">
                      {item[key]}
                      {["accuracy", "time"].includes(key)
                        ? "%"
                        : ""}
                    </p>
                  </div>
                ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   AI INSIGHT CARD
========================================================= */

function AIInsightCard({
  title,
  text,
  supportingText,
  warningText,
}) {
  return (
    <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">

      <div className="flex items-start gap-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M8.5 14.5a6 6 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
          </svg>

        </div>

        <div className="min-w-0">

          <h3 className="text-sm font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            {text}
          </p>

          {supportingText && (
            <p className="mt-3 text-xs leading-5 text-slate-500">
              {supportingText}
            </p>
          )}

          {warningText && (
            <div className="mt-3 inline-flex rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs font-medium text-slate-600">
              {warningText}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   OVERALL SUMMARY
========================================================= */

function OverallComparisonSummary({
  interviews,
  communications,
  practice,
}) {
  const communicationClarity = Math.max(
    ...communications.map((item) => item.clarity)
  );

  const technicalAverage = Math.round(
    interviews.reduce(
      (sum, item) => sum + item.technical,
      0
    ) / interviews.length
  );

  const behavioralAverage = Math.round(
    interviews.reduce(
      (sum, item) => sum + item.behavioral,
      0
    ) / interviews.length
  );

  return (
    <section className="mt-12">

      <SectionHeader
        title="What Your Scores Tell You"
        subtitle="A compact view of the strongest, most consistent, and biggest gap across your current results."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <SummaryCard
          label="Strongest Area"
          value={`Communication Clarity — ${communicationClarity}`}
          description="Your clarity remains one of your strongest measured skills."
        />

        <SummaryCard
          label="Most Consistent Area"
          value={`Technical Knowledge — ${technicalAverage} avg.`}
          description="Technical scores remain relatively stable across interviews."
        />

        <SummaryCard
          label="Biggest Gap"
          value={`Behavioral Communication — ${behavioralAverage} avg.`}
          description="Behavioral performance shows the largest weakness across interviews."
        />

      </div>

    </section>
  );
}


/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
  label,
  value,
  description,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-3 text-base font-bold leading-6 text-slate-900">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   FINAL AI INSIGHTS
========================================================= */

function FinalAIInsights() {
  const insights = [
    "Your technical performance is consistently stronger than your behavioral performance.",
    "Communication clarity is strong, but answer structure continues to reduce your overall communication score.",
    "Your coding performance drops significantly as difficulty increases.",
    "Your practice performance is improving, but this improvement has not yet fully translated into your full interview assessments.",
  ];

  return (
    <section className="mt-12">

      <div className="rounded-2xl border border-blue-100 bg-white shadow-sm">

        <div className="border-b border-slate-100 bg-blue-50/50 px-5 py-5 sm:px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v18" />
                <path d="M3 12h18" />
                <path d="M5 5l14 14" />
                <path d="M19 5L5 19" />
              </svg>

            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">
                Key Insights
              </h2>

              <p className="mt-0.5 text-xs text-slate-500">
                Patterns identified from your comparison data.
              </p>
            </div>

          </div>

        </div>


        <div className="divide-y divide-slate-100">

          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex gap-4 px-5 py-5 sm:px-6"
            >

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                {index + 1}
              </div>

              <p className="text-sm leading-6 text-slate-700">
                {insight}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SCORE BADGE
========================================================= */

function ScoreBadge({
  score,
  large = false,
}) {
  return (
    <span
      className={`font-bold ${
        large
          ? "text-base text-blue-600"
          : "text-sm text-slate-700"
      }`}
    >
      {score}
      <span className="ml-0.5 text-[10px] font-medium text-slate-400">
        /100
      </span>
    </span>
  );
}


/* =========================================================
   METRIC BOX
========================================================= */

function MetricBox({
  label,
  score,
  highlight = false,
}) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        highlight
          ? "border-blue-100 bg-blue-50/60"
          : "border-slate-100 bg-slate-50"
      }`}
    >
      <p className="truncate text-[10px] font-medium text-slate-400">
        {label}
      </p>

      <p
        className={`mt-1 text-sm font-bold ${
          highlight
            ? "text-blue-600"
            : "text-slate-700"
        }`}
      >
        {score}
      </p>
    </div>
  );
}


/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ status }) {
  const almostReady = status === "Almost Ready";

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        almostReady
          ? "bg-blue-50 text-blue-700"
          : "bg-amber-50 text-amber-700"
      }`}
    >
      {status}
    </span>
  );
}


/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({
  text,
  button,
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">

      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-400">

        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
          />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>

      </div>

      <p className="mt-3 text-sm font-medium text-slate-600">
        {text}
      </p>

      <button
        type="button"
        className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        {button}
      </button>

    </div>
  );
}