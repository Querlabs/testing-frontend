"use client";

import { useState } from "react";

/* -------------------- Icons -------------------- */

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function MailIcon() {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon() {
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
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

/* -------------------- Reusable Card -------------------- */

function SettingsCard({ title, subtitle, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <h2 className="text-[15px] font-bold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-[12px] leading-5 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      <div className="px-5 py-5 sm:px-6">{children}</div>
    </section>
  );
}

/* -------------------- Toggle -------------------- */

function Toggle({ enabled, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-blue-100 ${
        enabled ? "bg-blue-600" : "bg-slate-300"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

/* -------------------- 1. Account Information -------------------- */

function AccountInformation() {
  const [changeEmail, setChangeEmail] = useState(false);
  const [email, setEmail] = useState("alex.johnson@example.com");

  return (
    <SettingsCard title="Account Information">
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <p className="text-[12px] font-medium text-slate-400">
              Email Address
            </p>

            {changeEmail ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 h-10 w-full rounded-lg border border-blue-300 bg-white px-3 text-[13px] text-slate-700 outline-none focus:ring-4 focus:ring-blue-50 sm:max-w-[230px]"
              />
            ) : (
              <p className="mt-1.5 break-all text-[13px] font-semibold text-slate-800">
                {email}
              </p>
            )}
          </div>

          <div>
            <p className="text-[12px] font-medium text-slate-400">
              Account Status
            </p>

            <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[12px] font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Active
            </div>
          </div>

          <div>
            <p className="text-[12px] font-medium text-slate-400">
              Member Since
            </p>

            <p className="mt-1.5 text-[13px] font-semibold text-slate-800">
              September 2026
            </p>
          </div>
        </div>

        <div>
          {!changeEmail ? (
            <button
              type="button"
              onClick={() => setChangeEmail(true)}
              className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              Change Email
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setChangeEmail(false)}
              className="rounded-lg bg-blue-600 px-3.5 py-2 text-[12px] font-semibold text-white transition hover:bg-blue-700"
            >
              Update Email
            </button>
          )}
        </div>
      </div>
    </SettingsCard>
  );
}

/* -------------------- 2. Password Security -------------------- */

function PasswordSecurity() {
  const [changePassword, setChangePassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const updateField = (field, value) => {
    setPasswords((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <SettingsCard title="Password & Security">
      {!changePassword ? (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <LockIcon />
            </div>

            <div>
              <p className="text-[13px] font-semibold text-slate-800">
                Password
              </p>

              <p className="mt-0.5 text-[13px] tracking-[3px] text-slate-500">
                ••••••••••••
              </p>

              <p className="mt-1 text-[11px] text-slate-400">
                Last changed: 30 days ago
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setChangePassword(true)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:w-auto"
          >
            Change Password
          </button>
        </div>
      ) : (
        <div className="max-w-xl">
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              value={passwords.current}
              onChange={(e) =>
                updateField("current", e.target.value)
              }
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />

            <input
              type="password"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={(e) =>
                updateField("newPassword", e.target.value)
              }
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              value={passwords.confirm}
              onChange={(e) =>
                updateField("confirm", e.target.value)
              }
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setChangePassword(false)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => setChangePassword(false)}
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-blue-700"
            >
              Update Password
            </button>
          </div>
        </div>
      )}

      <div className="mt-5 flex items-start gap-2 rounded-xl bg-blue-50/70 px-3.5 py-3 text-[12px] leading-5 text-blue-700">
        <span className="mt-0.5 shrink-0">
          <ShieldIcon />
        </span>

        <p>
          Use a strong password that you don't use on other websites.
        </p>
      </div>
    </SettingsCard>
  );
}

/* -------------------- 3. Notifications -------------------- */

function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    results: true,
    reminders: true,
    progress: false,
    product: true,
  });

  const items = [
    {
      key: "results",
      title: "Assessment Results",
      description:
        "Get notified when your assessment report is ready.",
    },
    {
      key: "reminders",
      title: "Practice & Retest Reminders",
      description:
        "Receive reminders about recommended practice and retests.",
    },
    {
      key: "progress",
      title: "Progress Updates",
      description:
        "Get updates when your readiness or performance changes.",
    },
    {
      key: "product",
      title: "Product Updates",
      description:
        "Receive important product announcements and new feature updates.",
    },
  ];

  return (
    <SettingsCard
      title="Notifications"
      subtitle="Choose which notifications you want to receive."
    >
      <div className="divide-y divide-slate-100">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-slate-800">
                {item.title}
              </p>

              <p className="mt-1 max-w-2xl text-[12px] leading-5 text-slate-500">
                {item.description}
              </p>
            </div>

            <Toggle
              enabled={notifications[item.key]}
              onChange={(value) =>
                setNotifications((current) => ({
                  ...current,
                  [item.key]: value,
                }))
              }
            />
          </div>
        ))}
      </div>
    </SettingsCard>
  );
}

/* -------------------- 4. Appearance -------------------- */

