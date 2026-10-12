// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   Search,
//   ChevronDown,
//   ArrowRight,
//   X,
//   Check,
//   Clock3,
//   Code2,
//   Building2,
//   MessageSquare,
//   Brain,
//   Bug,
//   Scale,
// } from "lucide-react";
// import Link from "next/link";
// import { useAssessment } from "@/app/context/assessments.context";

// // =====================================================
// // PREDEFINED PLATFORM SIMULATIONS
// // This data represents platform templates.
// // User-created assessments should live separately.
// // =====================================================

// const simulationTemplates = [
//   {
//     id: "google-sde1",
//     company: "Google",
//     role: "SDE-1",
//     badge: "Company Simulation",
//     experience: "1–2 YOE",
//     rounds: "Coding → Technical → Behavioral",
//     duration: "~90 min",
//     evaluationAreas: 6,
//   },
//   {
//     id: "microsoft-sde1",
//     company: "Microsoft",
//     role: "SDE-1",
//     badge: "Company Simulation",
//     experience: "1–3 YOE",
//     rounds: "Coding → Technical → Behavioral",
//     duration: "~90 min",
//     evaluationAreas: 6,
//   },
//   {
//     id: "amazon-sde1",
//     company: "Amazon",
//     role: "SDE-1",
//     badge: "Company Simulation",
//     experience: "1–2 YOE",
//     rounds: "Coding → Technical → Behavioral",
//     duration: "~90 min",
//     evaluationAreas: 6,
//   },
//   {
//     id: "salesforce-sde1",
//     company: "Salesforce",
//     role: "SDE-1",
//     badge: "Company Simulation",
//     experience: "1–3 YOE",
//     rounds: "Coding → Technical → Behavioral",
//     duration: "~90 min",
//     evaluationAreas: 6,
//   },
//   {
//     id: "generic-sde1",
//     company: "Generic SDE-1",
//     role: "SDE-1",
//     badge: "Role Simulation",
//     experience: "1–3 YOE",
//     rounds: "Coding → Technical → Behavioral",
//     duration: "~90 min",
//     evaluationAreas: 6,
//   },
// ];


// // =====================================================
// // FILTER OPTIONS
// // =====================================================

// const companyOptions = [
//   "All Companies",
//   "Google",
//   "Microsoft",
//   "Amazon",
//   "Salesforce",
// ];

// const roleOptions = [
//   "All Roles",
//   "SDE-1",
//   "SDE-2",
//   "Frontend Developer",
//   "Backend Developer",
// ];

// const experienceOptions = [
//   "Any Experience",
//   "0–1 YOE",
//   "1–2 YOE",
//   "2–3 YOE",
//   "3–5 YOE",
// ];


// // =====================================================
// // EVALUATION AREAS
// // =====================================================

// const evaluationAreas = [
//   {
//     label: "Problem Solving / DSA",
//     icon: Brain,
//   },
//   {
//     label: "Technical Knowledge",
//     icon: Code2,
//   },
//   {
//     label: "Communication & Explanation",
//     icon: MessageSquare,
//   },
//   {
//     label: "Code Quality / Debugging",
//     icon: Bug,
//   },
//   {
//     label: "Reasoning & Trade-offs",
//     icon: Scale,
//   },
//   {
//     label: "Behavioral / Interview Skills",
//     icon: MessageSquare,
//   },
// ];


// // =====================================================
// // FILTER SELECT
// // =====================================================

// function FilterSelect({
//   value,
//   options,
//   onChange,
// }) {
//   return (
//     <div className="relative">

//       <select
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//         className="
//           appearance-none
//           w-full sm:w-auto
//           min-w-[145px]
//           px-3.5 py-2.5 pr-9
//           rounded-xl
//           border border-slate-200
//           bg-white
//           text-xs font-medium text-slate-600
//           outline-none
//           cursor-pointer
//           hover:border-blue-200
//           focus:border-blue-400
//           focus:ring-4 focus:ring-blue-50
//           transition-all
//         "
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>

//       <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />

//     </div>
//   );
// }


// // =====================================================
// // SIMULATION CARD
// // =====================================================

// function SimulationCard({
//   simulation,
//   onViewDetails,
// }) {
//   return (
//     <div
//       onClick={() => onViewDetails(simulation)}
//       className="
//         group bg-white
//         border border-slate-200
//         rounded-[20px]
//         shadow-sm
//         hover:shadow-md
//         hover:border-blue-200
//         transition-all duration-200
//         cursor-pointer
//         overflow-hidden
//       "
//     >

//       <div className="p-5">

//         {/* =========================================
//             TOP
//         ========================================= */}

//         <div className="flex items-start justify-between gap-3">

//           <div className="flex items-center gap-3 min-w-0">

//             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">

//               <Building2 className="w-5 h-5 text-blue-600" />

//             </div>


//             <div className="min-w-0">

//               <h3 className="text-base font-bold text-slate-950 truncate">
//                 {simulation.company}
//               </h3>

//               <p className="text-sm font-medium text-slate-500 mt-0.5">
//                 {simulation.role}
//               </p>

//             </div>

//           </div>


//           <span className="
//             shrink-0
//             px-2.5 py-1
//             rounded-full
//             bg-blue-50
//             border border-blue-100
//             text-[10px]
//             font-semibold
//             text-blue-600
//           ">
//             {simulation.badge}
//           </span>

//         </div>


//         {/* =========================================
//             META
//         ========================================= */}

//         <div className="flex flex-wrap gap-2 mt-5">

//           <span className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-600">
//             {simulation.experience}
//           </span>

//           <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-600">
//             <Clock3 className="w-3 h-3 text-slate-400" />
//             {simulation.duration}
//           </span>

//         </div>


//         {/* =========================================
//             ROUNDS
//         ========================================= */}

//         <div className="mt-5">

//           <p className="text-[10px] uppercase tracking-wide font-bold text-slate-400">
//             Interview Structure
//           </p>

//           <p className="text-xs font-medium text-slate-700 mt-1.5">
//             {simulation.rounds}
//           </p>

//         </div>


//         {/* =========================================
//             FOOTER
//         ========================================= */}

//         <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">

//           <span className="text-[11px] text-slate-400">
//             {simulation.evaluationAreas} evaluation areas
//           </span>


//           <button
//             type="button"
//             onClick={(event) => {
//               event.stopPropagation();
//               onViewDetails(simulation);
//             }}
//             className="
//               inline-flex items-center gap-1.5
//               text-xs font-semibold
//               text-blue-600
//               group-hover:text-blue-700
//               transition-colors
//             "
//           >
//             View Details
//             <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }


// // =====================================================
// // DETAILS MODAL
// // =====================================================

// function SimulationDetailsModal({
//   simulation,
//   onClose,
//   onStart,
// }) {
//   if (!simulation) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

//       {/* Overlay */}
//       <div
//         onClick={onClose}
//         className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
//       />


//       {/* Modal */}
//       <div className="
//         relative
//         w-full max-w-[620px]
//         max-h-[90vh]
//         overflow-y-auto
//         bg-white
//         rounded-[24px]
//         shadow-2xl
//       ">

//         {/* Header */}
//         <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-5">

//           <div className="flex items-start justify-between gap-4">

//             <div className="flex items-center gap-3">

//               <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
//                 <Building2 className="w-5 h-5 text-blue-600" />
//               </div>

//               <div>

//                 <h2 className="text-lg font-bold text-slate-950">
//                   {simulation.company}
//                 </h2>

//                 <p className="text-xs text-slate-500 mt-0.5">
//                   {simulation.role}
//                   <span className="mx-1.5 text-slate-300">
//                     ·
//                   </span>
//                   {simulation.experience}
//                 </p>

//               </div>

//             </div>


//             <button
//               onClick={onClose}
//               className="w-9 h-9 shrink-0 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors"
//             >
//               <X className="w-4 h-4 text-slate-500" />
//             </button>

//           </div>

//         </div>


//         {/* Body */}
//         <div className="p-6">

//           {/* Simulation Type */}
//           <span className="inline-flex px-2.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-semibold text-blue-600">
//             {simulation.badge}
//           </span>


//           <h3 className="text-xl font-bold text-slate-950 mt-5">
//             Interview Structure
//           </h3>


