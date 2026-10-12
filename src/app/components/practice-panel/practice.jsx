



// "use client";

// import { useCallback, useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { useTest } from "@/app/context/tests.context";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   ChevronLeft,
//   Clock3,
//   Flag,
//   Grid2X2,
//   Send,
//   X,
//   Code2,
//   ShieldCheck,
//   CircleHelp,
//   Trophy,
//   LoaderCircle,
//   RefreshCw,
// } from "lucide-react";

// /* =========================================================
//    SHARED STYLES
// ========================================================= */

// const buttonBase =
//   "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40";

// function formatTime(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remaining = seconds % 60;

//   return `${String(minutes).padStart(2, "0")}:${String(
//     remaining
//   ).padStart(2, "0")}`;
// }

// /* =========================================================
//    ASSESSMENT HEADER
// ========================================================= */

// function AssessmentHeader({
//   mode,
//   current,
//   total,
//   seconds,
//   onExit,
// }) {
//   const isLowTime = seconds <= 300;

//   return (
//     <header className="relative z-20 shrink-0 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
//       <div className="flex h-[68px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
//         <div className="flex min-w-0 items-center gap-3">
//           <button
//             type="button"
//             onClick={onExit}
//             aria-label="Exit assessment"
//             className="group flex h-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
//           >
//             <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
//             <span className="ml-2 hidden text-xs font-semibold sm:inline">
//               Exit
//             </span>
//           </button>

//           <div className="h-8 w-px shrink-0 bg-slate-200" />

//           <div className="flex min-w-0 items-center gap-3">
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
//               <Check className="h-4 w-4" />
//             </div>

//             <div className="min-w-0">
//               <h1 className="truncate text-xs font-extrabold tracking-tight text-slate-900 sm:text-sm">
//                 {mode === "aptitude"
//                   ? "Aptitude Assessment"
//                   : "Coding Assessment"}
//               </h1>

//               <p className="text-[10px] text-slate-500">
//                 Question {current} of {total}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="hidden items-center gap-3 md:flex">
//           <div className="text-right">
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
//               Progress
//             </p>
//             <p className="text-xs font-bold text-slate-800">
//               {Math.round((current / Math.max(total, 1)) * 100)}%
//             </p>
//           </div>

//           <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100">
//             <div
//               className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all"
//               style={{
//                 width: `${(current / Math.max(total, 1)) * 100}%`,
//               }}
//             />
//           </div>
//         </div>

//         <div
//           className={`flex h-10 shrink-0 items-center gap-2 rounded-xl border px-3 ${
//             isLowTime
//               ? "border-rose-200 bg-rose-50 text-rose-700"
//               : "border-blue-100 bg-blue-50 text-blue-700"
//           }`}
//         >
//           <Clock3
//             className={`h-4 w-4 ${isLowTime ? "animate-pulse" : ""}`}
//           />

//           <div>
//             <p className="hidden text-[8px] font-bold uppercase tracking-wider opacity-70 sm:block">
//               Time remaining
//             </p>

//             <p className="font-mono text-xs font-extrabold tabular-nums sm:text-sm">
//               {formatTime(seconds)}
//             </p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// /* =========================================================
//    QUESTION PALETTE
// ========================================================= */

// function QuestionPalette({
//   questions,
//   currentIndex,
//   answers,
//   marked,
//   onNavigate,
// }) {
//   const total = questions.length;
//   const answeredCount = Object.keys(answers).length;
//   const markedCount = Object.values(marked).filter(Boolean).length;
//   const unansweredCount = total - answeredCount;

//   return (
//     <aside className="hidden w-[290px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-[0_12px_45px_rgba(30,41,59,0.06)] ring-1 ring-slate-200/80 lg:flex xl:w-[310px]">
//       <div className="border-b border-slate-100 px-5 py-5">
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-3">
//             <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/20">
//               <Grid2X2 className="h-4 w-4" />
//             </span>

//             <div>
//               <h2 className="text-sm font-extrabold tracking-tight text-slate-900">
//                 Question palette
//               </h2>

//               <p className="mt-0.5 text-[10px] text-slate-500">
//                 Jump to any question
//               </p>
//             </div>
//           </div>

//           <span className="rounded-lg border border-slate-100 bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-500">
//             {total} Qs
//           </span>
//         </div>
//       </div>

//       <div className="min-h-0 flex-1 overflow-y-auto p-5">
//         <div className="mb-4 flex items-center justify-between">
//           <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
//             All questions
//           </p>

//           <p className="text-[10px] font-semibold text-slate-400">
//             Select to navigate
//           </p>
//         </div>

//         <div className="grid grid-cols-5 gap-2">
//           {questions.map((question, index) => {
//             const isCurrent = currentIndex === index;
//             const isAnswered =
//   answers[question.questionId] !== undefined;
//             const isMarked = Boolean(marked[index]);

//             let style =
//               "border-slate-200 bg-slate-50 text-slate-500 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700";

//             if (isAnswered) {
//               style =
//                 "border border-emerald-500 bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 text-white shadow-md shadow-emerald-500/30 hover:from-emerald-500 hover:via-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300";
//             }
//             if (isCurrent) {
//               style =
//                 "border border-blue-400 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-300/50 ring-offset-2 scale-[1.04] transition-all duration-300";
//             }

//             if (isMarked) {
//               style =
//                 "border border-amber-400 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 ring-2 ring-amber-300/50 ring-offset-2 transition-all duration-300 hover:shadow-xl hover:shadow-orange-400/40";
//             }

//             return (
//               <button
//                 key={question.questionId}
//                 type="button"
//                 onClick={() => onNavigate(index)}
//                 aria-label={`Go to question ${index + 1}`}
//                 aria-current={isCurrent ? "step" : undefined}
//                 className={`relative cursor-pointer flex h-10 items-center justify-center rounded-xl border text-[10px] font-extrabold transition-all hover:-translate-y-0.5 ${style}`}
//               >
//                 {String(index + 1).padStart(2, "0")}

//                 {isMarked && (
//                   <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-amber-400">
//                     <Flag className="h-2 w-2 fill-white text-white" />
//                   </span>
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         <div className="mt-6 space-y-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
//           <Legend
//             color="bg-gradient-to-br from-blue-600 to-indigo-600"
//             label="Current question"
//           />
//           <Legend color="bg-emerald-400" label="Answered" />
//           <Legend color="bg-amber-400" label="Marked for review" />
//           <Legend color="bg-slate-300" label="Not answered" />
//         </div>
//       </div>

//       <div className="shrink-0 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/70 p-5">
//         <div className="mb-4 flex items-center justify-between">
//           <div>
//             <p className="text-[10px] font-semibold text-slate-500">
//               Completion
//             </p>

//             <p className="mt-1 text-xl font-extrabold tracking-tight text-slate-900">
//               {Math.round((answeredCount / total) * 100)}%
//             </p>
//           </div>

//           <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
//             <Trophy className="h-5 w-5" />
//           </div>
//         </div>

//         <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200/70">
//           <div
//             className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500"
//             style={{
//               width: `${(answeredCount / total) * 100}%`,
//             }}
//           />
//         </div>

//         <div className="grid grid-cols-3 gap-2">
//           <Stat
//             value={answeredCount}
//             label="Answered"
//             color="text-emerald-600"
//           />
//           <Stat
//             value={unansweredCount}
//             label="Pending"
//             color="text-slate-700"
//           />
//           <Stat
//             value={markedCount}
//             label="Review"
//             color="text-amber-600"
//           />
//         </div>
//       </div>
//     </aside>
//   );
// }

// function Legend({ color, label }) {
//   return (
//     <div className="flex items-center gap-2.5">
//       <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${color}`} />
//       <span className="text-[10px] font-medium text-slate-600">
//         {label}
//       </span>
//     </div>
//   );
// }

// function Stat({ value, label, color }) {
//   return (
//     <div className="rounded-xl border border-slate-100 bg-white px-2 py-3 text-center shadow-sm">
//       <p className={`text-base font-extrabold ${color}`}>{value}</p>
//       <p className="mt-1 text-[9px] font-semibold text-slate-400">
//         {label}
//       </p>
//     </div>
//   );
// }

// /* =========================================================
//    MOBILE QUESTION PALETTE
// ========================================================= */

// function MobileQuestionPalette({
//   questions,
//   currentIndex,
//   answers,
//   marked,
//   onNavigate,
// }) {
//   return (
//     <div className="shrink-0 border-b border-slate-200/80 bg-white px-4 py-3 lg:hidden">
//       <div className="mb-2.5 flex items-center justify-between">
//         <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
//           Question navigation
//         </p>

