
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Headphones,
  X,
  Bot,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const supportFlow = {
  start: {
    message: "Hey there! 👋 Welcome to InterCrack. What can I help you with today?",
    options: [
      { label: "Account & Login", next: "account" },
      { label: "Interview Preparation", next: "interview" },
      { label: "Resume Builder", next: "resume" },
      { label: "Platform & Technical Issues", next: "technical" },
      { label: "Payments & Subscription", next: "payment" },
      { label: "Other Queries", next: "other" },
    ],
  },

  account: {
    message: "Sure! What issue are you facing with your account?",
    options: [
      { label: "Unable to login", next: "login" },
      { label: "Forgot password", next: "password" },
      { label: "OTP not received", next: "otp" },
      { label: "Account verification", next: "verification" },
    ],
  },

  interview: {
    message: "Let's help you with your interview preparation. What do you need?",
    options: [
      { label: "Starting an interview", next: "startInterview" },
      { label: "Interview questions", next: "questions" },
      { label: "Interview results & feedback", next: "feedback" },
    ],
  },

  resume: {
    message: "What would you like help with in the Resume Builder?",
    options: [
      { label: "Creating a resume", next: "createResume" },
      { label: "Editing my resume", next: "editResume" },
      { label: "Downloading my resume", next: "downloadResume" },
    ],
  },

  technical: {
    message: "Let's troubleshoot this. Which issue are you experiencing?",
    options: [
      { label: "Page not loading", next: "pageLoading" },
      { label: "Something is not working", next: "technicalError" },
      { label: "Website performance issue", next: "performance" },
    ],
  },

  payment: {
    message: "What is your payment-related concern?",
    options: [
      { label: "Payment failed", next: "paymentFailed" },
      { label: "Payment deducted", next: "paymentDeducted" },
      { label: "Subscription issue", next: "subscription" },
    ],
  },

  other: {
    message: "No problem! How can we help you?",
    options: [
      { label: "General inquiry", next: "general" },
      { label: "Business inquiry", next: "business" },
      { label: "Share feedback", next: "suggestion" },
    ],
  },

  login: {
    message: "Please check the following before trying again:",
    answer: [
      "Make sure your registered email address is correct.",
      "Check that your password is entered correctly.",
      "Refresh the page and try logging in again.",
    ],
    question: "Were you able to log in?",
    options: [
      { label: "Yes, it's working now!", next: "solved" },
      { label: "No, still facing the issue", next: "unsolved" },
    ],
  },

  password: {
    message: "You can try resetting your password using the Forgot Password option on the login page.",
    question: "Did this resolve your issue?",
    options: [
      { label: "Yes, solved!", next: "solved" },
      { label: "No, need more help", next: "unsolved" },
    ],
  },

  otp: {
    message: "Please try these steps:",
    answer: [
      "Check your spam or junk folder.",
      "Verify that your registered email is correct.",
      "Wait a few minutes before requesting a new OTP.",
    ],
    question: "Did you receive your OTP?",
    options: [
      { label: "Yes, received!", next: "solved" },
      { label: "No, still not received", next: "unsolved" },
    ],
  },

  verification: {
    message: "Please make sure you have completed all the required account verification steps. If verification is still pending, our support team can investigate.",
    question: "Is your issue resolved?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  startInterview: {
    message: "Make sure you have completed your profile and selected the relevant interview settings before starting your interview.",
    question: "Could you start your interview?",
    options: [
      { label: "Yes, it works", next: "solved" },
      { label: "No, I need assistance", next: "unsolved" },
    ],
  },

  questions: {
    message: "You can explore the available interview questions and practice according to your selected role and skills.",
    question: "Did you find what you were looking for?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  feedback: {
    message: "Your interview feedback should be available in the relevant interview review section, if the assessment has been completed.",
    question: "Could you access your feedback?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  createResume: {
    message: "Open the Resume Builder, enter your details and follow the available steps to create your resume.",
    question: "Were you able to create your resume?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  editResume: {
    message: "Open your existing resume in the Resume Builder and update the relevant sections before saving your changes.",
    question: "Did that help?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  downloadResume: {
    message: "Check whether your resume has been saved successfully and try the download option again.",
    question: "Were you able to download it?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  pageLoading: {
    message: "Try refreshing the page, checking your internet connection and opening InterCrack in an updated browser.",
    question: "Is the page loading now?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  technicalError: {
    message: "Please refresh the page and try again. If the issue persists, note the error message so our team can investigate.",
    question: "Is everything working now?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  performance: {
    message: "Try closing unused browser tabs, refreshing the website and checking your network connection.",
    question: "Has the performance improved?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  paymentFailed: {
    message: "Check your payment method and transaction status before attempting another payment. Avoid making repeated payments if a transaction is still processing.",
    question: "Has your payment issue been resolved?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  paymentDeducted: {
    message: "Please keep your transaction ID and payment confirmation details ready. Our team can investigate the transaction.",
    question: "Has the issue been resolved?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  subscription: {
    message: "Check your subscription details and account status. If your access is not reflecting correctly, our team can help.",
    question: "Is your subscription working now?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  general: {
    message: "For general questions, please check the relevant information available on InterCrack.",
    question: "Did you find your answer?",
    options: [
      { label: "Yes", next: "solved" },
      { label: "No", next: "unsolved" },
    ],
  },

  business: {
    message: "We'd be happy to hear about your business requirements and collaboration ideas.",
    question: "Would you like our team to contact you?",
    options: [
      { label: "Yes, contact me", next: "unsolved" },
      { label: "Not right now", next: "start" },
    ],
  },

  suggestion: {
    message: "We appreciate your feedback! Please share your suggestions with our team.",
    question: "Would you like to submit your feedback?",
    options: [
      { label: "Yes, submit feedback", next: "unsolved" },
      { label: "Not right now", next: "start" },
    ],
  },

  solved: {
    message: "Amazing! 🎉 Glad we could help you. Is there anything else you'd like assistance with?",
    options: [
      { label: "Yes, another question", next: "start" },
      { label: "No, I'm all good!", next: "end" },
    ],
  },

  unsolved: {
    message: "Sorry we couldn't resolve your issue. Don't worry! Our support team can help you personally.",
    contact: true,
  },

  end: {
    message: "Thanks for using InterCrack Support! Have a wonderful day. 💙",
    restart: true,
  },
};

