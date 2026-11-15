import React from 'react'
import { Mail, Github, Linkedin, Instagram, FileText, ArrowUp } from 'lucide-react'

export default function ContactSection() {
  return (
    <footer id="contact" className="pt-20 sm:pt-28 pb-12 bg-surface border-t border-border-theme transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
            06 / Connect
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-ink leading-[0.95] mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-base sm:text-xl text-ink-muted leading-relaxed font-normal">
            Open for AI engineering roles, cognitive neuroscience research collaborations, and ambitious systems. The fastest way to reach me is email.
          </p>
        </div>

        {/* Large Direct Email Link */}
        <div className="mb-14 pb-12 border-b border-border-theme">
          <a
            href="mailto:architjagadeb2019@gmail.com"
            className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-3xl md:text-4xl font-heading font-bold text-ink hover:text-accent transition-colors underline underline-offset-8 decoration-border-theme hover:decoration-accent break-all sm:break-normal"
          >
            <Mail size={24} className="text-accent shrink-0" />
            <span>architjagadeb2019@gmail.com</span>
          </a>
        </div>

        {/* Links Grid */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-border-theme text-xs font-mono uppercase tracking-widest text-ink">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="https://github.com/architjagadeb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Github size={14} />
              <span>GitHub ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/archit-jagadeb-/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Linkedin size={14} />
              <span>LinkedIn ↗</span>
            </a>
            <a
              href="https://www.instagram.com/architjagadeb._/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Instagram size={14} />
              <span>Instagram ↗</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1hiaurPUV9jTuqtkydW433p6KH7dF9Jv4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <FileText size={14} />
              <span>Résumé PDF ↓</span>
            </a>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-1 text-ink-muted hover:text-ink transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </a>
        </div>

        {/* Minimal Copyright Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ink-subtle text-center sm:text-left">
          <span className="max-w-full break-words">&copy; {new Date().getFullYear()} Archit Jagadeb • New Delhi, India</span>
          <span className="max-w-full break-words">Designed &amp; engineered with React, Vite &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
