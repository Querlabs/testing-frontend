"use client";

import { useEffect, useState } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Volume2,
  VolumeX,
  MoreHorizontal,
  PhoneOff,
  Play,
  Send,
  RotateCcw,
  Wand2,
  ChevronDown,
  CheckCircle2,
  Clock3,
  MessageSquare,
  Wifi,
  Code2,
  X,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const interviewer = {
  name: "Rahul Mehta",
  initials: "RM",
  role: "AI Interviewer",
};

const candidate = {
  name: "Tarsem Singh",
  initials: "TS",
};

const interviewerPrompts = [
  "Before you start coding, walk me through your approach.",
  "Why did you choose a hash map for this solution?",
  "What is the time complexity?",
  "Can you reduce the space complexity?",
  "Walk me through this edge case.",
];

const initialCode = `function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}`;

/* =========================================================
   AVATAR
========================================================= */

function InitialAvatar({
  initials,
  size = "medium",
  dark = false,
  active = false,
}) {
  const sizes = {
    large: "h-20 w-20 text-2xl",
    medium: "h-14 w-14 text-lg",
    small: "h-10 w-10 text-sm",
  };

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full font-bold ${
        sizes[size]
      } ${
        dark
          ? "bg-slate-700 text-white ring-1 ring-white/10"
          : "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
      }`}
    >
      {initials}

      {active && (
        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500" />
      )}
    </div>
  );
}

/* =========================================================
   WAVEFORM
========================================================= */

function AudioWaveform({ active = false, dark = false }) {
  const bars = [5, 9, 14, 8, 17, 11, 6, 13, 8];

  return (
    <div className="flex h-5 items-center gap-[3px]">
      {bars.map((height, index) => (
        <span
          key={index}
          className={`w-[2.5px] rounded-full ${
            active
              ? dark
                ? "animate-pulse bg-blue-400"
                : "animate-pulse bg-blue-500"
              : dark
              ? "bg-slate-600"
              : "bg-slate-300"
          }`}
          style={{
            height: active ? `${height}px` : "4px",
            animationDelay: `${index * 70}ms`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   STATUS
========================================================= */

function InterviewStatus({ state, dark = false }) {
  const statuses = {
    "ai-speaking": {
      text: "Speaking",
      dot: "bg-blue-400",
    },
    "ai-listening": {
      text: "Listening",
      dot: "bg-emerald-400",
    },
    "candidate-speaking": {
      text: "Speaking",
      dot: "bg-emerald-500",
    },
    coding: {
      text: "Coding",
      dot: "bg-blue-500",
    },
    running: {
      text: "Running",
      dot: "bg-amber-500",
    },
    processing: {
      text: "Processing",
      dot: "bg-violet-500",
    },
    submitted: {
      text: "Submitted",
      dot: "bg-emerald-500",
    },
  };

  const current = statuses[state] || statuses.coding;

  return (
    <div
      className={`flex items-center gap-1.5 text-[9px] font-medium ${
        dark ? "text-slate-400" : "text-slate-500"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${current.dot}`} />
      {current.text}
    </div>
  );
}

/* =========================================================
   HEADER
========================================================= */

function CodingInterviewHeader({ seconds }) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;

  return (
    <header className="flex h-[64px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
          AI
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-sm font-semibold text-slate-900">
              Live Coding Interview
            </h1>

            <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-bold text-red-600">
              LIVE
            </span>
          </div>

          <p className="hidden text-[11px] text-slate-500 sm:block">
            Microsoft · Software Engineer — SDE-1
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-7 lg:flex">
        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            Interview
          </p>

          <p className="mt-0.5 text-xs font-semibold text-slate-700">
            Coding Round
          </p>
        </div>

        <div className="h-6 w-px bg-slate-200" />

        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            Question
          </p>

          <p className="mt-0.5 text-xs font-semibold text-slate-700">
            1 of 2
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 sm:flex">
          <Wifi className="h-3 w-3 text-emerald-500" />
          <span className="text-[10px] font-medium text-slate-600">
            Connected
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5">
          <Clock3 className="h-3 w-3 text-slate-500" />

          <span className="text-xs font-semibold tabular-nums text-slate-700">
            {String(minutes).padStart(2, "0")}:
            {String(remaining).padStart(2, "0")}
          </span>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   PROBLEM PANEL
========================================================= */

function ProblemPanel() {
  const [tab, setTab] = useState("Description");

  return (
    <section className="flex min-h-0 w-full flex-col overflow-hidden border-r border-slate-200 bg-white lg:w-[30%]">
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-slate-200 px-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-slate-500" />

          <span className="text-sm font-semibold text-slate-800">
            Problem
          </span>
        </div>

        <span className="rounded-md bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-700">
          Medium
        </span>
      </div>

      <div className="flex h-11 shrink-0 border-b border-slate-200 px-4">
        {["Description", "Examples", "Constraints"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`mr-5 border-b-2 text-[10px] font-semibold ${
              tab === item
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Two Sum
        </h2>

        {tab === "Description" && (
          <div className="mt-5 space-y-6">
            <p className="text-xs leading-6 text-slate-600">
              Given an array of integers nums and an integer target,
              return the indices of the two numbers such that they add
              up to target.
            </p>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-800">
                Examples
              </h3>

              <div className="mt-2 rounded-xl bg-slate-50 p-4">
                <p className="font-mono text-[10px] text-slate-600">
                  nums = [2,7,11,15], target = 9
                </p>

                <p className="mt-3 font-mono text-[10px] text-slate-600">
                  Output: [0,1]
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-800">
                Constraints
              </h3>

              <ul className="mt-3 space-y-3 text-[10px] text-slate-500">
                <li>• 2 ≤ nums.length ≤ 10⁴</li>
                <li>• -10⁹ ≤ nums[i] ≤ 10⁹</li>
                <li>• -10⁹ ≤ target ≤ 10⁹</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "Examples" && (
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-[10px] font-semibold text-slate-500">
                Example 1
              </p>

              <pre className="mt-3 font-mono text-[10px] leading-5 text-slate-700">
{`nums = [2,7,11,15]
target = 9

Output = [0,1]`}
              </pre>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-[10px] font-semibold text-slate-500">
                Example 2
              </p>

              <pre className="mt-3 font-mono text-[10px] leading-5 text-slate-700">
{`nums = [3,2,4]
target = 6

Output = [1,2]`}
              </pre>
            </div>
          </div>
        )}

        {tab === "Constraints" && (
          <div className="mt-5 rounded-xl bg-slate-50 p-4">
            <ul className="space-y-3 text-[10px] text-slate-600">
              <li>2 ≤ nums.length ≤ 10⁴</li>
              <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
              <li>-10⁹ ≤ target ≤ 10⁹</li>
              <li>Exactly one valid answer exists.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   PARTICIPANT CARD
========================================================= */

function ParticipantCard({
  name,
  initials,
  role,
  state,
  dark = false,
  cameraOn = false,
  prompt,
}) {
  const speaking =
    state === "ai-speaking" ||
    state === "candidate-speaking";

  return (
    <div
      className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border ${
        dark
          ? "border-slate-700 bg-[#111827]"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* CARD HEADER */}
      <div
        className={`flex h-9 shrink-0 items-center justify-between border-b px-3 ${
          dark
            ? "border-white/10"
            : "border-slate-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              speaking
                ? "bg-blue-500"
                : "bg-emerald-500"
            }`}
          />

          <span
            className={`text-[9px] font-semibold ${
              dark
                ? "text-slate-300"
                : "text-slate-500"
            }`}
          >
            {role}
          </span>
        </div>

        <span
          className={`text-[8px] ${
            dark
              ? "text-slate-500"
              : "text-slate-400"
          }`}
        >
          {cameraOn ? "Camera on" : "Camera off"}
        </span>
      </div>

      {/* PARTICIPANT */}
      <div className="min-h-0 flex-1 flex flex-col items-center justify-center px-3">
        <InitialAvatar
          initials={initials}
          size="medium"
          dark={dark}
          active={speaking}
        />

        <h3
          className={`mt-3 text-xs font-semibold ${
            dark
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <InterviewStatus
            state={state}
            dark={dark}
          />

          {speaking && (
            <AudioWaveform
              active
              dark={dark}
            />
          )}
        </div>
      </div>

      {/* AI PROMPT */}
      {dark && prompt && (
        <div className="shrink-0 border-t border-white/10 bg-slate-950/70 p-3">
          <div className="mb-1 flex items-center gap-1">
            <MessageSquare className="h-2.5 w-2.5 text-blue-400" />

            <span className="text-[8px] font-bold uppercase tracking-wider text-blue-300">
              Current question
            </span>
          </div>

          <p className="text-[9px] leading-4 text-slate-200">
            {prompt}
          </p>
        </div>
      )}

      {/* CANDIDATE FOOTER */}
      {!dark && (
        <div className="flex h-8 shrink-0 items-center justify-between border-t border-slate-200 bg-slate-50 px-3">
          <span className="text-[8px] font-medium text-slate-500">
            You
          </span>

          <div className="flex items-center gap-1.5">
            {cameraOn ? (
              <Video className="h-3 w-3 text-slate-500" />
            ) : (
              <VideoOff className="h-3 w-3 text-slate-400" />
            )}

            <span className="text-[8px] text-slate-400">
              {cameraOn ? "Camera" : "Camera off"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   PARTICIPANT SIDEBAR
========================================================= */

function ParticipantSidebar({
  state,
  cameraOn,
  prompt,
}) {
  return (
    <aside className="flex w-[250px] shrink-0 flex-col gap-2 border-l border-slate-200 bg-slate-100 p-2">
      <ParticipantCard
        name={interviewer.name}
        initials={interviewer.initials}
        role={interviewer.role}
        state={state}
        dark
        prompt={prompt}
      />

      <ParticipantCard
        name={candidate.name}
        initials={candidate.initials}
        role="Candidate"
        state={state}
        cameraOn={cameraOn}
      />
    </aside>
  );
}

/* =========================================================
   CODE EDITOR
========================================================= */

function CodeEditor({
  code,
  setCode,
  language,
  setLanguage,
}) {
  const lines = code.split("\n");

  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#0d1117]">
      {/* TOOLBAR */}
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-slate-800 bg-[#161b22] px-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-[#0d1117] px-2.5 py-1.5">
            <Code2 className="h-3.5 w-3.5 text-blue-400" />

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value)
              }
              className="bg-transparent text-[10px] font-medium text-slate-300 outline-none"
            >
              <option
                className="bg-[#161b22]"
                value="JavaScript"
              >
                JavaScript
              </option>

              <option
                className="bg-[#161b22]"
                value="Python"
              >
                Python
              </option>

              <option
                className="bg-[#161b22]"
                value="C++"
              >
                C++
              </option>

              <option
                className="bg-[#161b22]"
                value="Java"
              >
                Java
              </option>
            </select>

            <ChevronDown className="h-3 w-3 text-slate-500" />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-800 hover:text-white">
            <Wand2 className="h-3 w-3" />
            Format
          </button>

          <button
            onClick={() =>
              setCode(initialCode)
            }
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        </div>
      </div>

      {/* EDITOR */}
      <div className="min-h-0 flex-1 overflow-auto">
        <div className="flex min-h-full font-mono text-[13px] leading-7">
          <div className="min-w-[50px] select-none border-r border-slate-800 bg-[#0d1117] px-3 py-4 text-right text-[11px] text-slate-600">
            {lines.map((_, index) => (
              <div key={index}>
                {index + 1}
              </div>
            ))}
          </div>

          <textarea
            value={code}
            onChange={(e) =>
              setCode(e.target.value)
            }
            spellCheck={false}
            className="min-h-full min-w-0 flex-1 resize-none bg-transparent px-5 py-4 font-mono text-[13px] leading-7 text-slate-200 outline-none"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXECUTION
========================================================= */

function ExecutionPanel({ runStatus }) {
  const [tab, setTab] = useState("Test Cases");

  return (
    <section className="flex h-[105px] shrink-0 flex-col border-t border-slate-200 bg-slate-50">
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-3">
        <div className="flex h-full items-center gap-4">
          {[
            "Test Cases",
            "Output",
            "Terminal",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`h-full border-b-2 text-[10px] font-semibold ${
                tab === item
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {runStatus === "passed" && (
          <span className="text-[9px] font-semibold text-emerald-600">
            Passed 2/2 test cases
          </span>
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-auto px-3 py-2">
        {tab === "Test Cases" && (
          <div className="flex gap-2">
            <div className="flex min-w-[200px] flex-1 items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div>
                <p className="text-[9px] font-semibold text-slate-700">
                  Test Case 1
                </p>

                <p className="mt-0.5 font-mono text-[8px] text-slate-400">
                  [2,7,11,15], 9
                </p>
              </div>

              {runStatus === "passed" ? (
                <span className="flex items-center gap-1 text-[8px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3 w-3" />
                  Passed
                </span>
              ) : (
                <span className="text-[8px] text-slate-400">
                  Ready
                </span>
              )}
            </div>

            <div className="flex min-w-[200px] flex-1 items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div>
                <p className="text-[9px] font-semibold text-slate-700">
                  Test Case 2
                </p>

                <p className="mt-0.5 font-mono text-[8px] text-slate-400">
                  [3,2,4], 6
                </p>
              </div>

              {runStatus === "passed" ? (
                <span className="flex items-center gap-1 text-[8px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3 w-3" />
                  Passed
                </span>
              ) : (
                <span className="text-[8px] text-slate-400">
                  Pending
                </span>
              )}
            </div>
          </div>
        )}

        {tab === "Output" && (
          <div className="rounded-lg bg-[#0d1117] px-3 py-2 font-mono text-[9px] text-slate-400">
            {runStatus === "passed"
              ? "✓ All test cases passed"
              : "Run your code to see output."}
          </div>
        )}

        {tab === "Terminal" && (
          <div className="rounded-lg bg-[#0d1117] px-3 py-2 font-mono text-[9px] text-slate-400">
            $ interview-runtime ready
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   CODE ACTIONS
========================================================= */

function CodeActions({
  runStatus,
  onRun,
  onSubmit,
}) {
  return (
    <div className="flex h-[48px] shrink-0 items-center justify-end gap-2 border-t border-slate-200 bg-white px-3">
      <button
        onClick={onRun}
        disabled={runStatus === "running"}
        className="flex h-9 items-center gap-2 rounded-lg bg-blue-600 px-4 text-[10px] font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        <Play className="h-3 w-3 fill-current" />

        {runStatus === "running"
          ? "Running..."
          : "Run Code"}
      </button>

      <button
        onClick={onSubmit}
        disabled={runStatus === "running"}
        className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-[10px] font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
      >
        <Send className="h-3 w-3" />
        Submit Solution
      </button>
    </div>
  );
}

/* =========================================================
   CONTROL BUTTON
========================================================= */

function ControlButton({
  icon,
  label,
  active,
  danger,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-0.5"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full ${
          danger
            ? "bg-red-500 text-white hover:bg-red-600"
            : active
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`}
      >
        {icon}
      </span>

      <span className="hidden text-[8px] font-medium text-slate-500 sm:block">
        {label}
      </span>
    </button>
  );
}

/* =========================================================
   BOTTOM CONTROLS
========================================================= */

function InterviewControls({
  state,
  micOn,
  setMicOn,
  cameraOn,
  setCameraOn,
  speakerOn,
  setSpeakerOn,
  onSpeak,
  onEnd,
}) {
  const speaking =
    state === "candidate-speaking";

  return (
    <footer className="relative flex h-[62px] shrink-0 items-center justify-between border-t border-slate-200 bg-white px-3 md:px-5">
      <div className="flex items-center gap-2 sm:gap-3">
        <ControlButton
          label={micOn ? "Mute" : "Unmute"}
          active={micOn}
          onClick={() => setMicOn(!micOn)}
          icon={
            micOn ? (
              <Mic className="h-4 w-4" />
            ) : (
              <MicOff className="h-4 w-4" />
            )
          }
        />

        <ControlButton
          label={
            cameraOn
              ? "Camera"
              : "Camera off"
          }
          active={cameraOn}
          onClick={() =>
            setCameraOn(!cameraOn)
          }
          icon={
            cameraOn ? (
              <Video className="h-4 w-4" />
            ) : (
              <VideoOff className="h-4 w-4" />
            )
          }
        />

        <ControlButton
          label={
            speakerOn
              ? "Speaker"
              : "Muted"
          }
          active={speakerOn}
          onClick={() =>
            setSpeakerOn(!speakerOn)
          }
          icon={
            speakerOn ? (
              <Volume2 className="h-4 w-4" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )
          }
        />

        <ControlButton
          label="More"
          onClick={() => {}}
          icon={
            <MoreHorizontal className="h-4 w-4" />
          }
        />
      </div>

      {/* CENTER SPEAK */}
      <button
        onClick={onSpeak}
        className={`absolute left-1/2 flex h-10 -translate-x-1/2 items-center gap-2 rounded-full px-6 text-[10px] font-semibold text-white shadow-sm ${
          speaking
            ? "bg-slate-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        <Mic className="h-4 w-4" />

        {speaking
          ? "Recording..."
          : state === "ai-speaking"
          ? "Interviewer speaking..."
          : "Speak"}
      </button>

      {/* END */}
      <button
        onClick={onEnd}
        className="flex h-9 items-center gap-2 rounded-full bg-red-500 px-3.5 text-[10px] font-semibold text-white hover:bg-red-600"
      >
        <PhoneOff className="h-3.5 w-3.5" />

        <span className="hidden sm:block">
          End Interview
        </span>
      </button>
    </footer>
  );
}

/* =========================================================
   END MODAL
========================================================= */

function EndInterviewModal({
  onContinue,
  onEnd,
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
            <PhoneOff className="h-4 w-4" />
          </div>

          <button
            onClick={onContinue}
            className="text-slate-400 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h2 className="mt-4 text-lg font-semibold text-slate-900">
          End interview?
        </h2>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          You won't be able to continue this coding interview.
        </p>

        <div className="mt-6 flex gap-2">
          <button
            onClick={onContinue}
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Continue Interview
          </button>

          <button
            onClick={onEnd}
            className="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-xs font-semibold text-white hover:bg-red-600"
          >
            End Interview
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COMPLETE
========================================================= */

function InterviewComplete() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-slate-50 p-5">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-7 w-7 text-emerald-600" />
        </div>

        <h1 className="mt-5 text-xl font-semibold text-slate-900">
          Interview Complete
        </h1>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Your coding interview has been recorded and is now being evaluated.
        </p>

        <button
          onClick={() =>
            alert("Opening interview report...")
          }
          className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white hover:bg-blue-700"
        >
          View Interview Report
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function LiveAICodingInterview() {
  const [state, setState] =
    useState("ai-speaking");

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] =
    useState(false);
  const [speakerOn, setSpeakerOn] =
    useState(true);

  const [seconds, setSeconds] =
    useState(42 * 60 + 18);

  const [promptIndex, setPromptIndex] =
    useState(0);

  const [code, setCode] =
    useState(initialCode);

  const [language, setLanguage] =
    useState("JavaScript");

  const [runStatus, setRunStatus] =
    useState("idle");

  const [showEndModal, setShowEndModal] =
    useState(false);

  const [completed, setCompleted] =
    useState(false);

  /* TIMER */
  useEffect(() => {
    if (completed) return;

    const timer = setInterval(() => {
      setSeconds((prev) =>
        prev > 0 ? prev - 1 : 0
      );
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [completed]);

  /* AI MOCK FLOW */
  useEffect(() => {
    if (completed) return;

    if (state === "ai-speaking") {
      const timer = setTimeout(() => {
        setState("ai-listening");
      }, 4500);

      return () =>
        clearTimeout(timer);
    }
  }, [state, completed]);

  /* RUN */
  const handleRunCode = () => {
    setState("running");
    setRunStatus("running");

    setTimeout(() => {
      setRunStatus("passed");
      setState("coding");
    }, 1800);
  };

  /* SUBMIT */
  const handleSubmit = () => {
    setState("submitted");

    setTimeout(() => {
      setPromptIndex((prev) =>
        Math.min(
          prev + 1,
          interviewerPrompts.length - 1
        )
      );

      setState("ai-speaking");
    }, 1500);
  };

  /* SPEAK */
  const handleSpeak = () => {
    if (state === "candidate-speaking") {
      setState("processing");

      setTimeout(() => {
        setPromptIndex((prev) =>
          Math.min(
            prev + 1,
            interviewerPrompts.length - 1
          )
        );

        setState("ai-speaking");
      }, 1200);

      return;
    }

    if (
      state === "ai-listening" ||
      state === "coding"
    ) {
      setState("candidate-speaking");
    }
  };

  if (completed) {
    return <InterviewComplete />;
  }

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-slate-200">
      {/* =================================================
          HEADER
      ================================================= */}

      <CodingInterviewHeader
        seconds={seconds}
      />

      {/* =================================================
          MAIN WORKSPACE
      ================================================= */}

      <main className="flex min-h-0 flex-1 overflow-hidden">
        {/* PROBLEM */}
        <ProblemPanel />

        {/* CODING WORKSPACE */}
        <section className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
          {/* EDITOR SIDE */}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            <CodeEditor
              code={code}
              setCode={setCode}
              language={language}
              setLanguage={setLanguage}
            />

            <ExecutionPanel
              runStatus={runStatus}
            />

            <CodeActions
              runStatus={runStatus}
              onRun={handleRunCode}
              onSubmit={handleSubmit}
            />
          </div>

          {/* PARTICIPANTS */}
          <ParticipantSidebar
            state={state}
            cameraOn={cameraOn}
            prompt={
              interviewerPrompts[
                promptIndex
              ]
            }
          />
        </section>
      </main>

      {/* =================================================
          BOTTOM CONTROLS
      ================================================= */}

      <InterviewControls
        state={state}
        micOn={micOn}
        setMicOn={setMicOn}
        cameraOn={cameraOn}
        setCameraOn={setCameraOn}
        speakerOn={speakerOn}
        setSpeakerOn={setSpeakerOn}
        onSpeak={handleSpeak}
        onEnd={() =>
          setShowEndModal(true)
        }
      />

      {showEndModal && (
        <EndInterviewModal
          onContinue={() =>
            setShowEndModal(false)
          }
          onEnd={() =>
            setCompleted(true)
          }
        />
      )}
    </div>
  );
}