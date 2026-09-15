"use client";

import { useState } from "react";

const ROLE_OPTIONS = [
  "Software Engineer — SDE-1",
  "Software Engineer — SDE-2",
  "Frontend Engineer",
  "Backend Engineer",
  "Full Stack Engineer",
];

const EXPERIENCE_OPTIONS = [
  "0–1 Years",
  "1–2 Years",
  "2–3 Years",
  "3–5 Years",
  "5+ Years",
];

const COMPANY_OPTIONS = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Salesforce",
  "Adobe",
  "Uber",
  "Atlassian",
  "Other",
];

const FOCUS_OPTIONS = [
  "Coding",
  "Technical",
  "Communication",
  "Behavioral",
  "System Design",
];

function ChevronDown() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export default function CareerInterviewTargets() {
  const [targetRole, setTargetRole] = useState(
    "Software Engineer — SDE-1"
  );

  const [experience, setExperience] = useState("1–2 Years");

  const [companies, setCompanies] = useState([
    "Google",
    "Microsoft",
    "Amazon",
    "Salesforce",
  ]);

  const [focus, setFocus] = useState([
    "Coding",
    "Technical",
    "Communication",
  ]);

  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const [showCompanyOptions, setShowCompanyOptions] = useState(false);

  const toggleCompany = (company) => {
    setCompanies((current) => {
      if (current.includes(company)) {
        return current.filter((item) => item !== company);
      }

      return [...current, company];
    });
  };

  const removeCompany = (company) => {
    setCompanies((current) =>
      current.filter((item) => item !== company)
    );
  };

  const toggleFocus = (item) => {
    setFocus((current) => {
      if (current.includes(item)) {
        return current.filter((value) => value !== item);
      }

      return [...current, item];
    });
  };

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-[20px] font-bold tracking-[-0.02em] text-slate-900">
          Career & Interview Targets
        </h2>

        <p className="mt-1.5 max-w-2xl text-[14px] leading-6 text-slate-500">
          Tell us what roles and companies you're preparing for so we can
          personalize your interview experience.
        </p>
      </div>

      {/* Main Card */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Target Role */}
          <div className="border-b border-slate-200 p-5 sm:p-6 lg:border-r">
            <label className="mb-2.5 block text-[13px] font-semibold text-slate-700">
              Target Role
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowRoleOptions((value) => !value)}
                className="flex h-[48px] w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 text-left text-[14px] font-medium text-slate-800 transition hover:border-blue-300 hover:bg-blue-50/40"
              >
                <span>{targetRole}</span>

                <span className="text-slate-400">
                  <ChevronDown />
                </span>
              </button>

              {showRoleOptions && (
                <div className="absolute left-0 right-0 top-[56px] z-30 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                  {ROLE_OPTIONS.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => {
                        setTargetRole(role);
                        setShowRoleOptions(false);
                      }}
                      className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-[13px] transition ${
                        targetRole === role
                          ? "bg-blue-50 font-semibold text-blue-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Experience Level */}
          <div className="border-b border-slate-200 p-5 sm:p-6">
            <label className="mb-2.5 block text-[13px] font-semibold text-slate-700">
              Experience Level
            </label>

            <div className="flex flex-wrap gap-2">
              {EXPERIENCE_OPTIONS.map((item) => {
                const selected = experience === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setExperience(item)}
                    className={`rounded-full border px-3.5 py-2 text-[13px] font-medium transition ${
                      selected
                        ? "border-blue-600 bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.16)]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Target Companies */}
          <div className="border-b border-slate-200 p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <label className="mb-2.5 block text-[13px] font-semibold text-slate-700">
              Target Companies
            </label>

            <div className="flex flex-wrap gap-2">
              {companies.map((company) => (
                <div
                  key={company}
                  className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[13px] font-medium text-blue-700"
                >
                  <span>{company}</span>

                  <button
                    type="button"
                    onClick={() => removeCompany(company)}
                    className="flex h-4 w-4 items-center justify-center rounded-full text-blue-400 transition hover:bg-blue-100 hover:text-blue-700"
                    aria-label={`Remove ${company}`}
                  >
                    <XIcon />
                  </button>
                </div>
              ))}
            </div>

            <div className="relative mt-3">
              <button
                type="button"
                onClick={() =>
                  setShowCompanyOptions((value) => !value)
                }
                className="inline-flex h-[38px] items-center gap-1.5 rounded-lg border border-dashed border-slate-300 bg-white px-3 text-[13px] font-semibold text-slate-600 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
              >
                <PlusIcon />
                Add Company
              </button>

              {showCompanyOptions && (
                <div className="absolute left-0 top-[46px] z-30 w-[220px] overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                  {COMPANY_OPTIONS.map((company) => {
                    const selected = companies.includes(company);

                    return (
                      <button
                        key={company}
                        type="button"
                        onClick={() => toggleCompany(company)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] transition ${
                          selected
                            ? "bg-blue-50 font-semibold text-blue-700"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <span>{company}</span>

                        {selected && (
                          <span className="text-[12px] text-blue-600">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Interview Focus */}
          <div className="p-5 sm:p-6">
            <label className="mb-2.5 block text-[13px] font-semibold text-slate-700">
              Interview Focus
            </label>

            <div className="flex flex-wrap gap-2">
              {FOCUS_OPTIONS.map((item) => {
                const selected = focus.includes(item);

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleFocus(item)}
                    className={`rounded-full border px-3.5 py-2 text-[13px] font-medium transition ${
                      selected
                        ? "border-blue-600 bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.16)]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="border-t border-slate-200 px-5 py-4 sm:px-6">
          <div className="flex items-start gap-2.5 rounded-xl bg-blue-50/70 px-4 py-3 text-[13px] leading-5 text-blue-700">
            <span className="mt-0.5 shrink-0 text-blue-600">
              <InfoIcon />
            </span>

            <p>
              Your targets help personalize AI-generated assessments,
              interview questions, and readiness analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}