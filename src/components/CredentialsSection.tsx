import React from 'react'
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react'

export default function CredentialsSection() {
  return (
    <section id="credentials" className="py-20 sm:py-28 border-b border-border-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
            05 / The Rest of It
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-ink">
            Education &amp; Credentials
          </h2>
          <p className="mt-2 text-ink-muted text-sm sm:text-base font-normal">
            Academic milestones, hackathon awards, and verified technical certifications.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Column 1: Education */}
          <div className="p-7 rounded-2xl border border-border-theme bg-surface shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-6 text-ink font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-canvas border border-border-theme flex items-center justify-center text-accent">
                <GraduationCap size={18} />
              </div>
              <span>Education</span>
            </div>

            <div className="space-y-6">
              <div className="pb-5 border-b border-border-theme/60">
                <div className="font-heading font-bold text-base text-ink">
                  B.Tech in Computer Science
                </div>
                <div className="text-sm text-ink-muted mt-0.5">
                  The Northcap University
                </div>
                <div className="text-xs font-mono text-ink-subtle mt-1">
                  Sept 2025 – April 2029
                </div>
              </div>

              <div className="pb-5 border-b border-border-theme/60">
                <div className="font-heading font-bold text-base text-ink">
                  ITL Public School
                </div>
                <div className="text-sm text-ink-muted mt-0.5">
                  Class 12th: 84%
                </div>
                <div className="text-xs font-mono text-ink-subtle mt-1">
                  April 2023 – April 2025
                </div>
              </div>

              <div>
                <div className="font-heading font-bold text-base text-ink">
                  ITL Public School
                </div>
                <div className="text-sm text-ink-muted mt-0.5">
                  Class 10th: 92%
                </div>
                <div className="text-xs font-mono text-ink-subtle mt-1">
                  April 2018 – April 2023
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Awards & Competitions */}
          <div className="p-7 rounded-2xl border border-border-theme bg-surface shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-6 text-ink font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-canvas border border-border-theme flex items-center justify-center text-amber-500">
                <Award size={18} />
              </div>
              <span>Honors &amp; Awards</span>
            </div>

            <div className="space-y-6">
              <div className="pb-5 border-b border-border-theme/60">
                <div className="font-heading font-bold text-base text-ink flex items-center gap-2">
                  <span>Top 25,000 Nationwide 2026</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent-muted text-accent border border-accent/20">
                    2026
                  </span>
                </div>
                <div className="text-sm text-ink-muted mt-0.5">
                  Adobe University Hackathon
                </div>
                <div className="text-xs font-mono text-ink-subtle mt-1">
                  Ranked in top 25k of 300,000+ participants
                </div>
              </div>

              <div>
                <div className="font-heading font-bold text-base text-ink flex items-center gap-2">
                  <span>4th Place Overall</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    2025
                  </span>
                </div>
                <div className="text-sm text-ink-muted mt-0.5">
                  Murf AI Coding Challenge (BarWars)
                </div>
                <div className="text-xs font-mono text-ink-subtle mt-1">
                  National AI Speech Battle Hackathon
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Certifications */}
          <div className="p-7 rounded-2xl border border-border-theme bg-surface shadow-sm flex flex-col h-full md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6 text-ink font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-canvas border border-border-theme flex items-center justify-center text-emerald-500">
                <CheckCircle2 size={18} />
              </div>
              <span>Certifications</span>
            </div>

            <div className="space-y-5">
              <div className="pb-4 border-b border-border-theme/60">
                <div className="font-heading font-bold text-base text-ink">
                  Supervised Machine Learning: Regression and Classification
                </div>
                <div className="text-sm text-ink-muted mt-0.5">Stanford University</div>
                <div className="text-xs font-mono text-ink-subtle mt-1">Issued May 2026</div>
              </div>

              <div className="pb-4 border-b border-border-theme/60">
                <div className="font-heading font-bold text-base text-ink">
                  Model Context Protocol: Advanced Topics
                </div>
                <div className="text-sm text-ink-muted mt-0.5">Anthropic</div>
                <div className="text-xs font-mono text-ink-subtle mt-1">Issued Mar 2026</div>
              </div>

              <div>
                <div className="font-heading font-bold text-base text-ink">
                  IBM Data Science Professional
                </div>
                <div className="text-sm text-ink-muted mt-0.5">Coursera</div>
                <div className="text-xs font-mono text-ink-subtle mt-1">Nov 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
