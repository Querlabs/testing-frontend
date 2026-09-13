"use client";

import { useEffect, useState } from "react";

const simulations = [
  {
    company: "Google",
    role: "SDE-1",
    category: "Software Engineering",
    difficulty: "Hard",
    duration: "45 min",
    color: "from-blue-500 to-cyan-400",
    logo: "G",
  },
  {
    company: "Microsoft",
    role: "SDE-1",
    category: "Software Engineering",
    difficulty: "Medium",
    duration: "45 min",
    color: "from-indigo-500 to-blue-500",
    logo: "M",
  },
  {
    company: "Amazon",
    role: "SDE-1",
    category: "Software Engineering",
    difficulty: "Hard",
    duration: "50 min",
    color: "from-orange-400 to-amber-500",
    logo: "A",
  },
];

export default function CompanyRoleSimulations() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % simulations.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute bottom-0 right-[5%] h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Role Simulations
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-6xl">
            Practice for the role.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Not just an interview.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Experience realistic interview simulations designed around the
            role you're actually targeting.
          </p>
        </div>

        {/* Simulation area */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {simulations.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={`${item.company}-${item.role}`}
                  onClick={() => setActive(index)}
                  className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-700 ${
                    isActive
                      ? "border-blue-300 bg-white shadow-[0_25px_60px_rgba(37,99,235,0.14)] md:-translate-y-3"
                      : "border-slate-200 bg-slate-50/70 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  }`}
                >
                  {/* Active glow */}
                  {isActive && (
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                  )}

                  {/* Company logo */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-xl font-bold text-white shadow-lg transition-transform duration-500 ${
                        isActive ? "scale-110 rotate-3" : "group-hover:scale-105"
                      }`}
                    >
                      {item.logo}
                    </div>

                    {isActive && (
                      <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-green-600">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                        Available
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="relative mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
                      {item.company}{" "}
                      <span className="text-blue-600">{item.role}</span>
                    </h3>
                  </div>

                  {/* Details */}
                  <div className="relative mt-6 flex gap-2">
                    <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500">
                      {item.difficulty}
                    </span>

                    <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500">
                      {item.duration}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
                    <span className="text-xs text-slate-400">
                      Target simulation
                    </span>

                    <span
                      className={`text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-blue-600"
                          : "translate-x-1 text-slate-400"
                      }`}
                    >
                      Explore →
                    </span>
                  </div>

                  {/* Active progress */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 h-1 overflow-hidden rounded-r-full bg-gradient-to-r from-blue-600 to-indigo-500">
                      <div
                        className="h-full w-full origin-left bg-white/30"
                        style={{
                          animation: "cardProgress 2.8s linear",
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active simulation preview */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-[#0F172A] p-8 shadow-2xl sm:p-10">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
            <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-indigo-600/10 blur-[100px]" />

            <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
              {/* Left */}
              <div className="flex items-center gap-5">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${simulations[active].color} text-2xl font-bold text-white shadow-xl`}
                >
                  {simulations[active].logo}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Selected simulation
                  </p>

                  <h3
                    key={active}
                    className="mt-1 animate-[fadeUp_.4s_ease-out] text-2xl font-bold text-white"
                  >
                    {simulations[active].company}{" "}
                    {simulations[active].role}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Realistic interview environment
                  </p>
                </div>
              </div>

              {/* Middle stats */}
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-xs text-slate-500">Difficulty</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {simulations[active].difficulty}
                  </p>
                </div>

                <div className="h-8 w-px bg-white/10" />

                <div>
                  <p className="text-xs text-slate-500">Duration</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {simulations[active].duration}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button className="group rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50">
                Start Simulation
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Scanning line */}
            <div
              className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{
                animation: "scan 4s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Trust note */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-slate-400">
          <span className="text-green-500">✓</span>
          <span>
            Only simulations currently available on InterviewProof are shown.
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardProgress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes scan {
          0% {
            left: -30%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
}