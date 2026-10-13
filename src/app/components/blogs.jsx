// "use client";

// import { useMemo, useState } from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bookmark,
//   CalendarDays,
//   Check,
//   ChevronRight,
//   Clock3,
//   Search,
//   X,
// } from "lucide-react";
// import { useAuth } from "../context/auth.context";
// const blogsData = [
//   {
//     id: 1,
//     category: "Technology",
//     title: "How Artificial Intelligence Is Reshaping Modern Businesses",
//     description:
//       "Explore how AI is transforming workflows, changing business models, and creating new opportunities for the next generation.",
//     author: "Editorial Team",
//     date: "12 October 2026",
//     readTime: "8 min read",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=90",
//     featured: true,
//     content: [
//       "Artificial intelligence is changing how modern businesses operate. From automating repetitive workflows to supporting complex decisions, AI is becoming a practical tool for teams across industries.",
//       "The opportunity is not just to automate existing tasks. It is to rethink how work gets done, improve customer experiences, and help people focus on problems that require creativity and judgment.",
//       "Organizations that combine thoughtful AI adoption with strong fundamentals, reliable data, and human oversight will be better positioned to adapt to the future.",
//     ],
//   },
//   {
//     id: 2,
//     category: "Career",
//     title: "Building a Career That Grows With Technology",
//     description:
//       "A practical guide to developing relevant skills, building meaningful projects, and navigating a changing professional landscape.",
//     author: "Research Desk",
//     date: "10 October 2026",
//     readTime: "6 min read",
//     image:
//       "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
//     content: [
//       "A sustainable career is built on more than knowing the latest tools. Strong fundamentals, communication, and the ability to learn consistently make a real difference.",
//       "Choose projects that demonstrate how you solve real problems. A clear portfolio often communicates your capabilities more effectively than a long list of technologies.",
//       "Keep learning, seek useful feedback, and revisit your goals as your interests and the industry evolve.",
//     ],
//   },
//   {
//     id: 3,
//     category: "Productivity",
//     title: "The Art of Doing Focused Work in a Distracted World",
//     description:
//       "Small changes to your daily routine can make it easier to protect your attention and do your most important work.",
//     author: "Aarav Mehta",
//     date: "08 October 2026",
//     readTime: "5 min read",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
//     content: [
//       "Focused work begins with deciding what deserves your attention. Without clear priorities, even a busy day can end without meaningful progress.",
//       "Set aside uninterrupted blocks for demanding tasks, reduce unnecessary notifications, and make the next action obvious before you begin.",
//       "Consistency matters more than a perfect routine. Build a workflow you can maintain on ordinary days, not just your most productive ones.",
//     ],
//   },
//   {
//     id: 4,
//     category: "Business",
//     title: "From a Promising Idea to a Product People Love",
//     description:
//       "Understand the essential steps behind validating an idea, learning from users, and building something genuinely useful.",
//     author: "Editorial Team",
//     date: "05 October 2026",
//     readTime: "7 min read",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
//     content: [
//       "A promising idea is only the beginning. Successful products solve a specific problem for a clearly understood audience.",
//       "Talk to potential users, test your assumptions, and build the smallest useful version of your solution before investing heavily in additional features.",
//       "Use feedback to improve the product continuously. The objective is not to build everything people request, but to understand what genuinely helps them.",
//     ],
//   },
//   {
//     id: 5,
//     category: "Design",
//     title: "Why Thoughtful Design Makes Digital Products Better",
//     description:
//       "Discover how typography, spacing, hierarchy, and accessibility make digital experiences feel intuitive.",
//     author: "Design Studio",
//     date: "02 October 2026",
//     readTime: "4 min read",
//     image:
//       "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1000&q=85",
//     content: [
//       "Good design helps people understand what matters and what they can do next. It is not simply about making an interface attractive.",
//       "Consistent spacing, readable typography, clear labels, and accessible interactions reduce friction throughout the experience.",
//       "When design decisions are guided by real user needs, even complex products can feel approachable.",
//     ],
//   },
//   {
//     id: 6,
//     category: "Technology",
//     title: "What Developers Should Know About Modern Web Applications",
//     description:
//       "Explore the principles behind fast, maintainable, secure, and reliable web applications.",
//     author: "Engineering Desk",
//     date: "29 September 2026",
//     readTime: "9 min read",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
//     content: [
//       "Modern web applications require more than a polished frontend. Performance, accessibility, security, and maintainability are equally important.",
//       "A clear architecture helps developers separate responsibilities, test behavior, and change individual parts without breaking the entire system.",
//       "Focus on reliable fundamentals first, then introduce tools that address real requirements rather than adding complexity without a clear benefit.",
//     ],
//   },
//   {
//     id: 7,
//     category: "Career",
//     title: "Creating a Portfolio That Demonstrates Real Skills",
//     description:
//       "Learn how to present projects, explain technical decisions, and show the impact of your work.",
//     author: "Research Desk",
//     date: "25 September 2026",
//     readTime: "6 min read",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
//     content: [
//       "A useful portfolio demonstrates how you approach problems, not simply which technologies you have used.",
//       "Explain the problem, your approach, important trade-offs, and the final result. Include working demonstrations or screenshots wherever possible.",
//       "A few well-documented projects can make a stronger impression than many projects with little explanation.",
//     ],
//   },
//   {
//     id: 8,
//     category: "Business",
//     title: "Making Better Decisions With Data",
//     description:
//       "A clear introduction to using metrics, evidence, and customer feedback to make more informed decisions.",
//     author: "Editorial Team",
//     date: "21 September 2026",
//     readTime: "5 min read",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
//     content: [
//       "Data helps teams replace assumptions with evidence, but only when the right questions are being asked.",
//       "Choose metrics that reflect meaningful outcomes, examine how they change over time, and investigate the context behind unexpected results.",
//       "Combine quantitative evidence with qualitative feedback to understand both what is happening and why it may be happening.",
//     ],
//   },
// ];

