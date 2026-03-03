"use client";

import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-y border-t border-border/60">
      <div className="container-x">
        <RevealOnScroll>
          <div className="accent-line label">Skills</div>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.06em] text-text sm:text-5xl">
            What I work with.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-muted">
            A practical stack built for shipping: clean interfaces, reliable APIs, real databases,
            and the tooling that keeps delivery smooth.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-sm border border-border bg-surface p-6"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/10" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[18px]" aria-hidden>
                        {cat.icon}
                      </span>
                      <h3 className="font-display text-xl font-bold tracking-[-0.04em] text-accent">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <SkillBadge key={s}>{s}</SkillBadge>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-sm ring-0 transition-all duration-300 group-hover:ring-1 group-hover:ring-accent/40" />
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

