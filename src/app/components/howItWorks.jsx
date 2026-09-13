"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Simulate",
    subtitle: "Step into the interview",
    description:
      "Start a realistic AI-powered interview tailored to your role, experience, and target company style.",
    points: [
      "Role-specific questions",
      "Real interview-style follow-ups",
      "Technical + behavioral rounds",
    ],
    icon: <PlayIcon />,
    gradient: "from-[#2563EB] to-[#4F7DF3]",
  },
  {
    number: "02",
    title: "Evaluate",
    subtitle: "Know where you stand",
    description:
      "Your interview is analyzed across the areas that actually matter when an interviewer evaluates you.",
    points: [
      "Technical performance",
      "Problem-solving approach",
      "Communication & clarity",
    ],
    icon: <ChartIcon />,
    gradient: "from-[#4F46E5] to-[#6366F1]",
  },
  {
    number: "03",
    title: "Fix",
    subtitle: "Turn weaknesses into strengths",
    description:
      "Don't just get a score. Understand exactly what went wrong and what you should improve next.",
    points: [
      "Identify weak areas",
      "Actionable AI feedback",
      "Focused improvement guidance",
    ],
    icon: <FixIcon />,
    gradient: "from-[#6366F1] to-[#7C3AED]",
  },
  {
    number: "04",
    title: "Retest",
    subtitle: "Prove you're getting better",
    description:
      "Take another interview and compare your performance to see whether your preparation is actually working.",
    points: [
      "Repeat realistic interviews",
      "Track your performance",
      "Measure your improvement",
    ],
    icon: <RefreshIcon />,
    gradient: "from-[#2563EB] to-[#6366F1]",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // Fade current step out
      setVisible(false);

      setTimeout(() => {
        setActiveStep((current) => (current + 1) % steps.length);
        setVisible(true);
      }, 450);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const step = steps[activeStep];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">

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
            backgroundSize: "55px 55px",
          }}
        />

        {/* Main glow */}

        <div className="works-main-glow absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#2563EB]/[0.06] blur-[120px]" />

        {/* Left glow */}

        <div className="works-side-glow absolute -left-[200px] top-[35%] h-[400px] w-[400px] rounded-full bg-[#6366F1]/[0.045] blur-[110px]" />

        {/* Right glow */}

        <div className="works-side-glow-reverse absolute -right-[200px] bottom-[5%] h-[400px] w-[400px] rounded-full bg-[#2563EB]/[0.045] blur-[110px]" />

        {/* Particles */}

        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className={`works-particle absolute rounded-full ${
              i % 4 === 0
                ? "bg-[#6366F1]/25"
                : "bg-[#2563EB]/20"
            }`}
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 41) % 100}%`,
              top: `${(i * 63) % 100}%`,
              animationDelay: `${(i * 0.3) % 6}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE7FF] bg-white px-3.5 py-1.5 shadow-[0_6px_20px_rgba(37,99,235,.04)]">

            <span className="relative flex h-2 w-2">

              <span className="absolute inset-0 animate-ping rounded-full bg-[#2563EB]/30" />

              <span className="relative h-2 w-2 rounded-full bg-[#2563EB]" />

            </span>

            <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#2563EB]">
              How it works
            </span>

          </div>


          <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-1.7px] text-[#0F172A] sm:text-[46px]">

            One interview.

            <span className="ml-2 bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
              Four steps.
            </span>

          </h2>


          <p className="mx-auto mt-5 max-w-xl text-[13px] leading-6 text-[#64748B] sm:text-[14px]">
            InterviewProof turns every interview into a continuous
            improvement loop.
          </p>

        </div>


        {/* =================================================
            MAIN ANIMATED EXPERIENCE
        ================================================== */}

        <div className="mx-auto mt-16 max-w-5xl">

          {/* Step navigation */}

          <div className="mb-10 flex items-center justify-center gap-2 sm:gap-3">

            {steps.map((item, index) => (
              <button
                key={item.number}
                onClick={() => {
                  setActiveStep(index);
                  setVisible(true);
                }}
                className="group flex items-center gap-2"
              >

                {/* Number */}

                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-[9px] font-extrabold transition-all duration-500 ${
                    activeStep === index
                      ? "border-[#2563EB] bg-[#2563EB] text-white shadow-[0_6px_20px_rgba(37,99,235,.25)]"
                      : "border-[#DCE3ED] bg-white text-[#94A3B8] group-hover:border-[#BFCDE2]"
                  }`}
                >
                  {item.number}
                </span>


                {/* Label */}

                <span
                  className={`hidden text-[10px] font-semibold transition-colors duration-300 sm:block ${
                    activeStep === index
                      ? "text-[#2563EB]"
                      : "text-[#94A3B8]"
                  }`}
                >
                  {item.title}
                </span>


                {/* Connector */}

                {index < steps.length - 1 && (
                  <span className="ml-1 hidden h-px w-5 bg-[#DCE3ED] sm:block" />
                )}

              </button>
            ))}

          </div>


          {/* =================================================
              ANIMATED CONTENT CARD
          ================================================== */}

          <div
            className={`relative transition-all duration-450 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >

            <div className="relative overflow-hidden rounded-[30px] border border-[#DCE5F2] bg-white shadow-[0_25px_80px_rgba(15,23,42,.08)]">

              {/* Top gradient strip */}

              <div
                className={`h-[3px] w-full bg-gradient-to-r ${step.gradient}`}
              />


              {/* Background glow */}

              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#2563EB]/[0.06] blur-[80px]" />

              <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-[280px] w-[280px] rounded-full bg-[#6366F1]/[0.045] blur-[80px]" />


              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="relative grid lg:grid-cols-[.85fr_1.15fr]">

                {/* LEFT VISUAL */}

                <div className="relative flex min-h-[360px] items-center justify-center border-b border-[#E8EDF4] bg-gradient-to-br from-[#F8FAFF] to-white p-10 lg:border-b-0 lg:border-r">

                  {/* Decorative circles */}

                  <div className="absolute h-[230px] w-[230px] rounded-full border border-[#2563EB]/10" />

                  <div className="absolute h-[175px] w-[175px] rounded-full border border-dashed border-[#6366F1]/15 step-ring" />

                  <div className="absolute h-[120px] w-[120px] rounded-full bg-[#2563EB]/[0.06] blur-2xl" />


                  {/* Orbit dots */}

                  <span className="orbit-dot orbit-one" />
                  <span className="orbit-dot orbit-two" />
                  <span className="orbit-dot orbit-three" />


                  {/* Main icon */}

                  <div
                    className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br ${step.gradient} text-white shadow-[0_25px_50px_rgba(37,99,235,.22)] step-icon`}
                  >
                    {step.icon}
                  </div>


                  {/* Step number */}

                  <div className="absolute bottom-8 left-8">

                    <span className="text-[80px] font-black leading-none tracking-[-7px] text-[#0F172A]/[0.035]">
                      {step.number}
                    </span>

                  </div>

                </div>


                {/* RIGHT CONTENT */}

                <div className="flex min-h-[360px] flex-col justify-center p-8 sm:p-10 lg:p-12">

                  {/* Step label */}

                  <div className="flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />

                    <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#94A3B8]">
                      Step {step.number}
                    </span>

                  </div>


                  {/* Title */}

                  <h3 className="mt-4 text-[34px] font-bold tracking-[-1.5px] text-[#0F172A] sm:text-[40px]">
                    {step.title}
                  </h3>


                  {/* Subtitle */}

                  <p className="mt-1 text-[13px] font-semibold text-[#2563EB]">
                    {step.subtitle}
                  </p>


                  {/* Description */}

                  <p className="mt-5 max-w-lg text-[12px] leading-6 text-[#64748B] sm:text-[13px]">
                    {step.description}
                  </p>


                  {/* Points */}

                  <div className="mt-7 space-y-3">

                    {step.points.map((point, index) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >

                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#2563EB]">

                          <CheckIcon />

                        </span>

                        <span className="text-[11px] font-medium text-[#475569]">
                          {point}
                        </span>

                      </div>
                    ))}

                  </div>


                  {/* Progress */}

                  <div className="mt-8">

                    <div className="flex items-center justify-between">

                      <span className="text-[9px] font-semibold uppercase tracking-[1px] text-[#CBD5E1]">
                        Your preparation loop
                      </span>

                      <span className="text-[9px] font-bold text-[#2563EB]">
                        {step.number} / 04
                      </span>

                    </div>


                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#EEF2F7]">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#6366F1] transition-all duration-700"
                        style={{
                          width: `${((activeStep + 1) / 4) * 100}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              LOOP MESSAGE
          ================================================== */}

          <div className="mt-8 flex justify-center">

            <div className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-[0_6px_20px_rgba(15,23,42,.035)]">

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EEF4FF] text-[#2563EB]">

                <RefreshIcon />

              </span>

              <span className="text-[10px] font-semibold text-[#64748B]">
                Repeat until the interview feels familiar.
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx>{`

        /* ================================================
           BACKGROUND
        ================================================= */

        @keyframes mainGlow {

          0%,
          100% {
            opacity: .4;
            transform: translateX(-50%) scale(.9);
          }

          50% {
            opacity: .8;
            transform: translateX(-50%) scale(1.08);
          }

        }

        .works-main-glow {
          animation: mainGlow 8s ease-in-out infinite;
        }


        @keyframes sideGlow {

          0%,
          100% {
            opacity: .3;
            transform: translate(0, 0);
          }

          50% {
            opacity: .65;
            transform: translate(30px, -25px);
          }

        }

        @keyframes sideGlowReverse {

          0%,
          100% {
            opacity: .3;
            transform: translate(0, 0);
          }

          50% {
            opacity: .65;
            transform: translate(-30px, 25px);
          }

        }

        .works-side-glow {
          animation: sideGlow 10s ease-in-out infinite;
        }

        .works-side-glow-reverse {
          animation: sideGlowReverse 11s ease-in-out infinite;
        }


        /* ================================================
           PARTICLES
        ================================================= */

        @keyframes particleFloat {

          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }

          30% {
            opacity: .7;
          }

          60% {
            opacity: .4;
            transform: translate3d(15px, -25px, 0);
          }

          100% {
            opacity: 0;
            transform: translate3d(-10px, -60px, 0);
          }

        }

        .works-particle {
          animation: particleFloat ease-in-out infinite;
        }


        /* ================================================
           STEP RING
        ================================================= */

        @keyframes ringRotate {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        .step-ring {
          animation: ringRotate 18s linear infinite;
        }


        /* ================================================
           MAIN ICON
        ================================================= */

        @keyframes iconAppear {

          0% {
            opacity: 0;
            transform: scale(.7) translateY(10px);
          }

          60% {
            transform: scale(1.04) translateY(-2px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }

        }

        .step-icon {
          animation: iconAppear .65s cubic-bezier(.22, 1, .36, 1);
        }


        /* ================================================
           ORBIT DOTS
        ================================================= */

        .orbit-dot {
          position: absolute;
          z-index: 5;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #2563EB;
          box-shadow: 0 0 15px rgba(37, 99, 235, .35);
        }

        .orbit-one {
          animation: orbitOne 5s linear infinite;
        }

        .orbit-two {
          background: #6366F1;
          animation: orbitTwo 6s linear infinite;
        }

        .orbit-three {
          animation: orbitThree 7s linear infinite;
        }


        @keyframes orbitOne {

          0% {
            transform: rotate(0deg) translateX(115px) rotate(0deg);
          }

          100% {
            transform: rotate(360deg) translateX(115px) rotate(-360deg);
          }

        }

        @keyframes orbitTwo {

          0% {
            transform: rotate(120deg) translateX(87px) rotate(-120deg);
          }

          100% {
            transform: rotate(480deg) translateX(87px) rotate(-480deg);
          }

        }

        @keyframes orbitThree {

          0% {
            transform: rotate(240deg) translateX(100px) rotate(-240deg);
          }

          100% {
            transform: rotate(600deg) translateX(100px) rotate(-600deg);
          }

        }


        /* ================================================
           REDUCE MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }

        }

      `}</style>

    </section>
  );
}


/* ============================================================
   CHECK ICON
============================================================ */

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}


/* ============================================================
   PLAY ICON
============================================================ */

function PlayIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4V8Z" />
    </svg>
  );
}


/* ============================================================
   CHART ICON
============================================================ */

function ChartIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 3-4 3 2 5-6" />
      <path d="M18 7h-3" />
      <path d="M18 7v3" />
    </svg>
  );
}


/* ============================================================
   FIX ICON
============================================================ */

function FixIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L4 17l3 3 4.3-4.3a5 5 0 0 0 6.4-6.4l-3.2 3.2-3-3 3.2-3.2Z" />
    </svg>
  );
}


/* ============================================================
   REFRESH ICON
============================================================ */

function RefreshIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 11a8 8 0 0 0-14.7-4L4 9" />
      <path d="M4 4v5h5" />
      <path d="M4 13a8 8 0 0 0 14.7 4L20 15" />
      <path d="M20 20v-5h-5" />
    </svg>
  );
}


/* ============================================================
   SPARK ICON
============================================================ */

function SparkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
    </svg>
  );
}