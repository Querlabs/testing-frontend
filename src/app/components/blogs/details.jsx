// 'use client'
// import Link from "next/link";
// import { useEffect ,useState} from "react";
// import { useSearchParams } from "next/navigation";
// import { useAuth } from "@/app/context/auth.context";
// const article = {
//   title: "How AI Is Changing Technical Interviews in 2027: The Future of Hiring",
//   category: "Technology",
//   excerpt:
//     "Artificial Intelligence is transforming technical interviews in 2027. From AI-powered coding assessments to personalized mock interviews and intelligent candidate evaluation, discover how technology is changing the way companies hire software engineers.",
//   image:
//     "https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?auto=format&fit=crop&fm=jpg&q=85&w=1600",
//   author: "InterCracks Editorial Team",
//   date: "16 November 2026",
//   read: "5 min read",
//   tags: ["AI", "Technical Interviews", "Software Engineering", "AI Hiring"],
// };

// const content = [
//   {
//     id: "assessments",
//     heading: "AI-Powered Technical Assessments",
//     paragraphs: [
//       "Traditional coding assessments generally present candidates with a predefined set of programming problems. Every candidate receives a similar evaluation structure, regardless of their experience or skill level.",
//       "AI-powered assessments can make this process more adaptive. Modern assessment platforms can evaluate problem-solving, logical thinking, code quality, efficiency and the ability to explain technical decisions.",
//       "Instead of focusing exclusively on whether a candidate produces the correct output, AI-assisted evaluation can provide additional insights into how a candidate approaches a problem.",
//     ],
//     points: [
//       "Problem-solving and logical thinking",
//       "Data structures and algorithms knowledge",
//       "Code quality and efficiency",
//       "Understanding of programming concepts",
//       "Ability to explain technical decisions",
//     ],
//   },
//   {
//     id: "mock-interviews",
//     heading: "Personalized AI Mock Interviews",
//     paragraphs: [
//       "One of the biggest challenges candidates face is the lack of realistic interview practice.",
//       "Watching interview preparation videos or reading question banks can improve theoretical knowledge, but they cannot fully replicate the experience of an actual technical interview.",
//       "AI-powered mock interview platforms are helping bridge this gap. Candidates can practice interviews based on their target job role, experience, technical skills, job descriptions and resume.",
//       "AI can generate relevant questions, evaluate responses, and provide structured feedback. This allows candidates to practice repeatedly and improve their interview performance.",
//     ],
//   },
//   {
//     id: "resume",
//     heading: "Resume Intelligence and Job Description Analysis",
//     paragraphs: [
//       "A resume is often the first interaction between a candidate and a potential employer. However, many candidates struggle to understand whether their resume actually matches a particular job opportunity.",
//       "AI-powered resume analysis can help identify missing technical skills, relevant experience, skill mismatches, project relevance and potential improvements in resume structure.",
//       "By combining resume intelligence with job description analysis, candidates can prepare more strategically instead of applying blindly to hundreds of opportunities.",
//     ],
//   },
//   {
//     id: "engineering",
//     heading: "Beyond DSA: Evaluating Real Engineering Skills",
//     paragraphs: [
//       "Data Structures and Algorithms remain important for software engineering interviews. However, being a good software engineer requires much more than solving coding problems.",
//       "Companies also need engineers who understand backend architecture, database design, API development, system design, debugging, code maintainability and real-world engineering trade-offs.",
//       "AI-assisted interview platforms can help assess a broader range of engineering competencies through role-specific questions and practical scenarios.",
//     ],
//   },
//   {
//     id: "analytics",
//     heading: "AI-Driven Feedback and Performance Analytics",
//     paragraphs: [
//       "In traditional interview preparation, candidates often struggle to understand exactly where they are making mistakes.",
//       "AI-powered evaluation can provide structured performance insights, identify technical weaknesses, evaluate communication and track performance across multiple attempts.",
//       "Performance analytics can turn interview preparation into a measurable learning process. Instead of repeatedly practicing random questions, candidates can focus on their weakest areas.",
//     ],
//   },
//   {
//     id: "human",
//     heading: "Will AI Replace Human Technical Interviewers?",
//     paragraphs: [
//       "This is one of the biggest questions surrounding AI-powered recruitment. The answer is not necessarily.",
//       "AI can automate repetitive tasks, assist with assessments, generate relevant questions, and help organize candidate evaluation.",
//       "However, human interviewers remain valuable for evaluating collaboration, communication, leadership potential, engineering judgment and organizational alignment.",
//       "The most practical future is likely to involve collaboration between AI systems and human interviewers.",
//     ],
//   },
//   {
//     id: "preparation",
//     heading: "How Candidates Should Prepare for AI-Powered Interviews in 2027",
//     paragraphs: [
//       "The changing interview landscape requires a more structured preparation strategy. Here are seven important areas candidates should focus on:",
//     ],
//     points: [
//       "Master Data Structures and Algorithms.",
//       "Strengthen Core Computer Science Fundamentals.",
//       "Build Real-World Projects.",
//       "Learn System Design.",
//       "Practice Mock Interviews.",
//       "Improve Communication Skills.",
//       "Use AI as a Learning Partner.",
//     ],
//     ending:
//       "Remember, AI should strengthen your understanding rather than replace actual learning.",
//   },
//   {
//     id: "future",
//     heading: "The Future of Technical Interview Preparation",
//     paragraphs: [
//       "Technical interview preparation is moving towards a more personalized and data-driven approach.",
//       "Candidates no longer need to depend exclusively on static question banks or generic preparation plans.",
//       "AI-powered platforms are creating opportunities for more structured preparation, personalized assessments, and continuous performance improvement.",
//       "The biggest advantage will belong to candidates who combine strong technical fundamentals with practical engineering experience and effective communication.",
//     ],
//   },
// ];

