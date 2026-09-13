"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Assessment",
    description: "See how you perform in a realistic interview.",
    icon: "◉",
  },
  {
    number: "02",
    title: "Weakness",
    description: "Find the exact skills holding your score back.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Practice",
    description: "Work specifically on what needs improvement.",
    icon: "✦",
  },
  {
    number: "04",
    title: "Retest",
    description: "Face another challenge and measure your progress.",
    icon: "↻",
  },
  {
    number: "05",
    title: "Score ↑",
    description: "Watch your readiness improve with every cycle.",
    icon: "↗",
  },
];

export default function ImprovementLoop() {
  const [active, setActive] = useState(0);
  const [score, setScore] = useState(68);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % steps.length;

        if (next === 0) {
          setScore((current) => (current >= 92 ? 68 : current + 6));
        }

        return next;
      });
    }, 1900);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Continuous Improvement
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Don't just{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              practice.
            </span>
            <br />
            Get better.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Every interview gives you new data. Every weakness becomes a
            practice target. Every retest moves you closer to ready.
          </p>
        </div>

        {/* Loop */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-[76px] hidden h-px bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-indigo-500/20 lg:block" />

          {/* Animated travelling light */}
          <div
            className="absolute top-[71px] hidden h-[11px] w-16 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[2px] lg:block"
            style={{
              left: `calc(${10 + active * 20}% - 32px)`,
              transition: "left 1.2s cubic-bezier(.4,0,.2,1)",
            }}
          />

          <div className="grid gap-4 lg:grid-cols-5">
            {steps.map((step, index) => {
              const isActive = active === index;
              const isPassed = active > index;

              return (
                <div
                  key={step.title}
                  className={`group relative transition-all duration-700 ${
                    isActive ? "-translate-y-2" : ""
                  }`}
                >
                  {/* Number / icon */}
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                    {/* Outer pulse */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 animate-ping rounded-full border border-blue-400/20" />
                        <div className="absolute -inset-3 rounded-full border border-blue-400/10" />
                      </>
                    )}

                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-full border transition-all duration-700 ${
                        isActive
                          ? "border-blue-400 bg-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,.35)]"
                          : isPassed
                            ? "border-green-400/40 bg-green-400/10"
                            : "border-white/10 bg-white/[0.04]"
                      }`}
                    >
                      <span
                        className={`text-2xl transition-all duration-500 ${
                          isActive
                            ? "scale-110 text-blue-300"
                            : isPassed
                              ? "text-green-400"
                              : "text-slate-500"
                        }`}
                      >
                        {isPassed ? "✓" : step.icon}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl border p-5 text-center transition-all duration-700 ${
                      isActive
                        ? "border-blue-400/30 bg-blue-500/[0.08] shadow-xl shadow-blue-900/10"
                        : "border-white/10 bg-white/[0.025] group-hover:border-white/20"
                    }`}
                  >
                    <div className="text-[10px] font-semibold tracking-[0.2em] text-slate-600">
                      {step.number}
                    </div>

                    <h3
                      className={`mt-2 font-semibold transition-colors ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live progress panel */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8">
            {/* shine */}
            <div
              className="absolute inset-y-0 w-32 -skew-x-12 bg-white/[0.025]"
              style={{
                animation: "shine 4s ease-in-out infinite",
              }}
            />

            <div className="relative flex flex-col items-center justify-between gap-8 sm:flex-row">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Your improvement loop
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="text-4xl font-bold text-white">
                    {score}
                    <span className="ml-1 text-base font-medium text-slate-600">
                      /100
                    </span>
                  </div>

                  <div className="h-8 w-px bg-white/10" />

                  <div>
                    <p className="text-sm font-semibold text-green-400">
                      +{Math.max(score - 68, 0)} points
                    </p>
                    <p className="text-xs text-slate-500">
                      since your first assessment
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="w-full max-w-sm">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-slate-500">
                    Readiness progression
                  </span>
                  <span className="text-slate-400">{score}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
                    style={{ width: `${score}%` }}
                  />
                </div>

                <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider text-slate-600">
                  <span>Not ready</span>
                  <span>Interview ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core message */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
              ↻
            </span>

            <span className="text-sm text-slate-400">
              One mock interview gives you a score.
              <span className="ml-1 font-semibold text-white">
                InterviewProof gives you a path to improve it.
              </span>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            left: -20%;
          }
          50% {
            left: 110%;
          }
          100% {
            left: 110%;
          }
        }
      `}</style>
    </section>
  );
}