// const categories = [
//   "All articles",
//   "Technology",
//   "Career",
//   "Business",
//   "Productivity",
//   "Design",
// ];

// export default function BlogsPage() {
//   const {fetchBlogs, Loading} = useAuth();
//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All articles");
//   const [page, setPage] = useState(1);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [bookmarks, setBookmarks] = useState([]);

//   const featuredBlog = blogsData[0];
//   const pageSize = 6;

//   const filteredBlogs = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return blogsData.filter((blog) => {
//       const matchesCategory =
//         activeCategory === "All articles" ||
//         blog.category === activeCategory;

//       const matchesSearch =
//         !query ||
//         blog.title.toLowerCase().includes(query) ||
//         blog.description.toLowerCase().includes(query) ||
//         blog.category.toLowerCase().includes(query) ||
//         blog.author.toLowerCase().includes(query);

//       return matchesCategory && matchesSearch;
//     });
//   }, [search, activeCategory]);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredBlogs.length / pageSize)
//   );

//   const currentBlogs = filteredBlogs.slice(
//     (page - 1) * pageSize,
//     page * pageSize
//   );

//   function updateSearch(value) {
//     setSearch(value);
//     setPage(1);
//   }

//   function updateCategory(value) {
//     setActiveCategory(value);
//     setPage(1);
//   }

//   function toggleBookmark(id) {
//     setBookmarks((previous) =>
//       previous.includes(id)
//         ? previous.filter((item) => item !== id)
//         : [...previous, id]
//     );
//   }

//   return (
//     <main className="min-h-screen overflow-hidden bg-white text-slate-900">
//       {/* Header */}
//       {/* <header className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
//           <a href="/" className="flex items-center gap-2.5">
//             <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-600/20">
//               I
//             </span>
//             <span className="text-lg font-bold tracking-tight">
//               Insights<span className="text-blue-600">.</span>
//             </span>
//           </a>

