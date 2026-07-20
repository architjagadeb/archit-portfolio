import { ExternalLink, Github } from 'lucide-react'
import FadeIn from './FadeIn'

interface Project {
  title: string
  techStack: string
  description: string
  coverImage: string
  livePreviewUrl: string | null
  repoUrl: string | null
}

const projects: Project[] = [
  {
    title: 'ArthaX — Personal Finance & Expense Tracker',
    techStack: 'Flask / SQLAlchemy / Chart.js',
    description:
      'Full-stack finance web app with real-time dashboards, savings goals, and CSV export for analytics-ready insights. Deployed on Render.',
    coverImage: '/projects/arthax.jpg',
    livePreviewUrl: 'https://arthax.onrender.com/portfolio',
    repoUrl: 'https://github.com/architjagadeb/ArthaX',
  },
  {
    title: 'Daily Assistant Email Bot',
    techStack: 'Python / MCP / FastMCP / Groq API',
    description:
      'Autonomous bot delivering personalized morning and evening briefings — news, calendar, health, and finance — via local cron jobs, zero cost.',
    coverImage: '/projects/bot.jpg',
    livePreviewUrl: null,
    repoUrl: 'https://github.com/architjagadeb/daily-assistant',
  },
  {
    title: 'BarWars',
    techStack: 'HTML5 / CSS / JavaScript',
    description:
      'AI-driven rap battle web app with real-time voice generation, ripple visual effects, and audience voting. 4th place, Murf AI Coding Challenge 2025.',
    coverImage: '/projects/barwars.jpg',
    livePreviewUrl: null,
    repoUrl: 'https://github.com/architjagadeb/BarWars',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <article
        className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-[#D7E2EA]/20"
        style={{ boxShadow: '0 0 40px rgba(215, 226, 234, 0.06)' }}
      >
        <div className="overflow-hidden rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-[44px] border-b border-[#D7E2EA]/15 bg-[#151515]">
          <img
            src={project.coverImage}
            alt={`${project.title} cover`}
            className="w-full aspect-[16/9] object-cover"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              const fallback = target.nextElementSibling as HTMLElement | null
              if (fallback) fallback.style.display = 'flex'
            }}
          />
          <div
            className="hidden aspect-[16/9] w-full items-center justify-center text-[#D7E2EA]/40 text-xs uppercase tracking-wide"
            aria-hidden="true"
          >
            Add screenshot
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 px-6 sm:px-8 md:px-10 py-7 sm:py-8 md:py-10">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3
              className="font-bold leading-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 2.25rem)' }}
            >
              {project.title}
            </h3>
            <p
              className="font-medium uppercase tracking-wider"
              style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.75rem, 1.4vw, 0.95rem)' }}
            >
              {project.techStack}
            </p>
            <p
              className="font-light leading-relaxed max-w-3xl"
              style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)' }}
            >
              {project.description}
            </p>
          </div>

          {(project.livePreviewUrl || project.repoUrl) && (
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              {project.livePreviewUrl && (
                <a
                  href={project.livePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm font-medium transition-opacity duration-200 hover:opacity-70 hover:underline underline-offset-4"
                >
                  <ExternalLink size={18} />
                  Live Preview
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm font-medium transition-opacity duration-200 hover:opacity-70 hover:underline underline-offset-4"
                >
                  <Github size={18} />
                  Repo Url
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </FadeIn>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-40"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