function AppearanceSettings() {
  const [appearance, setAppearance] = useState("Light");

  const options = ["Light", "Dark", "System"];

  return (
    <SettingsCard
      title="Appearance"
      subtitle="Customize how the application looks."
    >
      <div className="grid grid-cols-3 gap-2.5 sm:max-w-[520px]">
        {options.map((option) => {
          const selected = appearance === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setAppearance(option)}
              className={`rounded-xl border px-3 py-3 text-center transition ${
                selected
                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-[0_3px_10px_rgba(37,99,235,0.08)]"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-center gap-1.5">
                {selected && <CheckIcon />}

                <span className="text-[12px] font-semibold">
                  {option}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </SettingsCard>
  );
}

/* -------------------- 5. Privacy & Data -------------------- */

function PrivacyData() {
  const [aiData, setAiData] = useState(true);
  const [personalized, setPersonalized] = useState(true);

  return (
    <SettingsCard title="Privacy & Data">
      <div className="divide-y divide-slate-100">
        <div className="flex items-center justify-between gap-4 pb-5">
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-slate-800">
              AI Interview Data
            </p>

            <p className="mt-1 max-w-2xl text-[12px] leading-5 text-slate-500">
              Allow your interview sessions to be used to improve your
              personalized interview experience.
            </p>
          </div>

          <Toggle enabled={aiData} onChange={setAiData} />
        </div>

        <div className="flex items-center justify-between gap-4 py-5">
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-slate-800">
              Personalized Experience
            </p>

            <p className="mt-1 max-w-2xl text-[12px] leading-5 text-slate-500">
              Use your profile, resume, assessment history, and
              performance data to personalize AI recommendations.
            </p>
          </div>

          <Toggle
            enabled={personalized}
            onChange={setPersonalized}
          />
        </div>

        <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => alert("Your data export has been requested.")}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            <DownloadIcon />
            Download My Data
          </button>

          <button
            type="button"
            className="text-left text-[12px] font-semibold text-blue-600 transition hover:text-blue-700 sm:px-2"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </SettingsCard>
  );
}

/* -------------------- 6. Delete Modal -------------------- */

function DeleteAccountModal({ onClose }) {
  const [confirmText, setConfirmText] = useState("");

  const canDelete = confirmText === "DELETE";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-[2px]">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <InfoIcon />
            </div>

            <h3 className="text-[17px] font-bold text-slate-900">
              Delete your account?
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <CloseIcon />
          </button>
        </div>

        <p className="mt-3 text-[13px] leading-6 text-slate-500">
          Your profile, assessments, reports, progress, and account data
          will be permanently deleted.
        </p>

        <div className="mt-5">
          <label className="mb-2 block text-[12px] font-semibold text-slate-700">
            Type DELETE to confirm
          </label>

          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="DELETE"
            className="h-11 w-full rounded-xl border border-slate-200 px-4 text-[13px] font-medium uppercase outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-50"
          />
        </div>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!canDelete}
            onClick={() => {
              if (canDelete) {
                alert("Mock action: account deletion confirmed.");
                onClose();
              }
            }}
            className={`rounded-lg px-4 py-2.5 text-[12px] font-semibold text-white transition ${
              canDelete
                ? "bg-red-600 hover:bg-red-700"
                : "cursor-not-allowed bg-red-300"
            }`}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------- 7. Danger Zone -------------------- */

function DangerZone({ onDelete }) {
  return (
    <section className="rounded-2xl border border-red-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
      <div className="border-b border-red-100 px-5 py-4 sm:px-6">
        <h2 className="text-[15px] font-bold text-red-700">
          Danger Zone
        </h2>

        <p className="mt-1 text-[12px] leading-5 text-slate-500">
          These actions are permanent and cannot be easily undone.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-[13px] font-semibold text-slate-800">
            Delete Account
          </p>

          <p className="mt-1 max-w-xl text-[12px] leading-5 text-slate-500">
            Permanently remove your account and associated data.
          </p>
        </div>

        <button
          type="button"
          onClick={onDelete}
          className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-[12px] font-semibold text-red-600 transition hover:bg-red-100 sm:w-auto"
        >
          Delete Account
        </button>
      </div>
    </section>
  );
}

/* -------------------- 8. Save Actions -------------------- */

function SettingsActions({ onSave, onCancel, saved }) {
  return (
    <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-h-[20px]">
        {saved && (
          <div className="flex items-center gap-1.5 text-[12px] font-medium text-emerald-600">
            <CheckIcon />
            <span>Settings updated successfully.</span>
          </div>
        )}
      </div>

      <div className="flex w-full gap-2 sm:w-auto">
        <button
          type="button"
          onClick={onCancel}
          className="flex h-[42px] flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-50 sm:flex-none"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onSave}
          className="flex h-[42px] flex-1 items-center justify-center rounded-lg bg-blue-600 px-5 text-[12px] font-semibold text-white shadow-[0_5px_14px_rgba(37,99,235,0.18)] transition hover:bg-blue-700 sm:flex-none"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

/* -------------------- Main Page -------------------- */

export default function AccountSettings() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3500);
  };

  const handleCancel = () => {
    setSaved(false);
  };

  return (
    <>
      <main className="w-full bg-[#f8fafc] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-[22px] font-bold tracking-[-0.025em] text-slate-900 sm:text-[24px]">
              Account Settings
            </h1>

            <p className="mt-1.5 text-[13px] leading-6 text-slate-500 sm:text-[14px]">
              Manage your account, security, notifications, and privacy
              preferences.
            </p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-4">
            <AccountInformation />

            <PasswordSecurity />

            <NotificationSettings />

            <AppearanceSettings />

            <PrivacyData />

            <DangerZone
              onDelete={() => setShowDeleteModal(true)}
            />

            <SettingsActions
              onSave={handleSave}
              onCancel={handleCancel}
              saved={saved}
            />
          </div>
        </div>
      </main>

      {/* Delete Confirmation */}
      {showDeleteModal && (
        <DeleteAccountModal
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
}