// "use client";

// import { useEffect, useMemo, useState } from "react";
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
// } from "lucide-react";

// /* =========================================================
//    MOCK QUESTIONS
// ========================================================= */

// const technicalQuestions = [
//   {
//     id: 1,
//     category: "JavaScript",
//     difficulty: "Easy",
//     question:
//       "Which keyword is used to declare a block-scoped variable that can be reassigned?",
//     options: ["const", "let", "var", "static"],
//     correctAnswer: 1,
//   },
//   {
//     id: 2,
//     category: "Data Structures",
//     difficulty: "Easy",
//     question:
//       "Which data structure follows the Last In, First Out principle?",
//     options: ["Queue", "Stack", "Heap", "Graph"],
//     correctAnswer: 1,
//   },
//   {
//     id: 3,
//     category: "Algorithms",
//     difficulty: "Medium",
//     question:
//       "What is the average time complexity of searching for an element in a hash table?",
//     options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
//     correctAnswer: 0,
//   },
//   {
//     id: 4,
//     category: "SQL",
//     difficulty: "Medium",
//     question:
//       "Which SQL clause is used to filter groups after aggregation?",
//     options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"],
//     correctAnswer: 2,
//   },
//   {
//     id: 5,
//     category: "React",
//     difficulty: "Easy",
//     question:
//       "Which React hook is primarily used to manage local component state?",
//     options: ["useEffect", "useState", "useMemo", "useRef"],
//     correctAnswer: 1,
//   },
//   {
//     id: 6,
//     category: "Databases",
//     difficulty: "Medium",
//     question:
//       "Which ACID property guarantees that a transaction happens completely or not at all?",
//     options: [
//       "Consistency",
//       "Atomicity",
//       "Isolation",
//       "Durability",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 7,
//     category: "CS Fundamentals",
//     difficulty: "Medium",
//     question:
//       "Which of the following best describes normalization in a relational database?",
//     codeSnippet: `SELECT department, COUNT(*)
// FROM employees
// GROUP BY department;`,
//     options: [
//       "Increasing database redundancy",
//       "Reducing redundancy and dependency",
//       "Encrypting database records",
//       "Increasing query execution time",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 8,
//     category: "Algorithms",
//     difficulty: "Easy",
//     question:
//       "Which traversal visits nodes level by level in a tree?",
//     options: ["DFS", "BFS", "Backtracking", "Recursion"],
//     correctAnswer: 1,
//   },
//   {
//     id: 9,
//     category: "Web Development",
//     difficulty: "Easy",
//     question:
//       "Which HTTP method is commonly used to partially update an existing resource?",
//     options: ["GET", "POST", "PUT", "PATCH"],
//     correctAnswer: 3,
//   },
//   {
//     id: 10,
//     category: "System Design",
//     difficulty: "Medium",
//     question:
//       "What is the primary purpose of a load balancer?",
//     options: [
//       "Store database records",
//       "Distribute traffic across servers",
//       "Compile source code",
//       "Encrypt passwords",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 11,
//     category: "Operating Systems",
//     difficulty: "Medium",
//     question:
//       "Which memory area is generally used for dynamically allocated objects?",
//     options: ["Stack", "Heap", "Register", "Cache"],
//     correctAnswer: 1,
//   },
//   {
//     id: 12,
//     category: "Git",
//     difficulty: "Easy",
//     question:
//       "Which command creates a new Git branch?",
//     options: [
//       "git merge",
//       "git branch",
//       "git stash",
//       "git reset",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 13,
//     category: "Networking",
//     difficulty: "Medium",
//     question:
//       "Which device routes packets between different networks?",
//     options: ["Switch", "Router", "Hub", "Repeater"],
//     correctAnswer: 1,
//   },
//   {
//     id: 14,
//     category: "OOP",
//     difficulty: "Easy",
//     question:
//       "Which OOP principle hides internal implementation details?",
//     options: [
//       "Inheritance",
//       "Polymorphism",
//       "Encapsulation",
//       "Recursion",
//     ],
//     correctAnswer: 2,
//   },
//   {
//     id: 15,
//     category: "Databases",
//     difficulty: "Medium",
//     question:
//       "Which ACID property ensures committed data survives a system failure?",
//     options: [
//       "Atomicity",
//       "Consistency",
//       "Isolation",
//       "Durability",
//     ],
//     correctAnswer: 3,
//   },
//   {
//     id: 16,
//     category: "Algorithms",
//     difficulty: "Medium",
//     question:
//       "Which sorting algorithm has an average time complexity of O(n log n)?",
//     options: [
//       "Bubble Sort",
//       "Selection Sort",
//       "Merge Sort",
//       "Linear Search",
//     ],
//     correctAnswer: 2,
//   },
//   {
//     id: 17,
//     category: "SQL",
//     difficulty: "Easy",
//     question:
//       "Which SQL keyword removes duplicate rows from query results?",
//     options: ["UNIQUE", "DISTINCT", "FILTER", "DEDUP"],
//     correctAnswer: 1,
//   },
//   {
//     id: 18,
//     category: "JavaScript",
//     difficulty: "Easy",
//     question:
//       "Which method creates a new array containing elements that pass a test?",
//     options: ["map()", "filter()", "reduce()", "find()"],
//     correctAnswer: 1,
//   },
//   {
//     id: 19,
//     category: "System Design",
//     difficulty: "Medium",
//     question:
//       "Which component is commonly used to temporarily store frequently accessed data?",
//     options: ["Cache", "Compiler", "Router", "Queue"],
//     correctAnswer: 0,
//   },
//   {
//     id: 20,
//     category: "Web Development",
//     difficulty: "Easy",
//     question:
//       "Which HTTP status code generally indicates a successful request?",
//     options: ["200", "301", "404", "500"],
//     correctAnswer: 0,
//   },
//   {
//     id: 21,
//     category: "Security",
//     difficulty: "Medium",
//     question:
//       "Which practice helps prevent SQL injection attacks?",
//     options: [
//       "String concatenation",
//       "Parameterized queries",
//       "Disabling indexes",
//       "Using larger databases",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 22,
//     category: "Node.js",
//     difficulty: "Medium",
//     question:
//       "Which object is commonly used to access environment variables in Node.js?",
//     options: ["process.env", "global.env", "node.env", "system.env"],
//     correctAnswer: 0,
//   },
//   {
//     id: 23,
//     category: "APIs",
//     difficulty: "Easy",
//     question:
//       "What does REST primarily describe?",
//     options: [
//       "A database engine",
//       "An architectural style for networked applications",
//       "A programming language",
//       "A testing framework",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 24,
//     category: "Cloud",
//     difficulty: "Medium",
//     question:
//       "What is horizontal scaling?",
//     options: [
//       "Adding more resources to one machine",
//       "Adding more machines to handle load",
//       "Reducing memory usage",
//       "Compressing data",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 25,
//     category: "CS Fundamentals",
//     difficulty: "Easy",
//     question:
//       "Which data structure is commonly used to implement a priority queue?",
//     options: ["Stack", "Linked List", "Heap", "Array"],
//     correctAnswer: 2,
//   },
// ];

// const aptitudeQuestions = [
//   {
//     id: 1,
//     category: "Quantitative Ability",
//     difficulty: "Easy",
//     question:
//       "A company has 240 employees. If 35% work remotely, how many employees work remotely?",
//     options: ["72", "84", "96", "108"],
//     correctAnswer: 1,
//   },
//   {
//     id: 2,
//     category: "Percentages",
//     difficulty: "Easy",
//     question:
//       "A product costs ₹800 and is sold at a 15% discount. What is the selling price?",
//     options: ["₹640", "₹680", "₹720", "₹760"],
//     correctAnswer: 1,
//   },
//   {
//     id: 3,
//     category: "Ratio",
//     difficulty: "Easy",
//     question:
//       "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
//     options: ["15", "20", "25", "30"],
//     correctAnswer: 1,
//   },
//   {
//     id: 4,
//     category: "Averages",
//     difficulty: "Easy",
//     question:
//       "What is the average of 12, 18, 20 and 30?",
//     options: ["18", "19", "20", "21"],
//     correctAnswer: 2,
//   },
//   {
//     id: 5,
//     category: "Time & Work",
//     difficulty: "Easy",
//     question:
//       "A can complete a task in 12 days. What fraction of the task does A complete in one day?",
//     options: ["1/6", "1/10", "1/12", "1/24"],
//     correctAnswer: 2,
//   },
//   {
//     id: 6,
//     category: "Profit & Loss",
//     difficulty: "Easy",
//     question:
//       "An item costs ₹500 and is sold for ₹575. What is the profit percentage?",
//     options: ["10%", "12%", "15%", "18%"],
//     correctAnswer: 2,
//   },
//   {
//     id: 7,
//     category: "Number Series",
//     difficulty: "Medium",
//     question:
//       "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
//     options: ["36", "40", "42", "44"],
//     correctAnswer: 2,
//   },
//   {
//     id: 8,
//     category: "Simple Interest",
//     difficulty: "Easy",
//     question:
//       "₹10,000 earns simple interest at 8% per year for 2 years. What is the interest?",
//     options: ["₹800", "₹1,200", "₹1,600", "₹2,000"],
//     correctAnswer: 2,
//   },
//   {
//     id: 9,
//     category: "Probability",
//     difficulty: "Easy",
//     question:
//       "A bag contains 5 red and 5 blue balls. What is the probability of drawing a red ball?",
//     options: ["1/4", "1/3", "1/2", "2/3"],
//     correctAnswer: 2,
//   },
//   {
//     id: 10,
//     category: "Algebra",
//     difficulty: "Easy",
//     question:
//       "If x + 7 = 19, what is the value of x?",
//     options: ["10", "11", "12", "13"],
//     correctAnswer: 2,
//   },
//   ...Array.from({ length: 15 }, (_, index) => ({
//     id: index + 11,
//     category: "Quantitative Ability",
//     difficulty: index % 3 === 0 ? "Easy" : "Medium",
//     question: `Practice aptitude question ${index + 11}. Choose the most appropriate answer.`,
//     options: [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//     ],
//     correctAnswer: index % 4,
//   })),
// ];

// /* =========================================================
//    HEADER
// ========================================================= */

// function AssessmentHeader({
//   mode,
//   current,
//   total,
//   seconds,
//   onExit,
// }) {
//   const minutes = Math.floor(seconds / 60);
//   const remaining = seconds % 60;

//   const isTechnical = mode === "technical";

//   return (
//     <header className="relative z-20 flex h-[72px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-7">
//       <div className="flex min-w-0 items-center gap-3">
//         <button
//           onClick={onExit}
//           className="group flex h-9 items-center gap-2 rounded-lg px-2 text-[11px] font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
//         >
//           <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />

