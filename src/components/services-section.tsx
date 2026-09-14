"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ServiceCard } from "@/components/service-card";
import {
  Bot,
  Code2,
  Globe,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const SERVICES = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Building scalable, performant full-stack web applications using React, Next.js, Node.js, and modern databases. From pixel-perfect UIs to resilient server-side architectures.",
    deliverables: [
      "API Architecture & Development",
      "Responsive Modern UI/UX",
      "Database Modeling & Optimization",
    ],
    accentColor: "from-blue-500/25 to-cyan-500/15",
  },
  {
    icon: Bot,
    title: "AI Integration & Agentic Systems",
    description:
      "Integrating LLM APIs, Gemini/Claude workflows, and custom vector databases to build AI-powered features, chatbots, and autonomous agent pipelines that deliver real business value.",
    deliverables: [
      "LLM / RAG Pipeline Setup",
      "Vector DB Integration (Pinecone)",
      "Custom AI Chatbot & Agents",
    ],
    accentColor: "from-violet-500/25 to-purple-500/15",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Interactive Platforms",
    description:
      "Developing enterprise web apps, PDF/document generation pipelines, and dynamic dashboard architectures — built for performance, scale, and rich user experiences.",
    deliverables: [
      "Document Generation Pipelines",
      "Dynamic Dashboard Systems",
      "Performant & Accessible UI",
    ],
    accentColor: "from-emerald-500/25 to-teal-500/15",
  },
  {
    icon: Globe,
    title: "SEO & Web Optimization",
    description:
      "Implementing structured schema markup, Core Web Vitals optimization, and modern SEO best practices to drive high search visibility and measurable organic growth.",
    deliverables: [
      "Schema & Structured Data Markup",
      "Core Web Vitals & Performance",
      "On-Page SEO Best Practices",
    ],
    accentColor: "from-orange-500/25 to-amber-500/15",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12">
      <div className="space-y-12">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What I Build
              </h2>
              <p className="text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug max-w-[600px] mx-auto">
                End-to-end engineering across the full product stack — from
                frontend craft to AI-powered backends.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
          {SERVICES.map((service, id) => (
            <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 2 + id * 0.08} inView>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                deliverables={service.deliverables}
                accentColor={service.accentColor}
              />
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-muted-foreground text-sm max-w-sm">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-6 py-2.5 text-sm font-medium transition-all hover:opacity-85 active:scale-95"
            >
              Let&apos;s Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
