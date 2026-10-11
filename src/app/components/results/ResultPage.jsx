
// "use client";

// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowUpRight,
//   Award,
//   BarChart3,
//   BookOpen,
//   Check,
//   CheckCircle2,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   CircleHelp,
//   Clock3,
//   Download,
//   FileText,
//   Filter,
//   Layers3,
//   ListChecks,
//   Minus,
//   MoreHorizontal,
//   Search,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   TrendingUp,
//   Trophy,
//   X,
//   XCircle,
// } from "lucide-react";
// import { useTest } from "@/app/context/tests.context";
// import { useSearchParams } from "next/navigation";

// const result = {
//   title: "AI / ML Engineer Assessment",
//   subtitle: "Technical competency evaluation",
//   date: "11 October 2026",
//   duration: "42m 18s",
//   score: 80,
//   total: 30,
//   correct: 24,
//   incorrect: 4,
//   skipped: 2,
// };

// const questions = [
//   {
//     id: "Q01",
//     topic: "Machine Learning",
//     question: "What is the primary purpose of a validation dataset?",
//     selected: "To tune model parameters and evaluate generalization",
//     answer: "To tune model parameters and evaluate generalization",
//     status: "correct",
//   },
//   {
//     id: "Q02",
//     topic: "Model Optimization",
//     question: "Which approach is most effective for reducing overfitting?",
//     selected: "Increasing model complexity indefinitely",
//     answer: "Regularization and appropriate validation",
//     status: "incorrect",
//   },
//   {
//     id: "Q03",
//     topic: "Deep Learning",
//     question: "What does gradient descent optimize during training?",
//     selected: "The model's loss function",
//     answer: "The model's loss function",
//     status: "correct",
//   },
//   {
//     id: "Q04",
//     topic: "Model Evaluation",
//     question: "Which metrics are particularly useful for imbalanced classification?",
//     selected: "Not attempted",
//     answer: "Precision, recall, and F1-score",
//     status: "skipped",
//   },
// ];

// function cn(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// function StatusBadge({ status }) {
//   const config = {
//     correct: {
//       label: "Correct",
//       icon: CheckCircle2,
//       className: "border-emerald-200 bg-emerald-50 text-emerald-700",
//     },
//     incorrect: {
//       label: "Incorrect",
//       icon: XCircle,
//       className: "border-rose-200 bg-rose-50 text-rose-700",
//     },
//     skipped: {
//       label: "Skipped",
//       icon: Minus,
//       className: "border-amber-200 bg-amber-50 text-amber-700",
//     },
//   };

//   const item = config[status];
//   const Icon = item.icon;

//   return (
//     <span
//       className={cn(
//         "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold",
//         item.className
//       )}
//     >
//       <Icon size={13} strokeWidth={2.5} />
//       {item.label}
//     </span>
//   );
// }

// function StatCard({ label, value, detail, icon: Icon, tone }) {
//   const tones = {
//     blue: "bg-blue-50 text-blue-600 ring-blue-100",
//     green: "bg-emerald-50 text-emerald-600 ring-emerald-100",
//     red: "bg-rose-50 text-rose-600 ring-rose-100",
//     amber: "bg-amber-50 text-amber-600 ring-amber-100",
//   };

//   return (
//     <div className="group rounded-2xl border border-slate-200/90 bg-white p-5 transition-all duration-200 hover:border-slate-300 hover:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.18)] sm:p-6">
//       <div className="flex items-center justify-between gap-3">
//         <span className="text-[13px] font-semibold text-slate-500">
//           {label}
//         </span>
//         <span
//           className={cn(
//             "flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-inset",
//             tones[tone]
//           )}
//         >
//           <Icon size={19} />
//         </span>
//       </div>

//       <div className="mt-5 flex items-baseline gap-2">
//         <span className="text-3xl font-bold tracking-[-0.045em] text-slate-950">
//           {value}
//         </span>
//       </div>

//       <p className="mt-2 text-xs leading-5 text-slate-400">{detail}</p>
//     </div>
//   );
// }

// function SectionHeading({ eyebrow, title, description, icon: Icon }) {
//   return (
//     <div className="flex items-start gap-3">
//       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm">
//         <Icon size={19} />
//       </div>
//       <div className="min-w-0">
//         <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400">
//           {eyebrow}
//         </p>
//         <h2 className="mt-1 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
//           {title}
//         </h2>
//         <p className="mt-1 text-sm leading-6 text-slate-500">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function TestResultPage() {
//     const {fetchAssessmentResult} = useTest(); 
//     const searchParams = useSearchParams();

//     const assessmentId = searchParams.get("assessmentId");
//     useEffect(el=>{
//         fetchAssessmentResult(assessmentId);
//     },[])
//   const [filter, setFilter] = useState("all");
//   const [expanded, setExpanded] = useState("Q02");
//   const [search, setSearch] = useState("");

