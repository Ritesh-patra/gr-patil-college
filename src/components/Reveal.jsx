import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => setOn(true)
    const visible = () => {
      const r = node.getBoundingClientRect()
      return r.bottom > 0 && r.top < window.innerHeight + 160
    }

    if (visible()) show()

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          io.disconnect()
        }
      },
      { threshold: 0.02, rootMargin: '160px 0px 160px 0px' },
    )
    io.observe(node)

    const failsafe = window.setTimeout(show, 2200)
    return () => {
      io.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${on ? 'is-in' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
