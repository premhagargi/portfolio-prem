"use client";

import { motion } from "framer-motion";
import { IconProps } from "@/components/icons";

export interface TechLogo {
  icon: (props: IconProps) => JSX.Element;
  label: string;
}

interface ServiceCardProps {
  techLogos: TechLogo[];
  title: string;
  description: string;
  deliverables: string[];
}

export function ServiceCard({
  techLogos,
  title,
  description,
  deliverables,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)] transition-shadow duration-300"
    >
      {/* Tech logos strip */}
      <div className="flex flex-wrap items-center gap-2">
        {techLogos.map(({ icon: Icon, label }) => (
          <div
            key={label}
            title={label}
            className="flex items-center justify-center rounded-lg bg-muted/60 p-1.5 ring-1 ring-border/30"
          >
            <Icon className="size-5 text-foreground/80" />
          </div>
        ))}
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
      <ul className="flex flex-col gap-2 mt-auto pt-2">
        {deliverables.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-primary/70" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