//   const filteredQuestions = questions.filter((question) => {
//     const matchesFilter = filter === "all" || question.status === filter;
//     const matchesSearch =
//       question.question.toLowerCase().includes(search.toLowerCase()) ||
//       question.topic.toLowerCase().includes(search.toLowerCase());

//     return matchesFilter && matchesSearch;
//   });

//   const accuracy = Math.round(
//     (result.correct / (result.correct + result.incorrect)) * 100
//   );

//   const distribution = [
//     {
//       label: "Correct",
//       value: result.correct,
//       color: "bg-emerald-500",
//       text: "text-emerald-700",
//     },
//     {
//       label: "Incorrect",
//       value: result.incorrect,
//       color: "bg-rose-500",
//       text: "text-rose-700",
//     },
//     {
//       label: "Skipped",
//       value: result.skipped,
//       color: "bg-amber-400",
//       text: "text-amber-700",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-[#f6f8fb] text-slate-900 selection:bg-blue-100">
//       {/* Navigation */}
//       <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
//         <div className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-7 lg:px-10">
//           <button
//             onClick={() => window.history.back()}
//             className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
//           >
//             <ArrowLeft size={17} />
//             <span className="hidden sm:inline">Assessments</span>
//           </button>

//           <div className="flex items-center gap-2.5">
//             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
//               <Layers3 size={17} />
//             </div>
//             <div>
//               <p className="text-sm font-bold tracking-tight text-slate-900">
//                 Assessment <span className="text-blue-600">Studio</span>
//               </p>
//               <p className="hidden text-[10px] font-medium text-slate-400 sm:block">
//                 PERFORMANCE CENTER
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={() => window.print()}
//             className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 transition hover:bg-slate-50 sm:px-4 sm:text-sm"
//           >
//             <Download size={15} />
//             <span className="hidden sm:inline">Export report</span>
//             <span className="sm:hidden">Export</span>
//           </button>
//         </div>
//       </header>

//       <div className="mx-auto max-w-[1440px] space-y-7 px-4 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
//         {/* Page heading */}
//         <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
//           <div>
//             <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
//               <span>Workspace</span>
//               <ChevronRight size={13} />
//               <span>Assessments</span>
//               <ChevronRight size={13} />
//               <span className="text-slate-700">Results</span>
//             </div>

//             <h1 className="mt-5 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl">
//               Assessment results
//             </h1>
//             <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
//               Your performance overview, assessment insights, and answer-by-answer analysis.
//             </p>
//           </div>

//           <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-xs font-bold text-emerald-700">
//             <ShieldCheck size={16} />
//             Submission verified
//           </div>
//         </div>

//         {/* Assessment identity */}
//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_-22px_rgba(15,23,42,0.2)]">
//           <div className="flex flex-col gap-6 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8">
//             <div className="flex min-w-0 items-start gap-4">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100">
//                 <FileText size={25} strokeWidth={1.8} />
//               </div>

//               <div className="min-w-0">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Technical assessment
//                   </span>
//                   <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700">
//                     <CheckCircle2 size={12} />
//                     Completed
//                   </span>
//                 </div>

//                 <h2 className="mt-3 break-words text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
//                   {result.title}
//                 </h2>
//                 <p className="mt-1.5 text-sm text-slate-500">
//                   {result.subtitle}
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-8 lg:shrink-0">
//               <div className="rounded-xl bg-slate-50 p-3 sm:bg-transparent sm:p-0">
//                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
//                   Submitted on
//                 </p>
//                 <p className="mt-2 text-xs font-bold text-slate-800 sm:text-sm">
//                   {result.date}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-slate-50 p-3 sm:bg-transparent sm:p-0">
//                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
//                   Time taken
//                 </p>
//                 <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-slate-800 sm:text-sm">
//                   <Clock3 size={14} className="text-slate-400" />
//                   {result.duration}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Score + insights */}
//         <section className="grid gap-5 xl:grid-cols-[0.92fr_1.58fr]">
//           {/* Main score */}
//           <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_-22px_rgba(15,23,42,0.2)] sm:p-8">
//             <div className="flex items-center justify-between">
//               <p className="text-sm font-bold text-slate-700">Overall score</p>
//               <button
//                 aria-label="Score information"
//                 className="text-slate-400 transition hover:text-slate-700"
//               >
//                 <CircleHelp size={17} />
//               </button>
//             </div>

//             <div className="mt-8 flex flex-col items-center">
//               <div className="relative h-52 w-52">
//                 <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
//                   <circle
//                     cx="100"
//                     cy="100"
//                     r="82"
//                     fill="none"
//                     stroke="#edf1f6"
//                     strokeWidth="12"
//                   />
//                   <circle
//                     cx="100"
//                     cy="100"
//                     r="82"
//                     fill="none"
//                     stroke="#2563eb"
//                     strokeWidth="12"
//                     strokeLinecap="round"
//                     strokeDasharray={`${2 * Math.PI * 82 * result.score / 100} ${2 * Math.PI * 82}`}
//                   />
//                 </svg>

