
"use client";

import { useState } from "react";
import {
  Plus, Search, ChevronDown, ChevronRight, ChevronLeft,
  MoreHorizontal, MessageSquare, GitBranch, Eye, Save,
  Send, Trash2, Copy, GripVertical, Bot, X,
  Check, ArrowUpRight, Settings2, Sparkles, CircleHelp,
  PanelRightClose, PanelRightOpen, MousePointer2
} from "lucide-react";

const initialNodes = [
  {
    id: "start",
    title: "Welcome Message",
    type: "question",
    message: "Hey there! Welcome to InterCrack. How can I help you today?",
    answer: [],
    question: "",
    options: [
      { id: "o1", label: "Account & Login", next: "account" },
      { id: "o2", label: "Interview Preparation", next: "interview" },
      { id: "o3", label: "Resume Builder", next: "resume" },
      { id: "o4", label: "Technical Issues", next: "technical" },
    ],
  },
  {
    id: "account",
    title: "Account & Login",
    type: "question",
    message: "Sure! What issue are you facing with your account?",
    answer: [],
    question: "",
    options: [
      { id: "o5", label: "Unable to login", next: "" },
      { id: "o6", label: "Forgot password", next: "" },
      { id: "o7", label: "OTP not received", next: "" },
    ],
  },
  {
    id: "interview",
    title: "Interview Preparation",
    type: "question",
    message: "Let's help you with your interview preparation.",
    answer: [],
    question: "",
    options: [],
  },
  {
    id: "resume",
    title: "Resume Builder",
    type: "question",
    message: "What would you like help with in Resume Builder?",
    answer: [],
    question: "",
    options: [],
  },
  {
    id: "technical",
    title: "Technical Issues",
    type: "question",
    message: "Let's troubleshoot your issue.",
    answer: [],
    question: "",
    options: [],
  },
];

const typeStyles = {
  question: "bg-blue-50 text-blue-600",
  solution: "bg-emerald-50 text-emerald-600",
  contact: "bg-orange-50 text-orange-600",
  end: "bg-slate-100 text-slate-600",
};

