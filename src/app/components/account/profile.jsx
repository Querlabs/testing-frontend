"use client";

import { useState } from "react";

/* =========================================================
   MOCK PROFILE DATA
========================================================= */

const initialProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+91 98765 43210",
  location: "Gurugram, India",

  currentRole: "Software Engineer",
  targetRole: "SDE-1",
  experience: "1–2 Years",
  techStack: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
  ],

  targetCompanies: [
    "Google",
    "Microsoft",
    "Amazon",
  ],

  interviewFocus: [
    "Coding",
    "Technical",
    "Communication",
    "Behavioral",
  ],

  resume: "Alex_Johnson_Resume.pdf",

  linkedin: "linkedin.com/in/alexjohnson",
  github: "github.com/alexjohnson",

  accountCreated: "September 2026",
  currentPlan: "Free",
  assessmentsCompleted: 6,
};


/* =========================================================
   MAIN PROFILE PAGE
========================================================= */

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile);

  const [isEditing, setIsEditing] = useState(false);

  const [draftProfile, setDraftProfile] =
    useState(initialProfile);

  const [savedMessage, setSavedMessage] =
    useState(false);

  const handleEdit = () => {
    setDraftProfile(profile);
    setIsEditing(true);
    setSavedMessage(false);
  };

  const handleCancel = () => {
    setDraftProfile(profile);
    setIsEditing(false);
    setSavedMessage(false);
  };

  const handleSave = () => {
    setProfile(draftProfile);
    setIsEditing(false);
    setSavedMessage(true);

    setTimeout(() => {
      setSavedMessage(false);
    }, 2500);
  };

  const updateField = (field, value) => {
    setDraftProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleCompany = (company) => {
    setDraftProfile((prev) => {
      const exists =
        prev.targetCompanies.includes(company);

      return {
        ...prev,
        targetCompanies: exists
          ? prev.targetCompanies.filter(
              (item) => item !== company
            )
          : [...prev.targetCompanies, company],
      };
    });
  };

  const toggleFocus = (focus) => {
    setDraftProfile((prev) => {
      const exists =
        prev.interviewFocus.includes(focus);

      return {
        ...prev,
        interviewFocus: exists
          ? prev.interviewFocus.filter(
              (item) => item !== focus
            )
          : [...prev.interviewFocus, focus],
      };
    });
  };

  return (
    <div className="w-full">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <ProfileHeader
        isEditing={isEditing}
        onEdit={handleEdit}
        savedMessage={savedMessage}
      />


      {/* =====================================================
          PROFILE OVERVIEW
      ===================================================== */}

      <ProfileOverview
        profile={profile}
      />


      {/* =====================================================
          PERSONAL INFORMATION
      ===================================================== */}

      <PersonalInformation
        profile={draftProfile}
        isEditing={isEditing}
        updateField={updateField}
      />


      {/* =====================================================
          PROFESSIONAL PROFILE
      ===================================================== */}

      <ProfessionalProfile
        profile={draftProfile}
        isEditing={isEditing}
        updateField={updateField}
      />


      {/* =====================================================
          INTERVIEW PREFERENCES
      ===================================================== */}

      <InterviewPreferences
        profile={draftProfile}
        isEditing={isEditing}
        toggleCompany={toggleCompany}
        toggleFocus={toggleFocus}
      />


      {/* =====================================================
          RESUME & LINKS
      ===================================================== */}

      <ResumeAndLinks
        profile={draftProfile}
        isEditing={isEditing}
        updateField={updateField}
      />


      {/* =====================================================
          ACCOUNT INFORMATION
      ===================================================== */}

      <AccountInformation
        profile={profile}
      />


      {/* =====================================================
          ACTION AREA
      ===================================================== */}

      <ProfileActions
        isEditing={isEditing}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />


      {/* =====================================================
          DANGER ZONE
      ===================================================== */}

      <DangerZone />

    </div>
  );
}


/* =========================================================
   PROFILE HEADER
========================================================= */

