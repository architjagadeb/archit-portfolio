import { type ComponentType, type CSSProperties } from 'react'
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiTensorflow,
  SiMongodb,
  SiFirebase,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiChartdotjs,
  SiReact,
  SiUnity,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiJupyter,
  SiMysql,
} from 'react-icons/si'
import { BrainCircuit, Plug, Database, FileCode } from 'lucide-react'

type IconProps = { size?: number | string; className?: string; color?: string; style?: CSSProperties }
type SkillIcon = ComponentType<IconProps>

type Skill = { name: string; Icon: SkillIcon; color: string }

const skills: Skill[] = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'C', Icon: SiC, color: '#A8B9CC' },
  { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
  { name: 'C#', Icon: SiDotnet, color: '#512BD4' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF' },
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
  { name: 'Django', Icon: SiDjango, color: '#44B78B' },
  { name: 'Flask', Icon: SiFlask, color: '#FFFFFF' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
  { name: 'MCP', Icon: Plug, color: '#06B6D4' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'SQLAlchemy', Icon: Database, color: '#D71F00' },
  { name: 'SQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'Pandas', Icon: SiPandas, color: '#150458' },
  { name: 'NumPy', Icon: SiNumpy, color: '#013243' },
  { name: 'Plotly', Icon: SiPlotly, color: '#3F4F75' },
  { name: 'Chart.js', Icon: SiChartdotjs, color: '#FF6384' },
  { name: 'Dash', Icon: SiPlotly, color: '#3F4F75' },
  { name: 'Machine Learning', Icon: BrainCircuit, color: '#8B5CF6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Unity', Icon: SiUnity, color: '#FFFFFF' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
  { name: 'Vercel', Icon: SiVercel, color: '#FFFFFF' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  { name: 'Jupyter', Icon: SiJupyter, color: '#F37626' },
  { name: 'VS Code', Icon: FileCode, color: '#007ACC' },
]

const FLOAT_BASE_DURATION = 3.5

function getStableJitter(name: string, spread: number): number {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) | 0
  }
  return ((Math.abs(hash) % 1000) / 1000 - 0.5) * 2 * spread
}

const skillsWithMotion = skills.map((skill, index) => ({
  ...skill,
  floatDelay: index * 0.15,
  floatDuration: FLOAT_BASE_DURATION + getStableJitter(skill.name, 0.45),
}))

export default function MarqueeSection() {
  return (
    <section className="pt-24 sm:pt-32 md:pt-40 pb-10 px-5 sm:px-8 md:px-10" style={{ background: '#0C0C0C' }}>
      <div className="flex flex-wrap gap-3 justify-center max-w-6xl mx-auto">
        {skillsWithMotion.map((item, index) => (
          <div
            key={item.name}
            className="inline-flex w-fit items-center justify-center gap-2.5 rounded-full border border-[#D7E2EA]/20 px-5 py-3"
            style={{
              animationName: 'skill-pill-float',
              animationDuration: `${item.floatDuration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${index * 0.15}s`,
              willChange: 'transform',
            }}
          >
            <item.Icon size={20} className="shrink-0" color={item.color} style={{ color: item.color }} />
            <span className="text-[#D7E2EA] uppercase tracking-wider font-medium text-sm whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