// const related = [
//   {
//     title: "How to Build Scalable Web Applications with Next.js",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
//     category: "DEVELOPMENT",
//     date: "13 Oct 2026",
//     slug: "build-scalable-web-applications-nextjs",
//   },
//   {
//     title: "Beyond Coding: How AI Is Changing the Way Developers Build Software",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
//     category: "ARTIFICIAL INTELLIGENCE",
//     date: "13 Oct 2026",
//     slug: "beyond-coding-ai-changing-software-development",
//   },
// ];

// export default function BlogDetailPage() {
//     const searchParams = useSearchParams();
//     const {
//         fetchBlogBySlug,
//         singleBlog,
//         singleBlogLoading
//     } = useAuth();

//     const [slug, setSlug] = useState("");

//     useEffect(() => {
//         const blogSlug = searchParams.get("blog");
//         setSlug(blogSlug || "");
//     }, [searchParams]);

//     useEffect(() => {
//         if (!slug) return;

//         fetchBlogBySlug(slug);

//     }, [slug]);
//   return (
//     <main className="min-h-screen bg-white text-[#11182b]">

//       {/* Navigation */}
//       <nav className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex max-w-[1380px] items-center justify-between px-6 py-5">
//           <Link href="/blogs" className="flex items-center gap-3 text-sm font-semibold text-slate-500 hover:text-blue-600">
//             <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg">←</span>
//             Back to journal
//           </Link>
//           <div className="hidden items-center gap-3 text-xs text-slate-400 sm:flex">
//             <Link href="/">Home</Link>
//             <span>/</span>
//             <Link href="/blogs">Ideas & Insights</Link>
//             <span>/</span>
//             <span className="text-slate-700">Article</span>
//           </div>
//           <Link href="/blogs" className="text-sm font-bold text-blue-600">
//             InterCracks <span className="text-slate-900">Journal.</span>
//           </Link>
//         </div>
//       </nav>

//       {/* Editorial Header */}
//       <header className="relative overflow-hidden">
//         <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-50 blur-[90px]" />
//         <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-indigo-50/50 blur-[90px]" />

