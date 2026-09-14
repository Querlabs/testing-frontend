"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  ArrowRight,
  X,
  Check,
  Clock3,
  Code2,
  Building2,
  MessageSquare,
  Brain,
  Bug,
  Scale,
} from "lucide-react";


// =====================================================
// PREDEFINED PLATFORM SIMULATIONS
// This data represents platform templates.
// User-created assessments should live separately.
// =====================================================

const simulationTemplates = [
  {
    id: "google-sde1",
    company: "Google",
    role: "SDE-1",
    badge: "Company Simulation",
    experience: "1–2 YOE",
    rounds: "Coding → Technical → Behavioral",
    duration: "~90 min",
    evaluationAreas: 6,
  },
  {
    id: "microsoft-sde1",
    company: "Microsoft",
    role: "SDE-1",
    badge: "Company Simulation",
    experience: "1–3 YOE",
    rounds: "Coding → Technical → Behavioral",
    duration: "~90 min",
    evaluationAreas: 6,
  },
  {
    id: "amazon-sde1",
    company: "Amazon",
    role: "SDE-1",
    badge: "Company Simulation",
    experience: "1–2 YOE",
    rounds: "Coding → Technical → Behavioral",
    duration: "~90 min",
    evaluationAreas: 6,
  },
  {
    id: "salesforce-sde1",
    company: "Salesforce",
    role: "SDE-1",
    badge: "Company Simulation",
    experience: "1–3 YOE",
    rounds: "Coding → Technical → Behavioral",
    duration: "~90 min",
    evaluationAreas: 6,
  },
  {
    id: "generic-sde1",
    company: "Generic SDE-1",
    role: "SDE-1",
    badge: "Role Simulation",
    experience: "1–3 YOE",
    rounds: "Coding → Technical → Behavioral",
    duration: "~90 min",
    evaluationAreas: 6,
  },
];


// =====================================================
// FILTER OPTIONS
// =====================================================

const companyOptions = [
  "All Companies",
  "Google",
  "Microsoft",
  "Amazon",
  "Salesforce",
];

const roleOptions = [
  "All Roles",
  "SDE-1",
  "SDE-2",
  "Frontend Developer",
  "Backend Developer",
];

const experienceOptions = [
  "Any Experience",
  "0–1 YOE",
  "1–2 YOE",
  "2–3 YOE",
  "3–5 YOE",
];


// =====================================================
// EVALUATION AREAS
// =====================================================

const evaluationAreas = [
  {
    label: "Problem Solving / DSA",
    icon: Brain,
  },
  {
    label: "Technical Knowledge",
    icon: Code2,
  },
  {
    label: "Communication & Explanation",
    icon: MessageSquare,
  },
  {
    label: "Code Quality / Debugging",
    icon: Bug,
  },
  {
    label: "Reasoning & Trade-offs",
    icon: Scale,
  },
  {
    label: "Behavioral / Interview Skills",
    icon: MessageSquare,
  },
];


// =====================================================
// FILTER SELECT
// =====================================================

function FilterSelect({
  value,
  options,
  onChange,
}) {
  return (
    <div className="relative">

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="
          appearance-none
          w-full sm:w-auto
          min-w-[145px]
          px-3.5 py-2.5 pr-9
          rounded-xl
          border border-slate-200
          bg-white
          text-xs font-medium text-slate-600
          outline-none
          cursor-pointer
          hover:border-blue-200
          focus:border-blue-400
          focus:ring-4 focus:ring-blue-50
          transition-all
        "
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />

    </div>
  );
}


// =====================================================
// SIMULATION CARD
// =====================================================

