// "use client";

// import { useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   ChevronDown,
//   ChevronUp,
//   CircleAlert,
//   Clock3,
//   Sparkles,
//   Target,
//   TrendingUp,
//   AlertTriangle,
//   Lightbulb,
// } from "lucide-react";

// // ============================================================
// // MOCK ASSESSMENT RESULT DATA
// // Replace this object with Evaluation Engine API response later
// // ============================================================

// const assessmentResult = {
//   company: "Google",
//   role: "SDE-1",
//   type: "Company Simulation",
//   completed: "12 Sep 2026",
//   duration: "87 min",

//   readiness: {
//     score: 82,
//     threshold: 85,
//     status: "Almost Ready",
//     previousScore: 74,
//     assessmentsCompleted: 3,
//   },

//   summary: {
//     strongest: {
//       label: "Problem Solving / DSA",
//       score: 86,
//     },
//     weakest: {
//       label: "Behavioral / Interview Skills",
//       score: 73,
//     },
//     biggestRisk: "Unstructured technical explanations",
//     text:
//       "You demonstrated strong problem-solving ability and solid technical fundamentals. Your biggest risk is not technical correctness, but how clearly you communicate your reasoning under interview pressure.",
//   },

//   dimensions: [
//     {
//       name: "Problem Solving / DSA",
//       score: 86,
//       weight: 30,
//     },
//     {
//       name: "Technical Knowledge",
//       score: 81,
//       weight: 20,
//     },
//     {
//       name: "Communication & Explanation",
//       score: 76,
//       weight: 15,
//     },
//     {
//       name: "Code Quality / Debugging",
//       score: 84,
//       weight: 15,
//     },
//     {
//       name: "Reasoning & Trade-offs",
//       score: 79,
//       weight: 10,
//     },
//     {
//       name: "Behavioral / Interview Skills",
//       score: 73,
//       weight: 10,
//     },
//   ],

//   rounds: [
//     {
//       id: 1,
//       name: "Coding",
//       score: 86,
//       status: "Passed",
//       duration: "42 min",
//       performance: "Strong",
//       wentWell:
//         "Reached an optimal solution and handled edge cases correctly.",
//       hurtScore:
//         "Initial approach took longer than expected.",
//     },
//     {
//       id: 2,
//       name: "Technical Interview",
//       score: 79,
//       status: "Passed",
//       duration: "31 min",
//       performance: "Good",
//       wentWell:
//         "Strong understanding of backend fundamentals.",
//       hurtScore:
//         "Trade-offs were not consistently explained.",
//     },
//     {
//       id: 3,
//       name: "Behavioral Interview",
//       score: 73,
//       status: "Needs Improvement",
//       duration: "14 min",
//       performance: "Needs Improvement",
//       wentWell: "Good ownership examples.",
//       hurtScore:
//         "Answers lacked a consistent STAR structure.",
//     },
//   ],

//   rejectionReasons: [
//     {
//       id: 1,
//       priority: "High Impact",
//       title: "Unstructured Technical Explanations",
//       evidence:
//         "Your solution was technically correct, but your explanation moved between implementation details and reasoning without a clear structure.",
//       why:
//         "Interviewers need to quickly understand how you think. Unstructured reasoning can make a strong solution appear weaker.",
//       detected: "2 of 3 rounds",
//       action:
//         "Practice explaining solutions using: Approach → Why → Complexity → Edge Cases → Trade-offs",
//       cta: "Practice This",
//     },
//     {
//       id: 2,
//       priority: "Medium Impact",
//       title: "Weak Trade-off Justification",
//       evidence:
//         "You identified the right architecture but struggled to explain why one approach was preferable to another.",
//       why:
//         "Technical interviews evaluate engineering judgment, not just knowledge.",
//       detected: "1 technical round",
//       action:
//         "Practice comparing two valid solutions and clearly explaining the engineering trade-offs.",
//       cta: "Practice Trade-offs",
//     },
//     {
//       id: 3,
//       priority: "Medium Impact",
//       title: "Behavioral Answer Structure",
//       evidence:
//         "Your examples were relevant but lacked a clear Situation → Task → Action → Result structure.",
//       why:
//         "Unstructured behavioral answers make it harder to demonstrate ownership and impact.",
//       detected: "Behavioral round",
//       action:
//         "Practice answering behavioral questions using the STAR framework.",
//       cta: "Practice Behavioral Questions",
//     },
//   ],

//   weaknesses: [
//     {
//       id: 1,
//       category: "Communication & Explanation",
//       title: "Answer Structure",
//       score: 76,
//       severity: "High Priority",
//       frequency: "Detected 3 times",
//       trend: "Recurring",
//       observation:
//         "You frequently moved into implementation details before establishing a clear approach.",
//       why:
//         "A strong structure helps the interviewer follow your reasoning and evaluate your engineering judgment.",
//       evidence:
//         "Across multiple technical responses, the solution explanation started with implementation details before the overall approach was established.",
//       improve:
//         "Use a consistent structure: Approach → Why → Complexity → Edge Cases → Trade-offs.",
//       practice: "Complete 3 structured technical explanation drills.",
//     },
//     {
//       id: 2,
//       category: "Reasoning & Trade-offs",
//       title: "Trade-off Justification",
//       score: 79,
//       severity: "Medium Priority",
//       frequency: "Detected 2 times",
//       trend: "Recurring",
//       observation:
//         "You reached reasonable architecture decisions but did not always explain alternatives.",
//       why:
//         "Interviewers use trade-off discussions to evaluate engineering maturity.",
//       evidence:
//         "One system design discussion showed the preferred architecture without clearly comparing it against alternatives.",
//       improve:
//         "For every architecture decision, state the alternative, benefit, cost and reason for choosing your approach.",
//       practice: "Complete 3 trade-off scenarios.",
//     },
//     {
//       id: 3,
//       category: "Behavioral / Interview Skills",
//       title: "Behavioral Answer Structure",
//       score: 73,
//       severity: "Medium Priority",
//       frequency: "Detected 1 time",
//       trend: "Needs Attention",
//       observation:
//         "Your examples were relevant but the story structure was difficult to follow.",
//       why:
//         "Clear behavioral stories make ownership and impact easier to evaluate.",
//       evidence:
//         "Your behavioral response contained a strong example but did not clearly separate the situation, action and measurable result.",
//       improve:
//         "Use Situation → Task → Action → Result and finish with measurable impact.",
//       practice: "Complete 5 behavioral questions.",
//     },
//   ],

//   strengths: [
//     {
//       title: "Strong DSA fundamentals",
//       description:
//         "You consistently identified efficient approaches and handled important edge cases.",
//     },
//     {
//       title: "Good debugging ability",
//       description:
//         "You were able to isolate implementation issues without losing track of the core problem.",
//     },
//     {
//       title: "Solid backend knowledge",
//       description:
//         "Your understanding of backend fundamentals was strong throughout the technical discussion.",
//     },
//     {
//       title: "Correct handling of edge cases",
//       description:
//         "You actively considered uncommon inputs instead of focusing only on the happy path.",
//     },
//   ],

//   improvementPlan: [
//     {
//       priority: 1,
//       title: "Communication & Explanation",
//       goal: "Structure technical answers clearly.",
//       practice: "Complete 3 structured technical explanation drills.",
//       time: "30 min",
//     },
//     {
//       priority: 2,
//       title: "Reasoning & Trade-offs",
//       goal: "Explain why you choose one solution over another.",
//       practice: "Complete 3 trade-off scenarios.",
//       time: "30 min",
//     },
//     {
//       priority: 3,
//       title: "Behavioral",
//       goal: "Answer behavioral questions using STAR.",
//       practice: "Complete 5 behavioral questions.",
//       time: "25 min",
//     },
//   ],

//   history: [
//     { label: "Assessment 1", score: 62 },
//     { label: "Assessment 2", score: 74 },
//     { label: "Assessment 3", score: 82 },
//   ],
// };

// // ============================================================
// // HELPERS
// // ============================================================

