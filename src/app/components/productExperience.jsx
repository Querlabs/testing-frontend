"use client";

import { useEffect, useState } from "react";

const features = [
  {
    label: "REAL PRESSURE",
    title: "It feels like an interview.",
    text: "No hints. No comfortable practice mode. You have to think, communicate, and perform under realistic pressure.",
  },
  {
    label: "ADAPTIVE FOLLOW-UPS",
    title: "The interviewer reacts to you.",
    text: "Your answer changes what comes next. Weak assumptions get challenged. Strong answers get pushed deeper.",
  },
  {
    label: "TECHNICAL DEPTH",
    title: "Talk. Think. Code.",
    text: "Move between technical discussion, problem solving, and coding without breaking the interview flow.",
  },
  {
    label: "OBJECTIVE SCORING",
    title: "Know exactly where you stand.",
    text: "Every response contributes to an objective evaluation across technical ability, reasoning, communication, and clarity.",
  },
];

export default function ProductExperience() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [seconds, setSeconds] = useState(522);
  const [question, setQuestion] = useState(0);
  const [followUp, setFollowUp] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 522));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setTyping(false);

      setTimeout(() => {
        setQuestion((prev) => (prev + 1) % 3);
        setFollowUp((prev) => !prev);
        setActiveFeature((prev) => (prev + 1) % features.length);
        setTyping(true);
      }, 500);
    }, 4200);

    return () => clearInterval(cycle);
  }, []);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  const questions = [
    "How would you design this system for 10 million users?",
    "What would you optimize first if latency suddenly increased?",
    "Walk me through the trade-offs in your architecture.",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 pb-24 sm:px-10 lg:px-16">
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

        <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[8%] bottom-[10%] h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-blue-500/30"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${i * 180}ms`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
            THE INTERVIEW EXPERIENCE
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            This isn't a practice test.
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
              It's an interview.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            InterviewProof recreates the pressure, unpredictability, and
            technical depth of a real interview — then objectively tells you
            how you performed.
          </p>
        </div>

        {/* Main Experience */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Outer glow */}
          <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-[#CBD5E1] bg-[#0B1220] shadow-[0_35px_100px_-35px_rgba(15,23,42,0.45)]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>

                <div className="hidden h-5 w-px bg-white/10 sm:block" />

                <div className="flex items-center gap-2 text-xs font-medium text-white/50">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  LIVE INTERVIEW
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="hidden text-[10px] font-semibold tracking-widest text-white/30 sm:block">
                  SOFTWARE ENGINEER
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2">
                  <ClockIcon />
                  <span className="font-mono text-sm font-semibold text-white">
                    {minutes}:{secs}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Console */}
            <div className="grid lg:grid-cols-[1fr_280px]">
              {/* Interview */}
              <div className="relative min-h-[470px] border-b border-white/[0.07] p-6 sm:p-9 lg:border-b-0 lg:border-r">
                {/* subtle center glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[100px]" />

                <div className="relative">
                  {/* Interviewer */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20">
                        <SparkIcon />
                      </div>

                      <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-[#0B1220] bg-green-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Interviewer
                      </p>
                      <p className="mt-0.5 text-xs text-white/35">
                        Senior Software Engineer
                      </p>
                    </div>

                    <div className="ml-auto hidden items-center gap-1 sm:flex">
                      {[1, 2, 3, 4, 5].map((bar) => (
                        <span
                          key={bar}
                          className="w-1 rounded-full bg-blue-400/70"
                          style={{
                            height: `${8 + bar * 3}px`,
                            animation: `soundWave ${0.7 + bar * 0.1}s ease-in-out infinite alternate`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question */}
                  <div
                    className={`mt-14 transition-all duration-500 ${
                      typing
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-md bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold tracking-widest text-blue-400">
                        QUESTION {String(question + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[10px] font-medium tracking-widest text-white/25">
                        SYSTEM DESIGN
                      </span>
                    </div>

                    <h3 className="max-w-2xl text-2xl font-semibold leading-[1.35] tracking-tight text-white sm:text-3xl">
                      {questions[question]}
                      <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-blue-400 align-middle" />
                    </h3>
                  </div>

                  {/* Response area */}
                  <div className="mt-12">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-widest text-white/25">
                        YOUR RESPONSE
                      </span>

                      <span className="text-[10px] text-white/20">
                        AI LISTENING
                      </span>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-6">
                      <div className="flex h-10 items-center gap-[3px] opacity-80">
                        {Array.from({ length: 70 }).map((_, i) => (
                          <span
                            key={i}
                            className="w-[2px] rounded-full bg-gradient-to-t from-blue-500/20 to-blue-400/80"
                            style={{
                              height: `${8 + ((i * 17) % 28)}px`,
                              animation: `wave ${
                                0.7 + (i % 6) * 0.1
                              }s ease-in-out infinite alternate`,
                              animationDelay: `${i * 18}ms`,
                            }}
                          />
                        ))}
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-xs text-white/30">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                        Analyzing your response...
                      </div>
                    </div>
                  </div>

                  {/* Adaptive follow-up */}
                  <div
                    className={`mt-4 flex items-center gap-3 rounded-xl border border-indigo-400/10 bg-indigo-500/[0.06] px-4 py-3 transition-all duration-700 ${
                      followUp
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-50"
                    }`}
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                      <ArrowIcon />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-indigo-300">
                        ADAPTIVE FOLLOW-UP
                      </p>
                      <p className="mt-0.5 text-xs text-white/40">
                        The next question responds to your answer.
                      </p>
                    </div>

                    <span className="ml-auto h-2 w-2 animate-ping rounded-full bg-indigo-400" />
                  </div>
                </div>
              </div>

              {/* Live Analysis */}
              <div className="bg-white/[0.015] p-6 sm:p-7">
                <div className="mb-7">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-white/25">
                    LIVE ANALYSIS
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Performance signals
                  </p>
                </div>

                <div className="space-y-5">
                  <Metric
                    label="Interview pressure"
                    value="HIGH"
                    progress={78}
                  />

                  <Metric
                    label="Technical depth"
                    value="84%"
                    progress={84}
                  />

                  <Metric
                    label="Communication"
                    value="91%"
                    progress={91}
                  />

                  <Metric
                    label="Problem solving"
                    value="88%"
                    progress={88}
                  />
                </div>

                <div className="my-7 h-px bg-white/[0.06]" />

                {/* Signals */}
                <div className="space-y-3">
                  <Signal label="Real-time probing" active />
                  <Signal label="Time constraint" active />
                  <Signal label="Technical discussion" active />
                  <Signal label="Objective evaluation" />
                </div>

                {/* Score */}
                <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.18em] text-white/25">
                        CURRENT SIGNAL
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Strong performance
                      </p>
                    </div>

                    <span className="text-2xl font-bold text-green-400">
                      87
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom feature rail */}
            <div className="grid border-t border-white/[0.07] sm:grid-cols-4">
              {features.map((feature, index) => (
                <button
                  key={feature.label}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative px-5 py-5 text-left transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-white/[0.045]"
                      : "hover:bg-white/[0.025]"
                  }`}
                >
                  <div
                    className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 to-indigo-500 transition-transform duration-500 ${
                      activeFeature === index
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />

                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold transition ${
                        activeFeature === index
                          ? "bg-blue-500/15 text-blue-400"
                          : "bg-white/[0.04] text-white/25"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`text-[10px] font-bold tracking-[0.12em] transition ${
                        activeFeature === index
                          ? "text-white/80"
                          : "text-white/30"
                      }`}
                    >
                      {feature.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600">
                {features[activeFeature].label}
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              {features[activeFeature].title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#64748B] sm:text-base">
              {features[activeFeature].text}
            </p>
          </div>

          <div className="hidden h-20 w-20 items-center justify-center rounded-3xl border border-[#E2E8F0] bg-white shadow-sm md:flex">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/10" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20">
                <SparkIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-[#64748B]">
            Don't just practice answering questions.
            <span className="mx-2 text-[#CBD5E1]">•</span>
            <span className="font-semibold text-[#0F172A]">
              Practice being interviewed.
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: scaleY(0.45);
            opacity: 0.35;
          }
          100% {
            transform: scaleY(1);
            opacity: 0.9;
          }
        }

        @keyframes soundWave {
          0% {
            transform: scaleY(0.45);
            opacity: 0.35;
          }
          100% {
            transform: scaleY(1.15);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- ICONS ---------------- */

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Metric({ label, value, progress }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-white/40">{label}</span>
        <span className="text-[10px] font-bold text-white/55">{value}</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function Signal({ label, active = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active
            ? "animate-pulse bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"
            : "bg-white/15"
        }`}
      />

      <span
        className={`text-xs ${
          active ? "text-white/55" : "text-white/25"
        }`}
      >
        {label}
      </span>

      {active && (
        <span className="ml-auto text-[9px] font-semibold tracking-widest text-green-400/60">
          ACTIVE
        </span>
      )}
    </div>
  );
}