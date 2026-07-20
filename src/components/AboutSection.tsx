import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'
import Magnet from './Magnet'

const ABOUT_TEXT =
  "I'm a second-year CS student who moves fluidly between building, researching, and creating. At IIT Ropar, I'm prototyping VR-based neurofeedback tools for ADHD research, working at the intersection of cognitive science and software. Alongside that, I build and ship my own projects, and create content for a growing audience on the side."

const glassIcons = [
  {
    src: '/icons/glass-3.png',
    delay: 0.1,
    x: -80,
    floatDelay: '0s',
    floatDuration: '3.6s',
    className:
      'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[110px] sm:w-[170px] md:w-[220px]',
  },
  {
    src: '/icons/glass-1.png',
    delay: 0.25,
    x: -80,
    floatDelay: '0.5s',
    floatDuration: '3.9s',
    className:
      'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[155px] md:w-[190px]',
  },
  {
    src: '/icons/glass-2.png',
    delay: 0.15,
    x: 80,
    floatDelay: '1s',
    floatDuration: '3.7s',
    className:
      'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[110px] sm:w-[170px] md:w-[220px]',
  },
  {
    src: '/icons/glass-4.png',
    delay: 0.3,
    x: 80,
    floatDelay: '1.5s',
    floatDuration: '4s',
    className:
      'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[185px] md:w-[235px]',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative glass icons */}
      {glassIcons.map((icon) => (
        <FadeIn
          key={icon.src}
          delay={icon.delay}
          x={icon.x}
          y={0}
          duration={0.9}
          className={icon.className}
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <div
              className="w-full"
              style={{
                animationName: 'about-icon-float',
                animationDuration: icon.floatDuration,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: icon.floatDelay,
                willChange: 'transform',
              }}
            >
              <img src={icon.src} alt="" className="w-full h-auto object-contain" aria-hidden="true" />
            </div>
          </Magnet>
        </FadeIn>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