//         <div className="relative mx-auto max-w-[1100px] px-6 pb-12 pt-10 text-center md:pt-10">

//           <div className="mb-8 flex items-center justify-center gap-3">
//             <span className="rounded-full bg-blue-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
//               {article.category}
//             </span>
//             <span className="text-xs font-medium text-slate-400">Featured story</span>
//           </div>

//           <h1 className="mx-auto max-w-[1050px] text-[42px] font-extrabold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
//             {article.title.split("2027")[0]}
//             <span className="text-blue-600">2027</span>
//             {article.title.split("2027")[1]}
//           </h1>

//           <p className="mx-auto mt-8 max-w-[750px] text-base leading-8 text-slate-500 md:text-lg">
//             {article.excerpt}
//           </p>

//           <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 text-left">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111b35] text-sm font-extrabold text-white">
//                 IC
//               </div>
//               <div>
//                 <p className="text-sm font-bold">{article.author}</p>
//                 <p className="mt-1 text-xs text-slate-400">Editorial team</p>
//               </div>
//             </div>
//             <span className="hidden h-8 w-px bg-slate-200 sm:block" />
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Published</p>
//               <p className="mt-1 text-sm font-semibold">{article.date}</p>
//             </div>
//             <span className="hidden h-8 w-px bg-slate-200 sm:block" />
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Reading time</p>
//               <p className="mt-1 text-sm font-semibold">{article.read}</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Large editorial image */}
//       <section className="mx-auto max-w-[1380px] px-5 md:px-8">
//         <div className="relative overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_25px_80px_rgba(15,23,42,0.10)]">
//           <div className="aspect-[16/8] min-h-[270px] max-h-[680px]">
//             <img
//               src={article.image}
//               alt={article.title}
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="absolute bottom-5 left-5 rounded-xl border border-white/50 bg-white/90 px-5 py-3 backdrop-blur-md">
//             <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">The InterCracks Journal</p>
//             <p className="mt-1 text-sm font-bold text-[#11182b]">Ideas shaping tomorrow.</p>
//           </div>
//           <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur">
//             01 / Technology
//           </div>
//         </div>
//       </section>

//       {/* Main article */}
//       <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-6 py-20 lg:grid-cols-[minmax(0,790px)_270px] lg:gap-20">

//         <article className="min-w-0">

//           {/* Introduction */}
//           <div className="mb-16">
//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-[2px] w-8 bg-blue-600" />
//               <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-600">The big picture</span>
//             </div>

//             <p className="border-l-[3px] border-blue-600 pl-6 text-[21px] font-semibold leading-[1.7] tracking-tight text-[#17213a] md:text-[25px]">
//               The way companies hire software engineers is changing rapidly.
//               Traditional technical interviews are evolving into more intelligent
//               and technology-driven processes.
//             </p>

//             <p className="mt-8 text-[17px] leading-[2] text-slate-600">
//               Artificial Intelligence is at the center of this transformation.
//               In 2027, AI is becoming an important part of technical recruitment.
//               Companies are exploring AI-powered coding assessments, automated
//               interview platforms, intelligent resume screening, and personalized
//               candidate evaluation to improve hiring efficiency.
//             </p>

//             <p className="mt-6 text-[17px] leading-[2] text-slate-600">
//               But what does this mean for software engineers, fresh graduates,
//               and job seekers? Let's explore how AI is reshaping technical
//               interviews and what candidates can do to stay competitive.
//             </p>
//           </div>

//           {/* Article sections */}
//           {content.map((section, index) => (
//             <section key={section.id} id={section.id} className="mb-20 scroll-mt-24">

//               <div className="mb-5 flex items-center gap-4">
//                 <span className="text-[43px] font-extrabold leading-none tracking-tighter text-blue-100">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>
//                 <div className="h-px flex-1 bg-slate-100" />
//               </div>