//           <span className="hidden sm:inline">
//             Exit Assessment
//           </span>
//         </button>

//         <div className="hidden h-7 w-px bg-slate-200 sm:block" />

//         <div className="min-w-0">
//           <div className="flex items-center gap-2">
//             <h1 className="truncate text-sm font-bold text-slate-900 md:text-[15px]">
//               {isTechnical
//                 ? "Technical Assessment"
//                 : "Aptitude Assessment"}
//             </h1>

//             <span className="hidden rounded-full bg-blue-50 px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-blue-600 sm:block">
//               {isTechnical
//                 ? "CS Fundamentals"
//                 : "Quantitative Ability"}
//             </span>
//           </div>

//           <p className="text-[9px] text-slate-400">
//             AI Interview Readiness · Assessment
//           </p>
//         </div>
//       </div>

//       <div className="absolute left-1/2 hidden -translate-x-1/2 text-center md:block">
//         <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
//           Question
//         </p>

//         <p className="mt-0.5 text-sm font-bold text-slate-900">
//           {String(current).padStart(2, "0")}
//           <span className="mx-1 text-slate-300">
//             /
//           </span>
//           {total}
//         </p>
//       </div>

//       <div className="flex items-center gap-2">
//         <div className="hidden items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 sm:flex">
//           <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

//           <span className="text-[9px] font-bold text-emerald-700">
//             Auto-saved
//           </span>
//         </div>

//         <div className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
//           <Clock3 className="h-3.5 w-3.5 text-blue-600" />

//           <span className="text-xs font-bold tabular-nums text-slate-800">
//             {String(minutes).padStart(2, "0")}:
//             {String(remaining).padStart(2, "0")}
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// }

// /* =========================================================
//    QUESTION PALETTE
// ========================================================= */

// function QuestionPalette({
//   total,
//   currentIndex,
//   answers,
//   marked,
//   onNavigate,
// }) {
//   const answeredCount =
//     Object.keys(answers).length;

//   const markedCount =
//     Object.values(marked).filter(Boolean).length;

//   return (
//     <aside className="hidden w-[350px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] lg:flex">
//       {/* PALETTE HEADER */}
//       <div className="flex h-[102px] shrink-0 items-center justify-between border-b border-slate-100 px-6">
//         <div>
//           <h2 className="text-[17px] font-bold tracking-tight text-slate-900">
//             Question Palette
//           </h2>

//           <p className="mt-1 text-[10px] text-slate-400">
//             Navigate between questions
//           </p>
//         </div>

//         <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//           <Grid2X2 className="h-4 w-4" />
//         </div>
//       </div>

//       {/* QUESTION NUMBERS */}
//       <div className="min-h-0 flex-1 px-5 py-5">
//         <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
//           Questions
//         </p>

//         <div className="grid grid-cols-5 gap-2">
//           {Array.from({ length: total }).map(
//             (_, index) => {
//               const isCurrent =
//                 currentIndex === index;

//               const isAnswered =
//                 answers[index] !== undefined;

//               const isMarked =
//                 Boolean(marked[index]);

//               return (
//                 <button
//                   key={index}
//                   onClick={() =>
//                     onNavigate(index)
//                   }
//                   className={`relative h-11 rounded-xl border text-[10px] font-bold transition-all ${
//                     isCurrent
//                       ? "border-blue-600 bg-blue-50 text-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.10)]"
//                       : isAnswered
//                       ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
//                       : "border-slate-200 bg-slate-50 text-slate-500 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
//                   }`}
//                 >
//                   {String(index + 1).padStart(
//                     2,
//                     "0"
//                   )}

//                   {isMarked && (
//                     <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 ring-2 ring-white" />
//                   )}
//                 </button>
//               );
//             }
//           )}
//         </div>
//       </div>

//       {/* STATS */}
//       <div className="shrink-0 border-t border-slate-100 p-5">
//         <div className="mb-4">
//           <div className="mb-2 flex items-center justify-between">
//             <span className="text-[10px] font-medium text-slate-500">
//               Attempted
//             </span>

//             <span className="text-[10px] font-bold text-blue-600">
//               {answeredCount}/{total}
//             </span>
//           </div>

//           <div className="h-1.5 rounded-full bg-slate-100">
//             <div
//               className="h-full rounded-full bg-blue-600 transition-all"
//               style={{
//                 width: `${
//                   (answeredCount / total) *
//                   100
//                 }%`,
//               }}
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <span className="text-[10px] text-slate-500">
//             Marked for review
//           </span>

//           <span className="text-[10px] font-bold text-amber-600">
//             {markedCount}
//           </span>
//         </div>
//       </div>
//     </aside>
//   );
// }

// /* =========================================================
//    MOBILE PALETTE
// ========================================================= */

// function MobileQuestionPalette({
//   total,
//   currentIndex,
//   answers,
//   marked,
//   onNavigate,
// }) {
//   return (
//     <div className="shrink-0 border-b border-slate-200 bg-white px-3 py-2.5 lg:hidden">
//       <div className="flex gap-1.5 overflow-x-auto">
//         {Array.from({ length: total }).map(
//           (_, index) => {
//             const isCurrent =
//               currentIndex === index;

//             const isAnswered =
//               answers[index] !== undefined;

//             return (
//               <button
//                 key={index}
//                 onClick={() =>
//                   onNavigate(index)
//                 }
//                 className={`relative flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-bold ${
//                   isCurrent
//                     ? "border-2 border-blue-600 bg-blue-50 text-blue-600"
//                     : isAnswered
//                     ? "bg-blue-600 text-white"
//                     : "bg-slate-100 text-slate-400"
//                 }`}
//               >
//                 {String(index + 1).padStart(
//                   2,
//                   "0"
//                 )}

//                 {marked[index] && (
//                   <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-amber-500 ring-2 ring-white" />
//                 )}
//               </button>
//             );
//           }
//         )}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    CODE
// ========================================================= */

// function CodeSnippet({ code }) {
//   return (
//     <div className= "rounded-xl border border-slate-200 bg-[#0f172a]">
//       <div className="flex h-8 items-center justify-between border-b border-white/10 px-4">
//         <div className="flex gap-1.5">
//           <span className="h-2 w-2 rounded-full bg-slate-500" />
//           <span className="h-2 w-2 rounded-full bg-slate-500" />
//           <span className="h-2 w-2 rounded-full bg-slate-500" />
//         </div>

//         <span className="font-mono text-[8px] text-slate-500">
//           code
//         </span>
//       </div>

//       <pre className="px-4 py-3 font-mono text-[11px] leading-5 text-slate-300">
//         <code>{code}</code>
//       </pre>
//     </div>
//   );
// }

// /* =========================================================
//    ANSWER OPTION
// ========================================================= */

// function AnswerOption({
//   index,
//   text,
//   selected,
//   onClick,
// }) {
//   const letter = String.fromCharCode(
//     65 + index
//   );

//   return (
//     <button
//       onClick={onClick}
//       className={`group flex min-h-[66px] w-full items-center gap-4 rounded-xl border px-4 text-left transition-all ${
//         selected
//           ? "border-blue-500 bg-blue-50 shadow-[0_5px_18px_rgba(37,99,235,0.07)]"
//           : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30"
//       }`}
//     >
//       <span
//         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold transition ${
//           selected
//             ? "bg-blue-600 text-white"
//             : "bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
//         }`}
//       >
//         {letter}
//       </span>

//       <span
//         className={`flex-1 text-xs leading-5 ${
//           selected
//             ? "font-semibold text-slate-900"
//             : "font-medium text-slate-600"
//         }`}
//       >
//         {text}
//       </span>

//       <span
//         className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
//           selected
//             ? "border-blue-600 bg-blue-600"
//             : "border-slate-300 bg-white"
//         }`}
//       >
//         {selected && (
//           <Check className="h-3 w-3 text-white" />
//         )}
//       </span>
//     </button>
//   );
// }

// /* =========================================================
//    QUESTION AREA
// ========================================================= */

// function QuestionCard({
//   question,
//   selectedAnswer,
//   onSelect,
// }) {
//   return (
//     <div className="flex h-full min-h-0 flex-col">
//       {/* META */}
//       <div className="flex shrink-0 items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-[10px] font-bold text-white shadow-[0_5px_15px_rgba(37,99,235,0.18)]">
//             {String(question.id).padStart(
//               2,
//               "0"
//             )}
//           </div>

//           <div>
//             <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-600">
//               Question {question.id}
//             </p>

//             <p className="mt-0.5 text-[9px] text-slate-400">
//               Multiple Choice · 1 Point
//             </p>
//           </div>
//         </div>

//         <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[8px] font-bold text-amber-700">
//           {question.difficulty}
//         </span>
//       </div>

//       {/* CATEGORY */}
//       <div className="mt-5 flex shrink-0 items-center gap-2">
//         <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

//         <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
//           {question.category}
//         </span>
//       </div>

//       {/* QUESTION */}
//       <h2 className="mt-2 shrink-0 max-w-[900px] text-[21px] font-bold leading-[1.42] tracking-[-0.025em] text-slate-900 md:text-[26px]">
//         {question.question}
//       </h2>

//       {/* CODE */}
//       {question.codeSnippet && (
//         <div className="mt-5 shrink-0">
//           <CodeSnippet
//             code={question.codeSnippet}
//           />
//         </div>
//       )}

//       {/* OPTIONS */}
//       <div className="mt-5 min-h-0 flex-1">
//         <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
//           {question.options.map(
//             (option, index) => (
//               <AnswerOption
//                 key={index}
//                 index={index}
//                 text={option}
//                 selected={
//                   selectedAnswer === index
//                 }
//                 onClick={() =>
//                   onSelect(index)
//                 }
//               />
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    ACTIONS
// ========================================================= */

// function QuestionActions({
//   currentIndex,
//   total,
//   marked,
//   onPrevious,
//   onNext,
//   onMark,
// }) {
//   const isLast =
//     currentIndex === total - 1;

//   return (
//     <div className="flex h-[72px] shrink-0 items-center justify-between border-t border-slate-100 bg-white px-5 md:px-7">
//       <button
//         onClick={onPrevious}
//         disabled={currentIndex === 0}
//         className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-4 text-[10px] font-bold text-slate-600 transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-30"
//       >
//         <ChevronLeft className="h-4 w-4" />
//         Previous
//       </button>

//       <button
//         onClick={onMark}
//         className={`flex h-10 items-center gap-2 rounded-xl px-4 text-[10px] font-bold transition ${
//           marked
//             ? "bg-amber-50 text-amber-700"
//             : "text-slate-400 hover:bg-slate-50 hover:text-slate-700"
//         }`}
//       >
//         <Flag
//           className={`h-3.5 w-3.5 ${
//             marked ? "fill-current" : ""
//           }`}
//         />

