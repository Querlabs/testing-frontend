"use client";

import { useRef, useState } from "react";

function FileIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function UploadIcon() {
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
      <path d="M12 16V4" />
      <path d="m7 9 5-5 5 5" />
      <path d="M5 20h14" />
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

function CheckIcon() {
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
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function ResumeProfessionalLinks() {
  const fileInputRef = useRef(null);

  const [resume, setResume] = useState({
    name: "Alex_Johnson_Resume.pdf",
    size: "1.8 MB",
    date: "Uploaded Sep 12, 2026",
  });

  const [linkedin, setLinkedin] = useState(
    "https://linkedin.com/in/alexjohnson"
  );

  const [github, setGithub] = useState(
    "https://github.com/alexjohnson"
  );

  const [saved, setSaved] = useState(false);

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Resume must be smaller than 5 MB.");
      return;
    }

    const sizeInMB = (file.size / (1024 * 1024)).toFixed(1);

    setResume({
      name: file.name,
      size: `${sizeInMB} MB`,
      date: "Selected just now",
    });

    setSaved(false);
  };

  const handleViewResume = () => {
    alert("Resume preview would open here.");
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3500);
  };

  const handleCancel = () => {
    setLinkedin("https://linkedin.com/in/alexjohnson");
    setGithub("https://github.com/alexjohnson");
    setSaved(false);
  };

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-[20px] font-bold tracking-[-0.02em] text-slate-900">
          Resume & Professional Links
        </h2>

        <p className="mt-1.5 max-w-2xl text-[14px] leading-6 text-slate-500">
          Keep your resume and professional profiles updated for
          personalized interview preparation.
        </p>
      </div>

      {/* Main Card */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
        <div className="p-5 sm:p-6 lg:p-7">
          {/* Resume */}
          <div>
            <div className="mb-2.5 flex items-center justify-between gap-3">
              <label className="text-[13px] font-semibold text-slate-700">
                Default Resume
              </label>

              <span className="text-[12px] text-slate-400">
                PDF only • Max 5 MB
              </span>
            </div>

            {resume ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3.5">
                    {/* PDF Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                      <FileIcon />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-semibold text-slate-800">
                        {resume.name}
                      </p>

                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-slate-400">
                        <span>{resume.size}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{resume.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={handleViewResume}
                      className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                      View Resume
                    </button>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="rounded-lg border border-blue-100 bg-blue-50 px-3.5 py-2 text-[12px] font-semibold text-blue-700 transition hover:bg-blue-100"
                    >
                      Replace
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex min-h-[150px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/60 px-5 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50/40"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <UploadIcon />
                </div>

                <span className="text-[14px] font-semibold text-slate-700">
                  Upload Resume
                </span>

                <span className="mt-1 text-[12px] text-slate-400">
                  PDF only • Max 5 MB
                </span>
              </button>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf,.pdf"
              onChange={handleResumeChange}
              className="hidden"
            />

            {/* Resume Info */}
            <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-blue-50/70 px-4 py-3 text-[12px] leading-5 text-blue-700">
              <span className="mt-0.5 shrink-0 text-blue-600">
                <InfoIcon />
              </span>

              <p>
                Your resume helps AI personalize interview questions around
                your experience, projects, and technical skills.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-slate-100" />

          {/* Professional Links */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* LinkedIn */}
            <div>
              <label
                htmlFor="linkedin-profile"
                className="mb-2.5 block text-[13px] font-semibold text-slate-700"
              >
                LinkedIn Profile
              </label>

              <div className="relative">
                <input
                  id="linkedin-profile"
                  type="url"
                  value={linkedin}
                  onChange={(e) => {
                    setLinkedin(e.target.value);
                    setSaved(false);
                  }}
                  placeholder="https://linkedin.com/in/yourname"
                  className="h-[48px] w-full rounded-xl border border-slate-200 bg-white px-4 pr-11 text-[13px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <ExternalIcon />
                </span>
              </div>
            </div>

            {/* GitHub */}
            <div>
              <label
                htmlFor="github-profile"
                className="mb-2.5 block text-[13px] font-semibold text-slate-700"
              >
                GitHub Profile
              </label>

              <div className="relative">
                <input
                  id="github-profile"
                  type="url"
                  value={github}
                  onChange={(e) => {
                    setGithub(e.target.value);
                    setSaved(false);
                  }}
                  placeholder="https://github.com/yourusername"
                  className="h-[48px] w-full rounded-xl border border-slate-200 bg-white px-4 pr-11 text-[13px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <ExternalIcon />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-7">
          <div className="min-h-[20px]">
            {saved && (
              <div className="flex items-center gap-1.5 text-[12px] font-medium text-emerald-600">
                <CheckIcon />
                <span>Profile updated successfully.</span>
              </div>
            )}
          </div>

          <div className="flex w-full gap-2 sm:w-auto">
            <button
              type="button"
              onClick={handleCancel}
              className="flex h-[42px] flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-[13px] font-semibold text-slate-600 transition hover:bg-slate-50 sm:flex-none"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="flex h-[42px] flex-1 items-center justify-center rounded-lg bg-blue-600 px-5 text-[13px] font-semibold text-white shadow-[0_5px_14px_rgba(37,99,235,0.18)] transition hover:bg-blue-700 sm:flex-none"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}