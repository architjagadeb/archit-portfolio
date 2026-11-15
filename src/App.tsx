import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import CredentialsSection from './components/CredentialsSection'
import ContactSection from './components/ContactSection'
import AskArchitModal from './components/AskArchitModal'
import FloatingChatButton from './components/FloatingChatButton'
import CustomCursor from './components/CustomCursor'

type ThemeMode = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as ThemeMode | null
      if (saved === 'dark' || saved === 'light') return saved
    }
    return 'dark'
  })

  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div id="top" className="min-h-screen w-full max-w-full overflow-x-hidden bg-canvas text-ink transition-colors duration-200">
      {/* Desktop Custom Cursor (Disabled on mobile/touch/reduced-motion) */}
      <CustomCursor />

      {/* Slim Editorial Header */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections (with pt-16 offset for fixed navbar) */}
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CredentialsSection />
      </main>

      {/* Editorial Footer */}
      <ContactSection />

      {/* Persistent Floating Chatbot Entry Point */}
      <FloatingChatButton
        isOpen={isChatOpen}
        onClick={() => setIsChatOpen(true)}
      />

      {/* Ask Archit Chatbot Drawer (FastAPI + Groq backed) */}
      <AskArchitModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  )
}

export default App
