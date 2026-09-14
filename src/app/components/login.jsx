"use client";

import { Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9fc] relative overflow-hidden flex items-center justify-center px-4">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(#e7ebf2 1px, transparent 1px),
            linear-gradient(90deg, #e7ebf2 1px, transparent 1px)
          `,
          backgroundSize: "74px 74px",
        }}
      />

      {/* Background Glow */}
      <div className="absolute left-[-180px] top-[180px] w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-[-180px] bottom-[-100px] w-[400px] h-[400px] rounded-full bg-indigo-100/40 blur-3xl" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[480px] bg-white rounded-[28px] border border-[#eef1f6] shadow-[0_20px_60px_rgba(31,41,55,0.10)] px-8 py-9">

        {/* Logo */}
        <div className="flex justify-center mb-7">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-[3px] h-7">
              <span className="w-[6px] h-3 rounded-full bg-blue-600" />
              <span className="w-[6px] h-5 rounded-full bg-blue-600" />
              <span className="w-[6px] h-7 rounded-full bg-blue-600" />
            </div>

            <span className="text-[24px] font-extrabold tracking-tight text-[#111827]">
              Interview<span className="text-blue-600">Proof</span>
            </span>
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-[15px] bg-blue-50 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-[30px] font-extrabold tracking-tight text-[#111827]">
            Welcome back
          </h1>

          <p className="mt-2 text-[15px] text-[#71809a]">
            Continue preparing for your next interview.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-2 text-[13px] font-bold tracking-wide text-[#63748f]">
              EMAIL
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#9aabc3]" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-[56px] rounded-[14px] border border-[#dce4ef] bg-[#f8fafc] pl-12 pr-4 text-[15px] outline-none transition-all placeholder:text-[#a5b3c7] focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[13px] font-bold tracking-wide text-[#63748f]">
                PASSWORD
              </label>

              <button
                type="button"
                className="text-[13px] font-semibold text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#9aabc3]" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-[56px] rounded-[14px] border border-[#dce4ef] bg-[#f8fafc] pl-12 pr-12 text-[15px] outline-none transition-all placeholder:text-[#a5b3c7] focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9aabc3] hover:text-[#60718c]"
              >
                {showPassword ? (
                  <EyeOff className="w-[18px] h-[18px]" />
                ) : (
                  <Eye className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>
          </div>

          {/* Button */}
          <Link
            href="/user-dashboard"
            className="flex h-[56px] w-full items-center justify-center rounded-[14px] bg-blue-600 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.20)] transition-all hover:bg-blue-700"
          >
            Sign In
          </Link>

        </form>

        {/* Register */}
        <p className="text-center mt-6 text-[14px] text-[#71809a]">
          Don't have an account?{" "}
          <button className="font-bold text-blue-600 hover:text-blue-700">
            Create account
          </button>
        </p>

      </div>
    </div>
  );
}