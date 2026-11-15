import { useState } from 'react'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import AskArchitModal from './components/AskArchitModal'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection onOpenChat={() => setIsChatOpen(true)} />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <AskArchitModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  )
}

export default App