//           {/* Rounds */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">

//             {[
//               "Coding Round",
//               "Technical Interview",
//               "Behavioral Interview",
//             ].map((round, index) => (

//               <div
//                 key={round}
//                 className="p-3.5 rounded-xl bg-slate-50 border border-slate-100"
//               >

//                 <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-blue-600">
//                   {index + 1}
//                 </div>

//                 <p className="text-xs font-semibold text-slate-700 mt-3">
//                   {round}
//                 </p>

//               </div>

//             ))}

//           </div>


//           {/* Evaluates */}
//           <div className="mt-7">

//             <h3 className="text-sm font-bold text-slate-950">
//               Evaluates
//             </h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">

//               {evaluationAreas.map((area) => {

//                 const Icon = area.icon;

//                 return (
//                   <div
//                     key={area.label}
//                     className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
//                   >

//                     <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
//                       <Icon className="w-3.5 h-3.5 text-blue-600" />
//                     </div>

//                     <span className="text-xs text-slate-600">
//                       {area.label}
//                     </span>

//                   </div>
//                 );
//               })}

//             </div>

//           </div>


//           {/* Duration */}
//           <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-blue-50/60 border border-blue-100">

//             <span className="text-xs font-medium text-slate-600">
//               Estimated Duration
//             </span>

//             <span className="text-sm font-bold text-slate-950">
//               {simulation.duration === "~90 min"
//                 ? "~90 minutes"
//                 : simulation.duration}
//             </span>

//           </div>


//           {/* CTA */}
//           <Link
//             // onClick={() => onStart(simulation)}
//             href={"/voice-round"}
//             className="
//               w-full mt-6
//               py-3.5
//               rounded-xl
//               bg-blue-600
//               hover:bg-blue-700
//               text-white
//               text-sm
//               font-semibold
//               flex items-center justify-center gap-2
//               transition-all
//               hover:shadow-md hover:shadow-blue-100
//             "
//           >
//             Start Simulation
//             <ArrowRight className="w-4 h-4" />
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }


// // =====================================================
// // EMPTY SEARCH STATE
// // =====================================================

// function EmptySearchState({ onClear }) {
//   return (
//     <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm min-h-[300px] flex items-center justify-center p-8">

//       <div className="text-center">

//         <div className="mx-auto w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
//           <Search className="w-5 h-5 text-slate-400" />
//         </div>

//         <h3 className="text-base font-bold text-slate-950 mt-4">
//           No simulations found
//         </h3>

//         <p className="text-sm text-slate-500 mt-1.5">
//           Try changing your search or filters.
//         </p>

//         <button
//           onClick={onClear}
//           className="mt-4 text-xs font-semibold text-blue-600 hover:text-blue-700"
//         >
//           Clear Filters
//         </button>

//       </div>

//     </div>
//   );
// }


// // =====================================================
// // MAIN COMPONENT
// // =====================================================

// export default function AvailableSimulations({
//   onStartSimulation = () => {},
// }) {

//   const {FetchPrebuildAssessment} = useAssessment()

//   useEffect(el=>{
//     FetchPrebuildAssessment();
//   }, [])

//   const [search, setSearch] = useState("");

//   const [company, setCompany] =
//     useState("All Companies");

//   const [role, setRole] =
//     useState("All Roles");

//   const [experience, setExperience] =
//     useState("Any Experience");

//   const [selectedSimulation, setSelectedSimulation] =
//     useState(null);


//   // ===================================================
//   // FILTER SIMULATIONS
//   // ===================================================

//   const filteredSimulations = useMemo(() => {

//     const query = search.trim().toLowerCase();

//     return simulationTemplates.filter((simulation) => {

//       const matchesSearch =
//         !query ||
//         simulation.company.toLowerCase().includes(query) ||
//         simulation.role.toLowerCase().includes(query);

//       const matchesCompany =
//         company === "All Companies" ||
//         simulation.company === company;

//       const matchesRole =
//         role === "All Roles" ||
//         simulation.role === role;

//       const matchesExperience =
//         experience === "Any Experience" ||
//         simulation.experience === experience;

//       return (
//         matchesSearch &&
//         matchesCompany &&
//         matchesRole &&
//         matchesExperience
//       );
//     });

//   }, [search, company, role, experience]);


//   // ===================================================
//   // CLEAR FILTERS
//   // ===================================================

//   const clearFilters = () => {
//     setSearch("");
//     setCompany("All Companies");
//     setRole("All Roles");
//     setExperience("Any Experience");
//   };


//   // ===================================================
//   // START SIMULATION
//   // ===================================================

//   const handleStartSimulation = (simulation) => {

//     // Later:
//     // 1. Create user assessment instance
//     // 2. Store template reference
//     // 3. Add to My Assessments
//     // 4. Start interview

//     onStartSimulation(simulation);

//     setSelectedSimulation(null);
//   };


//   return (
//     <div className="w-full">

//       {/* =================================================
//           HEADER
//       ================================================= */}

//       {/* <div className="mb-7">

//         <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
//           Available Simulations
//         </h1>

//         <p className="text-sm text-slate-500 mt-1.5">
//           Choose a company and role to simulate the interview you are preparing for.
//         </p>

//       </div> */}


//       {/* =================================================
//           SEARCH + FILTERS
//       ================================================= */}

//       <div className="bg-white border border-slate-200 rounded-[20px] shadow-sm p-4 mb-6">

//         <div className="flex flex-col lg:flex-row gap-3">

//           {/* Search */}
//           <div className="relative flex-1">

//             <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

//             <input
//               type="text"
//               value={search}
//               onChange={(event) =>
//                 setSearch(event.target.value)
//               }
//               placeholder="Search company or role..."
//               className="
//                 w-full
//                 pl-10 pr-4 py-2.5
//                 rounded-xl
//                 border border-slate-200
//                 bg-slate-50/50
//                 text-xs text-slate-700
//                 placeholder:text-slate-400
//                 outline-none
//                 focus:border-blue-400
//                 focus:ring-4 focus:ring-blue-50
//                 transition-all
//               "
//             />

//           </div>


//           {/* Filters */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

//             <FilterSelect
//               value={company}
//               options={companyOptions}
//               onChange={setCompany}
//             />

//             <FilterSelect
//               value={role}
//               options={roleOptions}
//               onChange={setRole}
//             />

//             <FilterSelect
//               value={experience}
//               options={experienceOptions}
//               onChange={setExperience}
//             />

//           </div>

//         </div>

//       </div>


//       {/* =================================================
//           TEMPLATE LABEL
//       ================================================= */}

//       <div className="flex items-center justify-between mb-4">

//         <div>

//           <p className="text-xs font-semibold text-slate-900">
//             Platform Simulations
//           </p>

//           <p className="text-[11px] text-slate-400 mt-0.5">
//             Ready-made interview experiences curated for your preparation.
//           </p>

//         </div>

//         <span className="text-[11px] text-slate-400">
//           {filteredSimulations.length} available
//         </span>

//       </div>


//       {/* =================================================
//           SIMULATION GRID
//       ================================================= */}

//       {filteredSimulations.length > 0 ? (

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

//           {filteredSimulations.map((simulation) => (

//             <SimulationCard
//               key={simulation.id}
//               simulation={simulation}
//               onViewDetails={setSelectedSimulation}
//             />

//           ))}

//         </div>

//       ) : (

//         <EmptySearchState
//           onClear={clearFilters}
//         />

//       )}


//       {/* =================================================
//           DETAILS MODAL
//       ================================================= */}

//       {selectedSimulation && (
//         <SimulationDetailsModal
//           simulation={selectedSimulation}
//           onClose={() => setSelectedSimulation(null)}
//           onStart={handleStartSimulation}
//         />
//       )}

//     </div>
//   );
// }

// "use client";

// import { useCallback, useEffect, useMemo, useState } from "react";
// import {
//   Search,
//   ChevronDown,
//   ArrowRight,
//   X,
//   Clock3,
//   Code2,
//   MessageSquare,
//   Brain,
//   Bug,
//   Scale,
//   Layers3,
//   Sparkles,
//   BriefcaseBusiness,
//   CircleCheck,
//   Filter,
//   RotateCcw,
//   LoaderCircle,
//   Building2,
//   Target,
//   ListChecks,
// } from "lucide-react";
// import Link from "next/link";
// import { useAssessment } from "@/app/context/assessments.context";