function SimulationCard({
  simulation,
  onViewDetails,
}) {
  return (
    <div
      onClick={() => onViewDetails(simulation)}
      className="
        group bg-white
        border border-slate-200
        rounded-[20px]
        shadow-sm
        hover:shadow-md
        hover:border-blue-200
        transition-all duration-200
        cursor-pointer
        overflow-hidden
      "
    >

      <div className="p-5">

        {/* =========================================
            TOP
        ========================================= */}

        <div className="flex items-start justify-between gap-3">

          <div className="flex items-center gap-3 min-w-0">

            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">

              <Building2 className="w-5 h-5 text-blue-600" />

            </div>


            <div className="min-w-0">

              <h3 className="text-base font-bold text-slate-950 truncate">
                {simulation.company}
              </h3>

              <p className="text-sm font-medium text-slate-500 mt-0.5">
                {simulation.role}
              </p>

            </div>

          </div>


          <span className="
            shrink-0
            px-2.5 py-1
            rounded-full
            bg-blue-50
            border border-blue-100
            text-[10px]
            font-semibold
            text-blue-600
          ">
            {simulation.badge}
          </span>

        </div>


        {/* =========================================
            META
        ========================================= */}

        <div className="flex flex-wrap gap-2 mt-5">

          <span className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-600">
            {simulation.experience}
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-600">
            <Clock3 className="w-3 h-3 text-slate-400" />
            {simulation.duration}
          </span>

        </div>


        {/* =========================================
            ROUNDS
        ========================================= */}

        <div className="mt-5">

          <p className="text-[10px] uppercase tracking-wide font-bold text-slate-400">
            Interview Structure
          </p>

          <p className="text-xs font-medium text-slate-700 mt-1.5">
            {simulation.rounds}
          </p>

        </div>


        {/* =========================================
            FOOTER
        ========================================= */}

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">

          <span className="text-[11px] text-slate-400">
            {simulation.evaluationAreas} evaluation areas
          </span>


          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onViewDetails(simulation);
            }}
            className="
              inline-flex items-center gap-1.5
              text-xs font-semibold
              text-blue-600
              group-hover:text-blue-700
              transition-colors
            "
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

        </div>

      </div>

    </div>
  );
}


// =====================================================
// DETAILS MODAL
// =====================================================

