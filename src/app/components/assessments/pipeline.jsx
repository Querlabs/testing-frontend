"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Pencil,
  Sparkles,
  Target,
} from "lucide-react";

// ==================================================
// Mock AI Response
// Replace this object later with actual AI/API output
// ==================================================

const mockPipelineData = {
  role: "Backend Software Engineer",
  experience: "2–4 Years",

  keySkills: ["Java", "Spring Boot", "SQL", "AWS", "System Design"],

  interviewAreas: [
    "DSA",
    "Backend",
    "System Design",
    "Behavioral",
  ],

  rounds: [
    {
      id: 1,
      title: "Online Coding Assessment",
      duration: "60 min",
      focus: [
        "Problem Solving / DSA",
        "Coding",
        "Complexity Analysis",
      ],
      evaluation: ["Problem Solving", "Code Quality"],
    },
    {
      id: 2,
      title: "Technical Interview",
      duration: "45 min",
      focus: [
        "Java",
        "Spring Boot",
        "Backend Architecture",
        "System Design",
      ],
      evaluation: [
        "Technical Knowledge",
        "Reasoning",
        "Communication",
      ],
    },
    {
      id: 3,
      title: "Behavioral Interview",
      duration: "30 min",
      focus: [
        "Communication",
        "Situational Questions",
        "Ownership",
        "Problem Solving",
      ],
      evaluation: ["Communication", "Behavioral Skills"],
    },
  ],

  insight:
    "Based on this JD, backend architecture and system design appear to be high-priority areas.",

  evaluationAreas: 6,
};

// ==================================================
// Example JD
// Used only for demo / testing
// ==================================================

const exampleJD = `We are looking for a Backend Software Engineer with 2–4 years of experience to build scalable backend services.

The ideal candidate should have strong experience with Java, Spring Boot, SQL and AWS. You will design APIs, work on distributed systems, improve application performance and collaborate with cross-functional teams.

Strong problem-solving skills, understanding of system design and excellent communication are expected.`;

// ==================================================
// Reusable: AI Badge
// ==================================================

function AIBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-semibold">
      <Sparkles size={13} />
      AI Generated
    </span>
  );
}

// ==================================================
// Reusable: Round Card
// ==================================================

