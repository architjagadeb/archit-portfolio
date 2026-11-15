import React from 'react'
import { ArrowDown, MapPin, ExternalLink } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 sm:pt-24 md:pt-32 pb-20 sm:pb-28 border-b border-border-theme overflow-hidden">
      {/* Subtle gently drifting thin-line background grid */}
      <div
        className="absolute inset-0 pointer-events-none animated-grid opacity-75"
        aria-hidden="true"
      />
      {/* Soft gradient fade ensuring understated contrast and high readability */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-canvas/30 via-transparent to-canvas/80"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Eyebrow & Status */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-ink-muted mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border-theme text-ink w-fit">
            <MapPin size={13} className="text-accent shrink-0" />
            <span>New Delhi, India</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-medium w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Open to AI &amp; Research Roles</span>
          </span>
        </div>

        {/* Large Editorial Name */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.92] uppercase text-ink break-words">
            <span className="block">Archit</span>
            <span className="block text-ink-muted">Jagadeb</span>
          </h1>
        </div>

        {/* Editorial Headline / Lede */}
        <p className="max-w-2xl text-base sm:text-2xl md:text-[1.65rem] font-normal leading-relaxed sm:leading-relaxed text-ink-muted mb-8 sm:mb-12">
          CS student &amp; developer building at the intersection of{' '}
          <strong className="text-ink font-semibold">AI systems</strong>,{' '}
          <strong className="text-ink font-semibold">cognitive neuroscience</strong>, and{' '}
          <strong className="text-ink font-semibold">production full-stack apps</strong>.
        </p>

        {/* Action Buttons: See the work & Resume */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 font-mono text-xs sm:text-sm uppercase tracking-wider">
          {/* Primary CTA: See the work */}
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-ink text-canvas font-medium hover:opacity-90 transition-all active:scale-95 shadow-md"
          >
            <span>See the work</span>
            <ArrowDown size={14} />
          </a>

          {/* Resume Link */}
          <a
            href="https://drive.google.com/file/d/1hiaurPUV9jTuqtkydW433p6KH7dF9Jv4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-3 sm:px-4 sm:py-3.5 rounded-xl text-ink-muted hover:text-ink transition-colors"
          >
            <span>Résumé</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
