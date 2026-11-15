import React from 'react'
import { ExternalLink, Github, Trophy, Database, Cpu } from 'lucide-react'

interface Project {
  number: string
  title: string
  tag: string
  description: string
  award?: string
  stack: string[]
  coverImage?: string
  coverAlt?: string
  coverPosition?: string
  liveUrl?: string | null
  repoUrl?: string | null
  kaggleUrl?: string | null
}

function KaggleIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.513c-.234 0-.351-.117-.351-.352V.353c0-.233.117-.353.351-.353h2.423c.234 0 .351.12.351.353v14.074l6.326-6.638c.14-.14.293-.211.458-.211h3.292c.164 0 .258.059.281.176.023.094-.012.188-.105.281L12.57 14.24l6.15 9.338c.07.094.105.188.105.281z" />
    </svg>
  )
}

const PROJECTS: Project[] = [
  {
    number: '01 / 2026 · Machine Learning & Data',
    title: 'Premier League Scouting Dashboard',
    tag: 'Cosine similarity player recommendation model & analytics pipeline',
    description:
      'End-to-end data pipeline merging hand-collected FBref 2025–26 Premier League data (20 club workbooks, 693 players) into a normalized SQLite database with per-90 metrics, featuring a per-position cosine similarity recommendation engine and interactive React drawer.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'SQLite', 'TypeScript', 'React'],
    coverImage: '/projects/pl-scouting-neymar.jpg',
    coverAlt: 'Neymar holding a football',
    coverPosition: 'object-center',
    repoUrl: 'https://github.com/architjagadeb',
    kaggleUrl: 'https://www.kaggle.com/datasets/architjagadeb/premier-league-2025-26-player-statistics',
  },
  {
    number: '02 / 2026 · Autonomous System',
    title: 'Daily Assistant Email Bot',
    tag: 'Personalized morning & evening briefings via MCP orchestration',
    description:
      'Autonomous email agent dispatching comprehensive morning and evening briefings covering top news, Google Calendar, meal/gym suggestions, health telemetry, and daily finance insights — executing locally via cron jobs at zero cost.',
    stack: ['Python', 'Groq API', 'FastMCP', 'Model Context Protocol', 'Gmail SMTP'],
    coverImage: '/projects/bot.jpg',
    repoUrl: 'https://github.com/architjagadeb/daily-assistant',
  },
  {
    number: '03 / 2025 · Full Stack App',
    title: 'ArthaX — Personal Finance Tracker',
    tag: 'Real-time financial analytics & transaction pipeline',
    description:
      'Full-stack personal finance web application with interactive Chart.js dashboards, savings goals, transaction summaries, and CSV analytics export. Engineered using Flask with SQLAlchemy ORM and deployed on Render.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'Chart.js', 'Render'],
    coverImage: '/projects/arthax.jpg',
    liveUrl: 'https://arthax.onrender.com/portfolio',
    repoUrl: 'https://github.com/architjagadeb/ArthaX',
  },
  {
    number: '04 / 2025 · Voice AI',
    title: 'BarWars — AI Rap Battle Web App',
    tag: 'Real-time voice generation & audio ripple visualization',
    description:
      'Interactive AI-driven rap battle web application with real-time vocal synthesis, ripple audio visualizations, and dynamic audience voting mechanism. Awarded 4th place overall in the Murf AI Coding Challenge 2025.',
    award: '🏆 4th Place Overall — Murf AI Coding Challenge 2025',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Murf AI API', 'Audio Visualizer'],
    coverImage: '/projects/barwars.jpg',
    repoUrl: 'https://github.com/architjagadeb/BarWars',
  },
]

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 sm:py-28 border-b border-border-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
            04 / Selected Work
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-ink">
            Featured Projects
          </h2>
          <p className="mt-2 text-ink-muted text-sm sm:text-base font-normal">
            Autonomous agents, full-stack systems, and data pipelines built for production and research.
          </p>
        </div>

        {/* 2x2 Project Cards Grid on desktop/tablet, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl sm:rounded-3xl border border-border-theme bg-surface overflow-hidden shadow-sm hover:border-accent/50 transition-all duration-300 flex flex-col group"
            >
              {/* Media Container (Consistent aspect ratio 16/10) */}
              <div className="w-full aspect-[16/10] bg-canvas/60 border-b border-border-theme flex items-center justify-center p-4 sm:p-5">
                {project.coverImage ? (
                  <div className="w-full h-full rounded-xl overflow-hidden border border-border-theme bg-surface shadow-inner">
                    <img
                      src={project.coverImage}
                      alt={project.coverAlt || `${project.title} preview`}
                      className={`w-full h-full object-cover ${project.coverPosition || 'object-top'} filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                ) : (
                  /* Clean technical card for PL Scouting Dashboard (no invented screenshot) */
                  <div className="w-full h-full rounded-xl border border-dashed border-border-theme bg-surface/80 p-4 sm:p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs font-mono text-ink-muted uppercase">
                      <span className="flex items-center gap-1.5 text-accent font-semibold">
                        <Database size={14} />
                        SQLite + FBref Pipeline
                      </span>
                      <span>693 Players</span>
                    </div>
                    <div className="my-auto py-1.5">
                      <div className="font-mono text-xs text-ink-muted mb-1">// Cosine Similarity Model</div>
                      <div className="text-sm font-bold text-ink">Per-Position Scouting Engine</div>
                      <div className="text-xs text-ink-subtle mt-1 font-mono">
                        Validations: Haaland, Saka, Van Dijk, Raya
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase text-ink-muted">
                      <span className="flex items-center gap-1.5">
                        <Cpu size={12} className="text-accent" />
                        React Drawer UI
                      </span>
                      <span>Kaggle &amp; GitHub</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Details & Actions */}
              <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-subtle mb-1.5">
                    {project.number}
                  </p>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink leading-tight mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent font-medium mb-3">
                    {project.tag}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Optional Award Badge */}
                  {project.award && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono mb-4">
                      <Trophy size={13} />
                      <span>{project.award}</span>
                    </div>
                  )}

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-canvas border border-border-theme text-ink-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Links */}
                <div className="pt-4 border-t border-border-theme/70 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-ink text-canvas font-medium hover:opacity-90 transition-all shadow-sm"
                    >
                      <span>Live Preview</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border-theme bg-surface hover:bg-surface-hover text-ink transition-colors"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.kaggleUrl && (
                    <a
                      href={project.kaggleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border-theme bg-surface hover:bg-surface-hover text-ink transition-colors"
                    >
                      <KaggleIcon size={14} />
                      <span>Kaggle Dataset</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