//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <span className="text-[3.5rem] font-bold leading-none tracking-[-0.065em] text-slate-950">
//                     {result.score}
//                     <span className="text-2xl text-slate-400">%</span>
//                   </span>
//                   <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
//                     Final score
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700">
//                 <Award size={15} />
//                 Strong performance
//               </div>

//               <p className="mt-4 max-w-xs text-center text-sm leading-6 text-slate-500">
//                 You answered most questions correctly. Review the missed concepts to improve further.
//               </p>
//             </div>

//             <div className="mt-8 grid grid-cols-2 divide-x divide-slate-200 border-t border-slate-200 pt-5">
//               <div className="pr-4">
//                 <p className="text-xs text-slate-400">Marks obtained</p>
//                 <p className="mt-1 text-xl font-bold text-slate-900">
//                   {result.correct}
//                   <span className="text-sm font-medium text-slate-400">
//                     {" "}/ {result.total}
//                   </span>
//                 </p>
//               </div>
//               <div className="pl-5">
//                 <p className="text-xs text-slate-400">Answer accuracy</p>
//                 <p className="mt-1 text-xl font-bold text-slate-900">
//                   {accuracy}%
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Performance insights */}
//           <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_-22px_rgba(15,23,42,0.2)] sm:p-7 lg:p-8">
//             <SectionHeading
//               eyebrow="Performance analytics"
//               title="Your results at a glance"
//               description="A breakdown of your responses across the assessment."
//               icon={BarChart3}
//             />

//             <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
//               <StatCard
//                 label="Correct"
//                 value={result.correct}
//                 detail={`${Math.round(result.correct / result.total * 100)}% of total questions`}
//                 icon={CheckCircle2}
//                 tone="green"
//               />
//               <StatCard
//                 label="Incorrect"
//                 value={result.incorrect}
//                 detail={`${Math.round(result.incorrect / result.total * 100)}% of total questions`}
//                 icon={XCircle}
//                 tone="red"
//               />
//               <StatCard
//                 label="Skipped"
//                 value={result.skipped}
//                 detail={`${Math.round(result.skipped / result.total * 100)}% of total questions`}
//                 icon={Minus}
//                 tone="amber"
//               />
//             </div>

//             <div className="mt-8">
//               <div className="flex items-center justify-between gap-3">
//                 <p className="text-sm font-bold text-slate-800">
//                   Response distribution
//                 </p>
//                 <span className="text-xs font-medium text-slate-400">
//                   {result.total} questions
//                 </span>
//               </div>

//               <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-slate-100">
//                 {distribution.map((item) => (
//                   <div
//                     key={item.label}
//                     className={cn(item.color, "transition-all duration-700")}
//                     style={{
//                       width: `${item.value / result.total * 100}%`,
//                     }}
//                   />
//                 ))}
//               </div>

//               <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
//                 {distribution.map((item) => (
//                   <div key={item.label} className="flex items-center gap-2">
//                     <span className={cn("h-2.5 w-2.5 rounded-full", item.color)} />
//                     <span className="text-xs text-slate-500">{item.label}</span>
//                     <span className={cn("ml-auto text-xs font-bold", item.text)}>
//                       {item.value}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-7 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
//                 <TrendingUp size={18} />
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-slate-800">
//                   Your next improvement opportunity
//                 </p>
//                 <p className="mt-1 text-xs leading-5 text-slate-500">
//                   Focus on incorrect answers first, then revisit skipped questions to strengthen your understanding.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Detailed review */}
//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_-22px_rgba(15,23,42,0.2)]">
//           <div className="border-b border-slate-200 p-5 sm:p-7">
//             <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
//               <SectionHeading
//                 eyebrow="Question analysis"
//                 title="Review your answers"
//                 description="Inspect your selections and compare them with the correct answers."
//                 icon={BookOpen}
//               />

//               <div className="relative w-full lg:max-w-xs">
//                 <Search
//                   size={16}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />
//                 <input
//                   value={search}
//                   onChange={(event) => setSearch(event.target.value)}
//                   placeholder="Search questions..."
//                   className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
//                 />
//               </div>
//             </div>

//             <div className="mt-6 flex flex-wrap items-center gap-2">
//               <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
//                 <Filter size={14} />
//                 Filter
//               </span>

