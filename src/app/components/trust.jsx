"use client";

import { useEffect, useState } from "react";

const companies = [
  {
    name: "Google",
    short: "G",
    gradient: "from-[#4285F4] to-[#34A853]",
  },
  {
    name: "Microsoft",
    short: "M",
    gradient: "from-[#00A4EF] to-[#7FBA00]",
  },
  {
    name: "Amazon",
    short: "a",
    gradient: "from-[#FF9900] to-[#FFB84D]",
  },
  {
    name: "Meta",
    short: "∞",
    gradient: "from-[#0866FF] to-[#8A3FFC]",
  },
  {
    name: "Apple",
    short: "●",
    gradient: "from-[#64748B] to-[#0F172A]",
  },
];

const roles = [
  "Frontend",
  "Backend",
  "Full Stack",
  "Software Engineer",
];

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-20">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Blue Glow */}

        <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#2563EB]/[0.055] blur-[100px]" />

        {/* Side Glows */}

        <div className="absolute -left-32 top-1/2 h-64 w-64 rounded-full bg-[#6366F1]/[0.04] blur-[90px]" />

        <div className="absolute -right-32 top-1/2 h-64 w-64 rounded-full bg-[#2563EB]/[0.04] blur-[90px]" />

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DBE7FF] bg-[#F5F8FF] px-3.5 py-1.5">

            <span className="relative flex h-2 w-2">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB]/50" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />

            </span>

            <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#2563EB]">
              Built for serious preparation
            </span>

          </div>


          {/* Heading */}

          <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-1.5px] text-[#0F172A] sm:text-[40px]">

            Practice like you're{" "}

            <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
              already in the interview.
            </span>

          </h2>


          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-[#64748B] sm:text-[14px]">
            Train with AI-powered interview simulations inspired by the
            interview patterns of leading tech companies.
          </p>

        </div>


        {/* =================================================
            COMPANY CARDS
        ================================================== */}

        <div className="mt-12">

          <div className="mb-5 text-center">

            <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#94A3B8]">
              Interview styles inspired by
            </span>

          </div>


          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

            {companies.map((company, index) => (
              <CompanyCard
                key={company.name}
                company={company}
                index={index}
              />
            ))}

          </div>


          {/* Disclaimer */}

          <p className="mt-4 text-center text-[9px] text-[#94A3B8]">
            Company names are used only to describe target interview
            simulations. InterviewProof is not affiliated with or endorsed
            by these companies.
          </p>

        </div>


        {/* =================================================
            ROLE PILLS
        ================================================== */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">

          <span className="mr-1 text-[10px] font-semibold text-[#94A3B8]">
            Built for:
          </span>

          {roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5 text-[10px] font-semibold text-[#475569] shadow-[0_3px_12px_rgba(15,23,42,.03)] transition-all hover:border-[#C7D6F5] hover:bg-[#F8FAFF] hover:text-[#2563EB]"
            >
              {role}
            </span>
          ))}

        </div>


        {/* =================================================
            STATS
        ================================================== */}

        <div className="relative mt-14 overflow-hidden rounded-[26px] border border-[#DCE6F7] bg-gradient-to-br from-[#F8FAFF] via-white to-[#F5F7FF] shadow-[0_20px_60px_rgba(37,99,235,.07)]">

          {/* Inner glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-[#2563EB]/[0.07] blur-3xl" />


          <div className="relative grid grid-cols-2 divide-x divide-[#E8EDF5] lg:grid-cols-4">

            <Stat
              value={12480}
              suffix="+"
              label="Mock interviews"
            />

            <Stat
              value={8600}
              suffix="+"
              label="Candidates practicing"
            />

            <Stat
              value={94}
              suffix="%"
              label="Would recommend"
            />

            <Stat
              value={4.9}
              suffix="/5"
              label="Average experience"
              decimal
            />

          </div>


          {/* Bottom trust line */}

          <div className="border-t border-[#E8EDF5] px-5 py-3 text-center">

            <div className="inline-flex items-center gap-2">

              <ShieldIcon />

              <span className="text-[9px] font-medium text-[#94A3B8]">
                Demo metrics shown for design preview — replace with
                verified platform data before launch.
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM TRUST STATEMENT
        ================================================== */}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">

          <div className="flex -space-x-2">

            <Avatar letter="A" />
            <Avatar letter="R" />
            <Avatar letter="S" />
            <Avatar letter="K" />

          </div>

          <p className="text-[11px] text-[#64748B]">

            Built to help developers walk into interviews with

            <span className="ml-1 font-semibold text-[#0F172A]">
              more confidence.
            </span>

          </p>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   COMPANY CARD
============================================================ */

function CompanyCard({ company, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9D8F5] hover:shadow-[0_18px_40px_rgba(37,99,235,.10)]"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >

      {/* Hover glow */}

      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#2563EB]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2563EB]/10" />


      <div className="relative flex items-center gap-3">

        {/* Logo */}

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${company.gradient} text-[14px] font-black text-white shadow-sm`}
        >
          {company.short}
        </div>


        <div className="min-w-0">

          <p className="text-[12px] font-bold text-[#0F172A]">
            {company.name}
          </p>

          <div className="mt-1 flex items-center gap-1.5">

            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />

            <span className="text-[9px] font-medium text-[#94A3B8]">
              Target simulation
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   ANIMATED STAT
============================================================ */

function Stat({
  value,
  suffix,
  label,
  decimal = false,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const ease = 1 - Math.pow(1 - progress, 3);

      start = value * ease;

      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      start = 0;
    };
  }, [value]);

  const displayValue = decimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString();

  return (
    <div className="group relative px-4 py-7 text-center sm:px-6 sm:py-8">

      {/* Hover glow */}

      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-20 rounded-full bg-[#2563EB]/0 blur-2xl transition-all duration-500 group-hover:bg-[#2563EB]/5" />

      <div className="relative">

        <div className="text-[24px] font-extrabold tracking-[-1px] text-[#0F172A] sm:text-[28px]">

          {displayValue}

          <span className="ml-0.5 text-[#2563EB]">
            {suffix}
          </span>

        </div>

        <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[.8px] text-[#94A3B8] sm:text-[10px]">
          {label}
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   AVATAR
============================================================ */

function Avatar({ letter }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#EEF4FF] text-[8px] font-bold text-[#2563EB] shadow-sm">
      {letter}
    </div>
  );
}


/* ============================================================
   SHIELD ICON
============================================================ */

function ShieldIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-[#94A3B8]"
    >
      <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}