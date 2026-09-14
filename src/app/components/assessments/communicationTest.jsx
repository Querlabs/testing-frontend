"use client";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Code2,
  Mic,
  Presentation,
  Users,
} from "lucide-react";

const speakingTests = [
  {
    id: 1,
    title: "Microsoft HR Round",
    badge: "HR",
    description:
      "Practice common HR questions with realistic AI follow-up questions.",
    duration: "15–20 min",
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: "Google Behavioral Round",
    badge: "Behavioral",
    description:
      "Practice structured behavioral answers in a realistic interview conversation.",
    duration: "15–20 min",
    icon: Users,
  },
  {
    id: 3,
    title: "Amazon Leadership Principles",
    badge: "Leadership",
    description:
      "Practice leadership-focused interview questions with adaptive follow-ups.",
    duration: "15–20 min",
    icon: Presentation,
  },
  {
    id: 4,
    title: "Technical Explanation Test",
    badge: "Technical",
    description:
      "Practice explaining technical concepts clearly and confidently to an interviewer.",
    duration: "10–15 min",
    icon: Code2,
  },
  {
    id: 5,
    title: "Tell Me About Yourself",
    badge: "Introduction",
    description:
      "Practice your interview introduction and explain your experience effectively.",
    duration: "5–10 min",
    icon: Mic,
  },
  {
    id: 6,
    title: "Project Discussion",
    badge: "Technical + Behavioral",
    description:
      "Practice explaining your projects, decisions, challenges, and contributions.",
    duration: "10–15 min",
    icon: Presentation,
  },
];

function SpeakingTestCard({ test, onStart }) {
  const Icon = test.icon;

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:border-blue-200 hover:shadow-md">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={19} strokeWidth={2} />
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
          {test.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 flex-1">
        <h3 className="text-[16px] font-semibold text-slate-900">
          {test.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {test.description}
        </p>
      </div>

      {/* Details */}
      <div className="mt-5 flex items-center gap-4 text-xs font-medium text-slate-500">
        <span className="flex items-center gap-1.5">
          <Clock3 size={14} />
          {test.duration}
        </span>

        <span className="flex items-center gap-1.5">
          <Mic size={14} />
          Voice Interview
        </span>
      </div>

      {/* CTA */}
      <button
        onClick={() => onStart?.(test)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Start Test
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
        <Mic size={20} />
      </div>

      <h3 className="mt-4 text-base font-semibold text-slate-900">
        More speaking tests coming soon.
      </h3>
    </div>
  );
}

export default function CommunicationCoach({
  tests = speakingTests,
  onStartTest,
}) {
  const [availableTests] = useState(tests);

  return (
    <main className="min-h-full">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        {/* <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Communication Coach
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
            Practice real interview conversations and improve how you
            communicate under pressure.
          </p>
        </div> */}

        {/* Speaking Tests */}
        <section>
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Speaking Tests
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose an interview scenario and practice with an AI interviewer.
            </p>
          </div>

          {availableTests.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {availableTests.map((test) => (
                <SpeakingTestCard
                  key={test.id}
                  test={test}
                  onStart={onStartTest}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </section>
      </div>
    </main>
  );
}