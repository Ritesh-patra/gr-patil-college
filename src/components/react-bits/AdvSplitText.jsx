import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

export default function AdvSplitText({ text = '', className = '' }) {
  const words = text.split(/(\s+)/)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [text])

  let charIndex = 0

  return (
    <span ref={ref} className={`adv-split ${className}`}>
      {words.map((word, w) => {
        if (/^\s+$/.test(word)) {
          return (
            <span key={`sp-${w}`} className="adv-space">
              {'\u00A0'}
            </span>
          )
        }
        const letters = Array.from(word)
        const start = charIndex
        charIndex += letters.length
        return (
          <span key={`w-${w}-${word}`} className="adv-word">
            {letters.map((char, i) => (
              <motion.span
                key={`${char}-${start + i}`}
                className="adv-char"
                initial={{ opacity: 0, y: 36, rotateX: 85, filter: 'blur(10px)' }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 36, rotateX: 85, filter: 'blur(10px)' }
                }
                transition={{
                  delay: Math.min((start + i) * 0.028, 1.2),
                  type: 'spring',
                  stiffness: 320,
                  damping: 18,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        )
      })}
    </span>
  )
}
