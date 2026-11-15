import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles, AlertCircle, RefreshCw } from 'lucide-react'
import { sendChatMessage, ChatHistoryMessage } from '../api/chatApi'

interface AskArchitModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_QUESTIONS = [
  "What are Archit's core skills & technologies?",
  "Tell me about Archit's featured projects",
  "Where does Archit study and what is his education?",
]

export default function AskArchitModal({ isOpen, onClose }: AskArchitModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      // Focus input on open after animation
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen, messages, isLoading])

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSend = async (questionToSend?: string) => {
    const text = (questionToSend !== undefined ? questionToSend : input).trim()
    if (!text || isLoading) return

    setErrorMessage(null)
    setInput('')

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: text,
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)

    // Prepare history for API (last 6 messages)
    const historyPayload: ChatHistoryMessage[] = updatedMessages.slice(-6).map((m) => ({
      role: m.role,
      content: m.content,
    }))

    try {
      const response = await sendChatMessage({
        question: text,
        history: historyPayload,
      })

      const assistantMessage: Message = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: response.answer,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err: unknown) {
      const errorText =
        err instanceof Error
          ? err.message
          : 'Unable to connect to the Ask Archit assistant. Please try again.'
      setErrorMessage(errorText)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50"
          />

          {/* Drawer Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Ask Archit Chatbot"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[480px] md:w-[520px] max-w-full flex flex-col bg-[#0C0C0C] border-l border-white/10 shadow-2xl"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-[#0C0C0C]/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow:
                      '0px 2px 8px rgba(181, 1, 167, 0.4), inset 2px 2px 6px #7721B1',
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div>
                  <h2 className="hero-heading font-black text-lg sm:text-xl uppercase tracking-wider leading-none">
                    Ask Archit
                  </h2>
                  <p className="text-[#D7E2EA]/60 text-xs uppercase tracking-widest mt-1">
                    Portfolio AI Assistant
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close Ask Archit dialog"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#D7E2EA] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B600A8]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-4">
              {/* Welcome Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-inner">
                <div className="flex items-center gap-2 mb-2 text-[#D7E2EA] text-sm font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </div>
                <p className="text-[#D7E2EA] text-sm sm:text-base font-light leading-relaxed">
                  Hi, I’m Archit’s AI assistant. Ask me about his experience, skills, projects, or education.
                </p>
              </div>

              {/* Suggested Questions (only if chat is fresh) */}
              {messages.length === 0 && (
                <div className="pt-2">
                  <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium mb-3">
                    Suggested Questions
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTED_QUESTIONS.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => handleSend(question)}
                        className="text-left px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.07] hover:border-[#B600A8]/60 text-[#D7E2EA] text-xs sm:text-sm font-normal transition-all duration-200 active:scale-[0.98]"
                      >
                        {question} &rarr;
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message History */}
              {messages.map((message) => {
                const isUser = message.role === 'user'
                return (
                  <div
                    key={message.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 mb-1 px-1">
                      {isUser ? 'You' : 'Archit AI'}
                    </span>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words ${
                        isUser
                          ? 'text-white rounded-br-sm'
                          : 'bg-[#181818] border border-white/10 text-[#D7E2EA] rounded-bl-sm'
                      }`}
                      style={
                        isUser
                          ? {
                              background:
                                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                              boxShadow: '0px 2px 6px rgba(181, 1, 167, 0.3)',
                            }
                          : undefined
                      }
                    >
                      {message.content}
                    </div>
                  </div>
                )
              })}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 mb-1 px-1">
                    Archit AI
                  </span>
                  <div className="bg-[#181818] border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B600A8] animate-bounce" />
                    <span
                      className="w-2 h-2 rounded-full bg-[#7621B0] animate-bounce"
                      style={{ animationDelay: '0.15s' }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-[#BE4C00] animate-bounce"
                      style={{ animationDelay: '0.3s' }}
                    />
                    <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 ml-1">
                      Thinking...
                    </span>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl border border-rose-500/30 bg-rose-950/20 text-rose-300 flex items-start gap-3 text-xs sm:text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5 text-rose-400" />
                  <div className="flex-1">
                    <p className="font-medium">{errorMessage}</p>
                    <button
                      type="button"
                      onClick={() => handleSend(messages[messages.length - 1]?.content)}
                      className="inline-flex items-center gap-1.5 mt-2 text-rose-400 hover:text-white underline underline-offset-2"
                    >
                      <RefreshCw size={12} />
                      Retry last message
                    </button>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0C0C0C]/95">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="relative flex items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDownInput}
                  placeholder="Ask a question about Archit..."
                  disabled={isLoading}
                  maxLength={1000}
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#B600A8] text-white placeholder-[#D7E2EA]/35 rounded-full pl-5 pr-12 py-3 text-sm sm:text-base outline-none transition-colors duration-200 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="absolute right-1.5 w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0 2px 6px rgba(181, 1, 167, 0.4)',
                  }}
                >
                  <Send size={15} />
                </button>
              </form>
              <div className="flex items-center justify-between mt-2.5 px-2 text-[11px] text-[#D7E2EA]/40">
                <span>Answers grounded strictly in resume</span>
                <span>Press Enter to send</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
