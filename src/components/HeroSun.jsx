import { motion, useReducedMotion } from 'motion/react'

const rays = Array.from({ length: 16 }, (_, i) => i)

export default function HeroSun() {
  const reduce = useReducedMotion()
  const loop = reduce ? false : Infinity

  return (
    <motion.div
      className="hero-sun"
      aria-hidden="true"
      initial={reduce ? false : { scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 16 }}
    >
      <motion.span
        className="sun-halo"
        animate={reduce ? undefined : { scale: [1, 1.22, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 3.4, repeat: loop, ease: 'easeInOut' }}
      />
      <motion.span
        className="sun-flare"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: loop, ease: 'linear' }}
      />
      <motion.div
        className="sun-rays"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: loop, ease: 'linear' }}
      >
        {rays.map((i) => (
          <span key={i} className="sun-ray" style={{ transform: `rotate(${i * 22.5}deg)` }} />
        ))}
      </motion.div>
      <motion.div
        className="sun-rays sun-rays-inner"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 26, repeat: loop, ease: 'linear' }}
      >
        {rays.filter((_, i) => i % 2 === 0).map((i) => (
          <span key={i} className="sun-ray short" style={{ transform: `rotate(${i * 22.5 + 11.25}deg)` }} />
        ))}
      </motion.div>
      <motion.span
        className="sun-core"
        animate={reduce ? undefined : { scale: [1, 1.07, 1] }}
        transition={{ duration: 2.6, repeat: loop, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
