import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  lede: string
  bullets: string[]
  tags: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'iit-ropar',
    company: 'Indian Institute of Technology Ropar',
    role: 'Summer Research Intern — Cognitive & Computational Neuroscience',
    period: 'June 2026 – Present',
    location: 'Remote',
    lede: 'Architecting a VR-based therapeutic gaming framework for ADHD remediation with closed-loop neurofeedback.',
    bullets: [
      'Integrating principles from cognitive and computational neuroscience to design attention-training game mechanics that dynamically adapt difficulty based on real-time behavioral biomarkers (response inhibition latency and sustained attention metrics).',
      'Engineering the neurofeedback pipeline and game logic modules in collaboration with clinical researchers, enabling closed-loop stimulus modulation within immersive environments to reinforce executive function pathways.',
      'Quantifying longitudinal symptom improvement metrics and telemetry across patient sessions.',
    ],
    tags: ['Python', 'Cognitive Neuroscience', 'VR Logic', 'Neurofeedback', 'Bio-markers'],
  },
  {
    id: 'haryana-institute',
    company: 'Swarna Jayanti Haryana Institute for Fiscal Management',
    role: 'Data Collection Intern',
    period: 'June 2026 – July 2026',
    location: 'Gurugram, India',
    lede: 'Primary field surveys and multi-stakeholder data collection for a government-commissioned Haryana Skill Gap Study.',
    bullets: [
      'Conducted primary field surveys across Gurugram district engaging 100+ respondents spanning youth, industry representatives, government officials, and academic institutions using KoboCollect.',
      'Enforced rigorous end-to-end data integrity checks and timely submission per prescribed frameworks, forwarding structured findings to the Haryana Government for evidence-based policy formulation.',
    ],
    tags: ['KoboCollect', 'Data Integrity', 'Field Survey', 'Statistical Verification'],
  },
  {
    id: 'inamigos',
    company: 'InAmigos Foundation',
    role: 'AI Web Development Intern',
    period: 'May 2026 – June 2026',
    location: 'Remote',
    lede: 'Designed and deployed responsive web infrastructure for foundation educational schemes.',
    bullets: [
      'Designed end-to-end UI/UX in Figma and developed a fully deployed website for educational schemes using HTML, CSS, and JavaScript.',
      'Leveraged Cursor (AI-assisted development) to accelerate build cycles, translating Figma designs into clean, responsive web pages with a consistent design language.',
    ],
    tags: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'Cursor AI'],
  },
]

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id)

  const selectedExp =
    EXPERIENCES.find((exp) => exp.id === selectedId) || EXPERIENCES[0]

  const handleSelect = (id: string) => {
    setSelectedId(id)
    const section = document.getElementById('experience')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-border-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
            03 / Experience
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-ink">
            Where I&apos;ve been
          </h2>
          <p className="mt-2 text-ink-muted text-sm sm:text-base font-normal">
            Where I have contributed research, engineering, and empirical data collection.
          </p>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left / Top Selector: Permanent role list */}
          <aside className="lg:col-span-4 flex flex-col gap-2.5">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-subtle mb-1">
              Select Experience
            </p>
            <div className="flex flex-col gap-2.5" role="tablist" aria-label="Experience selector">
              {EXPERIENCES.map((exp) => {
                const isSelected = selectedId === exp.id
                return (
                  <button
                    key={exp.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(exp.id)}
                    className={`group w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 text-xs font-mono uppercase tracking-wider ${
                      isSelected
                        ? 'border-accent bg-surface text-ink shadow-sm ring-1 ring-accent/30'
                        : 'border-border-theme bg-surface/40 text-ink-muted hover:border-border-theme hover:text-ink hover:bg-surface/70'
                    }`}
                  >
                    {/* Active Indicator Dot */}
                    <span
                      className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-all ${
                        isSelected
                          ? 'bg-accent shadow-[0_0_8px_var(--accent)] scale-110'
                          : 'bg-border-theme group-hover:bg-ink-muted'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="flex flex-col">
                      <b
                        className={`text-sm font-bold normal-case transition-colors ${
                          isSelected ? 'text-ink' : 'text-ink-muted group-hover:text-ink'
                        }`}
                      >
                        {exp.company}
                      </b>
                      <span className="text-[11px] text-ink-subtle tracking-normal normal-case mt-0.5">
                        {exp.role.split('—')[0].trim()}
                      </span>
                      <span className="text-[10px] text-ink-subtle mt-1">
                        {exp.period}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </aside>

          {/* Right Panel: Exclusively the Selected Experience's Full Details */}
          <div className="lg:col-span-8 w-full min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedExp.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="rounded-2xl sm:rounded-3xl border border-border-theme bg-surface p-6 sm:p-8 md:p-10 shadow-sm flex flex-col gap-5"
              >
                {/* Period & Location Eyebrow */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-ink-subtle uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
                    <Calendar size={13} />
                    {selectedExp.period}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} />
                    {selectedExp.location}
                  </span>
                </div>

                {/* Role & Highlighted Employer */}
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink leading-snug">
                  {selectedExp.role}{' '}
                  <span className="text-accent font-normal">— {selectedExp.company}</span>
                </h3>

                {/* Executive Lede */}
                <p className="text-sm sm:text-base text-ink font-medium leading-relaxed">
                  {selectedExp.lede}
                </p>

                {/* Impact Bullets */}
                <ul className="space-y-3 text-sm text-ink-muted leading-relaxed list-disc list-outside pl-4 marker:text-accent">
                  {selectedExp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                {/* Tags / Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-theme/60">
                  {selectedExp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-canvas border border-border-theme text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