export default function SupportStudio() {
  const [nodes, setNodes] = useState(initialNodes);
  const [selectedId, setSelectedId] = useState("start");
  const [activeTab, setActiveTab] = useState("editor");
  const [search, setSearch] = useState("");
  const [preview, setPreview] = useState(false);
  const [showProperties, setShowProperties] = useState(true);
  const [published, setPublished] = useState(false);
  const [previewNode, setPreviewNode] = useState("start");
  const [previewHistory, setPreviewHistory] = useState([]);

  const selected = nodes.find(n => n.id === selectedId);

  const updateNode = (key, value) => {
    setNodes(prev => prev.map(n =>
      n.id === selectedId ? { ...n, [key]: value } : n
    ));
    setPublished(false);
  };

  const addNode = () => {
    const id = `node_${Date.now()}`;
    const newNode = {
      id,
      title: "New Question",
      type: "question",
      message: "",
      answer: [],
      question: "",
      options: [],
    };

    setNodes(prev => [...prev, newNode]);
    setSelectedId(id);
    setActiveTab("editor");
    setPublished(false);
  };

  const addOption = () => {
    if (!selected) return;

    updateNode("options", [
      ...selected.options,
      {
        id: `opt_${Date.now()}`,
        label: "New option",
        next: "",
      },
    ]);
  };

  const updateOption = (optionId, key, value) => {
    updateNode(
      "options",
      selected.options.map(o =>
        o.id === optionId ? { ...o, [key]: value } : o
      )
    );
  };

  const deleteOption = (optionId) => {
    updateNode(
      "options",
      selected.options.filter(o => o.id !== optionId)
    );
  };

  const deleteNode = () => {
    if (selectedId === "start") return;

    setNodes(prev => prev.map(n => ({
      ...n,
      options: n.options.map(o =>
        o.next === selectedId ? { ...o, next: "" } : o
      )
    })).filter(n => n.id !== selectedId));

    setSelectedId("start");
  };

  const startPreview = () => {
    setPreviewNode("start");
    setPreviewHistory([]);
    setPreview(true);
  };

  const previewChoose = (next) => {
    if (!next) return;
    setPreviewHistory(prev => [...prev, previewNode]);
    setPreviewNode(next);
  };

  const filteredNodes = nodes.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const typeLabel = (type) => ({
    question: "Question",
    solution: "Solution",
    contact: "Contact form",
    end: "End conversation",
  }[type]);

  return (
    <div className="min-h-screen bg-[#F5F7FC] text-[#111827]">

      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="flex min-h-[68px] flex-wrap items-center justify-between gap-3 px-4 py-3 lg:px-7">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2864F0] text-white shadow-lg shadow-blue-500/20">
              <Bot size={23}/>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold">
                  CrackMate Studio
                </h1>
                <span className="hidden rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold text-[#2864F0] sm:block">
                  SUPPORT BUILDER
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                InterCrack / Support Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-500 sm:flex">
              <span className={`h-2 w-2 rounded-full ${published ? "bg-green-500" : "bg-amber-400"}`}/>
              {published ? "Published" : "Draft changes"}
            </div>

            <button
              onClick={startPreview}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <Eye size={15}/>
              <span className="hidden sm:block">Preview</span>
            </button>

            <button
              onClick={() => setPublished(false)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <Save size={15}/>
              <span className="hidden sm:block">Save Draft</span>
            </button>

            <button
              onClick={() => setPublished(true)}
              className="flex items-center gap-2 rounded-xl bg-[#2864F0] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
            >
              <Send size={14}/>
              Publish
            </button>
          </div>
        </div>
      </header>

      {/* WORKSPACE */}
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-4 p-4 lg:grid-cols-[245px_minmax(0,1fr)] lg:p-5">

        {/* LEFT SIDEBAR */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-4">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-extrabold">Conversation Flow</h2>
              <p className="mt-1 text-[11px] text-slate-400">
                Manage your bot questions
              </p>
            </div>
            <span className="rounded-lg bg-blue-50 px-2 py-1 text-xs font-bold text-[#2864F0]">
              {nodes.length}
            </span>
          </div>

          <div className="relative mb-4">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-2.5 pl-9 pr-3 text-xs outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              All Nodes
            </span>
            <button
              onClick={addNode}
              className="flex items-center gap-1 text-xs font-bold text-[#2864F0] hover:text-blue-800"
            >
              <Plus size={14}/> Add
            </button>
          </div>

          <div className="space-y-1">
            {filteredNodes.map((node, index) => (
              <button
                key={node.id}
                onClick={() => {
                  setSelectedId(node.id);
                  setActiveTab("editor");
                }}
                className={`group flex w-full items-center gap-2 rounded-xl px-3 py-3 text-left transition ${
                  selectedId === node.id
                    ? "bg-blue-50 ring-1 ring-blue-100"
                    : "hover:bg-slate-50"
                }`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  selectedId === node.id
                    ? "bg-[#2864F0] text-white"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  {node.id === "start" ? <Sparkles size={16}/> : <MessageSquare size={15}/>}
                </div>

                <div className="min-w-0 flex-1">
                  <p className={`truncate text-xs font-bold ${
                    selectedId === node.id ? "text-[#2864F0]" : "text-slate-700"
                  }`}>
                    {node.title}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    {node.options.length} options
                  </p>
                </div>

                <ChevronRight size={14} className="shrink-0 text-slate-300"/>
              </button>
            ))}
          </div>

          <button
            onClick={addNode}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-3 text-xs font-bold text-[#2864F0] hover:bg-blue-50"
          >
            <Plus size={16}/>
            Create new node
          </button>

          <div className="mt-7 border-t border-slate-100 pt-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Flow Overview
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Total questions</span>
                <b>{nodes.filter(n => n.type === "question").length}</b>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Total options</span>
                <b>{nodes.reduce((sum,n) => sum+n.options.length,0)}</b>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Connected paths</span>
                <b>{nodes.reduce((sum,n) => sum+n.options.filter(o=>o.next).length,0)}</b>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN EDITOR */}
        <div className="min-w-0 space-y-4">

          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Support</span>
              <ChevronRight size={13}/>
              <span>Flow Builder</span>
              <ChevronRight size={13}/>
              <span className="font-bold text-slate-800">
                {selected?.title}
              </span>
            </div>

            <button
              onClick={() => setShowProperties(!showProperties)}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 lg:hidden"
            >
              <Settings2 size={14}/> Editor
            </button>
          </div>

          <div className={`grid gap-4 ${showProperties ? "xl:grid-cols-[minmax(0,1fr)_350px]" : "grid-cols-1"}`}>

            {/* FLOW CANVAS */}
            <section className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">

              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:px-5">
                <div>
                  <h2 className="text-sm font-extrabold">Flow Structure</h2>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Select a node to edit its content and connections.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={addNode} className="flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-[#2864F0] hover:bg-blue-100">
                    <Plus size={14}/> Add Node
                  </button>
                </div>
              </div>

              <div
                className="min-h-[600px] overflow-auto p-5 sm:p-8"
                style={{
                  backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              >
                <div className="mx-auto flex max-w-[520px] flex-col items-center gap-0">

                  {/* Start node */}
                  <button
                    onClick={() => setSelectedId("start")}
                    className={`w-full rounded-2xl border bg-white p-4 text-left shadow-sm transition hover:shadow-md ${
                      selectedId === "start" ? "border-[#2864F0] ring-4 ring-blue-500/10" : "border-slate-200"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider text-green-600">
                        <Sparkles size={14}/> Start Node
                      </span>
                      <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-bold text-green-600">ENTRY</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800">{nodes.find(n=>n.id==="start")?.title}</p>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{nodes.find(n=>n.id==="start")?.message}</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400">
                      <GitBranch size={13}/> {nodes.find(n=>n.id==="start")?.options.length} outgoing options
                    </div>
                  </button>

                  <div className="h-8 w-px border-l-2 border-dashed border-blue-300"/>

                  {/* All other nodes */}
                  {nodes.filter(n=>n.id!=="start").map((node,index) => (
                    <div key={node.id} className="flex w-full flex-col items-center">
                      <button
                        onClick={() => setSelectedId(node.id)}
                        className={`w-full rounded-2xl border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                          selectedId === node.id ? "border-[#2864F0] ring-4 ring-blue-500/10" : "border-slate-200"
                        }`}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            NODE {String(index+2).padStart(2,"0")}
                          </span>
                          <span className={`rounded-md px-2 py-1 text-[10px] font-bold ${typeStyles[node.type]}`}>
                            {typeLabel(node.type)}
                          </span>
                        </div>

                        <p className="text-sm font-bold text-slate-800">{node.title}</p>
                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{node.message || "No message configured yet."}</p>

                        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-3 text-[10px] text-slate-400">
                          <span className="flex items-center gap-1"><GitBranch size={12}/>{node.options.length} options</span>
                          <span className="flex items-center gap-1"><ArrowUpRight size={12}/>{node.options.filter(o=>o.next).length} connected</span>
                        </div>
                      </button>

                      {index !== nodes.filter(n=>n.id!=="start").length-1 && (
                        <div className="h-6 w-px border-l-2 border-dashed border-slate-300"/>
                      )}
                    </div>
                  ))}

                  <button
                    onClick={addNode}
                    className="mt-5 flex items-center gap-2 rounded-xl border border-dashed border-blue-300 bg-white px-5 py-3 text-xs font-bold text-[#2864F0] shadow-sm hover:bg-blue-50"
                  >
                    <Plus size={15}/> Add another node
                  </button>

                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-4 py-3 sm:px-5">
                <span className="text-[10px] text-slate-400">
                  <MousePointer2 size={12} className="mr-1 inline"/> Select any node to edit.
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  {nodes.length} nodes in this flow
                </span>
              </div>
            </section>

            {/* RIGHT EDITOR PANEL */}
            {showProperties && (
              <aside className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">

                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <div>
                    <h2 className="text-sm font-extrabold">Node Editor</h2>
                    <p className="mt-1 text-[11px] text-slate-400">Configure selected node</p>
                  </div>
                  <Settings2 size={18} className="text-slate-400"/>
                </div>

                {selected && (
                  <div className="max-h-[850px] space-y-5 overflow-y-auto p-5">

                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-700">Node Title</label>
                      <input
                        value={selected.title}
                        onChange={e=>updateNode("title",e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-3.5 py-3 text-xs outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-700">Node Type</label>
                      <select
                        value={selected.type}
                        onChange={e=>updateNode("type",e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-3.5 py-3 text-xs outline-none focus:border-blue-500"
                      >
                        <option value="question">Question</option>
                        <option value="solution">Solution</option>
                        <option value="contact">Contact Form</option>
                        <option value="end">End Conversation</option>
                      </select>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-700">Bot Message</label>
                        <span className="text-[10px] text-slate-400">Displayed to user</span>
                      </div>
                      <textarea
                        rows={4}
                        value={selected.message}
                        onChange={e=>updateNode("message",e.target.value)}
                        placeholder="Write your bot message..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 text-xs leading-6 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-700">Solution Content</label>
                        <button
                          onClick={()=>updateNode("answer",[...selected.answer,""])}
                          className="text-[11px] font-bold text-[#2864F0]"
                        >
                          + Add point
                        </button>
                      </div>

                      {selected.answer.map((a,i)=>(
                        <div key={i} className="mb-2 flex gap-2">
                          <input
                            value={a}
                            onChange={e=>updateNode("answer",selected.answer.map((v,j)=>j===i?e.target.value:v))}
                            placeholder={`Solution point ${i+1}`}
                            className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-2.5 text-xs outline-none focus:border-blue-500"
                          />
                          <button onClick={()=>updateNode("answer",selected.answer.filter((_,j)=>j!==i))} className="text-slate-400 hover:text-red-500"><X size={15}/></button>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-700">Follow-up Question</label>
                      <input
                        value={selected.question}
                        onChange={e=>updateNode("question",e.target.value)}
                        placeholder="Was your issue resolved?"
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-3.5 py-3 text-xs outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="border-t border-slate-100 pt-5">
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <h3 className="text-xs font-extrabold">Response Options</h3>
                          <p className="mt-1 text-[10px] text-slate-400">Where should each option lead?</p>
                        </div>
                        <button
                          onClick={addOption}
                          className="flex items-center gap-1 rounded-lg bg-blue-50 px-2.5 py-2 text-[10px] font-bold text-[#2864F0] hover:bg-blue-100"
                        >
                          <Plus size={13}/> Add
                        </button>
                      </div>

                      <div className="space-y-3">
                        {selected.options.map((option,i)=>(
                          <div key={option.id} className="rounded-xl border border-slate-200 bg-[#FBFCFE] p-3">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                                <GripVertical size={13}/> OPTION {i+1}
                              </span>
                              <button onClick={()=>deleteOption(option.id)} className="text-slate-400 hover:text-red-500"><Trash2 size={14}/></button>
                            </div>

                            <input
                              value={option.label}
                              onChange={e=>updateOption(option.id,"label",e.target.value)}
                              placeholder="Option label"
                              className="mb-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none focus:border-blue-500"
                            />

                            <label className="mb-1.5 block text-[10px] font-semibold text-slate-500">Connect to node</label>
                            <select
                              value={option.next}
                              onChange={e=>updateOption(option.id,"next",e.target.value)}
                              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none focus:border-blue-500"
                            >
                              <option value="">Select destination</option>
                              {nodes.filter(n=>n.id!==selectedId).map(n=>(
                                <option key={n.id} value={n.id}>{n.title}</option>
                              ))}
                              <option value="__contact__">Contact Support</option>
                              <option value="__end__">End Conversation</option>
                            </select>
                          </div>
                        ))}

                        {!selected.options.length && (
                          <div className="rounded-xl border border-dashed border-slate-200 py-7 text-center">
                            <GitBranch size={22} className="mx-auto text-slate-300"/>
                            <p className="mt-2 text-xs font-semibold text-slate-500">No options added</p>
                            <p className="mt-1 text-[10px] text-slate-400">Add response buttons to this node.</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <button
                        disabled={selected.id==="start"}
                        onClick={deleteNode}
                        className="flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-700 disabled:opacity-30"
                      >
                        <Trash2 size={14}/> Delete Node
                      </button>

                      <span className="text-[10px] text-slate-400">
                        ID: {selected.id.slice(0,15)}
                      </span>
                    </div>

                  </div>
                )}
              </aside>
            )}
          </div>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {preview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div className="flex max-h-[90vh] w-full max-w-[420px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

            <div className="flex items-center justify-between bg-gradient-to-r from-[#2864F0] to-[#1749D4] p-5 text-white">
              <div className="flex items-center gap-3">
                <Bot size={25}/>
                <div>
                  <p className="text-sm font-bold">CrackMate Preview</p>
                  <p className="text-[10px] text-blue-100">Live flow simulation</p>
                </div>
              </div>
              <button onClick={()=>setPreview(false)}><X size={21}/></button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-[#F8FAFC] p-4">
              <div className="rounded-2xl rounded-tl-sm bg-white p-4 text-xs leading-6 text-slate-700 shadow-sm">
                {nodes.find(n=>n.id===previewNode)?.message}
              </div>

              {(nodes.find(n=>n.id===previewNode)?.answer || []).length > 0 && (
                <div className="rounded-2xl bg-white p-4 text-xs text-slate-600 shadow-sm">
                  {nodes.find(n=>n.id===previewNode).answer.map((a,i)=>(
                    <p key={i} className="mb-2">{i+1}. {a}</p>
                  ))}
                </div>
              )}

              <div className="space-y-2">
                {(nodes.find(n=>n.id===previewNode)?.options || []).map(o=>(
                  <button
                    key={o.id}
                    onClick={()=> {
                      if(o.next==="__contact__") {
                        setPreviewNode("__contact__");
                      } else if(o.next==="__end__") {
                        setPreviewNode("__end__");
                      } else if(nodes.some(n=>n.id===o.next)) {
                        previewChoose(o.next);
                      }
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-blue-100 bg-white px-4 py-3 text-left text-xs font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50"
                  >
                    {o.label}<ChevronRight size={15} className="text-[#2864F0]"/>
                  </button>
                ))}
              </div>

              {previewNode==="__contact__" && (
                <div className="rounded-xl bg-blue-50 p-4 text-xs text-blue-800">
                  Contact Support → /contact
                </div>
              )}

              {previewNode==="__end__" && (
                <div className="rounded-xl bg-green-50 p-4 text-xs text-green-700">
                  Conversation completed successfully!
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 p-4">
              <button
                onClick={()=>{
                  if(previewHistory.length) {
                    setPreviewNode(previewHistory[previewHistory.length-1]);
                    setPreviewHistory(p=>p.slice(0,-1));
                  }
                }}
                className="text-xs font-semibold text-slate-500"
              >
                <ChevronLeft size={15} className="mr-1 inline"/> Back
              </button>
              <button
                onClick={()=>{setPreviewNode("start");setPreviewHistory([]);}}
                className="text-xs font-bold text-[#2864F0]"
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
