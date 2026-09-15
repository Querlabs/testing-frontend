"use client";

import { useState } from "react";
import {
  Plus,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Clock3,
  FileText,
  RotateCcw,
  Play,
  ClipboardCheck,
  Building2,
} from "lucide-react";
import Link from "next/link";


// =====================================================
// MOCK DATA
// =====================================================

const initialAssessments = [
  {
    id: 1,
    company: "Google",
    role: "SDE-1",
    experience: "1–2 YOE",
    type: "Company Simulation",
    jdAdded: true,
    status: "Not Started",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "SDE-1",
    experience: "1–2 YOE",
    type: "Company Simulation",
    jdAdded: true,
    status: "Completed",
    score: 78,
  },
  {
    id: 3,
    company: "Amazon",
    role: "SDE-1",
    experience: "2–3 YOE",
    type: "Generic Simulation",
    jdAdded: false,
    status: "In Progress",
    progress: 45,
  },
];


// =====================================================
// OPTIONS
// =====================================================

const roleOptions = [
  "SDE-1",
  "SDE-2",
  "Frontend Developer",
  "Backend Developer",
];

const companyOptions = [
  "Google",
  "Microsoft",
  "Amazon",
  "Salesforce",
  "Other",
];

const experienceOptions = [
  "0–1 YOE",
  "1–2 YOE",
  "2–3 YOE",
  "3–5 YOE",
];


// =====================================================
// STATUS STYLES
// =====================================================

const statusStyles = {
  "Not Started": {
    badge: "bg-slate-50 text-slate-600 border-slate-200",
    dot: "bg-slate-400",
  },

  "In Progress": {
    badge: "bg-blue-50 text-blue-600 border-blue-100",
    dot: "bg-blue-500",
  },

  Completed: {
    badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dot: "bg-emerald-500",
  },
};


// =====================================================
// ASSESSMENT CARD
// =====================================================