//         <p className="text-[10px] font-bold text-blue-700">
//           {currentIndex + 1} / {questions.length}
//         </p>
//       </div>

//       <div className="flex gap-2 overflow-x-auto pb-1">
//         {questions.map((question, index) => {
//           const isCurrent = currentIndex === index;
//           const isAnswered =
//                           answers[question.questionId] !== undefined;

//           return (
//             <button
//               key={question.questionId}
//               type="button"
//               onClick={() => onNavigate(index)}
//               aria-label={`Go to question ${index + 1}`}
//               className={`relative flex h-9 min-w-9 shrink-0 items-center justify-center rounded-xl border text-[10px] font-extrabold transition ${
//                 isCurrent
//                   ? "border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md"
//                   : isAnswered
//                   ? "border-emerald-200 bg-emerald-50 text-emerald-700"
//                   : "border-slate-200 bg-slate-50 text-slate-500"
//               }`}
//             >
//               {index + 1}

//               {marked[index] && (
//                 <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400" />
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    CODE SNIPPET
// ========================================================= */

// function CodeSnippet({ code }) {
//   if (!code) return null;

//   return (
//     <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1120] shadow-xl shadow-slate-900/10">
//       <div className="flex h-10 items-center justify-between border-b border-white/[0.08] bg-white/[0.035] px-4">
//         <div className="flex items-center gap-2">
//           <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
//           <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
//           <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
//         </div>

//         <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400">
//           <Code2 className="h-3.5 w-3.5 text-indigo-300" />
//           Code snippet
//         </div>
//       </div>

//       <pre className="max-h-52 overflow-auto p-4 text-xs leading-6 text-slate-200 sm:p-5 sm:text-[13px]">
//         <code>{code}</code>
//       </pre>
//     </div>
//   );
// }

// /* =========================================================
//    ANSWER OPTION
// ========================================================= */

// function AnswerOption({ index, text, selected, onClick }) {
//   const letter = String.fromCharCode(65 + index);

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-pressed={selected}
//       className={`group relative flex min-h-[70px] w-full items-center gap-3 overflow-hidden rounded-2xl border p-3.5 text-left transition-all duration-200 sm:gap-4 sm:p-4 ${
//         selected
//           ? "border-blue-500 bg-gradient-to-r from-blue-50 via-indigo-50/70 to-white shadow-[0_8px_25px_rgba(37,99,235,0.09)] ring-1 ring-blue-100"
//           : "border-slate-200/90 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-lg hover:shadow-slate-200/40"
//       }`}
//     >
//       {selected && (
//         <span className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-gradient-to-b from-blue-600 to-indigo-500" />
//       )}

//       <span
//         className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-all ${
//           selected
//             ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20"
//             : "border border-slate-200 bg-slate-50 text-slate-500 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"
//         }`}
//       >
//         {letter}
//       </span>

//       <span
//         className={`min-w-0 flex-1 break-words text-xs leading-5 sm:text-[13px] sm:leading-6 ${
//           selected
//             ? "font-bold text-slate-900"
//             : "font-medium text-slate-600"
//         }`}
//       >
//         {text}
//       </span>

//       <span
//         className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
//           selected
//             ? "border-blue-600 bg-blue-600 text-white"
//             : "border-slate-300 bg-white text-transparent group-hover:border-blue-300"
//         }`}
//       >
//         {selected && <Check className="h-3 w-3" strokeWidth={3} />}
//       </span>
//     </button>
//   );
// }

// /* =========================================================
//    QUESTION CARD
// ========================================================= */

// function QuestionCard({
//   question,
//   selectedAnswer,
//   onSelect,
// }) {
//   const difficulty = String(question.difficulty || "Medium");

//   const difficultyStyle =
//     difficulty.toLowerCase() === "easy"
//       ? "border-emerald-100 bg-emerald-50 text-emerald-700"
//       : difficulty.toLowerCase() === "hard"
//       ? "border-rose-100 bg-rose-50 text-rose-700"
//       : "border-amber-100 bg-amber-50 text-amber-700";

//   return (
//     <div className="mx-auto w-full max-w-[920px]">
//       <div className="flex flex-wrap items-center justify-between gap-3">
//         <div className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20">
//             {String(question.id).padStart(2, "0")}
//           </div>

//           <div>
//             <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-blue-700">
//               Question {question.id}
//             </p>

//             <p className="mt-1 text-[10px] font-medium text-slate-400">
//               Multiple choice <span className="mx-1.5">·</span> 1 point
//             </p>
//           </div>
//         </div>

//         <span
//           className={`rounded-full border px-3 py-1.5 text-[10px] font-extrabold ${difficultyStyle}`}
//         >
//           {difficulty}
//         </span>
//       </div>

//       <div className="mt-7 sm:mt-9">
//         <div className="mb-3 flex items-center gap-2">
//           <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

//           <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
//             {question.category}
//           </span>
//         </div>

//         <h2 className="max-w-[820px] whitespace-pre-wrap break-words text-[14px] font-extrabold leading-[1.4] tracking-[-0.035em] text-slate-900 sm:text-[14px] sm:leading-[1.45] lg:text-[22px]">
//           {question.question}
//         </h2>
//       </div>

//       {question.codeSnippet && (
//         <div className="mt-6">
//           <CodeSnippet code={question.codeSnippet} />
//         </div>
//       )}

//       <div className="mb-3 mt-7 flex items-center justify-between gap-3 sm:mt-8">
//         <h3 className="text-xs font-extrabold text-slate-800">
//           Choose your answer
//         </h3>

//         <span className="text-[10px] font-medium text-slate-400">
//           Select one option
//         </span>
//       </div>

//       <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
//         {question.options.map((option, index) => (
//           <AnswerOption
//             key={`${question.questionId}-${index}`}
//             index={index}
//             text={option}
//             selected={selectedAnswer === index}
//             onClick={() => onSelect(index, question.questionId)}
//           />
//         ))}
//       </div>

//       <div className="mt-5 flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-3">
//         <CircleHelp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />

//         <p className="text-[10px] leading-5 text-slate-500">
//           Read every option carefully and select the answer that best fits
//           the question.
//         </p>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    QUESTION ACTIONS
// ========================================================= */

// function QuestionActions({
//   currentIndex,
//   total,
//   marked,
//   selectedAnswer,
//   onPrevious,
//   onNext,
//   onMark,
//   onClear,
// }) {
//   const isLast = currentIndex === total - 1;

//   return (
//     <div className="shrink-0 border-t border-slate-100 bg-white/95 px-3 py-3 backdrop-blur-xl sm:px-6 sm:py-4 lg:px-8">
//       <div className="mx-auto flex max-w-[920px] items-center justify-between gap-2 sm:gap-4">
//         <button
//           type="button"
//           onClick={onPrevious}
//           disabled={currentIndex === 0}
//           className={`${buttonBase} h-11 border border-slate-200 bg-white px-3 text-xs text-slate-600 hover:border-slate-300 hover:bg-slate-50 sm:px-4`}
//         >
//           <ChevronLeft className="h-4 w-4" />
//           <span>Previous</span>
//         </button>

//         <div className="flex items-center gap-1 sm:gap-2">
//           {selectedAnswer !== undefined && (
//             <button
//               type="button"
//               onClick={onClear}
//               className={`${buttonBase} h-10 px-2.5 text-xs text-slate-400 hover:bg-rose-50 hover:text-rose-600 sm:px-3`}
//             >
//               <X className="h-3.5 w-3.5" />
//               <span className="hidden sm:inline">Clear</span>
//             </button>
//           )}

//           <button
//             type="button"
//             onClick={onMark}
//             aria-pressed={marked}
//             className={`${buttonBase} h-10 px-2.5 text-[10px] sm:px-3 sm:text-xs ${
//               marked
//                 ? "bg-amber-50 text-amber-700"
//                 : "text-slate-500 hover:bg-amber-50 hover:text-amber-700"
//             }`}
//           >
//             <Flag
//               className={`h-3.5 w-3.5 ${
//                 marked ? "fill-current" : ""
//               }`}
//             />

//             <span className="hidden sm:inline">
//               {marked ? "Marked" : "Mark for review"}
//             </span>

//             <span className="sm:hidden">Mark</span>
//           </button>
//         </div>

//         <button
//           type="button"
//           onClick={onNext}
//           className={`${buttonBase} h-11 bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 text-xs text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700 sm:px-5`}
//         >
//           <span>{isLast ? "Submit" : "Save & Next"}</span>

