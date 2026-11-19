
"use client";
import { useAuth } from "@/app/context/auth.context";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Mail,
  Clock3,
  Headphones,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

const categories = [
  "General Inquiry",
  "Technical Support",
  "Account Related",
  "Interview Preparation",
  "Payment & Subscription",
  "Feedback & Suggestions",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });
  const { submitContactQuery, contactLoading } = useAuth();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");

            const response = await submitContactQuery(form);

            if (response.success) {
                setSuccess(true);

                console.log("Ticket ID:", response.data.ticketId);

                setForm({
                    name: "",
                    email: "",
                    category: "",
                    subject: "",
                    message: "",
                });
            }

        } catch (error) {
            setError(error.message);
        }
    };

  const input =
    "w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[13px] text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#2864F0] focus:bg-white focus:ring-4 focus:ring-blue-500/10";

  return (
    <main className="min-h-[calc(100svh-110px)] bg-[#F5F7FC] text-[#111827]">

      <section className="relative flex min-h-[calc(100svh-110px)] items-center overflow-hidden px-4 py-5 sm:px-6 lg:px-10">

        {/* Background effects */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1320px]">

          {/* Top heading */}
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2864F0]">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                INTERCRACK SUPPORT CENTER
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                How can we help <span className="text-[#3565F5]">you?</span>
              </h1>
            </div>

            <p className="hidden max-w-xs text-right text-xs leading-6 text-slate-500 md:block">
              Questions, ideas or feedback?
              <br />
              We are always happy to hear from you.
            </p>
          </div>

          {/* Main composition */}
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_25px_80px_rgba(30,64,175,0.09)] lg:grid-cols-[0.94fr_1.06fr]">

            {/* LEFT BLUE PANEL */}
            <div className="relative flex min-h-[570px] flex-col justify-between overflow-hidden bg-[#1749D4] p-7 text-white sm:p-10 lg:p-11">

              {/* Decorative gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2464F5] via-[#1749D4] to-[#102A82]" />

              <div className="absolute -right-32 top-12 h-80 w-80 rounded-full border border-white/10" />
              <div className="absolute -right-20 top-24 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-8 top-40 h-40 w-40 rounded-full border border-white/10" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-300/20 blur-[80px]" />

              <div className="relative z-10">

                <div className="flex items-center gap-2 text-xs font-semibold text-blue-100">
                  <Sparkles size={15} />
                  HERE TO MAKE THINGS EASIER
                </div>

                <h2 className="mt-9 max-w-lg text-[43px] font-extrabold leading-[1.08] tracking-tight sm:text-5xl xl:text-[58px]">
                  Every question
                  <br />
                  deserves an
                  <br />
                  <span className="text-blue-200">
                    answer.
                  </span>
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/90">
                  Whether you're facing an issue, exploring
                  our platform, or simply have something to
                  share, we're just a message away.
                </p>

                {/* Support cards */}
                <div className="mt-9 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                      <MessageCircle size={18} />
                    </div>
                    <p className="text-sm font-bold">We're listening</p>
                    <p className="mt-1 text-[11px] leading-5 text-blue-100">
                      Every query matters.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                      <Clock3 size={18} />
                    </div>
                    <p className="text-sm font-bold">Quick response</p>
                    <p className="mt-1 text-[11px] leading-5 text-blue-100">
                      Within 24–48 business hours.
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom decoration */}
              <div className="relative z-10 mt-9 flex items-center justify-between border-t border-white/20 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                    <Headphones size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">InterCrack Team</p>
                    <p className="mt-0.5 text-[10px] text-blue-100">
                      Always happy to help
                    </p>
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="flex flex-col justify-center bg-white p-6 sm:p-9 lg:p-10 xl:p-12">

              {success ? (
                <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-[#2864F0]">
                    <CheckCircle2 size={42} />
                  </div>

                  <h2 className="mt-7 text-3xl font-extrabold">
                    Message received!
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                    Thank you for reaching out to InterCrack.
                    Our team will review your query and get
                    back to you soon.
                  </p>

                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-7 rounded-xl bg-[#2864F0] px-7 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2864F0]">
                      <Mail size={21} />
                    </div>

                    <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      Send us a message
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Tell us a little about what you need.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-bold text-slate-700">
                          Full Name *
                        </label>
                        <input
                          required
                          name="name"
                          value={form.name}
                          onChange={update}
                          placeholder="Your full name"
                          className={input}
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold text-slate-700">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={update}
                          placeholder="you@example.com"
                          className={input}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-700">
                        What can we help you with? *
                      </label>

                      <div className="relative">
                        <select
                          required
                          name="category"
                          value={form.category}
                          onChange={update}
                          className={`${input} appearance-none`}
                        >
                          <option value="">Choose a category</option>
                          {categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>

                        <ChevronDown
                          size={17}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-700">
                        Subject *
                      </label>
                      <input
                        required
                        name="subject"
                        value={form.subject}
                        onChange={update}
                        placeholder="What's your query about?"
                        className={input}
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-700">
                          Your Message *
                        </label>
                        <span className="text-[11px] text-slate-400">
                          {form.message.length}/1000
                        </span>
                      </div>

                      <textarea
                        required
                        minLength={10}
                        maxLength={1000}
                        rows={3}
                        name="message"
                        value={form.message}
                        onChange={update}
                        placeholder="Describe your question or concern..."
                        className={`${input} resize-none`}
                      />
                    </div>

                    {error && (
                      <p className="text-xs text-red-600">{error}</p>
                    )}

                    
                    <button
                        type="submit"
                        disabled={contactLoading}
                        className="cursor-pointer group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#2864F0] to-[#4778FF] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(40,100,240,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(40,100,240,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                        {contactLoading ? (
                            <>
                                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                <span>Submitting your query...</span>
                            </>
                        ) : (
                            <>
                                <span>Submit Your Query</span>

                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/25">
                                    <ArrowUpRight size={17} />
                                </span>
                            </>
                        )}
                    </button>


                    <p className="text-center text-[11px] text-slate-400">
                      Your information is safe with us. We only use it
                      to respond to your query.
                    </p>

                  </form>
                </>
              )}
            </div>

          </div>

          {/* Small bottom note */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <span>Made for better conversations.</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="font-semibold text-[#2864F0]">InterCrack</span>
          </div>

        </div>
      </section>
    </main>
  );
}