//               <h2 className="mb-7 max-w-[720px] text-[30px] font-extrabold leading-tight tracking-[-0.035em] text-[#11182b] md:text-[37px]">
//                 {section.heading}
//               </h2>

//               {section.paragraphs.map((p, i) => (
//                 <p key={i} className="mb-6 text-[16px] leading-[2] text-slate-600 md:text-[17px]">
//                   {p}
//                 </p>
//               ))}

//               {section.points && (
//                 <div className="my-8 overflow-hidden rounded-2xl border border-slate-100 bg-[#fafbff] p-6 md:p-8">
//                   <div className="mb-6 flex items-center justify-between">
//                     <span className="text-xs font-extrabold uppercase tracking-widest text-[#17213a]">
//                       Key takeaways
//                     </span>
//                     <span className="text-xs font-semibold text-blue-600">
//                       {String(section.points.length).padStart(2, "0")} points
//                     </span>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     {section.points.map((point, i) => (
//                       <div key={i} className="flex items-start gap-3">
//                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[11px] font-bold text-blue-600">
//                           {String(i + 1).padStart(2, "0")}
//                         </span>
//                         <p className="text-sm font-medium leading-6 text-slate-600">{point}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {section.ending && (
//                 <p className="mt-6 text-[17px] leading-[2] text-slate-600">
//                   {section.ending}
//                 </p>
//               )}
//             </section>
//           ))}

//           {/* Conclusion */}
//           <section id="final-thoughts" className="mb-16 scroll-mt-24">
//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-[2px] w-8 bg-blue-600" />
//               <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-600">Final perspective</span>
//             </div>
//             <h2 className="mb-7 text-4xl font-extrabold tracking-tight">Final Thoughts</h2>
//             <p className="mb-6 text-[17px] leading-[2] text-slate-600">
//               Artificial Intelligence is changing how companies assess talent
//               and how candidates prepare for technical interviews. From
//               intelligent assessments and resume analysis to personalized
//               mock interviews and performance analytics, AI is making interview
//               preparation more accessible and structured.
//             </p>
//             <p className="mb-8 text-[17px] leading-[2] text-slate-600">
//               However, technology alone cannot make someone a great engineer.
//               Strong fundamentals, consistent practice, real-world experience,
//               and the ability to solve unfamiliar problems will continue to matter.
//             </p>

//             <div className="relative overflow-hidden rounded-2xl bg-[#101b39] p-8 text-white md:p-11">
//               <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
//               <span className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">The key takeaway</span>
//               <p className="relative mt-5 max-w-[600px] text-2xl font-bold leading-[1.5] tracking-tight md:text-3xl">
//                 The goal should not be to prepare for AI alone. It should be to become a better engineer who knows how to use AI effectively.
//               </p>
//             </div>
//           </section>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-8">
//             {article.tags.map((tag) => (
//               <span key={tag} className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500 hover:border-blue-300 hover:text-blue-600">
//                 #{tag.replaceAll(" ", "")}
//               </span>
//             ))}
//           </div>

//           {/* Author profile */}
//           <div className="mt-12 flex items-center gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.035)]">
//             <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#111b35] text-xl font-extrabold text-white">
//               IC
//             </div>
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Written by</p>
//               <h3 className="mt-1 text-lg font-extrabold">{article.author}</h3>
//               <p className="mt-2 text-sm leading-6 text-slate-500">
//                 Practical perspectives on technology, software development and careers.
//               </p>
//             </div>
//           </div>
//         </article>

//         {/* Sidebar */}
//         <aside className="hidden lg:block">
//           <div className="sticky top-8 space-y-7">