function AssessmentCard({
  assessment,
  onStart,
  onViewResult,
  onRetest,
  onContinue,
}) {
  const status = statusStyles[assessment.status];

  return (
    <div className="bg-white border border-slate-200 rounded-[20px] shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">

      <div className="p-5 sm:p-6">

        {/* =========================================
            TOP
        ========================================= */}

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

          <div className="flex items-start gap-3 min-w-0">

            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>

            <div className="min-w-0">

              <h3 className="text-base font-bold text-slate-950">
                {assessment.company}
              </h3>

              <p className="text-sm text-slate-600 mt-0.5">
                {assessment.role}
                <span className="text-slate-300 mx-1.5">·</span>
                {assessment.experience}
              </p>

            </div>

          </div>


          {/* Status */}
          <span
            className={`
              self-start shrink-0 inline-flex items-center gap-1.5
              px-2.5 py-1.5 rounded-full border
              text-[10px] font-bold
              ${status.badge}
            `}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
            />

            {assessment.status}
          </span>

        </div>


        {/* =========================================
            DETAILS
        ========================================= */}

        <div className="mt-5 flex flex-wrap items-center gap-2">

          <span className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-600">
            {assessment.type}
          </span>


          {assessment.jdAdded && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-[11px] font-medium text-blue-600">
              <FileText className="w-3 h-3" />
              JD Added
            </span>
          )}

        </div>


        {/* =========================================
            PROGRESS / SCORE
        ========================================= */}

        {assessment.status === "In Progress" && (
          <div className="mt-5">

            <div className="flex items-center justify-between mb-2">

              <span className="text-xs font-medium text-slate-500">
                Assessment Progress
              </span>

              <span className="text-xs font-bold text-blue-600">
                {assessment.progress}%
              </span>

            </div>

            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">

              <div
                className="h-full bg-blue-600 rounded-full"
                style={{
                  width: `${assessment.progress}%`,
                }}
              />

            </div>

          </div>
        )}


        {assessment.status === "Completed" && (
          <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">

            <span className="text-xs text-slate-500">
              Assessment Score
            </span>

            <span className="text-lg font-bold text-slate-950">
              {assessment.score}
              <span className="text-xs font-medium text-slate-400">
                {" "}/ 100
              </span>
            </span>

          </div>
        )}


        {/* =========================================
            ACTIONS
        ========================================= */}

        <div className="mt-5 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-end gap-2">

          {assessment.status === "Not Started" && (
            <Link
              // onClick={() => onStart(assessment)}
              href={"/coding-round"}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all hover:shadow-md hover:shadow-blue-100"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Start Assessment
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}


          {assessment.status === "In Progress" && (
            <button
              onClick={() => onContinue(assessment)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all hover:shadow-md hover:shadow-blue-100"
            >
              Continue
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}


          {assessment.status === "Completed" && (
            <>
              <button
                onClick={() => onRetest(assessment)}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retest
              </button>

              <button
                onClick={() => onViewResult(assessment)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all hover:shadow-md hover:shadow-blue-100"
              >
                View Result
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}


// =====================================================
// OPTION CARD
// =====================================================

function OptionCard({
  label,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full text-left p-3.5 rounded-xl border
        transition-all duration-200
        ${
          selected
            ? "border-blue-500 bg-blue-50 text-blue-700"
            : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"
        }
      `}
    >

      <div className="flex items-center justify-between">

        <span className="text-xs font-semibold">
          {label}
        </span>

        <div
          className={`
            w-4.5 h-4.5 rounded-full border flex items-center justify-center
            ${
              selected
                ? "bg-blue-600 border-blue-600"
                : "border-slate-300"
            }
          `}
        >
          {selected && (
            <Check className="w-2.5 h-2.5 text-white" />
          )}
        </div>

      </div>

    </button>
  );
}


// =====================================================
// ADD ASSESSMENT MODAL
// =====================================================

function AddAssessmentModal({
  onClose,
  onCreate,
}) {
  const [step, setStep] = useState(1);

  const [config, setConfig] = useState({
    role: "",
    company: "",
    experience: "",
    jobDescription: "",
    genericInterview: false,
  });


  const updateConfig = (key, value) => {
    setConfig((previous) => ({
      ...previous,
      [key]: value,
    }));
  };


  const isStepValid = () => {
    if (step === 1) return Boolean(config.role);

    if (step === 2) {
      return Boolean(
        config.company || config.genericInterview
      );
    }

    if (step === 3) return Boolean(config.experience);

    return true;
  };


  const nextStep = () => {
    if (!isStepValid()) return;

    if (step < 5) {
      setStep((previous) => previous + 1);
    }
  };


  const previousStep = () => {
    if (step > 1) {
      setStep((previous) => previous - 1);
    }
  };


  const createAssessment = () => {

    const newAssessment = {
      id: Date.now(),

      company: config.genericInterview
        ? "Generic Interview"
        : config.company,

      role: config.role,

      experience: config.experience,

      type: config.genericInterview
        ? "Generic Simulation"
        : "Company Simulation",

      jdAdded: Boolean(
        config.jobDescription.trim()
      ),

      status: "Not Started",
    };

    onCreate(newAssessment);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
      />


      {/* Modal */}
      <div className="relative w-full max-w-[680px] max-h-[90vh] overflow-y-auto bg-white rounded-[24px] shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                New Assessment
              </p>

              <h2 className="text-xl font-bold text-slate-950 mt-1">
                Configure Your Interview
              </h2>

            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-slate-500" />
            </button>

          </div>


          {/* Progress */}
          <div className="flex items-center gap-1.5 mt-5">

            {[1, 2, 3, 4, 5].map((number) => (

              <div
                key={number}
                className={`
                  h-1 flex-1 rounded-full
                  ${
                    number <= step
                      ? "bg-blue-600"
                      : "bg-slate-100"
                  }
                `}
              />

            ))}

          </div>

        </div>


        {/* Body */}
        <div className="p-6">


          {/* ======================================
              STEP 1
          ====================================== */}

          {step === 1 && (
            <div>

              <StepTitle
                number="Step 1"
                title="Choose Your Target Role"
                description="Select the role you're preparing to interview for."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {roleOptions.map((role) => (
                  <OptionCard
                    key={role}
                    label={role}
                    selected={config.role === role}
                    onClick={() =>
                      updateConfig("role", role)
                    }
                  />
                ))}

              </div>

            </div>
          )}


          {/* ======================================
              STEP 2
          ====================================== */}

          {step === 2 && (
            <div>

              <StepTitle
                number="Step 2"
                title="Choose Company"
                description="Customize your simulation around a company."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {companyOptions.map((company) => (
                  <OptionCard
                    key={company}
                    label={company}
                    selected={
                      config.company === company &&
                      !config.genericInterview
                    }
                    onClick={() =>
                      setConfig((previous) => ({
                        ...previous,
                        company,
                        genericInterview: false,
                      }))
                    }
                  />
                ))}


                <OptionCard
                  label="Generic Interview"
                  selected={config.genericInterview}
                  onClick={() =>
                    setConfig((previous) => ({
                      ...previous,
                      company: "",
                      genericInterview: true,
                    }))
                  }
                />

              </div>

              {config.genericInterview && (
                <div className="mt-4 p-3.5 rounded-xl bg-blue-50 border border-blue-100">

                  <p className="text-xs text-blue-700 leading-5">
                    This will create a role-based simulation without
                    company-specific customization.
                  </p>

                </div>
              )}

            </div>
          )}


          {/* ======================================
              STEP 3
          ====================================== */}

          {step === 3 && (
            <div>

              <StepTitle
                number="Step 3"
                title="Choose Your Experience"
                description="We'll use this to calibrate interview difficulty."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {experienceOptions.map((experience) => (
                  <OptionCard
                    key={experience}
                    label={experience}
                    selected={
                      config.experience === experience
                    }
                    onClick={() =>
                      updateConfig(
                        "experience",
                        experience
                      )
                    }
                  />
                ))}

              </div>

            </div>
          )}


          {/* ======================================
              STEP 4
          ====================================== */}

          {step === 4 && (
            <div>

              <StepTitle
                number="Step 4"
                title="Add Your Job Description"
                description="Adding a JD helps personalize your assessment."
              />


              <textarea
                value={config.jobDescription}
                onChange={(event) =>
                  updateConfig(
                    "jobDescription",
                    event.target.value
                  )
                }
                rows={8}
                placeholder="Paste your Job Description"
                className="
                  w-full resize-none
                  rounded-2xl
                  border border-slate-200
                  bg-slate-50/50
                  px-4 py-4
                  text-sm text-slate-800
                  placeholder:text-slate-400
                  outline-none
                  focus:border-blue-400
                  focus:ring-4 focus:ring-blue-50
                  transition-all
                "
              />


              <button
                type="button"
                onClick={nextStep}
                className="mt-3 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
              >
                Skip for now
              </button>

            </div>
          )}


          {/* ======================================
              STEP 5 — REVIEW
          ====================================== */}

          {step === 5 && (
            <div>

              <StepTitle
                number="Step 5"
                title="Review Your Assessment"
                description="Everything looks good? Create your simulation."
              />


              {/* Selected Config */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-slate-950">
                      {config.genericInterview
                        ? "Generic Interview"
                        : config.company}
                    </h3>

                    <p className="text-sm text-slate-500 mt-0.5">
                      {config.role}
                      <span className="mx-1.5 text-slate-300">
                        ·
                      </span>
                      {config.experience}
                    </p>

                  </div>

                </div>

              </div>


              <div className="mt-5">

                <h3 className="text-base font-bold text-slate-950">
                  Interview Readiness Assessment
                </h3>


                {/* Rounds */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">

                    <p className="text-[11px] text-slate-400">
                      Rounds
                    </p>

                    <p className="text-xs font-semibold text-slate-800 mt-2">
                      Coding → Technical → Behavioral
                    </p>

                  </div>


                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">

                    <p className="text-[11px] text-slate-400">
                      Estimated Duration
                    </p>

                    <p className="text-xs font-semibold text-slate-800 mt-2">
                      ~90 minutes
                    </p>

                  </div>

                </div>


                {/* Areas */}
                <div className="mt-5">

                  <p className="text-xs font-semibold text-slate-900 mb-3">
                    Assessment Areas
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">

                    {[
                      "Problem Solving / DSA",
                      "Technical Knowledge",
                      "Communication & Explanation",
                      "Code Quality / Debugging",
                      "Reasoning & Trade-offs",
                      "Behavioral / Interview Skills",
                    ].map((area) => (

                      <div
                        key={area}
                        className="flex items-center gap-2"
                      >

                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>

                        <span className="text-xs text-slate-600">
                          {area}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>


              {/* Create */}
              <button
                type="button"
                onClick={createAssessment}
                className="w-full mt-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-md hover:shadow-blue-100"
              >
                Create Assessment
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}


          {/* ======================================
              NAVIGATION
          ====================================== */}

          {step < 5 && (
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-100">

              <button
                type="button"
                disabled={step === 1}
                onClick={previousStep}
                className={`
                  inline-flex items-center gap-2
                  px-3.5 py-2.5 rounded-xl
                  text-xs font-semibold
                  ${
                    step === 1
                      ? "text-slate-300 cursor-not-allowed"
                      : "text-slate-600 hover:bg-slate-50"
                  }
                `}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>


              <button
                type="button"
                disabled={!isStepValid()}
                onClick={nextStep}
                className={`
                  inline-flex items-center gap-2
                  px-4 py-2.5 rounded-xl
                  text-xs font-semibold
                  ${
                    isStepValid()
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }
                `}
              >
                Continue
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}


// =====================================================
// STEP TITLE
// =====================================================

function StepTitle({
  number,
  title,
  description,
}) {
  return (
    <div className="mb-6">

      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
        {number}
      </p>

      <h3 className="text-xl font-bold text-slate-950 mt-1">
        {title}
      </h3>

      <p className="text-sm text-slate-500 mt-1.5">
        {description}
      </p>

    </div>
  );
}


// =====================================================
// MAIN PAGE
// =====================================================

export default function MyAssessments() {

  const [assessments, setAssessments] = useState(
    initialAssessments
  );

  const [showAddModal, setShowAddModal] = useState(false);


  // ===================================================
  // CREATE ASSESSMENT
  // ===================================================

  const handleCreateAssessment = (newAssessment) => {

    setAssessments((previous) => [
      newAssessment,
      ...previous,
    ]);

    setShowAddModal(false);
  };


  // ===================================================
  // ACTIONS
  // ===================================================

  const handleStart = (assessment) => {
    console.log("Start Assessment:", assessment);
  };

  const handleContinue = (assessment) => {
    console.log("Continue Assessment:", assessment);
  };

  const handleViewResult = (assessment) => {
    console.log("View Result:", assessment);
  };

  const handleRetest = (assessment) => {
    console.log("Retest Assessment:", assessment);
  };


  // ===================================================
  // EMPTY STATE
  // ===================================================

  if (assessments.length === 0) {
    return (
      <div className="w-full">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">

          <div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              My Assessments
            </h1>

            <p className="text-sm text-slate-500 mt-1.5">
              Manage and start your interview readiness assessments.
            </p>

          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all hover:shadow-md hover:shadow-blue-100"
          >
            <Plus className="w-4 h-4" />
            Add Assessment
          </button>

        </div>


        <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm min-h-[400px] flex items-center justify-center p-8">

          <div className="text-center max-w-md">

            <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-blue-600" />
            </div>

            <h2 className="text-xl font-bold text-slate-950 mt-5">
              No assessments yet
            </h2>

            <p className="text-sm text-slate-500 leading-6 mt-2">
              Create your first interview simulation to discover
              your interview readiness.
            </p>

            <button
              onClick={() => setShowAddModal(true)}
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Assessment
            </button>

          </div>

        </div>


        {showAddModal && (
          <AddAssessmentModal
            onClose={() => setShowAddModal(false)}
            onCreate={handleCreateAssessment}
          />
        )}

      </div>
    );
  }


  // ===================================================
  // MAIN
  // ===================================================

  return (
    <div className="w-full">

      {/* ================================================
          HEADER
      ================================================= */}

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-7">

        <div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            My Assessments
          </h1>

          <p className="text-sm text-slate-500 mt-1.5">
            Manage and start your interview readiness assessments.
          </p>

        </div>


        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all hover:shadow-md hover:shadow-blue-100"
        >
          <Plus className="w-4 h-4" />
          Add Assessment
        </button>

      </div>


      {/* ================================================
          SUMMARY
      ================================================= */}

      <div className="flex items-center gap-2 mb-5">

        <span className="text-xs text-slate-400">
          {assessments.length} assessment
          {assessments.length !== 1 ? "s" : ""}
        </span>

        <span className="w-1 h-1 rounded-full bg-slate-300" />

        <span className="text-xs text-slate-400">
          {assessments.filter(
            (item) => item.status === "Completed"
          ).length} completed
        </span>

      </div>


      {/* ================================================
          ASSESSMENT LIST
      ================================================= */}

      <div className="space-y-4">

        {assessments.map((assessment) => (

          <AssessmentCard
            key={assessment.id}
            assessment={assessment}
            onStart={handleStart}
            onContinue={handleContinue}
            onViewResult={handleViewResult}
            onRetest={handleRetest}
          />

        ))}

      </div>


      {/* ================================================
          MODAL
      ================================================= */}

      {showAddModal && (
        <AddAssessmentModal
          onClose={() => setShowAddModal(false)}
          onCreate={handleCreateAssessment}
        />
      )}

    </div>
  );
}