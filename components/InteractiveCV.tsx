"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, Mail, FileText } from "lucide-react";
import clsx from "clsx";
import { Section } from "./Section";
import { experiences, techStack } from "@/lib/data";

export function InteractiveCV() {
  const [expandedExp, setExpandedExp] = useState<string | null>("0");

  return (
    <Section
      id="cv"
      eyebrow="// CREDENTIALS"
      title={
        <>
          Full history &amp;{" "}
          <span className="bg-gradient-to-r from-cyan-glow to-emerald-glow bg-clip-text text-transparent">
            skill inventory
          </span>
          .
        </>
      }
      subtitle="From experience timeline to technical proficiencies, here's the complete picture."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group"
            >
              <button
                onClick={() =>
                  setExpandedExp(expandedExp === i.toString() ? null : i.toString())
                }
                className="w-full text-left"
              >
                <div
                  className={clsx(
                    "panel-glow p-4 sm:p-6 transition-all duration-300",
                    expandedExp === i.toString() && "border-cyan-glow/40"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="label-mono text-emerald-glow">{exp.period}</p>
                        <p className="label-mono text-white/50">{exp.type}</p>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        {exp.company}
                      </h3>
                      <p className="mt-1 text-sm text-white/65">{exp.role}</p>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedExp === i.toString() ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 shrink-0"
                    >
                      <ChevronDown size={18} className="text-white/50" />
                    </motion.div>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expandedExp === i.toString() && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-x border-b border-white/5 bg-white/[0.02]"
                  >
                    <div className="px-4 py-6 sm:px-6 space-y-4">
                      <p className="text-sm text-white/70 leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <p className="label-mono mb-3">Key Highlights</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex gap-2 text-sm">
                              <span className="text-cyan-glow mt-1">→</span>
                              <span className="text-white/70">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="chip text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="panel p-6"
          >
            <p className="label-mono mb-4">Quick Actions</p>
            <div className="space-y-2">
              <a
                href="/Rami_Kanawati_CV.docx"
                download
                className="flex items-center gap-2 w-full rounded-md border border-emerald-glow/40 bg-emerald-glow/10 px-4 py-3 text-sm font-medium text-emerald-glow transition-all hover:bg-emerald-glow/20 justify-center"
              >
                <Download size={14} />
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/rkanawati96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 transition-all hover:border-white/20 hover:text-white justify-center"
              >
                <FileText size={14} />
                LinkedIn Profile
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 w-full rounded-md border border-cyan-glow/40 bg-cyan-glow/10 px-4 py-3 text-sm font-medium text-cyan-glow transition-all hover:bg-cyan-glow/20 justify-center"
              >
                <Mail size={14} />
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="panel p-6"
          >
            <p className="label-mono mb-4">Core Skills</p>
            <div className="space-y-3">
              {Object.entries(techStack.reduce((acc, tech) => {
                if (!acc[tech.category]) acc[tech.category] = [];
                acc[tech.category].push(tech.name);
                return acc;
              }, {} as Record<string, string[]>)).map(([category, skills]) => (
                <div key={category}>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill) => (
                      <span key={skill} className="chip text-[9px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
