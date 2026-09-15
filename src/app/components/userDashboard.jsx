// "use client";

// import { useState } from "react";
// import {
//   LayoutDashboard,
//   ClipboardCheck,
//   Dumbbell,
//   Mic2,
//   TrendingUp,
//   RotateCcw,
//   BarChart3,
//   UserRound,
//   ChevronDown,
// } from "lucide-react";
// import OverallReadiness from "./dashboard1/overallRediness";
// import RecentAssessment from "./dashboard1/recentAssessment";
// import CurrentWeaknesses from "./dashboard1/currentWeakness";
// import RecommendedAction from "./dashboard1/recommendActions";
// import NewAssessment from "./assessments/newAssessment";
// import AvailableSimulations from "./assessments/availableAssessments";
// import PreviousAssessments from "./assessments/assessmentHistory";
// import BuildFromJobDescription from "./assessments/pipeline";
// import AssessmentResults from "./assessments/results";
// import TechnicalPractice from "./assessments/technicalAssessments";
// import CommunicationCoach from "./assessments/communicationTest";
// import CommunicationScorePage from "./assessments/communicationScore";
// import WeaknessesPage from "./assessments/communicationWeakness";
// import PracticeRetestPage from "./assessments/retestAndPracticeCommunication";
// import ImprovementPlanPage from "./assessments/improvementWeakness";
// import PersonalizedDrillPage from "./assessments/practiceDrill";
// import ProgressPage from "./assessments/progress";
// import RetakeAssessmentsPage from "./assessments/retakeAssessment";
// export default function CandidateDashboard() {
//   const [activeItem, setActiveItem] = useState("overall-readiness");
//   const [openSection, setOpenSection] = useState("dashboard");

//   const navigation = [
//     {
//       id: "dashboard",
//       title: "Dashboard",
//       icon: LayoutDashboard,
//       items: [
//         {
//           id: "overall-readiness",
//           label: "Overall Readiness",
//           description:
//             "Get a complete overview of your interview readiness.",
//         },
//         {
//           id: "recent-assessment",
//           label: "Recent Assessment",
//           description:
//             "Review your latest interview assessment and performance.",
//         },
//         {
//           id: "current-weaknesses",
//           label: "Current Weaknesses",
//           description:
//             "Identify the areas where you need the most improvement.",
//         },
//         {
//           id: "recommended-action",
//           label: "Recommended Next Action",
//           description:
//             "Follow the next practice step recommended for you.",
//         },
//       ],
//     },

//     {
//       id: "assessments",
//       title: "Assessments",
//       icon: ClipboardCheck,
//       items: [
//         {
//           id: "new-assessment",
//           label: "New Assessment",
//           description:
//             "Start a new AI-powered interview assessment.",
//         },
//         {
//           id: "available-simulations",
//           label: "Available Simulations",
//           description:
//             "Explore upcoming and available interview simulations.",
//         },
//         {
//           id: "previous-assessments",
//           label: "Previous Assessments",
//           description:
//             "View all the assessments you have completed.",
//         },
//         {
//           id: "pipeline",
//           label: "Build Pipeline",
//           description:
//             "Upload your JD and build custom assessment rounds",
//         },
//         {
//           id: "assessment-results",
//           label: "Results",
//           description:
//             "Review detailed results from your assessments.",
//         },
//       ],
//     },

//     {
//       id: "practice",
//       title: "Practice",
//       icon: Dumbbell,
//       items: [
//         {
//           id: "technical-practice",
//           label: "Technical Practice",
//           description:
//             "Improve your technical interview skills.",
//         }
//         // {
//         //   id: "communication-practice",
//         //   label: "Communication Practice",
//         //   description:
//         //     "Practice answering interview questions with confidence.",
//         // },
//       ],
//     },

//     {
//       id: "communication",
//       title: "Communication",
//       icon: Mic2,
//       items: [
//         {
//           id: "speaking-test",
//           label: "Speaking Test",
//           description:
//             "Take an AI-powered speaking and communication test.",
//         },
//         {
//           id: "communication-score",
//           label: "Communication Score",
//           description:
//             "Understand your communication performance.",
//         },
//         {
//           id: "communication-weaknesses",
//           label: "Weaknesses",
//           description:
//             "Identify specific communication areas to improve.",
//         },
//         {
//           id: "communication-retest",
//           label: "Practice & Retest",
//           description:
//             "Practice your weak areas and retake the test.",
//         },
//       ],
//     },

//     {
//       id: "improvement",
//       title: "Improvement Plan",
//       icon: TrendingUp,
//       items: [
//         {
//           id: "plan-weaknesses",
//           label: "Current Weaknesses",
//           description:
//             "Review the weaknesses affecting your readiness.",
//         },
//         {
//           id: "personalized-drills",
//           label: "Personalized Drills",
//           description:
//             "Practice drills generated specifically for you.",
//         },
//         {
//           id: "plan-progress",
//           label: "Progress",
//           description:
//             "Track your improvement across different skills.",
//         },
//         // {
//         //   id: "recommended-practice",
//         //   label: "Recommended Practice",
//         //   description:
//         //     "See what you should practice next.",
//         // },
//       ],
//     },

//     {
//       id: "retest",
//       title: "Retest",
//       icon: RotateCcw,
//       items: [
//         {
//           id: "retake-assessment",
//           label: "Retake Assessment",
//           description:
//             "Retake your previous interview assessment.",
//         },
//         {
//           id: "score-comparison",
//           label: "Previous vs Current Score",
//           description:
//             "Compare your previous and latest assessment scores.",
//         },
//         {
//           id: "improvement-percent",
//           label: "Improvement %",
//           description:
//             "See how much your interview readiness has improved.",
//         },
//       ],
//     },