//           {isLast ? (
//             <Send className="h-3.5 w-3.5" />
//           ) : (
//             <ArrowRight className="h-3.5 w-3.5" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    SUBMIT MODAL
// ========================================================= */

// function SubmitModal({
//   answered,
//   total,
//   markedCount,
//   onClose,
//   onSubmit,
// }) {
//   const unanswered = total - answered;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-md"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="submit-title"
//     >
//       <div className="w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.30)]">
//         <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 text-white sm:p-7">
//           <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

//           <div className="relative flex items-start justify-between gap-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg backdrop-blur">
//               <Send className="h-5 w-5" />
//             </div>

//             <button
//               type="button"
//               onClick={onClose}
//               aria-label="Close dialog"
//               className="rounded-xl p-2 text-white/80 transition hover:bg-white/15 hover:text-white"
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>

//           <h2
//             id="submit-title"
//             className="relative mt-5 text-2xl font-extrabold tracking-tight"
//           >
//             Ready to submit?
//           </h2>

//           <p className="relative mt-2 max-w-[320px] text-xs leading-5 text-blue-100">
//             Review your progress before finishing the assessment.
//           </p>
//         </div>

//         <div className="p-6 sm:p-7">
//           <div className="grid grid-cols-3 gap-2">
//             <SummaryStat
//               value={answered}
//               label="Answered"
//               className="border-emerald-100 bg-emerald-50/70 text-emerald-700"
//             />

//             <SummaryStat
//               value={unanswered}
//               label="Unanswered"
//               className="border-amber-100 bg-amber-50/70 text-amber-700"
//             />

//             <SummaryStat
//               value={markedCount}
//               label="For review"
//               className="border-indigo-100 bg-indigo-50/70 text-indigo-700"
//             />
//           </div>

//           {unanswered > 0 && (
//             <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3.5">
//               <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

//               <p className="text-xs leading-5 text-amber-800">
//                 You still have <strong>{unanswered}</strong> unanswered
//                 question{unanswered === 1 ? "" : "s"}. You can go back and
//                 complete them before submitting.
//               </p>
//             </div>
//           )}

//           <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row">
//             <button
//               type="button"
//               onClick={onClose}
//               className={`${buttonBase} h-12 flex-1 border border-slate-200 bg-white px-4 text-xs text-slate-700 hover:bg-slate-50`}
//             >
//               Continue assessment
//             </button>

//             <button
//               type="button"
//               onClick={onSubmit}
//               className={`${buttonBase} h-12 flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-xs text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700`}
//             >
//               Submit assessment
//               <ArrowRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SummaryStat({ value, label, className }) {
//   return (
//     <div className={`rounded-2xl border p-3 text-center ${className}`}>
//       <p className="text-xl font-extrabold">{value}</p>
//       <p className="mt-1 text-[9px] font-bold opacity-70">{label}</p>
//     </div>
//   );
// }

// /* =========================================================
//    COMPLETION SCREEN
// ========================================================= */

// function AssessmentComplete({ onResults, answered, total }) {
//   return (
//     <div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f6f8ff] p-4 sm:p-8">
//       <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />

//       <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-violet-200/50 blur-3xl" />

//       <div className="relative w-full max-w-[520px] overflow-hidden rounded-[30px] border border-white bg-white/90 p-7 text-center shadow-[0_30px_100px_rgba(37,56,100,0.12)] backdrop-blur-xl sm:p-10">
//         <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

//         <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl shadow-emerald-500/25">
//           <ShieldCheck className="h-10 w-10" />
//         </div>

//         <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
//           <Check className="h-3 w-3" />
//           Submission complete
//         </div>

//         <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//           Great work!
//         </h1>

//         <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
//           Your assessment session has been completed. Your responses are
//           ready for the next step.
//         </p>

//         <div className="mt-7 grid grid-cols-2 gap-3">
//           <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
//             <p className="text-2xl font-extrabold text-slate-900">
//               {answered}
//             </p>
//             <p className="mt-1 text-[10px] font-semibold text-slate-500">
//               Answered
//             </p>
//           </div>

//           <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
//             <p className="text-2xl font-extrabold text-slate-900">
//               {total - answered}
//             </p>
//             <p className="mt-1 text-[10px] font-semibold text-slate-500">
//               Unanswered
//             </p>
//           </div>
//         </div>

//         <button
//           type="button"
//           onClick={onResults}
//           className={`${buttonBase} mt-6 h-12 w-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-sm text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700`}
//         >
//           Continue
//           <ArrowRight className="h-4 w-4" />
//         </button>

//         <p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
//           <ShieldCheck className="h-3.5 w-3.5" />
//           Assessment session completed
//         </p>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    LOADING SCREEN
// ========================================================= */

// function AssessmentLoading() {
//   return (
//     <div className="flex min-h-dvh items-center justify-center bg-[#f6f8ff] p-5">
//       <div className="w-full max-w-sm rounded-3xl border border-white bg-white p-8 text-center shadow-xl shadow-slate-200/60">
//         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
//           <LoaderCircle className="h-7 w-7 animate-spin" />
//         </div>

//         <h2 className="mt-5 text-lg font-extrabold text-slate-900">
//           Loading assessment
//         </h2>

//         <p className="mt-2 text-sm leading-6 text-slate-500">
//           Fetching your questions. This will only take a moment.
//         </p>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    ERROR SCREEN
// ========================================================= */

// function AssessmentError({ message, onRetry, onBack }) {
//   return (
//     <div className="flex min-h-dvh items-center justify-center bg-[#f6f8ff] p-5">
//       <div className="w-full max-w-md rounded-3xl border border-white bg-white p-8 text-center shadow-xl shadow-slate-200/60">
//         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
//           <X className="h-7 w-7" />
//         </div>

//         <h2 className="mt-5 text-xl font-extrabold text-slate-900">
//           Unable to load assessment
//         </h2>

//         <p className="mt-2 break-words text-sm leading-6 text-slate-500">
//           {message}
//         </p>

//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row">
//           <button
//             type="button"
//             onClick={onBack}
//             className={`${buttonBase} h-11 flex-1 border border-slate-200 bg-white px-4 text-xs text-slate-700 hover:bg-slate-50`}
//           >
//             Go back
//           </button>

//           <button
//             type="button"
//             onClick={onRetry}
//             className={`${buttonBase} h-11 flex-1 bg-blue-600 px-4 text-xs text-white hover:bg-blue-700`}
//           >
//             <RefreshCw className="h-3.5 w-3.5" />
//             Try again
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN MCQ ASSESSMENT COMPONENT
// ========================================================= */

// export default function MCQAssessment({
//   mode = "Coding",
//   onSubmit,
// }) {
//   const { fetchAssessmentQuestions, submitAssessmentResponse } = useTest();
//   const searchParams = useSearchParams();

//   const assessmentId = searchParams.get("assessmentId");

//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loadError, setLoadError] = useState("");

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [marked, setMarked] = useState({});
//   const [seconds, setSeconds] = useState(60 * 60);
//   const [showSubmit, setShowSubmit] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   /* ---------------------------------------------------------
//      FETCH REAL QUESTIONS THROUGH CONTEXT
//   --------------------------------------------------------- */

//   const loadQuestions = useCallback(async () => {
//     if (!assessmentId) {
//       setLoadError("Assessment ID is missing from the URL.");
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     setLoadError("");

//     try {
//       const data = await fetchAssessmentQuestions(assessmentId);

//       if (!Array.isArray(data)) {
//         throw new Error("The API did not return a valid questions array.");
//       }

//       const normalizedQuestions = data.map((item, index) => {
//         const rawOptions = Array.isArray(item.options)
//           ? item.options
//           : [];

//         return {
//           ...item,

//           // Display numbering is sequential.
//           id: index + 1,

//           // Preserve the actual MongoDB question ID.
//           questionId: item._id ?? item.questionId ?? item.id,

//           // Support common field names from the database.
//           question:
//             item.question ??
//             item.questionText ??
//             item.text ??
//             item.title ??
//             "",

//           category:
//             item.category ??
//             item.topic ??
//             item.subject ??
//             "General",

//           difficulty: item.difficulty ?? "Medium",

//           codeSnippet:
//             item.codeSnippet ??
//             item.code_snippet ??
//             item.code ??
//             null,

//           // Options may be strings or objects.
//           options: rawOptions.map((option) => {
//             if (
//               typeof option === "string" ||
//               typeof option === "number"
//             ) {
//               return String(option);
//             }

