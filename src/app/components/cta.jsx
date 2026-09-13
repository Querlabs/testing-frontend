"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-32">
      {/* Background grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Main glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute left-[12%] top-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
      <div className="absolute left-[20%] top-[70%] h-1 w-1 animate-pulse rounded-full bg-indigo-400 [animation-delay:500ms]" />
      <div className="absolute right-[15%] top-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300 [animation-delay:1000ms]" />
      <div className="absolute right-[24%] bottom-[25%] h-1 w-1 animate-pulse rounded-full bg-indigo-300 [animation-delay:700ms]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Know where you stand
        </div>

        {/* Animated orb */}
        <div className="relative mx-auto mb-10 flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full border border-blue-400/10" />

          <div
            className="absolute inset-2 rounded-full border border-blue-400/20"
            style={{
              animation: "spin 12s linear infinite",
            }}
          />

          <div
            className="absolute inset-5 rounded-full border border-indigo-400/20"
            style={{
              animation: "spinReverse 8s linear infinite",
            }}
          />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_50px_rgba(37,99,235,.45)]">
            <span className="text-2xl font-bold text-white">✓</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Stop Guessing.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
            Start Knowing.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
          Find out how ready you really are — before the interviewer does.
          Get your weaknesses, communication, and interview readiness score
          in one realistic assessment.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-[0_15px_50px_rgba(37,99,235,.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,.45)]"
          >
            {/* Shine */}
            <span
              className={`absolute inset-y-0 w-20 -skew-x-12 bg-white/15 transition-all duration-700 ${
                hovered ? "left-[120%]" : "-left-24"
              }`}
            />

            <span className="relative flex items-center gap-3">
              Check My Interview Readiness

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </div>

        {/* Micro reassurance */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span>
            Start with a free test
          </span>

          <span className="hidden h-3 w-px bg-white/10 sm:block" />

          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span>
            No interview required
          </span>

          <span className="hidden h-3 w-px bg-white/10 sm:block" />

          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span>
            Know your score
          </span>
        </div>

        {/* Bottom loop */}
        <div className="mx-auto mt-20 flex max-w-xl items-center justify-center gap-3 text-xs text-slate-600">
          <span>Assess</span>
          <span className="text-blue-500">→</span>
          <span>Diagnose</span>
          <span className="text-blue-500">→</span>
          <span>Improve</span>
          <span className="text-blue-500">→</span>
          <span className="text-white">Get Ready</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}