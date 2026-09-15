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
  MessageSquare,
  Users,
  MonitorUp,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const interviewer = {
  name: "Rahul Mehta",
  role: "AI Interviewer",
  initials: "RM",
};

const candidate = {
  name: "Tarsem Singh",
  initials: "TS",
};

const questions = [
  "Can you explain how you would design a scalable URL shortening service?",
  "How would you handle database scaling for millions of requests?",
  "What would you do if the service suddenly received 10x traffic?",
];

/* =========================================================
   AVATAR
========================================================= */

function InitialAvatar({ initials, size = "large", active = false }) {
  const sizes = {
    large: "h-28 w-28 text-3xl",
    medium: "h-20 w-20 text-2xl",
    small: "h-10 w-10 text-sm",
  };

  return (
    <div
      className={`relative flex ${sizes[size]} items-center justify-center rounded-full
      bg-gradient-to-br from-blue-50 to-blue-100
      font-semibold text-blue-700 ring-1 ring-blue-200`}
    >
      {initials}

      {active && (
        <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500" />
      )}
    </div>
  );
}

/* =========================================================
   SPEAKER STATUS
========================================================= */

function SpeakerStatus({ state }) {
  const config = {
    "ai-speaking": {
      label: "Rahul is speaking",
      dot: "bg-blue-500",
    },
    "candidate-ready": {
      label: "Your turn",
      dot: "bg-emerald-500",
    },
    "candidate-speaking": {
      label: "You are speaking",
      dot: "bg-emerald-500",
    },
    processing: {
      label: "Processing response",
      dot: "bg-amber-500",
    },
    "ai-thinking": {
      label: "Rahul is thinking",
      dot: "bg-violet-500",
    },
  };

  const current = config[state] || config["ai-speaking"];

  return (
    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
      <span className={`h-2 w-2 rounded-full ${current.dot}`} />
      {current.label}
    </div>
  );
}

/* =========================================================
   AUDIO WAVEFORM
========================================================= */