// /* =========================================================
//    OFFICIAL BRAND LOGOS
//    Simple Icons CDN — recognized brand logos, not initials.
// ========================================================= */

// const COMPANY_LOGOS = {
//   Google: "google",
//   Microsoft: "microsoft",
//   Amazon: "amazon",
//   Meta: "meta",
//   Apple: "apple",
//   NVIDIA: "nvidia",
//   Adobe: "adobe",
//   Salesforce: "salesforce",
//   Uber: "uber",
//   LinkedIn: "linkedin",
//   Atlassian: "atlassian",
//   Oracle: "oracle",
//   IBM: "ibm",
//   Cisco: "cisco",
//   Intel: "intel",
//   Qualcomm: "qualcomm",
//   PayPal: "paypal",
//   "Walmart Global Tech": "walmart",
//   Flipkart: "flipkart",
//   PhonePe: "phonepe",
//   Razorpay: "razorpay",
//   Swiggy: "swiggy",
//   Zomato: "zomato",
//   Meesho: "meesho",
//   Zoho: "zoho",
//   Freshworks: "freshworks",
//   ServiceNow: "servicenow",
//   SAP: "sap",
//   Netflix: "netflix",
//   Accenture: "accenture",
// };

// const LOGO_COLORS = {
//   Google: "4285F4",
//   Microsoft: "5E5E5E",
//   Amazon: "FF9900",
//   Meta: "0866FF",
//   Apple: "333333",
//   NVIDIA: "76B900",
//   Adobe: "EB1000",
//   Salesforce: "00A1E0",
//   Uber: "000000",
//   LinkedIn: "0A66C2",
//   Atlassian: "1868DB",
//   Oracle: "F80000",
//   IBM: "1261FE",
//   Cisco: "049FD9",
//   Intel: "0071C5",
//   Qualcomm: "3253DC",
//   PayPal: "003087",
//   "Walmart Global Tech": "0071CE",
//   Flipkart: "2874F0",
//   PhonePe: "5F259F",
//   Razorpay: "0C2451",
//   Swiggy: "FC8019",
//   Zomato: "E23744",
//   Meesho: "570D7D",
//   Zoho: "E42527",
//   Freshworks: "25C16F",
//   ServiceNow: "81B5A1",
//   SAP: "008FD3",
//   Netflix: "E50914",
//   Accenture: "A100FF",
// };

// /* =========================================================
//    DATA HELPERS
// ========================================================= */

// function normalize(value) {
//   return String(value ?? "").trim();
// }

// function extractTemplates(value, depth = 0, visited = new Set()) {
//   if (!value || typeof value !== "object" || depth > 6 || visited.has(value)) {
//     return [];
//   }

//   visited.add(value);

//   if (
//     Array.isArray(value) &&
//     value.some(
//       (item) =>
//         item &&
//         typeof item === "object" &&
//         ("company" in item || "domain" in item) &&
//         ("rounds" in item || "jobDescription" in item || "level" in item)
//     )
//   ) {
//     return value.filter(
//       (item) =>
//         item &&
//         typeof item === "object" &&
//         ("company" in item || "domain" in item)
//     );
//   }

//   const preferredKeys = [
//     "data",
//     "templates",
//     "assessments",
//     "prebuildAssessments",
//     "prebuiltAssessments",
//     "prebuildAssessment",
//     "prebuiltAssessment",
//     "allAssessments",
//     "availableSimulations",
//     "result",
//     "results",
//   ];

//   if (Array.isArray(value)) {
//     for (const item of value) {
//       const found = extractTemplates(item, depth + 1, visited);
//       if (found.length) return found;
//     }
//     return [];
//   }

//   for (const key of preferredKeys) {
//     if (key in value) {
//       const found = extractTemplates(value[key], depth + 1, visited);
//       if (found.length) return found;
//     }
//   }

//   for (const [key, child] of Object.entries(value)) {
//     if (preferredKeys.includes(key)) continue;

//     const found = extractTemplates(child, depth + 1, visited);
//     if (found.length) return found;
//   }

//   return [];
// }

// function getRounds(item) {
//   return Array.isArray(item?.rounds) ? item.rounds : [];
// }

// function getDescription(item) {
//   const jd = item?.jobDescription;

//   if (typeof jd === "string") return jd;
//   if (!jd || typeof jd !== "object") return "";

//   return (
//     jd.description ||
//     jd.summary ||
//     jd.overview ||
//     jd.content ||
//     jd.text ||
//     ""
//   );
// }

// function getDuration(item) {
//   return getRounds(item).reduce((total, round) => {
//     const minutes = Number(round?.durationMinutes);

//     return total + (
//       Number.isFinite(minutes) && minutes > 0 ? minutes : 0
//     );
//   }, 0);
// }

// function getExperience(level) {
//   const value = normalize(level);

//   if (/entry/i.test(value)) return "Entry Level";
//   if (/experienced/i.test(value)) return "Experienced";

//   return value || "Not specified";
// }

// function getTopics(round) {
//   if (Array.isArray(round?.topics)) return round.topics;
//   if (typeof round?.topics === "string") return [round.topics];

//   return [];
// }

// function displayText(value) {
//   if (Array.isArray(value)) return value.join("\n");
//   if (typeof value === "string" || typeof value === "number") {
//     return String(value);
//   }

//   return "";
// }

// /* =========================================================
//    COMPANY LOGO
// ========================================================= */

// function CompanyLogo({ company, size = "large" }) {
//   const [sourceIndex, setSourceIndex] = useState(0);

//   const logo = Object.keys(COMPANY_LOGOS).find(
//     (name) => name.toLowerCase() === normalize(company).toLowerCase()
//   );

//   const slug = logo ? COMPANY_LOGOS[logo] : null;
//   const color = logo ? LOGO_COLORS[logo] : "64748b";

//   const sources = slug
//     ? [
//         `https://cdn.simpleicons.org/${slug}/${color}`,
//         `https://www.google.com/s2/favicons?domain=${slug === "google" ? "google.com" : slug + ".com"}&sz=128`,
//       ]
//     : [];

//   useEffect(() => {
//     setSourceIndex(0);
//   }, [company]);

//   const dimension = size === "small" ? "h-10 w-10" : "h-14 w-14";
//   const imageDimension = size === "small" ? "h-6 w-6" : "h-9 w-9";

//   return (
//     <div
//       className={`flex ${dimension} shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm`}
//     >
//       {sources[sourceIndex] ? (
//         <img
//           key={sources[sourceIndex]}
//           src={sources[sourceIndex]}
//           alt={`${company} logo`}
//           loading="lazy"
//           referrerPolicy="no-referrer"
//           className={`${imageDimension} object-contain`}
//           onError={() => setSourceIndex((index) => index + 1)}
//         />
//       ) : (
//         <Building2 className="h-6 w-6 text-slate-400" />
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    FILTER SELECT
// ========================================================= */

// function FilterSelect({ value, options, onChange, label }) {
//   return (
//     <div className="relative min-w-0">
//       <select
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//         aria-label={label}
//         className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 pr-9 text-sm font-medium text-slate-700 outline-none transition hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>

//       <ChevronDown
//         size={15}
//         className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//       />
//     </div>
//   );
// }

// /* =========================================================
//    SIMULATION CARD
// ========================================================= */

// function SimulationCard({ simulation, onClick }) {
//   const rounds = getRounds(simulation);
//   const duration = getDuration(simulation);

//   return (
//     <article
//       onClick={onClick}
//       onKeyDown={(event) => {
//         if (event.key === "Enter" || event.key === " ") {
//           event.preventDefault();
//           onClick();
//         }
//       }}
//       tabIndex={0}
//       role="button"
//       className="group flex h-full cursor-pointer flex-col rounded-[22px] border border-slate-200 bg-white text-left shadow-[0_2px_12px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_35px_rgba(37,99,235,0.09)] focus:outline-none focus:ring-4 focus:ring-blue-500/10"
//     >
//       <div className="flex flex-1 flex-col p-5 sm:p-6">
//         {/* Company branding */}
//         <div className="flex items-start justify-between gap-3">
//           <CompanyLogo company={simulation.company} />