//         <span className="hidden sm:inline">
//           {marked
//             ? "Marked for Review"
//             : "Mark for Review"}
//         </span>

//         <span className="sm:hidden">
//           Mark
//         </span>
//       </button>

//       <button
//         onClick={onNext}
//         className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-[10px] font-bold text-white shadow-[0_7px_20px_rgba(37,99,235,0.20)] transition hover:bg-blue-700 active:scale-[0.98]"
//       >
//         {isLast
//           ? "Submit Assessment"
//           : "Save & Next"}

//         {isLast ? (
//           <Send className="h-3.5 w-3.5" />
//         ) : (
//           <ArrowRight className="h-3.5 w-3.5" />
//         )}
//       </button>
//     </div>
//   );
// }

// /* =========================================================
//    SUBMIT MODAL
// ========================================================= */

// function SubmitModal({
//   answered,
//   total,
//   onClose,
//   onSubmit,
// }) {
//   const unanswered =
//     total - answered;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/30 p-4 backdrop-blur-sm">
//       <div className="w-full max-w-[430px] rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.20)]">
//         <div className="p-6">
//           <div className="flex items-start justify-between">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//               <Send className="h-4 w-4" />
//             </div>

//             <button
//               onClick={onClose}
//               className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-700"
//             >
//               <X className="h-4 w-4" />
//             </button>
//           </div>

//           <h2 className="mt-5 text-lg font-bold text-slate-900">
//             Submit assessment?
//           </h2>

//           <p className="mt-2 text-xs leading-5 text-slate-500">
//             You have answered{" "}
//             <strong className="text-slate-900">
//               {answered}
//             </strong>{" "}
//             of{" "}
//             <strong className="text-slate-900">
//               {total}
//             </strong>{" "}
//             questions.
//           </p>

//           {unanswered > 0 && (
//             <div className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-[10px] font-semibold text-amber-700">
//               {unanswered} question
//               {unanswered > 1 ? "s" : ""}{" "}
//               {unanswered > 1
//                 ? "are"
//                 : "is"}{" "}
//               still unanswered.
//             </div>
//           )}
//         </div>

//         <div className="flex gap-2 border-t border-slate-100 bg-slate-50/60 p-4">
//           <button
//             onClick={onClose}
//             className="flex-1 rounded-xl border border-slate-200 bg-white py-3 text-[10px] font-bold text-slate-700 hover:bg-slate-50"
//           >
//             Continue Assessment
//           </button>

//           <button
//             onClick={onSubmit}
//             className="flex-1 rounded-xl bg-blue-600 py-3 text-[10px] font-bold text-white hover:bg-blue-700"
//           >
//             Submit Assessment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    COMPLETE
// ========================================================= */

// function AssessmentComplete({
//   onResults,
// }) {
//   return (
//     <div className="flex h-screen w-full items-center justify-center bg-[#f8fafc] p-5">
//       <div className="w-full max-w-[430px] rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
//         <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
//           <Check className="h-7 w-7 text-emerald-600" />
//         </div>

//         <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-600">
//           Successfully submitted
//         </p>

//         <h1 className="mt-2 text-2xl font-bold text-slate-900">
//           Assessment Submitted
//         </h1>

//         <p className="mt-2 text-xs leading-5 text-slate-500">
//           Your answers have been securely saved
//           and are now being evaluated.
//         </p>

//         <button
//           onClick={onResults}
//           className="mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-xs font-bold text-white hover:bg-blue-700"
//         >
//           View Results
//           <ArrowRight className="h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN
// ========================================================= */

// export default function MCQAssessment({
//   mode = "technical",
// }) {
//   const questions =
//     mode === "aptitude"
//       ? aptitudeQuestions
//       : technicalQuestions;

//   const [currentIndex, setCurrentIndex] =
//     useState(6);

//   const [answers, setAnswers] =
//     useState({});

//   const [marked, setMarked] =
//     useState({});

//   const [seconds, setSeconds] =
//     useState(12 * 60 + 48);

//   const [showSubmit, setShowSubmit] =
//     useState(false);

//   const [submitted, setSubmitted] =
//     useState(false);

//   useEffect(() => {
//     if (submitted) return;

//     const timer = setInterval(() => {
//       setSeconds((prev) =>
//         prev > 0 ? prev - 1 : 0
//       );
//     }, 1000);

//     return () =>
//       clearInterval(timer);
//   }, [submitted]);

//   const question =
//     questions[currentIndex];

//   const answeredCount = useMemo(
//     () => Object.keys(answers).length,
//     [answers]
//   );

//   const selectAnswer = (index) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [currentIndex]: index,
//     }));
//   };

//   const nextQuestion = () => {
//     if (
//       currentIndex ===
//       questions.length - 1
//     ) {
//       setShowSubmit(true);
//       return;
//     }

//     setCurrentIndex(
//       (prev) => prev + 1
//     );
//   };

//   const previousQuestion = () => {
//     if (currentIndex === 0) return;

//     setCurrentIndex(
//       (prev) => prev - 1
//     );
//   };

//   const toggleMark = () => {
//     setMarked((prev) => ({
//       ...prev,
//       [currentIndex]:
//         !prev[currentIndex],
//     }));
//   };

//   const exitAssessment = () => {
//     if (
//       window.confirm(
//         "Are you sure you want to exit this assessment?"
//       )
//     ) {
//       alert("Assessment exited.");
//     }
//   };

//   if (submitted) {
//     return (
//       <AssessmentComplete
//         onResults={() =>
//           alert(
//             "Opening assessment results..."
//           )
//         }
//       />
//     );
//   }

//   return (
//     <div className="flex h-screen w-full flex-col bg-[#f8fafc]">
//       {/* HEADER */}
//       <AssessmentHeader
//         mode={mode}
//         current={currentIndex + 1}
//         total={questions.length}
//         seconds={seconds}
//         onExit={exitAssessment}
//       />

//       {/* MOBILE PALETTE */}
//       <MobileQuestionPalette
//         total={questions.length}
//         currentIndex={currentIndex}
//         answers={answers}
//         marked={marked}
//         onNavigate={setCurrentIndex}
//       />

//       {/* BODY */}
//       <div className="min-h-0 flex-1 p-3 md:p-5">
//         <div className="flex h-full min-h-0 gap-4">
//           {/* LEFT PALETTE */}
//           <QuestionPalette
//             total={questions.length}
//             currentIndex={currentIndex}
//             answers={answers}
//             marked={marked}
//             onNavigate={setCurrentIndex}
//           />

//           {/* QUESTION PANEL */}
//           <main className="min-w-0 flex-1 overflow">
//             <div className="mx-auto flex h-full max-w-[1100px] flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.045)]">
//               {/* QUESTION CONTENT */}
//               <div className="min-h-0 flex-1 px-5 py-5 md:px-8 md:py-6">
//                 <QuestionCard
//                   question={question}
//                   selectedAnswer={
//                     answers[currentIndex]
//                   }
//                   onSelect={selectAnswer}
//                 />
//               </div>

//               {/* ACTIONS */}
//               <QuestionActions
//                 currentIndex={currentIndex}
//                 total={questions.length}
//                 marked={Boolean(
//                   marked[currentIndex]
//                 )}
//                 onPrevious={
//                   previousQuestion
//                 }
//                 onNext={nextQuestion}
//                 onMark={toggleMark}
//               />
//             </div>
//           </main>
//         </div>
//       </div>

//       {/* SUBMIT */}
//       {showSubmit && (
//         <SubmitModal
//           answered={answeredCount}
//           total={questions.length}
//           onClose={() =>
//             setShowSubmit(false)
//           }
//           onSubmit={() => {
//             setShowSubmit(false);
//             setSubmitted(true);
//           }}
//         />
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   Clock3,
//   Code2,
//   Flag,
//   Grid2X2,
//   Send,
//   ShieldCheck,
//   X,
//   Zap,
// } from "lucide-react";

// /* =========================================================
//    MOCK QUESTIONS
//    Apne existing question arrays yahan replace kar sakta hai.
// ========================================================= */

