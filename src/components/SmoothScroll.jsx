import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })

    window.__lenis = lenis

    let id
    const raf = (time) => {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

  return null
}

export function scrollToId(hash) {
  const lenis = window.__lenis
  if (lenis) lenis.scrollTo(hash, { offset: -20 })
  else {
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
}