// const getScoreColor = (score) => {
//   if (score < 50) return "bg-red-500";
//   if (score < 65) return "bg-orange-500";
//   if (score < 80) return "bg-blue-500";
//   return "bg-emerald-500";
// };

// const getPerformanceLabel = (score) => {
//   if (score >= 85) return "Strong";
//   if (score >= 75) return "Good";
//   return "Needs Improvement";
// };

// // ============================================================
// // READINESS RING
// // ============================================================

// function ReadinessRing({ score }) {
//   const radius = 72;
//   const circumference = 2 * Math.PI * radius;
//   const progress = circumference - (score / 100) * circumference;

//   return (
//     <div className="relative w-44 h-44 mx-auto">
//       <svg
//         viewBox="0 0 180 180"
//         className="w-full h-full -rotate-90"
//       >
//         <circle
//           cx="90"
//           cy="90"
//           r={radius}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="10"
//           className="text-blue-100"
//         />

//         <circle
//           cx="90"
//           cy="90"
//           r={radius}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="10"
//           strokeLinecap="round"
//           strokeDasharray={circumference}
//           strokeDashoffset={progress}
//           className="text-blue-600 transition-all duration-700"
//         />
//       </svg>

//       <div className="absolute inset-0 flex flex-col items-center justify-center">
//         <span className="text-4xl font-bold tracking-tight text-slate-900">
//           {score}
//         </span>

//         <span className="text-sm font-medium text-slate-400">
//           /100
//         </span>
//       </div>
//     </div>
//   );
// }

// // ============================================================
// // READINESS HERO
// // ============================================================

// function ReadinessHero({ data }) {
//   return (
//     <section className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
//       <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
//         <div className="p-6 sm:p-8 lg:p-10">
//           <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
//             Overall Readiness
//           </p>

//           <div className="flex flex-wrap items-end gap-3 mt-3">
//             <span className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
//               {data.score}
//             </span>

//             <span className="text-lg font-medium text-slate-400 mb-2">
//               / 100
//             </span>

//             <span className="mb-2 inline-flex px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wide text-blue-700">
//               {data.status}
//             </span>
//           </div>

//           <p className="mt-4 max-w-xl text-sm sm:text-base leading-7 text-slate-600">
//             You're close to interview-ready, but a few recurring
//             weaknesses could still affect your performance in a real
//             interview.
//           </p>

//           {/* Threshold */}
//           <div className="mt-8 max-w-xl">
//             <div className="relative">
//               <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
//                 <div
//                   className="h-full rounded-full bg-blue-600 transition-all duration-700"
//                   style={{ width: `${data.score}%` }}
//                 />
//               </div>

//               <div
//                 className="absolute top-[-5px] w-0.5 h-5 bg-slate-700"
//                 style={{ left: `${data.threshold}%` }}
//               />
//             </div>

//             <div className="flex justify-between mt-2 text-[11px] text-slate-400">
//               <span>0</span>

//               <span className="font-semibold text-slate-600">
//                 85 — Ready threshold
//               </span>

//               <span>100</span>
//             </div>
//           </div>

//           {/* Comparison */}
//           <div className="grid grid-cols-3 gap-3 mt-8 max-w-xl">
//             <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
//               <p className="text-xs text-slate-400">
//                 Assessments
//               </p>
//               <p className="mt-1 text-lg font-bold text-slate-900">
//                 {data.assessmentsCompleted}
//               </p>
//             </div>

//             <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
//               <p className="text-xs text-slate-400">
//                 Previous
//               </p>
//               <p className="mt-1 text-lg font-bold text-slate-900">
//                 {data.previousScore}
//               </p>
//             </div>

//             <div className="rounded-xl bg-blue-50 border border-blue-100 p-3">
//               <p className="text-xs text-blue-500">
//                 Improvement
//               </p>
//               <p className="mt-1 text-lg font-bold text-blue-700">
//                 +{data.score - data.previousScore}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-blue-50/60 border-t lg:border-t-0 lg:border-l border-blue-100 p-6 sm:p-8 flex flex-col justify-center">
//           <ReadinessRing score={data.score} />

//           <div className="text-center mt-3">
//             <p className="font-bold text-slate-900">
//               Almost Ready
//             </p>

//             <p className="text-xs text-slate-500 mt-1">
//               {data.threshold - data.score} points from the readiness threshold
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ============================================================
// // AI SUMMARY
// // ============================================================

// function AISummary({ data }) {
//   return (
//     <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
//       <div className="flex items-center gap-2">
//         <div className="w-9 h-9 rounded-xl bg-white border border-blue-100 flex items-center justify-center">
//           <Sparkles size={17} className="text-blue-600" />
//         </div>

//         <div>
//           <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
//             AI Assessment Summary
//           </p>

//           <p className="font-bold text-slate-900">
//             Expert-style performance verdict
//           </p>
//         </div>
//       </div>

//       <p className="mt-5 text-sm leading-7 text-slate-700">
//         {data.text}
//       </p>

//       <div className="grid sm:grid-cols-3 gap-3 mt-5">
//         <div className="bg-white rounded-xl border border-blue-100 p-4">
//           <p className="text-xs font-semibold text-slate-400">
//             Strongest Area
//           </p>
//           <p className="mt-2 text-sm font-semibold text-slate-900">
//             {data.strongest.label}
//           </p>
//           <p className="mt-1 text-lg font-bold text-emerald-600">
//             {data.strongest.score}
//           </p>
//         </div>

//         <div className="bg-white rounded-xl border border-blue-100 p-4">
//           <p className="text-xs font-semibold text-slate-400">
//             Weakest Area
//           </p>
//           <p className="mt-2 text-sm font-semibold text-slate-900">
//             {data.weakest.label}
//           </p>
//           <p className="mt-1 text-lg font-bold text-orange-500">
//             {data.weakest.score}
//           </p>
//         </div>

//         <div className="bg-white rounded-xl border border-blue-100 p-4">
//           <p className="text-xs font-semibold text-slate-400">
//             Biggest Risk
//           </p>
//           <p className="mt-2 text-sm font-semibold leading-5 text-slate-900">
//             {data.biggestRisk}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ============================================================
// // SCORE DIMENSION
// // ============================================================

// function ScoreDimension({ dimension }) {
//   const performance = getPerformanceLabel(dimension.score);

//   return (
//     <div className="py-4 border-b border-slate-100 last:border-0">
//       <div className="flex items-center justify-between gap-4">
//         <div className="min-w-0">
//           <p className="text-sm font-semibold text-slate-800">
//             {dimension.name}
//           </p>

//           <p className="text-xs text-slate-400 mt-1">
//             Weight: {dimension.weight}%
//           </p>
//         </div>

//         <div className="text-right shrink-0">
//           <p className="font-bold text-slate-900">
//             {dimension.score}
//           </p>

//           <p className="text-xs text-slate-500">
//             {performance}
//           </p>
//         </div>
//       </div>

//       <div className="h-2 rounded-full bg-slate-100 overflow-hidden mt-3">
//         <div
//           className={`h-full rounded-full ${getScoreColor(
//             dimension.score
//           )}`}
//           style={{ width: `${dimension.score}%` }}
//         />
//       </div>
//     </div>
//   );
// }

// // ============================================================
// // ROUND RESULT
// // ============================================================

// function RoundResult({ round, defaultOpen = false }) {
//   const [open, setOpen] = useState(defaultOpen);

//   return (
//     <div className="border border-slate-100 rounded-2xl bg-white overflow-hidden">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition"
//       >
//         <div className="flex items-center gap-4 min-w-0">
//           <div
//             className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
//               round.status === "Passed"
//                 ? "bg-emerald-50 text-emerald-600"
//                 : "bg-orange-50 text-orange-600"
//             }`}
//           >
//             {round.status === "Passed" ? (
//               <CheckCircle2 size={19} />
//             ) : (
//               <AlertTriangle size={19} />
//             )}
//           </div>

//           <div className="min-w-0">
//             <p className="text-xs text-slate-400 font-semibold">
//               Round {round.id}
//             </p>

//             <h4 className="font-bold text-slate-900 truncate">
//               {round.name}
//             </h4>
//           </div>
//         </div>

