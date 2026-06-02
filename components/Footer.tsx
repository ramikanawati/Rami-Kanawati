"use client";

import { Github, Linkedin, Youtube, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent" />

      <div className="mx-auto max-w-7xl container-px py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Navigation
            </div>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Resources
            </div>
            <div className="space-y-2">
              <a
                href="/Rami_Kanawati_CV.docx"
                download
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                Download CV
                <ExternalLink size={12} />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                GitHub Profile
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Legal
            </div>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Social
            </div>
            <div className="flex gap-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition-all hover:border-cyan-glow/30 hover:text-cyan-glow"
              >
                <Github size={14} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition-all hover:border-cyan-glow/30 hover:text-cyan-glow"
              >
                <Linkedin size={14} />
              </a>
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition-all hover:border-red-500/30 hover:text-red-400"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              // SIGNED OFF
            </div>
            <div className="mt-2 text-xs text-white/60">
              Built &amp; maintained by <span className="text-white">{profile.name}</span> · Next.js 16 · Tailwind · Framer Motion
            </div>
          </div>
          <div className="text-xs text-white/40">© {year} Rami Kanawati. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
