import React, { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const [isEnabled, setIsEnabled] = useState(false)
  const [isInsideHero, setIsInsideHero] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isOverNative, setIsOverNative] = useState(false)
  const [isInsideWindow, setIsInsideWindow] = useState(false)
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false)

  const mousePos = useRef({ x: -100, y: -100 })
  const glowPos = useRef({ x: -100, y: -100 })
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    // Accessibility & device checks: desktop only, non-touch, no reduced motion
    const checkEligibility = () => {
      const isTouch =
        'ontouchstart' in window ||
        window.matchMedia('(pointer: coarse)').matches
      const isMobile = window.innerWidth < 1024
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      return !isTouch && !isMobile && !prefersReducedMotion
    }

    const eligible = checkEligibility()
    setIsEnabled(eligible)

    if (!eligible) {
      document.documentElement.classList.remove('in-hero-cursor')
      return
    }

    const handleResize = () => {
      const stillEligible = checkEligibility()
      setIsEnabled(stillEligible)
      if (!stillEligible) {
        document.documentElement.classList.remove('in-hero-cursor')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.documentElement.classList.remove('in-hero-cursor')
    }
  }, [])

  useEffect(() => {
    if (!isEnabled) return

    // Trailing glow animation loop via requestAnimationFrame
    const animateGlow = () => {
      // Lerp smoothing factor for soft lagging glow
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.16
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.16

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`
      }

      rafId.current = requestAnimationFrame(animateGlow)
    }

    rafId.current = requestAnimationFrame(animateGlow)

    const handleMouseMove = (e: MouseEvent) => {
      setIsInsideWindow(true)
      setIsUsingKeyboard(false)
      document.documentElement.classList.remove('using-keyboard')

      mousePos.current = { x: e.clientX, y: e.clientY }

      // Immediate dot follow
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }

      const target = e.target as HTMLElement | null
      if (!target) return

      // Strictly check if pointer is inside the landing/hero section (#hero)
      const inHero = !!target.closest('#hero')
      setIsInsideHero(inHero)

      if (inHero) {
        document.documentElement.classList.add('in-hero-cursor')

        // Check if mouse is over native text input elements inside hero
        const isNative = !!target.closest(
          'input, textarea, select, [contenteditable="true"]'
        )
        setIsOverNative(isNative)

        // Check if mouse is over clickable controls for enlarged hover state
        if (!isNative) {
          const isClickable = !!target.closest(
            'a, button, [role="button"], input[type="submit"]'
          )
          setIsHovering(isClickable)
        } else {
          setIsHovering(false)
        }
      } else {
        document.documentElement.classList.remove('in-hero-cursor')
        setIsOverNative(false)
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsInsideWindow(false)
      setIsInsideHero(false)
      document.documentElement.classList.remove('in-hero-cursor')
    }

    const handleMouseEnter = () => {
      setIsInsideWindow(true)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsUsingKeyboard(true)
        document.documentElement.classList.add('using-keyboard')
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('keydown', handleKeyDown)
      document.documentElement.classList.remove('in-hero-cursor')
    }
  }, [isEnabled])

  if (!isEnabled) return null

  // Custom cursor is visible ONLY when inside the hero section on desktop
  const isVisible =
    isInsideHero && isInsideWindow && !isOverNative && !isUsingKeyboard

  return (
    <>
      {/* Soft trailing glow — exactly reuses CSS variable var(--accent) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: isHovering ? '52px' : '36px',
          height: isHovering ? '52px' : '36px',
          backgroundColor: 'var(--accent)',
          opacity: isVisible ? (isHovering ? 0.38 : 0.22) : 0,
          filter: 'blur(10px)',
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      {/* Immediate small dot cursor — exactly reuses CSS variable var(--accent) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: isHovering ? '10px' : '6px',
          height: isHovering ? '10px' : '6px',
          backgroundColor: 'var(--accent)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.15s ease, height 0.15s ease, opacity 0.15s ease',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
    </>
  )
}