//     {
//       id: "progress",
//       title: "Progress",
//       icon: BarChart3,
//       items: [
//         {
//           id: "readiness-history",
//           label: "Readiness Score History",
//           description:
//             "Track your readiness score over time.",
//         },
//         {
//           id: "skill-progress",
//           label: "Skill-wise Progress",
//           description:
//             "See progress across individual interview skills.",
//         },
//         {
//           id: "assessment-history",
//           label: "Assessment History",
//           description:
//             "View your complete assessment performance history.",
//         },
//         {
//           id: "benchmarks",
//           label: "Benchmarks / Percentile",
//           description:
//             "Compare your performance with other candidates.",
//         },
//       ],
//     },

//     {
//       id: "profile",
//       title: "Profile / Settings",
//       icon: UserRound,
//       items: [
//         {
//           id: "profile-info",
//           label: "Profile",
//           description:
//             "Manage your personal profile information.",
//         },
//         {
//           id: "target-role",
//           label: "Target Role",
//           description:
//             "Set and manage the role you are preparing for.",
//         },
//         {
//           id: "target-companies",
//           label: "Target Companies",
//           description:
//             "Manage the companies you are targeting.",
//         },
//         {
//           id: "resume-jd",
//           label: "Resume / JD",
//           description:
//             "Manage your resume and job descriptions.",
//         },
//         {
//           id: "account-settings",
//           label: "Account Settings",
//           description:
//             "Manage your account and preferences.",
//         },
//       ],
//     },
//   ];

//   const activeSection = navigation.find(
//     (section) =>
//       section.items.some((item) => item.id === activeItem)
//   );

//   const activeContent = activeSection?.items.find(
//     (item) => item.id === activeItem
//   );

//   const handleSectionClick = (section) => {
//     setOpenSection(
//       openSection === section.id ? null : section.id
//     );

//     // Section open karte hi uska first item active
//     if (openSection !== section.id) {
//       setActiveItem(section.items[0].id);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f9fc] text-slate-900 flex">

//       {/* =========================================
//           SIDEBAR
//       ========================================= */}

//       <aside className="fixed left-0 top-0 bottom-0 w-[270px] bg-white border-r border-slate-200 flex flex-col">

//         {/* Logo */}
//         <div className="h-[78px] px-6 flex items-center border-b border-slate-100">

//           <div className="flex items-center gap-3">

//             <div className="flex items-end gap-[3px] h-8">
//               <span className="w-[5px] h-3 bg-blue-600 rounded-full" />
//               <span className="w-[5px] h-5 bg-blue-600 rounded-full" />
//               <span className="w-[5px] h-7 bg-blue-600 rounded-full" />
//             </div>

//             <h1 className="text-xl font-bold tracking-tight">
//               Test<span className="text-blue-600">Yourself</span>
//             </h1>

//           </div>

//         </div>


//         {/* Main Navigation */}
//         <div className="flex-1 overflow-y-auto px-4 py-6">

//           <p className="px-3 mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
//             Main Navigation
//           </p>


//           <div className="space-y-1">

//             {navigation.map((section) => {

//               const Icon = section.icon;
//               const isOpen = openSection === section.id;

//               return (
//                 <div key={section.id}>

//                   {/* Section Heading */}
//                   <button
//                     onClick={() => handleSectionClick(section)}
//                     className={`
//                       w-full flex items-center justify-between
//                       px-3 py-3 rounded-xl
//                       transition-all duration-200
//                       ${
//                         isOpen
//                           ? "bg-blue-50 text-blue-600"
//                           : "text-slate-600 hover:bg-slate-50"
//                       }
//                     `}
//                   >

//                     <div className="flex items-center gap-3">

//                       <Icon
//                         className={`
//                           w-[18px] h-[18px]
//                           ${
//                             isOpen
//                               ? "text-blue-600"
//                               : "text-slate-400"
//                           }
//                         `}
//                       />

//                       <span className="text-sm font-semibold">
//                         {section.title}
//                       </span>

//                     </div>


//                     <ChevronDown
//                       className={`
//                         w-4 h-4 transition-transform duration-200
//                         ${
//                           isOpen
//                             ? "rotate-180 text-blue-500"
//                             : "text-slate-300"
//                         }
//                       `}
//                     />

//                   </button>


//                   {/* Section Items */}
//                   {isOpen && (
//                     <div className="ml-9 mt-1 mb-2 space-y-0.5">

//                       {section.items.map((item) => {

//                         const isActive =
//                           activeItem === item.id;

//                         return (
//                           <button
//                             key={item.id}
//                             onClick={() =>
//                               setActiveItem(item.id)
//                             }
//                             className={`
//                               relative w-full text-left
//                               px-3 py-2 rounded-lg
//                               text-[12px]
//                               transition-all
//                               ${
//                                 isActive
//                                   ? "text-blue-600 bg-blue-50/70 font-semibold"
//                                   : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
//                               }
//                             `}
//                           >

//                             {isActive && (
//                               <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-blue-600 rounded-full" />
//                             )}

//                             {item.label}

//                           </button>
//                         );
//                       })}

//                     </div>
//                   )}

//                 </div>
//               );
//             })}

//           </div>

//         </div>


//         {/* Profile */}
//         <div className="p-4 border-t border-slate-100">

//           <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">

//             <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
//               TS
//             </div>

//             <div>
//               <p className="text-sm font-semibold text-slate-800">
//                 Candidate
//               </p>

//               <p className="text-[11px] text-slate-400">
//                 Frontend Developer
//               </p>
//             </div>

//           </div>

//         </div>

//       </aside>


//       {/* =========================================
//           RIGHT SIDE
//       ========================================= */}

