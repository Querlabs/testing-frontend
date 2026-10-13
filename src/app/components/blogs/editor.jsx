
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { useAuth } from "@/app/context/auth.context";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  ImagePlus,
  Undo2,
  Redo2,
  Eye,
  Save,
  Send,
  FileText,
  Search,
  Settings2,
  X,
  Check,
  Clock3,
  ExternalLink,
} from "lucide-react";

const CATEGORIES = [
  "Technology",
  "Business",
  "Career",
  "Productivity",
  "Design",
  "Education",
  "Finance",
  "Other",
];

function slugify(value = "") {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

function getWordCount(html = "") {
  if (typeof document === "undefined") {
    return html.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  }

  const element = document.createElement("div");
  element.innerHTML = html;
  return (element.textContent || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function Field({ label, hint, children }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs leading-5 text-slate-400">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50";

function ToolButton({
  title,
  active = false,
  disabled = false,
  onClick,
  children,
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 transition disabled:cursor-not-allowed disabled:opacity-30 ${
        active
          ? "bg-blue-100 text-blue-700"
          : "text-slate-600 hover:bg-slate-100 hover:text-blue-700"
      }`}
    >
      {children}
    </button>
  );
}

function Toolbar({ editor }) {
  const [unused, setUnused] = useState(false);

  if (!editor) return null;

  const addLink = () => {
    const previous = editor.getAttributes("link").href || "";
    const url = window.prompt("Enter link URL", previous);

    if (url === null) return;

    if (!url.trim()) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    const safeUrl = /^(https?:\/\/|mailto:|\/|#)/i.test(url.trim())
      ? url.trim()
      : `https://${url.trim()}`;

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: safeUrl, target: "_blank", rel: "noopener noreferrer" })
      .run();
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL (https://...)");
    if (!url?.trim()) return;

    try {
      const parsed = new URL(url.trim());
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
        window.alert("Please enter a valid HTTP or HTTPS image URL.");
        return;
      }

      const alt = window.prompt("Enter descriptive image alt text") || "";

      editor
        .chain()
        .focus()
        .setImage({ src: parsed.href, alt })
        .run();
    } catch {
      window.alert("Please enter a valid image URL.");
    }
  };

  return (
    <div className="sticky top-0 z-20 flex flex-wrap items-center gap-1 border-b border-slate-200 bg-white/95 p-2 backdrop-blur">
      <ToolButton
        title="Undo"
        disabled={!editor.can().undo()}
        onClick={() => editor.chain().focus().undo().run()}
      >
        <Undo2 size={17} />
      </ToolButton>
      <ToolButton
        title="Redo"
        disabled={!editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
      >
        <Redo2 size={17} />
      </ToolButton>

      <span className="mx-1 h-6 w-px bg-slate-200" />

      <ToolButton
        title="Heading 1"
        active={editor.isActive("heading", { level: 1 })}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 size={18} />
      </ToolButton>
      <ToolButton
        title="Heading 2"
        active={editor.isActive("heading", { level: 2 })}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 size={18} />
      </ToolButton>
      <ToolButton
        title="Heading 3"
        active={editor.isActive("heading", { level: 3 })}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 size={18} />
      </ToolButton>

      <span className="mx-1 h-6 w-px bg-slate-200" />

      <ToolButton
        title="Bold"
        active={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold size={17} />
      </ToolButton>
      <ToolButton
        title="Italic"
        active={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic size={17} />
      </ToolButton>
      <ToolButton
        title="Underline"
        active={editor.isActive("underline")}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon size={17} />
      </ToolButton>

      <span className="mx-1 h-6 w-px bg-slate-200" />

      <ToolButton
        title="Bullet list"
        active={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List size={17} />
      </ToolButton>
      <ToolButton
        title="Numbered list"
        active={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered size={17} />
      </ToolButton>
      <ToolButton
        title="Blockquote"
        active={editor.isActive("blockquote")}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote size={17} />
      </ToolButton>
      <ToolButton
        title="Code block"
        active={editor.isActive("codeBlock")}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Code size={17} />
      </ToolButton>

      <span className="mx-1 h-6 w-px bg-slate-200" />

      <ToolButton title="Add link" onClick={addLink}>
        <LinkIcon size={17} />
      </ToolButton>
      <ToolButton title="Insert image by URL" onClick={addImage}>
        <ImagePlus size={17} />
      </ToolButton>

      <span className="mx-1 h-6 w-px bg-slate-200" />

      <ToolButton
        title="Align left"
        active={editor.isActive({ textAlign: "left" })}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
      >
        <AlignLeft size={17} />
      </ToolButton>
      <ToolButton
        title="Align center"
        active={editor.isActive({ textAlign: "center" })}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      >
        <AlignCenter size={17} />
      </ToolButton>
      <ToolButton
        title="Align right"
        active={editor.isActive({ textAlign: "right" })}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      >
        <AlignRight size={17} />
      </ToolButton>
    </div>
  );
}

export default function BlogEditor({
  initialData = null,
  onSave,
  onPublish,
}) {
  const {createBlog, Loading} = useAuth();
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [slugEdited, setSlugEdited] = useState(Boolean(initialData?.slug));
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || "");
  const [coverAlt, setCoverAlt] = useState(initialData?.coverAlt || "");
  const [category, setCategory] = useState(
    initialData?.category || "Technology"
  );
  const [tagsInput, setTagsInput] = useState(
    (initialData?.tags || []).join(", ")
  );
  const [author, setAuthor] = useState(initialData?.author || "");
  const [status, setStatus] = useState(initialData?.status || "draft");

  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    initialData?.metaDescription || ""
  );
  const [focusKeyword, setFocusKeyword] = useState(
    initialData?.focusKeyword || ""
  );
  const [canonicalUrl, setCanonicalUrl] = useState(
    initialData?.canonicalUrl || ""
  );

  const [showSeo, setShowSeo] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const [coverError, setCoverError] = useState(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: false,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
          class: "text-blue-600 underline underline-offset-4",
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: {
          class: "blog-content-image",
          loading: "lazy",
        },
      }),
      Placeholder.configure({
        placeholder:
          "Start with an engaging introduction. Explain the problem your reader wants to solve...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
    ],
    content: initialData?.content || "<p></p>",
    editorProps: {
      attributes: {
        class: "blog-editor-content outline-none",
        spellcheck: "true",
        "aria-label": "Blog article content",
      },
    },
  });

  useEffect(() => {
    if (!editor || !initialData?.content) return;
    if (editor.getHTML() !== initialData.content) {
      editor.commands.setContent(initialData.content);
    }
  }, [editor, initialData?.content]);

  const content = editor?.getHTML() || "";
  const wordCount = useMemo(() => getWordCount(content), [content]);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const finalMetaTitle = metaTitle.trim() || title.trim();
  const finalMetaDescription =
    metaDescription.trim() || excerpt.trim();

  const seoChecks = [
    {
      label: "SEO title length",
      ok: finalMetaTitle.length >= 30 && finalMetaTitle.length <= 60,
      detail: `${finalMetaTitle.length}/60 characters`,
    },
    {
      label: "Meta description",
      ok:
        finalMetaDescription.length >= 120 &&
        finalMetaDescription.length <= 160,
      detail: `${finalMetaDescription.length}/160 characters`,
    },
    {
      label: "Focus keyword",
      ok: Boolean(focusKeyword.trim()),
      detail: focusKeyword.trim() ? "Added" : "Not added",
    },
    {
      label: "Article content",
      ok: wordCount >= 300,
      detail: `${wordCount} words`,
    },
    {
      label: "Cover image alt text",
      ok: Boolean(coverAlt.trim()),
      detail: coverAlt.trim() ? "Added" : "Missing",
    },
  ];

  const buildPayload = useCallback(
    (nextStatus) => ({
      title: title.trim(),
      slug: slugify(slug),
      excerpt: excerpt.trim(),
      content: editor?.getHTML() || "",
      contentText: editor?.getText() || "",
      coverImage: coverImage.trim(),
      coverAlt: coverAlt.trim(),
      category,
      tags: tagsInput
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      author: author.trim(),
      status: nextStatus,
      readingTime,
      wordCount,
      seo: {
        metaTitle: finalMetaTitle,
        metaDescription: finalMetaDescription,
        focusKeyword: focusKeyword.trim(),
        canonicalUrl: canonicalUrl.trim(),
      },
      updatedAt: new Date().toISOString(),
    }),
    [
      title,
      slug,
      excerpt,
      editor,
      coverImage,
      coverAlt,
      category,
      tagsInput,
      author,
      readingTime,
      wordCount,
      finalMetaTitle,
      finalMetaDescription,
      focusKeyword,
      canonicalUrl,
    ]
  );

  async function handleSave(nextStatus) {
    if (!title.trim()) {
      setNotice("Please enter a blog title.");
      return;
    }

    if (!slugify(slug)) {
      setNotice("Please add a valid URL slug.");
      return;
    }

    if (!editor?.getText().trim()) {
      setNotice("Please write your article content.");
      return;
    }

    if (nextStatus === "published" && !author.trim()) {
      setNotice("Please add an author before publishing.");
      return;
    }

    const payload = buildPayload(nextStatus);
    setSaving(true);
    setNotice("");

    createBlog(payload);

    try {
      const handler =
        nextStatus === "published" && onPublish
          ? onPublish
          : onSave;

      if (handler) {
        await handler(payload);
      } else {
        // Local development fallback only. Connect an API before production.
        const storageKey = "blog-editor-local-drafts";
        const existing = JSON.parse(
          window.localStorage.getItem(storageKey) || "[]"
        );
        const updated = [
          payload,
          ...existing.filter((item) => item.slug !== payload.slug),
        ];
        window.localStorage.setItem(storageKey, JSON.stringify(updated));
      }

      setStatus(nextStatus);
      setNotice(
        nextStatus === "published"
          ? "Publish action completed."
          : "Draft saved successfully."
      );
    } catch (error) {
      setNotice(error?.message || "Unable to save the blog.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <style jsx global>{`
        .blog-editor-content {
          min-height: 460px;
          padding: 28px;
          color: #334155;
          font-size: 16px;
          line-height: 1.9;
          overflow-wrap: anywhere;
        }

        .blog-editor-content p {
          margin: 0 0 1.25rem;
        }

        .blog-editor-content h1 {
          margin: 2rem 0 1rem;
          font-size: 2rem;
          font-weight: 750;
          line-height: 1.2;
          letter-spacing: -0.035em;
          color: #0f172a;
        }

        .blog-editor-content h2 {
          margin: 1.8rem 0 0.8rem;
          font-size: 1.55rem;
          font-weight: 700;
          line-height: 1.3;
          color: #0f172a;
        }

        .blog-editor-content h3 {
          margin: 1.5rem 0 0.7rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
        }

        .blog-editor-content ul,
        .blog-editor-content ol {
          padding-left: 1.7rem;
          margin: 0 0 1.25rem;
        }

        .blog-editor-content ul {
          list-style: disc;
        }

        .blog-editor-content ol {
          list-style: decimal;
        }

        .blog-editor-content blockquote {
          border-left: 4px solid #2563eb;
          padding: 0.8rem 1rem;
          margin: 1.5rem 0;
          background: #eff6ff;
          border-radius: 0 10px 10px 0;
          color: #334155;
        }

        .blog-editor-content pre {
          overflow-x: auto;
          background: #0f172a;
          color: #e2e8f0;
          border-radius: 12px;
          padding: 18px;
          margin: 1.5rem 0;
          font-size: 13px;
        }

        .blog-editor-content code {
          font-family: ui-monospace, SFMono-Regular, monospace;
        }

        .blog-editor-content img {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 1.5rem auto;
          border-radius: 12px;
        }

        .blog-editor-content hr {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 2rem 0;
        }

        .blog-editor-content p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #94a3b8;
          pointer-events: none;
          height: 0;
        }

        .blog-editor-content a {
          color: #2563eb;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .blog-editor-content > *:last-child {
          margin-bottom: 0;
        }
      `}</style>

      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[72px] max-w-[1500px] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <FileText size={20} />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">
                Intercracks | Blog Studio
              </h1>
              <p className="text-xs text-slate-400">
                Create and manage your articles
              </p>
            </div>
            <span
              className={`ml-2 rounded-full px-3 py-1 text-xs font-semibold ${
                status === "published"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {status === "published" ? "Published" : "Draft"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Eye size={16} />
              Preview
            </button>

            {/* <button
              type="button"
              disabled={saving}
              onClick={() => handleSave("draft")}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 disabled:opacity-50"
            >
              <Save size={16} />
              Save draft
            </button> */}

            <button
              type="button"
              disabled={saving}
              onClick={() => handleSave("published")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/15 transition hover:bg-blue-700 disabled:opacity-50"
            >
              <Send size={15} />
              {Loading ? "Saving..." : "Publish"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-7 sm:py-9">
        {notice && (
          <div
            role="status"
            className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800"
          >
            <span>{notice}</span>
            <button
              type="button"
              aria-label="Dismiss message"
              onClick={() => setNotice("")}
            >
              <X size={16} />
            </button>
          </div>
        )}

        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main editor */}
          <section className="min-w-0 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                    Article editor
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    Your story starts here
                  </h2>
                </div>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                  Rich text
                </span>
              </div>

              <Field label="Blog title">
                <textarea
                  rows={2}
                  maxLength={160}
                  value={title}
                  onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                    if (!slugEdited) setSlug(slugify(value));
                    if (!metaTitle) setMetaTitle(value);
                  }}
                  placeholder="Write a clear, compelling headline..."
                  className="w-full resize-y border-0 bg-transparent p-0 text-3xl font-bold leading-tight tracking-tight text-slate-950 outline-none placeholder:text-slate-300 sm:text-4xl"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-400">
                  <span>Use a clear, descriptive headline.</span>
                  <span>{title.length}/160</span>
                </div>
              </Field>

              <div className="my-7 h-px bg-slate-100" />

              <Field
                label="Short description / excerpt"
                hint="A concise summary used in blog cards, previews and social shares."
              >
                <textarea
                  rows={3}
                  maxLength={300}
                  value={excerpt}
                  onChange={(e) => {
                    setExcerpt(e.target.value);
                    if (!metaDescription) setMetaDescription(e.target.value);
                  }}
                  placeholder="Explain what readers will learn from this article..."
                  className={`${inputClass} resize-y`}
                />
                <div className="text-right text-xs text-slate-400">
                  {excerpt.length}/300
                </div>
              </Field>

              <div className="mt-7 overflow-hidden rounded-xl border border-slate-200">
                <Toolbar editor={editor} />
                <EditorContent editor={editor} />
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span>{wordCount} words</span>
                    <span className="flex items-center gap-1">
                      <Clock3 size={13} />
                      {readingTime} min read
                    </span>
                  </div>
                  <span>Changes remain in the editor until saved.</span>
                </div>
              </div>
            </div>

            {/* Featured image */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ImagePlus size={19} />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">Cover image</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Paste an externally hosted image URL.
                  </p>
                </div>
              </div>

              <Field
                label="Image URL"
                hint="Use a stable HTTPS image URL. The image host must allow public access."
              >
                <input
                  type="url"
                  value={coverImage}
                  onChange={(e) => {
                    setCoverImage(e.target.value);
                    setCoverError(false);
                  }}
                  placeholder="https://example.com/images/article-cover.jpg"
                  className={inputClass}
                />
              </Field>

              {coverImage && !coverError && (
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <img
                    src={coverImage}
                    alt={coverAlt || "Blog cover preview"}
                    onError={() => setCoverError(true)}
                    onLoad={() => setCoverError(false)}
                    className="max-h-[340px] w-full object-cover"
                  />
                </div>
              )}

              {coverError && (
                <p className="mt-3 text-sm text-red-600">
                  Image could not be loaded. Check the URL and access permissions.
                </p>
              )}

              <div className="mt-5">
                <Field
                  label="Image alt text"
                  hint="Describe what the image shows for accessibility and image SEO."
                >
                  <input
                    value={coverAlt}
                    onChange={(e) => setCoverAlt(e.target.value)}
                    maxLength={200}
                    placeholder="e.g. Developer working on a modern web application"
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            {/* SEO */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setShowSeo((previous) => !previous)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Search size={19} />
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900">
                      Search engine optimization
                    </h2>
                    <p className="mt-1 text-xs text-slate-400">
                      Metadata and search result preview
                    </p>
                  </div>
                </div>
                <Settings2
                  size={19}
                  className={`text-slate-400 transition ${
                    showSeo ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>

              {showSeo && (
                <div className="space-y-6 border-t border-slate-100 p-5 sm:p-7">
                  <Field
                    label="SEO title"
                    hint="Aim for approximately 50–60 characters. This is a guideline, not a ranking guarantee."
                  >
                    <input
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      maxLength={100}
                      placeholder="Search-friendly page title"
                      className={inputClass}
                    />
                    <div className="text-right text-xs text-slate-400">
                      {metaTitle.length}/60 recommended
                    </div>
                  </Field>

                  <Field
                    label="Meta description"
                    hint="Write a useful, unique summary. Search engines may choose another snippet."
                  >
                    <textarea
                      rows={3}
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      maxLength={200}
                      placeholder="Summarize the main value of your article..."
                      className={`${inputClass} resize-y`}
                    />
                    <div className="text-right text-xs text-slate-400">
                      {metaDescription.length}/160 recommended
                    </div>
                  </Field>

                  <Field
                    label="Focus keyword"
                    hint="Use a natural, relevant search phrase. Avoid keyword stuffing."
                  >
                    <input
                      value={focusKeyword}
                      onChange={(e) => setFocusKeyword(e.target.value)}
                      placeholder="e.g. modern web development"
                      className={inputClass}
                    />
                  </Field>

                  <Field
                    label="Canonical URL"
                    hint="Optional. Use this when this article has a preferred public URL."
                  >
                    <input
                      type="url"
                      value={canonicalUrl}
                      onChange={(e) => setCanonicalUrl(e.target.value)}
                      placeholder="https://yourdomain.com/blog/article-slug"
                      className={inputClass}
                    />
                  </Field>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Search preview
                    </p>
                    <p className="break-all text-lg font-medium leading-snug text-blue-700">
                      {finalMetaTitle || "Your SEO title will appear here"}
                    </p>
                    <p className="mt-1 break-all text-xs text-emerald-700">
                      {canonicalUrl ||
                        `https://yourdomain.com/blog/${slugify(slug) || "your-article"}`}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {finalMetaDescription ||
                        "Your meta description preview will appear here."}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {seoChecks.map((check) => (
                      <div
                        key={check.label}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="flex items-center gap-2 text-slate-600">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              check.ok
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {check.ok ? <Check size={12} /> : <X size={12} />}
                          </span>
                          {check.label}
                        </span>
                        <span className="text-xs text-slate-400">
                          {check.detail}
                        </span>
                      </div>
                    ))}
                    <p className="pt-1 text-xs leading-5 text-slate-400">
                      These are editorial checks, not a guarantee of rankings.
                      A 300-word count is a basic content check, not an SEO
                      requirement.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Settings sidebar */}
          <aside className="space-y-5 xl:sticky xl:top-[96px]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-bold text-slate-900">Publishing details</h2>
              <p className="mt-1 text-xs text-slate-400">
                Organize your article before publishing.
              </p>

              <div className="mt-6 space-y-5">
                <Field label="URL slug">
                  <div className="flex overflow-hidden rounded-xl border border-slate-200 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50">
                    <span className="flex items-center border-r border-slate-200 bg-slate-50 px-3 text-xs text-slate-400">
                      /blog/
                    </span>
                    <input
                      value={slug}
                      onChange={(e) => {
                        setSlug(e.target.value);
                        setSlugEdited(true);
                      }}
                      onBlur={() => setSlug(slugify(slug))}
                      placeholder="article-slug"
                      className="min-w-0 flex-1 px-3 py-3 text-sm outline-none"
                    />
                  </div>
                </Field>

                <Field label="Category">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputClass}
                  >
                    {CATEGORIES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Tags"
                  hint="Separate tags with commas."
                >
                  <input
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="AI, development, guides"
                    className={inputClass}
                  />
                </Field>

                <Field label="Author">
                  <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author name"
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-bold text-slate-900">Article overview</h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Words</span>
                  <span className="text-sm font-semibold text-slate-800">
                    {wordCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Reading time</span>
                  <span className="text-sm font-semibold text-slate-800">
                    {readingTime} min
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Category</span>
                  <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                    {category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Tags</span>
                  <span className="text-sm font-semibold text-slate-800">
                    {
                      tagsInput
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter(Boolean).length
                    }
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
                  <Clock3 size={16} />
                  Before publishing
                </div>
                <p className="mt-2 text-xs leading-5 text-blue-700/80">
                  Check your title, article links, image rights, alt text,
                  metadata, and spelling. Preview the article before publishing.
                </p>
              </div>
            </div>

            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Eye size={16} />
                Preview article
              </button>
              {/* <button
                type="button"
                disabled={saving}
                onClick={() => handleSave("draft")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
              >
                <Save size={16} />
                Save draft
              </button> */}
            </div>
          </aside>
        </div>
      </div>

      {/* Preview modal */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setShowPreview(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Article preview"
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Article preview
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Preview of your current editor content
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                aria-label="Close preview"
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <article className="mx-auto max-w-3xl px-5 py-8 sm:px-10 sm:py-12">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {category}
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                {title || "Your blog title"}
              </h1>
              {excerpt && (
                <p className="mt-5 text-lg leading-8 text-slate-500">
                  {excerpt}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-slate-100 py-4 text-xs text-slate-500">
                {author && <span>By {author}</span>}
                <span>{wordCount} words</span>
                <span>{readingTime} min read</span>
              </div>

              {coverImage && !coverError && (
                <img
                  src={coverImage}
                  alt={coverAlt}
                  className="mt-8 max-h-[440px] w-full rounded-xl object-cover"
                />
              )}

              <div
                className="blog-editor-content mt-8 !min-h-0 !p-0"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </article>
          </div>
        </div>
      )}
    </main>
  );
}
