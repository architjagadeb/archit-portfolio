import React, { useState } from 'react'
import { Sun, Moon, Menu, X, FileText } from 'lucide-react'

interface HeaderProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Toolbox', href: '#toolbox' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border-theme bg-canvas/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between md:justify-center">
        {/* Mobile View: Monogram on left */}
        <div className="md:hidden flex items-center">
          <a
            href="#top"
            className="font-heading font-bold text-sm tracking-wider text-ink hover:text-accent transition-colors flex items-center gap-2"
            aria-label="Back to top"
          >
            <span className="w-8 h-8 rounded-lg bg-surface border border-border-theme flex items-center justify-center text-xs font-bold shadow-sm">
              AJ
            </span>
          </a>
        </div>

        {/* Desktop View: Completely Centered Unified Navbar Composition */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Monogram Brand */}
          <a
            href="#top"
            className="font-heading font-bold text-sm tracking-wider text-ink hover:text-accent transition-colors flex items-center gap-2 shrink-0"
            aria-label="Back to top"
          >
            <span className="w-8 h-8 rounded-lg bg-surface border border-border-theme flex items-center justify-center text-xs font-bold shadow-sm">
              AJ
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-5 lg:gap-7 text-xs uppercase tracking-widest font-mono text-ink-muted shrink-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-ink transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-8 h-8 rounded-lg border border-border-theme bg-surface hover:bg-surface-hover flex items-center justify-center text-ink transition-colors shrink-0"
          >
            {theme === 'dark' ? (
              <Sun size={14} className="text-amber-400" />
            ) : (
              <Moon size={14} className="text-purple-600" />
            )}
          </button>

          {/* Resume Link */}
          <a
            href="https://drive.google.com/file/d/1hiaurPUV9jTuqtkydW433p6KH7dF9Jv4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border-theme bg-surface hover:bg-surface-hover text-ink text-xs font-mono uppercase tracking-wider transition-colors shadow-sm shrink-0"
          >
            <FileText size={12} className="text-ink-muted" />
            <span>Résumé ↓</span>
          </a>
        </div>

        {/* Mobile View: Theme toggle & Hamburger on right */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-8 h-8 rounded-lg border border-border-theme bg-surface hover:bg-surface-hover flex items-center justify-center text-ink transition-colors"
          >
            {theme === 'dark' ? (
              <Sun size={14} className="text-amber-400" />
            ) : (
              <Moon size={14} className="text-purple-600" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="w-8 h-8 rounded-lg border border-border-theme bg-surface hover:bg-surface-hover flex items-center justify-center text-ink transition-colors"
          >
            {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-theme bg-surface px-6 py-5 flex flex-col gap-4 shadow-xl">
          <nav className="flex flex-col gap-3 font-mono text-sm uppercase tracking-wider text-ink-muted">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-border-theme flex items-center justify-between">
            <a
              href="https://drive.google.com/file/d/1hiaurPUV9jTuqtkydW433p6KH7dF9Jv4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink"
            >
              <FileText size={14} />
              <span>Résumé PDF ↓</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
