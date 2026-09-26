"use client";

import { useState ,useContext, useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/auth.context";
export default function SignupPage() {
  const router = useRouter();
  const {Loading, signup, verifyOTP} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    currentJobRole: "",
    yearsOfExperience: "0-1",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [OtpScreen, setOtpScreen] = useState(false)
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleOTPChange = (e) => {
      const value = e.target.value;

      // Sirf numbers allow
      if (/^\d*$/.test(value) && value.length <= 6) {
        setOtp(value);
      }
    };

  const verifyOTPfun = async () => {
    try {
      const response = await verifyOTP(
        formData.email,
        otp
      );

      if (response.success) {
        router.push("/onboarding");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // -----------------------------
    // Frontend validation
    // -----------------------------

    if (!agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const data = await signup(formData);

      console.log("Signup Success:", data);
      if(data.success){
        setOtpScreen(OtpScreen=> true);
      }
      // yahan OTP screen par redirect karna
      // router.push(`/signup/verify-otp?email=${formData.email}`);

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-10 flex items-center justify-center">

      {OtpScreen &&
      
        <div className="w-full max-w-[420px]">

        {/* Card */}
        <div className="rounded-[26px] border border-[#E2E8F0] bg-white p-7 shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

          {/* Icon */}
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-xl text-[#2563EB]">
            ✉
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-[25px] font-bold tracking-[-1px] text-[#0F172A]">
              Verify your email
            </h1>

            <p className="mt-2 text-[12px] leading-5 text-[#64748B]">
              We&apos;ve sent a 6-digit verification code to
            </p>

            <p className="mt-1 text-[12px] font-semibold text-[#2563EB]">
              example@gmail.com
            </p>
          </div>

          {/* OTP Input */}
          <div className="mt-7">
            <input
              type="text"
              inputMode="numeric"
              value={otp}
              onChange={handleOTPChange}
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              className="h-12 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-center text-[18px] font-bold tracking-[6px] text-[#0F172A] outline-none transition placeholder:text-[12px] placeholder:font-normal placeholder:tracking-normal placeholder:text-[#A5B1C2] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
            />
          </div>

          {/* Verify Button */}
          <button
            type="button"
            onClick={verifyOTPfun}
            disabled={otp.length !== 6}
            className="mt-5 h-[49px] w-full rounded-xl bg-[#2563EB] text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,.22)] transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Verify Email
          </button>

          {/* Resend */}
          <div className="mt-5 text-center">
            <p className="text-[11px] text-[#94A3B8]">
              Didn&apos;t receive the code?
            </p>

            <button
              type="button"
              className="mt-1 text-[12px] font-semibold text-[#2563EB] hover:underline"
            >
              Resend OTP
            </button>
          </div>

          {/* Security */}
          <div className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-[#94A3B8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            Your verification is secure
          </div>
        </div>

        {/* Back */}
        <p className="mt-5 text-center text-[11px] text-[#64748B]">
          Wrong email?

          <button
            type="button"
            className="ml-1 font-semibold text-[#2563EB] hover:underline"
          >
            Go back
          </button>
        </p>

      </div>

      }

      {!OtpScreen &&
        <div className="w-full max-w-[470px]">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
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
                Interview
                <span className="text-[#2563EB]">Proof</span>
              </span>
            </a>
          </div>

          {/* Card */}
          <div className="rounded-[26px] border border-[#E2E8F0] bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-8">
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4FF] text-lg text-[#2563EB]">
                ✦
              </div>

              <h1 className="text-[25px] font-bold tracking-[-1px] text-[#0F172A]">
                Create your account
              </h1>

              <p className="mt-1.5 text-[12px] text-[#64748B]">
                Start preparing for your next interview.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-[12px] font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Full Name */}
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                icon={<UserIcon />}
              />

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  icon={<MailIcon />}
                />

                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765..."
                  icon={<PhoneIcon />}
                />
              </div>

              {/* Password + Confirm */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <PasswordInput
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  show={showPassword}
                  setShow={setShowPassword}
                />

                <PasswordInput
                  label="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat password"
                  show={showConfirm}
                  setShow={setShowConfirm}
                />
              </div>

              {/* Job Role */}
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.5px] text-[#64748B]">
                  Current Job Role
                </label>

                <div className="relative">
                  <select
                    name="currentJobRole"
                    value={formData.currentJobRole}
                    onChange={handleChange}
                    required
                    className="h-[46px] w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-[12px] text-[#33466B] outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  >
                    <option value="">
                      Select your current role
                    </option>

                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>

                    <option value="Backend Developer">
                      Backend Developer
                    </option>

                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>

                    <option value="Software Engineer">
                      Software Engineer
                    </option>

                    <option value="DevOps Engineer">
                      DevOps Engineer
                    </option>

                    <option value="Data Analyst">
                      Data Analyst
                    </option>

                    <option value="Data Scientist">
                      Data Scientist
                    </option>

                    <option value="Product Manager">
                      Product Manager
                    </option>

                    <option value="UI/UX Designer">
                      UI/UX Designer
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                  <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    <Chevron />
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.5px] text-[#64748B]">
                  Years of Experience
                </label>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    ["0-1", "0–1"],
                    ["1-3", "1–3"],
                    ["3-5", "3–5"],
                    ["5+", "5+"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          yearsOfExperience: value,
                        }))
                      }
                      className={`h-[42px] rounded-xl border text-[11px] font-semibold transition ${
                        formData.yearsOfExperience === value
                          ? "border-[#2563EB] bg-[#EEF4FF] text-[#2563EB]"
                          : "border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] hover:border-[#B9CAF0]"
                      }`}
                    >
                      {label} yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) =>
                    setAgreeTerms(e.target.checked)
                  }
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

              {/* Submit */}
              <button
                type="submit"
                disabled={Loading}
                className="h-[49px] w-full rounded-xl bg-[#2563EB] text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,.22)] transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {Loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating account...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Create My Account
                    <Arrow />
                  </span>
                )}
              </button>
            </form>

            {/* Security */}
            <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-[#94A3B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              Your data is encrypted and secure
            </div>
          </div>

          {/* Login */}
          <p className="mt-5 text-center text-[11px] text-[#64748B]">
            Already have an account?
            <a
              href="/login"
              className="ml-1 font-semibold text-[#2563EB] hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      }
    </main>
  );
}

/* ============================================================
   INPUT
============================================================ */

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.5px] text-[#64748B]">
        {label}
      </label>

      <div className="group relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#2563EB]">
          {icon}
        </span>

        <input
          required
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-[46px] w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-10 pr-3 text-[12px] text-[#0F172A] outline-none transition placeholder:text-[#A5B1C2] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
        />
      </div>
    </div>
  );
}

/* ============================================================
   PASSWORD INPUT
============================================================ */

function PasswordInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  show,
  setShow,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.5px] text-[#64748B]">
        {label}
      </label>

      <div className="group relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#2563EB]">
          <LockIcon />
        </span>

        <input
          required
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-[46px] w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-10 pr-10 text-[12px] text-[#0F172A] outline-none transition placeholder:text-[#A5B1C2] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#2563EB]"
        >
          {show ? <EyeOff /> : <Eye />}
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   ICONS
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

function Chevron() {
  return (
    <svg
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

function Arrow() {
  return (
    <svg
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