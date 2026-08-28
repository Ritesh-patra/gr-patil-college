import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react'
import './GradientText.css'

export default function GradientText({
  children,
  className = '',
  colors = ['#c41e26', '#6d2d91', '#f0c419', '#6d2d91'],
  animationSpeed = 6,
  direction = 'horizontal',
}) {
  const [isPaused, setIsPaused] = useState(false)
  const progress = useMotionValue(0)
  const elapsedRef = useRef(0)
  const lastTimeRef = useRef(null)
  const animationDuration = animationSpeed * 1000

  useAnimationFrame((time) => {
    if (isPaused) {
      lastTimeRef.current = null
      return
    }
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time
      return
    }
    const deltaTime = time - lastTimeRef.current
    lastTimeRef.current = time
    elapsedRef.current += deltaTime
    const fullCycle = animationDuration * 2
    const cycleTime = elapsedRef.current % fullCycle
    if (cycleTime < animationDuration) {
      progress.set((cycleTime / animationDuration) * 100)
    } else {
      progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100)
    }
  })

  useEffect(() => {
    elapsedRef.current = 0
    progress.set(0)
  }, [animationSpeed, progress])

  const backgroundPosition = useTransform(progress, (p) => `${p}% 50%`)
  const gradientColors = [...colors, colors[0]].join(', ')
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColors})`,
    backgroundSize: '300% 100%',
  }

  return (
    <motion.span
      className={`animated-gradient-text ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.span className="text-content" style={{ ...gradientStyle, backgroundPosition }}>
        {children}
      </motion.span>
    </motion.span>
  )
}