//         <div className="flex items-center gap-4 shrink-0">
//           <div className="hidden sm:block text-right">
//             <p className="text-lg font-bold text-slate-900">
//               {round.score}
//               <span className="text-xs text-slate-400 font-medium">
//                 {" "}
//                 / 100
//               </span>
//             </p>

//             <p className="text-xs text-slate-400">
//               {round.duration}
//             </p>
//           </div>

//           {open ? (
//             <ChevronUp size={18} className="text-slate-400" />
//           ) : (
//             <ChevronDown size={18} className="text-slate-400" />
//           )}
//         </div>
//       </button>

//       {open && (
//         <div className="px-5 pb-5">
//           <div className="grid sm:grid-cols-2 gap-3 mb-4">
//             <div className="rounded-xl bg-slate-50 p-4">
//               <p className="text-xs text-slate-400">
//                 Performance
//               </p>
//               <p className="mt-1 text-sm font-semibold text-slate-800">
//                 {round.performance}
//               </p>
//             </div>

//             <div className="rounded-xl bg-slate-50 p-4">
//               <p className="text-xs text-slate-400">
//                 Status
//               </p>
//               <p
//                 className={`mt-1 text-sm font-semibold ${
//                   round.status === "Passed"
//                     ? "text-emerald-600"
//                     : "text-orange-600"
//                 }`}
//               >
//                 {round.status}
//               </p>
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-4">
//             <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
//               <p className="text-xs font-bold text-emerald-700">
//                 What went well
//               </p>

//               <p className="mt-2 text-sm leading-6 text-slate-600">
//                 {round.wentWell}
//               </p>
//             </div>

//             <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-4">
//               <p className="text-xs font-bold text-orange-700">
//                 What hurt your score
//               </p>

//               <p className="mt-2 text-sm leading-6 text-slate-600">
//                 {round.hurtScore}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ============================================================
// // REJECTION REASON
// // ============================================================

// function RejectionReason({ item, onPractice }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
//       <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
//         <div className="flex gap-3">
//           <div className="w-9 h-9 shrink-0 rounded-xl bg-orange-50 flex items-center justify-center">
//             <CircleAlert size={18} className="text-orange-600" />
//           </div>

//           <div>
//             <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
//               {item.priority}
//             </span>

//             <h4 className="mt-1 text-base font-bold text-slate-900">
//               {item.title}
//             </h4>
//           </div>
//         </div>

//         <span className="text-xs font-medium text-slate-400">
//           {item.detected}
//         </span>
//       </div>

//       <div className="grid sm:grid-cols-2 gap-5 mt-5">
//         <div>
//           <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
//             Evidence
//           </p>

//           <p className="mt-2 text-sm leading-6 text-slate-600">
//             {item.evidence}
//           </p>
//         </div>

//         <div>
//           <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
//             Why interviewer cares
//           </p>

//           <p className="mt-2 text-sm leading-6 text-slate-600">
//             {item.why}
//           </p>
//         </div>
//       </div>

//       <div className="mt-5 rounded-xl bg-blue-50/70 border border-blue-100 p-4">
//         <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
//           Recommended action
//         </p>

//         <p className="mt-2 text-sm leading-6 text-slate-700">
//           {item.action}
//         </p>

//         <button
//           onClick={() => onPractice?.(item)}
//           className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
//         >
//           {item.cta}
//           <ArrowRight size={15} />
//         </button>
//       </div>
//     </div>
//   );
// }

// // ============================================================
// // WEAKNESS CARD
// // ============================================================

// function WeaknessCard({ weakness }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full p-5 text-left"
//       >
//         <div className="flex items-start justify-between gap-4">
//           <div>
//             <p className="text-xs font-semibold text-blue-600">
//               {weakness.category}
//             </p>

//             <h4 className="mt-1 font-bold text-slate-900">
//               {weakness.title}
//             </h4>
//           </div>

//           {open ? (
//             <ChevronUp
//               size={18}
//               className="text-slate-400 shrink-0"
//             />
//           ) : (
//             <ChevronDown
//               size={18}
//               className="text-slate-400 shrink-0"
//             />
//           )}
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
//           <div>
//             <p className="text-xs text-slate-400">
//               Current Score
//             </p>
//             <p className="mt-1 font-bold text-slate-900">
//               {weakness.score}/100
//             </p>
//           </div>

//           <div>
//             <p className="text-xs text-slate-400">
//               Severity
//             </p>
//             <p className="mt-1 text-sm font-semibold text-orange-600">
//               {weakness.severity}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs text-slate-400">
//               Frequency
//             </p>
//             <p className="mt-1 text-sm font-semibold text-slate-700">
//               {weakness.frequency}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs text-slate-400">
//               Trend
//             </p>
//             <p className="mt-1 text-sm font-semibold text-orange-600">
//               ↓ {weakness.trend}
//             </p>
//           </div>
//         </div>
//       </button>

//       {open && (
//         <div className="border-t border-slate-100 bg-slate-50/50 p-5 space-y-5">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
//               What we observed
//             </p>
//             <p className="mt-2 text-sm leading-6 text-slate-600">
//               {weakness.observation}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
//               Why it matters
//             </p>
//             <p className="mt-2 text-sm leading-6 text-slate-600">
//               {weakness.why}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
//               Example evidence
//             </p>
//             <p className="mt-2 text-sm leading-6 text-slate-600">
//               {weakness.evidence}
//             </p>
//           </div>

//           <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
//             <p className="text-xs font-bold text-blue-600">
//               How to improve
//             </p>

//             <p className="mt-2 text-sm leading-6 text-slate-700">
//               {weakness.improve}
//             </p>

//             <p className="mt-3 text-sm font-semibold text-slate-900">
//               Recommended practice:
//               <span className="font-normal text-slate-600">
//                 {" "}
//                 {weakness.practice}
//               </span>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ============================================================
// // IMPROVEMENT ACTION
// // ============================================================

// function ImprovementAction({ item, onPractice }) {
//   return (
//     <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//       <div className="flex items-start gap-4">
//         <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-sm font-bold text-blue-600">
//           {item.priority}
//         </div>

//         <div className="flex-1">
//           <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
//             Priority {item.priority}
//           </p>

//           <h4 className="mt-1 font-bold text-slate-900">
//             {item.title}
//           </h4>

//           <p className="mt-4 text-xs font-semibold text-slate-400">
//             Goal
//           </p>

//           <p className="mt-1 text-sm text-slate-600">
//             {item.goal}
//           </p>

//           <p className="mt-4 text-xs font-semibold text-slate-400">
//             Practice
//           </p>

//           <p className="mt-1 text-sm text-slate-600">
//             {item.practice}
//           </p>

//           <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
//             <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
//               <Clock3 size={14} />
//               {item.time}
//             </span>

//             <button
//               onClick={() => onPractice?.(item)}
//               className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
//             >
//               Start Practice
//               <ArrowRight size={15} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ============================================================
// // PROGRESS COMPARISON
// // ============================================================

// function ProgressComparison({ history }) {
//   const maxScore = 100;

//   return (
//     <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-5 sm:p-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
//             Your Progress
//           </p>

//           <h3 className="mt-1 font-bold text-slate-900">
//             Assessment History
//           </h3>
//         </div>

//         <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-600">
//           <TrendingUp size={16} />
//           +20 points
//         </div>
//       </div>

//       <div className="mt-6 space-y-4">
//         {history.map((item, index) => (
//           <div key={item.label}>
//             <div className="flex justify-between text-xs mb-1.5">
//               <span className="font-medium text-slate-500">
//                 {item.label}
//               </span>

//               <span className="font-bold text-slate-800">
//                 {item.score}
//               </span>
//             </div>

//             <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
//               <div
//                 className={`h-full rounded-full ${
//                   index === history.length - 1
//                     ? "bg-blue-600"
//                     : "bg-blue-200"
//                 }`}
//                 style={{
//                   width: `${(item.score / maxScore) * 100}%`,
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <p className="mt-5 text-sm text-slate-500">
//         +20 points since your first assessment
//       </p>
//     </div>
//   );
// }

// // ============================================================
// // MAIN COMPONENT
// // ============================================================