function AudioWaveform({ active = false }) {
  return (
    <div className="flex h-5 items-center gap-[3px]">
      {[4, 9, 14, 7, 17, 10, 5, 12, 7].map((height, index) => (
        <span
          key={index}
          className={`w-[3px] rounded-full transition-all ${
            active ? "animate-pulse bg-blue-500" : "bg-slate-300"
          }`}
          style={{
            height: active ? `${height}px` : "4px",
            animationDelay: `${index * 80}ms`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   INTERVIEW HEADER
========================================================= */

function InterviewHeader({ seconds }) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <header className="flex h-[68px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5">
      {/* LEFT */}
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
          AI
        </div>

        <div className="hidden sm:block">
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-semibold text-slate-900">
              Live AI Interview
            </h1>

            <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
              LIVE
            </span>
          </div>

          <p className="mt-0.5 text-xs text-slate-500">
            Microsoft · Software Engineer — SDE-1
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="hidden items-center gap-5 md:flex">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-wide text-slate-400">
            Interview
          </p>
          <p className="text-xs font-semibold text-slate-700">
            Technical Round
          </p>
        </div>

        <div className="h-7 w-px bg-slate-200" />

        <div className="text-center">
          <p className="text-[10px] uppercase tracking-wide text-slate-400">
            Question
          </p>
          <p className="text-xs font-semibold text-slate-700">4 of 8</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-slate-600">
            Connected
          </span>
        </div>

        <div className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold tabular-nums text-slate-700">
          {String(minutes).padStart(2, "0")}:
          {String(remainingSeconds).padStart(2, "0")}
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   CURRENT QUESTION
========================================================= */

function CurrentQuestion({ question }) {
  return (
    <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur-md">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-md bg-blue-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-300">
          Current question
        </span>

        <span className="text-[10px] text-slate-400">
          Technical Interview
        </span>
      </div>

      <p className="max-w-3xl text-sm font-medium leading-6 text-white sm:text-base">
        {question}
      </p>
    </div>
  );
}

/* =========================================================
   INTERVIEWER PANEL
========================================================= */

function InterviewerPanel({ state, question }) {
  const isSpeaking = state === "ai-speaking";

  return (
    <section className="relative flex min-h-0 flex-1 overflow-hidden bg-slate-900">
      {/* subtle meeting background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.10),transparent_40%)]" />

      <div className="relative flex w-full flex-col items-center justify-center">
        <InitialAvatar
          initials={interviewer.initials}
          size="large"
          active={isSpeaking}
        />

        <div className="mt-5 text-center">
          <h2 className="text-base font-semibold text-white">
            {interviewer.name}
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            {interviewer.role}
          </p>
        </div>

        <div className="mt-4">
          <SpeakerStatus state={state} />
        </div>

        <div className="mt-3">
          <AudioWaveform active={isSpeaking} />
        </div>
      </div>

      <CurrentQuestion question={question} />

      {/* name badge */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-blue-400" />
        <span className="text-xs font-medium text-white">
          Rahul Mehta
        </span>
      </div>

      <div className="absolute right-4 top-4 rounded-md bg-black/30 px-2 py-1 text-[10px] font-medium text-slate-300">
        AI Interviewer
      </div>
    </section>
  );
}

/* =========================================================
   CANDIDATE PANEL
========================================================= */

function CandidatePanel({ state, cameraOn }) {
  const candidateSpeaking = state === "candidate-speaking";

  return (
    <section className="relative flex min-h-0 flex-1 overflow-hidden bg-slate-100">
      {/* clean Teams-like video background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />

      <div className="relative flex w-full flex-col items-center justify-center">
        {cameraOn ? (
          /*
            Real webcam feed can be placed here later.
            For now we intentionally show initials instead of fake person imagery.
          */
          <div className="relative">
            <InitialAvatar
              initials={candidate.initials}
              size="large"
              active={candidateSpeaking}
            />
          </div>
        ) : (
          <div className="relative">
            <InitialAvatar
              initials={candidate.initials}
              size="large"
              active={candidateSpeaking}
            />
          </div>
        )}

        <div className="mt-5 text-center">
          <h2 className="text-base font-semibold text-slate-900">
            {candidate.name}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Candidate
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <SpeakerStatus state={state} />

          {candidateSpeaking && (
            <AudioWaveform active />
          )}
        </div>
      </div>

      {/* candidate label */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 shadow-sm ring-1 ring-slate-200">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">
          TS
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-800">
            Tarsem Singh
          </p>

          <p className="text-[10px] text-slate-500">
            You
          </p>
        </div>
      </div>

      {/* camera status */}
      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 shadow-sm ring-1 ring-slate-200">
        {cameraOn ? (
          <Video className="h-3.5 w-3.5 text-slate-600" />
        ) : (
          <VideoOff className="h-3.5 w-3.5 text-slate-500" />
        )}

        <span className="text-[10px] font-medium text-slate-600">
          {cameraOn ? "Camera on" : "Camera off"}
        </span>
      </div>
    </section>
  );
}

/* =========================================================
   INTERVIEW ROOM
========================================================= */

function InterviewRoom({ state, question, cameraOn }) {
  return (
    <main className="flex min-h-0 flex-1 flex-col gap-2 bg-slate-200 p-2 md:flex-row">
      <InterviewerPanel
        state={state}
        question={question}
      />

      <CandidatePanel
        state={state}
        cameraOn={cameraOn}
      />
    </main>
  );
}

/* =========================================================
   INTERVIEW CONTROLS
========================================================= */

function ControlButton({
  children,
  onClick,
  active = false,
  danger = false,
  label,
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-1.5"
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full transition
        ${
          danger
            ? "bg-red-500 text-white hover:bg-red-600"
            : active
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`}
      >
        {children}
      </span>

      <span className="hidden text-[10px] font-medium text-slate-500 sm:block">
        {label}
      </span>
    </button>
  );
}

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
  const candidateSpeaking = state === "candidate-speaking";

  return (
    <footer className="flex h-[78px] shrink-0 items-center justify-center border-t border-slate-200 bg-white px-4">
      <div className="flex items-center gap-3 sm:gap-5">
        <ControlButton
          label={micOn ? "Mute" : "Unmute"}
          active={micOn}
          onClick={() => setMicOn(!micOn)}
        >
          {micOn ? (
            <Mic className="h-5 w-5" />
          ) : (
            <MicOff className="h-5 w-5" />
          )}
        </ControlButton>

        <ControlButton
          label={cameraOn ? "Camera" : "Camera off"}
          active={cameraOn}
          onClick={() => setCameraOn(!cameraOn)}
        >
          {cameraOn ? (
            <Video className="h-5 w-5" />
          ) : (
            <VideoOff className="h-5 w-5" />
          )}
        </ControlButton>

        <ControlButton
          label={speakerOn ? "Speaker" : "Muted"}
          active={speakerOn}
          onClick={() => setSpeakerOn(!speakerOn)}
        >
          {speakerOn ? (
            <Volume2 className="h-5 w-5" />
          ) : (
            <VolumeX className="h-5 w-5" />
          )}
        </ControlButton>

        {/* PRIMARY ACTION */}
        <button
          onClick={onSpeak}
          className={`mx-1 flex h-12 min-w-[110px] items-center justify-center rounded-full px-5 text-xs font-semibold text-white shadow-sm transition ${
            candidateSpeaking
              ? "bg-slate-700 hover:bg-slate-800"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {candidateSpeaking ? "Finish Answer" : "Speak"}
        </button>

        <ControlButton
          label="More"
          onClick={() => {}}
        >
          <MoreHorizontal className="h-5 w-5" />
        </ControlButton>

        <ControlButton
          label="End"
          danger
          onClick={onEnd}
        >
          <PhoneOff className="h-5 w-5" />
        </ControlButton>
      </div>
    </footer>
  );
}

/* =========================================================
   END MODAL
========================================================= */

function EndInterviewModal({ onContinue, onEnd }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
          <PhoneOff className="h-5 w-5" />
        </div>

        <h2 className="mt-4 text-lg font-semibold text-slate-900">
          End interview?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          You won't be able to continue this interview session.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onContinue}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Continue
          </button>

          <button
            onClick={onEnd}
            className="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
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
    <div className="flex h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <ShieldCheck className="h-8 w-8 text-emerald-600" />
        </div>

        <h1 className="mt-5 text-xl font-semibold text-slate-900">
          Interview Complete
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Your interview has been recorded and is now being evaluated.
        </p>

        <button
          onClick={() => alert("Opening interview report...")}
          className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
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

export default function LiveAIInterview() {
  const [state, setState] = useState("ai-speaking");

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(true);

  const [showEndModal, setShowEndModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [seconds, setSeconds] = useState(32 * 60 + 18);
  const [questionIndex, setQuestionIndex] = useState(0);

  /* TIMER */
  useEffect(() => {
    if (completed) return;

    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [completed]);

  /* MOCK AI INTERVIEW FLOW */
  useEffect(() => {
    if (completed) return;

    const cycle = [
      ["ai-speaking", 5000],
      ["candidate-ready", 2500],
      ["candidate-speaking", 5000],
      ["processing", 1800],
      ["ai-thinking", 2500],
      ["ai-speaking", 5000],
    ];

    let timeout;

    const runCycle = (index) => {
      const [nextState, duration] = cycle[index];

      setState(nextState);

      timeout = setTimeout(() => {
        const nextIndex = (index + 1) % cycle.length;

        if (nextIndex === 0) {
          setQuestionIndex((prev) =>
            Math.min(prev + 1, questions.length - 1)
          );
        }

        runCycle(nextIndex);
      }, duration);
    };

    runCycle(0);

    return () => clearTimeout(timeout);
  }, [completed]);

  const handleSpeak = () => {
    if (state === "candidate-speaking") {
      setState("processing");

      setTimeout(() => {
        setState("ai-thinking");

        setTimeout(() => {
          setState("ai-speaking");
        }, 2200);
      }, 1200);

      return;
    }

    setState("candidate-speaking");
  };

  if (completed) {
    return <InterviewComplete />;
  }

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-slate-200">
      <InterviewHeader seconds={seconds} />

      <InterviewRoom
        state={state}
        question={questions[questionIndex]}
        cameraOn={cameraOn}
      />

      <InterviewControls
        state={state}
        micOn={micOn}
        setMicOn={setMicOn}
        cameraOn={cameraOn}
        setCameraOn={setCameraOn}
        speakerOn={speakerOn}
        setSpeakerOn={setSpeakerOn}
        onSpeak={handleSpeak}
        onEnd={() => setShowEndModal(true)}
      />

      {showEndModal && (
        <EndInterviewModal
          onContinue={() => setShowEndModal(false)}
          onEnd={() => setCompleted(true)}
        />
      )}
    </div>
  );
}