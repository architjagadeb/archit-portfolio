import React from 'react'
import { Sparkles } from 'lucide-react'

interface FloatingChatButtonProps {
  onClick: () => void
  isOpen: boolean
}

export default function FloatingChatButton({ onClick, isOpen }: FloatingChatButtonProps) {
  if (isOpen) return null

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open Ask Archit AI Assistant"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-surface/95 border border-border-theme hover:border-accent text-ink shadow-2xl backdrop-blur-md transition-all duration-200 hover:-translate-y-1 active:scale-95 group font-mono text-xs uppercase tracking-wider"
      style={{
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className="relative flex items-center justify-center">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400/40 animate-ping" />
      </div>
      <div className="flex items-center gap-1.5 font-bold">
        <span>Ask Archit</span>
        <Sparkles size={14} className="text-accent group-hover:rotate-12 transition-transform" />
      </div>
    </button>
  )
}