// const technicalQuestions = [
//   {
//     id: 1,
//     category: "JavaScript",
//     difficulty: "Easy",
//     question:
//       "Which keyword is used to declare a block-scoped variable that can be reassigned?",
//     options: ["const", "let", "var", "static"],
//     correctAnswer: 1,
//   },
//   {
//     id: 2,
//     category: "Data Structures",
//     difficulty: "Easy",
//     question: "Which data structure follows the Last In, First Out principle?",
//     options: ["Queue", "Stack", "Heap", "Graph"],
//     correctAnswer: 1,
//   },
//   {
//     id: 3,
//     category: "Algorithms",
//     difficulty: "Medium",
//     question:
//       "What is the average time complexity of searching for an element in a hash table?",
//     options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
//     correctAnswer: 0,
//   },
//   {
//     id: 4,
//     category: "SQL",
//     difficulty: "Medium",
//     question: "Which SQL clause is used to filter groups after aggregation?",
//     options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"],
//     correctAnswer: 2,
//   },
//   {
//     id: 5,
//     category: "React",
//     difficulty: "Easy",
//     question:
//       "Which React hook is primarily used to manage local component state?",
//     options: ["useEffect", "useState", "useMemo", "useRef"],
//     correctAnswer: 1,
//   },
//   {
//     id: 6,
//     category: "Databases",
//     difficulty: "Medium",
//     question:
//       "Which ACID property guarantees that a transaction happens completely or not at all?",
//     options: ["Consistency", "Atomicity", "Isolation", "Durability"],
//     correctAnswer: 1,
//   },
//   {
//     id: 7,
//     category: "Databases",
//     difficulty: "Medium",
//     question:
//       "Which concept helps reduce redundant data and unwanted dependencies in a relational database?",
//     codeSnippet: `SELECT department, COUNT(*)
// FROM employees
// GROUP BY department;`,
//     options: [
//       "Increasing database redundancy",
//       "Normalization",
//       "Encrypting database records",
//       "Increasing query execution time",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 8,
//     category: "Algorithms",
//     difficulty: "Easy",
//     question: "Which traversal visits tree nodes level by level?",
//     options: ["DFS", "BFS", "Backtracking", "Recursion"],
//     correctAnswer: 1,
//   },
//   {
//     id: 9,
//     category: "Web Development",
//     difficulty: "Easy",
//     question:
//       "Which HTTP method is commonly used to partially update an existing resource?",
//     options: ["GET", "POST", "PUT", "PATCH"],
//     correctAnswer: 3,
//   },
//   {
//     id: 10,
//     category: "System Design",
//     difficulty: "Medium",
//     question: "What is the primary purpose of a load balancer?",
//     options: [
//       "Store database records",
//       "Distribute traffic across servers",
//       "Compile source code",
//       "Encrypt passwords",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 11,
//     category: "Operating Systems",
//     difficulty: "Medium",
//     question:
//       "Which memory area is generally used for dynamically allocated objects?",
//     options: ["Stack", "Heap", "Register", "Cache"],
//     correctAnswer: 1,
//   },
//   {
//     id: 12,
//     category: "Git",
//     difficulty: "Easy",
//     question: "Which command creates a new Git branch?",
//     options: ["git merge", "git branch", "git stash", "git reset"],
//     correctAnswer: 1,
//   },
//   {
//     id: 13,
//     category: "Networking",
//     difficulty: "Medium",
//     question: "Which device routes packets between different networks?",
//     options: ["Switch", "Router", "Hub", "Repeater"],
//     correctAnswer: 1,
//   },
//   {
//     id: 14,
//     category: "OOP",
//     difficulty: "Easy",
//     question: "Which OOP principle hides internal implementation details?",
//     options: ["Inheritance", "Polymorphism", "Encapsulation", "Recursion"],
//     correctAnswer: 2,
//   },
//   {
//     id: 15,
//     category: "Databases",
//     difficulty: "Medium",
//     question:
//       "Which ACID property ensures committed data survives a system failure?",
//     options: ["Atomicity", "Consistency", "Isolation", "Durability"],
//     correctAnswer: 3,
//   },
//   {
//     id: 16,
//     category: "Algorithms",
//     difficulty: "Medium",
//     question:
//       "Which sorting algorithm has an average time complexity of O(n log n)?",
//     options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Linear Search"],
//     correctAnswer: 2,
//   },
//   {
//     id: 17,
//     category: "SQL",
//     difficulty: "Easy",
//     question: "Which SQL keyword removes duplicate rows from query results?",
//     options: ["UNIQUE", "DISTINCT", "FILTER", "DEDUP"],
//     correctAnswer: 1,
//   },
//   {
//     id: 18,
//     category: "JavaScript",
//     difficulty: "Easy",
//     question:
//       "Which method creates a new array containing elements that pass a test?",
//     options: ["map()", "filter()", "reduce()", "find()"],
//     correctAnswer: 1,
//   },
//   {
//     id: 19,
//     category: "System Design",
//     difficulty: "Medium",
//     question:
//       "Which component temporarily stores frequently accessed data?",
//     options: ["Cache", "Compiler", "Router", "Queue"],
//     correctAnswer: 0,
//   },
//   {
//     id: 20,
//     category: "Web Development",
//     difficulty: "Easy",
//     question: "Which HTTP status code generally indicates a successful request?",
//     options: ["200", "301", "404", "500"],
//     correctAnswer: 0,
//   },
//   {
//     id: 21,
//     category: "Security",
//     difficulty: "Medium",
//     question: "Which practice helps prevent SQL injection attacks?",
//     options: [
//       "String concatenation",
//       "Parameterized queries",
//       "Disabling indexes",
//       "Using larger databases",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 22,
//     category: "Node.js",
//     difficulty: "Medium",
//     question:
//       "Which object is commonly used to access environment variables in Node.js?",
//     options: ["process.env", "global.env", "node.env", "system.env"],
//     correctAnswer: 0,
//   },
//   {
//     id: 23,
//     category: "APIs",
//     difficulty: "Easy",
//     question: "What does REST primarily describe?",
//     options: [
//       "A database engine",
//       "An architectural style for networked applications",
//       "A programming language",
//       "A testing framework",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 24,
//     category: "Cloud",
//     difficulty: "Medium",
//     question: "What is horizontal scaling?",
//     options: [
//       "Adding resources to one machine",
//       "Adding more machines to handle load",
//       "Reducing memory usage",
//       "Compressing data",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 25,
//     category: "CS Fundamentals",
//     difficulty: "Easy",
//     question:
//       "Which data structure is commonly used to implement a priority queue?",
//     options: ["Stack", "Linked List", "Heap", "Array"],
//     correctAnswer: 2,
//   },
// ];

// const aptitudeQuestions = [
//   {
//     id: 1,
//     category: "Quantitative Ability",
//     difficulty: "Easy",
//     question:
//       "A company has 240 employees. If 35% work remotely, how many employees work remotely?",
//     options: ["72", "84", "96", "108"],
//     correctAnswer: 1,
//   },
//   {
//     id: 2,
//     category: "Percentages",
//     difficulty: "Easy",
//     question:
//       "A product costs ₹800 and is sold at a 15% discount. What is the selling price?",
//     options: ["₹640", "₹680", "₹720", "₹760"],
//     correctAnswer: 1,
//   },
//   {
//     id: 3,
//     category: "Ratio",
//     difficulty: "Easy",
//     question:
//       "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
//     options: ["15", "20", "25", "30"],
//     correctAnswer: 1,
//   },
//   {
//     id: 4,
//     category: "Averages",
//     difficulty: "Easy",
//     question: "What is the average of 12, 18, 20 and 30?",
//     options: ["18", "19", "20", "21"],
//     correctAnswer: 2,
//   },
//   {
//     id: 5,
//     category: "Time & Work",
//     difficulty: "Easy",
//     question:
//       "A can complete a task in 12 days. What fraction of the task does A complete in one day?",
//     options: ["1/6", "1/10", "1/12", "1/24"],
//     correctAnswer: 2,
//   },
//   {
//     id: 6,
//     category: "Profit & Loss",
//     difficulty: "Easy",
//     question:
//       "An item costs ₹500 and is sold for ₹575. What is the profit percentage?",
//     options: ["10%", "12%", "15%", "18%"],
//     correctAnswer: 2,
//   },
//   {
//     id: 7,
//     category: "Number Series",
//     difficulty: "Medium",
//     question: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
//     options: ["36", "40", "42", "44"],
//     correctAnswer: 2,
//   },
//   {
//     id: 8,
//     category: "Simple Interest",
//     difficulty: "Easy",
//     question:
//       "₹10,000 earns simple interest at 8% per year for 2 years. What is the interest?",
//     options: ["₹800", "₹1,200", "₹1,600", "₹2,000"],
//     correctAnswer: 2,
//   },
//   {
//     id: 9,
//     category: "Probability",
//     difficulty: "Easy",
//     question:
//       "A bag contains 5 red and 5 blue balls. What is the probability of drawing a red ball?",
//     options: ["1/4", "1/3", "1/2", "2/3"],
//     correctAnswer: 2,
//   },
//   {
//     id: 10,
//     category: "Algebra",
//     difficulty: "Easy",
//     question: "If x + 7 = 19, what is the value of x?",
//     options: ["10", "11", "12", "13"],
//     correctAnswer: 2,
//   },
//   ...Array.from({ length: 15 }, (_, index) => ({
//     id: index + 11,
//     category: "Quantitative Ability",
//     difficulty: index % 3 === 0 ? "Easy" : "Medium",
//     question: `Practice aptitude question ${index + 11}. Choose the most appropriate answer.`,
//     options: ["Option A", "Option B", "Option C", "Option D"],
//     correctAnswer: index % 4,
//   })),
// ];

// /* =========================================================
//    HEADER
// ========================================================= */

// function AssessmentHeader({ mode, current, total, seconds, onExit }) {
//   const minutes = Math.floor(seconds / 60);
//   const remaining = seconds % 60;
//   const timeLow = seconds <= 300;

//   return (
//     <header className="relative z-20 shrink-0 border-b border-slate-200 bg-white">
//       <div className="flex h-[68px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
//         <div className="flex min-w-0 items-center gap-3">
//           <button
//             type="button"
//             onClick={onExit}
//             aria-label="Exit assessment"
//             className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
//           >
//             <ArrowLeft size={18} />
//           </button>

//           <div className="min-w-0">
//             <div className="flex items-center gap-2">
//               <h1 className="truncate text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
//                 {mode === "aptitude"
//                   ? "Aptitude Assessment"
//                   : "Technical Assessment"}
//               </h1>
//               <span className="hidden rounded-md bg-blue-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-700 sm:inline-flex">
//                 Live test
//               </span>
//             </div>
//             <p className="mt-0.5 truncate text-[11px] text-slate-500">
//               Question {current} of {total}
//             </p>
//           </div>
//         </div>

//         <div className="flex shrink-0 items-center gap-3">
//           <div className="hidden items-center gap-1.5 text-xs font-medium text-emerald-700 sm:flex">
//             <ShieldCheck size={16} />
//             Assessment in progress
//           </div>

//           <div
//             className={`flex items-center gap-2 rounded-xl border px-3 py-2 sm:px-4 ${
//               timeLow
//                 ? "border-rose-200 bg-rose-50 text-rose-700"
//                 : "border-blue-100 bg-blue-50 text-blue-700"
//             }`}
//           >
//             <Clock3 size={17} />
//             <span className="font-mono text-sm font-extrabold tabular-nums">
//               {String(minutes).padStart(2, "0")}:
//               {String(remaining).padStart(2, "0")}
//             </span>
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
//   mobile = false,
// }) {
//   const answered = Object.keys(answers).length;
//   const markedCount = Object.values(marked).filter(Boolean).length;
//   const unanswered = questions.length - answered;

//   if (mobile) {
//     return (
//       <div className="shrink-0 border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
//         <div className="mb-2.5 flex items-center justify-between">
//           <span className="text-[11px] font-bold text-slate-700">
//             Question navigator
//           </span>
//           <span className="text-[10px] font-semibold text-slate-400">
//             {answered}/{questions.length} answered
//           </span>
//         </div>

//         <div className="flex gap-2 overflow-x-auto pb-1">
//           {questions.map((question, index) => {
//             const active = currentIndex === index;
//             const isAnswered = answers[index] !== undefined;

//             return (
//               <button
//                 type="button"
//                 key={`${question.id}-${index}`}
//                 onClick={() => onNavigate(index)}
//                 aria-label={`Go to question ${index + 1}`}
//                 aria-current={active ? "step" : undefined}
//                 className={`relative flex h-9 min-w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition ${
//                   active
//                     ? "bg-blue-600 text-white shadow-md shadow-blue-200"
//                     : isAnswered
//                       ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
//                       : "bg-slate-100 text-slate-500 hover:bg-slate-200"
//                 }`}
//               >
//                 {index + 1}
//                 {marked[index] && (
//                   <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-white" />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <aside className="hidden w-[248px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:flex">
//       <div className="border-b border-slate-100 p-5">
//         <div className="flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//             <Grid2X2 size={18} />
//           </div>
//           <div>
//             <h2 className="text-sm font-extrabold text-slate-900">
//               Question palette
//             </h2>
//             <p className="mt-0.5 text-[11px] text-slate-500">
//               Jump to a question
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="min-h-0 flex-1 overflow-y-auto p-4">
//         <div className="grid grid-cols-5 gap-2">
//           {questions.map((question, index) => {
//             const active = currentIndex === index;
//             const isAnswered = answers[index] !== undefined;

