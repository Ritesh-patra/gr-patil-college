import { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import { motion } from 'motion/react'

const styles = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap',
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
  },
}

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'view',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const [revealedIndices, setRevealedIndices] = useState(new Set())
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isDecrypted, setIsDecrypted] = useState(false)
  const containerRef = useRef(null)
  const intervalRef = useRef(null)

  const availableChars = useMemo(() => characters.split(''), [characters])

  const shuffleText = useCallback(
    (originalText, currentRevealed) =>
      originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (currentRevealed.has(i)) return originalText[i]
          return availableChars[Math.floor(Math.random() * availableChars.length)]
        })
        .join(''),
    [availableChars],
  )

  const triggerDecrypt = useCallback(() => {
    setRevealedIndices(new Set())
    setIsAnimating(true)
  }, [])

  useEffect(() => {
    if (!isAnimating) return
    intervalRef.current = setInterval(() => {
      setRevealedIndices((prev) => {
        if (prev.size >= text.length) {
          clearInterval(intervalRef.current)
          setIsAnimating(false)
          setIsDecrypted(true)
          setDisplayText(text)
          return prev
        }
        const next = new Set(prev)
        next.add(prev.size)
        setDisplayText(shuffleText(text, next))
        return next
      })
    }, speed)
    return () => clearInterval(intervalRef.current)
  }, [isAnimating, text, speed, maxIterations, sequential, revealDirection, shuffleText])

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'hover') return
    if (animateOn === 'hover') return
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          triggerDecrypt()
          setHasAnimated(true)
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [animateOn, hasAnimated, triggerDecrypt])

  const hoverProps =
    animateOn === 'hover'
      ? {
          onMouseEnter: () => {
            setIsDecrypted(false)
            triggerDecrypt()
          },
        }
      : {}

  return (
    <motion.span
      className={parentClassName}
      ref={containerRef}
      style={styles.wrapper}
      {...hoverProps}
      {...props}
    >
      <span style={styles.srOnly}>{text}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const done = revealedIndices.has(index) || (!isAnimating && isDecrypted)
          return (
            <span key={`${char}${index}`} className={done ? className : encryptedClassName}>
              {char}
            </span>
          )
        })}
      </span>
    </motion.span>
  )
}
