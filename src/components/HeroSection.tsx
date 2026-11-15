import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import Magnet from './Magnet'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

interface HeroSectionProps {
  onOpenChat?: () => void
}

export default function HeroSection({ onOpenChat }: HeroSectionProps) {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 max-w-[1600px] mx-auto w-full">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Heading */}
      <div className="overflow-hidden w-full flex justify-center">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[10.5vw] sm:text-[11.5vw] md:text-[12.5vw] lg:text-[13vw] mt-6 sm:mt-4 md:-mt-5">
            hi, i&apos;m archit
          </h1>
        </FadeIn>
      </div>

      {/* Hero portrait */}
      <div className="flex-1 flex items-center justify-center relative z-10 min-h-0">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-[340px] sm:w-[440px] md:w-[560px] lg:w-[660px]"
        >
          <FadeIn delay={0.6} y={30}>
            {/* TODO: replace with your own photo -- drop it in /public and update the src below */}
            <img
              src="/port-1-hd-nobg.png"
              alt="Archit Jagadeb"
              className="w-full h-auto object-contain mx-auto"
            />
          </FadeIn>
        </Magnet>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto relative z-20">
        <FadeIn delay={0.35} y={20}>
          <ContactButton
            label="Resume"
            href="https://drive.google.com/file/d/1PVPqeU-vE6hOlZVehzfcg7iMhbMP83q9/view"
          />
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton
            label="ASK ARCHIT"
            onClick={onOpenChat}
            ariaLabel="Open Ask Archit AI Chatbot"
          />
        </FadeIn>
      </div>
    </section>
  )
}