//       <main className="ml-[270px] flex-1 min-h-screen">

//         {/* Top Bar */}
//         <header className="h-[78px] bg-white border-b border-slate-200 flex items-center justify-between px-8">

//           <div>
//             <p className="text-xs text-slate-400">
//               Interview Preparation
//             </p>

//             <p className="text-sm font-semibold text-slate-700 mt-0.5">
//               Build your confidence. Get interview ready.
//             </p>
//           </div>

//         </header>


//         {/* Only Heading */}
//         <section className="px-8 py-10">

//           <div className="max-w-[1400px]">

//             <div className="flex items-center gap-4">

//               <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">

//                 {activeSection?.icon && (
//                   <activeSection.icon
//                     className="w-5 h-5 text-blue-600"
//                   />
//                 )}

//               </div>


//               <div>

//                 <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
//                   {activeSection?.title}
//                 </p>

//                 <h2 className="text-3xl font-bold tracking-tight text-slate-950 mt-1">
//                   {activeContent?.label}
//                 </h2>

//                 <p className="text-sm text-slate-500 mt-2">
//                   {activeContent?.description}
//                 </p>

//               </div>

//             </div>


//             {/* =====================================
//                 COMPONENTS WILL COME HERE
//             ====================================== */}

//             <div className="mt-10">

//               {activeItem === "overall-readiness" && (
//                 <OverallReadiness />
//               )}

//               {activeItem === "recent-assessment" && (
//                 <RecentAssessment />
//               )}

//               {activeItem === "current-weaknesses" && (
//                 <CurrentWeaknesses />
//               )}

//               {activeItem === "recommended-action" && (
//                 <RecommendedAction />
//               )}

//               {activeItem === "new-assessment" && (
//                 <NewAssessment />
//               )}
              
//               {activeItem === "available-simulations" && (
//                 <AvailableSimulations />
//               )}

//               {activeItem === "previous-assessments" && (
//                 <PreviousAssessments />
//               )}

//               {activeItem === "pipeline" && (
//                 <BuildFromJobDescription
//                     onStartSimulation={(pipeline) => {
//                     console.log("Create assessment from pipeline:", pipeline);
//                     }}
//                     onEditPipeline={(pipeline) => {
//                     console.log("Edit pipeline:", pipeline);
//                     }}
//                 />
//               )}

//               {activeItem === "assessment-results" && (
//                 <AssessmentResults />
//               )}

//               {activeItem === "technical-practice" && (
//                 <TechnicalPractice/>
//               )}

//               {activeItem === "speaking-test" && (
//                 <CommunicationCoach/>
//               )}

//               {activeItem === "communication-score" && (
//                 <CommunicationScorePage/>
//               )}

//               {activeItem === "communication-weaknesses" && (
//                 <WeaknessesPage/>
//               )}

//               {activeItem === "communication-retest" && (
//                 <PracticeRetestPage/>
//               )}

//               {activeItem === "plan-weaknesses" && (
//                 <ImprovementPlanPage/>
//               )}

//               {activeItem === "personalized-drills" && (
//                 <PersonalizedDrillPage/>
//               )}

//               {activeItem === "plan-progress" && (
//                 <ProgressPage/>
//               )}

//               {activeItem === "retake-assessment" && (
//                 <RetakeAssessmentsPage/>
//               )}
//               {/* Baaki components yahan add honge */}

//             </div>

//           </div>

//         </section>

//       </main>

//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import {
//   LayoutDashboard,
//   ClipboardCheck,
//   Dumbbell,
//   Mic2,
//   TrendingUp,
//   RotateCcw,
//   BarChart3,
//   UserRound,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react";

// import OverallReadiness from "./dashboard1/overallRediness";
// import RecentAssessment from "./dashboard1/recentAssessment";
// import CurrentWeaknesses from "./dashboard1/currentWeakness";
// import RecommendedAction from "./dashboard1/recommendActions";

// import NewAssessment from "./assessments/newAssessment";
// import AvailableSimulations from "./assessments/availableAssessments";
// import PreviousAssessments from "./assessments/assessmentHistory";
// import BuildFromJobDescription from "./assessments/pipeline";
// import AssessmentResults from "./assessments/results";
// import TechnicalPractice from "./assessments/technicalAssessments";

// import CommunicationCoach from "./assessments/communicationTest";
// import CommunicationScorePage from "./assessments/communicationScore";
// import WeaknessesPage from "./assessments/communicationWeakness";
// import PracticeRetestPage from "./assessments/retestAndPracticeCommunication";

// import ImprovementPlanPage from "./assessments/improvementWeakness";
// import PersonalizedDrillPage from "./assessments/practiceDrill";
// import ProgressPage from "./assessments/progress";
// import RetakeAssessmentsPage from "./assessments/retakeAssessment";


// export default function CandidateDashboard() {

//   const [activeItem, setActiveItem] = useState("overall-readiness");

//   const [openSection, setOpenSection] = useState("dashboard");

//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);


//   const navigation = [

//     {
//       id: "dashboard",
//       title: "Dashboard",
//       icon: LayoutDashboard,

//       items: [
//         {
//           id: "overall-readiness",
//           label: "Overall Readiness",
//           description:
//             "Get a complete overview of your interview readiness.",
//         },

//         {
//           id: "recent-assessment",
//           label: "Recent Assessment",
//           description:
//             "Review your latest interview assessment and performance.",
//         },

//         {
//           id: "current-weaknesses",
//           label: "Current Weaknesses",
//           description:
//             "Identify the areas where you need the most improvement.",
//         },

//         {
//           id: "recommended-action",
//           label: "Recommended Next Action",
//           description:
//             "Follow the next practice step recommended for you.",
//         },
//       ],
//     },