// export default function AssessmentResults({
//   data = assessmentResult,
//   onPractice,
//   onRetest,
//   onStartImprovementPlan,
// }) {
//   return (
//     <div className="w-full max-w-7xl mx-auto space-y-7 pb-8">
//       {/* ======================================================
//           HEADER
//       ====================================================== */}

//       <header>
//         <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
//           <span>Assessments</span>
//           <span>/</span>
//           <span>{data.company} {data.role}</span>
//           <span>/</span>
//           <span className="text-blue-600">Results</span>
//         </div>

//         <div className="mt-4">
//           <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
//             {data.company} {data.role} — Interview Results
//           </h1>

//           <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-slate-500">
//             <span>
//               <span className="text-slate-400">Completed</span>{" "}
//               {data.completed}
//             </span>

//             <span>
//               <span className="text-slate-400">Assessment Type</span>{" "}
//               {data.type}
//             </span>

//             <span>
//               <span className="text-slate-400">Duration</span>{" "}
//               {data.duration}
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* ======================================================
//           1. READINESS
//       ====================================================== */}

//       <ReadinessHero data={data.readiness} />

//       {/* ======================================================
//           2. AI SUMMARY
//       ====================================================== */}

//       <AISummary data={data.summary} />

//       {/* ======================================================
//           3. SIX DIMENSIONS
//       ====================================================== */}

//       <section>
//         <div className="mb-4">
//           <h2 className="text-lg sm:text-xl font-bold text-slate-900">
//             Your Performance
//           </h2>

//           <p className="mt-1 text-sm text-slate-500">
//             How you performed across the six dimensions we evaluate.
//           </p>
//         </div>

//         <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 sm:p-6">
//           {data.dimensions.map((dimension) => (
//             <ScoreDimension
//               key={dimension.name}
//               dimension={dimension}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ======================================================
//           4. ROUND PERFORMANCE
//       ====================================================== */}

//       <section>
//         <div className="mb-4">
//           <h2 className="text-lg sm:text-xl font-bold text-slate-900">
//             Round Performance
//           </h2>

//           <p className="mt-1 text-sm text-slate-500">
//             Review what happened in each part of the assessment.
//           </p>
//         </div>

//         <div className="space-y-3">
//           {data.rounds.map((round, index) => (
//             <RoundResult
//               key={round.id}
//               round={round}
//               defaultOpen={index === 0}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ======================================================
//           5. WHY YOU MAY GET REJECTED
//       ====================================================== */}

//       <section>
//         <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5 sm:p-6">
//           <div className="flex items-start gap-3">
//             <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-orange-100 flex items-center justify-center">
//               <AlertTriangle
//                 size={19}
//                 className="text-orange-600"
//               />
//             </div>

//             <div>
//               <h2 className="text-lg sm:text-xl font-bold text-slate-900">
//                 Why You May Get Rejected
//               </h2>

//               <p className="mt-1 text-sm text-slate-500">
//                 These are the issues most likely to affect your outcome
//                 in a real interview.
//               </p>
//             </div>
//           </div>

//           <div className="mt-5 space-y-3">
//             {data.rejectionReasons.map((item) => (
//               <RejectionReason
//                 key={item.id}
//                 item={item}
//                 onPractice={onPractice}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======================================================
//           6. WEAKNESSES
//       ====================================================== */}

//       <section>
//         <div className="mb-4">
//           <h2 className="text-lg sm:text-xl font-bold text-slate-900">
//             Your Weaknesses
//           </h2>

//           <p className="mt-1 text-sm text-slate-500">
//             Evidence-based diagnosis from your assessment performance.
//           </p>
//         </div>

//         <div className="space-y-3">
//           {data.weaknesses.map((weakness) => (
//             <WeaknessCard
//               key={weakness.id}
//               weakness={weakness}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ======================================================
//           7. WHAT YOU DID WELL
//       ====================================================== */}

//       <section className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 sm:p-6">
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
//             <CheckCircle2
//               size={18}
//               className="text-emerald-600"
//             />
//           </div>

//           <div>
//             <h2 className="font-bold text-slate-900">
//               What You Did Well
//             </h2>

//             <p className="text-xs text-slate-500 mt-0.5">
//               Strengths worth carrying into your next interview.
//             </p>
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 gap-3 mt-5">
//           {data.strengths.map((strength) => (
//             <div
//               key={strength.title}
//               className="rounded-xl bg-emerald-50/50 border border-emerald-100 p-4"
//             >
//               <div className="flex items-start gap-2">
//                 <CheckCircle2
//                   size={16}
//                   className="mt-0.5 shrink-0 text-emerald-600"
//                 />

//                 <div>
//                   <p className="text-sm font-bold text-slate-900">
//                     {strength.title}
//                   </p>

//                   <p className="mt-1 text-sm leading-5 text-slate-600">
//                     {strength.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ======================================================
//           8. IMPROVEMENT PLAN
//       ====================================================== */}

//       <section>
//         <div className="mb-4">
//           <h2 className="text-lg sm:text-xl font-bold text-slate-900">
//             Your Improvement Plan
//           </h2>

//           <p className="mt-1 text-sm text-slate-500">
//             Focus on these areas before your next assessment.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-4">
//           {data.improvementPlan.map((item) => (
//             <ImprovementAction
//               key={item.priority}
//               item={item}
//               onPractice={onPractice}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ======================================================
//           9. READINESS EXPLANATION
//       ====================================================== */}

//       <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
//         <div className="flex items-start gap-3">
//           <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-blue-100 flex items-center justify-center">
//             <Target size={19} className="text-blue-600" />
//           </div>

//           <div>
//             <h2 className="text-lg font-bold text-slate-900">
//               What Does {data.readiness.score}/100 Actually Mean?
//             </h2>

//             <p className="mt-1 text-sm font-semibold text-blue-700">
//               Almost Ready
//             </p>
//           </div>
//         </div>

//         <p className="mt-5 text-sm leading-7 text-slate-600 max-w-3xl">
//           Your technical foundation is strong enough to perform well,
//           but your current communication and interview-structure
//           weaknesses could still reduce your chances in a real
//           interview.
//         </p>

//         <div className="grid grid-cols-3 gap-3 mt-5 max-w-xl">
//           <div className="bg-white rounded-xl border border-blue-100 p-4">
//             <p className="text-xs text-slate-400">
//               Ready threshold
//             </p>
//             <p className="mt-1 text-lg font-bold text-slate-900">
//               85+
//             </p>
//           </div>

//           <div className="bg-white rounded-xl border border-blue-100 p-4">
//             <p className="text-xs text-slate-400">
//               Current
//             </p>
//             <p className="mt-1 text-lg font-bold text-blue-600">
//               {data.readiness.score}
//             </p>
//           </div>

//           <div className="bg-white rounded-xl border border-blue-100 p-4">
//             <p className="text-xs text-slate-400">
//               Gap
//             </p>
//             <p className="mt-1 text-lg font-bold text-slate-900">
//               {data.readiness.threshold -
//                 data.readiness.score}{" "}
//               points
//             </p>
//           </div>
//         </div>

//         <p className="mt-5 text-xs text-slate-400">
//           Based on this assessment, you are currently close to the
//           readiness threshold. Reaching the threshold does not
//           guarantee a job offer.
//         </p>
//       </section>

//       {/* ======================================================
//           10. RETEST CTA
//       ====================================================== */}

//       <section className="rounded-3xl bg-slate-900 p-6 sm:p-8 text-white">
//         <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
//               Next Step
//             </p>

//             <h2 className="mt-2 text-2xl font-bold">
//               Ready to improve your score?
//             </h2>

//             <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
//               Work on your highest-impact weaknesses and retest to see
//               whether your readiness has improved.
//             </p>

//             <div className="flex flex-wrap gap-2 mt-5">
//               {["Communication", "Reasoning", "Behavioral"].map(
//                 (area) => (
//                   <span
//                     key={area}
//                     className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-slate-200"
//                   >
//                     {area}
//                   </span>
//                 )
//               )}
//             </div>
//           </div>