function SimulationDetailsModal({
  simulation,
  onClose,
  onStart,
}) {
  if (!simulation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
      />


      {/* Modal */}
      <div className="
        relative
        w-full max-w-[620px]
        max-h-[90vh]
        overflow-y-auto
        bg-white
        rounded-[24px]
        shadow-2xl
      ">

        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-5">

          <div className="flex items-start justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>

              <div>

                <h2 className="text-lg font-bold text-slate-950">
                  {simulation.company}
                </h2>

                <p className="text-xs text-slate-500 mt-0.5">
                  {simulation.role}
                  <span className="mx-1.5 text-slate-300">
                    ·
                  </span>
                  {simulation.experience}
                </p>

              </div>

            </div>


            <button
              onClick={onClose}
              className="w-9 h-9 shrink-0 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-slate-500" />
            </button>

          </div>

        </div>


        {/* Body */}
        <div className="p-6">

          {/* Simulation Type */}
          <span className="inline-flex px-2.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-semibold text-blue-600">
            {simulation.badge}
          </span>


          <h3 className="text-xl font-bold text-slate-950 mt-5">
            Interview Structure
          </h3>


          {/* Rounds */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">

            {[
              "Coding Round",
              "Technical Interview",
              "Behavioral Interview",
            ].map((round, index) => (

              <div
                key={round}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-100"
              >

                <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-blue-600">
                  {index + 1}
                </div>

                <p className="text-xs font-semibold text-slate-700 mt-3">
                  {round}
                </p>

              </div>

            ))}

          </div>


          {/* Evaluates */}
          <div className="mt-7">

            <h3 className="text-sm font-bold text-slate-950">
              Evaluates
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">

              {evaluationAreas.map((area) => {

                const Icon = area.icon;

                return (
                  <div
                    key={area.label}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >

                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-blue-600" />
                    </div>

                    <span className="text-xs text-slate-600">
                      {area.label}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>


          {/* Duration */}
          <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-blue-50/60 border border-blue-100">

            <span className="text-xs font-medium text-slate-600">
              Estimated Duration
            </span>

            <span className="text-sm font-bold text-slate-950">
              {simulation.duration === "~90 min"
                ? "~90 minutes"
                : simulation.duration}
            </span>

          </div>


          {/* CTA */}
          <button
            onClick={() => onStart(simulation)}
            className="
              w-full mt-6
              py-3.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              text-sm
              font-semibold
              flex items-center justify-center gap-2
              transition-all
              hover:shadow-md hover:shadow-blue-100
            "
          >
            Start Simulation
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
}


// =====================================================
// EMPTY SEARCH STATE
// =====================================================

function EmptySearchState({ onClear }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[22px] shadow-sm min-h-[300px] flex items-center justify-center p-8">

      <div className="text-center">

        <div className="mx-auto w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
          <Search className="w-5 h-5 text-slate-400" />
        </div>

        <h3 className="text-base font-bold text-slate-950 mt-4">
          No simulations found
        </h3>

        <p className="text-sm text-slate-500 mt-1.5">
          Try changing your search or filters.
        </p>

        <button
          onClick={onClear}
          className="mt-4 text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          Clear Filters
        </button>

      </div>

    </div>
  );
}


// =====================================================
// MAIN COMPONENT
// =====================================================

export default function AvailableSimulations({
  onStartSimulation = () => {},
}) {

  const [search, setSearch] = useState("");

  const [company, setCompany] =
    useState("All Companies");

  const [role, setRole] =
    useState("All Roles");

  const [experience, setExperience] =
    useState("Any Experience");

  const [selectedSimulation, setSelectedSimulation] =
    useState(null);


  // ===================================================
  // FILTER SIMULATIONS
  // ===================================================

  const filteredSimulations = useMemo(() => {

    const query = search.trim().toLowerCase();

    return simulationTemplates.filter((simulation) => {

      const matchesSearch =
        !query ||
        simulation.company.toLowerCase().includes(query) ||
        simulation.role.toLowerCase().includes(query);

      const matchesCompany =
        company === "All Companies" ||
        simulation.company === company;

      const matchesRole =
        role === "All Roles" ||
        simulation.role === role;

      const matchesExperience =
        experience === "Any Experience" ||
        simulation.experience === experience;

      return (
        matchesSearch &&
        matchesCompany &&
        matchesRole &&
        matchesExperience
      );
    });

  }, [search, company, role, experience]);


  // ===================================================
  // CLEAR FILTERS
  // ===================================================

  const clearFilters = () => {
    setSearch("");
    setCompany("All Companies");
    setRole("All Roles");
    setExperience("Any Experience");
  };


  // ===================================================
  // START SIMULATION
  // ===================================================

  const handleStartSimulation = (simulation) => {

    // Later:
    // 1. Create user assessment instance
    // 2. Store template reference
    // 3. Add to My Assessments
    // 4. Start interview

    onStartSimulation(simulation);

    setSelectedSimulation(null);
  };


  return (
    <div className="w-full">

      {/* =================================================
          HEADER
      ================================================= */}

      {/* <div className="mb-7">

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
          Available Simulations
        </h1>

        <p className="text-sm text-slate-500 mt-1.5">
          Choose a company and role to simulate the interview you are preparing for.
        </p>

      </div> */}


      {/* =================================================
          SEARCH + FILTERS
      ================================================= */}

      <div className="bg-white border border-slate-200 rounded-[20px] shadow-sm p-4 mb-6">

        <div className="flex flex-col lg:flex-row gap-3">

          {/* Search */}
          <div className="relative flex-1">

            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search company or role..."
              className="
                w-full
                pl-10 pr-4 py-2.5
                rounded-xl
                border border-slate-200
                bg-slate-50/50
                text-xs text-slate-700
                placeholder:text-slate-400
                outline-none
                focus:border-blue-400
                focus:ring-4 focus:ring-blue-50
                transition-all
              "
            />

          </div>


          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

            <FilterSelect
              value={company}
              options={companyOptions}
              onChange={setCompany}
            />

            <FilterSelect
              value={role}
              options={roleOptions}
              onChange={setRole}
            />

            <FilterSelect
              value={experience}
              options={experienceOptions}
              onChange={setExperience}
            />

          </div>

        </div>

      </div>


      {/* =================================================
          TEMPLATE LABEL
      ================================================= */}

      <div className="flex items-center justify-between mb-4">

        <div>

          <p className="text-xs font-semibold text-slate-900">
            Platform Simulations
          </p>

          <p className="text-[11px] text-slate-400 mt-0.5">
            Ready-made interview experiences curated for your preparation.
          </p>

        </div>

        <span className="text-[11px] text-slate-400">
          {filteredSimulations.length} available
        </span>

      </div>


      {/* =================================================
          SIMULATION GRID
      ================================================= */}

      {filteredSimulations.length > 0 ? (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {filteredSimulations.map((simulation) => (

            <SimulationCard
              key={simulation.id}
              simulation={simulation}
              onViewDetails={setSelectedSimulation}
            />

          ))}

        </div>

      ) : (

        <EmptySearchState
          onClear={clearFilters}
        />

      )}


      {/* =================================================
          DETAILS MODAL
      ================================================= */}

      {selectedSimulation && (
        <SimulationDetailsModal
          simulation={selectedSimulation}
          onClose={() => setSelectedSimulation(null)}
          onStart={handleStartSimulation}
        />
      )}

    </div>
  );
}