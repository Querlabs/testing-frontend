"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  Clock3,
  Flag,
  Grid2X2,
  Send,
  X,
} from "lucide-react";

/* =========================================================
   MOCK QUESTIONS
========================================================= */

const technicalQuestions = [
  {
    id: 1,
    category: "JavaScript",
    difficulty: "Easy",
    question:
      "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    options: ["const", "let", "var", "static"],
    correctAnswer: 1,
  },
  {
    id: 2,
    category: "Data Structures",
    difficulty: "Easy",
    question:
      "Which data structure follows the Last In, First Out principle?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    correctAnswer: 1,
  },
  {
    id: 3,
    category: "Algorithms",
    difficulty: "Medium",
    question:
      "What is the average time complexity of searching for an element in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 0,
  },
  {
    id: 4,
    category: "SQL",
    difficulty: "Medium",
    question:
      "Which SQL clause is used to filter groups after aggregation?",
    options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"],
    correctAnswer: 2,
  },
  {
    id: 5,
    category: "React",
    difficulty: "Easy",
    question:
      "Which React hook is primarily used to manage local component state?",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    correctAnswer: 1,
  },
  {
    id: 6,
    category: "Databases",
    difficulty: "Medium",
    question:
      "Which ACID property guarantees that a transaction happens completely or not at all?",
    options: [
      "Consistency",
      "Atomicity",
      "Isolation",
      "Durability",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    category: "CS Fundamentals",
    difficulty: "Medium",
    question:
      "Which of the following best describes normalization in a relational database?",
    codeSnippet: `SELECT department, COUNT(*)
FROM employees
GROUP BY department;`,
    options: [
      "Increasing database redundancy",
      "Reducing redundancy and dependency",
      "Encrypting database records",
      "Increasing query execution time",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    category: "Algorithms",
    difficulty: "Easy",
    question:
      "Which traversal visits nodes level by level in a tree?",
    options: ["DFS", "BFS", "Backtracking", "Recursion"],
    correctAnswer: 1,
  },
  {
    id: 9,
    category: "Web Development",
    difficulty: "Easy",
    question:
      "Which HTTP method is commonly used to partially update an existing resource?",
    options: ["GET", "POST", "PUT", "PATCH"],
    correctAnswer: 3,
  },
  {
    id: 10,
    category: "System Design",
    difficulty: "Medium",
    question:
      "What is the primary purpose of a load balancer?",
    options: [
      "Store database records",
      "Distribute traffic across servers",
      "Compile source code",
      "Encrypt passwords",
    ],
    correctAnswer: 1,
  },
  {
    id: 11,
    category: "Operating Systems",
    difficulty: "Medium",
    question:
      "Which memory area is generally used for dynamically allocated objects?",
    options: ["Stack", "Heap", "Register", "Cache"],
    correctAnswer: 1,
  },
  {
    id: 12,
    category: "Git",
    difficulty: "Easy",
    question:
      "Which command creates a new Git branch?",
    options: [
      "git merge",
      "git branch",
      "git stash",
      "git reset",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    category: "Networking",
    difficulty: "Medium",
    question:
      "Which device routes packets between different networks?",
    options: ["Switch", "Router", "Hub", "Repeater"],
    correctAnswer: 1,
  },
  {
    id: 14,
    category: "OOP",
    difficulty: "Easy",
    question:
      "Which OOP principle hides internal implementation details?",
    options: [
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Recursion",
    ],
    correctAnswer: 2,
  },
  {
    id: 15,
    category: "Databases",
    difficulty: "Medium",
    question:
      "Which ACID property ensures committed data survives a system failure?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability",
    ],
    correctAnswer: 3,
  },
  {
    id: 16,
    category: "Algorithms",
    difficulty: "Medium",
    question:
      "Which sorting algorithm has an average time complexity of O(n log n)?",
    options: [
      "Bubble Sort",
      "Selection Sort",
      "Merge Sort",
      "Linear Search",
    ],
    correctAnswer: 2,
  },
  {
    id: 17,
    category: "SQL",
    difficulty: "Easy",
    question:
      "Which SQL keyword removes duplicate rows from query results?",
    options: ["UNIQUE", "DISTINCT", "FILTER", "DEDUP"],
    correctAnswer: 1,
  },
  {
    id: 18,
    category: "JavaScript",
    difficulty: "Easy",
    question:
      "Which method creates a new array containing elements that pass a test?",
    options: ["map()", "filter()", "reduce()", "find()"],
    correctAnswer: 1,
  },
  {
    id: 19,
    category: "System Design",
    difficulty: "Medium",
    question:
      "Which component is commonly used to temporarily store frequently accessed data?",
    options: ["Cache", "Compiler", "Router", "Queue"],
    correctAnswer: 0,
  },
  {
    id: 20,
    category: "Web Development",
    difficulty: "Easy",
    question:
      "Which HTTP status code generally indicates a successful request?",
    options: ["200", "301", "404", "500"],
    correctAnswer: 0,
  },
  {
    id: 21,
    category: "Security",
    difficulty: "Medium",
    question:
      "Which practice helps prevent SQL injection attacks?",
    options: [
      "String concatenation",
      "Parameterized queries",
      "Disabling indexes",
      "Using larger databases",
    ],
    correctAnswer: 1,
  },
  {
    id: 22,
    category: "Node.js",
    difficulty: "Medium",
    question:
      "Which object is commonly used to access environment variables in Node.js?",
    options: ["process.env", "global.env", "node.env", "system.env"],
    correctAnswer: 0,
  },
  {
    id: 23,
    category: "APIs",
    difficulty: "Easy",
    question:
      "What does REST primarily describe?",
    options: [
      "A database engine",
      "An architectural style for networked applications",
      "A programming language",
      "A testing framework",
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    category: "Cloud",
    difficulty: "Medium",
    question:
      "What is horizontal scaling?",
    options: [
      "Adding more resources to one machine",
      "Adding more machines to handle load",
      "Reducing memory usage",
      "Compressing data",
    ],
    correctAnswer: 1,
  },
  {
    id: 25,
    category: "CS Fundamentals",
    difficulty: "Easy",
    question:
      "Which data structure is commonly used to implement a priority queue?",
    options: ["Stack", "Linked List", "Heap", "Array"],
    correctAnswer: 2,
  },
];

const aptitudeQuestions = [
  {
    id: 1,
    category: "Quantitative Ability",
    difficulty: "Easy",
    question:
      "A company has 240 employees. If 35% work remotely, how many employees work remotely?",
    options: ["72", "84", "96", "108"],
    correctAnswer: 1,
  },
  {
    id: 2,
    category: "Percentages",
    difficulty: "Easy",
    question:
      "A product costs ₹800 and is sold at a 15% discount. What is the selling price?",
    options: ["₹640", "₹680", "₹720", "₹760"],
    correctAnswer: 1,
  },
  {
    id: 3,
    category: "Ratio",
    difficulty: "Easy",
    question:
      "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
    options: ["15", "20", "25", "30"],
    correctAnswer: 1,
  },
  {
    id: 4,
    category: "Averages",
    difficulty: "Easy",
    question:
      "What is the average of 12, 18, 20 and 30?",
    options: ["18", "19", "20", "21"],
    correctAnswer: 2,
  },
  {
    id: 5,
    category: "Time & Work",
    difficulty: "Easy",
    question:
      "A can complete a task in 12 days. What fraction of the task does A complete in one day?",
    options: ["1/6", "1/10", "1/12", "1/24"],
    correctAnswer: 2,
  },
  {
    id: 6,
    category: "Profit & Loss",
    difficulty: "Easy",
    question:
      "An item costs ₹500 and is sold for ₹575. What is the profit percentage?",
    options: ["10%", "12%", "15%", "18%"],
    correctAnswer: 2,
  },
  {
    id: 7,
    category: "Number Series",
    difficulty: "Medium",
    question:
      "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    correctAnswer: 2,
  },
  {
    id: 8,
    category: "Simple Interest",
    difficulty: "Easy",
    question:
      "₹10,000 earns simple interest at 8% per year for 2 years. What is the interest?",
    options: ["₹800", "₹1,200", "₹1,600", "₹2,000"],
    correctAnswer: 2,
  },
  {
    id: 9,
    category: "Probability",
    difficulty: "Easy",
    question:
      "A bag contains 5 red and 5 blue balls. What is the probability of drawing a red ball?",
    options: ["1/4", "1/3", "1/2", "2/3"],
    correctAnswer: 2,
  },
  {
    id: 10,
    category: "Algebra",
    difficulty: "Easy",
    question:
      "If x + 7 = 19, what is the value of x?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
  },
  ...Array.from({ length: 15 }, (_, index) => ({
    id: index + 11,
    category: "Quantitative Ability",
    difficulty: index % 3 === 0 ? "Easy" : "Medium",
    question: `Practice aptitude question ${index + 11}. Choose the most appropriate answer.`,
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    correctAnswer: index % 4,
  })),
];

/* =========================================================
   HEADER
========================================================= */

function AssessmentHeader({
  mode,
  current,
  total,
  seconds,
  onExit,
}) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;

  const isTechnical = mode === "technical";

  return (
    <header className="relative z-20 flex h-[72px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-7">
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={onExit}
          className="group flex h-9 items-center gap-2 rounded-lg px-2 text-[11px] font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />

          <span className="hidden sm:inline">
            Exit Assessment
          </span>
        </button>

        <div className="hidden h-7 w-px bg-slate-200 sm:block" />

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-sm font-bold text-slate-900 md:text-[15px]">
              {isTechnical
                ? "Technical Assessment"
                : "Aptitude Assessment"}
            </h1>

            <span className="hidden rounded-full bg-blue-50 px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-blue-600 sm:block">
              {isTechnical
                ? "CS Fundamentals"
                : "Quantitative Ability"}
            </span>
          </div>

          <p className="text-[9px] text-slate-400">
            AI Interview Readiness · Assessment
          </p>
        </div>
      </div>

      <div className="absolute left-1/2 hidden -translate-x-1/2 text-center md:block">
        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Question
        </p>

        <p className="mt-0.5 text-sm font-bold text-slate-900">
          {String(current).padStart(2, "0")}
          <span className="mx-1 text-slate-300">
            /
          </span>
          {total}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          <span className="text-[9px] font-bold text-emerald-700">
            Auto-saved
          </span>
        </div>

        <div className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
          <Clock3 className="h-3.5 w-3.5 text-blue-600" />

          <span className="text-xs font-bold tabular-nums text-slate-800">
            {String(minutes).padStart(2, "0")}:
            {String(remaining).padStart(2, "0")}
          </span>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   QUESTION PALETTE
========================================================= */

function QuestionPalette({
  total,
  currentIndex,
  answers,
  marked,
  onNavigate,
}) {
  const answeredCount =
    Object.keys(answers).length;

  const markedCount =
    Object.values(marked).filter(Boolean).length;

  return (
    <aside className="hidden w-[350px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] lg:flex">
      {/* PALETTE HEADER */}
      <div className="flex h-[102px] shrink-0 items-center justify-between border-b border-slate-100 px-6">
        <div>
          <h2 className="text-[17px] font-bold tracking-tight text-slate-900">
            Question Palette
          </h2>

          <p className="mt-1 text-[10px] text-slate-400">
            Navigate between questions
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Grid2X2 className="h-4 w-4" />
        </div>
      </div>

      {/* QUESTION NUMBERS */}
      <div className="min-h-0 flex-1 px-5 py-5">
        <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Questions
        </p>

        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: total }).map(
            (_, index) => {
              const isCurrent =
                currentIndex === index;

              const isAnswered =
                answers[index] !== undefined;

              const isMarked =
                Boolean(marked[index]);

              return (
                <button
                  key={index}
                  onClick={() =>
                    onNavigate(index)
                  }
                  className={`relative h-11 rounded-xl border text-[10px] font-bold transition-all ${
                    isCurrent
                      ? "border-blue-600 bg-blue-50 text-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.10)]"
                      : isAnswered
                      ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
                      : "border-slate-200 bg-slate-50 text-slate-500 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}

                  {isMarked && (
                    <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 ring-2 ring-white" />
                  )}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* STATS */}
      <div className="shrink-0 border-t border-slate-100 p-5">
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-medium text-slate-500">
              Attempted
            </span>

            <span className="text-[10px] font-bold text-blue-600">
              {answeredCount}/{total}
            </span>
          </div>

          <div className="h-1.5 rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{
                width: `${
                  (answeredCount / total) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] text-slate-500">
            Marked for review
          </span>

          <span className="text-[10px] font-bold text-amber-600">
            {markedCount}
          </span>
        </div>
      </div>
    </aside>
  );
}

/* =========================================================
   MOBILE PALETTE
========================================================= */

function MobileQuestionPalette({
  total,
  currentIndex,
  answers,
  marked,
  onNavigate,
}) {
  return (
    <div className="shrink-0 border-b border-slate-200 bg-white px-3 py-2.5 lg:hidden">
      <div className="flex gap-1.5 overflow-x-auto">
        {Array.from({ length: total }).map(
          (_, index) => {
            const isCurrent =
              currentIndex === index;

            const isAnswered =
              answers[index] !== undefined;

            return (
              <button
                key={index}
                onClick={() =>
                  onNavigate(index)
                }
                className={`relative flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-bold ${
                  isCurrent
                    ? "border-2 border-blue-600 bg-blue-50 text-blue-600"
                    : isAnswered
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {String(index + 1).padStart(
                  2,
                  "0"
                )}

                {marked[index] && (
                  <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-amber-500 ring-2 ring-white" />
                )}
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}

/* =========================================================
   CODE
========================================================= */

function CodeSnippet({ code }) {
  return (
    <div className= "rounded-xl border border-slate-200 bg-[#0f172a]">
      <div className="flex h-8 items-center justify-between border-b border-white/10 px-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-500" />
          <span className="h-2 w-2 rounded-full bg-slate-500" />
          <span className="h-2 w-2 rounded-full bg-slate-500" />
        </div>

        <span className="font-mono text-[8px] text-slate-500">
          code
        </span>
      </div>

      <pre className="px-4 py-3 font-mono text-[11px] leading-5 text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/* =========================================================
   ANSWER OPTION
========================================================= */

function AnswerOption({
  index,
  text,
  selected,
  onClick,
}) {
  const letter = String.fromCharCode(
    65 + index
  );

  return (
    <button
      onClick={onClick}
      className={`group flex min-h-[66px] w-full items-center gap-4 rounded-xl border px-4 text-left transition-all ${
        selected
          ? "border-blue-500 bg-blue-50 shadow-[0_5px_18px_rgba(37,99,235,0.07)]"
          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold transition ${
          selected
            ? "bg-blue-600 text-white"
            : "bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
        }`}
      >
        {letter}
      </span>

      <span
        className={`flex-1 text-xs leading-5 ${
          selected
            ? "font-semibold text-slate-900"
            : "font-medium text-slate-600"
        }`}
      >
        {text}
      </span>

      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          selected
            ? "border-blue-600 bg-blue-600"
            : "border-slate-300 bg-white"
        }`}
      >
        {selected && (
          <Check className="h-3 w-3 text-white" />
        )}
      </span>
    </button>
  );
}

/* =========================================================
   QUESTION AREA
========================================================= */

function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* META */}
      <div className="flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-[10px] font-bold text-white shadow-[0_5px_15px_rgba(37,99,235,0.18)]">
            {String(question.id).padStart(
              2,
              "0"
            )}
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-600">
              Question {question.id}
            </p>

            <p className="mt-0.5 text-[9px] text-slate-400">
              Multiple Choice · 1 Point
            </p>
          </div>
        </div>

        <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[8px] font-bold text-amber-700">
          {question.difficulty}
        </span>
      </div>

      {/* CATEGORY */}
      <div className="mt-5 flex shrink-0 items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
          {question.category}
        </span>
      </div>

      {/* QUESTION */}
      <h2 className="mt-2 shrink-0 max-w-[900px] text-[21px] font-bold leading-[1.42] tracking-[-0.025em] text-slate-900 md:text-[26px]">
        {question.question}
      </h2>

      {/* CODE */}
      {question.codeSnippet && (
        <div className="mt-5 shrink-0">
          <CodeSnippet
            code={question.codeSnippet}
          />
        </div>
      )}

      {/* OPTIONS */}
      <div className="mt-5 min-h-0 flex-1">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {question.options.map(
            (option, index) => (
              <AnswerOption
                key={index}
                index={index}
                text={option}
                selected={
                  selectedAnswer === index
                }
                onClick={() =>
                  onSelect(index)
                }
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ACTIONS
========================================================= */

function QuestionActions({
  currentIndex,
  total,
  marked,
  onPrevious,
  onNext,
  onMark,
}) {
  const isLast =
    currentIndex === total - 1;

  return (
    <div className="flex h-[72px] shrink-0 items-center justify-between border-t border-slate-100 bg-white px-5 md:px-7">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-4 text-[10px] font-bold text-slate-600 transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </button>

      <button
        onClick={onMark}
        className={`flex h-10 items-center gap-2 rounded-xl px-4 text-[10px] font-bold transition ${
          marked
            ? "bg-amber-50 text-amber-700"
            : "text-slate-400 hover:bg-slate-50 hover:text-slate-700"
        }`}
      >
        <Flag
          className={`h-3.5 w-3.5 ${
            marked ? "fill-current" : ""
          }`}
        />

        <span className="hidden sm:inline">
          {marked
            ? "Marked for Review"
            : "Mark for Review"}
        </span>

        <span className="sm:hidden">
          Mark
        </span>
      </button>

      <button
        onClick={onNext}
        className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-[10px] font-bold text-white shadow-[0_7px_20px_rgba(37,99,235,0.20)] transition hover:bg-blue-700 active:scale-[0.98]"
      >
        {isLast
          ? "Submit Assessment"
          : "Save & Next"}

        {isLast ? (
          <Send className="h-3.5 w-3.5" />
        ) : (
          <ArrowRight className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}

/* =========================================================
   SUBMIT MODAL
========================================================= */

function SubmitModal({
  answered,
  total,
  onClose,
  onSubmit,
}) {
  const unanswered =
    total - answered;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/30 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[430px] rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.20)]">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Send className="h-4 w-4" />
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <h2 className="mt-5 text-lg font-bold text-slate-900">
            Submit assessment?
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            You have answered{" "}
            <strong className="text-slate-900">
              {answered}
            </strong>{" "}
            of{" "}
            <strong className="text-slate-900">
              {total}
            </strong>{" "}
            questions.
          </p>

          {unanswered > 0 && (
            <div className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-[10px] font-semibold text-amber-700">
              {unanswered} question
              {unanswered > 1 ? "s" : ""}{" "}
              {unanswered > 1
                ? "are"
                : "is"}{" "}
              still unanswered.
            </div>
          )}
        </div>

        <div className="flex gap-2 border-t border-slate-100 bg-slate-50/60 p-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-200 bg-white py-3 text-[10px] font-bold text-slate-700 hover:bg-slate-50"
          >
            Continue Assessment
          </button>

          <button
            onClick={onSubmit}
            className="flex-1 rounded-xl bg-blue-600 py-3 text-[10px] font-bold text-white hover:bg-blue-700"
          >
            Submit Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COMPLETE
========================================================= */

function AssessmentComplete({
  onResults,
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#f8fafc] p-5">
      <div className="w-full max-w-[430px] rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <Check className="h-7 w-7 text-emerald-600" />
        </div>

        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-600">
          Successfully submitted
        </p>

        <h1 className="mt-2 text-2xl font-bold text-slate-900">
          Assessment Submitted
        </h1>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Your answers have been securely saved
          and are now being evaluated.
        </p>

        <button
          onClick={onResults}
          className="mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-xs font-bold text-white hover:bg-blue-700"
        >
          View Results
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function MCQAssessment({
  mode = "technical",
}) {
  const questions =
    mode === "aptitude"
      ? aptitudeQuestions
      : technicalQuestions;

  const [currentIndex, setCurrentIndex] =
    useState(6);

  const [answers, setAnswers] =
    useState({});

  const [marked, setMarked] =
    useState({});

  const [seconds, setSeconds] =
    useState(12 * 60 + 48);

  const [showSubmit, setShowSubmit] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setSeconds((prev) =>
        prev > 0 ? prev - 1 : 0
      );
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [submitted]);

  const question =
    questions[currentIndex];

  const answeredCount = useMemo(
    () => Object.keys(answers).length,
    [answers]
  );

  const selectAnswer = (index) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: index,
    }));
  };

  const nextQuestion = () => {
    if (
      currentIndex ===
      questions.length - 1
    ) {
      setShowSubmit(true);
      return;
    }

    setCurrentIndex(
      (prev) => prev + 1
    );
  };

  const previousQuestion = () => {
    if (currentIndex === 0) return;

    setCurrentIndex(
      (prev) => prev - 1
    );
  };

  const toggleMark = () => {
    setMarked((prev) => ({
      ...prev,
      [currentIndex]:
        !prev[currentIndex],
    }));
  };

  const exitAssessment = () => {
    if (
      window.confirm(
        "Are you sure you want to exit this assessment?"
      )
    ) {
      alert("Assessment exited.");
    }
  };

  if (submitted) {
    return (
      <AssessmentComplete
        onResults={() =>
          alert(
            "Opening assessment results..."
          )
        }
      />
    );
  }

  return (
    <div className="flex h-screen w-full flex-col bg-[#f8fafc]">
      {/* HEADER */}
      <AssessmentHeader
        mode={mode}
        current={currentIndex + 1}
        total={questions.length}
        seconds={seconds}
        onExit={exitAssessment}
      />

      {/* MOBILE PALETTE */}
      <MobileQuestionPalette
        total={questions.length}
        currentIndex={currentIndex}
        answers={answers}
        marked={marked}
        onNavigate={setCurrentIndex}
      />

      {/* BODY */}
      <div className="min-h-0 flex-1 p-3 md:p-5">
        <div className="flex h-full min-h-0 gap-4">
          {/* LEFT PALETTE */}
          <QuestionPalette
            total={questions.length}
            currentIndex={currentIndex}
            answers={answers}
            marked={marked}
            onNavigate={setCurrentIndex}
          />

          {/* QUESTION PANEL */}
          <main className="min-w-0 flex-1 overflow">
            <div className="mx-auto flex h-full max-w-[1100px] flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.045)]">
              {/* QUESTION CONTENT */}
              <div className="min-h-0 flex-1 px-5 py-5 md:px-8 md:py-6">
                <QuestionCard
                  question={question}
                  selectedAnswer={
                    answers[currentIndex]
                  }
                  onSelect={selectAnswer}
                />
              </div>

              {/* ACTIONS */}
              <QuestionActions
                currentIndex={currentIndex}
                total={questions.length}
                marked={Boolean(
                  marked[currentIndex]
                )}
                onPrevious={
                  previousQuestion
                }
                onNext={nextQuestion}
                onMark={toggleMark}
              />
            </div>
          </main>
        </div>
      </div>

      {/* SUBMIT */}
      {showSubmit && (
        <SubmitModal
          answered={answeredCount}
          total={questions.length}
          onClose={() =>
            setShowSubmit(false)
          }
          onSubmit={() => {
            setShowSubmit(false);
            setSubmitted(true);
          }}
        />
      )}
    </div>
  );
}