//           <nav className="hidden items-center gap-8 text-sm md:flex">
//             <a
//               href="/"
//               className="text-slate-500 transition hover:text-blue-600"
//             >
//               Home
//             </a>
//             <a href="#articles" className="font-semibold text-blue-600">
//               Resources
//             </a>
//             <a
//               href="#newsletter"
//               className="text-slate-500 transition hover:text-blue-600"
//             >
//               Newsletter
//             </a>
//           </nav>

//           <a
//             href="#articles"
//             className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
//           >
//             Explore articles
//             <ArrowUpRight size={16} />
//           </a>
//         </div>
//       </header> */}

//       {/* Editorial intro */}
//       <section className="relative">
//         <div className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border-[35px] border-blue-50/80" />

//         <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-12 lg:pt-12">
//           <div className="mb-6 flex items-center gap-2 text-xs font-semibold">
//             <a href="/" className="text-blue-600 hover:text-blue-800">
//               Resources
//             </a>
//             <ArrowRight size={14} className="text-blue-500" />
//             <span className="rounded-md bg-blue-50 px-2.5 py-1.5 text-blue-700">
//               Ideas & Insights
//             </span>
//           </div>

//           <div className="max-w-4xl">
//             <h1 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[46px]">
//               Ideas, insights &amp; perspectives
//             </h1>

//             <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
//               Discover thoughtful articles, practical guides, and fresh
//               perspectives on technology, careers, business, and the ideas
//               shaping our world.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured editorial article */}
//       {!search &&
//         activeCategory === "All articles" &&
//         page === 1 && (
//           <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
//             <article className="group relative isolate min-h-[440px] overflow-hidden rounded-xl bg-slate-900 sm:min-h-[510px] lg:min-h-[570px]">
//               <img
//                 src={featuredBlog.image}
//                 alt={featuredBlog.title}
//                 fetchPriority="high"
//                 className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
//               />

//               <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
//               <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent" />

//               <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
//                 <span className="inline-flex items-center rounded-md border border-white/20 bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
//                   Editor&apos;s pick
//                 </span>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedBlog(featuredBlog)}
//                 aria-label={`Read ${featuredBlog.title}`}
//                 className="absolute inset-0 -z-0 cursor-pointer"
//               />

//               <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-8 lg:p-10">
//                 <span className="mb-4 inline-block rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
//                   {featuredBlog.category}
//                 </span>

//                 <h2 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[42px]">
//                   {featuredBlog.title}
//                 </h2>

//                 <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
//                   {featuredBlog.description}
//                 </p>

//                 <div className="mt-7 flex flex-col gap-5 border-t border-white/20 pt-5 sm:flex-row sm:items-end sm:justify-between">
//                   <div className="flex flex-wrap gap-x-8 gap-y-4">
//                     <div>
//                       <p className="text-[11px] text-white/60">Written by</p>
//                       <p className="mt-1.5 text-sm font-semibold text-white">
//                         {featuredBlog.author}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[11px] text-white/60">
//                         Published on
//                       </p>
//                       <p className="mt-1.5 text-sm font-semibold text-white">
//                         {featuredBlog.date}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[11px] text-white/60">Reading time</p>
//                       <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-white">
//                         <Clock3 size={14} />
//                         {featuredBlog.readTime}
//                       </p>
//                     </div>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => setSelectedBlog(featuredBlog)}
//                     className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
//                   >
//                     Read featured article
//                     <ArrowUpRight size={16} />
//                   </button>
//                 </div>
//               </div>
//             </article>
//           </section>
//         )}

//       {/* Blog library */}
//       <section
//         id="articles"
//         className="mx-auto max-w-[1440px] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12"
//       >
//         <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-7 lg:flex-row lg:items-end">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
//               The journal
//             </p>
//             <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
//               Explore all articles
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Fresh ideas and useful knowledge, curated for you.
//             </p>
//           </div>

