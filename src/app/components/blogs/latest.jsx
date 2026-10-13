"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, CalendarDays } from "lucide-react";
import { useAuth } from "@/app/context/auth.context";

export default function LatestBlogs() {
  const {
    latestBlogs = [],
    latestBlogsLoading,
    fetchLatestBlogs,
  } = useAuth();

  useEffect(() => {
    fetchLatestBlogs?.().catch((error) => {
      console.error("Latest blogs loading failed:", error);
    });
  }, []);

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              QuerLabs Journal
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Latest insights
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore practical guides, fresh ideas, and insights on
              technology, software development, and careers.
            </p>
          </div>

          <Link
            href="/Blogs"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
          >
            Explore all articles
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Loading state */}
        {latestBlogsLoading && latestBlogs.length === 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-2xl border border-slate-100"
              >
                <div className="aspect-[16/10] bg-slate-100" />
                <div className="space-y-4 p-5">
                  <div className="h-3 w-24 rounded bg-slate-100" />
                  <div className="h-5 w-full rounded bg-slate-100" />
                  <div className="h-4 w-4/5 rounded bg-slate-100" />
                  <div className="h-9 w-28 rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Latest blog cards */}
        {!latestBlogsLoading && latestBlogs.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestBlogs.slice(0, 3).map((blog) => (
              <article
                key={blog.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
              >
                {/* Cover image */}
                <Link
                  href="/Blogs"
                  aria-label={`Explore ${blog.title}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                >
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.coverAlt || blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
                      <span className="text-3xl font-bold text-blue-200">
                        Q.
                      </span>
                    </div>
                  )}

                  {blog.category && (
                    <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                      {blog.category}
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                    {blog.date && (
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {blog.date}
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={14} />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-slate-900 transition group-hover:text-blue-700">
                    <Link href="/Blogs">{blog.title}</Link>
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {blog.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5 mt-6">
                    <span className="min-w-0 truncate text-xs font-semibold text-slate-600">
                      {blog.author}
                    </span>

                    <Link
                      href="/Blogs"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                    >
                      Read More
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!latestBlogsLoading && latestBlogs.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-200 px-6 py-14 text-center">
            <h3 className="text-lg font-semibold text-slate-900">
              New articles are coming soon
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Check back soon for the latest insights from QuerLabs.
            </p>
          </div>
        )}

        {/* Bottom link */}
        <div className="mt-10 text-center">
          <Link
            href="/Blogs"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            View all articles
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