//             if (option && typeof option === "object") {
//               return String(
//                 option.text ??
//                   option.label ??
//                   option.value ??
//                   option.option ??
//                   ""
//               );
//             }

//             return "";
//           }),
//         };
//       });

//       const invalidQuestion = normalizedQuestions.find(
//         (item) => !item.question || item.options.length === 0
//       );

//       if (invalidQuestion) {
//         console.warn(
//           "A question is missing its question text or options:",
//           invalidQuestion
//         );
//       }

//       setQuestions(normalizedQuestions);
//       setCurrentIndex(0);
//       setAnswers({});
//       setMarked({});
//       setSeconds(60 * 60);
//       setShowSubmit(false);
//       setSubmitted(false);
//     } catch (error) {
//       console.error("Unable to load assessment questions:", error);

//       setLoadError(
//         error?.message ||
//           "Unable to load questions. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, [assessmentId, fetchAssessmentQuestions]);

//   useEffect(() => {
//     loadQuestions();
//   }, [loadQuestions]);

//   /* ---------------------------------------------------------
//      TIMER
//   --------------------------------------------------------- */

//   useEffect(() => {
//     if (
//       loading ||
//       submitted ||
//       seconds <= 0 ||
//       questions.length === 0
//     ) {
//       return undefined;
//     }

//     const timer = setInterval(() => {
//       setSeconds((previous) => Math.max(0, previous - 1));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [loading, submitted, seconds, questions.length]);

//   /* ---------------------------------------------------------
//      AUTO OPEN SUBMIT MODAL WHEN TIME EXPIRES
//   --------------------------------------------------------- */

//   useEffect(() => {
//     if (seconds === 0 && !submitted && questions.length > 0) {
//       setShowSubmit(true);
//     }
//   }, [seconds, submitted, questions.length]);

//   /* ---------------------------------------------------------
//      DERIVED VALUES
//   --------------------------------------------------------- */

//   const question = questions[currentIndex];

//   const answeredCount = Object.keys(answers).length;

//   const markedCount = Object.values(marked).filter(Boolean).length;

//   const selectedAnswer = question
//   ? answers[question.questionId]
//   : undefined;
//   /* ---------------------------------------------------------
//      ANSWER SELECTION
//   --------------------------------------------------------- */

//   // const selectAnswer = (answerIndex,question_id) => {
//   //   setAnswers((previous) => ({
//   //     ...previous,
//   //     [currentIndex]: answerIndex,
//   //   }));
//   // };
//   const selectAnswer = (answerIndex, questionId) => {
//     setAnswers((previous) => ({
//       ...previous,
//       [questionId]: answerIndex,
//     }));
//   };

//   // const clearAnswer = () => {
//   //   setAnswers((previous) => {
//   //     const next = { ...previous };
//   //     delete next[currentIndex];
//   //     return next;
//   //   });
//   // };
//   const clearAnswer = () => {
//     setAnswers((previous) => {
//       const next = { ...previous };
//       delete next[question.questionId];
//       return next;
//     });
//   };
//   /* ---------------------------------------------------------
//      QUESTION NAVIGATION
//   --------------------------------------------------------- */

//   const previousQuestion = () => {
//     setCurrentIndex((previous) => Math.max(0, previous - 1));
//   };

//   const nextQuestion = () => {
//     if (currentIndex === questions.length - 1) {
//       setShowSubmit(true);
//       return;
//     }
//     console.log("answers", answers)
//     setCurrentIndex((previous) => previous + 1);
//   };

//   const toggleMark = () => {
//     setMarked((previous) => ({
//       ...previous,
//       [currentIndex]: !previous[currentIndex],
//     }));
//   };

//   /* ---------------------------------------------------------
//      EXIT ASSESSMENT
//   --------------------------------------------------------- */

//   const exitAssessment = () => {
//     const shouldExit = window.confirm(
//       "Are you sure you want to exit this assessment? Your progress may be lost."
//     );

//     if (shouldExit) {
//       window.history.back();
//     }
//   };

//   /* ---------------------------------------------------------
//      SUBMIT ASSESSMENT
//   --------------------------------------------------------- */

//   const submitAssessment = () => {
//     const payload = {
//       assessmentId,
//       mode,

//       answers: questions.map((item) => ({
//         questionId: item.questionId,

//         // Selected option index: 0, 1, 2, 3...
//         selectedAnswer: answers[item.questionId] ?? -1,

//         // Selected option text
//         selectedOption:
//           answers[item.questionId] == null
//             ? -1
//             : item.options[answers[item.questionId]],
//       })),

//       submittedAt: new Date().toISOString(),
//     };

//     console.log("Final payload", payload)
//     submitAssessmentResponse(payload)

//     if (typeof onSubmit === "function") {
//       onSubmit(payload);
//     }

//     setShowSubmit(false);
//     setSubmitted(true);
//   };

//   /* ---------------------------------------------------------
//      LOADING / ERROR / EMPTY STATES
//   --------------------------------------------------------- */

//   if (loading) {
//     return <AssessmentLoading />;
//   }

//   if (loadError) {
//     return (
//       <AssessmentError
//         message={loadError}
//         onRetry={loadQuestions}
//         onBack={() => window.history.back()}
//       />
//     );
//   }

//   if (questions.length === 0) {
//     return (
//       <div className="flex min-h-dvh items-center justify-center bg-[#f6f8ff] p-5">
//         <div className="w-full max-w-md rounded-3xl border border-white bg-white p-8 text-center shadow-xl shadow-slate-200/60">
//           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
//             <CircleHelp className="h-7 w-7" />
//           </div>

//           <h2 className="mt-5 text-xl font-extrabold text-slate-900">
//             No questions available
//           </h2>

//           <p className="mt-2 text-sm leading-6 text-slate-500">
//             This assessment does not contain any questions.
//           </p>

//           <button
//             type="button"
//             onClick={() => window.history.back()}
//             className={`${buttonBase} mt-6 h-11 w-full bg-blue-600 px-5 text-xs text-white hover:bg-blue-700`}
//           >
//             Go back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (submitted) {
//     return (
//       <AssessmentComplete
//         answered={answeredCount}
//         total={questions.length}
//         onResults={() => window.history.back()}
//       />
//     );
//   }

//   /* ---------------------------------------------------------
//      MAIN ASSESSMENT UI
//   --------------------------------------------------------- */

//   return (
//     <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-[#f4f7ff] text-slate-900">
//       {/* Ambient background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
//         <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />
//       </div>

//       <div className="relative z-10 flex min-h-0 flex-1 flex-col">
//         <AssessmentHeader
//           mode={mode}
//           current={currentIndex + 1}
//           total={questions.length}
//           seconds={seconds}
//           onExit={exitAssessment}
//         />

//         <MobileQuestionPalette
//           questions={questions}
//           currentIndex={currentIndex}
//           answers={answers}
//           marked={marked}
//           onNavigate={setCurrentIndex}
//         />

//         <main className="min-h-0 flex-1 p-3 sm:p-5 lg:p-6">
//           <div className="mx-auto flex h-full min-h-0 max-w-[1600px] gap-5">
//             <QuestionPalette
//               questions={questions}
//               currentIndex={currentIndex}
//               answers={answers}
//               marked={marked}
//               onNavigate={setCurrentIndex}
//             />

//             <section className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-[0_15px_55px_rgba(30,41,59,0.07)] ring-1 ring-slate-200/80 sm:rounded-3xl">
//               <div className="relative min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-8">
//                 <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50/20 blur-3xl" />

//                 <div className="relative">
//                   <QuestionCard
//                     question={question}
//                     selectedAnswer={selectedAnswer}
//                     onSelect={selectAnswer}
//                   />
//                 </div>
//               </div>

//               <QuestionActions
//                 currentIndex={currentIndex}
//                 total={questions.length}
//                 marked={Boolean(marked[currentIndex])}
//                 selectedAnswer={selectedAnswer}
//                 onPrevious={previousQuestion}
//                 onNext={nextQuestion}
//                 onMark={toggleMark}
//                 onClear={clearAnswer}
//               />
//             </section>
//           </div>
//         </main>

//         <footer className="relative z-10 hidden shrink-0 items-center justify-between border-t border-slate-200/70 bg-white/75 px-6 py-2.5 text-[10px] text-slate-400 backdrop-blur md:flex lg:px-8">
//           <div className="flex items-center gap-2">
//             <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
//             <span>Stay focused. Do your best.</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <span>
//               {mode === "aptitude" ? "Aptitude" : "Technical"} assessment
//             </span>