//           <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-[10px] font-bold text-blue-700">
//             <Sparkles size={11} />
//             SIMULATION
//           </span>
//         </div>

//         {/* Company and role */}
//         <div className="mt-5">
//           <h3 className="text-lg font-bold tracking-tight text-slate-900 transition group-hover:text-blue-700">
//             {simulation.company || "Company"}
//           </h3>

//           <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-700">
//             {simulation.domain || "Interview"}
//           </p>

//           <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
//             <BriefcaseBusiness size={13} />
//             {getExperience(simulation.level)}
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="mt-5 grid grid-cols-2 gap-2">
//           <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
//             <div className="flex items-center gap-2 text-blue-600">
//               <Layers3 size={15} />
//               <span className="text-xs font-bold text-slate-800">
//                 {rounds.length} Rounds
//               </span>
//             </div>
//             <p className="mt-1.5 text-[10px] text-slate-500">
//               Interview structure
//             </p>
//           </div>

//           <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
//             <div className="flex items-center gap-2 text-blue-600">
//               <Clock3 size={15} />
//               <span className="text-xs font-bold text-slate-800">
//                 {duration ? `${duration} min` : "Flexible"}
//               </span>
//             </div>
//             <p className="mt-1.5 text-[10px] text-slate-500">
//               Total estimated time
//             </p>
//           </div>
//         </div>

//         {/* Round preview */}
//         <div className="mt-6 flex-1">
//           <div className="flex items-center justify-between">
//             <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
//               Interview journey
//             </p>
//             {rounds.length > 0 && (
//               <span className="text-[10px] font-semibold text-slate-400">
//                 {rounds.length} stages
//               </span>
//             )}
//           </div>

//           {rounds.length ? (
//             <div className="mt-3 space-y-3">
//               {rounds.slice(0, 3).map((round, index) => (
//                 <div
//                   key={`${round?.name || "round"}-${index}`}
//                   className="flex items-center gap-2.5"
//                 >
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-[10px] font-bold text-blue-700">
//                     {round?.order || index + 1}
//                   </span>

//                   <span className="min-w-0 flex-1 truncate text-xs font-medium text-slate-600">
//                     {round?.name || `Interview Round ${index + 1}`}
//                   </span>

//                   {round?.durationMinutes && (
//                     <span className="shrink-0 text-[10px] text-slate-400">
//                       {round.durationMinutes}m
//                     </span>
//                   )}
//                 </div>
//               ))}

//               {rounds.length > 3 && (
//                 <p className="pl-9 text-[11px] font-semibold text-blue-600">
//                   +{rounds.length - 3} more rounds
//                 </p>
//               )}
//             </div>
//           ) : (
//             <p className="mt-3 text-xs leading-5 text-slate-400">
//               View this template to explore the interview structure.
//             </p>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
//           <span className="text-[11px] font-medium text-slate-400">
//             Explore preparation plan
//           </span>

//           <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition group-hover:gap-2.5">
//             View details
//             <ArrowRight size={15} />
//           </span>
//         </div>
//       </div>
//     </article>
//   );
// }

// /* =========================================================
//    DETAILS MODAL
// ========================================================= */

// function SimulationDetailsModal({ simulation, onClose }) {
//   if (!simulation) return null;

//   const rounds = getRounds(simulation);
//   const duration = getDuration(simulation);
//   const description = getDescription(simulation);

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
//       <button
//         type="button"
//         aria-label="Close details"
//         onClick={onClose}
//         className="absolute inset-0 cursor-default bg-slate-950/40 backdrop-blur-sm"
//       />

//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="simulation-details-title"
//         className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl"
//       >
//         {/* Header */}
//         <header className="flex items-center justify-between gap-4 border-b border-slate-100 bg-white px-5 py-5 sm:px-7">
//           <div className="flex min-w-0 items-center gap-3.5">
//             <CompanyLogo company={simulation.company} />

//             <div className="min-w-0">
//               <h2
//                 id="simulation-details-title"
//                 className="truncate text-lg font-bold text-slate-900 sm:text-xl"
//               >
//                 {simulation.company}
//               </h2>

//               <p className="mt-1 text-sm font-medium text-slate-600">
//                 {simulation.domain}
//               </p>

//               <p className="mt-1 text-xs font-semibold text-blue-600">
//                 {getExperience(simulation.level)}
//               </p>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="Close modal"
//             className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
//           >
//             <X size={17} />
//           </button>
//         </header>

//         <div className="flex-1 space-y-7 overflow-y-auto p-5 sm:p-7">
//           {/* Summary stats */}
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
//             {[
//               { icon: Layers3, value: rounds.length, label: "Interview rounds" },
//               { icon: Clock3, value: duration ? `${duration} min` : "—", label: "Estimated duration" },
//               { icon: Target, value: "Role-based", label: "Practice format" },
//             ].map(({ icon: Icon, value, label }) => (
//               <div
//                 key={label}
//                 className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
//               >
//                 <Icon size={17} className="text-blue-600" />
//                 <p className="mt-3 text-lg font-bold text-slate-900">
//                   {value}
//                 </p>
//                 <p className="mt-1 text-[11px] text-slate-500">{label}</p>
//               </div>
//             ))}
//           </div>

//           {/* Job description */}
//           {description && (
//             <section>
//               <h3 className="text-sm font-bold text-slate-900">
//                 Role overview
//               </h3>

//               <p className="mt-3 whitespace-pre-line rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
//                 {description}
//               </p>
//             </section>
//           )}

//           {/* Rounds */}
//           <section>
//             <div className="flex items-center justify-between gap-3">
//               <h3 className="text-sm font-bold text-slate-900">
//                 Interview rounds
//               </h3>
//               <span className="text-xs text-slate-400">
//                 {rounds.length} stages
//               </span>
//             </div>

//             {rounds.length ? (
//               <div className="mt-4 space-y-3">
//                 {rounds.map((round, index) => (
//                   <article
//                     key={`${round?.name || "round"}-${index}`}
//                     className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-black text-blue-700">
//                         {round?.order || index + 1}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-wrap items-center gap-2">
//                           <h4 className="text-sm font-bold text-slate-900">
//                             {round?.name || `Round ${index + 1}`}
//                           </h4>

//                           {round?.difficulty && (
//                             <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600">
//                               {round.difficulty}
//                             </span>
//                           )}
//                         </div>

//                         <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-500">
//                           {round?.durationMinutes && (
//                             <span className="inline-flex items-center gap-1">
//                               <Clock3 size={12} />
//                               {round.durationMinutes} minutes
//                             </span>
//                           )}

//                           {round?.format && (
//                             <span className="inline-flex items-center gap-1">
//                               <Code2 size={12} />
//                               {round.format}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     {getTopics(round).length > 0 && (
//                       <div className="mt-4">
//                         <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                           Topics covered
//                         </p>

//                         <div className="mt-2 flex flex-wrap gap-1.5">
//                           {getTopics(round).map((topic, topicIndex) => (
//                             <span
//                               key={`${topic}-${topicIndex}`}
//                               className="rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-[11px] font-medium text-blue-700"
//                             >
//                               {topic}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {round?.candidateTasks && (
//                       <div className="mt-4">
//                         <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                           Candidate tasks
//                         </p>
//                         <p className="mt-1.5 whitespace-pre-line text-xs leading-6 text-slate-600">
//                           {displayText(round.candidateTasks)}
//                         </p>
//                       </div>
//                     )}

//                     {round?.evaluationCriteria && (
//                       <div className="mt-4">
//                         <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                           Evaluation criteria
//                         </p>
//                         <p className="mt-1.5 whitespace-pre-line text-xs leading-6 text-slate-600">
//                           {displayText(round.evaluationCriteria)}
//                         </p>
//                       </div>
//                     )}

//                     {round?.passCriteria && (
//                       <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-3">
//                         <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
//                           Pass criteria
//                         </p>
//                         <p className="mt-1.5 whitespace-pre-line text-xs leading-5 text-slate-600">
//                           {displayText(round.passCriteria)}
//                         </p>
//                       </div>
//                     )}
//                   </article>
//                 ))}
//               </div>
//             ) : (
//               <p className="mt-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-500">
//                 Detailed rounds are not available for this template.
//               </p>
//             )}
//           </section>

