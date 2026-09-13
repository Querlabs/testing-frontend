"use client";

const problems = [
  {
    number: "01",
    title: "You practice, but don't know if you're ready",
    description:
      "You keep solving questions, but without a realistic benchmark, you never know how close you are to being interview-ready.",
    tag: "Readiness gap",
    icon: <TargetIcon />,
    accent: "blue",
  },
  {
    number: "02",
    title: "Mock interviews don't feel real",
    description:
      "Most mock interviews are predictable. Real interviews aren't — they push back, ask follow-ups and test how you think under pressure.",
    tag: "Realism gap",
    icon: <MicIcon />,
    accent: "indigo",
  },
  {
    number: "03",
    title: "Generic feedback doesn't tell you why you'd fail",
    description:
      "A simple score doesn't explain what went wrong. You need actionable feedback that exposes the exact weaknesses holding you back.",
    tag: "Feedback gap",
    icon: <MessageIcon />,
    accent: "violet",
  },
  {
    number: "04",
    title: "No measurable improvement",
    description:
      "Without consistent scoring and progress tracking, you're practicing blindly — with no clear proof that you're getting better.",
    tag: "Progress gap",
    icon: <ChartIcon />,
    accent: "blue",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Main top glow */}

        <div className="problem-main-glow absolute left-1/2 top-[-220px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#2563EB]/[0.065] blur-[120px]" />

        {/* Blue side glow */}

        <div className="problem-side-glow absolute -left-[200px] top-[35%] h-[450px] w-[450px] rounded-full bg-[#2563EB]/[0.045] blur-[120px]" />

        {/* Indigo side glow */}

        <div className="problem-side-glow-reverse absolute -right-[200px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#6366F1]/[0.045] blur-[120px]" />

        {/* Floating particles */}

        {Array.from({ length: 26 }).map((_, i) => (
          <span
            key={i}
            className={`problem-particle absolute rounded-full ${
              i % 4 === 0
                ? "bg-[#6366F1]/25"
                : "bg-[#2563EB]/25"
            }`}
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 41) % 100}%`,
              top: `${(i * 59) % 100}%`,
              animationDelay: `${(i * 0.32) % 6}s`,
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

          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FDE2E2] bg-white px-3.5 py-1.5 shadow-[0_8px_25px_rgba(239,68,68,.05)]">

            <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-[#FEF2F2]">

              <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#EF4444]/30" />

              <span className="relative text-[9px] font-black text-[#EF4444]">
                !
              </span>

            </span>

            <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#64748B]">
              The problem with interview prep
            </span>

          </div>


          {/* Heading */}

          <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-1.7px] text-[#0F172A] sm:text-[46px]">

            Preparing isn't{" "}

            <span className="relative inline-block">

              <span className="relative z-10 bg-gradient-to-r from-[#EF4444] via-[#F97316] to-[#EF4444] bg-clip-text text-transparent">
                enough.
              </span>

              <span className="absolute bottom-[-7px] left-[4%] h-[5px] w-[92%] rounded-full bg-gradient-to-r from-[#EF4444]/5 via-[#EF4444]/25 to-[#F97316]/5" />

            </span>

          </h2>


          <p className="mx-auto mt-5 max-w-xl text-[13px] leading-6 text-[#64748B] sm:text-[14px]">
            You can spend weeks preparing for interviews and still walk in
            wondering whether you're actually ready.
          </p>

        </div>


        {/* =================================================
            CARDS
        ================================================== */}

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.number}
              problem={problem}
              index={index}
            />
          ))}

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div className="mx-auto mt-14 max-w-3xl">

          <div className="problem-bottom-card group relative overflow-hidden rounded-[26px] border border-[#DCE5F3] bg-white px-6 py-7 text-center shadow-[0_18px_55px_rgba(15,23,42,.055)] sm:px-10">

            {/* Spotlight */}

            <div className="pointer-events-none absolute left-1/2 top-[-80px] h-44 w-96 -translate-x-1/2 rounded-full bg-[#2563EB]/[0.08] blur-[70px] transition-all duration-700 group-hover:bg-[#2563EB]/[0.12]" />

            <div className="relative">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#2563EB] shadow-[0_8px_25px_rgba(37,99,235,.08)] transition-transform duration-500 group-hover:-translate-y-1">
                <SparkIcon />
              </div>

              <p className="text-[14px] font-bold tracking-[-0.3px] text-[#0F172A] sm:text-[15px]">
                The missing piece isn't more practice.
              </p>

              <p className="mx-auto mt-1.5 max-w-lg text-[11px] leading-5 text-[#64748B]">
                It's knowing exactly where you stand, why you're struggling,
                and whether you're actually improving.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx>{`

        /* ================================================
           MAIN GLOW
        ================================================= */

        @keyframes mainGlow {

          0%,
          100% {
            opacity: .45;
            transform: translateX(-50%) scale(.9);
          }

          50% {
            opacity: .9;
            transform: translateX(-50%) scale(1.08);
          }

        }

        .problem-main-glow {
          animation: mainGlow 8s ease-in-out infinite;
        }


        /* ================================================
           SIDE GLOW
        ================================================= */

        @keyframes sideGlow {

          0%,
          100% {
            opacity: .3;
            transform: translate(0, 0);
          }

          50% {
            opacity: .7;
            transform: translate(35px, -30px);
          }

        }

        @keyframes sideGlowReverse {

          0%,
          100% {
            opacity: .3;
            transform: translate(0, 0);
          }

          50% {
            opacity: .7;
            transform: translate(-35px, 25px);
          }

        }

        .problem-side-glow {
          animation: sideGlow 10s ease-in-out infinite;
        }

        .problem-side-glow-reverse {
          animation: sideGlowReverse 11s ease-in-out infinite;
        }


        /* ================================================
           PARTICLES
        ================================================= */

        @keyframes problemParticle {

          0% {
            opacity: 0;
            transform: translate3d(0, 25px, 0) scale(.4);
          }

          20% {
            opacity: .4;
          }

          45% {
            opacity: .9;
          }

          65% {
            opacity: .6;
            transform: translate3d(18px, -25px, 0) scale(1);
          }

          85% {
            opacity: .25;
          }

          100% {
            opacity: 0;
            transform: translate3d(-12px, -65px, 0) scale(.4);
          }

        }

        .problem-particle {
          animation-name: problemParticle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }


        /* ================================================
           CARD REVEAL
        ================================================= */

        @keyframes cardReveal {

          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .problem-card {
          animation: cardReveal .7s cubic-bezier(.22, 1, .36, 1) both;
        }


        /* ================================================
           ICON FLOAT
        ================================================= */

        @keyframes iconFloat {

          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-4px) rotate(1deg);
          }

        }

        .problem-icon {
          animation: iconFloat 4s ease-in-out infinite;
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
   PROBLEM CARD
============================================================ */

function ProblemCard({ problem, index }) {
  const accentStyles = {
    blue: {
      iconBg: "bg-[#EEF4FF]",
      iconText: "text-[#2563EB]",
      number: "text-[#2563EB]/[0.045]",
      glow: "group-hover:bg-[#2563EB]/[0.10]",
      line: "bg-[#2563EB]",
      border: "group-hover:border-[#BFD3F7]",
      tag: "bg-[#F5F8FF] text-[#2563EB] border-[#DFE9FF]",
    },

    indigo: {
      iconBg: "bg-[#F1F0FF]",
      iconText: "text-[#6366F1]",
      number: "text-[#6366F1]/[0.045]",
      glow: "group-hover:bg-[#6366F1]/[0.10]",
      line: "bg-[#6366F1]",
      border: "group-hover:border-[#D5D3FA]",
      tag: "bg-[#F7F6FF] text-[#6366F1] border-[#E8E6FF]",
    },

    violet: {
      iconBg: "bg-[#F4F0FF]",
      iconText: "text-[#7C3AED]",
      number: "text-[#7C3AED]/[0.045]",
      glow: "group-hover:bg-[#7C3AED]/[0.10]",
      line: "bg-[#7C3AED]",
      border: "group-hover:border-[#DDD2F8]",
      tag: "bg-[#F8F5FF] text-[#7C3AED] border-[#EDE5FF]",
    },
  };

  const style = accentStyles[problem.accent];

  return (
    <div
      className="problem-card group relative"
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >

      {/* =================================================
          CARD
      ================================================== */}

      <div
        className={`relative h-full min-h-[315px] overflow-hidden rounded-[26px] border border-[#E3E8F0] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.045)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(15,23,42,.10)] ${style.border}`}
      >

        {/* =================================================
            HUGE BACKGROUND NUMBER
        ================================================== */}

        <span
          className={`pointer-events-none absolute -right-2 -top-7 select-none text-[110px] font-black leading-none tracking-[-8px] transition-all duration-500 group-hover:scale-110 ${style.number}`}
        >
          {problem.number}
        </span>


        {/* =================================================
            TOP SPOTLIGHT
        ================================================== */}

        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[45px] transition-all duration-700 ${style.glow}`}
        />


        {/* =================================================
            ICON
        ================================================== */}

        <div className="relative flex items-center justify-between">

          <div
            className={`problem-icon flex h-12 w-12 items-center justify-center rounded-2xl ${style.iconBg} ${style.iconText} shadow-[0_8px_25px_rgba(37,99,235,.06)]`}
            style={{
              animationDelay: `${index * 250}ms`,
            }}
          >
            {problem.icon}
          </div>


          {/* Small number */}

          <span className="text-[9px] font-bold tracking-[1px] text-[#CBD5E1]">
            {problem.number}
          </span>

        </div>


        {/* =================================================
            TAG
        ================================================== */}

        <div className="relative mt-7">

          <span
            className={`inline-flex rounded-full border px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.8px] ${style.tag}`}
          >
            {problem.tag}
          </span>

        </div>


        {/* =================================================
            TITLE
        ================================================== */}

        <h3 className="relative mt-4 text-[16px] font-bold leading-[1.35] tracking-[-0.4px] text-[#0F172A]">
          {problem.title}
        </h3>


        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p className="relative mt-3 text-[11px] leading-[1.75] text-[#64748B]">
          {problem.description}
        </p>


        {/* =================================================
            BOTTOM LINE
        ================================================== */}

        <div className="absolute bottom-0 left-6 right-6">

          <div className="h-[2px] w-8 rounded-full bg-[#E2E8F0] transition-all duration-500 group-hover:w-full">

            <div
              className={`h-full w-0 rounded-full transition-all duration-700 group-hover:w-full ${style.line}`}
            />

          </div>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   TARGET ICON
============================================================ */

function TargetIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 2v2" />
      <path d="M22 12h-2" />
    </svg>
  );
}


/* ============================================================
   MIC ICON
============================================================ */

function MicIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
      <path d="M8 21h8" />
    </svg>
  );
}


/* ============================================================
   MESSAGE ICON
============================================================ */

function MessageIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-6a3 3 0 0 1-1-2V7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v8Z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}


/* ============================================================
   CHART ICON
============================================================ */

function ChartIcon() {
  return (
    <svg
      width="21"
      height="21"
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
   SPARK ICON
============================================================ */

function SparkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
      <path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6L19 16Z" />
    </svg>
  );
}