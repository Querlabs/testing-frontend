"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ClipboardCheck,
  Dumbbell,
  Mic2,
  TrendingUp,
  RotateCcw,
  BarChart3,
  UserRound,
  ChevronDown,
} from "lucide-react";
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
export default function CandidateDashboard() {
  const [activeItem, setActiveItem] = useState("overall-readiness");
  const [openSection, setOpenSection] = useState("dashboard");

  const navigation = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: LayoutDashboard,
      items: [
        {
          id: "overall-readiness",
          label: "Overall Readiness",
          description:
            "Get a complete overview of your interview readiness.",
        },
        {
          id: "recent-assessment",
          label: "Recent Assessment",
          description:
            "Review your latest interview assessment and performance.",
        },
        {
          id: "current-weaknesses",
          label: "Current Weaknesses",
          description:
            "Identify the areas where you need the most improvement.",
        },
        {
          id: "recommended-action",
          label: "Recommended Next Action",
          description:
            "Follow the next practice step recommended for you.",
        },
      ],
    },

    {
      id: "assessments",
      title: "Assessments",
      icon: ClipboardCheck,
      items: [
        {
          id: "new-assessment",
          label: "New Assessment",
          description:
            "Start a new AI-powered interview assessment.",
        },
        {
          id: "available-simulations",
          label: "Available Simulations",
          description:
            "Explore upcoming and available interview simulations.",
        },
        {
          id: "previous-assessments",
          label: "Previous Assessments",
          description:
            "View all the assessments you have completed.",
        },
        {
          id: "pipeline",
          label: "Build Pipeline",
          description:
            "Upload your JD and build custom assessment rounds",
        },
        {
          id: "assessment-results",
          label: "Results",
          description:
            "Review detailed results from your assessments.",
        },
      ],
    },

    {
      id: "practice",
      title: "Practice",
      icon: Dumbbell,
      items: [
        {
          id: "technical-practice",
          label: "Technical Practice",
          description:
            "Improve your technical interview skills.",
        }
        // {
        //   id: "communication-practice",
        //   label: "Communication Practice",
        //   description:
        //     "Practice answering interview questions with confidence.",
        // },
      ],
    },

    {
      id: "communication",
      title: "Communication",
      icon: Mic2,
      items: [
        {
          id: "speaking-test",
          label: "Speaking Test",
          description:
            "Take an AI-powered speaking and communication test.",
        },
        {
          id: "communication-score",
          label: "Communication Score",
          description:
            "Understand your communication performance.",
        },
        {
          id: "communication-weaknesses",
          label: "Weaknesses",
          description:
            "Identify specific communication areas to improve.",
        },
        {
          id: "communication-retest",
          label: "Practice & Retest",
          description:
            "Practice your weak areas and retake the test.",
        },
      ],
    },

    {
      id: "improvement",
      title: "Improvement Plan",
      icon: TrendingUp,
      items: [
        {
          id: "plan-weaknesses",
          label: "Current Weaknesses",
          description:
            "Review the weaknesses affecting your readiness.",
        },
        {
          id: "personalized-drills",
          label: "Personalized Drills",
          description:
            "Practice drills generated specifically for you.",
        },
        {
          id: "plan-progress",
          label: "Progress",
          description:
            "Track your improvement across different skills.",
        },
        {
          id: "recommended-practice",
          label: "Recommended Practice",
          description:
            "See what you should practice next.",
        },
      ],
    },

    {
      id: "retest",
      title: "Retest",
      icon: RotateCcw,
      items: [
        {
          id: "retake-assessment",
          label: "Retake Assessment",
          description:
            "Retake your previous interview assessment.",
        },
        {
          id: "score-comparison",
          label: "Previous vs Current Score",
          description:
            "Compare your previous and latest assessment scores.",
        },
        {
          id: "improvement-percent",
          label: "Improvement %",
          description:
            "See how much your interview readiness has improved.",
        },
      ],
    },

    {
      id: "progress",
      title: "Progress",
      icon: BarChart3,
      items: [
        {
          id: "readiness-history",
          label: "Readiness Score History",
          description:
            "Track your readiness score over time.",
        },
        {
          id: "skill-progress",
          label: "Skill-wise Progress",
          description:
            "See progress across individual interview skills.",
        },
        {
          id: "assessment-history",
          label: "Assessment History",
          description:
            "View your complete assessment performance history.",
        },
        {
          id: "benchmarks",
          label: "Benchmarks / Percentile",
          description:
            "Compare your performance with other candidates.",
        },
      ],
    },

    {
      id: "profile",
      title: "Profile / Settings",
      icon: UserRound,
      items: [
        {
          id: "profile-info",
          label: "Profile",
          description:
            "Manage your personal profile information.",
        },
        {
          id: "target-role",
          label: "Target Role",
          description:
            "Set and manage the role you are preparing for.",
        },
        {
          id: "target-companies",
          label: "Target Companies",
          description:
            "Manage the companies you are targeting.",
        },
        {
          id: "resume-jd",
          label: "Resume / JD",
          description:
            "Manage your resume and job descriptions.",
        },
        {
          id: "account-settings",
          label: "Account Settings",
          description:
            "Manage your account and preferences.",
        },
      ],
    },
  ];

  const activeSection = navigation.find(
    (section) =>
      section.items.some((item) => item.id === activeItem)
  );

  const activeContent = activeSection?.items.find(
    (item) => item.id === activeItem
  );

  const handleSectionClick = (section) => {
    setOpenSection(
      openSection === section.id ? null : section.id
    );

    // Section open karte hi uska first item active
    if (openSection !== section.id) {
      setActiveItem(section.items[0].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900 flex">

      {/* =========================================
          SIDEBAR
      ========================================= */}

      <aside className="fixed left-0 top-0 bottom-0 w-[270px] bg-white border-r border-slate-200 flex flex-col">

        {/* Logo */}
        <div className="h-[78px] px-6 flex items-center border-b border-slate-100">

          <div className="flex items-center gap-3">

            <div className="flex items-end gap-[3px] h-8">
              <span className="w-[5px] h-3 bg-blue-600 rounded-full" />
              <span className="w-[5px] h-5 bg-blue-600 rounded-full" />
              <span className="w-[5px] h-7 bg-blue-600 rounded-full" />
            </div>

            <h1 className="text-xl font-bold tracking-tight">
              Test<span className="text-blue-600">Yourself</span>
            </h1>

          </div>

        </div>


        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6">

          <p className="px-3 mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Main Navigation
          </p>


          <div className="space-y-1">

            {navigation.map((section) => {

              const Icon = section.icon;
              const isOpen = openSection === section.id;

              return (
                <div key={section.id}>

                  {/* Section Heading */}
                  <button
                    onClick={() => handleSectionClick(section)}
                    className={`
                      w-full flex items-center justify-between
                      px-3 py-3 rounded-xl
                      transition-all duration-200
                      ${
                        isOpen
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-50"
                      }
                    `}
                  >

                    <div className="flex items-center gap-3">

                      <Icon
                        className={`
                          w-[18px] h-[18px]
                          ${
                            isOpen
                              ? "text-blue-600"
                              : "text-slate-400"
                          }
                        `}
                      />

                      <span className="text-sm font-semibold">
                        {section.title}
                      </span>

                    </div>


                    <ChevronDown
                      className={`
                        w-4 h-4 transition-transform duration-200
                        ${
                          isOpen
                            ? "rotate-180 text-blue-500"
                            : "text-slate-300"
                        }
                      `}
                    />

                  </button>


                  {/* Section Items */}
                  {isOpen && (
                    <div className="ml-9 mt-1 mb-2 space-y-0.5">

                      {section.items.map((item) => {

                        const isActive =
                          activeItem === item.id;

                        return (
                          <button
                            key={item.id}
                            onClick={() =>
                              setActiveItem(item.id)
                            }
                            className={`
                              relative w-full text-left
                              px-3 py-2 rounded-lg
                              text-[12px]
                              transition-all
                              ${
                                isActive
                                  ? "text-blue-600 bg-blue-50/70 font-semibold"
                                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                              }
                            `}
                          >

                            {isActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-blue-600 rounded-full" />
                            )}

                            {item.label}

                          </button>
                        );
                      })}

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>


        {/* Profile */}
        <div className="p-4 border-t border-slate-100">

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">

            <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
              TS
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800">
                Candidate
              </p>

              <p className="text-[11px] text-slate-400">
                Frontend Developer
              </p>
            </div>

          </div>

        </div>

      </aside>


      {/* =========================================
          RIGHT SIDE
      ========================================= */}

      <main className="ml-[270px] flex-1 min-h-screen">

        {/* Top Bar */}
        <header className="h-[78px] bg-white border-b border-slate-200 flex items-center justify-between px-8">

          <div>
            <p className="text-xs text-slate-400">
              Interview Preparation
            </p>

            <p className="text-sm font-semibold text-slate-700 mt-0.5">
              Build your confidence. Get interview ready.
            </p>
          </div>

        </header>


        {/* Only Heading */}
        <section className="px-8 py-10">

          <div className="max-w-[1400px]">

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">

                {activeSection?.icon && (
                  <activeSection.icon
                    className="w-5 h-5 text-blue-600"
                  />
                )}

              </div>


              <div>

                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {activeSection?.title}
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 mt-1">
                  {activeContent?.label}
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                  {activeContent?.description}
                </p>

              </div>

            </div>


            {/* =====================================
                COMPONENTS WILL COME HERE
            ====================================== */}

            <div className="mt-10">

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
                    console.log("Create assessment from pipeline:", pipeline);
                    }}
                    onEditPipeline={(pipeline) => {
                    console.log("Edit pipeline:", pipeline);
                    }}
                />
              )}

              {activeItem === "assessment-results" && (
                <AssessmentResults />
              )}

              {activeItem === "technical-practice" && (
                <TechnicalPractice/>
              )}

              {activeItem === "speaking-test" && (
                <CommunicationCoach/>
              )}

              {/* Baaki components yahan add honge */}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}