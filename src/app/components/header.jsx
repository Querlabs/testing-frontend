"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);

  const words = ["ready.", "confident.", "unstoppable."];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-screen min-h-[700px] overflow-hidden bg-[#F8FAFC] text-[#0F172A]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}
        <div className="absolute left-[48%] top-[15%] h-[650px] w-[650px] rounded-full bg-[#2563EB]/10 blur-[120px]" />

        {/* Indigo glow */}
        <div className="absolute right-[-150px] top-[25%] h-[500px] w-[500px] rounded-full bg-[#6366F1]/10 blur-[110px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="relative z-50 h-[82px] border-b border-[#E2E8F0]/80 bg-white/75 backdrop-blur-xl">

        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-7 xl:px-16">

          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">

            <div className="relative flex h-9 w-9 items-end justify-center gap-[3px]">

              <span className="h-3 w-[6px] rounded-full bg-[#2563EB] transition-all duration-300 group-hover:h-5" />

              <span className="h-6 w-[6px] rounded-full bg-[#2563EB]" />

              <span className="h-9 w-[6px] rounded-full bg-gradient-to-t from-[#2563EB] to-[#6366F1] transition-all duration-300 group-hover:h-7" />

            </div>

            <span className="text-[23px] font-bold tracking-[-0.8px]">
              Interview<span className="text-[#2563EB]">Proof</span>
            </span>

          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-9 lg:flex">

            {["Home", "Features", "How It Works", "Pricing"].map(
              (item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`relative py-3 text-[14px] font-medium transition-colors ${
                    index === 0
                      ? "text-[#2563EB]"
                      : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  {item}

                  {index === 0 && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#2563EB]" />
                  )}
                </a>
              )
            )}

            <a
              href="#"
              className="flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0F172A]"
            >
              Resources

              <Chevron />
            </a>

          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 sm:flex">

            <a
              href="/login"
              className="rounded-full px-5 py-2.5 text-[14px] font-medium text-[#33466B] transition hover:text-[#2563EB]"
            >
              Login
            </a>

            <Link
              href="/signup"
              className="group flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_25px_rgba(37,99,235,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_12px_30px_rgba(37,99,235,.3)]"
            >
              Get Started

              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

          {/* Mobile */}
          <button className="rounded-xl border border-[#E2E8F0] bg-white p-2.5 lg:hidden">
            <Menu />
          </button>

        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative z-10 mx-auto h-[calc(100vh-82px)] max-w-[1440px] px-7 xl:px-16">

        <div className="grid h-full items-center lg:grid-cols-[48%_52%]">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20 pb-8 pt-8">

            {/* Badge */}
            <div className="animate-fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE7FF] bg-white/80 px-3.5 py-2 text-[12px] font-semibold text-[#2563EB] shadow-sm backdrop-blur">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
              </span>

              AI-powered interview preparation

            </div>

            {/* Heading */}
            <h1 className="animate-fade-up max-w-[650px] text-[56px] font-extrabold leading-[1.04] tracking-[-3px] sm:text-[64px] xl:text-[72px]">

              Walk into your

              <span className="block text-[#0F172A]">
                next interview
              </span>

              <span
                key={words[activeWord]}
                className="mt-1 block bg-gradient-to-r from-[#2563EB] via-[#4F6FF1] to-[#6366F1] bg-clip-text text-transparent animate-word"
              >
                {words[activeWord]}
              </span>

            </h1>

            {/* Description */}
            <p className="animate-fade-up animation-delay-150 mt-7 max-w-[570px] text-[17px] leading-[1.7] text-[#64748B]">
              Practice realistic interviews with AI, discover exactly where
              you need to improve, and build the confidence to land the job
              you deserve.
            </p>

            {/* CTA */}
            <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap items-center gap-4">

              <a
                href="/practice"
                className="group flex h-[54px] items-center gap-3 rounded-full bg-[#2563EB] px-7 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D4ED8] hover:shadow-[0_18px_35px_rgba(37,99,235,.3)]"
              >
                Start Practicing Free

                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />

              </a>

              <button className="group flex h-[54px] items-center gap-3 rounded-full border border-[#DCE5F0] bg-white/80 px-6 text-[15px] font-semibold text-[#17284A] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF4FF] text-[10px] text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white">
                  ▶
                </span>

                See how it works

              </button>

            </div>

            {/* Trust */}
            <div className="animate-fade-up animation-delay-500 mt-9 flex flex-wrap items-center gap-6">

              <div className="flex items-center gap-2">
                <Check />
                <span className="text-[13px] font-medium text-[#64748B]">
                  Realistic interviews
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Check />
                <span className="text-[13px] font-medium text-[#64748B]">
                  Instant feedback
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Check />
                <span className="text-[13px] font-medium text-[#64748B]">
                  Personalized insights
                </span>
              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT AI DASHBOARD
          ================================================== */}

          <div className="relative hidden h-[600px] lg:block">

            {/* Orbital rings */}

            <div className="absolute left-[8%] top-[14%] h-[470px] w-[470px] rounded-full border border-[#2563EB]/10 animate-spin-slow" />

            <div className="absolute left-[13%] top-[19%] h-[370px] w-[370px] rounded-full border border-dashed border-[#6366F1]/15 animate-spin-reverse" />

            {/* Main floating dashboard */}

            <div className="animate-float absolute left-[12%] top-[12%] w-[500px] rounded-[28px] border border-white/80 bg-white/80 p-5 shadow-[0_35px_100px_rgba(15,23,42,.14)] backdrop-blur-2xl">

              {/* Dashboard top */}

              <div className="flex items-center justify-between border-b border-[#E2E8F0]/70 pb-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF4FF]">
                    <span className="text-[#2563EB]">✦</span>
                  </div>

                  <div>
                    <p className="text-[13px] font-bold text-[#0F172A]">
                      AI Interview Session
                    </p>

                    <p className="text-[10px] text-[#94A3B8]">
                      Frontend Developer · Technical Round
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-[#ECFDF5] px-2.5 py-1.5 text-[10px] font-semibold text-[#16A05D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                  LIVE
                </div>

              </div>

              {/* Interview area */}

              <div className="mt-5 grid grid-cols-[1fr_145px] gap-4">

                {/* Conversation */}

                <div className="rounded-2xl bg-[#F8FAFC] p-4">

                  <div className="mb-5 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F172A] text-[10px] text-white">
                      AI
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold">
                        AI Interviewer
                      </p>

                      <p className="text-[9px] text-[#94A3B8]">
                        Listening...
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] font-medium leading-6 text-[#17284A]">
                    “Tell me about a challenging
                    project you’ve worked on and
                    how you solved it.”
                  </p>

                  {/* Waveform */}

                  <div className="mt-6 flex h-9 items-center gap-[3px]">

                    {[18, 28, 12, 34, 22, 42, 27, 17, 36, 25, 44, 20, 32, 15, 27, 40, 22, 30, 18].map(
                      (height, i) => (
                        <span
                          key={i}
                          className="w-[3px] rounded-full bg-[#2563EB] animate-wave"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 70}ms`,
                          }}
                        />
                      )
                    )}

                  </div>

                  {/* Input */}

                  <div className="mt-5 flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-white px-3 py-2.5">

                    <span className="text-[10px] text-[#94A3B8]">
                      Your answer is being analyzed...
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EF4444] text-[9px] text-white">
                      ●
                    </span>

                  </div>

                </div>

                {/* Score */}

                <div className="rounded-2xl bg-[#0F172A] p-4 text-white">

                  <p className="text-[10px] text-[#94A3B8]">
                    Current Score
                  </p>

                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-[38px] font-bold">
                      86
                    </span>
                    <span className="mb-1 text-[12px] text-[#94A3B8]">
                      /100
                    </span>
                  </div>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#22C55E] to-[#2563EB] animate-progress" />
                  </div>

                  <p className="mt-3 text-[9px] text-[#94A3B8]">
                    Excellent performance
                  </p>

                </div>

              </div>

              {/* Metrics */}

              <div className="mt-4 grid grid-cols-3 gap-3">

                <Metric
                  title="Communication"
                  value="92%"
                  positive
                />

                <Metric
                  title="Problem Solving"
                  value="86%"
                  positive
                />

                <Metric
                  title="Technical Depth"
                  value="79%"
                />

              </div>

              {/* Footer */}

              <div className="mt-4 flex items-center justify-between rounded-xl bg-[#EEF4FF] px-4 py-3">

                <div className="flex items-center gap-2">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E] text-xs text-white">
                    ✓
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold text-[#17284A]">
                      Strong progress
                    </p>

                    <p className="text-[9px] text-[#64748B]">
                      You’re improving faster than 78% of users
                    </p>
                  </div>

                </div>

                <span className="text-[18px] text-[#2563EB]">
                  ↗
                </span>

              </div>

            </div>

            {/* =================================================
                FLOATING NOTIFICATION
            ================================================== */}

            <div className="animate-float animation-delay-500 absolute bottom-[65px] left-[1%] z-30 flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,.12)] backdrop-blur-xl">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ECFDF5] text-[#22C55E]">
                ✓
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#17284A]">
                  Feedback ready
                </p>

                <p className="text-[9px] text-[#94A3B8]">
                  3 actionable insights
                </p>
              </div>

            </div>

            {/* =================================================
                SCORE FLOATING CARD
            ================================================== */}

            <div className="animate-float animation-delay-700 absolute right-[2%] top-[7%] z-30 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,.10)] backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-[5px] border-[#E2E8F0]">

                  <div className="absolute inset-[-5px] rounded-full border-[5px] border-transparent border-t-[#22C55E] border-r-[#22C55E] rotate-[25deg]" />

                  <span className="text-[11px] font-bold">
                    86
                  </span>

                </div>

                <div>
                  <p className="text-[10px] text-[#94A3B8]">
                    Readiness
                  </p>

                  <p className="text-[12px] font-bold text-[#16A05D]">
                    Job Ready
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx>{`

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes word {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: scaleY(.55);
          }

          50% {
            transform: scaleY(1.35);
          }
        }

        @keyframes progress {
          from {
            width: 0;
          }

          to {
            width: 86%;
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-fade-up {
          animation: fadeUp .7s ease-out both;
        }

        .animate-word {
          animation: word .45s ease-out;
        }

        .animate-wave {
          animation: wave 1.1s ease-in-out infinite;
          transform-origin: center;
        }

        .animate-progress {
          animation: progress 1.5s ease-out;
        }

        .animate-spin-slow {
          animation: spinSlow 35s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 28s linear infinite;
        }

        .animation-delay-150 {
          animation-delay: .15s;
        }

        .animation-delay-300 {
          animation-delay: .3s;
        }

        .animation-delay-500 {
          animation-delay: .5s;
        }

        .animation-delay-700 {
          animation-delay: .7s;
        }

      `}</style>

    </main>
  );
}


/* ============================================================
   SMALL COMPONENTS
============================================================ */

function Metric({ title, value, positive }) {
  return (
    <div className="rounded-xl border border-[#E8EDF4] bg-white p-3">

      <div className="flex items-center justify-between">
        <p className="text-[9px] text-[#94A3B8]">
          {title}
        </p>

        {positive && (
          <span className="text-[9px] text-[#22C55E]">
            ↗
          </span>
        )}
      </div>

      <p className="mt-1 text-[16px] font-bold text-[#17284A]">
        {value}
      </p>

    </div>
  );
}


function Check() {
  return (
    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#22C55E] text-[10px] font-bold text-white">
      ✓
    </span>
  );
}


function Arrow({ className = "" }) {
  return (
    <svg
      className={className}
      width="17"
      height="17"
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


function Chevron() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}


function Menu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}