//           {simulation.templateNote && (
//             <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-800">
//               {simulation.templateNote}
//             </p>
//           )}

//           <p className="text-[11px] leading-5 text-slate-400">
//             This is a practice template. Actual interview rounds can vary by
//             team, role and location.
//           </p>
//         </div>

//         <footer className="border-t border-slate-100 bg-white p-5 sm:px-7">
//           <Link
//             href="/voice-round"
//             className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
//           >
//             Start Simulation
//             <ArrowRight size={16} />
//           </Link>
//         </footer>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    EMPTY / LOADING STATE
// ========================================================= */

// function EmptyState({ loading, error, onRetry, onClear, hasFilters }) {
//   return (
//     <div className="flex min-h-[300px] items-center justify-center rounded-[24px] border border-slate-200 bg-white p-8">
//       <div className="max-w-md text-center">
//         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
//           {loading ? (
//             <LoaderCircle size={23} className="animate-spin text-blue-600" />
//           ) : error ? (
//             <Building2 size={23} className="text-amber-600" />
//           ) : (
//             <Search size={23} className="text-blue-600" />
//           )}
//         </div>

//         <h3 className="mt-4 text-base font-bold text-slate-900">
//           {loading
//             ? "Loading simulations..."
//             : error
//               ? "Unable to load simulations"
//               : hasFilters
//                 ? "No matching simulations"
//                 : "No simulations available"}
//         </h3>

//         <p className="mt-2 text-sm leading-6 text-slate-500">
//           {loading
//             ? "Fetching interview templates. Please wait."
//             : error
//               ? "Check your connection and retry the request."
//               : hasFilters
//                 ? "Try changing the company, role or experience filters."
//                 : "No usable templates were found in the API response."}
//         </p>

//         {!loading && (
//           <div className="mt-5 flex flex-wrap justify-center gap-2">
//             {hasFilters && (
//               <button
//                 type="button"
//                 onClick={onClear}
//                 className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
//               >
//                 <RotateCcw size={13} />
//                 Clear filters
//               </button>
//             )}

//             {error && (
//               <button
//                 type="button"
//                 onClick={onRetry}
//                 className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
//               >
//                 Retry
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN COMPONENT
// ========================================================= */

// export default function AvailableSimulations({
//   onStartSimulation = () => {},
// }) {
//   const {
//     prebuildAssessments,
//     FetchPrebuildAssessment,
// } = useAssessment();


//   const [apiTemplates, setApiTemplates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const [search, setSearch] = useState("");
//   const [company, setCompany] = useState("All Companies");
//   const [role, setRole] = useState("All Roles");
//   const [experience, setExperience] = useState("Any Experience");
//   const [selectedSimulation, setSelectedSimulation] = useState(null);

//   useEffect(() => {
//       if (prebuildAssessments.length === 0) {
//           FetchPrebuildAssessment().catch(console.error);
//       }
//   }, [prebuildAssessments.length, FetchPrebuildAssessment]);

//   const contextTemplates = useMemo(
//     () => extractTemplates(assessmentContext),
//     [assessmentContext]
//   );

//  const simulations = prebuildAssessments;

//   const companyOptions = useMemo(
//     () => [
//       "All Companies",
//       ...new Set(
//         simulations.map((item) => normalize(item.company)).filter(Boolean)
//       ),
//     ],
//     [simulations]
//   );

//   const roleOptions = useMemo(
//     () => [
//       "All Roles",
//       ...new Set(
//         simulations.map((item) => normalize(item.domain)).filter(Boolean)
//       ),
//     ],
//     [simulations]
//   );

//   const experienceOptions = useMemo(
//     () => [
//       "Any Experience",
//       ...new Set(
//         simulations.map((item) => normalize(item.level)).filter(Boolean)
//       ),
//     ],
//     [simulations]
//   );

//   const filteredSimulations = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return simulations.filter((item) => {
//       const searchable = [
//         item.company,
//         item.domain,
//         item.level,
//         getDescription(item),
//         ...getRounds(item).flatMap((round) => [
//           round?.name,
//           ...getTopics(round),
//         ]),
//       ]
//         .map(normalize)
//         .join(" ")
//         .toLowerCase();

//       return (
//         (!query || searchable.includes(query)) &&
//         (company === "All Companies" || item.company === company) &&
//         (role === "All Roles" || item.domain === role) &&
//         (experience === "Any Experience" || item.level === experience)
//       );
//     });
//   }, [simulations, search, company, role, experience]);

//   const clearFilters = () => {
//     setSearch("");
//     setCompany("All Companies");
//     setRole("All Roles");
//     setExperience("Any Experience");
//   };

//   const hasFilters =
//     Boolean(search) ||
//     company !== "All Companies" ||
//     role !== "All Roles" ||
//     experience !== "Any Experience";

//   return (
//     <div className="w-full space-y-6 bg-slate-50 p-1 text-slate-900">
//       {/* Hero */}
//       <section className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
//         <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
//           <div>
//             <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-blue-700">
//               <Sparkles size={12} />
//               Interview readiness
//             </span>

//             <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
//               Choose your next{" "}
//               <span className="text-blue-600">interview.</span>
//             </h1>

//             <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
//               Explore company-specific practice templates, interview rounds,
//               evaluation criteria and role-based preparation.
//             </p>
//           </div>

//           <div className="flex items-center gap-3 self-start rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 sm:self-auto">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//               <Layers3 size={20} />
//             </div>
//             <div>
//               <p className="text-2xl font-black leading-none text-slate-900">
//                 {simulations.length}
//               </p>
//               <p className="mt-1.5 text-[10px] font-medium text-slate-500">
//                 Available templates
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search and filters */}
//       <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
//         <div className="flex flex-col gap-3 xl:flex-row">
//           <div className="relative min-w-0 flex-1">
//             <Search
//               size={17}
//               className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//             />

//             <input
//               type="search"
//               value={search}
//               onChange={(event) => setSearch(event.target.value)}
//               placeholder="Search company, domain or round..."
//               aria-label="Search simulations"
//               className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
//             />
//           </div>

//           <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 xl:w-[610px]">
//             <FilterSelect
//               value={company}
//               options={companyOptions}
//               onChange={setCompany}
//               label="Filter by company"
//             />

//             <FilterSelect
//               value={role}
//               options={roleOptions}
//               onChange={setRole}
//               label="Filter by role"
//             />

//             <FilterSelect
//               value={experience}
//               options={experienceOptions}
//               onChange={setExperience}
//               label="Filter by experience"
//             />
//           </div>
//         </div>

//         <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
//           <div className="flex items-center gap-2 text-xs text-slate-500">
//             <Filter size={14} className="text-blue-600" />
//             Showing{" "}
//             <strong className="font-bold text-slate-900">
//               {filteredSimulations.length}
//             </strong>{" "}
//             of {simulations.length} simulations
//           </div>

//           {hasFilters && (
//             <button
//               type="button"
//               onClick={clearFilters}
//               className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
//             >
//               <RotateCcw size={12} />
//               Reset filters
//             </button>
//           )}
//         </div>
//       </section>

//       {/* Templates grid */}
//       {loading && simulations.length === 0 ? (
//         <EmptyState
//           loading
//           error={false}
//           hasFilters={hasFilters}
//           onClear={clearFilters}
//           onRetry={fetchTemplates}
//         />
//       ) : error && simulations.length === 0 ? (
//         <EmptyState
//           loading={false}
//           error
//           hasFilters={hasFilters}
//           onClear={clearFilters}
//           onRetry={fetchTemplates}
//         />
//       ) : filteredSimulations.length > 0 ? (
//         <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
//           {filteredSimulations.map((simulation, index) => (
//             <SimulationCard
//               key={
//                 simulation._id ||
//                 simulation.id ||
//                 `${simulation.company}-${simulation.domain}-${simulation.level}-${index}`
//               }
//               simulation={simulation}
//               onClick={() => setSelectedSimulation(simulation)}
//             />
//           ))}
//         </section>
//       ) : (
//         <EmptyState
//           loading={false}
//           error={false}
//           hasFilters={hasFilters}
//           onClear={clearFilters}
//           onRetry={fetchTemplates}
//         />
//       )}