//               {[
//                 { id: "all", label: "All questions", count: questions.length },
//                 { id: "correct", label: "Correct", count: result.correct },
//                 { id: "incorrect", label: "Incorrect", count: result.incorrect },
//                 { id: "skipped", label: "Skipped", count: result.skipped },
//               ].map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => setFilter(item.id)}
//                   className={cn(
//                     "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition",
//                     filter === item.id
//                       ? "border-slate-900 bg-slate-900 text-white"
//                       : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                   )}
//                 >
//                   {item.label}
//                   <span
//                     className={cn(
//                       "rounded-md px-1.5 py-0.5 text-[10px]",
//                       filter === item.id
//                         ? "bg-white/15 text-white"
//                         : "bg-slate-100 text-slate-500"
//                     )}
//                   >
//                     {item.count}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-slate-100">
//             {filteredQuestions.map((question) => {
//               const open = expanded === question.id;

//               return (
//                 <article key={question.id}>
//                   <button
//                     onClick={() =>
//                       setExpanded(open ? null : question.id)
//                     }
//                     className="flex w-full items-start gap-3 p-4 text-left transition hover:bg-slate-50/80 sm:gap-4 sm:p-6"
//                   >
//                     <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[11px] font-bold tracking-wide text-slate-500">
//                       {question.id}
//                     </span>

//                     <span className="min-w-0 flex-1">
//                       <span className="block text-sm font-semibold leading-6 text-slate-900 sm:text-[15px]">
//                         {question.question}
//                       </span>
//                       <span className="mt-2 flex flex-wrap items-center gap-2">
//                         <span className="text-[11px] font-medium text-slate-400">
//                           {question.topic}
//                         </span>
//                         <StatusBadge status={question.status} />
//                       </span>
//                     </span>

//                     <span className="mt-2 shrink-0 text-slate-400">
//                       {open ? <X size={17} /> : <ChevronDown size={17} />}
//                     </span>
//                   </button>

//                   {open && (
//                     <div className="grid gap-3 bg-slate-50/70 px-4 pb-5 sm:grid-cols-2 sm:px-6 sm:pb-6">
//                       <div className="rounded-xl border border-slate-200 bg-white p-4">
//                         <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                           Your response
//                         </p>
//                         <p
//                           className={cn(
//                             "mt-3 text-sm font-semibold leading-6",
//                             question.status === "correct"
//                               ? "text-emerald-700"
//                               : question.status === "incorrect"
//                                 ? "text-rose-700"
//                                 : "text-slate-500"
//                           )}
//                         >
//                           {question.selected}
//                         </p>
//                       </div>

//                       <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
//                         <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700">
//                           Correct response
//                         </p>
//                         <p className="mt-3 text-sm font-semibold leading-6 text-slate-800">
//                           {question.answer}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </article>
//               );
//             })}

//             {filteredQuestions.length === 0 && (
//               <div className="px-5 py-14 text-center">
//                 <Search size={24} className="mx-auto text-slate-300" />
//                 <p className="mt-3 text-sm font-bold text-slate-700">
//                   No matching questions
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Try a different search term or filter.
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="flex flex-col justify-between gap-3 border-t border-slate-200 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:px-7">
//             <p className="text-xs text-slate-500">
//               Showing {filteredQuestions.length} preview questions
//             </p>
//             <div className="flex items-center gap-2">
//               <button
//                 disabled
//                 className="flex h-9 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-400"
//               >
//                 <ChevronLeft size={14} />
//                 Previous
//               </button>
//               <span className="flex h-9 items-center rounded-lg bg-slate-900 px-3 text-xs font-bold text-white">
//                 1
//               </span>
//               <button
//                 disabled
//                 className="flex h-9 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-400"
//               >
//                 Next
//                 <ChevronRight size={14} />
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Bottom action */}
//         <section className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:p-7">
//           <div className="flex items-start gap-3">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//               <Sparkles size={20} />
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">
//                 Ready to take the next step?
//               </p>
//               <p className="mt-1 text-sm leading-6 text-slate-500">
//                 Turn your assessment insights into a stronger preparation plan.
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={() => window.history.back()}
//             className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.98]"
//           >
//             Back to assessments
//             <ArrowUpRight size={16} />
//           </button>
//         </section>

//         <footer className="flex flex-col items-center justify-between gap-2 pb-4 text-[11px] text-slate-400 sm:flex-row">
//           <p>Assessment Studio · Performance report</p>
//           <p>Designed for focused learning and continuous improvement.</p>
//         </footer>
//       </div>

//       <style jsx global>{`
//         @media print {
//           header,
//           button,
//           input,
//           footer {
//             display: none !important;
//           }

//           body,
//           main {
//             background: white !important;
//           }

//           section,
//           article {
//             break-inside: avoid;
//             box-shadow: none !important;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  Download,
  FileText,
  Filter,
  Layers3,
  Minus,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
  XCircle,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTest } from "@/app/context/tests.context";

/* =========================================================
   HELPERS
========================================================= */

const cn = (...classes) => classes.filter(Boolean).join(" ");

