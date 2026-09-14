"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  accentColor?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  deliverables,
  accentColor = "from-blue-500/20 to-purple-500/20",
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`
        group relative flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/60 p-6
        backdrop-blur-sm
        hover:border-primary/30 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]
        transition-shadow duration-300
      `}
    >
      {/* Icon badge */}
      <div
        className={`
          inline-flex w-fit items-center justify-center rounded-xl
          bg-gradient-to-br ${accentColor}
          p-3 ring-1 ring-border/40
        `}
      >
        <Icon className="size-5 text-foreground" strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Deliverables */}
      <ul className="mt-auto flex flex-col gap-2">
        {deliverables.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-1.5 shrink-0 rounded-full bg-primary/70" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
