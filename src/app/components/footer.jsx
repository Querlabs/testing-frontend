"use client";

const links = [
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ───────────────── TOP ───────────────── */}

        <div className="flex flex-col items-center pt-24 text-center">

          {/* Pulse */}
          <div className="relative mb-8 flex h-14 w-14 items-center justify-center">
            <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/10" />

            <div className="absolute inset-1 rounded-full border border-blue-400/20" />

            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_40px_rgba(37,99,235,.35)]">
              <span className="text-sm font-bold">I</span>
            </div>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            InterviewProof
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Know before you go.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
            Turn interview uncertainty into measurable confidence.
          </p>
        </div>

        {/* ───────────────── BIG WORDMARK ───────────────── */}

        <div className="relative mt-20 overflow-hidden">
          <div
            className="select-none whitespace-nowrap text-center text-[15vw] font-black leading-[0.75] tracking-[-0.08em] text-white/[0.035]"
            style={{
              animation: "wordmarkFloat 8s ease-in-out infinite",
            }}
          >
            INTERVIEWPROOF
          </div>

          {/* Actual centered wordmark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="group relative">
              <div className="absolute -inset-8 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

              <div className="relative text-4xl font-bold tracking-tight sm:text-5xl">
                Interview<span className="text-blue-500">Proof</span>
              </div>
            </div>
          </div>
        </div>

        {/* ───────────────── NAV ───────────────── */}

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 border-y border-white/[0.08] py-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm text-slate-500 transition-colors duration-300 hover:text-white"
            >
              {link.label}

              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* ───────────────── BOTTOM STATUS ───────────────── */}

        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} InterviewProof
          </div>

          {/* Center philosophy */}
          <div className="order-first flex items-center justify-center gap-2 text-xs text-slate-600 sm:order-none">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

            <span>
              Assess
            </span>

            <span className="text-blue-500">→</span>

            <span>Improve</span>

            <span className="text-blue-500">→</span>

            <span className="text-slate-400">Get Ready</span>
          </div>

          {/* Legal */}
          <div className="flex items-center justify-center gap-5 text-xs text-slate-600">
            <a
              href="#privacy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy
            </a>

            <span className="h-3 w-px bg-white/10" />

            <a
              href="#terms"
              className="transition-colors hover:text-slate-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <style jsx>{`
        @keyframes wordmarkFloat {
          0%,
          100% {
            transform: translateX(-1%);
          }

          50% {
            transform: translateX(1%);
          }
        }
      `}</style>
    </footer>
  );
}