function RoundCard({ round, index, isLast }) {
  return (
    <div className="relative flex gap-4">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-sm font-bold text-blue-600">
          {index + 1}
        </div>

        {!isLast && (
          <div className="w-px flex-1 min-h-[180px] bg-blue-100 mt-1" />
        )}
      </div>

      {/* Round */}
      <div className="flex-1 pb-6">
        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-5 hover:border-blue-100 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Round {index + 1}
              </p>

              <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-900">
                {round.title}
              </h3>
            </div>

            <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1.5 rounded-lg bg-slate-50 text-xs font-medium text-slate-600">
              <Clock3 size={14} />
              {round.duration}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2.5">
                Focus
              </p>

              <div className="space-y-2">
                {round.focus.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2.5">
                Evaluation
              </p>

              <div className="flex flex-wrap gap-2">
                {round.evaluation.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================================================
// Reusable: Pipeline
// ==================================================

function Pipeline({ rounds }) {
  return (
    <div className="space-y-0">
      {rounds.map((round, index) => (
        <RoundCard
          key={round.id}
          round={round}
          index={index}
          isLast={index === rounds.length - 1}
        />
      ))}
    </div>
  );
}

// ==================================================
// Reusable: Role Summary
// ==================================================

function RoleSummary({ data }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
          <Target size={19} className="text-blue-600" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Role Analysis
          </p>

          <h3 className="font-bold text-slate-900">
            {data.role}
          </h3>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Experience
          </p>
          <p className="mt-1.5 text-sm font-medium text-slate-700">
            {data.experience}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Key Skills
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {data.keySkills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Interview Areas
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {data.interviewAreas.map((area) => (
              <span
                key={area}
                className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================================================
// Reusable: Empty / Intro Preview
// ==================================================

function IntroPreview() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
      <div className="w-11 h-11 rounded-xl bg-white border border-blue-100 flex items-center justify-center shadow-sm">
        <Brain size={21} className="text-blue-600" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        Any company. Any role. Any JD.
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
        Paste the job description and we'll build your interview
        simulation around the skills and responsibilities that matter
        most for the role.
      </p>

      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        {[
          "Analyze requirements",
          "Identify key skills",
          "Build likely pipeline",
        ].map((item, index) => (
          <div
            key={item}
            className="bg-white rounded-xl border border-blue-100 p-3"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={15}
                className="text-blue-600"
              />
              <span className="text-xs font-medium text-slate-700">
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================================================
// Main Component
// ==================================================

export default function BuildFromJobDescription({
  onStartSimulation,
  onEditPipeline,
}) {
  const [jobDescription, setJobDescription] = useState("");
  const [pipeline, setPipeline] = useState(null);
  const [isBuilding, setIsBuilding] = useState(false);

  const characterCount = jobDescription.length;

  const totalMinutes = useMemo(() => {
    if (!pipeline) return 0;

    return pipeline.rounds.reduce((total, round) => {
      return total + parseInt(round.duration, 10);
    }, 0);
  }, [pipeline]);

  // --------------------------------------------------
  // Mock AI generation
  // Replace this with API call later
  // --------------------------------------------------

  const handleBuildPipeline = () => {
    if (!jobDescription.trim()) return;

    setIsBuilding(true);

    setTimeout(() => {
      setPipeline(mockPipelineData);
      setIsBuilding(false);
    }, 700);
  };

  const handleUseExample = () => {
    setJobDescription(exampleJD);
  };

  return (
    <div className="w-full space-y-6">
      {/* ==================================================
          Header
      ================================================== */}

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Build Your Interview From a JD
          </h2>

          {pipeline && <AIBadge />}
        </div>

        <p className="mt-1.5 text-sm text-slate-500 max-w-2xl">
          Paste any job description and let AI create a personalized
          interview simulation for that specific role.
        </p>
      </div>

      {/* ==================================================
          JD INPUT
      ================================================== */}

      {!pipeline && (
        <>
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 mb-3">
                <label className="text-sm font-semibold text-slate-900">
                  Job Description
                </label>

                <button
                  onClick={handleUseExample}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Use Example
                </button>
              </div>

              <textarea
                value={jobDescription}
                onChange={(e) =>
                  setJobDescription(e.target.value.slice(0, 10000))
                }
                placeholder="Paste the job description you're applying for..."
                className="w-full min-h-[260px] resize-none rounded-xl border border-slate-200 bg-slate-50/40 p-4 text-sm leading-6 text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition"
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
                <p className="text-xs leading-5 text-slate-400 max-w-xl">
                  We'll analyze the role, required skills, seniority and
                  responsibilities to build a likely interview pipeline.
                </p>

                <span className="text-xs font-medium text-slate-400 whitespace-nowrap">
                  {characterCount.toLocaleString()} / 10,000
                </span>
              </div>
            </div>

            <div className="px-5 sm:px-6 py-4 bg-slate-50/60 border-t border-slate-100 flex justify-end">
              <button
                onClick={handleBuildPipeline}
                disabled={!jobDescription.trim() || isBuilding}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isBuilding ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    Analyzing JD...
                  </>
                ) : (
                  <>
                    Build Interview Pipeline
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>

          <IntroPreview />
        </>
      )}

      {/* ==================================================
          GENERATED PIPELINE
      ================================================== */}

      {pipeline && (
        <div className="space-y-5">
          {/* Pipeline Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Your Interview Pipeline
                </h3>

                <AIBadge />
              </div>

              <p className="mt-1 text-sm text-slate-500">
                AI-generated based on the requirements and skills found
                in your job description.
              </p>
            </div>

            <button
              onClick={() => {
                setPipeline(null);
                setJobDescription("");
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <Pencil size={15} />
              Build Another
            </button>
          </div>

          {/* Important wording */}
          <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
            <Sparkles
              size={17}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <div>
              <p className="text-sm font-semibold text-slate-800">
                Likely interview structure based on this JD
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                This pipeline is an AI-generated estimate, not the
                company's actual interview process.
              </p>
            </div>
          </div>

          {/* Desktop Two Column */}
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-5 items-start">
            {/* Left */}
            <div className="space-y-5">
              <RoleSummary data={pipeline} />

              {/* AI Insights */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <div className="flex items-center gap-2">
                  <Sparkles size={17} className="text-blue-600" />

                  <p className="text-sm font-bold text-slate-900">
                    AI Insight
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pipeline.insight}
                </p>

                <div className="mt-4 pt-4 border-t border-blue-100">
                  <p className="text-sm font-semibold text-blue-700">
                    AI identified {pipeline.evaluationAreas} key
                    interview areas
                  </p>
                </div>
              </div>

              {/* Pipeline Summary */}
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Pipeline Summary
                </p>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">
                      {pipeline.rounds.length}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Rounds
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">
                      ~{totalMinutes}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Minutes
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">
                      {pipeline.evaluationAreas}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Generated Structure
                  </p>

                  <h4 className="mt-1 font-bold text-slate-900">
                    Likely Interview Pipeline
                  </h4>
                </div>

                <FileText
                  size={19}
                  className="text-blue-500"
                />
              </div>

              <Pipeline rounds={pipeline.rounds} />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-semibold text-slate-900">
                Ready to test yourself against this role?
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Review the generated pipeline or start your simulation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => onEditPipeline?.(pipeline)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Pencil size={15} />
                Edit Pipeline
              </button>

              <button
                onClick={() => onStartSimulation?.(pipeline)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-sm transition-colors"
              >
                Start Interview Simulation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}