export default function SupportBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState("start");
  const [history, setHistory] = useState([]);
  const [messages, setMessages] = useState([]);

  const node = supportFlow[current];

  const chooseOption = (option) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: option.label },
      { type: "bot", text: supportFlow[option.next].message },
    ]);

    setHistory((prev) => [...prev, current]);
    setCurrent(option.next);
  };

  const goBack = () => {
    if (!history.length) return;

    const previous = history[history.length - 1];

    setHistory((prev) => prev.slice(0, -1));
    setCurrent(previous);
    setMessages((prev) => prev.slice(0, -2));
  };

  const restart = () => {
    setCurrent("start");
    setHistory([]);
    setMessages([]);
  };

  return (
    <>
      {/* Floating launcher */}
      
<button
  onClick={() => setIsOpen(!isOpen)}
  aria-label={isOpen ? "Close CrackMate" : "Open CrackMate support"}
  className="group fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-r from-[#2864F0] via-[#3565F5] to-[#1749D4] px-4 py-3 text-white shadow-[0_10px_35px_rgba(40,100,240,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(40,100,240,0.45)] active:scale-95"
>
  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 shadow-inner ring-1 ring-white/20">
    {isOpen ? (
      <X size={23} />
    ) : (
      <Bot size={25} className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
    )}

    {!isOpen && (
      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 rounded-full border-2 border-[#2864F0] bg-green-400" />
    )}
  </span>

  <span className="flex flex-col items-start">
    <span className="text-[14px] font-extrabold tracking-wide">
      CrackMate
    </span>
    <span className="mt-0.5 text-[10px] font-medium text-blue-100">
      Your support companion
    </span>
  </span>

  {!isOpen && (
    <span className="ml-1 flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-all group-hover:translate-x-1">
      <ArrowUpRight size={17} />
    </span>
  )}
</button>


      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[999] flex h-[min(650px,calc(100svh-130px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.2)] animate-in slide-in-from-bottom-4 duration-300">

          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#2864F0] to-[#1749D4] px-5 py-4 text-white">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <Bot size={24} />
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  InterCrack Assistant
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-blue-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Interactive Support
                </div>
              </div>
            </div>

            <button
              onClick={restart}
              aria-label="Restart conversation"
              className="rounded-lg p-2 transition hover:bg-white/15"
            >
              <RotateCcw size={17} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-[#F8FAFC] p-4">

            {/* Welcome message */}
            <div className="flex items-start gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#2864F0]">
                <Bot size={18} />
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-slate-100 bg-white p-3.5 shadow-sm">
                <p className="text-[13px] leading-6 text-slate-700">
                  {supportFlow.start.message}
                </p>
              </div>
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  message.type === "user" ? "justify-end" : ""
                }`}
              >
                {message.type === "bot" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#2864F0]">
                    <Bot size={18} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-[13px] leading-6 ${
                    message.type === "user"
                      ? "rounded-tr-sm bg-[#2864F0] text-white"
                      : "rounded-tl-sm border border-slate-100 bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Current response */}
            {current !== "start" && (
              <div className="flex items-start gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#2864F0]">
                  <Bot size={18} />
                </div>

                <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-slate-100 bg-white p-3.5 shadow-sm">
                  {node.answer && (
                    <ul className="space-y-2 text-[12px] leading-5 text-slate-600">
                      {node.answer.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="font-bold text-[#2864F0]">
                            {i + 1}.
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {node.question && (
                    <p className="mt-3 text-[13px] font-semibold text-slate-800">
                      {node.question}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Current options */}
            {node.options && (
              <div className="space-y-2 pl-10">
                {node.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => chooseOption(option)}
                    className="group flex w-full items-center justify-between gap-2 rounded-xl border border-blue-100 bg-white px-3.5 py-3 text-left text-[12px] font-semibold text-slate-700 transition hover:border-[#2864F0] hover:bg-blue-50 hover:text-[#2864F0]"
                  >
                    {option.label}
                    <ChevronRight
                      size={16}
                      className="shrink-0 transition-transform group-hover:translate-x-1"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Contact fallback */}
            {node.contact && (
              <div className="ml-10 rounded-xl border border-blue-100 bg-blue-50 p-3.5">
                <p className="mb-3 text-xs leading-5 text-slate-600">
                  Connect with our support team for personalized assistance.
                </p>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#2864F0] px-4 py-3 text-xs font-bold text-white transition hover:bg-blue-700"
                >
                  Contact Support
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            )}

            {node.restart && (
              <button
                onClick={restart}
                className="ml-10 flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-3 text-xs font-bold text-[#2864F0] hover:bg-blue-50"
              >
                <RotateCcw size={14} />
                Start a new conversation
              </button>
            )}

          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-slate-100 bg-white px-4 py-3">
            <button
              onClick={goBack}
              disabled={!history.length}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition hover:text-[#2864F0] disabled:opacity-30"
            >
              <ChevronLeft size={15} />
              Go back
            </button>

            <span className="text-[10px] text-slate-400">
              Powered by InterCrack
            </span>

            <button
              onClick={restart}
              className="text-xs font-semibold text-[#2864F0] hover:underline"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