//           <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 transition focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50 sm:max-w-sm">
//             <Search size={18} className="shrink-0 text-slate-400" />
//             <input
//               value={search}
//               onChange={(e) => updateSearch(e.target.value)}
//               placeholder="Search articles..."
//               aria-label="Search articles"
//               className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
//             />
//             {search && (
//               <button
//                 type="button"
//                 onClick={() => updateSearch("")}
//                 aria-label="Clear search"
//                 className="text-slate-400 hover:text-slate-700"
//               >
//                 <X size={16} />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Category filters */}
//         <div className="flex gap-2 overflow-x-auto py-6">
//           {categories.map((category) => (
//             <button
//               key={category}
//               type="button"
//               onClick={() => updateCategory(category)}
//               className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
//                 activeCategory === category
//                   ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
//                   : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="mb-5 flex items-center justify-between">
//           <p className="text-sm text-slate-500">
//             Showing{" "}
//             <span className="font-semibold text-slate-900">
//               {currentBlogs.length}
//             </span>{" "}
//             of{" "}
//             <span className="font-semibold text-slate-900">
//               {filteredBlogs.length}
//             </span>{" "}
//             articles
//           </p>

//           <span className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
//             <CalendarDays size={14} />
//             Latest insights
//           </span>
//         </div>

//         {currentBlogs.length > 0 ? (
//           <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
//             {currentBlogs.map((blog) => (
//               <article key={blog.id} className="group min-w-0">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedBlog(blog)}
//                   aria-label={`Read ${blog.title}`}
//                   className="relative block aspect-[1.65/1] w-full overflow-hidden rounded-xl bg-slate-100 text-left"
//                 >
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                   <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-blue-700 shadow-sm">
//                     {blog.category}
//                   </span>
//                   <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-md transition group-hover:opacity-100">
//                     <ArrowUpRight size={18} />
//                   </span>
//                 </button>

//                 <div className="pt-5">
//                   <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
//                     <span>{blog.date}</span>
//                     <span className="h-1 w-1 rounded-full bg-slate-300" />
//                     <Clock3 size={13} />
//                     <span>{blog.readTime}</span>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => setSelectedBlog(blog)}
//                     className="mt-3 block text-left text-lg font-bold leading-snug tracking-tight text-slate-900 transition group-hover:text-blue-600 sm:text-xl"
//                   >
//                     {blog.title}
//                   </button>

//                   <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
//                     {blog.description}
//                   </p>

//                   <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
//                     <span className="text-xs font-semibold text-slate-600">
//                       {blog.author}
//                     </span>

//                     <button
//                       type="button"
//                       onClick={() => toggleBookmark(blog.id)}
//                       aria-label={
//                         bookmarks.includes(blog.id)
//                           ? "Remove bookmark"
//                           : "Bookmark article"
//                       }
//                       className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
//                         bookmarks.includes(blog.id)
//                           ? "bg-blue-50 text-blue-600"
//                           : "text-slate-400 hover:bg-blue-50 hover:text-blue-600"
//                       }`}
//                     >
//                       {bookmarks.includes(blog.id) ? (
//                         <Check size={17} />
//                       ) : (
//                         <Bookmark size={17} />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         ) : (
//           <div className="rounded-2xl border border-dashed border-slate-200 py-20 text-center">
//             <Search size={28} className="mx-auto text-slate-300" />
//             <h3 className="mt-4 text-lg font-bold text-slate-900">
//               No articles found
//             </h3>
//             <p className="mt-2 text-sm text-slate-500">
//               Try another keyword or category.
//             </p>
//             <button
//               type="button"
//               onClick={() => {
//                 updateSearch("");
//                 updateCategory("All articles");
//               }}
//               className="mt-5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
//             >
//               Clear filters
//             </button>
//           </div>
//         )}

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
//             <button
//               type="button"
//               disabled={page === 1}
//               onClick={() => {
//                 setPage((previous) => previous - 1);
//                 document
//                   .getElementById("articles")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
//             >
//               Previous
//             </button>