//             <div className="rounded-2xl border border-slate-100 bg-white p-6">
//               <div className="mb-6 flex items-center justify-between">
//                 <h3 className="text-sm font-extrabold">On this page</h3>
//                 <span className="h-2 w-2 rounded-full bg-blue-600" />
//               </div>
//               <nav className="space-y-1">
//                 {[
//                   ["assessments", "AI assessments"],
//                   ["mock-interviews", "AI mock interviews"],
//                   ["resume", "Resume intelligence"],
//                   ["engineering", "Beyond DSA"],
//                   ["analytics", "Performance analytics"],
//                   ["human", "Human vs AI"],
//                   ["preparation", "Candidate preparation"],
//                   ["future", "The future"],
//                   ["final-thoughts", "Final thoughts"],
//                 ].map(([id, title], index) => (
//                   <a
//                     key={id}
//                     href={`#${id}`}
//                     className="group flex items-center gap-3 rounded-lg px-3 py-3 text-xs font-medium text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
//                   >
//                     <span className="font-bold text-slate-300 group-hover:text-blue-600">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                     {title}
//                   </a>
//                 ))}
//               </nav>
//             </div>

//             <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-7 pb-0 text-white">
//               <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[25px] border-white/10" />
//               <span className="relative text-2xl">✳</span>
//               <p className="relative mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
//                 InterCracks Journal
//               </p>
//               <h3 className="relative mt-3 text-2xl font-extrabold leading-tight">
//                 Keep learning. Keep building.
//               </h3>
//               <p className="relative mt-3 text-sm leading-6 text-blue-100">
//                 Explore more ideas and practical insights.
//               </p>
//               <Link href="/blogs" className="relative mt-7 inline-flex rounded-lg bg-white px-5 py-3 text-xs font-bold text-blue-700 hover:bg-blue-50">
//                 Explore articles →
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-100 bg-[#fafbff] p-6 pt-0">
//               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Article information</p>
//               <div className="mt-5 space-y-4">
//                 <div>
//                   <p className="text-xs text-slate-400">Category</p>
//                   <p className="mt-1 text-sm font-bold">{article.category}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-400">Published</p>
//                   <p className="mt-1 text-sm font-bold">{article.date}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-400">Reading time</p>
//                   <p className="mt-1 text-sm font-bold">{article.read}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </section>

//       {/* Related stories */}
//       <section className="border-t border-slate-100 bg-[#f8faff]">
//         <div className="mx-auto max-w-[1380px] px-6 py-20">
//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <div>
//               <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600">Discover more</p>
//               <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Stories worth your time.</h2>
//               <p className="mt-3 text-sm text-slate-500">More ideas and perspectives from our journal.</p>
//             </div>
//             <Link href="/blogs" className="text-sm font-bold text-blue-600 hover:text-blue-800">View all articles ↗</Link>
//           </div>

//           <div className="mt-11 grid gap-7 md:grid-cols-2">
//             {related.map((item, i) => (
//               <Link key={item.slug} href={`/blogs/${item.slug}`} className="group grid overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 sm:grid-cols-[210px_1fr]">
//                 <div className="relative min-h-[220px] overflow-hidden">
//                   <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
//                 </div>
//                 <div className="flex flex-col justify-center p-7">
//                   <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-600">{item.category}</span>
//                   <h3 className="mt-4 text-xl font-extrabold leading-snug text-[#11182b] group-hover:text-blue-600">{item.title}</h3>
//                   <p className="mt-4 text-xs text-slate-400">{item.date} · 6 min read</p>
//                   <span className="mt-6 text-sm font-bold text-blue-600">Read article ↗</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bottom newsletter */}
//       <section className="mx-auto max-w-[1380px] px-6 py-16">
//         <div className="relative overflow-hidden rounded-[24px] border border-blue-100 bg-[#eff5ff] p-8 md:p-14">
//           <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-blue-100/80" />
//           <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
//             <div className="max-w-xl">
//               <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600">The Weekly Edit</p>
//               <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Make room for new ideas.</h2>
//               <p className="mt-3 text-sm leading-7 text-slate-500">Get the latest technology insights, career guides and fresh perspectives.</p>
//             </div>
//             <Link href="/blogs" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
//               Explore the journal →
//             </Link>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }



"use client";
import Footer from "../footer";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/app/context/auth.context";

export default function BlogDetailPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("blog");

  const {
    fetchBlogBySlug,
    singleBlog,
    singleBlogLoading,
  } = useAuth();

  useEffect(() => {
    if (slug) {
      fetchBlogBySlug(slug);
    }
  }, [slug]);

  if (singleBlogLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
      </div>
    );
  }

  if (!singleBlog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-5">
        <h2 className="text-3xl font-bold text-slate-900">
          Blog not found
        </h2>
        <Link href="/blogs" className="mt-5 text-blue-600 font-semibold">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const blog = singleBlog;

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* Navigation */}
      <nav className="border-b border-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link
            href="/Blogs"
            className="text-sm font-semibold text-slate-500 hover:text-blue-600"
          >
            ← Back to Blogs
          </Link>

          <Link href="/blogs" className="text-lg font-extrabold text-blue-600">
            InterCracks<span className="text-slate-900">.</span>
          </Link>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="mx-auto max-w-4xl px-5 pb-10 pt-14 text-center">

        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
          {blog.category || "General"}
        </span>

        