//           <div className="lg:min-w-[250px]">
//             <div className="grid grid-cols-2 gap-3 mb-4">
//               <div className="rounded-xl bg-white/5 border border-white/10 p-3">
//                 <p className="text-xs text-slate-400">
//                   Current
//                 </p>
//                 <p className="mt-1 text-xl font-bold">
//                   {data.readiness.score}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-white/5 border border-white/10 p-3">
//                 <p className="text-xs text-slate-400">
//                   Target
//                 </p>
//                 <p className="mt-1 text-xl font-bold">
//                   85+
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={() => onRetest?.(data)}
//               className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition"
//             >
//               Retest Assessment
//               <ArrowRight size={16} />
//             </button>

//             <button
//               onClick={() =>
//                 onStartImprovementPlan?.(data)
//               }
//               className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition"
//             >
//               <Lightbulb size={16} />
//               Start Improvement Plan
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ======================================================
//           11. PROGRESS
//       ====================================================== */}

//       <ProgressComparison history={data.history} />
//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  Search,
  Sparkles,
  Target,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

// ============================================================
// MOCK RESULT DATA
// Replace this with API/database response later.
// Each assessment owns its complete report.
// ============================================================

const mockAssessmentResults = [
  {
    id: "google-sde1",
    company: "Google",
    role: "SDE-1",
    type: "Company Simulation",
    completed: "12 Sep 2026",
    duration: "87 min",
    score: 82,
    status: "Almost Ready",

    verdict:
      "You demonstrated strong problem-solving ability and solid technical fundamentals. Your biggest risk is how clearly you communicate your reasoning under interview pressure.",

    strongestArea: "Problem Solving / DSA",
    strongestScore: 86,

    biggestRisk: "Unstructured technical explanations",

    dimensions: [
      {
        name: "Problem Solving / DSA",
        score: 86,
        weight: 30,
      },
      {
        name: "Technical Knowledge",
        score: 81,
        weight: 20,
      },
      {
        name: "Communication & Explanation",
        score: 76,
        weight: 15,
      },
      {
        name: "Code Quality / Debugging",
        score: 84,
        weight: 15,
      },
      {
        name: "Reasoning & Trade-offs",
        score: 79,
        weight: 10,
      },
      {
        name: "Behavioral / Interview Skills",
        score: 73,
        weight: 10,
      },
    ],

    rounds: [
      {
        name: "Coding",
        score: 86,
        status: "Passed",
        duration: "42 min",
        wentWell:
          "Reached an optimal solution and handled edge cases correctly.",
        hurtScore:
          "Initial approach took longer than expected.",
      },
      {
        name: "Technical Interview",
        score: 79,
        status: "Passed",
        duration: "31 min",
        wentWell:
          "Strong understanding of backend fundamentals.",
        hurtScore:
          "Trade-offs were not consistently explained.",
      },
      {
        name: "Behavioral Interview",
        score: 73,
        status: "Needs Improvement",
        duration: "14 min",
        wentWell:
          "Good ownership examples.",
        hurtScore:
          "Answers lacked a consistent STAR structure.",
      },
    ],

    rejectionReasons: [
      {
        priority: "High Impact",
        title: "Unstructured Technical Explanations",
        evidence:
          "Your solution was technically correct, but your explanation moved between implementation details and reasoning without a clear structure.",
        why:
          "Interviewers need to quickly understand how you think. Unstructured reasoning can make a strong solution appear weaker.",
        action:
          "Practice explaining solutions using: Approach → Why → Complexity → Edge Cases → Trade-offs.",
      },
      {
        priority: "Medium Impact",
        title: "Weak Trade-off Justification",
        evidence:
          "You identified the right architecture but struggled to explain why one approach was preferable to another.",
        why:
          "Technical interviews evaluate engineering judgment, not just knowledge.",
        action:
          "Practice comparing alternative solutions and explaining the engineering trade-offs.",
      },
      {
        priority: "Medium Impact",
        title: "Behavioral Answer Structure",
        evidence:
          "Your examples were relevant but lacked a clear Situation → Task → Action → Result structure.",
        why:
          "Unstructured behavioral answers make it harder to demonstrate ownership and impact.",
        action:
          "Practice answering behavioral questions using the STAR framework.",
      },
    ],

    weaknesses: [
      {
        category: "Communication & Explanation",
        weakness: "Answer Structure",
        score: 76,
        severity: "High Priority",
        frequency: "Detected 3 times",
        evidence:
          "You frequently moved into implementation details before establishing a clear approach.",
        action:
          "Use Approach → Why → Complexity → Edge Cases → Trade-offs for technical answers.",
      },
      {
        category: "Reasoning & Trade-offs",
        weakness: "Trade-off Justification",
        score: 79,
        severity: "Medium Priority",
        frequency: "Detected 2 times",
        evidence:
          "You reached reasonable architecture decisions but did not consistently explain alternatives.",
        action:
          "For each architecture decision, explain the alternative, benefit, cost and reason for your choice.",
      },
      {
        category: "Behavioral / Interview Skills",
        weakness: "Behavioral Answer Structure",
        score: 73,
        severity: "Medium Priority",
        frequency: "Detected 1 time",
        evidence:
          "Your examples were relevant but did not clearly separate situation, action and measurable result.",
        action:
          "Structure behavioral answers using Situation → Task → Action → Result.",
      },
    ],

    strengths: [
      {
        title: "Strong DSA fundamentals",
        description:
          "You consistently identified efficient approaches and handled important edge cases.",
      },
      {
        title: "Good debugging ability",
        description:
          "You were able to isolate implementation issues without losing track of the core problem.",
      },
      {
        title: "Solid backend knowledge",
        description:
          "Your understanding of backend fundamentals was strong throughout the technical discussion.",
      },
      {
        title: "Correct handling of edge cases",
        description:
          "You actively considered uncommon inputs instead of focusing only on the happy path.",
      },
    ],

    improvementPlan: [
      {
        priority: 1,
        title: "Communication & Explanation",
        goal: "Structure technical answers clearly.",
        practice:
          "Complete 3 structured technical explanation drills.",
        time: "30 min",
      },
      {
        priority: 2,
        title: "Reasoning & Trade-offs",
        goal:
          "Explain why you choose one solution over another.",
        practice: "Complete 3 trade-off scenarios.",
        time: "30 min",
      },
      {
        priority: 3,
        title: "Behavioral",
        goal: "Answer behavioral questions using STAR.",
        practice: "Complete 5 behavioral questions.",
        time: "25 min",
      },
    ],
  },

  {
    id: "microsoft-sde1",
    company: "Microsoft",
    role: "SDE-1",
    type: "Company Simulation",
    completed: "08 Sep 2026",
    duration: "84 min",
    score: 74,
    status: "Almost Ready",

    verdict:
      "You showed a reasonable technical foundation, but consistency in communication and problem-solving speed affected your overall performance.",

    strongestArea: "Technical Knowledge",
    strongestScore: 79,

    biggestRisk: "Slow problem-solving approach",

    dimensions: [
      {
        name: "Problem Solving / DSA",
        score: 70,
        weight: 30,
      },
      {
        name: "Technical Knowledge",
        score: 79,
        weight: 20,
      },
      {
        name: "Communication & Explanation",
        score: 73,
        weight: 15,
      },
      {
        name: "Code Quality / Debugging",
        score: 76,
        weight: 15,
      },
      {
        name: "Reasoning & Trade-offs",
        score: 72,
        weight: 10,
      },
      {
        name: "Behavioral / Interview Skills",
        score: 75,
        weight: 10,
      },
    ],

    rounds: [
      {
        name: "Coding",
        score: 70,
        status: "Passed",
        duration: "45 min",
        wentWell:
          "Produced a working solution and covered the main edge cases.",
        hurtScore:
          "Spent too much time exploring the initial approach.",
      },
      {
        name: "Technical Interview",
        score: 79,
        status: "Passed",
        duration: "27 min",
        wentWell:
          "Good understanding of core technical concepts.",
        hurtScore:
          "Some architecture decisions lacked depth.",
      },
      {
        name: "Behavioral Interview",
        score: 75,
        status: "Passed",
        duration: "12 min",
        wentWell:
          "Provided relevant examples.",
        hurtScore:
          "Impact was not always quantified.",
      },
    ],

    rejectionReasons: [
      {
        priority: "High Impact",
        title: "Slow Problem-Solving Progression",
        evidence:
          "You spent significant time evaluating approaches before committing to a solution.",
        why:
          "Interviewers need to see structured progress under time pressure.",
        action:
          "Practice identifying brute force, constraints and optimization direction within the first few minutes.",
      },
      {
        priority: "Medium Impact",
        title: "Architecture Depth",
        evidence:
          "Your architecture was functional but some scalability decisions were left unexplained.",
        why:
          "Engineering interviews evaluate how you reason about systems as they grow.",
        action:
          "Practice explaining scalability decisions and their trade-offs.",
      },
    ],

    weaknesses: [
      {
        category: "Problem Solving / DSA",
        weakness: "Optimization Speed",
        score: 70,
        severity: "High Priority",
        frequency: "Detected 2 times",
        evidence:
          "You required additional time to move from a working solution to an optimized approach.",
        action:
          "Practice timed optimization drills.",
      },
      {
        category: "Reasoning & Trade-offs",
        weakness: "Architecture Depth",
        score: 72,
        severity: "Medium Priority",
        frequency: "Detected 2 times",
        evidence:
          "Scalability and alternative architecture choices were not always discussed.",
        action:
          "Practice system-design trade-off scenarios.",
      },
    ],

    strengths: [
      {
        title: "Good technical fundamentals",
        description:
          "You demonstrated solid understanding of the core technologies discussed.",
      },
      {
        title: "Relevant examples",
        description:
          "Your behavioral examples were generally relevant to the questions.",
      },
    ],

    improvementPlan: [
      {
        priority: 1,
        title: "Problem Solving",
        goal: "Reach optimal solutions faster.",
        practice: "Complete 3 timed optimization drills.",
        time: "30 min",
      },
      {
        priority: 2,
        title: "System Design",
        goal: "Explain scalability decisions.",
        practice: "Complete 2 architecture trade-off scenarios.",
        time: "30 min",
      },
    ],
  },

  {
    id: "amazon-sde1",
    company: "Amazon",
    role: "SDE-1",
    type: "Company Simulation",
    completed: "02 Sep 2026",
    duration: "90 min",
    score: 61,
    status: "Needs Improvement",

    verdict:
      "Your fundamentals are developing, but several recurring gaps currently make it difficult to demonstrate consistent interview-level performance.",

    strongestArea: "Code Quality / Debugging",
    strongestScore: 68,

    biggestRisk: "Weak technical fundamentals",

    dimensions: [
      {
        name: "Problem Solving / DSA",
        score: 58,
        weight: 30,
      },
      {
        name: "Technical Knowledge",
        score: 61,
        weight: 20,
      },
      {
        name: "Communication & Explanation",
        score: 63,
        weight: 15,
      },
      {
        name: "Code Quality / Debugging",
        score: 68,
        weight: 15,
      },
      {
        name: "Reasoning & Trade-offs",
        score: 59,
        weight: 10,
      },
      {
        name: "Behavioral / Interview Skills",
        score: 64,
        weight: 10,
      },
    ],

    rounds: [
      {
        name: "Coding",
        score: 58,
        status: "Needs Improvement",
        duration: "48 min",
        wentWell:
          "You produced a working baseline solution.",
        hurtScore:
          "Optimization and complexity analysis were incomplete.",
      },
      {
        name: "Technical Interview",
        score: 61,
        status: "Needs Improvement",
        duration: "28 min",
        wentWell:
          "You understood several core concepts.",
        hurtScore:
          "Some fundamental concepts required prompting.",
      },
      {
        name: "Behavioral Interview",
        score: 64,
        status: "Needs Improvement",
        duration: "14 min",
        wentWell:
          "You provided authentic examples.",
        hurtScore:
          "Answers lacked measurable outcomes.",
      },
    ],

    rejectionReasons: [
      {
        priority: "High Impact",
        title: "Technical Fundamentals",
        evidence:
          "Several core technical questions required additional prompting before reaching the correct reasoning.",
        why:
          "Interviewers expect candidates to independently demonstrate foundational knowledge.",
        action:
          "Strengthen core technical concepts before attempting another full simulation.",
      },
      {
        priority: "High Impact",
        title: "Optimization & Complexity",
        evidence:
          "You reached working solutions but did not consistently explain time and space complexity.",
        why:
          "Complexity reasoning is an important part of coding interview evaluation.",
        action:
          "Practice complexity analysis after every coding problem.",
      },
    ],

    weaknesses: [
      {
        category: "Problem Solving / DSA",
        weakness: "Complexity Analysis",
        score: 58,
        severity: "High Priority",
        frequency: "Detected 3 times",
        evidence:
          "Time and space complexity were not consistently explained.",
        action:
          "Add complexity analysis to every solution explanation.",
      },
      {
        category: "Technical Knowledge",
        weakness: "Core Fundamentals",
        score: 61,
        severity: "High Priority",
        frequency: "Detected 3 times",
        evidence:
          "Several fundamental concepts required prompting.",
        action:
          "Complete targeted technical fundamentals practice.",
      },
    ],

    strengths: [
      {
        title: "Good debugging ability",
        description:
          "You were able to identify and fix several implementation issues.",
      },
      {
        title: "Authentic behavioral examples",
        description:
          "Your examples were relevant and reflected genuine project experience.",
      },
    ],

    improvementPlan: [
      {
        priority: 1,
        title: "Technical Fundamentals",
        goal: "Strengthen core interview concepts.",
        practice:
          "Complete targeted technical practice drills.",
        time: "45 min",
      },
      {
        priority: 2,
        title: "DSA",
        goal: "Improve optimization and complexity reasoning.",
        practice: "Complete 5 timed DSA problems.",
        time: "60 min",
      },
    ],
  },

  {
    id: "generic-sde1",
    company: "Generic SDE-1",
    role: "SDE-1",
    type: "Role Simulation",
    completed: "28 Aug 2026",
    duration: "82 min",
    score: 88,
    status: "Ready",

    verdict:
      "You demonstrated strong performance across the major interview dimensions with clear reasoning, strong fundamentals and confident communication.",

    strongestArea: "Problem Solving / DSA",
    strongestScore: 92,

    biggestRisk: "Minor behavioral structure gaps",

    dimensions: [
      {
        name: "Problem Solving / DSA",
        score: 92,
        weight: 30,
      },
      {
        name: "Technical Knowledge",
        score: 88,
        weight: 20,
      },
      {
        name: "Communication & Explanation",
        score: 86,
        weight: 15,
      },
      {
        name: "Code Quality / Debugging",
        score: 90,
        weight: 15,
      },
      {
        name: "Reasoning & Trade-offs",
        score: 87,
        weight: 10,
      },
      {
        name: "Behavioral / Interview Skills",
        score: 80,
        weight: 10,
      },
    ],

    rounds: [
      {
        name: "Coding",
        score: 92,
        status: "Passed",
        duration: "40 min",
        wentWell:
          "Reached an efficient solution quickly and explained complexity clearly.",
        hurtScore:
          "One edge case required an additional check.",
      },
      {
        name: "Technical Interview",
        score: 88,
        status: "Passed",
        duration: "28 min",
        wentWell:
          "Strong technical reasoning and clear trade-offs.",
        hurtScore:
          "One architecture alternative was not explored deeply.",
      },
      {
        name: "Behavioral Interview",
        score: 80,
        status: "Passed",
        duration: "14 min",
        wentWell:
          "Clear examples demonstrating ownership.",
        hurtScore:
          "Some answers could quantify impact more clearly.",
      },
    ],

    rejectionReasons: [
      {
        priority: "Low Impact",
        title: "Behavioral Impact Detail",
        evidence:
          "A few behavioral answers described the action clearly but did not quantify the final impact.",
        why:
          "Measurable outcomes make ownership and contribution easier to evaluate.",
        action:
          "Add measurable results to the end of behavioral stories where possible.",
      },
    ],

    weaknesses: [
      {
        category: "Behavioral / Interview Skills",
        weakness: "Impact Quantification",
        score: 80,
        severity: "Low Priority",
        frequency: "Detected 1 time",
        evidence:
          "Some behavioral answers lacked measurable outcomes.",
        action:
          "Practice ending STAR answers with measurable results.",
      },
    ],

    strengths: [
      {
        title: "Excellent DSA performance",
        description:
          "You quickly identified efficient approaches and communicated complexity clearly.",
      },
      {
        title: "Strong technical reasoning",
        description:
          "You consistently explained engineering decisions and trade-offs.",
      },
      {
        title: "Clear communication",
        description:
          "Your explanations were structured and easy to follow.",
      },
      {
        title: "Strong debugging ability",
        description:
          "You quickly isolated implementation issues and corrected them.",
      },
    ],

    improvementPlan: [
      {
        priority: 1,
        title: "Behavioral",
        goal: "Make behavioral answers more measurable.",
        practice: "Complete 3 STAR impact drills.",
        time: "20 min",
      },
    ],
  },
];