function formatDate(value) {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Not available";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatDuration(value) {
  if (value === null || value === undefined || value === "") {
    return "Not available";
  }

  if (typeof value === "string") return value;

  const seconds = Number(value);

  if (!Number.isFinite(seconds) || seconds < 0) {
    return "Not available";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remaining = Math.floor(seconds % 60);

  if (hours > 0) return `${hours}h ${minutes}m ${remaining}s`;

  return `${minutes}m ${remaining}s`;
}

function getOptionText(option) {
  if (option == null) return "";

  if (typeof option === "string" || typeof option === "number") {
    return String(option);
  }

  return String(
    option.text ??
      option.label ??
      option.value ??
      option.option ??
      ""
  );
}

function getStatus(answer) {
  if (
    answer.status === "skipped" ||
    answer.selectedAnswer === -1 ||
    answer.selectedAnswer === null ||
    answer.selectedAnswer === undefined
  ) {
    return "skipped";
  }

  if (answer.status === "correct" || answer.isCorrect === true) {
    return "correct";
  }

  if (answer.status === "incorrect" || answer.isCorrect === false) {
    return "incorrect";
  }

  return "unknown";
}

function normalizeQuestion(answer, index) {
  const status = getStatus(answer);

  const options = Array.isArray(answer.options)
    ? answer.options
    : [];

  return {
    id: `Q${String(answer.questionNumber || index + 1).padStart(2, "0")}`,
    questionId: answer.questionId,
    question:
      answer.questionText ||
      answer.question ||
      "Question text unavailable",
    topic: answer.topic || answer.category || "General",
    difficulty: answer.difficulty || "Not specified",

    selected:
      answer.selectedOption ||
      (status === "skipped"
        ? "Not attempted"
        : "Answer unavailable"),

    correctAnswer:
      answer.correctAnswer ||
      "Correct answer unavailable",

    status,
    options,
    selectedAnswer: answer.selectedAnswer,
    correctAnswerIndex: answer.correctAnswerIndex,

    explanation:
      answer.explanation ||
      answer.solution ||
      "",

    // Conditional code-snippet rendering ke liye
    codeSnippet:
      answer.codeSnippet ||
      answer.code_snippet ||
      answer.questionCode ||
      answer.question_code ||
      answer.code ||
      "",

    language:
      answer.language ||
      answer.programmingLanguage ||
      "text",
  };
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ status }) {
  const config = {
    correct: {
      label: "Correct",
      icon: CheckCircle2,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    incorrect: {
      label: "Incorrect",
      icon: XCircle,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
    skipped: {
      label: "Skipped",
      icon: Minus,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
    unknown: {
      label: "Unverified",
      icon: CircleHelp,
      style: "border-slate-200 bg-slate-50 text-slate-600",
    },
  };

  const item = config[status] || config.unknown;
  const Icon = item.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold",
        item.style
      )}
    >
      <Icon size={13} />
      {item.label}
    </span>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ label, value, detail, icon: Icon, tone }) {
  const colors = {
    green: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    red: "bg-rose-50 text-rose-600 ring-rose-100",
    amber: "bg-amber-50 text-amber-600 ring-amber-100",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[13px] font-semibold text-slate-500">
          {label}
        </span>

        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-inset",
            colors[tone]
          )}
        >
          <Icon size={19} />
        </span>
      </div>

      <p className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-400">
        {detail}
      </p>
    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600">
        <Icon size={19} />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
          {title.split("-").join(" ").toUpperCase()}
        </h2>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   LOADING SCREEN
========================================================= */

function LoadingScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8fb] p-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <RefreshCw
          size={28}
          className="mx-auto animate-spin text-blue-600"
        />

        <h1 className="mt-5 text-lg font-bold text-slate-900">
          Loading assessment results
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Fetching your result and question analysis.
        </p>
      </div>
    </main>
  );
}

/* =========================================================
   ERROR SCREEN
========================================================= */

function ErrorScreen({ message, onRetry }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8fb] p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <XCircle size={30} className="mx-auto text-rose-500" />

        <h1 className="mt-4 text-xl font-bold text-slate-900">
          Unable to load results
        </h1>

        <p className="mt-2 break-words text-sm leading-6 text-slate-500">
          {message}
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700"
        >
          <RefreshCw size={15} />
          Try again
        </button>

        <button
          type="button"
          onClick={() => window.history.back()}
          className="ml-3 mt-6 text-sm font-semibold text-slate-500 hover:text-slate-900"
        >
          Go back
        </button>
      </div>
    </main>
  );
}

/* =========================================================
   MAIN RESULT PAGE
========================================================= */