<>
  <h1
    className="mt-7 text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #2563eb, #06b6d4, #8b5cf6, #2563eb)",
      backgroundSize: "200% auto",
      animation: "gradient 4s linear infinite",
    }}
  >
    {blog.title}
  </h1>

  <style jsx>{`
    @keyframes gradient {
      0% {
        background-position: 0% center;
      }
      100% {
        background-position: 200% center;
      }
    }
  `}</style>
</>


        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
          {blog.description || blog.excerpt}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500">
          <span className="font-semibold text-slate-700">
            {blog.author || "InterCracks Editorial Team"}
          </span>

          <span>•</span>

          <span>{blog.date}</span>

          <span>•</span>

          <span>{blog.readTime}</span>
        </div>
      </section>

      {/* Cover Image */}
      {blog.image && (
        <section className="mx-auto max-w-6xl px-5">
          <div className="overflow-hidden rounded-2xl bg-slate-100">
            <img
              src={blog.image}
              alt={blog.coverAlt || blog.title}
              className="h-[260px] w-full object-cover sm:h-[450px]"
            />
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:py-20">

        <article
          className="
            blog-content
            text-[16px] leading-[1.9] text-slate-600
            [&_h1]:mb-5 [&_h1]:mt-10 [&_h1]:text-3xl [&_h1]:font-extrabold [&_h1]:text-slate-900
            [&_h2]:mb-5 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900
            [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900
            [&_p]:mb-6
            [&_ul]:mb-6 [&_ul]:ml-6 [&_ul]:list-disc
            [&_ol]:mb-6 [&_ol]:ml-6 [&_ol]:list-decimal
            [&_li]:mb-2
            [&_strong]:font-bold [&_strong]:text-slate-800
            [&_a]:text-blue-600 [&_a]:underline
            [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-blue-600 [&_blockquote]:bg-blue-50 [&_blockquote]:px-6 [&_blockquote]:py-4
            [&_img]:my-8 [&_img]:rounded-xl
          "
          dangerouslySetInnerHTML={{
            __html: blog.content || "",
          }}
        />

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="mt-12 border-t border-slate-100 pt-8">
            <p className="mb-4 text-sm font-bold text-slate-900">
              Related Tags
            </p>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500"
                >
                  #{String(tag).replaceAll(" ", "")}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author */}
        <div className="mt-12 flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            IC
          </div>

          <div>
            <p className="text-xs text-slate-400">Written by</p>
            <h3 className="mt-1 font-bold text-slate-900">
              {blog.author || "InterCracks Editorial Team"}
            </h3>
          </div>
        </div>

      </section>

      {/* Back to Blogs */}
      <section className="border-t border-slate-100 bg-slate-50 px-5 py-12 text-center">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Explore More Insights
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          Discover more articles, guides and ideas.
        </p>

        <Link
          href="/blogs"
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          Explore All Blogs →
        </Link>
      </section>
    <Footer/>
    </main>
  );
}