//             return (
//               <button
//                 type="button"
//                 key={`${question.id}-${index}`}
//                 onClick={() => onNavigate(index)}
//                 aria-label={`Go to question ${index + 1}`}
//                 className={`relative flex h-9 items-center justify-center rounded-lg border text-[11px] font-bold transition ${
//                   active
//                     ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-100"
//                     : isAnswered
//                       ? "border-blue-200 bg-blue-50 text-blue-700"
//                       : "border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:bg-blue-50"
//                 }`}
//               >
//                 {index + 1}
//                 {marked[index] && (
//                   <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-white" />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="border-t border-slate-100 bg-slate-50/70 p-4">
//         <div className="mb-4 flex items-center justify-between">
//           <span className="text-xs font-medium text-slate-500">Completion</span>
//           <span className="text-xs font-extrabold text-blue-700">
//             {Math.round((answered / questions.length) * 100)}%
//           </span>
//         </div>

//         <div className="h-2 overflow-hidden rounded-full bg-slate-200">
//           <div
//             className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all"
//             style={{ width: `${(answered / questions.length) * 100}%` }}
//           />
//         </div>

//         <div className="mt-4 space-y-2.5">
//           <div className="flex items-center justify-between text-[11px]">
//             <span className="flex items-center gap-2 text-slate-500">
//               <span className="h-2 w-2 rounded-full bg-blue-600" />
//               Answered
//             </span>
//             <span className="font-bold text-slate-800">{answered}</span>
//           </div>

//           <div className="flex items-center justify-between text-[11px]">
//             <span className="flex items-center gap-2 text-slate-500">
//               <span className="h-2 w-2 rounded-full bg-slate-300" />
//               Unanswered
//             </span>
//             <span className="font-bold text-slate-800">{unanswered}</span>
//           </div>

//           <div className="flex items-center justify-between text-[11px]">
//             <span className="flex items-center gap-2 text-slate-500">
//               <Flag size={12} className="text-amber-500" />
//               Review later
//             </span>
//             <span className="font-bold text-slate-800">{markedCount}</span>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// /* =========================================================
//    CODE SNIPPET
// ========================================================= */

// function CodeSnippet({ code }) {
//   if (!code || !String(code).trim()) return null;

//   return (
//     <div className="my-4 overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] shadow-lg shadow-slate-900/5">
//       <div className="flex h-10 items-center justify-between border-b border-white/10 bg-white/[0.03] px-4">
//         <div className="flex items-center gap-2">
//           <Code2 size={14} className="text-blue-400" />
//           <span className="text-[11px] font-semibold text-slate-300">
//             Code snippet
//           </span>
//         </div>
//         <div className="flex gap-1.5">
//           <span className="h-2 w-2 rounded-full bg-rose-400/80" />
//           <span className="h-2 w-2 rounded-full bg-amber-300/80" />
//           <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
//         </div>
//       </div>

//       <pre className="max-h-44 overflow-auto p-4 text-xs leading-6 text-blue-100 sm:text-[13px]">
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
//       className={`group relative flex min-h-[62px] w-full items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 sm:min-h-[68px] sm:p-4 ${
//         selected
//           ? "border-blue-500 bg-blue-50 shadow-[0_4px_18px_rgba(37,99,235,0.09)] ring-1 ring-blue-500"
//           : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
//       }`}
//     >
//       <span
//         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition ${
//           selected
//             ? "bg-blue-600 text-white shadow-md shadow-blue-200"
//             : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700"
//         }`}
//       >
//         {letter}
//       </span>

//       <span
//         className={`min-w-0 flex-1 break-words text-[13px] leading-5 sm:text-sm ${
//           selected
//             ? "font-semibold text-slate-900"
//             : "font-medium text-slate-600"
//         }`}
//       >
//         {text}
//       </span>

//       <span
//         className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
//           selected
//             ? "border-blue-600 bg-blue-600 text-white"
//             : "border-slate-300 bg-white group-hover:border-blue-400"
//         }`}
//       >
//         {selected && <Check size={12} strokeWidth={3} />}
//       </span>
//     </button>
//   );
// }

// /* =========================================================
//    SUBMIT MODAL
// ========================================================= */

// function SubmitModal({ answered, total, onClose, onSubmit }) {
//   const unanswered = total - answered;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="submit-title"
//     >
//       <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.25)]">
//         <div className="p-6 sm:p-7">
//           <div className="flex items-start justify-between">
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
//               <Send size={21} />
//             </div>

//             <button
//               type="button"
//               onClick={onClose}
//               aria-label="Close dialog"
//               className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
//             >
//               <X size={18} />
//             </button>
//           </div>

//           <h2
//             id="submit-title"
//             className="mt-5 text-xl font-extrabold tracking-tight text-slate-900"
//           >
//             Submit your assessment?
//           </h2>

//           <p className="mt-2 text-sm leading-6 text-slate-500">
//             Review your progress before submitting your answers.
//           </p>

//           <div className="mt-5 grid grid-cols-2 gap-3">
//             <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
//               <p className="text-xs font-medium text-blue-700">Answered</p>
//               <p className="mt-1 text-2xl font-extrabold text-blue-800">
//                 {answered}
//                 <span className="text-sm font-semibold text-blue-400">
//                   /{total}
//                 </span>
//               </p>
//             </div>

//             <div
//               className={`rounded-2xl border p-4 ${
//                 unanswered
//                   ? "border-amber-100 bg-amber-50/70"
//                   : "border-emerald-100 bg-emerald-50/70"
//               }`}
//             >
//               <p
//                 className={`text-xs font-medium ${
//                   unanswered ? "text-amber-700" : "text-emerald-700"
//                 }`}
//               >
//                 Unanswered
//               </p>
//               <p
//                 className={`mt-1 text-2xl font-extrabold ${
//                   unanswered ? "text-amber-800" : "text-emerald-800"
//                 }`}
//               >
//                 {unanswered}
//               </p>
//             </div>
//           </div>

//           {unanswered > 0 && (
//             <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
//               You have {unanswered} unanswered question
//               {unanswered === 1 ? "" : "s"}. You can continue the test or
//               submit now.
//             </p>
//           )}
//         </div>

//         <div className="flex gap-3 border-t border-slate-100 bg-slate-50/70 p-5">
//           <button
//             type="button"
//             onClick={onClose}
//             className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
//           >
//             Continue test
//           </button>

//           <button
//             type="button"
//             onClick={onSubmit}
//             className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
//           >
//             Submit test
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    COMPLETION SCREEN
// ========================================================= */

// function AssessmentComplete({ onResults }) {
//   return (
//     <div className="flex min-h-dvh items-center justify-center bg-[#f5f8ff] p-5">
//       <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-10">
//         <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
//           <Check size={30} strokeWidth={2.5} />
//         </div>

//         <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-600">
//           Submission complete
//         </p>

//         <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
//           Well done!
//         </h1>

//         <p className="mt-3 text-sm leading-6 text-slate-500">
//           Your assessment has been submitted in this session.
//         </p>

//         <button
//           type="button"
//           onClick={onResults}
//           className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
//         >
//           Back to assessments
//           <ArrowRight size={16} />
//         </button>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN ASSESSMENT COMPONENT
// ========================================================= */

// export default function MCQAssessment({
//   mode = "technical",
//   onSubmit,
// }) {
//   const questions =
//     mode === "aptitude" ? aptitudeQuestions : technicalQuestions;

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [marked, setMarked] = useState({});
//   const [seconds, setSeconds] = useState(60 * 60);
//   const [showSubmit, setShowSubmit] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   /* Timer */
//   useEffect(() => {
//     if (submitted || seconds <= 0) return undefined;

//     const timer = setInterval(() => {
//       setSeconds((previous) => Math.max(0, previous - 1));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [submitted, seconds]);

//   /* Open submit dialog when timer expires */
//   useEffect(() => {
//     if (seconds === 0 && !submitted) {
//       setShowSubmit(true);
//     }
//   }, [seconds, submitted]);

//   const question = questions[currentIndex];
//   const answeredCount = Object.keys(answers).length;

//   const selectAnswer = (optionIndex) => {
//     setAnswers((previous) => ({
//       ...previous,
//       [currentIndex]: optionIndex,
//     }));
//   };

//   const exitAssessment = () => {
//     if (window.confirm("Are you sure you want to exit this assessment?")) {
//       window.history.back();
//     }
//   };

//   const submitAssessment = () => {
//     const payload = {
//       mode,
//       answers: questions.map((item, index) => ({
//         questionId: item.id,
//         selectedAnswer: answers[index] ?? null,
//       })),
//       submittedAt: new Date().toISOString(),
//     };

//     if (onSubmit) {
//       onSubmit(payload);
//     }

//     setShowSubmit(false);
//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <AssessmentComplete
//         onResults={() => window.history.back()}
//       />
//     );
//   }

//   if (!question) {
//     return (
//       <div className="flex min-h-dvh items-center justify-center bg-slate-50 p-6">
//         <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
//           <h1 className="font-bold text-slate-900">
//             No questions available
//           </h1>
//           <p className="mt-2 text-sm text-slate-500">
//             This assessment does not contain any questions.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   /* Supports both database and UI field naming conventions */
//   const codeSnippet =
//     question.codeSnippet ?? question.code_snippet ?? null;

//   const category =
//     question.category ?? question.topic ?? "General";

//   const difficulty =
//     question.difficulty ?? "Medium";

//   return (
//     <div className="flex h-dvh flex-col overflow-hidden bg-[#f5f7fb] text-slate-900 selection:bg-blue-100">
//       <AssessmentHeader
//         mode={mode}
//         current={currentIndex + 1}
//         total={questions.length}
//         seconds={seconds}
//         onExit={exitAssessment}
//       />

//       {/* Mobile question navigation */}
//       <QuestionPalette
//         mobile
//         questions={questions}
//         currentIndex={currentIndex}
//         answers={answers}
//         marked={marked}
//         onNavigate={setCurrentIndex}
//       />

