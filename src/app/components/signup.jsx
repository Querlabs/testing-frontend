"use client";

import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const particles = Array.from({ length: 32 });

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-4 py-6">

      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Blue Ambient Orb */}
        <div className="animate-orb absolute -left-[180px] top-[4%] h-[430px] w-[430px] rounded-full bg-[#2563EB]/10 blur-[100px]" />

        {/* Indigo Ambient Orb */}
        <div className="animate-orb-reverse absolute -right-[180px] bottom-[-5%] h-[480px] w-[480px] rounded-full bg-[#6366F1]/10 blur-[110px]" />

        {/* Center Glow */}
        <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/5 blur-[100px]" />

        {/* =================================================
            FLOATING PARTICLES
        ================================================== */}

        {particles.map((_, i) => (
          <span
            key={i}
            className={`particle absolute rounded-full ${
              i % 3 === 0
                ? "bg-[#6366F1]/35"
                : "bg-[#2563EB]/30"
            }`}
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              animationDelay: `${(i * 0.35) % 6}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}

        {/* =================================================
            SMALL FLOATING GLOWS
        ================================================== */}

        <div className="animate-float-small absolute left-[12%] top-[35%] h-20 w-20 rounded-full bg-[#2563EB]/5 blur-2xl" />

        <div className="animate-float-small-reverse absolute right-[14%] top-[28%] h-24 w-24 rounded-full bg-[#6366F1]/5 blur-2xl" />

        {/* =================================================
            DECORATIVE RINGS
        ================================================== */}

        <div className="animate-spin-slow absolute left-[6%] top-[10%] h-[170px] w-[170px] rounded-full border border-[#2563EB]/10" />

        <div className="animate-spin-slow absolute left-[8%] top-[12%] h-[130px] w-[130px] rounded-full border border-dashed border-[#6366F1]/10" />

        <div className="animate-spin-reverse absolute bottom-[8%] right-[7%] h-[210px] w-[210px] rounded-full border border-[#6366F1]/10" />

        <div className="animate-spin-reverse absolute bottom-[11%] right-[10%] h-[160px] w-[160px] rounded-full border border-dashed border-[#2563EB]/10" />

        {/* =================================================
            TINY GLOW DOTS
        ================================================== */}

        <span className="animate-dot absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-[#2563EB]/40" />

        <span className="animate-dot animation-delay-1000 absolute right-[17%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#6366F1]/50" />

        <span className="animate-dot animation-delay-500 absolute bottom-[24%] left-[20%] h-1.5 w-1.5 rounded-full bg-[#2563EB]/40" />

        <span className="animate-dot animation-delay-1500 absolute bottom-[18%] right-[23%] h-2 w-2 rounded-full bg-[#6366F1]/40" />

      </div>

      {/* =====================================================
          SIGNUP CONTENT
      ====================================================== */}

      <div className="relative z-10 w-full max-w-[480px] animate-fade-up">

        {/* =================================================
            LOGO
        ================================================== */}

        <div className="mb-5 flex justify-center">

          <a
            href="/"
            className="flex items-center gap-2.5"
          >

            <div className="flex h-7 items-end gap-[3px]">

              <span className="h-2.5 w-[5px] rounded-full bg-[#2563EB]" />

              <span className="h-[18px] w-[5px] rounded-full bg-[#2563EB]" />

              <span className="h-7 w-[5px] rounded-full bg-gradient-to-t from-[#2563EB] to-[#6366F1]" />

            </div>

            <span className="text-[21px] font-bold tracking-[-0.7px] text-[#0F172A]">
              Interview<span className="text-[#2563EB]">Proof</span>
            </span>

          </a>

        </div>

        {/* =================================================
            CARD
        ================================================== */}

        <div className="rounded-[26px] border border-white bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,.10)] backdrop-blur-2xl sm:p-7">

          {/* Heading */}

          <div className="mb-5 text-center">

            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[19px] text-[#2563EB]">
              ✦
            </div>

            <h1 className="text-[25px] font-bold tracking-[-1px] text-[#0F172A]">
              Create your account
            </h1>

            <p className="mt-1.5 text-[12px] text-[#64748B]">
              Start preparing for your next interview.
            </p>

          </div>

          {/* =================================================
              FORM
          ================================================== */}

          <form className="space-y-3">

            {/* Full Name */}

            <Field
              label="Full Name"
              placeholder="John Doe"
              icon={<UserIcon />}
            />

            {/* Email + Phone */}

            <div className="grid grid-cols-2 gap-3">

              <Field
                label="Email"
                type="email"
                placeholder="you@example.com"
                icon={<MailIcon />}
              />

              <Field
                label="Phone"
                type="tel"
                placeholder="+91 98765..."
                icon={<PhoneIcon />}
              />

            </div>

            {/* Password + Confirm */}

            <div className="grid grid-cols-2 gap-3">

              <PasswordField
                label="Password"
                placeholder="Create password"
                show={showPassword}
                setShow={setShowPassword}
              />

              <PasswordField
                label="Confirm Password"
                placeholder="Repeat password"
                show={showConfirm}
                setShow={setShowConfirm}
              />

            </div>

            {/* Current Job Role */}

            <div>

              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[.5px] text-[#64748B]">
                Current Job Role
              </label>

              <div className="relative">

                <select
                  required
                  defaultValue=""
                  className="h-[44px] w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-[12px] text-[#33466B] outline-none transition-all focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                >

                  <option value="" disabled>
                    Select your current role
                  </option>

                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>Software Engineer</option>
                  <option>DevOps Engineer</option>
                  <option>Data Analyst</option>
                  <option>Data Scientist</option>
                  <option>Product Manager</option>
                  <option>UI/UX Designer</option>
                  <option>Other</option>

                </select>

                <Chevron />

              </div>

            </div>

            {/* Experience */}

            <div>

              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[.5px] text-[#64748B]">
                Years of Experience
              </label>

              <div className="grid grid-cols-4 gap-2">

                {["0–1", "1–3", "3–5", "5+"].map(
                  (item, index) => (

                    <label
                      key={item}
                      className="cursor-pointer"
                    >

                      <input
                        type="radio"
                        name="experience"
                        value={item}
                        defaultChecked={index === 0}
                        className="peer sr-only"
                      />

                      <span className="flex h-[40px] items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[11px] font-semibold text-[#64748B] transition-all duration-200 hover:border-[#B9CAF0] peer-checked:border-[#2563EB] peer-checked:bg-[#EEF4FF] peer-checked:text-[#2563EB]">

                        {item} yrs

                      </span>

                    </label>

                  )
                )}

              </div>

            </div>

            {/* Terms */}

            <label className="flex cursor-pointer items-start gap-2 pt-0.5">

              <input
                type="checkbox"
                required
                className="mt-[2px] h-3.5 w-3.5 accent-[#2563EB]"
              />

              <span className="text-[10px] leading-4 text-[#64748B]">

                I agree to the{" "}

                <a
                  href="#"
                  className="font-semibold text-[#2563EB]"
                >
                  Terms of Service
                </a>{" "}

                and{" "}

                <a
                  href="#"
                  className="font-semibold text-[#2563EB]"
                >
                  Privacy Policy
                </a>

              </span>

            </label>

            {/* Submit Button */}

            <button
              type="submit"
              className="group relative mt-1 flex h-[49px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#2563EB] text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_15px_30px_rgba(37,99,235,.30)]"
            >

              {/* Button Shine */}

              <span className="absolute -left-[100px] top-0 h-full w-[70px] skew-x-[-20deg] bg-white/20 transition-all duration-700 group-hover:left-[110%]" />

              Create My Account

              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />

            </button>

          </form>

          {/* =================================================
              SECURITY FOOTER
          ================================================== */}

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-[#94A3B8]">

            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />

            Your data is encrypted and secure

          </div>

        </div>

        {/* =================================================
            LOGIN
        ================================================== */}

        <p className="mt-4 text-center text-[11px] text-[#64748B]">

          Already have an account?

          <a
            href="/login"
            className="ml-1 font-semibold text-[#2563EB] hover:underline"
          >
            Sign in
          </a>

        </p>

      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx>{`

        /* ===============================
           FORM ENTRANCE
        =============================== */

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px) scale(.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-up {
          animation: fadeUp .65s ease-out both;
        }


        /* ===============================
           LARGE ORBS
        =============================== */

        @keyframes orb {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(35px, 25px) scale(1.08);
          }
        }

        @keyframes orbReverse {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-30px, -25px) scale(1.08);
          }
        }

        .animate-orb {
          animation: orb 9s ease-in-out infinite;
        }

        .animate-orb-reverse {
          animation: orbReverse 10s ease-in-out infinite;
        }


        /* ===============================
           CENTER GLOW
        =============================== */

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: .35;
            transform: translate(-50%, -50%) scale(.9);
          }

          50% {
            opacity: .75;
            transform: translate(-50%, -50%) scale(1.12);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }


        /* ===============================
           FLOATING PARTICLES
        =============================== */

        @keyframes particleFloat {

          0% {
            opacity: 0;
            transform: translate3d(0, 25px, 0) scale(.5);
          }

          15% {
            opacity: .5;
          }

          40% {
            opacity: .9;
          }

          60% {
            opacity: .7;
            transform: translate3d(18px, -20px, 0) scale(1);
          }

          80% {
            opacity: .35;
          }

          100% {
            opacity: 0;
            transform: translate3d(-12px, -65px, 0) scale(.45);
          }

        }

        .particle {
          animation-name: particleFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }


        /* ===============================
           SMALL FLOATING GLOWS
        =============================== */

        @keyframes floatSmall {

          0%,
          100% {
            transform: translate(0, 0);
            opacity: .35;
          }

          50% {
            transform: translate(25px, -30px);
            opacity: .7;
          }

        }

        @keyframes floatSmallReverse {

          0%,
          100% {
            transform: translate(0, 0);
            opacity: .3;
          }

          50% {
            transform: translate(-25px, 25px);
            opacity: .65;
          }

        }

        .animate-float-small {
          animation: floatSmall 7s ease-in-out infinite;
        }

        .animate-float-small-reverse {
          animation: floatSmallReverse 8s ease-in-out infinite;
        }


        /* ===============================
           FLOATING DOTS
        =============================== */

        @keyframes dot {

          0%,
          100% {
            opacity: .2;
            transform: translateY(0);
          }

          50% {
            opacity: 1;
            transform: translateY(-12px);
          }

        }

        .animate-dot {
          animation: dot 3s ease-in-out infinite;
        }


        /* ===============================
           ROTATING RINGS
        =============================== */

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

        .animate-spin-slow {
          animation: spinSlow 30s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 25s linear infinite;
        }


        /* ===============================
           ANIMATION DELAYS
        =============================== */

        .animation-delay-500 {
          animation-delay: .5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }


        /* ===============================
           ACCESSIBILITY
        =============================== */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }

        }

      `}</style>

    </main>
  );
}


/* ============================================================
   INPUT FIELD
============================================================ */

function Field({
  label,
  placeholder,
  type = "text",
  icon,
}) {
  return (
    <div>

      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[.5px] text-[#64748B]">
        {label}
      </label>

      <div className="group relative">

        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-[#2563EB]">
          {icon}
        </span>

        <input
          required
          type={type}
          placeholder={placeholder}
          className="h-[44px] w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-10 pr-3 text-[12px] text-[#0F172A] outline-none transition-all placeholder:text-[#A5B1C2] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
        />

      </div>

    </div>
  );
}


/* ============================================================
   PASSWORD FIELD
============================================================ */

function PasswordField({
  label,
  placeholder,
  show,
  setShow,
}) {
  return (
    <div>

      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[.5px] text-[#64748B]">
        {label}
      </label>

      <div className="group relative">

        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-[#2563EB]">
          <LockIcon />
        </span>

        <input
          required
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="h-[44px] w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-10 pr-10 text-[12px] text-[#0F172A] outline-none transition-all placeholder:text-[#A5B1C2] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors hover:text-[#2563EB]"
        >
          {show ? <EyeOff /> : <Eye />}
        </button>

      </div>

    </div>
  );
}


/* ============================================================
   USER ICON
============================================================ */

function UserIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ============================================================
   MAIL ICON
============================================================ */

function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}


/* ============================================================
   PHONE ICON
============================================================ */

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 3h3l2 5-2 2c1 2 3 3 4 4l2-2 5 2v3c0 1-1 2-2 2C11 19 5 13 5 5c0-1 1-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* ============================================================
   LOCK ICON
============================================================ */

function LockIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="4"
        y="10"
        width="16"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M8 10V7a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}


/* ============================================================
   EYE ICON
============================================================ */

function Eye() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}


/* ============================================================
   EYE OFF ICON
============================================================ */

function EyeOff() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.1 3.8M6.2 6.2C3.5 8.2 2 12 2 12s3.5 7 10 7c1.3 0 2.5-.3 3.5-.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ============================================================
   CHEVRON
============================================================ */

function Chevron() {
  return (
    <svg
      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
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


/* ============================================================
   ARROW
============================================================ */

function Arrow({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
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