//       {/* Details modal */}
//       {selectedSimulation && (
//         <SimulationDetailsModal
//           simulation={selectedSimulation}
//           onClose={() => setSelectedSimulation(null)}
//         />
//       )}
//     </div>
//   );
// }




"use client";



import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {

  Search,

  ChevronDown,

  ArrowRight,

  X,

  Clock3,

  Code2,

  MessageSquare,

  Brain,

  Bug,

  Scale,

  Layers3,

  Sparkles,

  BriefcaseBusiness,

  CircleCheck,

  Filter,

  RotateCcw,

  LoaderCircle,

  Building2,

  Target,

  ListChecks,

} from "lucide-react";

import Link from "next/link";

import { useAssessment } from "@/app/context/assessments.context";



/* =========================================================

   OFFICIAL BRAND LOGOS

   Simple Icons CDN — recognized brand logos, not initials.

========================================================= */



const COMPANY_LOGOS = {

  Google: "google",

  Microsoft: "microsoft",

  Amazon: "amazon",

  Meta: "meta",

  Apple: "apple",

  NVIDIA: "nvidia",

  Adobe: "adobe",

  Salesforce: "salesforce",

  Uber: "uber",

  LinkedIn: "linkedin",

  Atlassian: "atlassian",

  Oracle: "oracle",

  IBM: "ibm",

  Cisco: "cisco",

  Intel: "intel",

  Qualcomm: "qualcomm",

  PayPal: "paypal",

  "Walmart Global Tech": "walmart",

  Flipkart: "flipkart",

  PhonePe: "phonepe",

  Razorpay: "razorpay",

  Swiggy: "swiggy",

  Zomato: "zomato",

  Meesho: "meesho",

  Zoho: "zoho",

  Freshworks: "freshworks",

  ServiceNow: "servicenow",

  SAP: "sap",

  Netflix: "netflix",

  Accenture: "accenture",

};



const LOGO_COLORS = {

  Google: "4285F4",

  Microsoft: "5E5E5E",

  Amazon: "FF9900",

  Meta: "0866FF",

  Apple: "333333",

  NVIDIA: "76B900",

  Adobe: "EB1000",

  Salesforce: "00A1E0",

  Uber: "000000",

  LinkedIn: "0A66C2",

  Atlassian: "1868DB",

  Oracle: "F80000",

  IBM: "1261FE",

  Cisco: "049FD9",

  Intel: "0071C5",

  Qualcomm: "3253DC",

  PayPal: "003087",

  "Walmart Global Tech": "0071CE",

  Flipkart: "2874F0",

  PhonePe: "5F259F",

  Razorpay: "0C2451",

  Swiggy: "FC8019",

  Zomato: "E23744",

  Meesho: "570D7D",

  Zoho: "E42527",

  Freshworks: "25C16F",

  ServiceNow: "81B5A1",

  SAP: "008FD3",

  Netflix: "E50914",

  Accenture: "A100FF",

};



/* =========================================================

   DATA HELPERS

========================================================= */



function normalize(value) {

  return String(value ?? "").trim();

}



function extractTemplates(value, depth = 0, visited = new Set()) {

  if (!value || typeof value !== "object" || depth > 6 || visited.has(value)) {

    return [];

  }



  visited.add(value);



  if (

    Array.isArray(value) &&

    value.some(

      (item) =>

        item &&

        typeof item === "object" &&

        ("company" in item || "domain" in item) &&

        ("rounds" in item || "jobDescription" in item || "level" in item)

    )

  ) {

    return value.filter(

      (item) =>

        item &&

        typeof item === "object" &&

        ("company" in item || "domain" in item)

    );

  }



  const preferredKeys = [

    "data",

    "templates",

    "assessments",

    "prebuildAssessments",

    "prebuiltAssessments",

    "prebuildAssessment",

    "prebuiltAssessment",

    "allAssessments",

    "availableSimulations",

    "result",

    "results",

  ];



  if (Array.isArray(value)) {

    for (const item of value) {

      const found = extractTemplates(item, depth + 1, visited);

      if (found.length) return found;

    }

    return [];

  }



  for (const key of preferredKeys) {

    if (key in value) {

      const found = extractTemplates(value[key], depth + 1, visited);

      if (found.length) return found;

    }

  }



  for (const [key, child] of Object.entries(value)) {

    if (preferredKeys.includes(key)) continue;



    const found = extractTemplates(child, depth + 1, visited);

    if (found.length) return found;

  }



  return [];

}



function getRounds(item) {

  return Array.isArray(item?.rounds) ? item.rounds : [];

}



function getDescription(item) {

  const jd = item?.jobDescription;



  if (typeof jd === "string") return jd;

  if (!jd || typeof jd !== "object") return "";



  return (

    jd.description ||

    jd.summary ||

    jd.overview ||

    jd.content ||

    jd.text ||

    ""

  );

}



function getDuration(item) {

  return getRounds(item).reduce((total, round) => {

    const minutes = Number(round?.durationMinutes);



    return total + (

      Number.isFinite(minutes) && minutes > 0 ? minutes : 0

    );

  }, 0);

}



function getExperience(level) {

  const value = normalize(level);



  if (/entry/i.test(value)) return "Entry Level";

  if (/experienced/i.test(value)) return "Experienced";



  return value || "Not specified";

}



function getTopics(round) {

  if (Array.isArray(round?.topics)) return round.topics;

  if (typeof round?.topics === "string") return [round.topics];



  return [];

}



function displayText(value) {

  if (Array.isArray(value)) return value.join("\n");

  if (typeof value === "string" || typeof value === "number") {

    return String(value);

  }



  return "";

}



/* =========================================================

   COMPANY LOGO

========================================================= */



function CompanyLogo({ company, size = "large" }) {

  const [sourceIndex, setSourceIndex] = useState(0);



  const logo = Object.keys(COMPANY_LOGOS).find(

    (name) => name.toLowerCase() === normalize(company).toLowerCase()

  );



  const slug = logo ? COMPANY_LOGOS[logo] : null;

  const color = logo ? LOGO_COLORS[logo] : "64748b";



  const sources = slug

    ? [

        `https://cdn.simpleicons.org/${slug}/${color}`,

        `https://www.google.com/s2/favicons?domain=${slug === "google" ? "google.com" : slug + ".com"}&sz=128`,

      ]

    : [];



  useEffect(() => {

    setSourceIndex(0);

  }, [company]);



  const dimension = size === "small" ? "h-10 w-10" : "h-14 w-14";

  const imageDimension = size === "small" ? "h-6 w-6" : "h-9 w-9";



  return (

    <div

      className={`flex ${dimension} shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm`}

    >

      {sources[sourceIndex] ? (

        <img

          key={sources[sourceIndex]}

          src={sources[sourceIndex]}

          alt={`${company} logo`}

          loading="lazy"

          referrerPolicy="no-referrer"

          className={`${imageDimension} object-contain`}

          onError={() => setSourceIndex((index) => index + 1)}

        />

      ) : (

        <Building2 className="h-6 w-6 text-slate-400" />

      )}

    </div>

  );

}



/* =========================================================

   FILTER SELECT

========================================================= */



function FilterSelect({ value, options, onChange, label }) {

  return (

    <div className="relative min-w-0">

      <select

        value={value}

        onChange={(event) => onChange(event.target.value)}

        aria-label={label}

        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 pr-9 text-sm font-medium text-slate-700 outline-none transition hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"

      >

        {options.map((option) => (

          <option key={option} value={option}>

            {option}

          </option>

        ))}

      </select>



      <ChevronDown

        size={15}

        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"

      />

    </div>

  );

}



/* =========================================================

   SIMULATION CARD

========================================================= */



