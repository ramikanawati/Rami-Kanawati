"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { Section } from "./Section";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <Section
      id="blog"
      eyebrow="// INSIGHTS"
      title={
        <>
          Writing about{" "}
          <span className="bg-gradient-to-r from-cyan-glow to-emerald-glow bg-clip-text text-transparent">
            architecture and AI
          </span>
          .
        </>
      }
      subtitle="Articles on building scalable systems, AI agents, and production engineering."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="group panel-glow flex flex-col p-6 sm:p-7 hover:border-cyan-glow/40"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60">
                {post.category}
              </span>
            </div>

            <h3 className="mt-2 text-lg font-semibold text-white leading-snug">
              {post.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/65 flex-grow">
              {post.excerpt}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span key={tag} className="chip text-[10px]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 border-t border-white/5 pt-4 flex items-center justify-between text-xs text-white/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    month: "short",
                    day: "numeric"
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>
              <a
                href={`/blog/${post.slug}`}
                className="group/link inline-flex items-center justify-center h-6 w-6 rounded-md border border-white/10 bg-white/5 text-white/70 transition-all hover:border-cyan-glow/40 hover:text-cyan-glow"
              >
                <ArrowUpRight
                  size={12}
                  className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