//             <span className="text-slate-300">•</span>

//             <span>{questions.length} questions</span>
//           </div>
//         </footer>
//       </div>

//       {showSubmit && (
//         <SubmitModal
//           answered={answeredCount}
//           total={questions.length}
//           markedCount={markedCount}
//           onClose={() => {
//             if (seconds > 0) {
//               setShowSubmit(false);
//             }
//           }}
//           onSubmit={submitAssessment}
//         />
//       )}
//     </div>
//   );
// }


"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useSearchParams } from "next/navigation";

import { useTest } from "@/app/context/tests.context";
import { setupAssessmentAntiCheat } from "@/app/utility/anticheat";

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

  Code2,

  ShieldCheck,

  CircleHelp,

  Trophy,

  LoaderCircle,

  RefreshCw,

} from "lucide-react";

/* =========================================================

   SHARED STYLES

========================================================= */

const buttonBase =

  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40";

function formatTime(seconds) {

  const minutes = Math.floor(seconds / 60);

  const remaining = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(

    remaining

  ).padStart(2, "0")}`;

}

/* =========================================================

   ASSESSMENT HEADER

========================================================= */

function AssessmentHeader({

  mode,

  current,

  total,

  seconds,

  onExit,

}) {

  const isLowTime = seconds <= 300;

  return (

    <header className="relative z-20 shrink-0 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">

      <div className="flex h-[68px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

        <div className="flex min-w-0 items-center gap-3">

          <button

            type="button"

            onClick={onExit}

            aria-label="Exit assessment"

            className="group flex h-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"

          >

            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />

            <span className="ml-2 hidden text-xs font-semibold sm:inline">

              Exit

            </span>

          </button>

          <div className="h-8 w-px shrink-0 bg-slate-200" />

          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">

              <Check className="h-4 w-4" />

            </div>

            <div className="min-w-0">

              <h1 className="truncate text-xs font-extrabold tracking-tight text-slate-900 sm:text-sm">

                {mode === "aptitude"

                  ? "Aptitude Assessment"

                  : "Coding Assessment"}

              </h1>

              <p className="text-[10px] text-slate-500">

                Question {current} of {total}

              </p>

            </div>

          </div>

        </div>

        <div className="hidden items-center gap-3 md:flex">

          <div className="text-right">

            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">

              Progress

            </p>

            <p className="text-xs font-bold text-slate-800">

              {Math.round((current / Math.max(total, 1)) * 100)}%

            </p>

          </div>

          <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100">

            <div

              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all"

              style={{

                width: `${(current / Math.max(total, 1)) * 100}%`,

              }}

            />

          </div>

        </div>

        <div

          className={`flex h-10 shrink-0 items-center gap-2 rounded-xl border px-3 ${

            isLowTime

              ? "border-rose-200 bg-rose-50 text-rose-700"

              : "border-blue-100 bg-blue-50 text-blue-700"

          }`}

        >

          <Clock3

            className={`h-4 w-4 ${isLowTime ? "animate-pulse" : ""}`}

          />

          <div>

            <p className="hidden text-[8px] font-bold uppercase tracking-wider opacity-70 sm:block">

              Time remaining

            </p>

            <p className="font-mono text-xs font-extrabold tabular-nums sm:text-sm">

              {formatTime(seconds)}

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}

/* =========================================================

   QUESTION PALETTE

========================================================= */

function QuestionPalette({

  questions,

  currentIndex,

  answers,

  marked,

  onNavigate,

}) {

  const total = questions.length;

  const answeredCount = Object.keys(answers).length;

  const markedCount = Object.values(marked).filter(Boolean).length;

  const unansweredCount = total - answeredCount;

  return (

    <aside className="hidden w-[290px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-[0_12px_45px_rgba(30,41,59,0.06)] ring-1 ring-slate-200/80 lg:flex xl:w-[310px]">

      <div className="border-b border-slate-100 px-5 py-5">

        <div className="flex items-center justify-between gap-3">

          <div className="flex items-center gap-3">

            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/20">

              <Grid2X2 className="h-4 w-4" />

            </span>

            <div>

              <h2 className="text-sm font-extrabold tracking-tight text-slate-900">

                Question palette

              </h2>

              <p className="mt-0.5 text-[10px] text-slate-500">

                Jump to any question

              </p>

            </div>

          </div>

          <span className="rounded-lg border border-slate-100 bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-500">

            {total} Qs

          </span>

        </div>

      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-5">

        <div className="mb-4 flex items-center justify-between">

          <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">

            All questions

          </p>

          <p className="text-[10px] font-semibold text-slate-400">

            Select to navigate

          </p>

        </div>

        <div className="grid grid-cols-5 gap-2">

          {questions.map((question, index) => {

            const isCurrent = currentIndex === index;

            const isAnswered =

  answers[question.questionId] !== undefined;

            const isMarked = Boolean(marked[index]);

            let style =

              "border-slate-200 bg-slate-50 text-slate-500 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700";

            if (isAnswered) {

              style =

                "border border-emerald-500 bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 text-white shadow-md shadow-emerald-500/30 hover:from-emerald-500 hover:via-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300";

            }

            if (isCurrent) {

              style =

                "border border-blue-400 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-300/50 ring-offset-2 scale-[1.04] transition-all duration-300";

            }

            if (isMarked) {

              style =

                "border border-amber-400 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 ring-2 ring-amber-300/50 ring-offset-2 transition-all duration-300 hover:shadow-xl hover:shadow-orange-400/40";

            }

            return (

              <button

                key={question.questionId}

                type="button"

                onClick={() => onNavigate(index)}

                aria-label={`Go to question ${index + 1}`}

                aria-current={isCurrent ? "step" : undefined}

                className={`relative cursor-pointer flex h-10 items-center justify-center rounded-xl border text-[10px] font-extrabold transition-all hover:-translate-y-0.5 ${style}`}

              >

                {String(index + 1).padStart(2, "0")}

                {isMarked && (

                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-amber-400">

                    <Flag className="h-2 w-2 fill-white text-white" />

                  </span>

                )}

              </button>

            );

          })}

        </div>

        <div className="mt-6 space-y-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">

          <Legend

            color="bg-gradient-to-br from-blue-600 to-indigo-600"

            label="Current question"

          />

          <Legend color="bg-emerald-400" label="Answered" />

          <Legend color="bg-amber-400" label="Marked for review" />

          <Legend color="bg-slate-300" label="Not answered" />

        </div>

      </div>

      <div className="shrink-0 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/70 p-5">

        <div className="mb-4 flex items-center justify-between">

          <div>

            <p className="text-[10px] font-semibold text-slate-500">

              Completion

            </p>

            <p className="mt-1 text-xl font-extrabold tracking-tight text-slate-900">

              {Math.round((answeredCount / total) * 100)}%

            </p>

          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

            <Trophy className="h-5 w-5" />

          </div>

        </div>

        <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200/70">

          <div

            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500"

            style={{

              width: `${(answeredCount / total) * 100}%`,

            }}

          />

        </div>

        <div className="grid grid-cols-3 gap-2">

          <Stat

            value={answeredCount}

            label="Answered"

            color="text-emerald-600"

          />

          <Stat

            value={unansweredCount}

            label="Pending"

            color="text-slate-700"

          />

          <Stat

            value={markedCount}

            label="Review"

            color="text-amber-600"

          />

        </div>

      </div>

    </aside>

  );

}

function Legend({ color, label }) {

  return (

    <div className="flex items-center gap-2.5">

      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${color}`} />

      <span className="text-[10px] font-medium text-slate-600">

        {label}

      </span>

    </div>

  );

}

function Stat({ value, label, color }) {

  return (

    <div className="rounded-xl border border-slate-100 bg-white px-2 py-3 text-center shadow-sm">

      <p className={`text-base font-extrabold ${color}`}>{value}</p>

      <p className="mt-1 text-[9px] font-semibold text-slate-400">

        {label}

      </p>

    </div>

  );

}

/* =========================================================

   MOBILE QUESTION PALETTE

========================================================= */