//       <main className="flex min-h-0 flex-1 gap-5 p-3 sm:p-5 lg:p-6">
//         {/* Desktop question palette */}
//         <QuestionPalette
//           questions={questions}
//           currentIndex={currentIndex}
//           answers={answers}
//           marked={marked}
//           onNavigate={setCurrentIndex}
//         />

//         {/* Main question panel */}
//         <section className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.045)]">
//           {/* Overall progress */}
//           <div className="h-1 shrink-0 bg-slate-100">
//             <div
//               className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 transition-all duration-300"
//               style={{
//                 width: `${((currentIndex + 1) / questions.length) * 100}%`,
//               }}
//             />
//           </div>

//           {/* Scroll only when content requires it */}
//           <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
//             <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-5 sm:px-7 sm:py-7 lg:justify-center lg:px-10 lg:py-6">
//               {/* Question metadata */}
//               <div className="flex shrink-0 items-center justify-between gap-3">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-extrabold text-white shadow-lg shadow-blue-200/70">
//                     {String(currentIndex + 1).padStart(2, "0")}
//                   </div>

//                   <div>
//                     <div className="flex items-center gap-2">
//                       <h2 className="text-sm font-extrabold text-slate-900 sm:text-base">
//                         Question {currentIndex + 1}
//                       </h2>
//                       <span className="hidden rounded-md bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500 sm:inline">
//                         SINGLE SELECT
//                       </span>
//                     </div>

//                     <p className="mt-1 text-[11px] text-slate-500">
//                       Choose one correct answer
//                     </p>
//                   </div>
//                 </div>

//                 <span
//                   className={`shrink-0 rounded-lg px-3 py-1.5 text-[10px] font-bold ${
//                     difficulty.toLowerCase() === "easy"
//                       ? "bg-emerald-50 text-emerald-700"
//                       : difficulty.toLowerCase() === "hard"
//                         ? "bg-rose-50 text-rose-700"
//                         : "bg-amber-50 text-amber-700"
//                   }`}
//                 >
//                   {difficulty}
//                 </span>
//               </div>

//               {/* Category */}
//               <div className="mt-6 flex shrink-0 items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
//                 <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700">
//                   {category}
//                 </span>
//                 <span className="text-slate-300">•</span>
//                 <span className="text-[10px] font-medium text-slate-400">
//                   1 point
//                 </span>
//               </div>

//               {/* Question text */}
//               <h3 className="mt-3 max-w-4xl shrink-0 text-[18px] font-bold leading-[1.55] tracking-[-0.025em] text-slate-900 sm:text-xl lg:text-[22px]">
//                 {question.question}
//               </h3>

//               {/* Conditional code block */}
//               {codeSnippet && <CodeSnippet code={codeSnippet} />}

//               {/* Options heading */}
//               <div className="mb-3 mt-6 flex shrink-0 items-center justify-between gap-3">
//                 <p className="text-xs font-bold text-slate-800">
//                   Answer options
//                 </p>

//                 <p className="text-[10px] font-medium text-slate-400">
//                   {answers[currentIndex] !== undefined
//                     ? "Answer selected"
//                     : "Select an option"}
//                 </p>
//               </div>

//               {/* Responsive answer options */}
//               <div className="grid shrink-0 grid-cols-1 gap-3 md:grid-cols-2">
//                 {question.options.map((option, index) => (
//                   <AnswerOption
//                     key={index}
//                     index={index}
//                     text={option}
//                     selected={answers[currentIndex] === index}
//                     onClick={() => selectAnswer(index)}
//                   />
//                 ))}
//               </div>

//               {/* Session information */}
//               <div className="mt-5 flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5">
//                 <Zap size={14} className="shrink-0 text-blue-600" />
//                 <p className="text-[10px] leading-4 text-slate-500">
//                   Your selection is saved in this session. You can change it
//                   before submitting.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Fixed bottom actions */}
//           <footer className="z-10 flex shrink-0 items-center justify-between gap-2 border-t border-slate-200 bg-white px-3 py-3 sm:px-6 sm:py-4">
//             <button
//               type="button"
//               onClick={() =>
//                 setCurrentIndex((previous) => Math.max(0, previous - 1))
//               }
//               disabled={currentIndex === 0}
//               className="flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35 sm:px-4"
//             >
//               <ChevronLeft size={16} />
//               Previous
//             </button>

//             <button
//               type="button"
//               onClick={() =>
//                 setMarked((previous) => ({
//                   ...previous,
//                   [currentIndex]: !previous[currentIndex],
//                 }))
//               }
//               className={`flex h-10 items-center gap-1.5 rounded-xl px-2.5 text-xs font-bold transition sm:px-4 ${
//                 marked[currentIndex]
//                   ? "bg-amber-50 text-amber-700"
//                   : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
//               }`}
//             >
//               <Flag
//                 size={15}
//                 className={marked[currentIndex] ? "fill-amber-400" : ""}
//               />
//               <span className="hidden sm:inline">
//                 {marked[currentIndex]
//                   ? "Marked for review"
//                   : "Mark for review"}
//               </span>
//               <span className="sm:hidden">Mark</span>
//             </button>

//             {currentIndex === questions.length - 1 ? (
//               <button
//                 type="button"
//                 onClick={() => setShowSubmit(true)}
//                 className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-3 text-xs font-bold text-white shadow-lg shadow-blue-200/60 transition hover:bg-blue-700 active:scale-[0.98] sm:px-5"
//               >
//                 Submit assessment
//                 <Send size={14} />
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() =>
//                   setCurrentIndex((previous) => previous + 1)
//                 }
//                 className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-3 text-xs font-bold text-white shadow-lg shadow-blue-200/60 transition hover:bg-blue-700 active:scale-[0.98] sm:px-5"
//               >
//                 Save & Next
//                 <ChevronRight size={15} />
//               </button>
//             )}
//           </footer>
//         </section>
//       </main>

//       {/* Submission confirmation */}
//       {showSubmit && (
//         <SubmitModal
//           answered={answeredCount}
//           total={questions.length}
//           onClose={() => {
//             if (seconds > 0) setShowSubmit(false);
//           }}
//           onSubmit={submitAssessment}
//         />
//       )}
//     </div>
//   );
// }














// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { useTest } from "@/app/context/tests.context";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   ChevronLeft,
//   Clock3,
//   Code2,
//   Flag,
//   Grid2X2,
//   LayoutDashboard,
//   ShieldCheck,
//   Sparkles,
//   Send,
//   Trophy,
//   X,
//   Zap,
//   CircleHelp,
// } from "lucide-react";
// import { useSearchParams } from "next/navigation";
// /* =========================================================
//    QUESTION DATA
// ========================================================= */

// const technicalQuestions = [
//   {
//     id: 1,
//     category: "JavaScript",
//     difficulty: "Easy",
//     question: "Which keyword is used to declare a block-scoped variable that can be reassigned?",
//     options: ["const", "let", "var", "static"],
//     correctAnswer: 1,
//   },
//   {
//     id: 2,
//     category: "Data Structures",
//     difficulty: "Easy",
//     question: "Which data structure follows the Last In, First Out principle?",
//     options: ["Queue", "Stack", "Heap", "Graph"],
//     correctAnswer: 1,
//   },
//   {
//     id: 3,
//     category: "Algorithms",
//     difficulty: "Medium",
//     question: "What is the average time complexity of searching for an element in a hash table?",
//     options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
//     correctAnswer: 0,
//   },
//   {
//     id: 4,
//     category: "SQL",
//     difficulty: "Medium",
//     question: "Which SQL clause is used to filter groups after aggregation?",
//     options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"],
//     correctAnswer: 2,
//   },
//   {
//     id: 5,
//     category: "React",
//     difficulty: "Easy",
//     question: "Which React hook is primarily used to manage local component state?",
//     options: ["useEffect", "useState", "useMemo", "useRef"],
//     correctAnswer: 1,
//   },
//   {
//     id: 6,
//     category: "Databases",
//     difficulty: "Medium",
//     question: "Which ACID property guarantees that a transaction happens completely or not at all?",
//     options: ["Consistency", "Atomicity", "Isolation", "Durability"],
//     correctAnswer: 1,
//   },
//   {
//     id: 7,
//     category: "CS Fundamentals",
//     difficulty: "Medium",
//     question: "Which of the following best describes normalization in a relational database?",
//     codeSnippet: `SELECT department, COUNT(*)
// FROM employees
// GROUP BY department;`,
//     options: [
//       "Increasing database redundancy",
//       "Reducing redundancy and dependency",
//       "Encrypting database records",
//       "Increasing query execution time",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 8,
//     category: "Algorithms",
//     difficulty: "Easy",
//     question: "Which traversal visits nodes level by level in a tree?",
//     options: ["DFS", "BFS", "Backtracking", "Recursion"],
//     correctAnswer: 1,
//   },
//   {
//     id: 9,
//     category: "Web Development",
//     difficulty: "Easy",
//     question: "Which HTTP method is commonly used to partially update an existing resource?",
//     options: ["GET", "POST", "PUT", "PATCH"],
//     correctAnswer: 3,
//   },
//   {
//     id: 10,
//     category: "System Design",
//     difficulty: "Medium",
//     question: "What is the primary purpose of a load balancer?",
//     options: [
//       "Store database records",
//       "Distribute traffic across servers",
//       "Compile source code",
//       "Encrypt passwords",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 11,
//     category: "Operating Systems",
//     difficulty: "Medium",
//     question: "Which memory area is generally used for dynamically allocated objects?",
//     options: ["Stack", "Heap", "Register", "Cache"],
//     correctAnswer: 1,
//   },
//   {
//     id: 12,
//     category: "Git",
//     difficulty: "Easy",
//     question: "Which command creates a new Git branch?",
//     options: ["git merge", "git branch", "git stash", "git reset"],
//     correctAnswer: 1,
//   },
//   {
//     id: 13,
//     category: "Networking",
//     difficulty: "Medium",
//     question: "Which device routes packets between different networks?",
//     options: ["Switch", "Router", "Hub", "Repeater"],
//     correctAnswer: 1,
//   },
//   {
//     id: 14,
//     category: "OOP",
//     difficulty: "Easy",
//     question: "Which OOP principle hides internal implementation details?",
//     options: ["Inheritance", "Polymorphism", "Encapsulation", "Recursion"],
//     correctAnswer: 2,
//   },
//   {
//     id: 15,
//     category: "Databases",
//     difficulty: "Medium",
//     question: "Which ACID property ensures committed data survives a system failure?",
//     options: ["Atomicity", "Consistency", "Isolation", "Durability"],
//     correctAnswer: 3,
//   },
//   {
//     id: 16,
//     category: "Algorithms",
//     difficulty: "Medium",
//     question: "Which sorting algorithm has an average time complexity of O(n log n)?",
//     options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Linear Search"],
//     correctAnswer: 2,
//   },
//   {
//     id: 17,
//     category: "SQL",
//     difficulty: "Easy",
//     question: "Which SQL keyword removes duplicate rows from query results?",
//     options: ["UNIQUE", "DISTINCT", "FILTER", "DEDUP"],
//     correctAnswer: 1,
//   },
//   {
//     id: 18,
//     category: "JavaScript",
//     difficulty: "Easy",
//     question: "Which method creates a new array containing elements that pass a test?",
//     options: ["map()", "filter()", "reduce()", "find()"],
//     correctAnswer: 1,
//   },
//   {
//     id: 19,
//     category: "System Design",
//     difficulty: "Medium",
//     question: "Which component is commonly used to temporarily store frequently accessed data?",
//     options: ["Cache", "Compiler", "Router", "Queue"],
//     correctAnswer: 0,
//   },
//   {
//     id: 20,
//     category: "Web Development",
//     difficulty: "Easy",
//     question: "Which HTTP status code generally indicates a successful request?",
//     options: ["200", "301", "404", "500"],
//     correctAnswer: 0,
//   },
//   {
//     id: 21,
//     category: "Security",
//     difficulty: "Medium",
//     question: "Which practice helps prevent SQL injection attacks?",
//     options: [
//       "String concatenation",
//       "Parameterized queries",
//       "Disabling indexes",
//       "Using larger databases",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 22,
//     category: "Node.js",
//     difficulty: "Medium",
//     question: "Which object is commonly used to access environment variables in Node.js?",
//     options: ["process.env", "global.env", "node.env", "system.env"],
//     correctAnswer: 0,
//   },
//   {
//     id: 23,
//     category: "APIs",
//     difficulty: "Easy",
//     question: "What does REST primarily describe?",
//     options: [
//       "A database engine",
//       "An architectural style for networked applications",
//       "A programming language",
//       "A testing framework",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 24,
//     category: "Cloud",
//     difficulty: "Medium",
//     question: "What is horizontal scaling?",
//     options: [
//       "Adding more resources to one machine",
//       "Adding more machines to handle load",
//       "Reducing memory usage",
//       "Compressing data",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 25,
//     category: "CS Fundamentals",
//     difficulty: "Easy",
//     question: "Which data structure is commonly used to implement a priority queue?",
//     options: ["Stack", "Linked List", "Heap", "Array"],
//     correctAnswer: 2,
//   },
// ];

