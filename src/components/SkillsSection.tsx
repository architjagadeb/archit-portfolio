import React from 'react'
import { Code2, Cpu, Globe, Database, BarChart3, Wrench, LucideIcon } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

const TOOLBOX_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'AI / ML & Agents',
    icon: Cpu,
    skills: ['Model Context Protocol (MCP)', 'FastMCP', 'Groq API', 'RAG Pipelines', 'scikit-learn', 'MediaPipe'],
  },
  {
    title: 'Frameworks & Web',
    icon: Globe,
    skills: ['React', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'Tailwind CSS'],
  },
  {
    title: 'Databases & ORM',
    icon: Database,
    skills: ['SQLite', 'SQLAlchemy', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Data & Visualization',
    icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'Plotly', 'Chart.js', 'Dash', 'Tableau', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vite'],
  },
]

export default function SkillsSection() {
  return (
    <section id="toolbox" className="py-20 sm:py-28 border-b border-border-theme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
            02 / Skills &amp; Stack
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-ink">
            Toolbox
          </h2>
          <p className="mt-2 text-ink-muted text-sm sm:text-base font-normal">
            Technologies and frameworks I build with on a regular basis.
          </p>
        </div>

        {/* Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLBOX_DATA.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.title}
                className="p-6 rounded-2xl border border-border-theme bg-surface hover:border-accent/40 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-ink font-semibold text-base">
                    <div className="w-8 h-8 rounded-lg bg-canvas border border-border-theme flex items-center justify-center text-accent">
                      <Icon size={16} />
                    </div>
                    <span>{group.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-canvas border border-border-theme text-ink-muted hover:text-ink hover:border-accent/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