//             {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//               (number) => (
//                 <button
//                   key={number}
//                   type="button"
//                   onClick={() => {
//                     setPage(number);
//                     document
//                       .getElementById("articles")
//                       ?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                   className={`h-10 min-w-10 rounded-lg px-3 text-sm font-semibold transition ${
//                     page === number
//                       ? "bg-blue-600 text-white"
//                       : "border border-slate-200 text-slate-600 hover:bg-blue-50"
//                   }`}
//                 >
//                   {number}
//                 </button>
//               )
//             )}

//             <button
//               type="button"
//               disabled={page === totalPages}
//               onClick={() => {
//                 setPage((previous) => previous + 1);
//                 document
//                   .getElementById("articles")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Newsletter */}
//       <section
//         id="newsletter"
//         className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 lg:px-12"
//       >
//         <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
//           <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

//           <div className="relative max-w-xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
//               The weekly edit
//             </p>
//             <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
//               Make room for new ideas.
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-slate-400">
//               Get our latest articles and practical insights delivered to your
//               inbox.
//             </p>
//           </div>

//           <form
//             className="relative mt-7 flex w-full max-w-md gap-2 lg:mt-0"
//             onSubmit={(e) => {
//               e.preventDefault();
//             }}
//           >
//             <input
//               type="email"
//               required
//               placeholder="Your email address"
//               aria-label="Your email address"
//               className="h-12 min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
//             />
//             <button
//               type="submit"
//               className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500"
//             >
//               Subscribe
//               <ArrowRight size={16} />
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-slate-100">
//         <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
//           <p>
//             © {new Date().getFullYear()} Insights. All rights reserved.
//           </p>
//           <a href="/" className="transition hover:text-blue-600">
//             Back to home ↑
//           </a>
//         </div>
//       </footer>

//       {/* Article preview */}
//       {selectedBlog && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-3 backdrop-blur-sm sm:p-6"
//           onClick={() => setSelectedBlog(null)}
//         >
//           <article
//             role="dialog"
//             aria-modal="true"
//             aria-label={selectedBlog.title}
//             className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               type="button"
//               onClick={() => setSelectedBlog(null)}
//               aria-label="Close article"
//               className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:text-blue-600"
//             >
//               <X size={20} />
//             </button>

//             <div className="relative h-56 sm:h-80">
//               <img
//                 src={selectedBlog.image}
//                 alt={selectedBlog.title}
//                 className="h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
//               <span className="absolute bottom-5 left-6 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-blue-700">
//                 {selectedBlog.category}
//               </span>
//             </div>

//             <div className="p-6 sm:p-10">
//               <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
//                 <span>{selectedBlog.date}</span>
//                 <span>·</span>
//                 <span className="flex items-center gap-1.5">
//                   <Clock3 size={13} />
//                   {selectedBlog.readTime}
//                 </span>
//               </div>

//               <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
//                 {selectedBlog.title}
//               </h2>

//               <p className="mt-4 border-b border-slate-100 pb-6 text-sm leading-7 text-slate-500 sm:text-base">
//                 {selectedBlog.description}
//               </p>

//               <div className="mt-6 space-y-5">
//                 {selectedBlog.content.map((paragraph, index) => (
//                   <p
//                     key={index}
//                     className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
//                   >
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>

//               <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
//                 <div>
//                   <p className="text-xs text-slate-400">Written by</p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {selectedBlog.author}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => toggleBookmark(selectedBlog.id)}
//                   className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
//                 >
//                   {bookmarks.includes(selectedBlog.id) ? (
//                     <Check size={16} />
//                   ) : (
//                     <Bookmark size={16} />
//                   )}
//                   {bookmarks.includes(selectedBlog.id)
//                     ? "Bookmarked"
//                     : "Save article"}
//                 </button>
//               </div>
//             </div>
//           </article>
//         </div>
//       )}
//     </main>
//   );
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Check,
  Clock3,
  Search,
  X,
} from "lucide-react";
import { useAuth } from "../context/auth.context";

