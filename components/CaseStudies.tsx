"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Section } from "./Section";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="// IMPACT"
      title={
        <>
          Deep dives into{" "}
          <span className="bg-gradient-to-r from-cyan-glow to-emerald-glow bg-clip-text text-transparent">
            shipped systems
          </span>
          .
        </>
      }
      subtitle="How we solved real problems, scaled platforms, and shipped outcomes that matter."
    >
      <div className="space-y-6">
        {caseStudies.map((study, i) => (
          <motion.article
            key={study.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative"
          >
            <div className="panel-glow p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="label-mono text-cyan-glow">{study.projectName}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {study.title}
                      </h3>
                    </div>
                    <a
                      href={`/case-studies/${study.slug}`}
                      className="group/link mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition-all hover:border-cyan-glow/40 hover:text-cyan-glow"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  <div className="space-y-4 mt-5">
                    <div>
                      <p className="label-mono mb-2">Challenge</p>
                      <p className="text-sm text-white/65 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="label-mono mb-2">Solution</p>
                      <p className="text-sm text-white/65 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <p className="label-mono mb-3">Results</p>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm">
                            <TrendingUp
                              size={14}
                              className="text-emerald-glow mt-0.5 shrink-0"
                            />
                            <span className="text-white/70">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {study.testimonial && (
                    <div className="mt-6 border-l-2 border-cyan-glow/30 pl-4 py-2">
                      <blockquote className="text-sm italic text-white/70">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="mt-2 font-mono text-xs text-white/50">
                        — {study.testimonial.author} · {study.testimonial.role}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="label-mono mb-4">Key Metrics</p>
                    <div className="grid grid-cols-2 gap-3">
                      {study.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-md border border-white/5 bg-ink-800/40 p-3"
                        >
                          <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                            {m.label}
                          </div>
                          <div className="mt-1 font-mono font-semibold text-emerald-glow">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="label-mono mb-3">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.stack.map((tech) => (
                        <span key={tech} className="chip text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
