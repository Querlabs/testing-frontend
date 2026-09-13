"use client";

import { useEffect, useState } from "react";

const breakdown = [
  { label: "Technical Skills", value: 82 },
  { label: "Problem Solving", value: 71 },
  { label: "Communication", value: 84 },
  { label: "Interview Confidence", value: 76 },
];

export default function ReadinessScore() {
  const [score, setScore] = useState(78);
  const [retested, setRetested] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRetested(true);

      let current = 78;
      const interval = setInterval(() => {
        current += 1;
        setScore(current);

        if (current >= 86) {
          clearInterval(interval);
        }
      }, 90);

      return () => clearInterval(interval);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            Your Interview Readiness
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-6xl">
            Are{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              You Ready?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            Stop guessing. Know exactly where you stand before the real
            interview.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -inset-5 rounded-[40px] bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
            <div className="grid lg:grid-cols-[1fr_1.15fr]">
              {/* SCORE */}
              <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden border-b border-slate-200 p-10 lg:border-b-0 lg:border-r">
                {/* Decorative rings */}
                <div className="absolute h-[390px] w-[390px] animate-[spin_25s_linear_infinite] rounded-full border border-blue-500/10" />

                <div className="absolute h-[320px] w-[320px] rounded-full border border-indigo-500/10" />

                <div className="absolute h-[250px] w-[250px] rounded-full border border-blue-500/10" />

                <div className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Score circle */}
                <div className="relative flex h-64 w-64 items-center justify-center">
                  <svg
                    className="absolute inset-0 h-full w-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="43"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="5"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="43"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="270"
                      strokeDashoffset={270 - (score / 100) * 270}
                      className="transition-all duration-700 ease-out"
                    />

                    <defs>
                      <linearGradient
                        id="scoreGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="relative text-center">
                    <div className="text-7xl font-bold tracking-tight text-[#0F172A]">
                      {score}
                    </div>

                    <div className="mt-1 text-sm font-medium text-slate-400">
                      / 100
                    </div>

                    <div
                      className={`mt-4 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 ${
                        retested
                          ? "bg-green-50 text-green-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {retested ? "Ready to Interview" : "Almost Ready"}
                    </div>
                  </div>
                </div>

                {/* Score label */}
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Overall readiness
                  </p>
                </div>
              </div>

              {/* BREAKDOWN */}
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                      Readiness breakdown
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">
                      Know what is holding you back.
                    </h3>
                  </div>

                  <div className="hidden rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-600 sm:block">
                    {retested ? "+8 points" : "Before retest"}
                  </div>
                </div>

                <div className="mt-10 space-y-7">
                  {breakdown.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2.5 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-600">
                          {item.label}
                        </span>

                        <span className="text-sm font-bold text-[#0F172A]">
                          {item.value}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-1000"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Meaning */}
                <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      ✦
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">
                        What does 78 mean?
                      </p>

                      <p className="mt-1.5 text-sm leading-6 text-slate-500">
                        You have the fundamentals, but a few weaknesses could
                        still cost you in a real interview. Fix them, retest,
                        and watch your readiness score change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RETEST BAR */}
            <div className="border-t border-slate-200 bg-slate-50/80 px-6 py-6 sm:px-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/10" />
                    <span className="relative text-lg">↻</span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">
                      Retest. Improve. Measure again.
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {retested
                        ? "Your latest attempt improved your readiness."
                        : "Your score changes as your interview skills improve."}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-sm text-slate-400">
                    78
                    <span className="mx-2">→</span>
                    <span className="font-bold text-green-600">
                      {retested ? "86" : "86"}
                    </span>
                  </div>

                  <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-green-500 transition-all duration-[1800ms]"
                      style={{ width: retested ? "86%" : "0%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-xl font-semibold text-[#0F172A]">
            A readiness score turns{" "}
            <span className="text-blue-600">“I think I'm ready”</span>
            {" "}into{" "}
            <span className="text-indigo-600">“I know I'm ready.”</span>
          </p>
        </div>
      </div>
    </section>
  );
}