function MobileQuestionPalette({

  questions,

  currentIndex,

  answers,

  marked,

  onNavigate,

}) {

  return (

    <div className="shrink-0 border-b border-slate-200/80 bg-white px-4 py-3 lg:hidden">

      <div className="mb-2.5 flex items-center justify-between">

        <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">

          Question navigation

        </p>

        <p className="text-[10px] font-bold text-blue-700">

          {currentIndex + 1} / {questions.length}

        </p>

      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">

        {questions.map((question, index) => {

          const isCurrent = currentIndex === index;

          const isAnswered =

                          answers[question.questionId] !== undefined;

          return (

            <button

              key={question.questionId}

              type="button"

              onClick={() => onNavigate(index)}

              aria-label={`Go to question ${index + 1}`}

              className={`relative flex h-9 min-w-9 shrink-0 items-center justify-center rounded-xl border text-[10px] font-extrabold transition ${

                isCurrent

                  ? "border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md"

                  : isAnswered

                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"

                  : "border-slate-200 bg-slate-50 text-slate-500"

              }`}

            >

              {index + 1}

              {marked[index] && (

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400" />

              )}

            </button>

          );

        })}

      </div>

    </div>

  );

}

/* =========================================================

   CODE SNIPPET

========================================================= */

function CodeSnippet({ code }) {

  if (!code) return null;

  return (

    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1120] shadow-xl shadow-slate-900/10">

      <div className="flex h-10 items-center justify-between border-b border-white/[0.08] bg-white/[0.035] px-4">

        <div className="flex items-center gap-2">

          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />

          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />

          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

        </div>

        <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400">

          <Code2 className="h-3.5 w-3.5 text-indigo-300" />

          Code snippet

        </div>

      </div>

      <pre className="max-h-52 overflow-auto p-4 text-xs leading-6 text-slate-200 sm:p-5 sm:text-[13px]">

        <code>{code}</code>

      </pre>

    </div>

  );

}

/* =========================================================

   ANSWER OPTION

========================================================= */

function AnswerOption({ index, text, selected, onClick }) {

  const letter = String.fromCharCode(65 + index);

  return (

    <button

      type="button"

      onClick={onClick}

      aria-pressed={selected}

      className={`group relative flex min-h-[70px] w-full items-center gap-3 overflow-hidden rounded-2xl border p-3.5 text-left transition-all duration-200 sm:gap-4 sm:p-4 ${

        selected

          ? "border-blue-500 bg-gradient-to-r from-blue-50 via-indigo-50/70 to-white shadow-[0_8px_25px_rgba(37,99,235,0.09)] ring-1 ring-blue-100"

          : "border-slate-200/90 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-lg hover:shadow-slate-200/40"

      }`}

    >

      {selected && (

        <span className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-gradient-to-b from-blue-600 to-indigo-500" />

      )}

      <span

        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-all ${

          selected

            ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20"

            : "border border-slate-200 bg-slate-50 text-slate-500 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"

        }`}

      >

        {letter}

      </span>

      <span

        className={`min-w-0 flex-1 break-words text-xs leading-5 sm:text-[13px] sm:leading-6 ${

          selected

            ? "font-bold text-slate-900"

            : "font-medium text-slate-600"

        }`}

      >

        {text}

      </span>

      <span

        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${

          selected

            ? "border-blue-600 bg-blue-600 text-white"

            : "border-slate-300 bg-white text-transparent group-hover:border-blue-300"

        }`}

      >

        {selected && <Check className="h-3 w-3" strokeWidth={3} />}

      </span>

    </button>

  );

}

/* =========================================================

   QUESTION CARD

========================================================= */

function QuestionCard({

  question,

  selectedAnswer,

  onSelect,

}) {

  const difficulty = String(question.difficulty || "Medium");

  const difficultyStyle =

    difficulty.toLowerCase() === "easy"

      ? "border-emerald-100 bg-emerald-50 text-emerald-700"

      : difficulty.toLowerCase() === "hard"

      ? "border-rose-100 bg-rose-50 text-rose-700"

      : "border-amber-100 bg-amber-50 text-amber-700";

  return (

    <div className="mx-auto w-full max-w-[920px]">

      <div className="flex flex-wrap items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20">

            {String(question.id).padStart(2, "0")}

          </div>

          <div>

            <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-blue-700">

              Question {question.id}

            </p>

            <p className="mt-1 text-[10px] font-medium text-slate-400">

              Multiple choice <span className="mx-1.5">·</span> 1 point

            </p>

          </div>

        </div>

        <span

          className={`rounded-full border px-3 py-1.5 text-[10px] font-extrabold ${difficultyStyle}`}

        >

          {difficulty}

        </span>

      </div>

      <div className="mt-7 sm:mt-9">

        <div className="mb-3 flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

          <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">

            {question.category}

          </span>

        </div>

        <h2 className="max-w-[820px] whitespace-pre-wrap break-words text-[14px] font-extrabold leading-[1.4] tracking-[-0.035em] text-slate-900 sm:text-[14px] sm:leading-[1.45] lg:text-[22px]">

          {question.question}

        </h2>

      </div>

      {question.codeSnippet && (

        <div className="mt-6">

          <CodeSnippet code={question.codeSnippet} />

        </div>

      )}

      <div className="mb-3 mt-7 flex items-center justify-between gap-3 sm:mt-8">

        <h3 className="text-xs font-extrabold text-slate-800">

          Choose your answer

        </h3>

        <span className="text-[10px] font-medium text-slate-400">

          Select one option

        </span>

      </div>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">

        {question.options.map((option, index) => (

          <AnswerOption

            key={`${question.questionId}-${index}`}

            index={index}

            text={option}

            selected={selectedAnswer === index}

            onClick={() => onSelect(index, question.questionId)}

          />

        ))}

      </div>

      <div className="mt-5 flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-3">

        <CircleHelp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />

        <p className="text-[10px] leading-5 text-slate-500">

          Read every option carefully and select the answer that best fits

          the question.

        </p>

      </div>

    </div>

  );

}

/* =========================================================

   QUESTION ACTIONS

========================================================= */

function QuestionActions({

  currentIndex,

  total,

  marked,

  selectedAnswer,

  onPrevious,

  onNext,

  onMark,

  onClear,

}) {

  const isLast = currentIndex === total - 1;

  return (

    <div className="shrink-0 border-t border-slate-100 bg-white/95 px-3 py-3 backdrop-blur-xl sm:px-6 sm:py-4 lg:px-8">

      <div className="mx-auto flex max-w-[920px] items-center justify-between gap-2 sm:gap-4">

        <button

          type="button"

          onClick={onPrevious}

          disabled={currentIndex === 0}

          className={`${buttonBase} h-11 border border-slate-200 bg-white px-3 text-xs text-slate-600 hover:border-slate-300 hover:bg-slate-50 sm:px-4`}

        >

          <ChevronLeft className="h-4 w-4" />

          <span>Previous</span>

        </button>

        <div className="flex items-center gap-1 sm:gap-2">

          {selectedAnswer !== undefined && (

            <button

              type="button"

              onClick={onClear}

              className={`${buttonBase} h-10 px-2.5 text-xs text-slate-400 hover:bg-rose-50 hover:text-rose-600 sm:px-3`}

            >

              <X className="h-3.5 w-3.5" />

              <span className="hidden sm:inline">Clear</span>

            </button>

          )}

          <button

            type="button"

            onClick={onMark}

            aria-pressed={marked}

            className={`${buttonBase} h-10 px-2.5 text-[10px] sm:px-3 sm:text-xs ${

              marked

                ? "bg-amber-50 text-amber-700"

                : "text-slate-500 hover:bg-amber-50 hover:text-amber-700"

            }`}

          >

            <Flag

              className={`h-3.5 w-3.5 ${

                marked ? "fill-current" : ""

              }`}

            />

            <span className="hidden sm:inline">

              {marked ? "Marked" : "Mark for review"}

            </span>

            <span className="sm:hidden">Mark</span>

          </button>

        </div>

        <button

          type="button"

          onClick={onNext}

          className={`${buttonBase} h-11 bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 text-xs text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700 sm:px-5`}

        >

          <span>{isLast ? "Submit" : "Save & Next"}</span>

          {isLast ? (

            <Send className="h-3.5 w-3.5" />

          ) : (

            <ArrowRight className="h-3.5 w-3.5" />

          )}

        </button>

      </div>

    </div>

  );

}

/* =========================================================

   SUBMIT MODAL

========================================================= */

