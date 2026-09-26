"use client";
import { useAuth } from "../context/auth.context";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  FileText,
  Sparkles,
  TrendingUp,
  Upload,
} from "lucide-react";

const roleOptions = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Data Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
  "QA / Automation Engineer",
  "Product Manager",
  "Other",
];

const companyOptions = [
  {
    name: "Startups",
    description: "Fast-moving teams",
  },
  {
    name: "Mid-size Companies",
    description: "Growing organizations",
  },
  {
    name: "MNCs",
    description: "Global organizations",
  },
  {
    name: "FAANG / Big Tech",
    description: "Top technology companies",
  },
  {
    name: "Product Companies",
    description: "Build real products",
  },
  {
    name: "Service Companies",
    description: "Technology & consulting",
  },
];

const experienceOptions = [
  {
    value: "1-2 Years",
    description: "Early career roles",
  },
  {
    value: "2-3 Years",
    description: "Growing professional",
  },
  {
    value: "3-5 Years",
    description: "Experienced professional",
  },
  {
    value: "5+ Years",
    description: "Senior-level roles",
  },
];

const stepData = {
  1: {
    icon: BriefcaseBusiness,
    label: "CAREER DIRECTION",
    title: "What role are you aiming for?",
    description:
      "Select the role you want to prepare for. We'll personalize your interview preparation around it.",
  },
  2: {
    icon: FileText,
    label: "YOUR PROFILE",
    title: "Let's understand where you are today.",
    description:
      "Upload your latest resume so we can understand your experience, skills and background.",
  },
  3: {
    icon: Building2,
    label: "TARGET COMPANIES",
    title: "Where do you want to work?",
    description:
      "Select the types of companies you're planning to target.",
  },
  4: {
    icon: TrendingUp,
    label: "TARGET LEVEL",
    title: "How far are you aiming?",
    description:
      "Choose the experience level of the roles you're targeting.",
  },
};

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("next");
  const {completeOnboarding, Loading} = useAuth();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    targetJobRole: "",
    resume: null,
    targetCompanies: [],
    targetExperience: "",
  });

  const totalSteps = 4;

  const currentStep = stepData[step];
  const StepIcon = currentStep.icon;

  const nextStep = () => {
    if (step < totalSteps) {
      setDirection("next");
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setDirection("back");
      setStep((prev) => prev - 1);
    }
  };

  const handleCompanyChange = (company) => {
    setFormData((prev) => ({
      ...prev,
      targetCompanies: prev.targetCompanies.includes(company)
        ? prev.targetCompanies.filter((item) => item !== company)
        : [...prev.targetCompanies, company],
    }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };


  const handleSubmit = async () => {
    try {
      setError("");

      const data = new FormData();

      data.append("targetJobRole", formData.targetJobRole);

      data.append(
        "targetCompanies",
        JSON.stringify(formData.targetCompanies)
      );

      data.append(
        "targetExperience",
        formData.targetExperience
      );

      data.append("resume", formData.resume);

      const response = await completeOnboarding(data);

      if (response?.success) {
        router.push("/user-dashboard")
      }
    } catch (error) {
      console.error("Onboarding Error:", error);

      setError(
        error.message || "Something went wrong during onboarding"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] md:h-screen md:overflow-hidden">

      {/* ================= HEADER ================= */}

      <header className="h-[60px] border-b border-[#E2E8F0] bg-white sm:h-[64px]">
        <div className="mx-auto flex h-full max-w-[1000px] items-center justify-between px-4 sm:px-5">

          <div className="text-[17px] font-bold tracking-[-0.7px] text-[#0F172A] sm:text-[18px]">
            Interview
            <span className="text-[#2563EB]">Proof</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden text-[11px] font-medium text-[#94A3B8] xs:block sm:block">
              Profile setup
            </span>

            <span className="text-[11px] font-bold text-[#0F172A] sm:text-[12px]">
              {String(step).padStart(2, "0")}
              <span className="mx-1 text-[#CBD5E1]">/</span>
              {String(totalSteps).padStart(2, "0")}
            </span>
          </div>

        </div>
      </header>

      {/* ================= PROGRESS ================= */}

      <div className="h-[3px] bg-[#E2E8F0]">
        <div
          className="h-full bg-[#2563EB] transition-all duration-500 ease-out"
          style={{
            width: `${(step / totalSteps) * 100}%`,
          }}
        />
      </div>

      {/* ================= MAIN ================= */}

      <main className="min-h-[calc(100vh-63px)] md:h-[calc(100vh-67px)] md:overflow-hidden">

        <div className="mx-auto flex min-h-[calc(100vh-63px)] max-w-[1000px] items-center justify-center px-4 py-7 sm:px-5 sm:py-10 md:h-full md:min-h-0 md:py-0">

          <div className="w-full max-w-[650px]">

            {/* ================= QUESTION HEADER ================= */}

            <div className="mb-6 sm:mb-7">

              <div className="mb-4 flex items-center gap-2.5 sm:gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DBEAFE] bg-[#EFF6FF] sm:h-10 sm:w-10">
                  <StepIcon
                    size={18}
                    strokeWidth={1.8}
                    className="text-[#2563EB]"
                  />
                </div>

                <div>
                  <p className="text-[8px] font-bold tracking-[1.4px] text-[#2563EB] sm:text-[9px]">
                    {currentStep.label}
                  </p>

                  <p className="mt-0.5 text-[8px] text-[#94A3B8] sm:text-[9px]">
                    Step {step} of {totalSteps}
                  </p>
                </div>

              </div>

              <h1 className="max-w-[620px] text-[27px] font-bold leading-[1.12] tracking-[-1.2px] text-[#0F172A] sm:text-[34px] sm:tracking-[-1.4px] md:text-[36px]">
                {currentStep.title}
              </h1>

              <p className="mt-2.5 max-w-[540px] text-[11px] leading-5 text-[#64748B] sm:mt-3 sm:text-[12px]">
                {currentStep.description}
              </p>

            </div>

            {/* ================= ANIMATED CONTENT ================= */}

            <div
              key={step}
              className={
                direction === "next"
                  ? "onboarding-next"
                  : "onboarding-back"
              }
            >

              {/* ================================================= */}
              {/* STEP 1 - ROLE */}
              {/* ================================================= */}

              {step === 1 && (
                <div>

                  <div className="rounded-2xl border border-[#E2E8F0] bg-white p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-2">

                    <div className="relative">

                      <select
                        autoFocus
                        value={formData.targetJobRole}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            targetJobRole: e.target.value,
                          }))
                        }
                        className={`h-[54px] w-full cursor-pointer appearance-none rounded-xl bg-white px-3.5 pr-11 text-[13px] font-medium outline-none sm:h-[58px] sm:px-4 sm:text-[14px] ${
                          formData.targetJobRole
                            ? "text-[#000000]"
                            : "text-[#000000]"
                        }`}
                      >

                        <option value="" disabled>
                          Select your target role
                        </option>

                        {roleOptions.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}

                      </select>

                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] sm:right-4">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>

                    </div>

                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">

                    <p className="hidden text-[9px] text-[#94A3B8] sm:block">
                      You can update your target role later.
                    </p>

                    <p className="text-[9px] text-[#94A3B8] sm:hidden">
                      Choose your target role
                    </p>

                    <button
                      onClick={nextStep}
                      disabled={!formData.targetJobRole}
                      className="flex cursor-pointer h-[43px] shrink-0 items-center gap-1.5 rounded-xl bg-[#2563EB] px-4 text-[10px] font-bold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-40 sm:h-[44px] sm:gap-2 sm:px-5 sm:text-[11px]"
                    >
                      Continue
                      <ArrowRight size={13} />
                    </button>

                  </div>

                </div>
              )}

              {/* ================================================= */}
              {/* STEP 2 - RESUME */}
              {/* ================================================= */}

              {step === 2 && (
                <div>

                  <label className="group flex min-h-[205px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-4 transition duration-200 hover:border-[#2563EB] hover:bg-[#F8FBFF] sm:min-h-[230px] sm:px-6">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl sm:h-12 sm:w-12 ${
                        formData.resume
                          ? "bg-[#ECFDF5]"
                          : "bg-[#EFF6FF]"
                      }`}
                    >
                      {formData.resume ? (
                        <Check
                          size={20}
                          className="text-[#16A34A]"
                        />
                      ) : (
                        <Upload
                          size={19}
                          strokeWidth={1.8}
                          className="text-[#2563EB]"
                        />
                      )}
                    </div>

                    <p className="mt-3 max-w-[270px] truncate text-center text-[12px] font-bold text-[#0F172A] sm:mt-4 sm:max-w-[400px] sm:text-[13px]">
                      {formData.resume
                        ? formData.resume.name
                        : "Upload your resume"}
                    </p>

                    <p className="mt-1.5 text-[9px] text-[#94A3B8] sm:text-[10px]">
                      PDF or DOCX · Maximum 5MB
                    </p>

                    {!formData.resume && (
                      <span className="mt-3 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-1.5 text-[9px] font-semibold text-[#334155] shadow-sm sm:mt-4 sm:px-4 sm:py-2 sm:text-[10px]">
                        Choose file
                      </span>
                    )}

                    {formData.resume && (
                      <span className="mt-3 rounded-lg bg-[#ECFDF5] px-3.5 py-1.5 text-[8px] font-semibold text-[#15803D] sm:mt-4 sm:px-4 sm:py-2 sm:text-[9px]">
                        Resume selected
                      </span>
                    )}

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleResumeChange}
                    />

                  </label>

                  <div className="mt-4 flex justify-between">

                    <button
                      onClick={previousStep}
                      className="flex cursor-pointer h-[43px] items-center gap-1.5 rounded-xl px-3 text-[10px] font-semibold text-[#64748B] transition hover:bg-white sm:h-[44px] sm:gap-2 sm:px-4 sm:text-[11px]"
                    >
                      <ArrowLeft size={13} />
                      Back
                    </button>

                    <button
                      onClick={nextStep}
                      disabled={!formData.resume}
                      className="flex cursor-pointer h-[43px] items-center gap-1.5 rounded-xl bg-[#2563EB] px-4 text-[10px] font-bold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-40 sm:h-[44px] sm:gap-2 sm:px-5 sm:text-[11px]"
                    >
                      Continue
                      <ArrowRight size={13} />
                    </button>

                  </div>

                </div>
              )}

              {/* ================================================= */}
              {/* STEP 3 - COMPANIES */}
              {/* ================================================= */}

              {step === 3 && (
                <div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">

                    {companyOptions.map((company) => {

                      const selected =
                        formData.targetCompanies.includes(
                          company.name
                        );

                      return (
                        <button
                          key={company.name}
                          type="button"
                          onClick={() =>
                            handleCompanyChange(company.name)
                          }
                          className={`group flex min-h-[60px] items-center justify-between rounded-xl border px-3.5 text-left transition duration-200 sm:min-h-[68px] sm:px-4 ${
                            selected
                              ? "border-[#2563EB] bg-[#EFF6FF]"
                              : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                          }`}
                        >

                          <div className="min-w-0 pr-3">

                            <p
                              className={`truncate text-[10px] font-bold sm:text-[11px] ${
                                selected
                                  ? "text-[#2563EB]"
                                  : "text-[#334155]"
                              }`}
                            >
                              {company.name}
                            </p>

                            <p className="mt-1 text-[8px] text-[#94A3B8]">
                              {company.description}
                            </p>

                          </div>

                          <div
                            className={`flex h-[18px] cursor-pointer w-[18px] shrink-0 items-center justify-center rounded-md border sm:h-5 sm:w-5 ${
                              selected
                                ? "border-[#2563EB] bg-[#2563EB]"
                                : "border-[#CBD5E1] bg-white"
                            }`}
                          >
                            {selected && (
                              <Check
                                size={10}
                                strokeWidth={3}
                                className="text-white"
                              />
                            )}
                          </div>

                        </button>
                      );
                    })}

                  </div>

                  <p className="mt-3 text-[8px] text-[#94A3B8] sm:text-[9px]">
                    Select all company types you're interested in.
                  </p>

                  <div className="mt-3 flex justify-between">

                    <button
                      onClick={previousStep}
                      className="flex cursor-pointer h-[43px] items-center gap-1.5 rounded-xl px-3 text-[10px] font-semibold text-[#64748B] transition hover:bg-white sm:h-[44px] sm:gap-2 sm:px-4 sm:text-[11px]"
                    >
                      <ArrowLeft size={13} />
                      Back
                    </button>

                    <button
                      onClick={nextStep}
                      disabled={
                        formData.targetCompanies.length === 0
                      }
                      className="flex h-[43px] cursor-pointer items-center gap-1.5 rounded-xl bg-[#2563EB] px-4 text-[10px] font-bold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-40 sm:h-[44px] sm:gap-2 sm:px-5 sm:text-[11px]"
                    >
                      Continue
                      <ArrowRight size={13} />
                    </button>

                  </div>

                </div>
              )}

              {/* ================================================= */}
              {/* STEP 4 - EXPERIENCE */}
              {/* ================================================= */}

              {step === 4 && (
                <div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">

                    {experienceOptions.map((experience) => {

                      const selected =
                        formData.targetExperience ===
                        experience.value;

                      return (
                        <button
                          key={experience.value}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              targetExperience:
                                experience.value,
                            }))
                          }
                          className={`relative min-h-[73px] cursor-pointer rounded-xl border px-4 text-left transition duration-200 sm:min-h-[82px] ${
                            selected
                              ? "border-[#2563EB] bg-[#EFF6FF]"
                              : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                          }`}
                        >

                          {selected && (
                            <span className="absolute right-3 top-3 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#2563EB]">
                              <Check
                                size={10}
                                strokeWidth={3}
                                className="text-white"
                              />
                            </span>
                          )}

                          <p
                            className={`text-[13px] font-bold sm:text-[14px] ${
                              selected
                                ? "text-[#2563EB]"
                                : "text-[#0F172A]"
                            }`}
                          >
                            {experience.value}
                          </p>

                          <p className="mt-1 text-[8px] text-[#94A3B8] sm:mt-1.5 sm:text-[9px]">
                            {experience.description}
                          </p>

                        </button>
                      );
                    })}

                  </div>

                  {/* Summary */}

                  <div className="mt-3.5 rounded-2xl border border-[#DBEAFE] bg-[#F8FBFF] p-3.5 sm:mt-4 sm:p-4">

                    <div className="flex items-center gap-2">

                      <Sparkles
                        size={13}
                        strokeWidth={1.8}
                        className="text-[#2563EB]"
                      />

                      <p className="text-[8px] font-bold uppercase tracking-[1.1px] text-[#2563EB] sm:text-[9px]">
                        Your preparation goal
                      </p>

                    </div>

                    <p className="mt-1.5 text-[14px] font-bold tracking-[-0.3px] text-[#0F172A] sm:mt-2 sm:text-[16px]">
                      {formData.targetJobRole}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5">

                      {formData.targetCompanies.map(
                        (company) => (
                          <span
                            key={company}
                            className="rounded-md bg-white px-2 py-1 text-[7px] font-semibold text-[#475569] shadow-sm sm:text-[8px]"
                          >
                            {company}
                          </span>
                        )
                      )}

                      {formData.targetExperience && (
                        <span className="rounded-md bg-white px-2 py-1 text-[7px] font-semibold text-[#475569] shadow-sm sm:text-[8px]">
                          {formData.targetExperience}
                        </span>
                      )}

                    </div>

                  </div>

                  <div className="mt-3.5 flex justify-between sm:mt-4">

                    <button
                      onClick={previousStep}
                      className="flex cursor-pointer h-[43px] items-center gap-1.5 rounded-xl px-3 text-[10px] font-semibold text-[#64748B] transition hover:bg-white sm:h-[44px] sm:gap-2 sm:px-4 sm:text-[11px]"
                    >
                      <ArrowLeft size={13} />
                      Back
                    </button>

                    <button
                      onClick={handleSubmit}
                      disabled={!formData.targetExperience}
                      className="flex cursor-pointer h-[43px] items-center gap-1.5 rounded-xl bg-[#2563EB] px-4 text-[10px] font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,.18)] transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-40 sm:h-[44px] sm:gap-2 sm:px-6 sm:text-[11px]"
                    >
                      {Loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        On-Boarding you ...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Let's start 
                          <Arrow />
                        </span>
                      )}
                      <ArrowRight size={13} />
                    </button>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </main>

      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`

        @keyframes onboardingNext {
          from {
            opacity: 0;
            transform: translateX(28px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes onboardingBack {
          from {
            opacity: 0;
            transform: translateX(-28px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .onboarding-next {
          animation: onboardingNext 0.35s ease-out;
        }

        .onboarding-back {
          animation: onboardingBack 0.35s ease-out;
        }

        @media (max-width: 640px) {
          .onboarding-next {
            animation-duration: 0.3s;
          }

          .onboarding-back {
            animation-duration: 0.3s;
          }
        }

      `}</style>

    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}