//     {
//       id: "assessments",
//       title: "Assessments",
//       icon: ClipboardCheck,

//       items: [
//         {
//           id: "new-assessment",
//           label: "New Assessment",
//           description:
//             "Start a new AI-powered interview assessment.",
//         },

//         {
//           id: "available-simulations",
//           label: "Available Simulations",
//           description:
//             "Explore upcoming and available interview simulations.",
//         },

//         {
//           id: "previous-assessments",
//           label: "Previous Assessments",
//           description:
//             "View all the assessments you have completed.",
//         },

//         {
//           id: "pipeline",
//           label: "Build Pipeline",
//           description:
//             "Upload your JD and build custom assessment rounds",
//         },

//         {
//           id: "assessment-results",
//           label: "Results",
//           description:
//             "Review detailed results from your assessments.",
//         },
//       ],
//     },


//     {
//       id: "practice",
//       title: "Practice",
//       icon: Dumbbell,

//       items: [
//         {
//           id: "technical-practice",
//           label: "Technical Practice",
//           description:
//             "Improve your technical interview skills.",
//         },
//       ],
//     },


//     {
//       id: "communication",
//       title: "Communication",
//       icon: Mic2,

//       items: [
//         {
//           id: "speaking-test",
//           label: "Speaking Test",
//           description:
//             "Take an AI-powered speaking and communication test.",
//         },

//         {
//           id: "communication-score",
//           label: "Communication Score",
//           description:
//             "Understand your communication performance.",
//         },

//         {
//           id: "communication-weaknesses",
//           label: "Weaknesses",
//           description:
//             "Identify specific communication areas to improve.",
//         },

//         {
//           id: "communication-retest",
//           label: "Practice & Retest",
//           description:
//             "Practice your weak areas and retake the test.",
//         },
//       ],
//     },


//     {
//       id: "improvement",
//       title: "Improvement Plan",
//       icon: TrendingUp,

//       items: [
//         {
//           id: "plan-weaknesses",
//           label: "Current Weaknesses",
//           description:
//             "Review the weaknesses affecting your readiness.",
//         },

//         {
//           id: "personalized-drills",
//           label: "Personalized Drills",
//           description:
//             "Practice drills generated specifically for you.",
//         },

//         {
//           id: "plan-progress",
//           label: "Progress",
//           description:
//             "Track your improvement across different skills.",
//         },
//       ],
//     },


//     {
//       id: "retest",
//       title: "Retest",
//       icon: RotateCcw,

//       items: [
//         {
//           id: "retake-assessment",
//           label: "Retake Assessment",
//           description:
//             "Retake your previous interview assessment.",
//         },

//         {
//           id: "score-comparison",
//           label: "Previous vs Current Score",
//           description:
//             "Compare your previous and latest assessment scores.",
//         },

//         {
//           id: "improvement-percent",
//           label: "Improvement %",
//           description:
//             "See how much your interview readiness has improved.",
//         },
//       ],
//     },


//     {
//       id: "progress",
//       title: "Progress",
//       icon: BarChart3,

//       items: [
//         {
//           id: "readiness-history",
//           label: "Readiness Score History",
//           description:
//             "Track your readiness score over time.",
//         },

//         {
//           id: "skill-progress",
//           label: "Skill-wise Progress",
//           description:
//             "See progress across individual interview skills.",
//         },

//         {
//           id: "assessment-history",
//           label: "Assessment History",
//           description:
//             "View your complete assessment performance history.",
//         },

//         {
//           id: "benchmarks",
//           label: "Benchmarks / Percentile",
//           description:
//             "Compare your performance with other candidates.",
//         },
//       ],
//     },


//     {
//       id: "profile",
//       title: "Profile / Settings",
//       icon: UserRound,

//       items: [
//         {
//           id: "profile-info",
//           label: "Profile",
//           description:
//             "Manage your personal profile information.",
//         },

//         {
//           id: "target-role",
//           label: "Target Role",
//           description:
//             "Set and manage the role you are preparing for.",
//         },

//         {
//           id: "target-companies",
//           label: "Target Companies",
//           description:
//             "Manage the companies you are targeting.",
//         },

//         {
//           id: "resume-jd",
//           label: "Resume / JD",
//           description:
//             "Manage your resume and job descriptions.",
//         },

//         {
//           id: "account-settings",
//           label: "Account Settings",
//           description:
//             "Manage your account and preferences.",
//         },
//       ],
//     },
//   ];


//   const activeSection = navigation.find((section) =>
//     section.items.some((item) => item.id === activeItem)
//   );


//   const activeContent = activeSection?.items.find(
//     (item) => item.id === activeItem
//   );


//   const handleSectionClick = (section) => {

//     setOpenSection(
//       openSection === section.id ? null : section.id
//     );

//     if (openSection !== section.id) {
//       setActiveItem(section.items[0].id);
//     }
//   };


//   const handleItemClick = (itemId) => {

//     setActiveItem(itemId);

//     // Mobile par item select hone ke baad sidebar close
//     setMobileSidebarOpen(false);
//   };


//   return (

//     <div className="min-h-screen bg-[#f7f9fc] text-slate-900">


//       {/* =====================================================
//           MOBILE TOP BAR
//       ====================================================== */}

//       <div className="fixed left-0 right-0 top-0 z-40 flex h-[64px] items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden">

//         <div className="flex items-center gap-2.5">

//           <div className="flex items-end gap-[3px] h-7">

//             <span className="w-[4px] h-3 bg-blue-600 rounded-full" />

//             <span className="w-[4px] h-5 bg-blue-600 rounded-full" />