function SubmitModal({

  answered,

  total,

  markedCount,

  onClose,

  onSubmit,

}) {

  const unanswered = total - answered;

  return (

    <div

      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-md"

      role="dialog"

      aria-modal="true"

      aria-labelledby="submit-title"

    >

      <div className="w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.30)]">

        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 text-white sm:p-7">

          <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex items-start justify-between gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg backdrop-blur">

              <Send className="h-5 w-5" />

            </div>

            <button

              type="button"

              onClick={onClose}

              aria-label="Close dialog"

              className="rounded-xl p-2 text-white/80 transition hover:bg-white/15 hover:text-white"

            >

              <X className="h-5 w-5" />

            </button>

          </div>

          <h2

            id="submit-title"

            className="relative mt-5 text-2xl font-extrabold tracking-tight"

          >

            Ready to submit?

          </h2>

          <p className="relative mt-2 max-w-[320px] text-xs leading-5 text-blue-100">

            Review your progress before finishing the assessment.

          </p>

        </div>

        <div className="p-6 sm:p-7">

          <div className="grid grid-cols-3 gap-2">

            <SummaryStat

              value={answered}

              label="Answered"

              className="border-emerald-100 bg-emerald-50/70 text-emerald-700"

            />

            <SummaryStat

              value={unanswered}

              label="Unanswered"

              className="border-amber-100 bg-amber-50/70 text-amber-700"

            />

            <SummaryStat

              value={markedCount}

              label="For review"

              className="border-indigo-100 bg-indigo-50/70 text-indigo-700"

            />

          </div>

          {unanswered > 0 && (

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3.5">

              <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

              <p className="text-xs leading-5 text-amber-800">

                You still have <strong>{unanswered}</strong> unanswered

                question{unanswered === 1 ? "" : "s"}. You can go back and

                complete them before submitting.

              </p>

            </div>

          )}

          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row">

            <button

              type="button"

              onClick={onClose}

              className={`${buttonBase} h-12 flex-1 border border-slate-200 bg-white px-4 text-xs text-slate-700 hover:bg-slate-50`}

            >

              Continue assessment

            </button>

            <button

              type="button"

              onClick={onSubmit}

              className={`${buttonBase} h-12 flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-xs text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700`}

            >

              Submit assessment

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

function SummaryStat({ value, label, className }) {

  return (

    <div className={`rounded-2xl border p-3 text-center ${className}`}>

      <p className="text-xl font-extrabold">{value}</p>

      <p className="mt-1 text-[9px] font-bold opacity-70">{label}</p>

    </div>

  );

}

/* =========================================================

   COMPLETION SCREEN

========================================================= */

function AssessmentComplete({ onResults, answered, total }) {

  return (

    <div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f6f8ff] p-4 sm:p-8">

      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-violet-200/50 blur-3xl" />

      <div className="relative w-full max-w-[520px] overflow-hidden rounded-[30px] border border-white bg-white/90 p-7 text-center shadow-[0_30px_100px_rgba(37,56,100,0.12)] backdrop-blur-xl sm:p-10">

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl shadow-emerald-500/25">

          <ShieldCheck className="h-10 w-10" />

        </div>

        <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">

          <Check className="h-3 w-3" />

          Submission complete

        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

          Great work!

        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">

          Your assessment session has been completed. Your responses are

          ready for the next step.

        </p>

        <div className="mt-7 grid grid-cols-2 gap-3">

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">

            <p className="text-2xl font-extrabold text-slate-900">

              {answered}

            </p>

            <p className="mt-1 text-[10px] font-semibold text-slate-500">

              Answered

            </p>

          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">

            <p className="text-2xl font-extrabold text-slate-900">

              {total - answered}

            </p>

            <p className="mt-1 text-[10px] font-semibold text-slate-500">

              Unanswered

            </p>

          </div>

        </div>

        <button

          type="button"

          onClick={onResults}

          className={`${buttonBase} mt-6 h-12 w-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-sm text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700`}

        >

          Continue

          <ArrowRight className="h-4 w-4" />

        </button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">

          <ShieldCheck className="h-3.5 w-3.5" />

          Assessment session completed

        </p>

      </div>

    </div>

  );

}

/* =========================================================

   LOADING SCREEN

========================================================= */

function AssessmentLoading() {

  return (

    <div className="flex min-h-dvh items-center justify-center bg-[#f6f8ff] p-5">

      <div className="w-full max-w-sm rounded-3xl border border-white bg-white p-8 text-center shadow-xl shadow-slate-200/60">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

          <LoaderCircle className="h-7 w-7 animate-spin" />

        </div>

        <h2 className="mt-5 text-lg font-extrabold text-slate-900">

          Loading assessment

        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">

          Fetching your questions. This will only take a moment.

        </p>

      </div>

    </div>

  );

}

/* =========================================================

   ERROR SCREEN

========================================================= */

function AssessmentError({ message, onRetry, onBack }) {

  return (

    <div className="flex min-h-dvh items-center justify-center bg-[#f6f8ff] p-5">

      <div className="w-full max-w-md rounded-3xl border border-white bg-white p-8 text-center shadow-xl shadow-slate-200/60">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">

          <X className="h-7 w-7" />

        </div>

        <h2 className="mt-5 text-xl font-extrabold text-slate-900">

          Unable to load assessment

        </h2>

        <p className="mt-2 break-words text-sm leading-6 text-slate-500">

          {message}

        </p>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row">

          <button

            type="button"

            onClick={onBack}

            className={`${buttonBase} h-11 flex-1 border border-slate-200 bg-white px-4 text-xs text-slate-700 hover:bg-slate-50`}

          >

            Go back

          </button>

          <button

            type="button"

            onClick={onRetry}

            className={`${buttonBase} h-11 flex-1 bg-blue-600 px-4 text-xs text-white hover:bg-blue-700`}

          >

            <RefreshCw className="h-3.5 w-3.5" />

            Try again

          </button>

        </div>

      </div>

    </div>

  );

}

/* =========================================================

   MAIN MCQ ASSESSMENT COMPONENT

========================================================= */

export default function MCQAssessment({

  mode = "Coding",

  onSubmit,

}) {

  const { fetchAssessmentQuestions, submitAssessmentResponse } = useTest();

  const searchParams = useSearchParams();

  const assessmentId = searchParams.get("assessmentId");

  const [questions, setQuestions] = useState([]);

  const [loading, setLoading] = useState(true);

  const [loadError, setLoadError] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState({});

  const [marked, setMarked] = useState({});

  const [seconds, setSeconds] = useState(60 * 60);

  const [showSubmit, setShowSubmit] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const antiCheatRef = useRef(null);

  /* ---------------------------------------------------------

     FETCH REAL QUESTIONS THROUGH CONTEXT

  --------------------------------------------------------- */

  const loadQuestions = useCallback(async () => {

    if (!assessmentId) {

      setLoadError("Assessment ID is missing from the URL.");

      setLoading(false);

      return;

    }

    setLoading(true);

    setLoadError("");

    try {

      const data = await fetchAssessmentQuestions(assessmentId);

      if (!Array.isArray(data)) {

        throw new Error("The API did not return a valid questions array.");

      }

      const normalizedQuestions = data.map((item, index) => {

        const rawOptions = Array.isArray(item.options)

          ? item.options

          : [];

        return {

          ...item,

          // Display numbering is sequential.

          id: index + 1,

          // Preserve the actual MongoDB question ID.

          questionId: item._id ?? item.questionId ?? item.id,

          // Support common field names from the database.

          question:

            item.question ??

            item.questionText ??

            item.text ??

            item.title ??

            "",

          category:

            item.category ??

            item.topic ??

            item.subject ??

            "General",

          difficulty: item.difficulty ?? "Medium",

          codeSnippet:

            item.codeSnippet ??

            item.code_snippet ??

            item.code ??

            null,

          // Options may be strings or objects.

          options: rawOptions.map((option) => {

            if (

              typeof option === "string" ||

              typeof option === "number"

            ) {

              return String(option);

            }

            if (option && typeof option === "object") {

              return String(

                option.text ??

                  option.label ??

                  option.value ??

                  option.option ??

                  ""

              );

            }

            return "";

          }),

        };

      });

      const invalidQuestion = normalizedQuestions.find(

        (item) => !item.question || item.options.length === 0

      );

      if (invalidQuestion) {

        console.warn(

          "A question is missing its question text or options:",

          invalidQuestion

        );

      }

      setQuestions(normalizedQuestions);

      setCurrentIndex(0);

      setAnswers({});

      setMarked({});

      setSeconds(60 * 60);

      setShowSubmit(false);

      setSubmitted(false);

    } catch (error) {

      console.error("Unable to load assessment questions:", error);

      setLoadError(

        error?.message ||

          "Unable to load questions. Please try again."

      );

    } finally {

      setLoading(false);

    }

  }, [assessmentId, fetchAssessmentQuestions]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);


  useEffect(() => {
    if (loading || submitted || questions.length === 0 || loadError) {
      return undefined;
    }

    const antiCheat = setupAssessmentAntiCheat({
      maxFullscreenExits: 3,
      warnOnTabSwitch: true,
      onWarning: (message) => {
        // A mount-time fullscreen request may be rejected without a user gesture.
        // Avoid a blocking alert; the assessment root retries on the user's next click.
        if (message.startsWith("Please click the Resume Fullscreen button")) return;
        window.alert(message);
      },
      onViolation: (message) => {
        window.alert(message);
        // Optional: send the violation to your backend for persistent logging.
      },
    });

    antiCheatRef.current = antiCheat;
    antiCheat.startFullscreen();

    return () => {
      antiCheat.cleanup();
      antiCheatRef.current = null;
    };
  }, [loading, submitted, questions.length, loadError]);

  /* ---------------------------------------------------------

     TIMER

  --------------------------------------------------------- */

  useEffect(() => {

    if (

      loading ||

      submitted ||

      seconds <= 0 ||

      questions.length === 0

    ) {

      return undefined;

    }

    const timer = setInterval(() => {

      setSeconds((previous) => Math.max(0, previous - 1));

    }, 1000);

    return () => clearInterval(timer);

  }, [loading, submitted, seconds, questions.length]);

  /* ---------------------------------------------------------

     AUTO OPEN SUBMIT MODAL WHEN TIME EXPIRES

  --------------------------------------------------------- */

  useEffect(() => {

    if (seconds === 0 && !submitted && questions.length > 0) {

      setShowSubmit(true);

    }

  }, [seconds, submitted, questions.length]);

  /* ---------------------------------------------------------

     DERIVED VALUES

  --------------------------------------------------------- */

  const question = questions[currentIndex];

  const answeredCount = Object.keys(answers).length;

  const markedCount = Object.values(marked).filter(Boolean).length;

  const selectedAnswer = question

  ? answers[question.questionId]

  : undefined;

  /* ---------------------------------------------------------

     ANSWER SELECTION

  --------------------------------------------------------- */

  // const selectAnswer = (answerIndex,question_id) => {

  //   setAnswers((previous) => ({

  //     ...previous,

  //     [currentIndex]: answerIndex,

  //   }));

  // };

  const selectAnswer = (answerIndex, questionId) => {

    setAnswers((previous) => ({

      ...previous,

      [questionId]: answerIndex,

    }));

  };

  // const clearAnswer = () => {

  //   setAnswers((previous) => {

  //     const next = { ...previous };

  //     delete next[currentIndex];

  //     return next;

  //   });

  // };

  const clearAnswer = () => {

    setAnswers((previous) => {

      const next = { ...previous };

      delete next[question.questionId];

      return next;

    });

  };

  /* ---------------------------------------------------------

     QUESTION NAVIGATION

  --------------------------------------------------------- */

  const previousQuestion = () => {

    setCurrentIndex((previous) => Math.max(0, previous - 1));

  };

  const nextQuestion = () => {

    if (currentIndex === questions.length - 1) {

      setShowSubmit(true);

      return;

    }

    console.log("answers", answers)

    setCurrentIndex((previous) => previous + 1);

  };

  const toggleMark = () => {

    setMarked((previous) => ({

      ...previous,

      [currentIndex]: !previous[currentIndex],

    }));

  };

  /* ---------------------------------------------------------

     EXIT ASSESSMENT

  --------------------------------------------------------- */

  const exitAssessment = () => {

    const shouldExit = window.confirm(

      "Are you sure you want to exit this assessment? Your progress may be lost."

    );

    if (shouldExit) {

      window.history.back();

    }

  };

  /* ---------------------------------------------------------

     SUBMIT ASSESSMENT

  --------------------------------------------------------- */

  const submitAssessment = () => {

    const payload = {

      assessmentId,

      mode,

      answers: questions.map((item) => ({

        questionId: item.questionId,

        // Selected option index: 0, 1, 2, 3...

        selectedAnswer: answers[item.questionId] ?? -1,

        // Selected option text

        selectedOption:

          answers[item.questionId] == null

            ? -1

            : item.options[answers[item.questionId]],

      })),

      submittedAt: new Date().toISOString(),

    };

    console.log("Final payload", payload)

    submitAssessmentResponse(payload)

    if (typeof onSubmit === "function") {

      onSubmit(payload);

    }

    setShowSubmit(false);

    setSubmitted(true);

  };

  /* ---------------------------------------------------------

     LOADING / ERROR / EMPTY STATES

  --------------------------------------------------------- */

  if (loading) {

    return <AssessmentLoading />;

  }

  if (loadError) {

    return (

      <AssessmentError

        message={loadError}

        onRetry={loadQuestions}

        onBack={() => window.history.back()}

      />

    );

  }

  if (questions.length === 0) {

    return (

      <div className="flex min-h-dvh items-center justify-center bg-[#f6f8ff] p-5">

        <div className="w-full max-w-md rounded-3xl border border-white bg-white p-8 text-center shadow-xl shadow-slate-200/60">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">

            <CircleHelp className="h-7 w-7" />

          </div>

          <h2 className="mt-5 text-xl font-extrabold text-slate-900">

            No questions available

          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">

            This assessment does not contain any questions.

          </p>

          <button

            type="button"

            onClick={() => window.history.back()}

            className={`${buttonBase} mt-6 h-11 w-full bg-blue-600 px-5 text-xs text-white hover:bg-blue-700`}

          >

            Go back

          </button>

        </div>

      </div>

    );

  }

  if (submitted) {

    return (

      <AssessmentComplete

        answered={answeredCount}

        total={questions.length}

        onResults={() => window.history.back()}

      />

    );

  }

  /* ---------------------------------------------------------

     MAIN ASSESSMENT UI

  --------------------------------------------------------- */

  return (

    <div
      onClick={() => {
        if (!document.fullscreenElement) {
          antiCheatRef.current?.startFullscreen();
        }
      }}
      className="relative flex h-dvh w-full flex-col overflow-hidden bg-[#f4f7ff] text-slate-900"
    >

      {/* Ambient background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />

      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">

        <AssessmentHeader

          mode={mode}

          current={currentIndex + 1}

          total={questions.length}

          seconds={seconds}

          onExit={exitAssessment}

        />

        <MobileQuestionPalette

          questions={questions}

          currentIndex={currentIndex}

          answers={answers}

          marked={marked}

          onNavigate={setCurrentIndex}

        />

        <main className="min-h-0 flex-1 p-3 sm:p-5 lg:p-6">

          <div className="mx-auto flex h-full min-h-0 max-w-[1600px] gap-5">

            <QuestionPalette

              questions={questions}

              currentIndex={currentIndex}

              answers={answers}

              marked={marked}

              onNavigate={setCurrentIndex}

            />

            <section className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-[0_15px_55px_rgba(30,41,59,0.07)] ring-1 ring-slate-200/80 sm:rounded-3xl">

              <div className="relative min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-8">

                <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50/20 blur-3xl" />

                <div className="relative">

                  <QuestionCard

                    question={question}

                    selectedAnswer={selectedAnswer}

                    onSelect={selectAnswer}

                  />

                </div>

              </div>

              <QuestionActions

                currentIndex={currentIndex}

                total={questions.length}

                marked={Boolean(marked[currentIndex])}

                selectedAnswer={selectedAnswer}

                onPrevious={previousQuestion}

                onNext={nextQuestion}

                onMark={toggleMark}

                onClear={clearAnswer}

              />

            </section>

          </div>

        </main>

        <footer className="relative z-10 hidden shrink-0 items-center justify-between border-t border-slate-200/70 bg-white/75 px-6 py-2.5 text-[10px] text-slate-400 backdrop-blur md:flex lg:px-8">

          <div className="flex items-center gap-2">

            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />

            <span>Stay focused. Do your best.</span>

          </div>

          <div className="flex items-center gap-2">

            <span>

              {mode === "aptitude" ? "Aptitude" : "Technical"} assessment

            </span>

            <span className="text-slate-300">•</span>

            <span>{questions.length} questions</span>

          </div>

        </footer>

      </div>

      {showSubmit && (

        <SubmitModal

          answered={answeredCount}

          total={questions.length}

          markedCount={markedCount}

          onClose={() => {

            if (seconds > 0) {

              setShowSubmit(false);

            }

          }}

          onSubmit={submitAssessment}

        />

      )}

    </div>

  );

}