// const aptitudeQuestions = [
//   {
//     id: 1,
//     category: "Quantitative Ability",
//     difficulty: "Easy",
//     question: "A company has 240 employees. If 35% work remotely, how many employees work remotely?",
//     options: ["72", "84", "96", "108"],
//     correctAnswer: 1,
//   },
//   {
//     id: 2,
//     category: "Percentages",
//     difficulty: "Easy",
//     question: "A product costs ₹800 and is sold at a 15% discount. What is the selling price?",
//     options: ["₹640", "₹680", "₹720", "₹760"],
//     correctAnswer: 1,
//   },
//   {
//     id: 3,
//     category: "Ratio",
//     difficulty: "Easy",
//     question: "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
//     options: ["15", "20", "25", "30"],
//     correctAnswer: 1,
//   },
//   {
//     id: 4,
//     category: "Averages",
//     difficulty: "Easy",
//     question: "What is the average of 12, 18, 20 and 30?",
//     options: ["18", "19", "20", "21"],
//     correctAnswer: 2,
//   },
//   {
//     id: 5,
//     category: "Time & Work",
//     difficulty: "Easy",
//     question: "A can complete a task in 12 days. What fraction of the task does A complete in one day?",
//     options: ["1/6", "1/10", "1/12", "1/24"],
//     correctAnswer: 2,
//   },
//   {
//     id: 6,
//     category: "Profit & Loss",
//     difficulty: "Easy",
//     question: "An item costs ₹500 and is sold for ₹575. What is the profit percentage?",
//     options: ["10%", "12%", "15%", "18%"],
//     correctAnswer: 2,
//   },
//   {
//     id: 7,
//     category: "Number Series",
//     difficulty: "Medium",
//     question: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
//     options: ["36", "40", "42", "44"],
//     correctAnswer: 2,
//   },
//   {
//     id: 8,
//     category: "Simple Interest",
//     difficulty: "Easy",
//     question: "₹10,000 earns simple interest at 8% per year for 2 years. What is the interest?",
//     options: ["₹800", "₹1,200", "₹1,600", "₹2,000"],
//     correctAnswer: 2,
//   },
//   {
//     id: 9,
//     category: "Probability",
//     difficulty: "Easy",
//     question: "A bag contains 5 red and 5 blue balls. What is the probability of drawing a red ball?",
//     options: ["1/4", "1/3", "1/2", "2/3"],
//     correctAnswer: 2,
//   },
//   {
//     id: 10,
//     category: "Algebra",
//     difficulty: "Easy",
//     question: "If x + 7 = 19, what is the value of x?",
//     options: ["10", "11", "12", "13"],
//     correctAnswer: 2,
//   },
//   ...Array.from({ length: 15 }, (_, index) => ({
//     id: index + 11,
//     category: "Quantitative Ability",
//     difficulty: index % 3 === 0 ? "Easy" : "Medium",
//     question: `Practice aptitude question ${index + 11}. Choose the most appropriate answer.`,
//     options: ["Option A", "Option B", "Option C", "Option D"],
//     correctAnswer: index % 4,
//   })),
// ];

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
//    HEADER
// ========================================================= */

// function AssessmentHeader({
//   mode,
//   current,
//   total,
//   seconds,
//   onExit,
// }) {
//   const isTechnical = mode === "technical";
//   const isLowTime = seconds <= 300;

//   return (
//     <header className="relative z-20 shrink-0 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
//       <div className="flex h-[68px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
//         <div className="flex min-w-0 items-center gap-3">
//           <button
//             type="button"
//             onClick={onExit}
//             aria-label="Exit assessment"
//             className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:w-auto sm:px-3"
//           >
//             <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
//             <span className="ml-2 hidden text-xs font-semibold sm:inline">
//               Exit
//             </span>
//           </button>

//           <div className="h-8 w-px shrink-0 bg-slate-200" />

//           <div className="min-w-0">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
//                 <Zap className="h-4 w-4 fill-current" />
//               </div>

//               <div className="min-w-0">
//                 <h1 className="truncate text-xs font-extrabold tracking-tight text-slate-900 sm:text-sm">
//                   {isTechnical
//                     ? "Technical Assessment"
//                     : "Aptitude Assessment"}
//                 </h1>

//                 <p className="hidden text-[10px] text-slate-500 sm:block">
//                   Interview readiness · Assessment
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="hidden items-center gap-3 md:flex">
//           <div className="text-right">
//             <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
//               Your progress
//             </p>
//             <p className="mt-0.5 text-xs font-bold text-slate-800">
//               Question {current}{" "}
//               <span className="font-medium text-slate-400">
//                 of {total}
//               </span>
//             </p>
//           </div>

//           <div className="h-9 w-9 rounded-full bg-slate-100 p-[3px]">
//             <div
//               className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-[9px] font-bold text-white"
//               title="Current question"
//             >
//               {Math.round((current / total) * 100)}%
//             </div>
//           </div>
//         </div>

//         <div
//           className={`flex h-10 shrink-0 items-center gap-2 rounded-xl border px-3 ${
//             isLowTime
//               ? "border-rose-200 bg-rose-50 text-rose-700"
//               : "border-blue-100 bg-blue-50/80 text-blue-700"
//           }`}
//         >
//           <Clock3
//             className={`h-4 w-4 ${
//               isLowTime ? "animate-pulse" : ""
//             }`}
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
//    PROGRESS STRIP
// ========================================================= */

// // function ProgressStrip({ currentIndex, total, answeredCount }) {
// //   const progress = Math.round((answeredCount / total) * 100);
// //   const position = ((currentIndex + 1) / total) * 100;

// //   return (
// //     <div className="shrink-0 border-b border-slate-200/70 bg-white px-4 py-3 sm:px-6 lg:px-8">
// //       <div className="mb-2 flex items-center justify-between gap-3">
// //         <div className="flex items-center gap-2">
// //           <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
// //             <Sparkles className="h-3.5 w-3.5" />
// //           </span>
// //           <span className="text-[11px] font-bold text-slate-700">
// //             Assessment in progress
// //           </span>
// //         </div>

// //         <span className="text-[10px] font-bold tabular-nums text-slate-500">
// //           {answeredCount}/{total} answered · {progress}%
// //         </span>
// //       </div>

// //       <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-100">
// //         <div
// //           className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 transition-all duration-500"
// //           style={{ width: `${progress}%` }}
// //         />

// //         <div
// //           className="absolute -top-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-indigo-500 shadow-md transition-all duration-300"
// //           style={{ left: `${Math.max(position, 1)}%` }}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// /* =========================================================
//    QUESTION PALETTE
// ========================================================= */

// function QuestionPalette({
//   total,
//   currentIndex,
//   answers,
//   marked,
//   onNavigate,
// }) {
//   const answeredCount = Object.keys(answers).length;
//   const markedCount = Object.values(marked).filter(Boolean).length;
//   const unansweredCount = total - answeredCount;

//   return (
//     <aside className="hidden w-[290px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-[0_12px_45px_rgba(30,41,59,0.06)] ring-1 ring-slate-200/80 lg:flex xl:w-[310px]">
//       <div className="relative overflow-hidden border-b border-slate-100 px-5 py-5">
//         <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-blue-100/60 blur-2xl" />

//         <div className="relative flex items-center justify-between">
//           <div>
//             <div className="flex items-center gap-2">
//               <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/20">
//                 <Grid2X2 className="h-4 w-4" />
//               </span>
//               <div>
//                 <h2 className="text-sm font-extrabold tracking-tight text-slate-900">
//                   Question palette
//                 </h2>
//                 <p className="mt-0.5 text-[10px] text-slate-500">
//                   Jump to any question
//                 </p>
//               </div>
//             </div>
//           </div>
//           <span className="rounded-lg border border-slate-100 bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-500">
//             {total} Qs
//           </span>
//         </div>
//       </div>

//       <div className="min-h-0 flex-1 overflow-y-auto p-5">
//         <div className="mb-4 flex items-center justify-between">
//           <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
//             All questions
//           </p>
//           <p className="text-[10px] font-semibold text-slate-400">
//             Select to navigate
//           </p>
//         </div>

//         <div className="grid grid-cols-5 gap-2">
//           {Array.from({ length: total }, (_, index) => {
//             const isCurrent = currentIndex === index;
//             const isAnswered = answers[index] !== undefined;
//             const isMarked = Boolean(marked[index]);

