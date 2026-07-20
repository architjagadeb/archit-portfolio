import FadeIn from './FadeIn'

const skills = [
  {
    number: '01',
    name: 'Python & Machine Learning',
    description:
      'Supervised and unsupervised learning workflows built with Python, Pandas, and NumPy, applied to real research and side-project data.',
  },
  {
    number: '02',
    name: 'Data Analysis & Visualization',
    description:
      'Turning raw survey and experiment data into clear visual stories using Plotly, Chart.js, and Dash dashboards.',
  },
  {
    number: '03',
    name: 'Web Development',
    description:
      'Full-stack builds with Flask, Node.js, Express, and SQLAlchemy, shipped end to end from design through deployment.',
  },
  {
    number: '04',
    name: 'Cognitive & Computational Research',
    description:
      'Prototyping VR-based neurofeedback systems at IIT Ropar, bridging cognitive science principles with real-time game logic.',
  },
  {
    number: '05',
    name: 'Game Development & Interactive Systems',
    description:
      'Learning C# and Unity to build interactive and VR-based experiences, extending research prototypes into fully realized, testable systems.',
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: '#0C0C0C', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