//             <span className="w-[4px] h-6 bg-blue-600 rounded-full" />

//           </div>

//           <h1 className="text-lg font-bold tracking-tight">
//             Test<span className="text-blue-600">Yourself</span>
//           </h1>

//         </div>


//         <button
//           onClick={() =>
//             setMobileSidebarOpen(!mobileSidebarOpen)
//           }
//           className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600"
//         >

//           {mobileSidebarOpen ? (
//             <X className="h-5 w-5" />
//           ) : (
//             <Menu className="h-5 w-5" />
//           )}

//         </button>

//       </div>


//       {/* =====================================================
//           MOBILE OVERLAY
//       ====================================================== */}

//       {mobileSidebarOpen && (

//         <div
//           onClick={() => setMobileSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden"
//         />

//       )}


//       {/* =====================================================
//           SIDEBAR
//       ====================================================== */}

//       <aside
//         className={`
//           fixed left-0 top-0 bottom-0 z-50
//           w-[270px]
//           bg-white
//           border-r border-slate-200
//           flex flex-col
//           transition-transform duration-200
//           lg:translate-x-0

//           ${
//             mobileSidebarOpen
//               ? "translate-x-0"
//               : "-translate-x-full"
//           }
//         `}
//       >

//         {/* Logo */}

//         <div className="flex h-[78px] shrink-0 items-center border-b border-slate-100 px-6">

//           <div className="flex items-center gap-3">

//             <div className="flex items-end gap-[3px] h-8">

//               <span className="w-[5px] h-3 bg-blue-600 rounded-full" />

//               <span className="w-[5px] h-5 bg-blue-600 rounded-full" />

//               <span className="w-[5px] h-7 bg-blue-600 rounded-full" />

//             </div>

//             <h1 className="text-xl font-bold tracking-tight">
//               Test<span className="text-blue-600">Yourself</span>
//             </h1>

//           </div>

//         </div>


//         {/* Navigation */}

//         <div className="flex-1 overflow-y-auto px-4 py-6">

//           <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
//             Main Navigation
//           </p>


//           <div className="space-y-1">

//             {navigation.map((section) => {

//               const Icon = section.icon;

//               const isOpen =
//                 openSection === section.id;


//               return (

//                 <div key={section.id}>

//                   {/* Section */}

//                   <button
//                     onClick={() =>
//                       handleSectionClick(section)
//                     }
//                     className={`
//                       flex w-full items-center justify-between
//                       rounded-xl px-3 py-3
//                       transition-all duration-200
//                       ${
//                         isOpen
//                           ? "bg-blue-50 text-blue-600"
//                           : "text-slate-600 hover:bg-slate-50"
//                       }
//                     `}
//                   >

//                     <div className="flex items-center gap-3">

//                       <Icon
//                         className={`
//                           h-[18px] w-[18px]
//                           ${
//                             isOpen
//                               ? "text-blue-600"
//                               : "text-slate-400"
//                           }
//                         `}
//                       />

//                       <span className="text-sm font-semibold">
//                         {section.title}
//                       </span>

//                     </div>


//                     <ChevronDown
//                       className={`
//                         h-4 w-4
//                         transition-transform duration-200
//                         ${
//                           isOpen
//                             ? "rotate-180 text-blue-500"
//                             : "text-slate-300"
//                         }
//                       `}
//                     />

//                   </button>


//                   {/* Items */}

//                   {isOpen && (

//                     <div className="mb-2 ml-9 mt-1 space-y-0.5">

//                       {section.items.map((item) => {

//                         const isActive =
//                           activeItem === item.id;


//                         return (

//                           <button
//                             key={item.id}
//                             onClick={() =>
//                               handleItemClick(item.id)
//                             }
//                             className={`
//                               relative w-full rounded-lg
//                               px-3 py-2 text-left
//                               text-[12px]
//                               transition-all

//                               ${
//                                 isActive
//                                   ? "bg-blue-50/70 font-semibold text-blue-600"
//                                   : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
//                               }
//                             `}
//                           >

//                             {isActive && (

//                               <span className="absolute left-0 top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-blue-600" />

//                             )}

//                             {item.label}

//                           </button>

//                         );

//                       })}

//                     </div>

//                   )}

//                 </div>

//               );

//             })}

//           </div>

//         </div>


//         {/* Profile */}

//         <div className="shrink-0 border-t border-slate-100 p-4">

//           <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
//               TS
//             </div>

//             <div className="min-w-0">

//               <p className="truncate text-sm font-semibold text-slate-800">
//                 Candidate
//               </p>

//               <p className="truncate text-[11px] text-slate-400">
//                 Frontend Developer
//               </p>

//             </div>

//           </div>

//         </div>

//       </aside>


//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <main className="min-h-screen lg:ml-[270px]">


//         {/* ===================================================
//             DESKTOP HEADER
//         ==================================================== */}

//         <header className="hidden h-[78px] items-center justify-between border-b border-slate-200 bg-white px-8 lg:flex">

//           <div>

//             <p className="text-xs text-slate-400">
//               Interview Preparation
//             </p>

//             <p className="mt-0.5 text-sm font-semibold text-slate-700">
//               Build your confidence. Get interview ready.
//             </p>

//           </div>

//         </header>


//         {/* ===================================================
//             CONTENT
//         ==================================================== */}

//         <section className="px-4 pb-8 pt-[88px] sm:px-6 sm:pt-[96px] lg:px-8 lg:py-10">

//           <div className="mx-auto max-w-[1400px]">


//             {/* PAGE HEADING */}

//             <div className="flex items-start gap-3 sm:gap-4">

//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 sm:h-11 sm:w-11">

