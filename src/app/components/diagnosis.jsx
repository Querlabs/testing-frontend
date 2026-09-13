"use client";

export default function DiagnosisSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute left-[-10%] top-[25%] h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute right-[-5%] bottom-[10%] h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-blue-500" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600">
                THE DIAGNOSIS
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Don’t Just Get a Score.
              <br />

              <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
                Find Out Why You’ll Get Rejected.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#64748B]">
              Most interview platforms tell you how you performed.
              InterviewProof tells you{" "}
              <span className="font-semibold text-[#0F172A]">
                what went wrong, why it matters, and what to fix.
              </span>
            </p>

            {/* Points */}
            <div className="mt-9 grid max-w-lg gap-3 sm:grid-cols-2">
              <Point
                icon={<TargetIcon />}
                title="Weaknesses"
                text="Know exactly where you're falling short."
              />

              <Point
                icon={<WarningIcon />}
                title="Rejection Reasons"
                text="Understand what could cost you the offer."
              />

              <Point
                icon={<SeverityIcon />}
                title="Severity"
                text="Know which problems need attention first."
              />

              <Point
                icon={<FixIcon />}
                title="What To Fix"
                text="Get a clear improvement direction."
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-5 rounded-[32px] bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#CBD5E1] bg-[#0F172A] shadow-[0_30px_80px_-30px_rgba(15,23,42,0.4)]">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">

                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <div className="h-4 w-px bg-white/10" />

                  <span className="text-[9px] font-bold tracking-[0.16em] text-white/35">
                    AI DIAGNOSIS
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                  <span className="text-[9px] font-semibold text-green-400/60">
                    COMPLETE
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">

                {/* Overall */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[9px] font-bold tracking-widest text-white/25">
                      INTERVIEW SCORE
                    </p>

                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        68
                      </span>

                      <span className="text-xs text-white/20">
                        / 100
                      </span>
                    </div>
                  </div>

                  <div className="rounded-full border border-amber-400/10 bg-amber-400/[0.05] px-3 py-1.5">
                    <span className="text-[9px] font-bold tracking-widest text-amber-300">
                      NEEDS WORK
                    </span>
                  </div>

                </div>

                {/* Main weakness */}
                <div className="mt-7 rounded-2xl border border-red-400/10 bg-red-400/[0.035] p-5">

                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-[9px] font-bold tracking-widest text-red-300/60">
                        BIGGEST WEAKNESS
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        Problem Solving
                      </h3>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-bold text-red-300">
                        58
                      </span>

                      <p className="text-[8px] font-bold tracking-widest text-red-300/50">
                        HIGH
                      </p>
                    </div>

                  </div>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full w-[58%] rounded-full bg-red-400" />
                  </div>

                </div>

                {/* Rejection */}
                <div className="mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

                  <div className="flex gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300">
                      <WarningIcon />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold tracking-[0.15em] text-white/30">
                        WHY YOU COULD GET REJECTED
                      </p>

                      <p className="mt-2 text-sm leading-5 text-white/55">
                        Your reasoning becomes unclear when the interviewer
                        pushes back on your approach.
                      </p>
                    </div>

                  </div>

                </div>

                {/* Fix */}
                <div className="mt-3 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">

                    <p className="text-[9px] font-bold tracking-widest text-white/25">
                      WHAT TO FIX
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/55">
                      Explain trade-offs before implementation.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.04] p-4">

                    <p className="text-[9px] font-bold tracking-widest text-blue-300/50">
                      PRACTICE NEXT
                    </p>

                    <p className="mt-2 text-xs font-semibold text-white/65">
                      System Design
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-blue-400">
                      Start practice
                      <ArrowIcon />
                    </div>

                  </div>

                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">

                  <span className="text-[9px] text-white/20">
                    4 weaknesses detected
                  </span>

                  <span className="text-[9px] font-semibold text-white/25">
                    INTERVIEWPROOF AI
                  </span>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">

          <p className="text-sm text-[#64748B]">
            A score tells you{" "}
            <span className="font-semibold text-[#0F172A]">where</span>{" "}
            you stand.
          </p>

          <p className="mt-1 text-lg font-bold text-[#0F172A]">
            A diagnosis tells you{" "}
            <span className="text-blue-600">how to improve.</span>
          </p>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   POINT
========================================================= */

function Point({ icon, title, text }) {
  return (
    <div className="flex gap-3 rounded-xl border border-[#E2E8F0] bg-white/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-xs font-bold text-[#0F172A]">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-4 text-[#64748B]">
          {text}
        </p>
      </div>

    </div>
  );
}

/* =========================================================
   ICONS
========================================================= */

function TargetIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 2.8 20h18.4L12 3Z" />
      <path d="M12 9v5" />
      <circle cx="12" cy="17" r=".7" fill="currentColor" />
    </svg>
  );
}

function SeverityIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19h16" />
      <path d="M6 16V9" />
      <path d="M12 16V5" />
      <path d="M18 16v-4" />
    </svg>
  );
}

function FixIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}