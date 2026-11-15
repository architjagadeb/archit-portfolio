import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-border-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
            01 / Background
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-ink">
            About Archit
          </h2>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-border-theme bg-surface p-3 shadow-lg">
              <div className="overflow-hidden rounded-xl bg-canvas aspect-[4/5] flex items-end justify-center">
                <img
                  src="/port-1-hd-nobg.png"
                  alt="Archit Jagadeb"
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  onError={(e) => {
                    // Fallback to jpg if png not available
                    e.currentTarget.src = '/port-1.jpg'
                  }}
                />
              </div>
              <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-ink-muted">
                <span>Archit Jagadeb</span>
                <span className="text-accent font-medium">B.Tech CS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-ink-muted font-normal">
            <p className="text-xl sm:text-2xl text-ink font-normal leading-snug">
              I am a computer science student and builder currently researching VR-based neurofeedback frameworks while developing practical AI-driven applications.
            </p>

            <p>
              At <strong className="text-ink font-medium">IIT Ropar</strong>, I work as a Summer Research Intern in Cognitive &amp; Computational Neuroscience, engineering a closed-loop virtual reality environment for ADHD attention remediation that dynamically modulates difficulty according to real-time behavioral biomarkers.
            </p>

            <p>
              My engineering stack spans <strong className="text-ink font-medium">Python</strong>, <strong className="text-ink font-medium">TypeScript</strong>, <strong className="text-ink font-medium">FastMCP</strong>, <strong className="text-ink font-medium">FastAPI</strong>, and <strong className="text-ink font-medium">React</strong>. Whether developing autonomous multi-server email bots or conducting 100+ respondent field studies for government policy formulation with the Swarna Jayanti Haryana Institute, I prioritize clean architectural foundations and real-world utility.
            </p>

            <div className="pt-4 border-t border-border-theme grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs font-mono uppercase tracking-wider text-ink">
              <div className="p-3 rounded-lg bg-surface border border-border-theme">
                <span className="block text-ink-subtle text-[11px] mb-1">Education</span>
                <span className="break-words">The Northcap Univ.</span>
              </div>
              <div className="p-3 rounded-lg bg-surface border border-border-theme">
                <span className="block text-ink-subtle text-[11px] mb-1">Research</span>
                <span className="break-words">IIT Ropar</span>
              </div>
              <div className="p-3 rounded-lg bg-surface border border-border-theme">
                <span className="block text-ink-subtle text-[11px] mb-1">Award</span>
                <span className="break-words">Murf AI 4th Place</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