//             let style =
//               "border-slate-200 bg-slate-50 text-slate-500 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700";

//             if (isAnswered) {
//               style =
//                 "border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300";
//             }

//             if (isCurrent) {
//               style =
//                 "border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 ring-2 ring-blue-100";
//             }

//             return (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => onNavigate(index)}
//                 aria-label={`Go to question ${index + 1}${
//                   isAnswered ? ", answered" : ""
//                 }${isMarked ? ", marked for review" : ""}`}
//                 aria-current={isCurrent ? "step" : undefined}
//                 className={`relative flex h-10 items-center justify-center rounded-xl border text-[10px] font-extrabold transition-all duration-200 hover:-translate-y-0.5 ${style}`}
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
//           <Legend color="bg-gradient-to-br from-blue-600 to-indigo-600" label="Current question" />
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
//             style={{ width: `${(answeredCount / total) * 100}%` }}
//           />
//         </div>

//         <div className="grid grid-cols-3 gap-2">
//           <Stat value={answeredCount} label="Answered" color="text-emerald-600" />
//           <Stat value={unansweredCount} label="Pending" color="text-slate-700" />
//           <Stat value={markedCount} label="Review" color="text-amber-600" />
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
//   total,
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
//           {currentIndex + 1} / {total}
//         </p>
//       </div>

//       <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
//         {Array.from({ length: total }, (_, index) => {
//           const isCurrent = currentIndex === index;
//           const isAnswered = answers[index] !== undefined;
//           const isMarked = Boolean(marked[index]);

//           return (
//             <button
//               key={index}
//               type="button"
//               onClick={() => onNavigate(index)}
//               aria-label={`Go to question ${index + 1}`}
//               aria-current={isCurrent ? "step" : undefined}
//               className={`relative flex h-9 min-w-9 shrink-0 items-center justify-center rounded-xl border text-[10px] font-extrabold transition ${
//                 isCurrent
//                   ? "border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20"
//                   : isAnswered
//                   ? "border-emerald-200 bg-emerald-50 text-emerald-700"
//                   : "border-slate-200 bg-slate-50 text-slate-500"
//               }`}
//             >
//               {index + 1}

//               {isMarked && (
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
//         className={`min-w-0 flex-1 text-xs leading-5 sm:text-[13px] sm:leading-6 ${
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
//   const code =
//     question.codeSnippet ?? question.code_snippet ?? null;

//   const category =
//     question.category ?? question.topic ?? "General";

//   const difficulty = question.difficulty ?? "Medium";

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
//             {String(question.id ?? 1).padStart(2, "0")}
//           </div>

//           <div>
//             <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-blue-700">
//               Question {question.id ?? ""}
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
//             {category}
//           </span>
//         </div>

//         <h2 className="max-w-[820px] text-[21px] font-extrabold leading-[1.4] tracking-[-0.035em] text-slate-900 sm:text-[27px] sm:leading-[1.45] lg:text-[30px]">
//           {question.question}
//         </h2>
//       </div>

//       {code && (
//         <div className="mt-6">
//           <CodeSnippet code={code} />
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
//             key={`${question.id}-${index}`}
//             index={index}
//             text={option}
//             selected={selectedAnswer === index}
//             onClick={() => onSelect(index)}
//           />
//         ))}
//       </div>

//       <div className="mt-5 flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-3">
//         <CircleHelp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
//         <p className="text-[10px] leading-5 text-slate-500">
//           Take your time, read every option carefully, and select the answer
//           that best fits the question.
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
//     <div className="shrink-0 border-t border-slate-100 bg-white/95 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4 lg:px-8">
//       <div className="mx-auto flex max-w-[920px] items-center justify-between gap-2 sm:gap-4">
//         <button
//           type="button"
//           onClick={onPrevious}
//           disabled={currentIndex === 0}
//           className={`${buttonBase} h-11 border border-slate-200 bg-white px-3 text-xs text-slate-600 hover:border-slate-300 hover:bg-slate-50 sm:px-4`}
//         >
//           <ChevronLeft className="h-4 w-4" />
//           <span className="hidden sm:inline">Previous</span>
//         </button>

//         <div className="flex items-center gap-1 sm:gap-2">
//           {selectedAnswer !== undefined && (
//             <button
//               type="button"
//               onClick={onClear}
//               className={`${buttonBase} h-10 px-2.5 text-[10px] text-slate-400 hover:bg-rose-50 hover:text-rose-600 sm:px-3 sm:text-xs`}
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
//           className={`${buttonBase} h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 text-xs text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-600/25 sm:px-5`}
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
//             <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-3 text-center">
//               <p className="text-xl font-extrabold text-emerald-700">
//                 {answered}
//               </p>
//               <p className="mt-1 text-[9px] font-bold text-emerald-700/70">
//                 Answered
//               </p>
//             </div>

//             <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-3 text-center">
//               <p className="text-xl font-extrabold text-amber-700">
//                 {unanswered}
//               </p>
//               <p className="mt-1 text-[9px] font-bold text-amber-700/70">
//                 Unanswered
//               </p>
//             </div>

//             <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-3 text-center">
//               <p className="text-xl font-extrabold text-indigo-700">
//                 {markedCount}
//               </p>
//               <p className="mt-1 text-[9px] font-bold text-indigo-700/70">
//                 For review
//               </p>
//             </div>
//           </div>

//           {unanswered > 0 && (
//             <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3.5">
//               <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
//               <p className="text-xs leading-5 text-amber-800">
//                 You still have{" "}
//                 <strong>{unanswered}</strong> unanswered question
//                 {unanswered === 1 ? "" : "s"}. You can go back and complete
//                 them before submitting.
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
//    MAIN COMPONENT
// ========================================================= */

// export default function MCQAssessment({
//   mode = "technical",
//   onSubmit,
// }) {
//   const {fetchAssessmentQuestions} = useTest();
//   const searchParams = useSearchParams();

//   const assessmentId = searchParams.get("assessmentId");

//   useEffect(el=>{
//     fetchAssessmentQuestions(assessmentId)
//   },[])

//   const questions =
//     mode === "aptitude" ? aptitudeQuestions : technicalQuestions;

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [marked, setMarked] = useState({});
//   const [seconds, setSeconds] = useState(60 * 60);
//   const [showSubmit, setShowSubmit] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const answeredCount = useMemo(
//     () => Object.keys(answers).length,
//     [answers]
//   );

//   const markedCount = useMemo(
//     () => Object.values(marked).filter(Boolean).length,
//     [marked]
//   );

//   const question = questions[currentIndex];
//   const selectedAnswer = answers[currentIndex];

//   useEffect(() => {
//     if (submitted || seconds <= 0) return;

//     const timer = setInterval(() => {
//       setSeconds((previous) => Math.max(0, previous - 1));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [submitted, seconds]);

//   useEffect(() => {
//     if (seconds === 0 && !submitted) {
//       setShowSubmit(true);
//     }
//   }, [seconds, submitted]);

//   const selectAnswer = (answerIndex) => {
//     setAnswers((previous) => ({
//       ...previous,
//       [currentIndex]: answerIndex,
//     }));
//   };

//   const clearAnswer = () => {
//     setAnswers((previous) => {
//       const next = { ...previous };
//       delete next[currentIndex];
//       return next;
//     });
//   };

//   const nextQuestion = () => {
//     if (currentIndex === questions.length - 1) {
//       setShowSubmit(true);
//       return;
//     }

//     setCurrentIndex((previous) => previous + 1);
//   };

//   const previousQuestion = () => {
//     setCurrentIndex((previous) => Math.max(0, previous - 1));
//   };

//   const toggleMark = () => {
//     setMarked((previous) => ({
//       ...previous,
//       [currentIndex]: !previous[currentIndex],
//     }));
//   };

//   const exitAssessment = () => {
//     const shouldExit = window.confirm(
//       "Are you sure you want to exit this assessment? Your progress may be lost."
//     );

//     if (shouldExit) {
//       window.history.back();
//     }
//   };

//   const submitAssessment = () => {
//     const payload = {
//       mode,
//       answers: questions.map((item, index) => ({
//         questionId: item.id,
//         selectedAnswer: answers[index] ?? null,
//       })),
//       submittedAt: new Date().toISOString(),
//     };

//     if (onSubmit) {
//       onSubmit(payload);
//     }

//     setShowSubmit(false);
//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <AssessmentComplete
//         answered={answeredCount}
//         total={questions.length}
//         onResults={() => {
//           window.alert("Opening assessment results...");
//         }}
//       />
//     );
//   }

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
// {/* 
//         <ProgressStrip
//           currentIndex={currentIndex}
//           total={questions.length}
//           answeredCount={answeredCount}
//         /> */}

//         <MobileQuestionPalette
//           total={questions.length}
//           currentIndex={currentIndex}
//           answers={answers}
//           marked={marked}
//           onNavigate={setCurrentIndex}
//         />

//         <main className="min-h-0 flex-1 p-3 sm:p-5 lg:p-6">
//           <div className="mx-auto flex h-full min-h-0 max-w-[1600px] gap-5">
//             <QuestionPalette
//               total={questions.length}
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
//             <LayoutDashboard className="h-3.5 w-3.5" />
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
//             if (seconds > 0) setShowSubmit(false);
//           }}
//           onSubmit={submitAssessment}
//         />
//       )}
//     </div>
//   );
// }
















"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTest } from "@/app/context/tests.context";
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
                  : "Technical Assessment"}
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
            const isAnswered = answers[index] !== undefined;
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
          const isAnswered = answers[index] !== undefined;

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
            onClick={() => onSelect(index)}
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
  mode = "technical",
  onSubmit,
}) {
  const { fetchAssessmentQuestions } = useTest();
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

  const selectedAnswer = answers[currentIndex];

  /* ---------------------------------------------------------
     ANSWER SELECTION
  --------------------------------------------------------- */

  const selectAnswer = (answerIndex) => {
    setAnswers((previous) => ({
      ...previous,
      [currentIndex]: answerIndex,
    }));
  };

  const clearAnswer = () => {
    setAnswers((previous) => {
      const next = { ...previous };
      delete next[currentIndex];
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

      answers: questions.map((item, index) => ({
        // Real database ID, not the displayed question number.
        questionId: item.questionId,

        // Selected option index; null when unanswered.
        selectedAnswer: answers[index] ?? null,

        // Selected option text for convenience.
        selectedOption:
          answers[index] == null
            ? null
            : item.options[answers[index]],
      })),

      submittedAt: new Date().toISOString(),
    };

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
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-[#f4f7ff] text-slate-900">
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