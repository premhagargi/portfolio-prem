import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";
import { ServiceCard } from "@/components/service-card";
import Link from "next/link";

export const metadata = {
  title: "Services | Prem Hagaragi",
  description:
    "Hire Prem Hagaragi for full-stack web development, AI integration, custom enterprise platforms, and SEO optimisation.",
};

const BLUR_FADE_DELAY = 0.04;

const SERVICES = [
  {
    title: "Full-Stack Web Development",
    description:
      "Need a fast, scalable web product? I design and ship complete full-stack applications — from pixel-perfect React/Next.js frontends to robust Node.js backends and production-ready databases.",
    deliverables: [
      "API Architecture & Development",
      "Responsive Modern UI/UX",
      "Database Modeling & Optimization",
    ],
    techLogos: [
      { icon: Icons.react, label: "React" },
      { icon: Icons.nextjs, label: "Next.js" },
      { icon: Icons.nodejs, label: "Node.js" },
      { icon: Icons.postgresql, label: "PostgreSQL" },
      { icon: Icons.mongodb, label: "MongoDB" },
    ],
  },
  {
    title: "AI Integration & Agentic Systems",
    description:
      "Want AI actually built into your product? I integrate LLM APIs (Gemini, Claude, OpenAI), build RAG pipelines, connect vector databases, and ship autonomous agent workflows that work in production.",
    deliverables: [
      "LLM / RAG Pipeline Setup",
      "Vector DB Integration (Pinecone)",
      "Custom AI Chatbot & Agents",
    ],
    techLogos: [
      { icon: Icons.gemini, label: "Google Gemini" },
      { icon: Icons.anthropic, label: "Anthropic / Claude" },
      { icon: Icons.openai, label: "OpenAI" },
      { icon: Icons.pinecone, label: "Pinecone" },
    ],
  },
  {
    title: "Custom Interactive Platforms",
    description:
      "Building something complex — a dashboard, document pipeline, or multi-tenant SaaS? I architect and deliver custom enterprise platforms that are fast, maintainable, and built to scale from day one.",
    deliverables: [
      "Document Generation Pipelines",
      "Dynamic Dashboard Systems",
      "Performant & Accessible UI",
    ],
    techLogos: [
      { icon: Icons.typescript, label: "TypeScript" },
      { icon: Icons.react, label: "React" },
      { icon: Icons.supabase, label: "Supabase" },
      { icon: Icons.docker, label: "Docker" },
    ],
  },
  {
    title: "SEO & Web Optimization",
    description:
      "Want your site found on Google? I implement structured schema, Core Web Vitals fixes, and modern SEO best practices so your product ranks higher and loads faster — measurably.",
    deliverables: [
      "Schema & Structured Data Markup",
      "Core Web Vitals & Performance",
      "On-Page SEO Best Practices",
    ],
    techLogos: [
      { icon: Icons.google, label: "Google Search" },
      { icon: Icons.lighthouse, label: "Lighthouse" },
      { icon: Icons.nextjs, label: "Next.js" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="mx-auto w-full max-w-2xl space-y-14 py-12 px-4">

        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Services I Offer
            </h1>
            <p className="text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug max-w-[540px] mx-auto">
              I partner with startups and product teams to ship high-quality
              software — fast. Here&apos;s what I can do for you.
            </p>
          </div>
        </BlurFade>

        {/* Cards Grid — equal-height rows via grid + h-full on cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 [&>*]:h-full">
          {SERVICES.map((service, id) => (
            <BlurFade
              key={service.title}
              delay={BLUR_FADE_DELAY * 2 + id * 0.1}
              inView
            >
              <ServiceCard
                techLogos={service.techLogos}
                title={service.title}
                description={service.description}
                deliverables={service.deliverables}
              />
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
          <div className="flex flex-col items-center gap-4 text-center rounded-2xl border border-border/50 bg-card/60 p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold tracking-tight">
              Ready to start a project?
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm">
              Tell me what you&apos;re building and I&apos;ll tell you how I can
              help. I typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:premhagaragi@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-6 py-2.5 text-sm font-medium transition-all hover:opacity-85 active:scale-95"
              >
                ✉️ premhagaragi@gmail.com
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-medium transition-all hover:bg-muted active:scale-95"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