function SimulationCard({ simulation, onClick }) {

  const rounds = getRounds(simulation);

  const duration = getDuration(simulation);



  return (

    <article

      onClick={onClick}

      onKeyDown={(event) => {

        if (event.key === "Enter" || event.key === " ") {

          event.preventDefault();

          onClick();

        }

      }}

      tabIndex={0}

      role="button"

      className="group flex h-full cursor-pointer flex-col rounded-[22px] border border-slate-200 bg-white text-left shadow-[0_2px_12px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_35px_rgba(37,99,235,0.09)] focus:outline-none focus:ring-4 focus:ring-blue-500/10"

    >

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Company branding */}

        <div className="flex items-start justify-between gap-3">

          <CompanyLogo company={simulation.company} />



          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-[10px] font-bold text-blue-700">

            <Sparkles size={11} />

            SIMULATION

          </span>

        </div>



        {/* Company and role */}

        <div className="mt-5">

          <h3 className="text-lg font-bold tracking-tight text-slate-900 transition group-hover:text-blue-700">

            {simulation.company || "Company"}

          </h3>



          <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-700">

            {simulation.domain || "Interview"}

          </p>



          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">

            <BriefcaseBusiness size={13} />

            {getExperience(simulation.level)}

          </p>

        </div>



        {/* Stats */}

        <div className="mt-5 grid grid-cols-2 gap-2">

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

            <div className="flex items-center gap-2 text-blue-600">

              <Layers3 size={15} />

              <span className="text-xs font-bold text-slate-800">

                {rounds.length} Rounds

              </span>

            </div>

            <p className="mt-1.5 text-[10px] text-slate-500">

              Interview structure

            </p>

          </div>



          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

            <div className="flex items-center gap-2 text-blue-600">

              <Clock3 size={15} />

              <span className="text-xs font-bold text-slate-800">

                {duration ? `${duration} min` : "Flexible"}

              </span>

            </div>

            <p className="mt-1.5 text-[10px] text-slate-500">

              Total estimated time

            </p>

          </div>

        </div>



        {/* Round preview */}

        <div className="mt-6 flex-1">

          <div className="flex items-center justify-between">

            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">

              Interview journey

            </p>

            {rounds.length > 0 && (

              <span className="text-[10px] font-semibold text-slate-400">

                {rounds.length} stages

              </span>

            )}

          </div>



          {rounds.length ? (

            <div className="mt-3 space-y-3">

              {rounds.slice(0, 3).map((round, index) => (

                <div

                  key={`${round?.name || "round"}-${index}`}

                  className="flex items-center gap-2.5"

                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-[10px] font-bold text-blue-700">

                    {round?.order || index + 1}

                  </span>



                  <span className="min-w-0 flex-1 truncate text-xs font-medium text-slate-600">

                    {round?.name || `Interview Round ${index + 1}`}

                  </span>



                  {round?.durationMinutes && (

                    <span className="shrink-0 text-[10px] text-slate-400">

                      {round.durationMinutes}m

                    </span>

                  )}

                </div>

              ))}



              {rounds.length > 3 && (

                <p className="pl-9 text-[11px] font-semibold text-blue-600">

                  +{rounds.length - 3} more rounds

                </p>

              )}

            </div>

          ) : (

            <p className="mt-3 text-xs leading-5 text-slate-400">

              View this template to explore the interview structure.

            </p>

          )}

        </div>



        {/* Footer */}

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

          <span className="text-[11px] font-medium text-slate-400">

            Explore preparation plan

          </span>



          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition group-hover:gap-2.5">

            View details

            <ArrowRight size={15} />

          </span>

        </div>

      </div>

    </article>

  );

}



/* =========================================================

   DETAILS MODAL

========================================================= */



function SimulationDetailsModal({ simulation, onClose }) {

  if (!simulation) return null;



  const rounds = getRounds(simulation);

  const duration = getDuration(simulation);

  const description = getDescription(simulation);



  return (

    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">

      <button

        type="button"

        aria-label="Close details"

        onClick={onClose}

        className="absolute inset-0 cursor-default bg-slate-950/40 backdrop-blur-sm"

      />



      <div

        role="dialog"

        aria-modal="true"

        aria-labelledby="simulation-details-title"

        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl"

      >

        {/* Header */}

        <header className="flex items-center justify-between gap-4 border-b border-slate-100 bg-white px-5 py-5 sm:px-7">

          <div className="flex min-w-0 items-center gap-3.5">

            <CompanyLogo company={simulation.company} />



            <div className="min-w-0">

              <h2

                id="simulation-details-title"

                className="truncate text-lg font-bold text-slate-900 sm:text-xl"

              >

                {simulation.company}

              </h2>



              <p className="mt-1 text-sm font-medium text-slate-600">

                {simulation.domain}

              </p>



              <p className="mt-1 text-xs font-semibold text-blue-600">

                {getExperience(simulation.level)}

              </p>

            </div>

          </div>



          <button

            type="button"

            onClick={onClose}

            aria-label="Close modal"

            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"

          >

            <X size={17} />

          </button>

        </header>



        <div className="flex-1 space-y-7 overflow-y-auto p-5 sm:p-7">

          {/* Summary stats */}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

            {[

              { icon: Layers3, value: rounds.length, label: "Interview rounds" },

              { icon: Clock3, value: duration ? `${duration} min` : "—", label: "Estimated duration" },

              { icon: Target, value: "Role-based", label: "Practice format" },

            ].map(({ icon: Icon, value, label }) => (

              <div

                key={label}

                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"

              >

                <Icon size={17} className="text-blue-600" />

                <p className="mt-3 text-lg font-bold text-slate-900">

                  {value}

                </p>

                <p className="mt-1 text-[11px] text-slate-500">{label}</p>

              </div>

            ))}

          </div>



          {/* Job description */}

          {description && (

            <section>

              <h3 className="text-sm font-bold text-slate-900">

                Role overview

              </h3>



              <p className="mt-3 whitespace-pre-line rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">

                {description}

              </p>

            </section>

          )}



          {/* Rounds */}

          <section>

            <div className="flex items-center justify-between gap-3">

              <h3 className="text-sm font-bold text-slate-900">

                Interview rounds

              </h3>

              <span className="text-xs text-slate-400">

                {rounds.length} stages

              </span>

            </div>



            {rounds.length ? (

              <div className="mt-4 space-y-3">

                {rounds.map((round, index) => (

                  <article

                    key={`${round?.name || "round"}-${index}`}

                    className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"

                  >

                    <div className="flex items-start gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-black text-blue-700">

                        {round?.order || index + 1}

                      </div>



                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-2">

                          <h4 className="text-sm font-bold text-slate-900">

                            {round?.name || `Round ${index + 1}`}

                          </h4>



                          {round?.difficulty && (

                            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600">

                              {round.difficulty}

                            </span>

                          )}

                        </div>



                        <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-500">

                          {round?.durationMinutes && (

                            <span className="inline-flex items-center gap-1">

                              <Clock3 size={12} />

                              {round.durationMinutes} minutes

                            </span>

                          )}



                          {round?.format && (

                            <span className="inline-flex items-center gap-1">

                              <Code2 size={12} />

                              {round.format}

                            </span>

                          )}

                        </div>

                      </div>

                    </div>



                    {getTopics(round).length > 0 && (

                      <div className="mt-4">

                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">

                          Topics covered

                        </p>



                        <div className="mt-2 flex flex-wrap gap-1.5">

                          {getTopics(round).map((topic, topicIndex) => (

                            <span

                              key={`${topic}-${topicIndex}`}

                              className="rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-[11px] font-medium text-blue-700"

                            >

                              {topic}

                            </span>

                          ))}

                        </div>

                      </div>

                    )}



                    {round?.candidateTasks && (

                      <div className="mt-4">

                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">

                          Candidate tasks

                        </p>

                        <p className="mt-1.5 whitespace-pre-line text-xs leading-6 text-slate-600">

                          {displayText(round.candidateTasks)}

                        </p>

                      </div>

                    )}



                    {round?.evaluationCriteria && (

                      <div className="mt-4">

                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">

                          Evaluation criteria

                        </p>

                        <p className="mt-1.5 whitespace-pre-line text-xs leading-6 text-slate-600">

                          {displayText(round.evaluationCriteria)}

                        </p>

                      </div>

                    )}



                    {round?.passCriteria && (

                      <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-3">

                        <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">

                          Pass criteria

                        </p>

                        <p className="mt-1.5 whitespace-pre-line text-xs leading-5 text-slate-600">

                          {displayText(round.passCriteria)}

                        </p>

                      </div>

                    )}

                  </article>

                ))}

              </div>

            ) : (

              <p className="mt-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-500">

                Detailed rounds are not available for this template.

              </p>

            )}

          </section>



          {simulation.templateNote && (

            <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-800">

              {simulation.templateNote}

            </p>

          )}



          <p className="text-[11px] leading-5 text-slate-400">

            This is a practice template. Actual interview rounds can vary by

            team, role and location.

          </p>

        </div>



        <footer className="border-t border-slate-100 bg-white p-5 sm:px-7">

          <Link

            href="/voice-round"

            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"

          >

            Start Simulation

            <ArrowRight size={16} />

          </Link>

        </footer>

      </div>

    </div>

  );

}