//                 {activeSection?.icon && (
//                   <activeSection.icon className="h-5 w-5 text-blue-600" />
//                 )}

//               </div>


//               <div className="min-w-0">

//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 sm:text-xs">
//                   {activeSection?.title}
//                 </p>

//                 <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
//                   {activeContent?.label}
//                 </h2>

//                 <p className="mt-1.5 max-w-3xl text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   {activeContent?.description}
//                 </p>

//               </div>

//             </div>


//             {/* =================================================
//                 COMPONENTS
//             ================================================== */}

//             <div className="mt-7 sm:mt-9">


//               {activeItem === "overall-readiness" && (
//                 <OverallReadiness />
//               )}


//               {activeItem === "recent-assessment" && (
//                 <RecentAssessment />
//               )}


//               {activeItem === "current-weaknesses" && (
//                 <CurrentWeaknesses />
//               )}


//               {activeItem === "recommended-action" && (
//                 <RecommendedAction />
//               )}


//               {activeItem === "new-assessment" && (
//                 <NewAssessment />
//               )}


//               {activeItem === "available-simulations" && (
//                 <AvailableSimulations />
//               )}


//               {activeItem === "previous-assessments" && (
//                 <PreviousAssessments />
//               )}


//               {activeItem === "pipeline" && (
//                 <BuildFromJobDescription
//                   onStartSimulation={(pipeline) => {
//                     console.log(
//                       "Create assessment from pipeline:",
//                       pipeline
//                     );
//                   }}
//                   onEditPipeline={(pipeline) => {
//                     console.log(
//                       "Edit pipeline:",
//                       pipeline
//                     );
//                   }}
//                 />
//               )}


//               {activeItem === "assessment-results" && (
//                 <AssessmentResults />
//               )}


//               {activeItem === "technical-practice" && (
//                 <TechnicalPractice />
//               )}


//               {activeItem === "speaking-test" && (
//                 <CommunicationCoach />
//               )}


//               {activeItem === "communication-score" && (
//                 <CommunicationScorePage />
//               )}


//               {activeItem === "communication-weaknesses" && (
//                 <WeaknessesPage />
//               )}


//               {activeItem === "communication-retest" && (
//                 <PracticeRetestPage />
//               )}


//               {activeItem === "plan-weaknesses" && (
//                 <ImprovementPlanPage />
//               )}


//               {activeItem === "personalized-drills" && (
//                 <PersonalizedDrillPage />
//               )}


//               {activeItem === "plan-progress" && (
//                 <ProgressPage />
//               )}


//               {activeItem === "retake-assessment" && (
//                 <RetakeAssessmentsPage />
//               )}


//               {/* Future components */}

//               {activeItem === "score-comparison" && (
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//                   Previous vs Current Score
//                 </div>
//               )}


//               {activeItem === "improvement-percent" && (
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//                   Improvement %
//                 </div>
//               )}


//               {activeItem === "readiness-history" && (
//                 <ProgressPage />
//               )}


//               {activeItem === "skill-progress" && (
//                 <ProgressPage />
//               )}


//               {activeItem === "assessment-history" && (
//                 <PreviousAssessments />
//               )}


//               {activeItem === "benchmarks" && (
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//                   Benchmarks / Percentile
//                 </div>
//               )}


//               {activeItem === "profile-info" && (
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//                   Profile
//                 </div>
//               )}


//               {activeItem === "target-role" && (
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//                   Target Role
//                 </div>
//               )}


//               {activeItem === "target-companies" && (
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//                   Target Companies
//                 </div>
//               )}


//               {activeItem === "resume-jd" && (
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//                   Resume / JD
//                 </div>
//               )}


//               {activeItem === "account-settings" && (
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//                   Account Settings
//                 </div>
//               )}

//             </div>

//           </div>

//         </section>

//       </main>

//     </div>
//   );
// }

"use client";

import { useState } from "react";

import OverallReadiness from "./dashboard1/overallRediness";

import RecentAssessment from "./dashboard1/recentAssessment";

import CurrentWeaknesses from "./dashboard1/currentWeakness";

import RecommendedAction from "./dashboard1/recommendActions";

import NewAssessment from "./assessments/newAssessment";

import AvailableSimulations from "./assessments/availableAssessments";

import PreviousAssessments from "./assessments/assessmentHistory";

import BuildFromJobDescription from "./assessments/pipeline";

import AssessmentResults from "./assessments/results";

import TechnicalPractice from "./assessments/technicalAssessments";

import CommunicationCoach from "./assessments/communicationTest";

import CommunicationScorePage from "./assessments/communicationScore";

import WeaknessesPage from "./assessments/communicationWeakness";

import PracticeRetestPage from "./assessments/retestAndPracticeCommunication";

import ImprovementPlanPage from "./assessments/improvementWeakness";

import PersonalizedDrillPage from "./assessments/practiceDrill";

import ProgressPage from "./assessments/progress";

import RetakeAssessmentsPage from "./assessments/retakeAssessment";

import ScoreComparisonPage from "./assessments/testComparisons";

import ImprovementPercentPage from "./assessments/improvementStats";

import BenchmarksPage from "./assessments/benchmarks";

import ProfilePage from "./account/profile";

import CareerInterviewTargets from "./account/targets";

import ResumeProfessionalLinks from "./account/resume";

import AccountSettings from "./account/settings";