export default function TestResultPage() {
  const { fetchAssessmentResult } = useTest();
  const searchParams = useSearchParams();
  const assessmentId = searchParams.get("assessmentId");

  const [result, setResult] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState("");

  /* Fetch result data */

  useEffect(() => {
    let cancelled = false;

    async function loadResult() {
      if (!assessmentId) {
        setError("Assessment ID is missing from the URL.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetchAssessmentResult(assessmentId);

        if (!response?.success || !response?.data) {
          throw new Error(
            response?.message || "Assessment result not found."
          );
        }

        const data = response.data;
        const score = data.score || {};
        const rawAnswers = Array.isArray(data.answers)
          ? data.answers
          : [];

        const normalizedQuestions = rawAnswers.map(normalizeQuestion);

        const correct = Number(score.correct ?? 0);
        const incorrect = Number(score.wrong ?? score.incorrect ?? 0);
        const skipped = Number(score.skipped ?? 0);
        const total = Number(score.totalQuestions ?? rawAnswers.length);
        const obtainedMarks = Number(score.obtainedMarks ?? correct);
        const totalMarks = Number(score.totalMarks ?? total);

        const percentage =
          score.percentage !== null && score.percentage !== undefined
            ? Number(score.percentage)
            : totalMarks > 0
              ? Math.round((obtainedMarks / totalMarks) * 100)
              : 0;

        if (cancelled) return;

        setResult({
          title: data.title || "Assessment Results",
          subtitle:
            data.role ||
            (data.mode === "aptitude"
              ? "Aptitude assessment"
              : "Technical competency evaluation"),
          mode: data.mode || "technical",
          date: formatDate(
            data.submittedAt || data.updatedAt || data.createdAt
          ),
          duration: formatDuration(data.duration),
          score: Number.isFinite(percentage) ? percentage : 0,
          total,
          correct,
          incorrect,
          skipped,
          obtainedMarks,
          totalMarks,
        });

        setQuestions(normalizedQuestions);

        setExpanded(
          normalizedQuestions.find((q) => q.status === "incorrect")?.id ||
            normalizedQuestions[0]?.id ||
            null
        );
      } catch (err) {
        console.error("Assessment result error:", err);

        if (!cancelled) {
          setError(
            err?.response?.data?.message ||
              err?.message ||
              "Something went wrong while loading results."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadResult();

    return () => {
      cancelled = true;
    };
  }, [assessmentId, fetchAssessmentResult]);

  /* Search and filters */

  const filteredQuestions = questions.filter((question) => {
    const matchesFilter =
      filter === "all" || question.status === filter;

    const term = search.trim().toLowerCase();

    const matchesSearch =
      !term ||
      question.question.toLowerCase().includes(term) ||
      question.topic.toLowerCase().includes(term) ||
      question.id.toLowerCase().includes(term);

    return matchesFilter && matchesSearch;
  });

  const attempted = result
    ? result.correct + result.incorrect
    : 0;

  const accuracy =
    attempted > 0
      ? Math.round((result.correct / attempted) * 100)
      : 0;

  const distribution = [
    {
      label: "Correct",
      value: result?.correct ?? 0,
      color: "bg-emerald-500",
      text: "text-emerald-700",
    },
    {
      label: "Incorrect",
      value: result?.incorrect ?? 0,
      color: "bg-rose-500",
      text: "text-rose-700",
    },
    {
      label: "Skipped",
      value: result?.skipped ?? 0,
      color: "bg-amber-400",
      text: "text-amber-700",
    },
  ];

  if (loading) return <LoadingScreen />;

  if (error || !result) {
    return (
      <ErrorScreen
        message={error || "Assessment result is unavailable."}
        onRetry={() => window.location.reload()}
      />
    );
  }

  /* Page */

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-7 lg:px-10">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={17} />
            <span className="hidden sm:inline">Assessments</span>
          </button>

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
              <Layers3 size={17} />
            </div>

            <div>
              <p className="text-sm font-bold">
                Assessment <span className="text-blue-600">Studio</span>
              </p>
              <p className="hidden text-[10px] font-medium text-slate-400 sm:block">
                PERFORMANCE CENTER
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 hover:bg-slate-50 sm:px-4 sm:text-sm"
          >
            <Download size={15} />
            <span className="hidden sm:inline">Export report</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] space-y-7 px-4 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
        {/* Page heading */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Workspace</span>
              <ChevronRight size={13} />
              <span>Assessments</span>
              <ChevronRight size={13} />
              <span className="text-slate-700">Results</span>
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Assessment results
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Your performance overview, assessment insights, and
              answer-by-answer analysis.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-xs font-bold text-emerald-700">
            <ShieldCheck size={16} />
            Submission verified
          </div>
        </div>

        {/* Assessment information */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-6 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="flex min-w-0 items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FileText size={25} />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {result.mode === "aptitude"
                      ? "Aptitude assessment"
                      : "Technical assessment"}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                    <CheckCircle2 size={12} />
                    Completed
                  </span>
                </div>

                <h2 className="mt-3 break-words text-xl font-bold text-slate-950 sm:text-2xl">
                  {result.title.split("-").join(" ").toUpperCase()}
                </h2>

                <p className="mt-1.5 text-sm text-slate-500">
                  {result.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-8">
              <div className="rounded-xl bg-slate-50 p-3 sm:bg-transparent sm:p-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Submitted on
                </p>
                <p className="mt-2 text-xs font-bold text-slate-800 sm:text-sm">
                  {result.date}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3 sm:bg-transparent sm:p-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Time Given
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-slate-800 sm:text-sm">
                  <Clock3 size={14} className="text-slate-400" />
                  {result.duration || "1 Hr"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Score and analytics */}
        <section className="grid gap-5 xl:grid-cols-[0.92fr_1.58fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-700">Overall score</p>
              <CircleHelp size={17} className="text-slate-400" />
            </div>

            <div className="mt-8 flex flex-col items-center">
              <div className="relative h-52 w-52">
                <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r="82"
                    fill="none"
                    stroke="#edf1f6"
                    strokeWidth="12"
                  />

                  <circle
                    cx="100"
                    cy="100"
                    r="82"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 82 * Math.max(0, Math.min(100, result.score)) / 100} ${2 * Math.PI * 82}`}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[3.5rem] font-bold leading-none tracking-tight text-slate-950">
                    {result.score}
                    <span className="text-2xl text-slate-400">%</span>
                  </span>

                  <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Final score
                  </span>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700">
                <Award size={15} />
                {result.score >= 80
                  ? "Strong performance"
                  : result.score >= 60
                    ? "Good progress"
                    : "Improvement opportunity"}
              </div>

              <p className="mt-4 max-w-xs text-center text-sm leading-6 text-slate-500">
                Review incorrect and skipped questions to identify areas
                where you can improve.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 divide-x divide-slate-200 border-t border-slate-200 pt-5">
              <div className="pr-4">
                <p className="text-xs text-slate-400">Marks obtained</p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  {result.obtainedMarks}
                  <span className="text-sm font-medium text-slate-400">
                    {" "}/ {result.totalMarks}
                  </span>
                </p>
              </div>

              <div className="pl-5">
                <p className="text-xs text-slate-400">Answer accuracy</p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  {accuracy}%
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
            <SectionHeading
              eyebrow="Performance analytics"
              title="Your results at a glance"
              description="A breakdown of your responses across the assessment."
              icon={BarChart3}
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <StatCard
                label="Correct"
                value={result.correct}
                detail={`${result.total ? Math.round((result.correct / result.total) * 100) : 0}% of total questions`}
                icon={CheckCircle2}
                tone="green"
              />

              <StatCard
                label="Incorrect"
                value={result.incorrect}
                detail={`${result.total ? Math.round((result.incorrect / result.total) * 100) : 0}% of total questions`}
                icon={XCircle}
                tone="red"
              />

              <StatCard
                label="Skipped"
                value={result.skipped}
                detail={`${result.total ? Math.round((result.skipped / result.total) * 100) : 0}% of total questions`}
                icon={Minus}
                tone="amber"
              />
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-slate-800">
                  Response distribution
                </p>
                <span className="text-xs text-slate-400">
                  {result.total} questions
                </span>
              </div>

              <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-slate-100">
                {distribution.map((item) => (
                  <div
                    key={item.label}
                    className={cn(item.color, "transition-all")}
                    style={{
                      width: result.total
                        ? `${(item.value / result.total) * 100}%`
                        : "0%",
                    }}
                  />
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {distribution.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className={cn("h-2.5 w-2.5 rounded-full", item.color)} />
                    <span className="text-xs text-slate-500">{item.label}</span>
                    <span className={cn("ml-auto text-xs font-bold", item.text)}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
              <TrendingUp size={19} className="mt-1 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Your next improvement opportunity
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Focus on incorrect answers first, then revisit skipped
                  questions to strengthen your understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Question review */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5 sm:p-7">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <SectionHeading
                eyebrow="Question analysis"
                title="Review your answers"
                description="Inspect your selections, code snippets, and correct answers."
                icon={BookOpen}
              />

              <div className="relative w-full lg:max-w-xs">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search questions..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <Filter size={14} />
                Filter
              </span>

              {[
                { id: "all", label: "All questions" },
                { id: "correct", label: "Correct" },
                { id: "incorrect", label: "Incorrect" },
                { id: "skipped", label: "Skipped" },
              ].map((item) => {
                const count =
                  item.id === "all"
                    ? questions.length
                    : questions.filter((q) => q.status === item.id).length;

                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setFilter(item.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold",
                      filter === item.id
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {item.label}

                    <span
                      className={cn(
                        "rounded-md px-1.5 py-0.5 text-[10px]",
                        filter === item.id
                          ? "bg-white/15 text-white"
                          : "bg-slate-100 text-slate-500"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredQuestions.map((question) => {
              const isOpen = expanded === question.id;

              return (
                <article key={question.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isOpen ? null : question.id)
                    }
                    className="flex w-full items-start gap-3 p-4 text-left transition hover:bg-slate-50 sm:gap-4 sm:p-6"
                  >
                    <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-[11px] font-bold text-slate-500">
                      {question.id}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-6 text-slate-900 sm:text-[15px]">
                        {question.question}
                      </span>

                      <span className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] text-slate-400">
                          {question.topic}
                        </span>

                        {question.codeSnippet && (
                          <span className="inline-flex items-center gap-1 rounded-md bg-violet-50 px-2 py-1 text-[10px] font-bold text-violet-700">
                            <Code2 size={12} />
                            Code question
                          </span>
                        )}

                        <StatusBadge status={question.status} />
                      </span>
                    </span>

                    <span className="mt-2 shrink-0 text-slate-400">
                      {isOpen ? <X size={17} /> : <ChevronDown size={17} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="space-y-3 bg-slate-50/70 px-4 pb-5 sm:px-6 sm:pb-6">
                      {/* CODE SNIPPET: only render when code exists */}
                      {question.codeSnippet && (
                        <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0b1220]">
                          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                              <Code2 size={15} className="text-violet-300" />
                              Question code
                            </div>

                            <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold uppercase text-slate-300">
                              {question.language}
                            </span>
                          </div>

                          <pre className="max-w-full overflow-x-auto p-4 text-[12px] leading-6 text-slate-100 sm:text-[13px]">
                            <code>{question.codeSnippet}</code>
                          </pre>
                        </div>
                      )}

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-slate-200 bg-white p-4">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Your response
                          </p>

                          <p
                            className={cn(
                              "mt-3 break-words text-sm font-semibold leading-6",
                              question.status === "correct"
                                ? "text-emerald-700"
                                : question.status === "incorrect"
                                  ? "text-rose-700"
                                  : "text-slate-500"
                            )}
                          >
                            {question.selected}
                          </p>
                        </div>

                        <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                            Correct response
                          </p>

                          <p className="mt-3 break-words text-sm font-semibold leading-6 text-slate-800">
                            {question.correctAnswer}
                          </p>
                        </div>
                      </div>

                      {question.options.length > 0 && (
                        <div className="rounded-xl border border-slate-200 bg-white p-4">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Answer options
                          </p>

                          <div className="mt-3 space-y-2">
                            {question.options.map((option, index) => {
                              const selected =
                                Number(question.selectedAnswer) === index;

                              const correct =
                                question.correctAnswerIndex !== null &&
                                question.correctAnswerIndex !== undefined &&
                                Number(question.correctAnswerIndex) === index;

                              return (
                                <div
                                  key={`${question.id}-option-${index}`}
                                  className={cn(
                                    "flex items-start gap-3 rounded-lg border p-3 text-sm",
                                    correct
                                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                      : selected
                                        ? "border-rose-200 bg-rose-50 text-rose-800"
                                        : "border-slate-100 bg-white text-slate-600"
                                  )}
                                >
                                  <span className="font-bold">
                                    {String.fromCharCode(65 + index)}.
                                  </span>

                                  <span className="min-w-0 flex-1 break-words">
                                    {getOptionText(option)}
                                  </span>

                                  {correct && (
                                    <CheckCircle2
                                      size={16}
                                      className="shrink-0 text-emerald-600"
                                    />
                                  )}

                                  {selected && !correct && (
                                    <XCircle
                                      size={16}
                                      className="shrink-0 text-rose-600"
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {question.explanation && (
                        <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                            Explanation
                          </p>

                          <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}

            {filteredQuestions.length === 0 && (
              <div className="px-5 py-14 text-center">
                <Search size={24} className="mx-auto text-slate-300" />

                <p className="mt-3 text-sm font-bold text-slate-700">
                  No matching questions
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Try a different search term or filter.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between gap-3 border-t border-slate-200 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:px-7">
            <p className="text-xs text-slate-500">
              Showing {filteredQuestions.length} of {questions.length} questions
            </p>

            <button
              type="button"
              onClick={() => {
                setFilter("all");
                setSearch("");
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-800"
            >
              Clear filters
            </button>
          </div>
        </section>

        {/* Bottom action */}
        <section className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:p-7 print:hidden">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Ready to take the next step?
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Turn your assessment insights into a stronger preparation plan.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700"
          >
            Back to assessments
            <ArrowUpRight size={16} />
          </button>
        </section>

        <footer className="flex flex-col items-center justify-between gap-2 pb-4 text-[11px] text-slate-400 sm:flex-row print:hidden">
          <p>Intercracks · Performance report</p>
          <p>Designed for focused learning and continuous improvement.</p>
        </footer>
      </div>

      <style jsx global>{`
        @media print {
          header,
          button,
          input,
          footer {
            display: none !important;
          }

          body,
          main {
            background: white !important;
          }

          section,
          article {
            break-inside: avoid;
            box-shadow: none !important;
          }

          pre {
            white-space: pre-wrap !important;
          }
        }
      `}</style>
    </main>
  );
}
