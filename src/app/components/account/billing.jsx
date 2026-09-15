"use client";

import { useState } from "react";

/* =========================================================
   ICONS
========================================================= */

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </svg>
  );
}

/* =========================================================
   REUSABLE SECTION CARD
========================================================= */

function SectionCard({ title, subtitle, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <h2 className="text-[15px] font-bold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-[12px] leading-5 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      <div className="px-5 py-5 sm:px-6">{children}</div>
    </section>
  );
}

/* =========================================================
   1. CURRENT PLAN
========================================================= */

function CurrentPlan({ onChangePlan, onCancel }) {
  const benefits = [
    "Full Interview Simulations",
    "AI Technical Interviews",
    "Communication Coach",
    "Detailed Assessment Reports",
    "Personalized Improvement Plan",
    "Retests",
  ];

  return (
    <section className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-[0_8px_30px_rgba(37,99,235,0.07)]">
      <div className="border-b border-blue-100 bg-blue-50/60 px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-blue-600">
              Current Plan
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-slate-900">
              Pro
            </h2>
          </div>

          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-[28px] font-bold tracking-[-0.03em] text-slate-900">
              ₹999
              <span className="ml-1 text-[13px] font-medium tracking-normal text-slate-400">
                / month
              </span>
            </p>

            <p className="mt-1.5 text-[12px] text-slate-500">
              Renews on{" "}
              <span className="font-semibold text-slate-700">
                October 15, 2026
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-[12px] text-slate-600"
              >
                <span className="text-blue-600">
                  <CheckIcon />
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5 sm:flex-row">
          <button
            type="button"
            onClick={onChangePlan}
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-[12px] font-semibold text-white shadow-[0_5px_14px_rgba(37,99,235,0.18)] transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            Change Plan
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
          >
            Cancel Subscription
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   2. PLAN CARDS
========================================================= */

function PlanCards({ onPlanAction }) {
  const plans = [
    {
      name: "FREE",
      price: "₹0",
      description: "Get started with the basics.",
      features: [
        "Basic Communication Test",
        "Limited Practice",
        "Basic Score",
      ],
      button: "Get Started",
    },
    {
      name: "ASSESSMENT",
      price: "₹499",
      suffix: "/ assessment",
      description: "One complete interview assessment.",
      features: [
        "Full Interview Assessment",
        "AI Technical Interview",
        "Detailed Scorecard",
        "Weakness Diagnosis",
        "Readiness Verdict",
      ],
      button: "Buy Assessment",
    },
    {
      name: "PRO",
      price: "₹999",
      suffix: "/ month",
      description: "Complete preparation experience.",
      features: [
        "Unlimited Practice",
        "Full Interview Simulations",
        "Communication Coach",
        "Detailed Reports",
        "Personalized Improvement",
        "Retests",
      ],
      button: "Current Plan",
      recommended: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative flex flex-col rounded-2xl border bg-white p-5 transition ${
            plan.recommended
              ? "border-blue-500 shadow-[0_8px_25px_rgba(37,99,235,0.10)]"
              : "border-slate-200 shadow-[0_4px_16px_rgba(15,23,42,0.03)]"
          }`}
        >
          {plan.recommended && (
            <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Recommended
            </div>
          )}

          <p
            className={`text-[11px] font-bold tracking-[0.08em] ${
              plan.recommended
                ? "text-blue-600"
                : "text-slate-400"
            }`}
          >
            {plan.name}
          </p>

          <div className="mt-3">
            <span className="text-[25px] font-bold tracking-[-0.03em] text-slate-900">
              {plan.price}
            </span>

            {plan.suffix && (
              <span className="ml-1 text-[11px] text-slate-400">
                {plan.suffix}
              </span>
            )}
          </div>

          <p className="mt-1.5 min-h-[36px] text-[12px] leading-5 text-slate-500">
            {plan.description}
          </p>

          <div className="my-5 h-px bg-slate-100" />

          <div className="flex-1 space-y-2.5">
            {plan.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 text-[12px] leading-5 text-slate-600"
              >
                <span className="mt-0.5 shrink-0 text-blue-600">
                  <CheckIcon />
                </span>

                {feature}
              </div>
            ))}
          </div>

          <button
            type="button"
            disabled={plan.recommended}
            onClick={() => onPlanAction(plan.name)}
            className={`mt-6 w-full rounded-lg px-4 py-2.5 text-[12px] font-semibold transition ${
              plan.recommended
                ? "cursor-default bg-blue-50 text-blue-700"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {plan.button}
          </button>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   3. USAGE
========================================================= */

function UsageSection() {
  const usage = [
    {
      name: "Interview Assessments",
      value: "4 / 10",
      percent: 40,
    },
    {
      name: "Communication Tests",
      value: "8 / 20",
      percent: 40,
    },
    {
      name: "AI Interview Minutes",
      value: "126 / 300 min",
      percent: 42,
    },
  ];

  return (
    <SectionCard title="Usage">
      <div className="space-y-5">
        {usage.map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-[12px] font-medium text-slate-600">
                {item.name}
              </p>

              <p className="text-[12px] font-semibold text-slate-800">
                {item.value}
              </p>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[11px] text-slate-400">
        Usage resets on October 15, 2026
      </p>
    </SectionCard>
  );
}

/* =========================================================
   4. PAYMENT METHOD
========================================================= */

function PaymentMethod() {
  return (
    <SectionCard title="Payment Method">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600">
            <CreditCardIcon />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-semibold text-slate-800">
                Visa
              </p>

              <span className="text-[12px] font-medium text-slate-500">
                •••• 4242
              </span>
            </div>

            <p className="mt-1 text-[11px] text-slate-400">
              Expires 12/28
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => alert("Mock: payment method update.")}
            className="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            Update Payment Method
          </button>

          <button
            type="button"
            onClick={() => alert("Mock: add payment method.")}
            className="rounded-lg bg-blue-600 px-3.5 py-2.5 text-[12px] font-semibold text-white transition hover:bg-blue-700"
          >
            Add Payment Method
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

/* =========================================================
   5. INVOICE ITEM
========================================================= */

function InvoiceItem({
  date,
  description,
  amount,
  status,
}) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden grid-cols-[1fr_1.4fr_0.7fr_0.7fr_1fr] items-center gap-4 px-5 py-4 text-[12px] md:grid">
        <span className="text-slate-500">{date}</span>

        <span className="font-medium text-slate-700">
          {description}
        </span>

        <span className="font-semibold text-slate-800">
          {amount}
        </span>

        <span>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            {status}
          </span>
        </span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => alert("Mock invoice preview.")}
            className="text-[11px] font-semibold text-blue-600 hover:text-blue-700"
          >
            View Invoice
          </button>

          <button
            type="button"
            onClick={() => alert("Mock invoice download.")}
            className="text-slate-400 hover:text-blue-600"
            aria-label="Download invoice"
          >
            <DownloadIcon />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 last:border-b-0 md:hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[12px] font-semibold text-slate-800">
              {description}
            </p>

            <p className="mt-1 text-[11px] text-slate-400">
              {date}
            </p>
          </div>

          <p className="text-[13px] font-bold text-slate-800">
            {amount}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            {status}
          </span>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => alert("Mock invoice preview.")}
              className="text-[11px] font-semibold text-blue-600"
            >
              View
            </button>

            <button
              type="button"
              onClick={() => alert("Mock invoice download.")}
              className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500"
            >
              <DownloadIcon />
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   6. BILLING HISTORY
========================================================= */

function BillingHistory() {
  const invoices = [
    {
      date: "Sep 15, 2026",
      description: "Pro Monthly",
      amount: "₹999",
      status: "Paid",
    },
    {
      date: "Aug 15, 2026",
      description: "Pro Monthly",
      amount: "₹999",
      status: "Paid",
    },
    {
      date: "Jul 15, 2026",
      description: "Assessment",
      amount: "₹499",
      status: "Paid",
    },
  ];

  return (
    <SectionCard title="Billing History">
      <div className="overflow-hidden rounded-xl border border-slate-200">
        {/* Desktop Header */}
        <div className="hidden grid-cols-[1fr_1.4fr_0.7fr_0.7fr_1fr] gap-4 border-b border-slate-100 bg-slate-50 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.06em] text-slate-400 md:grid">
          <span>Date</span>
          <span>Description</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Invoice</span>
        </div>

        {invoices.map((invoice) => (
          <InvoiceItem
            key={`${invoice.date}-${invoice.description}`}
            {...invoice}
          />
        ))}
      </div>
    </SectionCard>
  );
}

/* =========================================================
   7. CANCEL SUBSCRIPTION MODAL
========================================================= */

function CancelSubscriptionModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-[2px]">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <SparkleIcon />
            </div>

            <h3 className="text-[17px] font-bold text-slate-900">
              Cancel your subscription?
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <CloseIcon />
          </button>
        </div>

        <p className="mt-3 text-[13px] leading-6 text-slate-500">
          You'll continue to have access to Pro features until the end
          of your current billing period.
        </p>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Keep Subscription
          </button>

          <button
            type="button"
            onClick={() => {
              alert("Mock action: subscription cancellation requested.");
              onClose();
            }}
            className="rounded-lg bg-red-600 px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-red-700"
          >
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function BillingSubscription() {
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleChangePlan = () => {
    document
      .getElementById("billing-plans")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlanAction = (plan) => {
    alert(`Mock action: ${plan} selected.`);
  };

  return (
    <>
      <main className="min-h-full w-full bg-[#f8fafc] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-[22px] font-bold tracking-[-0.025em] text-slate-900 sm:text-[24px]">
              Billing & Subscription
            </h1>

            <p className="mt-1.5 text-[13px] leading-6 text-slate-500 sm:text-[14px]">
              Manage your plan, payments, usage, and billing history.
            </p>
          </div>

          <div className="space-y-4">
            {/* Current Plan */}
            <CurrentPlan
              onChangePlan={handleChangePlan}
              onCancel={() => setShowCancelModal(true)}
            />

            {/* Plans */}
            <div id="billing-plans">
              <div className="mb-3 px-0.5">
                <h2 className="text-[15px] font-bold text-slate-900">
                  Plans
                </h2>

                <p className="mt-1 text-[12px] text-slate-500">
                  Choose the level of preparation that fits your needs.
                </p>
              </div>

              <PlanCards onPlanAction={handlePlanAction} />
            </div>

            {/* Usage */}
            <UsageSection />

            {/* Payment */}
            <PaymentMethod />

            {/* Billing */}
            <BillingHistory />
          </div>
        </div>
      </main>

      {/* Cancel Modal */}
      {showCancelModal && (
        <CancelSubscriptionModal
          onClose={() => setShowCancelModal(false)}
        />
      )}
    </>
  );
}