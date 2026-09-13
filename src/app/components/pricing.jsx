"use client";

import { useState } from "react";

const plans = [
  {
    name: "Free",
    eyebrow: "GET STARTED",
    description: "Experience InterviewProof before you commit.",
    price: "₹0",
    period: "forever",
    features: [
      "Communication Test",
      "Basic score",
      "Limited practice",
    ],
    button: "Start Free",
  },
  {
    name: "Assessment",
    eyebrow: "MOST POPULAR",
    description: "Know exactly where you stand in a real interview.",
    price: "₹499",
    range: "– ₹999",
    period: "per assessment",
    features: [
      "Full interview simulation",
      "Coding + AI technical interview",
      "Detailed diagnosis",
      "Readiness score",
    ],
    button: "Start Assessment",
    popular: true,
  },
  {
    name: "Pro / Retest",
    eyebrow: "IMPROVE",
    description: "Keep practicing until you're actually ready.",
    price: "₹999",
    range: "– ₹1,499",
    period: "per package",
    features: [
      "Full simulation",
      "Personalized improvement",
      "Multiple retests",
      "Progress tracking",
    ],
    button: "Choose Pro",
  },
];

export default function PricingSection() {
  const [active, setActive] = useState(1);

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

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            Simple Pricing
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-6xl">
            Start free.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Get interview ready.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Start with a free communication test, then choose the level of
            preparation you need.
          </p>
        </div>

        {/* Pricing */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const isActive = active === index;

            return (
              <div
                key={plan.name}
                onMouseEnter={() => setActive(index)}
                className={`group relative flex flex-col rounded-3xl border p-7 transition-all duration-500 ${
                  plan.popular
                    ? "border-blue-500 bg-[#0F172A] shadow-[0_30px_80px_rgba(37,99,235,0.18)] lg:-translate-y-4"
                    : isActive
                      ? "border-blue-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:-translate-y-2"
                      : "border-slate-200 bg-white"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-500/25">
                    Most Popular
                  </div>
                )}

                {/* Glow */}
                {plan.popular && (
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:bg-blue-500/20" />
                )}

                <div className="relative">
                  <p
                    className={`text-[10px] font-bold tracking-[0.2em] ${
                      plan.popular ? "text-blue-400" : "text-slate-400"
                    }`}
                  >
                    {plan.eyebrow}
                  </p>

                  <h3
                    className={`mt-3 text-2xl font-bold ${
                      plan.popular ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-2 min-h-[48px] text-sm leading-6 ${
                      plan.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="relative mt-8">
                  <div className="flex items-baseline">
                    <span
                      className={`text-5xl font-bold tracking-tight ${
                        plan.popular ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {plan.price}
                    </span>

                    {plan.range && (
                      <span
                        className={`text-2xl font-bold ${
                          plan.popular ? "text-white" : "text-[#0F172A]"
                        }`}
                      >
                        {plan.range}
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-1 text-xs ${
                      plan.popular ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {plan.period}
                  </p>
                </div>

                {/* Features */}
                <div className="relative my-8 flex-1 border-t pt-7 border-slate-200/80">
                  <p
                    className={`mb-5 text-xs font-semibold uppercase tracking-wider ${
                      plan.popular ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    What's included
                  </p>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                            plan.popular
                              ? "bg-blue-500/15 text-blue-400"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          ✓
                        </span>

                        <span
                          className={`text-sm ${
                            plan.popular
                              ? "text-slate-300"
                              : "text-slate-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  className={`group/btn relative overflow-hidden rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-[#0F172A] hover:bg-blue-50"
                      : "bg-[#0F172A] text-white hover:bg-blue-600"
                  }`}
                >
                  <span className="relative z-10">
                    {plan.button}
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-blue-500/10 transition-transform duration-500 group-hover/btn:translate-x-0" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            Start with ₹0
          </span>

          <span className="hidden h-3 w-px bg-slate-300 sm:block" />

          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            No long-term commitment
          </span>

          <span className="hidden h-3 w-px bg-slate-300 sm:block" />

          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            Pay when you're ready
          </span>
        </div>
      </div>
    </section>
  );
}