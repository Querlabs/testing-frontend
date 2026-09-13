"use client";

import { useEffect, useState } from "react";

const metrics = [
  { label: "Clarity", value: 84, suffix: "%" },
  { label: "Confidence", value: 78, suffix: "%" },
  { label: "Filler words", value: 6, suffix: "" },
  { label: "Pace", value: 72, suffix: " wpm" },
  { label: "Structure", value: 91, suffix: "%" },
];

const words = [
  "basically",
  "actually",
  "like",
  "you know",
  "basically",
  "actually",
];

export default function CommunicationCoach() {
  const [activeWord, setActiveWord] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 1400);

    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2200);

    return () => {
      clearInterval(wordTimer);
      clearInterval(stepTimer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="absolute left-[8%] top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-[8%] h-96 w-96 rounded-full bg-indigo-600/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            AI Communication Coach
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Your answer matters.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              So does how you say it.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Speak naturally. Get analyzed on the communication signals
            interviewers actually notice. Improve. Try again.
          </p>
        </div>

        {/* Main Experience */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Glow */}
          <div className="absolute -inset-4 rounded-[32px] bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>

                <span className="ml-2 text-sm text-slate-400">
                  communication-test
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-green-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                ANALYZING LIVE
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              {/* LEFT - Speaking */}
              <div className="relative border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Step 01
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Speak naturally
                    </h3>
                  </div>

                  <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-3 py-2 text-xs text-green-300">
                    ● Recording
                  </div>
                </div>

                {/* Voice visualization */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />

                  <div className="flex h-28 items-center gap-[5px]">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-[3px] rounded-full bg-gradient-to-t from-blue-500 to-indigo-400 transition-all duration-500"
                        style={{
                          height: `${18 + ((i * 17) % 75)}%`,
                          animation: `voiceBar ${
                            0.65 + (i % 5) * 0.12
                          }s ease-in-out infinite alternate`,
                          animationDelay: `${i * 0.025}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-5 text-xs text-slate-500">
                    00:18 / 01:00
                  </div>

                  <div className="absolute bottom-4 right-5 flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                    Voice detected
                  </div>
                </div>

                {/* Transcript */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Live transcript
                    </span>

                    <span className="text-xs text-blue-400">
                      AI listening...
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-slate-300">
                    I think the main approach would be to first understand the
                    problem and{" "}
                    <span className="rounded bg-red-400/15 px-1.5 py-0.5 text-red-300 transition-all duration-500">
                      {words[activeWord]}
                    </span>{" "}
                    then decide which solution would scale better.
                  </p>
                </div>

                {/* Flow */}
                <div className="mt-8 flex items-center justify-between">
                  {["Speak", "Analyze", "Improve", "Retry"].map(
                    (step, index) => (
                      <div
                        key={step}
                        className="flex items-center"
                      >
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-500 ${
                            activeStep >= index
                              ? "border-blue-400 bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/20"
                              : "border-white/10 bg-white/5 text-slate-600"
                          }`}
                        >
                          0{index + 1}
                        </div>

                        <span
                          className={`ml-2 hidden text-xs sm:block ${
                            activeStep >= index
                              ? "text-slate-200"
                              : "text-slate-600"
                          }`}
                        >
                          {step}
                        </span>

                        {index < 3 && (
                          <div className="mx-2 h-px w-6 bg-white/10 sm:mx-4 sm:w-10" />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* RIGHT - Analysis */}
              <div className="p-8 lg:p-10">
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                    Step 02
                  </p>

                  <div className="mt-2 flex items-end justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      Communication analysis
                    </h3>

                    <span className="text-3xl font-bold text-white">
                      82<span className="text-sm text-slate-500">/100</span>
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-5">
                  {metrics.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-slate-300">
                          {metric.label}
                        </span>

                        <span
                          className={`font-semibold ${
                            metric.label === "Filler words"
                              ? "text-amber-400"
                              : "text-white"
                          }`}
                        >
                          {metric.value}
                          {metric.suffix}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            metric.label === "Filler words"
                              ? "bg-gradient-to-r from-amber-400 to-orange-400"
                              : "bg-gradient-to-r from-blue-500 to-indigo-400"
                          }`}
                          style={{
                            width:
                              metric.label === "Filler words"
                                ? "32%"
                                : `${metric.value}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI insight */}
                <div className="mt-8 rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-lg">
                      ✦
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        AI Coach Insight
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Your explanation is technically strong, but you use
                        filler words when thinking. Pause instead of saying
                        “basically” or “actually”.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Improvement */}
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-green-400/10 bg-green-400/5 px-4 py-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-400/10 text-green-400">
                    ✓
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-green-300">
                      Improvement opportunity
                    </p>
                    <p className="text-xs text-slate-500">
                      Reduce filler words by ~40%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-white/10 bg-white/[0.025] px-6 py-6 sm:px-10">
              <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
                <div>
                  <p className="font-semibold text-white">
                    Find out how you actually sound in an interview.
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    No preparation. No script. Just speak.
                  </p>
                </div>

                <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40">
                  <span className="relative z-10 flex items-center gap-2">
                    Try Communication Test Free
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center text-sm text-slate-500">
          <span>Speak</span>
          <span className="text-blue-500">→</span>
          <span>Get analyzed</span>
          <span className="text-blue-500">→</span>
          <span>Improve</span>
          <span className="text-blue-500">→</span>
          <span className="text-white">Retry</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes voiceBar {
          0% {
            transform: scaleY(0.35);
            opacity: 0.5;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}