function ProfileHeader({
  isEditing,
  onEdit,
  savedMessage,
}) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

      <div>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Profile
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px]">
          Manage your personal information and interview preferences.
        </p>

      </div>


      <div className="flex items-center gap-3">

        {savedMessage && (
          <span className="text-xs font-medium text-blue-600">
            Changes saved
          </span>
        )}

        {!isEditing && (
          <button
            type="button"
            onClick={onEdit}
            className="flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
          >
            <EditIcon />
            Edit Profile
          </button>
        )}

      </div>

    </div>
  );
}


/* =========================================================
   PROFILE OVERVIEW
========================================================= */

function ProfileOverview({ profile }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

        {/* Avatar */}
        <div className="flex shrink-0 items-center gap-4">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-blue-600 ring-4 ring-blue-50 sm:h-24 sm:w-24 sm:text-2xl">
            AJ
          </div>

        </div>


        {/* Profile info */}
        <div className="min-w-0 flex-1">

          <h2 className="text-xl font-bold text-slate-900">
            {profile.name}
          </h2>

          <p className="mt-1 break-all text-sm text-slate-500">
            {profile.email}
          </p>

          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-5">

            <span className="flex items-center gap-2">
              <BriefcaseIcon />
              {profile.targetRole}
            </span>

            <span className="flex items-center gap-2">
              <UserIcon />
              {profile.experience} Experience
            </span>

          </div>

        </div>


        {/* Completion */}
        <div className="w-full shrink-0 sm:max-w-[190px]">

          <div className="flex items-center justify-between">

            <span className="text-xs font-semibold text-slate-600">
              Profile Complete
            </span>

            <span className="text-xs font-bold text-blue-600">
              85%
            </span>

          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className="h-full rounded-full bg-blue-500"
              style={{
                width: "85%",
              }}
            />

          </div>

          <p className="mt-2 text-[10px] text-slate-400">
            Add remaining details to complete your profile.
          </p>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   PERSONAL INFORMATION
========================================================= */

function PersonalInformation({
  profile,
  isEditing,
  updateField,
}) {
  return (
    <ProfileSection
      title="Personal Information"
      description="Basic information associated with your profile."
    >

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <InputField
          label="Full Name"
          value={profile.name}
          editable={isEditing}
          onChange={(value) =>
            updateField("name", value)
          }
        />

        <InputField
          label="Email Address"
          value={profile.email}
          type="email"
          editable={isEditing}
          onChange={(value) =>
            updateField("email", value)
          }
        />

        <InputField
          label="Phone Number"
          value={profile.phone}
          editable={isEditing}
          onChange={(value) =>
            updateField("phone", value)
          }
        />

        <InputField
          label="Location"
          value={profile.location}
          editable={isEditing}
          onChange={(value) =>
            updateField("location", value)
          }
        />

      </div>

    </ProfileSection>
  );
}


/* =========================================================
   PROFESSIONAL PROFILE
========================================================= */

function ProfessionalProfile({
  profile,
  isEditing,
  updateField,
}) {
  const allTech = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Python",
    "AWS",
    "Docker",
  ];

  const toggleTech = (tech) => {
    const exists = profile.techStack.includes(tech);

    const updated = exists
      ? profile.techStack.filter(
          (item) => item !== tech
        )
      : [...profile.techStack, tech];

    updateField("techStack", updated);
  };

  return (
    <ProfileSection
      title="Professional Profile"
      description="Define your current role and technical background."
    >

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <InputField
          label="Current Role"
          value={profile.currentRole}
          editable={isEditing}
          onChange={(value) =>
            updateField("currentRole", value)
          }
        />

        <InputField
          label="Target Role"
          value={profile.targetRole}
          editable={isEditing}
          onChange={(value) =>
            updateField("targetRole", value)
          }
        />

        <SelectField
          label="Years of Experience"
          value={profile.experience}
          editable={isEditing}
          options={[
            "0–1 Years",
            "1–2 Years",
            "2–3 Years",
            "3–5 Years",
            "5+ Years",
          ]}
          onChange={(value) =>
            updateField("experience", value)
          }
        />

      </div>


      {/* Tech Stack */}
      <div className="mt-6">

        <FieldLabel>
          Primary Tech Stack
        </FieldLabel>

        <div className="mt-3 flex flex-wrap gap-2">

          {isEditing
            ? allTech.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => toggleTech(tech)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    profile.techStack.includes(tech)
                      ? "border-blue-200 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-blue-600"
                  }`}
                >
                  {profile.techStack.includes(tech)
                    ? "✓ "
                    : ""}
                  {tech}
                </button>
              ))
            : profile.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                >
                  {tech}
                </span>
              ))}

        </div>

      </div>

    </ProfileSection>
  );
}


/* =========================================================
   INTERVIEW PREFERENCES
========================================================= */

function InterviewPreferences({
  profile,
  isEditing,
  toggleCompany,
  toggleFocus,
}) {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Salesforce",
  ];

  const focusAreas = [
    "Coding",
    "Technical",
    "Communication",
    "Behavioral",
    "System Design",
  ];

  return (
    <ProfileSection
      title="Interview Preferences"
      description="Choose the companies and areas you want to focus on."
    >

      {/* Companies */}
      <div>

        <FieldLabel>
          Target Companies
        </FieldLabel>

        <div className="mt-3 flex flex-wrap gap-2">

          {companies.map((company) => {

            const selected =
              profile.targetCompanies.includes(
                company
              );

            return (
              <SelectableChip
                key={company}
                label={company}
                selected={selected}
                editable={isEditing}
                onClick={() =>
                  toggleCompany(company)
                }
              />
            );
          })}

        </div>

      </div>


      {/* Focus */}
      <div className="mt-7">

        <FieldLabel>
          Preferred Interview Focus
        </FieldLabel>

        <div className="mt-3 flex flex-wrap gap-2">

          {focusAreas.map((focus) => {

            const selected =
              profile.interviewFocus.includes(
                focus
              );

            return (
              <SelectableChip
                key={focus}
                label={focus}
                selected={selected}
                editable={isEditing}
                onClick={() =>
                  toggleFocus(focus)
                }
              />
            );
          })}

        </div>

      </div>

    </ProfileSection>
  );
}


/* =========================================================
   RESUME & LINKS
========================================================= */

function ResumeAndLinks({
  profile,
  isEditing,
  updateField,
}) {
  return (
    <ProfileSection
      title="Resume & Links"
      description="Keep your resume and professional profiles up to date."
    >

      {/* Resume */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
              <FileIcon />
            </div>

            <div className="min-w-0">

              <p className="text-xs font-medium text-slate-400">
                Current Resume
              </p>

              <p className="mt-1 truncate text-sm font-semibold text-slate-700">
                {profile.resume}
              </p>

            </div>

          </div>


          <div className="flex items-center gap-2">

            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              View Resume
            </button>

            {isEditing && (
              <button
                type="button"
                className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                Upload New Resume
              </button>
            )}

          </div>

        </div>

      </div>


      {/* Links */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">

        <InputField
          label="LinkedIn"
          value={profile.linkedin}
          editable={isEditing}
          onChange={(value) =>
            updateField("linkedin", value)
          }
          placeholder="linkedin.com/in/yourname"
        />

        <InputField
          label="GitHub"
          value={profile.github}
          editable={isEditing}
          onChange={(value) =>
            updateField("github", value)
          }
          placeholder="github.com/yourname"
        />

      </div>

    </ProfileSection>
  );
}


/* =========================================================
   ACCOUNT INFORMATION
========================================================= */

function AccountInformation({
  profile,
}) {
  return (
    <ProfileSection
      title="Account Information"
      description="Basic account details. These fields are read-only."
    >

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

        <ReadOnlyInfo
          label="Account Created"
          value={profile.accountCreated}
        />

        <ReadOnlyInfo
          label="Current Plan"
          value={profile.currentPlan}
          highlight
        />

        <ReadOnlyInfo
          label="Assessments Completed"
          value={profile.assessmentsCompleted}
        />

      </div>

    </ProfileSection>
  );
}


/* =========================================================
   PROFILE ACTIONS
========================================================= */

function ProfileActions({
  isEditing,
  onEdit,
  onSave,
  onCancel,
}) {
  if (!isEditing) {
    return (
      <div className="mt-8 flex justify-end">

        <button
          type="button"
          onClick={onEdit}
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <EditIcon />
          Edit Profile
        </button>

      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

      <button
        type="button"
        onClick={onCancel}
        className="flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={onSave}
        className="flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        Save Changes
      </button>

    </div>
  );
}


/* =========================================================
   DANGER ZONE
========================================================= */

function DangerZone() {
  return (
    <section className="mt-10 rounded-2xl border border-red-100 bg-white p-5 sm:p-6">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="flex items-center gap-2">

            <div className="text-red-500">
              <WarningIcon />
            </div>

            <h2 className="text-base font-bold text-slate-900">
              Danger Zone
            </h2>

          </div>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500">
            Deleting your account permanently removes your profile, assessments, and progress data.
          </p>

        </div>


        <button
          type="button"
          className="shrink-0 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
        >
          Delete Account
        </button>

      </div>

    </section>
  );
}


/* =========================================================
   REUSABLE PROFILE SECTION
========================================================= */

function ProfileSection({
  title,
  description,
  children,
}) {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="mb-6">

        <h2 className="text-base font-bold text-slate-900 sm:text-lg">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
            {description}
          </p>
        )}

      </div>

      {children}

    </section>
  );
}


/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  value,
  editable,
  onChange,
  type = "text",
  placeholder,
}) {
  return (
    <div>

      <FieldLabel>
        {label}
      </FieldLabel>

      {editable ? (
        <input
          type={type}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder={placeholder}
          className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-50"
        />
      ) : (
        <div className="mt-2 flex min-h-[44px] items-center rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 text-sm text-slate-700">
          {value || "Not provided"}
        </div>
      )}

    </div>
  );
}


/* =========================================================
   SELECT FIELD
========================================================= */

function SelectField({
  label,
  value,
  options,
  editable,
  onChange,
}) {
  return (
    <div>

      <FieldLabel>
        {label}
      </FieldLabel>

      {editable ? (
        <select
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50"
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <div className="mt-2 flex min-h-[44px] items-center rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 text-sm text-slate-700">
          {value}
        </div>
      )}

    </div>
  );
}


/* =========================================================
   FIELD LABEL
========================================================= */

function FieldLabel({ children }) {
  return (
    <label className="text-xs font-semibold text-slate-600">
      {children}
    </label>
  );
}


/* =========================================================
   SELECTABLE CHIP
========================================================= */

function SelectableChip({
  label,
  selected,
  editable,
  onClick,
}) {
  if (!editable) {
    return (
      <span
        className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
          selected
            ? "border-blue-100 bg-blue-50 text-blue-700"
            : "border-slate-200 bg-white text-slate-400"
        }`}
      >
        {label}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
        selected
          ? "border-blue-200 bg-blue-50 text-blue-700"
          : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-blue-600"
      }`}
    >
      {selected ? "✓ " : ""}
      {label}
    </button>
  );
}


/* =========================================================
   READ ONLY INFO
========================================================= */

function ReadOnlyInfo({
  label,
  value,
  highlight = false,
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-4">

      <p className="text-[10px] font-medium text-slate-400">
        {label}
      </p>

      <p
        className={`mt-1 text-sm font-bold ${
          highlight
            ? "text-blue-600"
            : "text-slate-700"
        }`}
      >
        {value}
      </p>

    </div>
  );
}


/* =========================================================
   ICONS
========================================================= */

function EditIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  );
}


function BriefcaseIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="3"
        y="7"
        width="18"
        height="13"
        rx="2"
      />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}


function UserIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle
        cx="12"
        cy="8"
        r="3"
      />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  );
}


function FileIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}


function WarningIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 2.5 20h19Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </svg>
  );
}