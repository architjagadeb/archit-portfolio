import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import FadeIn from './FadeIn'

// TODO: replace these with your real links
const links = [
  { label: 'Email', href: 'mailto:architjagadeb2019@gmail.com', Icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/archit-jagadeb-/', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/architjagadeb', Icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/architjagadeb._/', Icon: Instagram },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32 flex flex-col items-center gap-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center leading-none"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm font-medium transition-opacity duration-200 hover:opacity-70"
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mt-6">
          &copy; {new Date().getFullYear()} Archit Jagadeb
        </p>
      </FadeIn>
    </section>
  )
}