import BillingSubscription from "./account/billing";
export default function CandidateDashboard() {
  const [activeItem, setActiveItem] = useState("overall-readiness");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-[70] flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
            AI
          </div>

          <div>
            <p className="text-sm font-bold leading-none text-slate-900">
              InterviewAI
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Interview Readiness
            </p>
          </div>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
        >
          {mobileMenuOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
        </button>
      </header>


      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[50] bg-slate-900/30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}


      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-[60]
          flex
          h-screen
          w-[270px]
          flex-col
          border-r
          border-slate-200
          bg-white

          transform
          transition-transform
          duration-300
          ease-in-out

          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >

        {/* Sidebar Header */}
        <div className="flex h-16 shrink-0 items-center border-b border-slate-200 px-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
              AI
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                InterviewAI
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500">
                Interview Readiness
              </p>
            </div>

          </div>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <CloseIcon size={18} />
          </button>

        </div>


        {/* =====================================================
            SIDEBAR NAVIGATION
        ===================================================== */}

        <div className="flex-1 overflow-y-auto px-3 py-4">

          {/* Dashboard */}
          <SidebarSection title="Dashboard">

            <SidebarItem
              label="Overall Readiness"
              active={activeItem === "overall-readiness"}
              onClick={() =>
                handleItemClick("overall-readiness")
              }
            />

            <SidebarItem
              label="Recent Assessment"
              active={activeItem === "recent-assessment"}
              onClick={() =>
                handleItemClick("recent-assessment")
              }
            />

            <SidebarItem
              label="Current Weaknesses"
              active={activeItem === "current-weaknesses"}
              onClick={() =>
                handleItemClick("current-weaknesses")
              }
            />

            <SidebarItem
              label="Recommended Action"
              active={activeItem === "recommended-action"}
              onClick={() =>
                handleItemClick("recommended-action")
              }
            />

          </SidebarSection>


          {/* Assessments */}
          <SidebarSection title="Assessments">

            <SidebarItem
              label="New Assessment"
              active={activeItem === "new-assessment"}
              onClick={() =>
                handleItemClick("new-assessment")
              }
            />

            <SidebarItem
              label="Available Simulations"
              active={activeItem === "available-simulations"}
              onClick={() =>
                handleItemClick("available-simulations")
              }
            />

            <SidebarItem
              label="Previous Assessments"
              active={activeItem === "previous-assessments"}
              onClick={() =>
                handleItemClick("previous-assessments")
              }
            />

            <SidebarItem
              label="Build from Job Description"
              active={activeItem === "pipeline"}
              onClick={() =>
                handleItemClick("pipeline")
              }
            />

            <SidebarItem
              label="Assessment Results"
              active={activeItem === "assessment-results"}
              onClick={() =>
                handleItemClick("assessment-results")
              }
            />

            <SidebarItem
              label="Technical Practice"
              active={activeItem === "technical-practice"}
              onClick={() =>
                handleItemClick("technical-practice")
              }
            />

          </SidebarSection>


          {/* Communication */}
          <SidebarSection title="Communication">

            <SidebarItem
              label="Speaking Test"
              active={activeItem === "speaking-test"}
              onClick={() =>
                handleItemClick("speaking-test")
              }
            />

            <SidebarItem
              label="Communication Score"
              active={activeItem === "communication-score"}
              onClick={() =>
                handleItemClick("communication-score")
              }
            />

            <SidebarItem
              label="Communication Weaknesses"
              active={
                activeItem === "communication-weaknesses"
              }
              onClick={() =>
                handleItemClick("communication-weaknesses")
              }
            />

            <SidebarItem
              label="Communication Retest"
              active={
                activeItem === "communication-retest"
              }
              onClick={() =>
                handleItemClick("communication-retest")
              }
            />

          </SidebarSection>


          {/* Improvement */}
          <SidebarSection title="Improvement">

            <SidebarItem
              label="Improvement Plan"
              active={activeItem === "plan-weaknesses"}
              onClick={() =>
                handleItemClick("plan-weaknesses")
              }
            />

            <SidebarItem
              label="Personalized Drills"
              active={
                activeItem === "personalized-drills"
              }
              onClick={() =>
                handleItemClick("personalized-drills")
              }
            />

            <SidebarItem
              label="Progress"
              active={activeItem === "plan-progress"}
              onClick={() =>
                handleItemClick("plan-progress")
              }
            />

            <SidebarItem
              label="Retake Assessment"
              active={
                activeItem === "retake-assessment"
              }
              onClick={() =>
                handleItemClick("retake-assessment")
              }
            />

          </SidebarSection>


          {/* Insights */}
          <SidebarSection title="Insights">

            <SidebarItem
              label="Score Comparison"
              active={activeItem === "score-comparison"}
              onClick={() =>
                handleItemClick("score-comparison")
              }
            />

            <SidebarItem
              label="Improvement %"
              active={
                activeItem === "improvement-percent"
              }
              onClick={() =>
                handleItemClick("improvement-percent")
              }
            />
{/* 
            <SidebarItem
              label="Readiness History"
              active={
                activeItem === "readiness-history"
              }
              onClick={() =>
                handleItemClick("readiness-history")
              }
            />

            <SidebarItem
              label="Skill Progress"
              active={activeItem === "skill-progress"}
              onClick={() =>
                handleItemClick("skill-progress")
              }
            />

            <SidebarItem
              label="Assessment History"
              active={
                activeItem === "assessment-history"
              }
              onClick={() =>
                handleItemClick("assessment-history")
              }
            /> */}

            <SidebarItem
              label="Benchmarks"
              active={activeItem === "benchmarks"}
              onClick={() =>
                handleItemClick("benchmarks")
              }
            />

          </SidebarSection>


          {/* Account */}
          <SidebarSection title="Account">

            <SidebarItem
              label="Profile"
              active={activeItem === "profile-info"}
              onClick={() =>
                handleItemClick("profile-info")
              }
            />

            <SidebarItem
              label="Targets"
              active={activeItem === "targets"}
              onClick={() =>
                handleItemClick("targets")
              }
            />

            {/* <SidebarItem
              label="Target Companies"
              active={
                activeItem === "target-companies"
              }
              onClick={() =>
                handleItemClick("target-companies")
              }
            /> */}

            <SidebarItem
              label="Resume / JD"
              active={activeItem === "resume-jd"}
              onClick={() =>
                handleItemClick("resume-jd")
              }
            />

            <SidebarItem
              label="Account Settings"
              active={
                activeItem === "account-settings"
              }
              onClick={() =>
                handleItemClick("account-settings")
              }
            />

            <SidebarItem
              label="Billing"
              active={
                activeItem === "billing"
              }
              onClick={() =>
                handleItemClick("billing")
              }
            />


          </SidebarSection>

        </div>


        {/* =====================================================
            SIDEBAR FOOTER
        ===================================================== */}

        <div className="shrink-0 border-t border-slate-200 p-3">

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
              TS
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-800">
                Candidate
              </p>

              <p className="truncate text-xs text-slate-500">
                Interview Candidate
              </p>
            </div>

          </div>

        </div>

      </aside>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="min-h-screen lg:ml-[270px]">

        <div
          className="
            w-full
            px-4
            pb-8
            pt-20

            sm:px-6
            sm:pt-24

            md:px-8

            lg:px-10
            lg:py-10
          "
        >

          <div className="mx-auto w-full max-w-[1400px]">

            {/* =================================================
                ORIGINAL COMPONENT MAPPING
            ================================================= */}

            {activeItem === "overall-readiness" && (
              <OverallReadiness />
            )}

            {activeItem === "recent-assessment" && (
              <RecentAssessment />
            )}

            {activeItem === "current-weaknesses" && (
              <CurrentWeaknesses />
            )}

            {activeItem === "recommended-action" && (
              <RecommendedAction />
            )}

            {activeItem === "new-assessment" && (
              <NewAssessment />
            )}

            {activeItem === "available-simulations" && (
              <AvailableSimulations />
            )}

            {activeItem === "previous-assessments" && (
              <PreviousAssessments />
            )}

            {activeItem === "pipeline" && (
              <BuildFromJobDescription
                onStartSimulation={(pipeline) => {
                  console.log(
                    "Create assessment from pipeline:",
                    pipeline
                  );
                }}
                onEditPipeline={(pipeline) => {
                  console.log(
                    "Edit pipeline:",
                    pipeline
                  );
                }}
              />
            )}

            {activeItem === "assessment-results" && (
              <AssessmentResults />
            )}

            {activeItem === "technical-practice" && (
              <TechnicalPractice />
            )}

            {activeItem === "speaking-test" && (
              <CommunicationCoach />
            )}

            {activeItem === "communication-score" && (
              <CommunicationScorePage />
            )}

            {activeItem === "communication-weaknesses" && (
              <WeaknessesPage />
            )}

            {activeItem === "communication-retest" && (
              <PracticeRetestPage />
            )}

            {activeItem === "plan-weaknesses" && (
              <ImprovementPlanPage />
            )}

            {activeItem === "personalized-drills" && (
              <PersonalizedDrillPage />
            )}

            {activeItem === "plan-progress" && (
              <ProgressPage />
            )}

            {activeItem === "retake-assessment" && (
              <RetakeAssessmentsPage />
            )}


            {/* =================================================
                FUTURE COMPONENTS
            ================================================= */}

            {activeItem === "score-comparison" && (
              <ScoreComparisonPage/>
            )}

            {activeItem === "improvement-percent" && (
              <ImprovementPercentPage/>
            )}

            {/* {activeItem === "readiness-history" && (
              <ProgressPage />
            )}

            {activeItem === "skill-progress" && (
              <ProgressPage />
            )}

            {activeItem === "assessment-history" && (
              <PreviousAssessments />
            )} */}

            {activeItem === "benchmarks" && (
              <BenchmarksPage/>
            )}

            {activeItem === "profile-info" && (
              <ProfilePage />
            )}

            {activeItem === "targets" && (
              <CareerInterviewTargets />
            )}

            {/* {activeItem === "target-companies" && (
              <Placeholder
                title="Target Companies"
              />
            )} */}

            {activeItem === "resume-jd" && (
              <ResumeProfessionalLinks />
            )}

            {activeItem === "account-settings" && (
              <AccountSettings/>
            )}

            {activeItem === "billing" && (
              <BillingSubscription/>
            )}

          </div>

        </div>

      </main>

    </div>
  );
}


/* =========================================================
   SIDEBAR SECTION
========================================================= */

function SidebarSection({ title, children }) {
  return (
    <div className="mb-6">

      <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <div>
        {children}
      </div>

    </div>
  );
}


/* =========================================================
   SIDEBAR ITEM
========================================================= */

function SidebarItem({
  label,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        mb-1
        flex
        min-h-[42px]
        w-full
        items-center
        rounded-xl
        px-3
        text-left
        text-sm
        font-medium
        transition-all
        duration-150

        ${
          active
            ? "bg-blue-50 text-blue-700"
            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        }
      `}
    >
      <span className="truncate">
        {label}
      </span>
    </button>
  );
}


/* =========================================================
   MENU ICON
========================================================= */

function MenuIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6H20" />
      <path d="M4 12H20" />
      <path d="M4 18H20" />
    </svg>
  );
}


/* =========================================================
   CLOSE ICON
========================================================= */

function CloseIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6L18 18" />
      <path d="M18 6L6 18" />
    </svg>
  );
}


/* =========================================================
   PLACEHOLDER
========================================================= */

function Placeholder({ title }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

      <h2 className="text-lg font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        This section is ready for your component.
      </p>

    </div>
  );
}