const categories = [
  "All articles",
  "Technology",
  "Business",
  "Career",
  "Productivity",
  "Design",
  "Education",
  "Finance",
  "Other",
];

export default function BlogsPage() {
  const { blogs = [], fetchBlogs, Loading } = useAuth();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All articles");
  const [page, setPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlogs().catch((err) => {
      setError(err.message || "Failed to load blogs");
    });
  }, []);

  const pageSize = 6;
  const featuredBlog = blogs[0];

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const author =
        typeof blog.author === "string"
          ? blog.author
          : blog.author?.name || "QuerLabs Team";

      const matchesCategory =
        activeCategory === "All articles" ||
        blog.category === activeCategory;

      const matchesSearch =
        !query ||
        (blog.title || "").toLowerCase().includes(query) ||
        (blog.description || "").toLowerCase().includes(query) ||
        (blog.category || "").toLowerCase().includes(query) ||
        author.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [blogs, search, activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBlogs.length / pageSize)
  );

  const currentBlogs = filteredBlogs.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  function updateSearch(value) {
    setSearch(value);
    setPage(1);
  }

  function updateCategory(value) {
    setActiveCategory(value);
    setPage(1);
  }

  function toggleBookmark(id) {
    setBookmarks((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function getArticleContent(blog) {
    // Original TipTap HTML should be preferred.
    if (typeof blog.content === "string" && blog.content.trim()) {
      return blog.content;
    }

    // Fallback if the API returns content in another field.
    if (
      typeof blog.contentText === "string" &&
      blog.contentText.trim()
    ) {
      return blog.contentText;
    }

    return "";
  }

  function openArticle(blog) {
    setSelectedBlog(blog);
  }

  if (Loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-sm text-slate-500">Loading articles...</p>
      </div>
    );
  }

  if (error && blogs.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
        <p className="text-sm text-red-500">{error}</p>

        <button
          type="button"
          onClick={() => {
            setError("");
            fetchBlogs().catch((err) =>
              setError(err.message || "Failed to load blogs")
            );
          }}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Editorial intro */}
      <section className="relative">
        <div className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border-[35px] border-blue-50/80" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-12 lg:pt-12">
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold">
            <a href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </a>

            <ArrowRight size={14} className="text-blue-500" />

            <span className="rounded-md bg-blue-50 px-2.5 py-1.5 text-blue-700">
              Ideas & Insights
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[46px]">
              Ideas, insights &amp; perspectives
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
              Discover practical guides and fresh perspectives on
              technology, software development, careers, and business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featuredBlog &&
        !search &&
        activeCategory === "All articles" &&
        page === 1 && (
          <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <article className="group relative isolate min-h-[440px] overflow-hidden rounded-xl bg-slate-900 sm:min-h-[510px] lg:min-h-[570px]">
              {featuredBlog.image && (
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.coverAlt || featuredBlog.title}
                  fetchPriority="high"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              )}

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
                <span className="rounded-md border border-white/20 bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  Featured article
                </span>
              </div>

              <div className="absolute inset-0 z-0">
                <button
                  type="button"
                  onClick={() => openArticle(featuredBlog)}
                  aria-label={`Read ${featuredBlog.title}`}
                  className="h-full w-full cursor-pointer"
                />
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-8 lg:p-10">
                <span className="mb-4 inline-block rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                  {featuredBlog.category}
                </span>

                <h2 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[42px]">
                  {featuredBlog.title}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                  {featuredBlog.description}
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-5">
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div>
                      <p className="text-[11px] text-white/60">
                        Written by
                      </p>
                      <p className="mt-1.5 text-sm font-semibold text-white">
                        {featuredBlog.author}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] text-white/60">
                        Published on
                      </p>
                      <p className="mt-1.5 text-sm font-semibold text-white">
                        {featuredBlog.date}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] text-white/60">
                        Reading time
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-white">
                        <Clock3 size={14} />
                        {featuredBlog.readTime}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openArticle(featuredBlog)}
                    className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
                  >
                    Read featured article
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          </section>
        )}

      {/* Blog library */}
      <section
        id="articles"
        className="mx-auto max-w-[1440px] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-7 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              The journal
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Explore all articles
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fresh ideas and practical knowledge, curated for you.
            </p>
          </div>

          <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50 sm:max-w-sm">
            <Search size={18} className="shrink-0 text-slate-400" />

            <input
              value={search}
              onChange={(e) => updateSearch(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => updateSearch("")}
                aria-label="Clear search"
                className="text-slate-400 hover:text-slate-700"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto py-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => updateCategory(category)}
              className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {currentBlogs.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900">
              {filteredBlogs.length}
            </span>{" "}
            articles
          </p>

          <span className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
            <CalendarDays size={14} />
            Latest insights
          </span>
        </div>

        {currentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {currentBlogs.map((blog) => (
              <article key={blog.id} className="group min-w-0">
                <button
                  type="button"
                  onClick={() => openArticle(blog)}
                  aria-label={`Read ${blog.title}`}
                  className="relative block aspect-[1.65/1] w-full overflow-hidden rounded-xl bg-slate-100 text-left"
                >
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.coverAlt || blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}

                  <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-blue-700 shadow-sm">
                    {blog.category}
                  </span>

                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-md transition group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </button>

                <div className="pt-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span>{blog.date}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <Clock3 size={13} />
                    <span>{blog.readTime}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openArticle(blog)}
                    className="mt-3 block text-left text-lg font-bold leading-snug tracking-tight text-slate-900 transition group-hover:text-blue-600 sm:text-xl"
                  >
                    {blog.title}
                  </button>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {blog.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold text-slate-600">
                      {blog.author}
                    </span>

                    {/* <button
                      type="button"
                      onClick={() => toggleBookmark(blog.id)}
                      aria-label={
                        bookmarks.includes(blog.id)
                          ? "Remove bookmark"
                          : "Bookmark article"
                      }
                      className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
                        bookmarks.includes(blog.id)
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-400 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {bookmarks.includes(blog.id) ? (
                        <Check size={17} />
                      ) : (
                        <Bookmark size={17} />
                      )}
                    </button> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 py-20 text-center">
            <Search size={28} className="mx-auto text-slate-300" />

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No articles found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another keyword or category.
            </p>

            <button
              type="button"
              onClick={() => {
                updateSearch("");
                updateCategory("All articles");
              }}
              className="mt-5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => {
                setPage((previous) => previous - 1);
                document
                  .getElementById("articles")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((number) => (
              <button
                key={number}
                type="button"
                onClick={() => {
                  setPage(number);
                  document
                    .getElementById("articles")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`h-10 min-w-10 rounded-lg px-3 text-sm font-semibold transition ${
                  page === number
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 text-slate-600 hover:bg-blue-50"
                }`}
              >
                {number}
              </button>
            ))}

            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => {
                setPage((previous) => previous + 1);
                document
                  .getElementById("articles")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section
        id="newsletter"
        className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 lg:px-12"
      >
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
              The weekly edit
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Make room for new ideas.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Get our latest articles and practical insights delivered to
              your inbox.
            </p>
          </div>

          <form
            className="relative mt-7 flex w-full max-w-md gap-2 lg:mt-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Your email address"
              className="h-12 min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
            />

            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} QuerLabs. All rights reserved.
          </p>

          <a href="/" className="transition hover:text-blue-600">
            Back to home ↑
          </a>
        </div>
      </footer>

      {/* Full article modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedBlog(null)}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-label={selectedBlog.title}
            className="relative max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedBlog(null)}
              aria-label="Close article"
              className="sticky top-4 z-20 float-right mr-4 -mb-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg hover:text-blue-600"
            >
              <X size={20} />
            </button>

            {selectedBlog.image && (
              <div className="relative h-56 bg-slate-100 sm:h-80">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.coverAlt || selectedBlog.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

                <span className="absolute bottom-5 left-6 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-blue-700">
                  {selectedBlog.category}
                </span>
              </div>
            )}

            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span>{selectedBlog.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Clock3 size={13} />
                  {selectedBlog.readTime}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                {selectedBlog.title}
              </h2>

              {selectedBlog.description && (
                <p className="mt-4 border-b border-slate-100 pb-6 text-sm leading-7 text-slate-500 sm:text-base">
                  {selectedBlog.description}
                </p>
              )}

              {/* Full TipTap HTML content */}
              <div className="blog-content mt-8 min-w-0 text-slate-700">
                {getArticleContent(selectedBlog) ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: getArticleContent(selectedBlog),
                    }}
                  />
                ) : (
                  <p className="text-sm text-slate-500">
                    Full article content is not available for this blog.
                  </p>
                )}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-xs text-slate-400">Written by</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedBlog.author}
                  </p>
                </div>

                {/* <button
                  type="button"
                  onClick={() => toggleBookmark(selectedBlog.id)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {bookmarks.includes(selectedBlog.id) ? (
                    <Check size={16} />
                  ) : (
                    <Bookmark size={16} />
                  )}

                  {bookmarks.includes(selectedBlog.id)
                    ? "Bookmarked"
                    : "Save article"}
                </button> */}
              </div>
            </div>
          </article>
        </div>
      )}

      {/* Article typography */}
      <style jsx global>{`
        .blog-content {
          overflow-wrap: anywhere;
          font-size: 16px;
          line-height: 1.9;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          margin-top: 1.8em;
          margin-bottom: 0.7em;
          color: #0f172a;
          font-weight: 700;
          line-height: 1.3;
        }

        .blog-content h1 {
          font-size: 2rem;
        }

        .blog-content h2 {
          font-size: 1.6rem;
        }

        .blog-content h3 {
          font-size: 1.3rem;
        }

        .blog-content p {
          margin: 1em 0;
        }

        .blog-content ul,
        .blog-content ol {
          margin: 1em 0;
          padding-left: 1.8em;
        }

        .blog-content ul {
          list-style: disc;
        }

        .blog-content ol {
          list-style: decimal;
        }

        .blog-content li {
          margin: 0.4em 0;
          padding-left: 0.3em;
        }

        .blog-content a {
          color: #2563eb;
          text-decoration: underline;
        }

        .blog-content blockquote {
          margin: 1.5em 0;
          border-left: 4px solid #2563eb;
          padding: 0.5em 1em;
          background: #eff6ff;
          color: #475569;
        }

        .blog-content pre {
          max-width: 100%;
          overflow-x: auto;
          margin: 1.5em 0;
          border-radius: 0.75rem;
          padding: 1rem;
          background: #0f172a;
          color: #f8fafc;
          font-size: 0.875rem;
          line-height: 1.7;
        }

        .blog-content code {
          overflow-wrap: anywhere;
          border-radius: 0.25rem;
          background: #f1f5f9;
          padding: 0.15em 0.35em;
          font-size: 0.9em;
        }

        .blog-content pre code {
          background: transparent;
          padding: 0;
          color: inherit;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          margin: 1.5em auto;
          border-radius: 0.75rem;
        }

        .blog-content table {
          display: block;
          max-width: 100%;
          overflow-x: auto;
          border-collapse: collapse;
          margin: 1.5em 0;
        }

        .blog-content th,
        .blog-content td {
          border: 1px solid #e2e8f0;
          padding: 0.65rem 0.85rem;
          text-align: left;
        }

        .blog-content th {
          background: #f8fafc;
          font-weight: 700;
        }

        .blog-content hr {
          margin: 2em 0;
          border-color: #e2e8f0;
        }
      `}</style>
    </main>
  );
}
