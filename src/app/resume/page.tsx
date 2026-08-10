"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  ArrowLeft,
  Printer,
  ExternalLink,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="flex flex-col min-h-screen space-y-6 pb-20">
      {/* Custom print styles to override layouts and ensure 1-page fit */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: letter;
            margin: 0.28in 0.45in;
          }
          body {
            background: white !important;
            color: black !important;
            font-size: 9.5pt !important;
            line-height: 1.2 !important;
          }
          /* Reset max-w and padding of root container for full printing area */
          .min-h-screen, main, html, body {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            background: white !important;
            color: black !important;
          }
          /* Hide interactive/web elements */
          .no-print {
            display: none !important;
          }
          /* Force colors to print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Specific text color for accents in print */
          .text-accent-print {
            color: #004E90 !important;
          }
          .border-rule-print {
            border-bottom: 0.7pt solid #9AA0A6 !important;
          }
          .list-item-print {
            margin-bottom: 0.5px !important;
            line-height: 1.15 !important;
          }
        }
      `}} />

      {/* Interactive Web Header Controls (Hidden during print) */}
      <div className="no-print flex items-center justify-between border-b pb-4 mb-4">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Printer className="size-4" />
          Download PDF / Print
        </button>
      </div>

      {/* Resume Document Wrapper */}
      <div className="w-full bg-background print:bg-white text-foreground print:text-black animate-in fade-in duration-500">
        {/* ==================== HEADER ==================== */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="text-center space-y-2 mb-6 resume-header">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight print:text-3xl text-foreground print:text-black">
              {DATA.name}
            </h1>
            <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 print:text-[#004E90] print:text-xs">
              Software Engineer | Full-Stack Product Development &bull; Microservices &bull; React &bull; Node.js &bull; Python &bull; Cloud
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground print:text-black print:text-[8.5pt] mt-2">
              <a
                href="mailto:premhagaragi@gmail.com"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors print:no-underline print:hover:text-black"
              >
                <Mail className="size-3.5 print:size-3" />
                <span>premhagaragi@gmail.com</span>
              </a>
              <span className="text-zinc-300 dark:text-zinc-700 print:text-[#9AA0A6]">&bull;</span>
              <a
                href="tel:+918431470494"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors print:no-underline print:hover:text-black"
              >
                <Phone className="size-3.5 print:size-3" />
                <span>+91 84314 70494</span>
              </a>
              <span className="text-zinc-300 dark:text-zinc-700 print:text-[#9AA0A6]">&bull;</span>
              <a
                href="https://premhagaragi.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors print:no-underline print:hover:text-black"
              >
                <Globe className="size-3.5 print:size-3" />
                <span>premhagaragi.app</span>
              </a>
              <span className="text-zinc-300 dark:text-zinc-700 print:text-[#9AA0A6]">&bull;</span>
              <a
                href="https://linkedin.com/in/premhagaragi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors print:no-underline print:hover:text-black"
              >
                <Linkedin className="size-3.5 print:size-3" />
                <span>linkedin.com/in/premhagaragi</span>
              </a>
            </div>
          </div>
        </BlurFade>

        <div className="space-y-6 print:space-y-3.5">
          {/* ==================== SUMMARY ==================== */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <section className="resume-section">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground print:text-black print:text-[10pt] border-b border-zinc-200 dark:border-zinc-800 pb-0.5 mb-2 border-rule-print">
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground dark:text-zinc-300 print:text-black print:text-[9.5pt] print:leading-[1.25]">
                Software Engineer with 3+ years of <strong className="font-semibold text-foreground print:text-black">product development</strong> experience building <strong className="font-semibold text-foreground print:text-black">full-stack applications</strong> with <strong className="font-semibold text-foreground print:text-black">microservice architectures</strong> across <strong className="font-semibold text-foreground print:text-black">Node.js/TypeScript, Python, and React</strong>. Applies <strong className="font-semibold text-foreground print:text-black">OOP, SOLID principles, and SOA patterns</strong> to deliver maintainable, testable systems. Builds <strong className="font-semibold text-foreground print:text-black">reusable component libraries shared across multiple products</strong>, follows <strong className="font-semibold text-foreground print:text-black">test-driven development</strong>, and deploys through automated <strong className="font-semibold text-foreground print:text-black">CI/CD pipelines</strong> to cloud. Bridges product, UX, and engineering, leveraging <strong className="font-semibold text-foreground print:text-black">AI-assisted workflows</strong> (Copilot) to accelerate SDLC execution.
              </p>
            </section>
          </BlurFade>

          {/* ==================== EXPERIENCE ==================== */}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <section className="resume-section">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground print:text-black print:text-[10pt] border-b border-zinc-200 dark:border-zinc-800 pb-0.5 mb-3 border-rule-print">
                Experience
              </h2>
              <div className="space-y-4 print:space-y-2.5">
                {/* Job 1 */}
                <div className="resume-item">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-sm text-foreground print:text-black print:text-[9.5pt]">
                      Software Engineer
                    </h3>
                    <span className="text-xs italic text-muted-foreground print:text-black print:text-[9pt]">
                      Apr 2026 -- Present
                    </span>
                  </div>
                  <div className="text-xs italic text-blue-600 dark:text-blue-400 print:text-[#004E90] mb-2 print:mb-1">
                    MARQAIT AI (MARQAIT AI LLP) &mdash; AI-Native Product Company
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs space-y-1 text-muted-foreground dark:text-zinc-300 print:text-black print:text-[9pt] print:space-y-0.5 print:ml-3">
                    <li className="list-item-print">
                      Architected a <strong className="font-semibold text-foreground print:text-black">microservice-based SaaS platform</strong> following <strong className="font-semibold text-foreground print:text-black">SOA and domain-driven design</strong> &mdash; defined service boundaries, inter-service contracts, and data ownership across bounded contexts for independent deployability and horizontal scaling.
                    </li>
                    <li className="list-item-print">
                      Developed backend services in <strong className="font-semibold text-foreground print:text-black">Node.js/TypeScript</strong> (NestJS, Express) and <strong className="font-semibold text-foreground print:text-black">Python</strong> (FastAPI) with <strong className="font-semibold text-foreground print:text-black">RESTful APIs</strong>, JWT/OTP auth, RBAC, and typed contracts (Zod, Pydantic); integrated <strong className="font-semibold text-foreground print:text-black">PostgreSQL</strong> (Prisma), <strong className="font-semibold text-foreground print:text-black">MySQL</strong>, and <strong className="font-semibold text-foreground print:text-black">Redis</strong> for caching and pub/sub eventing.
                    </li>
                    <li className="list-item-print">
                      Engineered a <strong className="font-semibold text-foreground print:text-black">shared React 19 + TypeScript component library</strong> (Next.js App Router) consumed across multiple product surfaces &mdash; dashboards, workflow builders, content-approval systems &mdash; applying <strong className="font-semibold text-foreground print:text-black">SOLID principles</strong> and design patterns (Strategy, Observer, Factory) to ensure reusability and testability.
                    </li>
                    <li className="list-item-print">
                      Practiced <strong className="font-semibold text-foreground print:text-black">test-driven development</strong> using Vitest and React Testing Library; wrote unit, integration, and API contract tests achieving 85%+ coverage; owned <strong className="font-semibold text-foreground print:text-black">verification & validation</strong> workflows for each release cycle.
                    </li>
                    <li className="list-item-print">
                      Partnered with <strong className="font-semibold text-foreground print:text-black">UX designers and product managers</strong> &mdash; reviewed wireframes for feasibility, proposed interaction patterns, and ensured design intent translated faithfully into production UI.
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="resume-item">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-sm text-foreground print:text-black print:text-[9.5pt]">
                      Software Developer
                    </h3>
                    <span className="text-xs italic text-muted-foreground print:text-black print:text-[9pt]">
                      Aug 2023 -- Mar 2026
                    </span>
                  </div>
                  <div className="text-xs italic text-blue-600 dark:text-blue-400 print:text-[#004E90] mb-2 print:mb-1">
                    Minsyst Consulting Private Limited &mdash; Enterprise & E-Commerce Products
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs space-y-1 text-muted-foreground dark:text-zinc-300 print:text-black print:text-[9pt] print:space-y-0.5 print:ml-3">
                    <li className="list-item-print">
                      Built <strong className="font-semibold text-foreground print:text-black">full-stack product features</strong> across multiple client engagements using React, Next.js, and Angular on the frontend with Node.js microservices on the backend &mdash; contributing to <strong className="font-semibold text-foreground print:text-black">20% higher user engagement</strong> and <strong className="font-semibold text-foreground print:text-black">15% improved retention</strong> (measured via analytics dashboards).
                    </li>
                    <li className="list-item-print">
                      Designed and optimized <strong className="font-semibold text-foreground print:text-black">RESTful APIs</strong> for frontend&ndash;backend integration; tuned <strong className="font-semibold text-foreground print:text-black">PostgreSQL and MySQL</strong> queries, implemented client-side caching strategies, and reduced data overhead by <strong className="font-semibold text-foreground print:text-black">25%</strong> while improving page responsiveness &mdash; applied <strong className="font-semibold text-foreground print:text-black">design patterns</strong> (Repository, Adapter) for clean data-access layers.
                    </li>
                    <li className="list-item-print">
                      Performed <strong className="font-semibold text-foreground print:text-black">enterprise-scale debugging and production support</strong> &mdash; diagnosed critical issues across distributed services using structured logging, APM tools, and <strong className="font-semibold text-foreground print:text-black">reverse-engineering</strong> of legacy codebases for targeted fixes without regressions.
                    </li>
                    <li className="list-item-print">
                      Managed end-to-end feature delivery across <strong className="font-semibold text-foreground print:text-black">Agile (Scrum)</strong> sprints; automated CI/CD pipelines with GitLab CI deploying to <strong className="font-semibold text-foreground print:text-black">AWS</strong> (EC2, S3, CloudFront) and <strong className="font-semibold text-foreground print:text-black">Azure App Services</strong>; coordinated releases with product, design, and operations teams.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </BlurFade>

          {/* ==================== PROJECTS ==================== */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <section className="resume-section">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground print:text-black print:text-[10pt] border-b border-zinc-200 dark:border-zinc-800 pb-0.5 mb-3 border-rule-print">
                Projects & Open Source
              </h2>
              <div className="space-y-3 print:space-y-2">
                {/* Project 1 */}
                <div className="resume-item">
                  <div className="flex items-center gap-1 font-bold text-sm text-foreground print:text-black print:text-[9.5pt] mb-1">
                    <a
                      href="https://marketmapmaker.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 print:text-[#004E90] hover:underline flex items-center gap-1 group"
                    >
                      Market Map Maker &mdash; Interactive Market Landscape Platform
                      <ExternalLink className="size-3.5 inline no-print group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs text-muted-foreground dark:text-zinc-300 print:text-black print:text-[9pt] print:ml-3">
                    <li className="list-item-print">
                      Built a full-stack <strong className="font-semibold text-foreground print:text-black">Next.js + TypeScript</strong> SaaS platform enabling users to create, manage, and publish interactive market landscape maps; implemented an <strong className="font-semibold text-foreground print:text-black">AI-powered data enrichment pipeline</strong>, drag-and-drop canvas with real-time state synchronization (<strong className="font-semibold text-foreground print:text-black">Zustand</strong>), spreadsheet-style CRUD, and multi-format export (PNG, PDF); deployed on <strong className="font-semibold text-foreground print:text-black">Vercel</strong> with <strong className="font-semibold text-foreground print:text-black">Supabase</strong> (PostgreSQL + Auth + Storage) as the backend.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="resume-item">
                  <div className="flex items-center gap-1 font-bold text-sm text-foreground print:text-black print:text-[9.5pt] mb-1">
                    <a
                      href="https://www.bloort.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 print:text-[#004E90] hover:underline flex items-center gap-1 group"
                    >
                      Bloort.ai &mdash; RAG-Powered Chatbot Builder
                      <ExternalLink className="size-3.5 inline no-print group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs text-muted-foreground dark:text-zinc-300 print:text-black print:text-[9pt] print:ml-3">
                    <li className="list-item-print">
                      Developed a production <strong className="font-semibold text-foreground print:text-black">RAG chatbot platform</strong> that converts any URL into a deployable chatbot in under 60 seconds; engineered the ingestion pipeline (<strong className="font-semibold text-foreground print:text-black">Firecrawl</strong> scraping, <strong className="font-semibold text-foreground print:text-black">LangChain</strong> recursive chunking), vector storage (<strong className="font-semibold text-foreground print:text-black">Pinecone</strong>), dense retrieval with <strong className="font-semibold text-foreground print:text-black">OpenAI embeddings</strong> (recall@1: 95%), and an <strong className="font-semibold text-foreground print:text-black">eval harness</strong> comparing retrieval strategies &mdash; built with <strong className="font-semibold text-foreground print:text-black">Next.js</strong>, deployed on <strong className="font-semibold text-foreground print:text-black">Vercel</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </BlurFade>

          {/* ==================== SKILLS ==================== */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <section className="resume-section">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground print:text-black print:text-[10pt] border-b border-zinc-200 dark:border-zinc-800 pb-0.5 mb-2.5 border-rule-print">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs text-muted-foreground dark:text-zinc-300 print:text-black print:text-[9.2pt] print:leading-[1.25]">
                <div>
                  <strong className="text-foreground print:text-black font-bold">Languages: </strong>
                  <strong className="font-semibold text-foreground print:text-black">TypeScript</strong>, <strong className="font-semibold text-foreground print:text-black">JavaScript (ES6+)</strong>, <strong className="font-semibold text-foreground print:text-black">Python</strong>, HTML5, CSS3
                </div>
                <div>
                  <strong className="text-foreground print:text-black font-bold">Backend & APIs: </strong>
                  <strong className="font-semibold text-foreground print:text-black">Node.js</strong> (NestJS, Express), <strong className="font-semibold text-foreground print:text-black">Python</strong> (FastAPI), <strong className="font-semibold text-foreground print:text-black">RESTful APIs</strong>, JWT/OTP auth, Pydantic, Zod
                </div>
                <div>
                  <strong className="text-foreground print:text-black font-bold">Frontend: </strong>
                  <strong className="font-semibold text-foreground print:text-black">React.js</strong> (18/19), <strong className="font-semibold text-foreground print:text-black">Next.js</strong> (App Router), Angular; Redux, Zustand, Context API, TanStack Query; Tailwind CSS, Material UI, shadcn/ui
                </div>
                <div>
                  <strong className="text-foreground print:text-black font-bold">Databases: </strong>
                  <strong className="font-semibold text-foreground print:text-black">PostgreSQL</strong>, <strong className="font-semibold text-foreground print:text-black">MySQL</strong>, <strong className="font-semibold text-foreground print:text-black">Redis</strong>, Supabase, Firebase, Prisma ORM, SQLAlchemy
                </div>
                <div>
                  <strong className="text-foreground print:text-black font-bold">Cloud & DevOps: </strong>
                  <strong className="font-semibold text-foreground print:text-black">AWS</strong> (EC2, S3, CloudFront), <strong className="font-semibold text-foreground print:text-black">Azure</strong> (App Services), <strong className="font-semibold text-foreground print:text-black">Docker</strong>, GitHub Actions, GitLab CI/CD, Git, Vite, Webpack
                </div>
                <div>
                  <strong className="text-foreground print:text-black font-bold">Engineering Practices: </strong>
                  <strong className="font-semibold text-foreground print:text-black">OOP</strong>, <strong className="font-semibold text-foreground print:text-black">SOLID</strong>, Design Patterns (Strategy, Observer, Factory, Repository), <strong className="font-semibold text-foreground print:text-black">SOA</strong>, Domain-Driven Design
                </div>
                <div>
                  <strong className="text-foreground print:text-black font-bold">Testing & Quality: </strong>
                  <strong className="font-semibold text-foreground print:text-black">TDD</strong>, Vitest, React Testing Library, Jest, Pytest; Production Debugging, Reverse Engineering, APM
                </div>
                <div>
                  <strong className="text-foreground print:text-black font-bold">Productivity: </strong>
                  Agile/Scrum, Code Reviews, <strong className="font-semibold text-foreground print:text-black">GitHub Copilot</strong>, AI-Assisted Development Workflows
                </div>
              </div>
            </section>
          </BlurFade>

          {/* ==================== EDUCATION ==================== */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <section className="resume-section">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground print:text-black print:text-[10pt] border-b border-zinc-200 dark:border-zinc-800 pb-0.5 mb-2.5 border-rule-print">
                Education & Certifications
              </h2>
              <div className="space-y-2">
                <div className="resume-item">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <div className="text-xs text-muted-foreground dark:text-zinc-300 print:text-black print:text-[9.5pt]">
                      <strong className="font-bold text-foreground print:text-black">Gogte Institute of Technology</strong>, Belagavi &mdash; <span className="italic print:text-xs">B.E., Computer Science &mdash; CGPA: 8.1/10</span>
                    </div>
                    <span className="text-xs italic text-muted-foreground print:text-black print:text-[9pt]">
                      2019--2023
                    </span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground dark:text-zinc-400 print:text-black print:text-[9pt]">
                  <strong className="font-semibold text-foreground print:text-black">Certs:</strong> Micro Front-End Architecture with React (LinkedIn) &bull; CI/CD for Beginners (SimpliLearn, 2025)
                </div>
              </div>
            </section>
          </BlurFade>
        </div>
      </div>
    </main>
  );
}