/* =========================================================

   EMPTY / LOADING STATE

========================================================= */



function EmptyState({ loading, error, onRetry, onClear, hasFilters }) {

  return (

    <div className="flex min-h-[300px] items-center justify-center rounded-[24px] border border-slate-200 bg-white p-8">

      <div className="max-w-md text-center">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">

          {loading ? (

            <LoaderCircle size={23} className="animate-spin text-blue-600" />

          ) : error ? (

            <Building2 size={23} className="text-amber-600" />

          ) : (

            <Search size={23} className="text-blue-600" />

          )}

        </div>



        <h3 className="mt-4 text-base font-bold text-slate-900">

          {loading

            ? "Loading simulations..."

            : error

              ? "Unable to load simulations"

              : hasFilters

                ? "No matching simulations"

                : "No simulations available"}

        </h3>



        <p className="mt-2 text-sm leading-6 text-slate-500">

          {loading

            ? "Fetching interview templates. Please wait."

            : error

              ? "Check your connection and retry the request."

              : hasFilters

                ? "Try changing the company, role or experience filters."

                : "No usable templates were found in the API response."}

        </p>



        {!loading && (

          <div className="mt-5 flex flex-wrap justify-center gap-2">

            {hasFilters && (

              <button

                type="button"

                onClick={onClear}

                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"

              >

                <RotateCcw size={13} />

                Clear filters

              </button>

            )}



            {error && (

              <button

                type="button"

                onClick={onRetry}

                className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"

              >

                Retry

              </button>

            )}

          </div>

        )}

      </div>

    </div>

  );

}



/* =========================================================

   MAIN COMPONENT

========================================================= */



export default function AvailableSimulations({

  onStartSimulation = () => {},

}) {

  const {

    prebuildAssessments,

    FetchPrebuildAssessment,

} = useAssessment();





  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const hasRequested = useRef(false);

  const [search, setSearch] = useState("");

  const [company, setCompany] = useState("All Companies");

  const [role, setRole] = useState("All Roles");

  const [experience, setExperience] = useState("Any Experience");

  const [selectedSimulation, setSelectedSimulation] = useState(null);



  const simulations = useMemo(
    () => extractTemplates(prebuildAssessments),
    [prebuildAssessments]
  );

  const fetchTemplates = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    setError(false);

    try {
      if (typeof FetchPrebuildAssessment !== "function") {
        throw new Error("FetchPrebuildAssessment is not available in assessment context.");
      }

      await FetchPrebuildAssessment(forceRefresh);
      hasRequested.current = true;
    } catch (err) {
      console.error("Failed to fetch simulation templates:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [FetchPrebuildAssessment]);

  useEffect(() => {
    if (simulations.length > 0) {
      setLoading(false);
      hasRequested.current = true;
      return;
    }

    if (!hasRequested.current) {
      hasRequested.current = true;
      fetchTemplates();
    }
  }, [simulations.length, fetchTemplates]);

  const companyOptions = useMemo(

    () => [

      "All Companies",

      ...new Set(

        simulations.map((item) => normalize(item.company)).filter(Boolean)

      ),

    ],

    [simulations]

  );



  const roleOptions = useMemo(

    () => [

      "All Roles",

      ...new Set(

        simulations.map((item) => normalize(item.domain)).filter(Boolean)

      ),

    ],

    [simulations]

  );



  const experienceOptions = useMemo(

    () => [

      "Any Experience",

      ...new Set(

        simulations.map((item) => normalize(item.level)).filter(Boolean)

      ),

    ],

    [simulations]

  );



  const filteredSimulations = useMemo(() => {

    const query = search.trim().toLowerCase();



    return simulations.filter((item) => {

      const searchable = [

        item.company,

        item.domain,

        item.level,

        getDescription(item),

        ...getRounds(item).flatMap((round) => [

          round?.name,

          ...getTopics(round),

        ]),

      ]

        .map(normalize)

        .join(" ")

        .toLowerCase();



      return (

        (!query || searchable.includes(query)) &&

        (company === "All Companies" || item.company === company) &&

        (role === "All Roles" || item.domain === role) &&

        (experience === "Any Experience" || item.level === experience)

      );

    });

  }, [simulations, search, company, role, experience]);



  const clearFilters = () => {

    setSearch("");

    setCompany("All Companies");

    setRole("All Roles");

    setExperience("Any Experience");

  };



  const hasFilters =

    Boolean(search) ||

    company !== "All Companies" ||

    role !== "All Roles" ||

    experience !== "Any Experience";



  return (

    <div className="w-full space-y-6 bg-slate-50 p-1 text-slate-900">

      {/* Hero */}

      <section className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-blue-700">

              <Sparkles size={12} />

              Interview readiness

            </span>



            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">

              Choose your next{" "}

              <span className="text-blue-600">interview.</span>

            </h1>



            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">

              Explore company-specific practice templates, interview rounds,

              evaluation criteria and role-based preparation.

            </p>

          </div>



          <div className="flex items-center gap-3 self-start rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 sm:self-auto">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

              <Layers3 size={20} />

            </div>

            <div>

              <p className="text-2xl font-black leading-none text-slate-900">

                {simulations.length}

              </p>

              <p className="mt-1.5 text-[10px] font-medium text-slate-500">

                Available templates

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* Search and filters */}

      <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

        <div className="flex flex-col gap-3 xl:flex-row">

          <div className="relative min-w-0 flex-1">

            <Search

              size={17}

              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"

            />



            <input

              type="search"

              value={search}

              onChange={(event) => setSearch(event.target.value)}

              placeholder="Search company, domain or round..."

              aria-label="Search simulations"

              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"

            />

          </div>



          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 xl:w-[610px]">

            <FilterSelect

              value={company}

              options={companyOptions}

              onChange={setCompany}

              label="Filter by company"

            />



            <FilterSelect

              value={role}

              options={roleOptions}

              onChange={setRole}

              label="Filter by role"

            />



            <FilterSelect

              value={experience}

              options={experienceOptions}

              onChange={setExperience}

              label="Filter by experience"

            />

          </div>

        </div>



        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">

          <div className="flex items-center gap-2 text-xs text-slate-500">

            <Filter size={14} className="text-blue-600" />

            Showing{" "}

            <strong className="font-bold text-slate-900">

              {filteredSimulations.length}

            </strong>{" "}

            of {simulations.length} simulations

          </div>



          {hasFilters && (

            <button

              type="button"

              onClick={clearFilters}

              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-800"

            >

              <RotateCcw size={12} />

              Reset filters

            </button>

          )}

        </div>

      </section>



      {/* Templates grid */}

      {loading && simulations.length === 0 ? (

        <EmptyState

          loading

          error={false}

          hasFilters={hasFilters}

          onClear={clearFilters}

          onRetry={() => fetchTemplates(true)}

        />

      ) : error && simulations.length === 0 ? (

        <EmptyState

          loading={false}

          error

          hasFilters={hasFilters}

          onClear={clearFilters}

          onRetry={() => fetchTemplates(true)}

        />

      ) : filteredSimulations.length > 0 ? (

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

          {filteredSimulations.map((simulation, index) => (

            <SimulationCard

              key={

                simulation._id ||

                simulation.id ||

                `${simulation.company}-${simulation.domain}-${simulation.level}-${index}`

              }

              simulation={simulation}

              onClick={() => setSelectedSimulation(simulation)}

            />

          ))}

        </section>

      ) : (

        <EmptyState

          loading={false}

          error={false}

          hasFilters={hasFilters}

          onClear={clearFilters}

          onRetry={() => fetchTemplates(true)}

        />

      )}



      {/* Details modal */}

      {selectedSimulation && (

        <SimulationDetailsModal

          simulation={selectedSimulation}

          onClose={() => setSelectedSimulation(null)}

        />

      )}

    </div>

  );

}