// ============================================================
// HELPERS
// ============================================================

function getStatusStyle(status) {
  if (status === "Ready") {
    return "bg-emerald-50 text-emerald-700 border-emerald-100";
  }

  if (status === "Needs Improvement") {
    return "bg-orange-50 text-orange-700 border-orange-100";
  }

  return "bg-blue-50 text-blue-700 border-blue-100";
}

function getScoreColor(score) {
  if (score < 50) return "bg-red-500";
  if (score < 65) return "bg-orange-500";
  if (score < 80) return "bg-blue-500";
  return "bg-emerald-500";
}

// ============================================================
// ASSESSMENT RESULT CARD
// ============================================================

function AssessmentResultCard({ assessment, onViewReport }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 sm:p-6 hover:border-blue-100 transition-colors">
      <div className="grid lg:grid-cols-[1.4fr_1fr_0.8fr_auto] gap-5 items-center">
        {/* Company / Role */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900">
              {assessment.company}
            </h3>

            <span
              className={`px-2.5 py-1 rounded-full border text-[11px] font-semibold ${getStatusStyle(
                assessment.status
              )}`}
            >
              {assessment.status}
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            {assessment.role}
          </p>

          <p className="mt-3 text-xs font-medium text-slate-400">
            {assessment.type}
          </p>
        </div>

        {/* Completed */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Completed
          </p>

          <div className="flex items-center gap-1.5 mt-2 text-sm font-medium text-slate-700">
            <Clock3 size={15} className="text-slate-400" />
            {assessment.completed}
          </div>
        </div>

        {/* Score */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Score
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            {assessment.score}
            <span className="text-sm font-medium text-slate-400">
              {" "}
              / 100
            </span>
          </p>
        </div>

        {/* CTA */}
        <div>
          <button
            onClick={() => onViewReport(assessment)}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            See Full Report
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SCORE DIMENSION
// ============================================================

function ScoreDimension({ dimension }) {
  return (
    <div className="py-4 border-b border-slate-100 last:border-0">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-800">
            {dimension.name}
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Weight: {dimension.weight}%
          </p>
        </div>

        <div className="text-right shrink-0">
          <p className="font-bold text-slate-900">
            {dimension.score}
          </p>

          <p className="text-xs text-slate-500">
            {dimension.score >= 85
              ? "Strong"
              : dimension.score >= 75
              ? "Good"
              : "Needs Improvement"}
          </p>
        </div>
      </div>

      <div className="h-2 rounded-full bg-slate-100 overflow-hidden mt-3">
        <div
          className={`h-full rounded-full ${getScoreColor(
            dimension.score
          )}`}
          style={{ width: `${dimension.score}%` }}
        />
      </div>
    </div>
  );
}

// ============================================================
// ROUND RESULT
// ============================================================

function RoundResult({ round, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50/50 transition"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
              round.status === "Passed"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-orange-50 text-orange-600"
            }`}
          >
            {round.status === "Passed" ? (
              <CheckCircle2 size={18} />
            ) : (
              <AlertTriangle size={18} />
            )}
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Round {index + 1}
            </p>

            <h4 className="font-bold text-slate-900">
              {round.name}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <p className="font-bold text-slate-900">
              {round.score}
              <span className="text-xs text-slate-400">
                {" "}
                / 100
              </span>
            </p>

            <p className="text-xs text-slate-400">
              {round.duration}
            </p>
          </div>

          {open ? (
            <ChevronUp size={18} className="text-slate-400" />
          ) : (
            <ChevronDown size={18} className="text-slate-400" />
          )}
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl bg-emerald-50/60 border border-emerald-100 p-4">
              <p className="text-xs font-bold text-emerald-700">
                What went well
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {round.wentWell}
              </p>
            </div>

            <div className="rounded-xl bg-orange-50/60 border border-orange-100 p-4">
              <p className="text-xs font-bold text-orange-700">
                What hurt your score
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {round.hurtScore}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// REJECTION REASON
// ============================================================

function RejectionReason({ reason, onPractice }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 shrink-0 rounded-xl bg-orange-50 flex items-center justify-center">
          <AlertTriangle size={17} className="text-orange-600" />
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wide text-orange-600">
            {reason.priority}
          </span>

          <h4 className="mt-1 font-bold text-slate-900">
            {reason.title}
          </h4>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Evidence
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {reason.evidence}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Why it matters
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {reason.why}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
          Recommended action
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-700">
          {reason.action}
        </p>

        <button
          onClick={() => onPractice?.(reason)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
        >
          Practice This
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

// ============================================================
// WEAKNESS
// ============================================================

function WeaknessCard({ weakness }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-100 rounded-2xl bg-white overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-blue-600">
              {weakness.category}
            </p>

            <h4 className="mt-1 font-bold text-slate-900">
              {weakness.weakness}
            </h4>
          </div>

          {open ? (
            <ChevronUp size={18} className="text-slate-400" />
          ) : (
            <ChevronDown size={18} className="text-slate-400" />
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
          <div>
            <p className="text-xs text-slate-400">
              Score
            </p>

            <p className="mt-1 font-bold text-slate-900">
              {weakness.score}/100
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Severity
            </p>

            <p className="mt-1 text-sm font-semibold text-orange-600">
              {weakness.severity}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Frequency
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-700">
              {weakness.frequency}
            </p>
          </div>
        </div>
      </button>

      {open && (
        <div className="border-t border-slate-100 bg-slate-50/50 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Evidence
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {weakness.evidence}
          </p>

          <div className="mt-4 rounded-xl bg-blue-50 border border-blue-100 p-4">
            <p className="text-xs font-bold text-blue-600">
              Improvement action
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              {weakness.action}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// IMPROVEMENT ACTION
// ============================================================

function ImprovementAction({ item, onPractice }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
          {item.priority}
        </div>

        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
            Priority {item.priority}
          </p>

          <h4 className="mt-1 font-bold text-slate-900">
            {item.title}
          </h4>

          <p className="mt-4 text-xs font-semibold text-slate-400">
            Goal
          </p>

          <p className="mt-1 text-sm text-slate-600">
            {item.goal}
          </p>

          <p className="mt-4 text-xs font-semibold text-slate-400">
            Practice
          </p>

          <p className="mt-1 text-sm text-slate-600">
            {item.practice}
          </p>

          <div className="flex items-center justify-between gap-3 mt-5">
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock3 size={14} />
              {item.time}
            </span>

            <button
              onClick={() => onPractice?.(item)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600"
            >
              Start Practice
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// DETAILED REPORT
// ============================================================

function DetailedAssessmentReport({
  assessment,
  onBack,
  onRetest,
  onPractice,
}) {
  return (
    <div className="space-y-6 pb-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
        <button
          onClick={onBack}
          className="hover:text-blue-600 transition"
        >
          Results
        </button>

        <span>/</span>

        <span className="text-blue-600">
          {assessment.company} {assessment.role}
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 mb-3"
          >
            <ArrowLeft size={15} />
            All Results
          </button>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {assessment.company} {assessment.role}
          </h1>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2 text-sm text-slate-500">
            <span>{assessment.type}</span>
            <span>Completed {assessment.completed}</span>
            <span>{assessment.duration}</span>
          </div>
        </div>

        <span
          className={`self-start sm:self-auto px-3 py-1.5 rounded-full border text-xs font-bold ${getStatusStyle(
            assessment.status
          )}`}
        >
          {assessment.status}
        </span>
      </div>

      {/* Overall Assessment Score */}
      <section className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center p-6 sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Overall Assessment Score
            </p>

            <div className="flex items-end gap-2 mt-3">
              <span className="text-5xl font-bold text-slate-900">
                {assessment.score}
              </span>

              <span className="text-lg text-slate-400 mb-2">
                / 100
              </span>
            </div>

            <p className="mt-2 font-bold text-blue-700">
              {assessment.status}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              {assessment.verdict}
            </p>
          </div>

          <div className="w-36 h-36 rounded-full bg-blue-50 border-8 border-blue-100 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-slate-900">
              {assessment.score}
            </span>

            <span className="text-xs text-slate-400">
              /100
            </span>
          </div>
        </div>
      </section>

      {/* AI Summary */}
      <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-blue-600" />

          <h2 className="font-bold text-slate-900">
            AI Assessment Summary
          </h2>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-700">
          {assessment.verdict}
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mt-5">
          <div className="bg-white border border-blue-100 rounded-xl p-4">
            <p className="text-xs text-slate-400">
              Strongest Area
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {assessment.strongestArea}
            </p>

            <p className="mt-1 text-lg font-bold text-emerald-600">
              {assessment.strongestScore}
            </p>
          </div>

          <div className="bg-white border border-blue-100 rounded-xl p-4">
            <p className="text-xs text-slate-400">
              Biggest Risk
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {assessment.biggestRisk}
            </p>
          </div>

          <div className="bg-white border border-blue-100 rounded-xl p-4">
            <p className="text-xs text-slate-400">
              Interviewer View
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {assessment.status}
            </p>
          </div>
        </div>
      </section>

      {/* Six Dimensions */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Performance Across Six Dimensions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            How you performed across the evaluation dimensions.
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm px-5 sm:px-6">
          {assessment.dimensions.map((dimension) => (
            <ScoreDimension
              key={dimension.name}
              dimension={dimension}
            />
          ))}
        </div>
      </section>

      {/* Round Performance */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Round-by-Round Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Understand what happened in each interview round.
          </p>
        </div>

        <div className="space-y-3">
          {assessment.rounds.map((round, index) => (
            <RoundResult
              key={round.name}
              round={round}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Rejection Risks */}
      <section className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-orange-100 flex items-center justify-center">
            <AlertTriangle
              size={18}
              className="text-orange-600"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Why You May Get Rejected
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              The highest-impact risks identified in this assessment.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {assessment.rejectionReasons.map((reason) => (
            <RejectionReason
              key={reason.title}
              reason={reason}
              onPractice={onPractice}
            />
          ))}
        </div>
      </section>

      {/* Weaknesses */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Detailed Weaknesses
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Specific patterns detected during this assessment.
          </p>
        </div>

        <div className="space-y-3">
          {assessment.weaknesses.map((weakness) => (
            <WeaknessCard
              key={weakness.weakness}
              weakness={weakness}
            />
          ))}
        </div>
      </section>

      {/* What Went Well */}
      <section className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <CheckCircle2
            size={20}
            className="text-emerald-600"
          />

          <div>
            <h2 className="font-bold text-slate-900">
              What You Did Well
            </h2>

            <p className="text-xs text-slate-500 mt-0.5">
              Strengths demonstrated in this assessment.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mt-5">
          {assessment.strengths.map((strength) => (
            <div
              key={strength.title}
              className="rounded-xl bg-emerald-50/50 border border-emerald-100 p-4"
            >
              <p className="text-sm font-bold text-slate-900">
                {strength.title}
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Improvement Plan */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Personalized Improvement Plan
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Actions based specifically on this assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {assessment.improvementPlan.map((item) => (
            <ImprovementAction
              key={item.priority}
              item={item}
              onPractice={onPractice}
            />
          ))}
        </div>
      </section>

      {/* Readiness Explanation */}
      <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <Target size={19} className="text-blue-600" />

          <h2 className="text-lg font-bold text-slate-900">
            What Does {assessment.score}/100 Mean?
          </h2>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600 max-w-3xl">
          This score reflects your performance in this specific
          assessment. It should be used to understand your current
          strengths and weaknesses, not as a guarantee of interview
          success.
        </p>

        <div className="mt-5 h-2.5 rounded-full bg-white overflow-hidden border border-blue-100">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${assessment.score}%` }}
          />
        </div>

        <p className="mt-2 text-xs text-slate-400">
          Assessment score: {assessment.score}/100
        </p>
      </section>

      {/* Retest */}
      <section className="rounded-3xl bg-slate-900 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
              Next Step
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Ready to improve this result?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-300 max-w-xl">
              Work on the weaknesses identified in this assessment and
              retest to measure your progress.
            </p>
          </div>

          <button
            onClick={() => onRetest?.(assessment)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition"
          >
            Retest Assessment
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// EMPTY STATE
// ============================================================

function EmptyResults({ onStartAssessment }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm py-16 px-6 text-center">
      <div className="mx-auto w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
        <TrendingUp size={21} className="text-blue-600" />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">
        No assessment results yet
      </h3>

      <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
        Complete your first interview simulation to see your
        performance and detailed results.
      </p>

      <button
        onClick={onStartAssessment}
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
      >
        Start Assessment
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

// ============================================================
// MAIN RESULTS PAGE
// ============================================================

export default function Results({
  assessments = mockAssessmentResults,
  onStartAssessment,
  onRetest,
  onPractice,
}) {
  const [selectedAssessment, setSelectedAssessment] =
    useState(null);

  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("All Companies");
  const [sort, setSort] = useState("Newest First");

  const companies = useMemo(() => {
    return [
      "All Companies",
      ...new Set(assessments.map((item) => item.company)),
    ];
  }, [assessments]);

  const filteredAssessments = useMemo(() => {
    let result = [...assessments];

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (item) =>
          item.company.toLowerCase().includes(query) ||
          item.role.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query)
      );
    }

    if (company !== "All Companies") {
      result = result.filter(
        (item) => item.company === company
      );
    }

    if (sort === "Highest Score") {
      result.sort((a, b) => b.score - a.score);
    } else {
      result.sort(
        (a, b) =>
          new Date(b.completed) - new Date(a.completed)
      );
    }

    return result;
  }, [assessments, search, company, sort]);

  // ============================================================
  // DETAILED REPORT VIEW
  // ============================================================

  if (selectedAssessment) {
    return (
      <DetailedAssessmentReport
        assessment={selectedAssessment}
        onBack={() => setSelectedAssessment(null)}
        onRetest={onRetest}
        onPractice={onPractice}
      />
    );
  }

  // ============================================================
  // ALL RESULTS VIEW
  // ============================================================

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Assessment Results
        </h1>

        <p className="mt-1.5 text-sm text-slate-500">
          Review your past assessment performance and open detailed
          reports.
        </p>
      </div>

      {assessments.length === 0 ? (
        <EmptyResults onStartAssessment={onStartAssessment} />
      ) : (
        <>
          {/* Search / Filter */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-3 sm:p-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search assessments..."
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-sm outline-none text-slate-800 placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-50"
                />
              </div>

              <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 outline-none focus:border-blue-300"
              >
                {companies.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 outline-none focus:border-blue-300"
              >
                <option>Newest First</option>
                <option>Highest Score</option>
              </select>
            </div>
          </div>

          {/* Results */}
          {filteredAssessments.length > 0 ? (
            <div className="space-y-3">
              {filteredAssessments.map((assessment) => (
                <AssessmentResultCard
                  key={assessment.id}
                  assessment={assessment}
                  onViewReport={setSelectedAssessment}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm py-14 text-center">
              <Search
                size={22}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-3 font-semibold text-slate-900">
                No assessment results found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}