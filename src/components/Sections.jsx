import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import HighlightHeading from './HighlightHeading'
import SolarStory from './SolarStory'
import QuoteDesk from './QuoteDesk'
import './Sections.css'

function CountUp({ end }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const dur = 1400
        const tick = (now) => {
          const t = Math.min(1, (now - start) / dur)
          const eased = 1 - (1 - t) ** 3
          setValue(Math.round(end * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(node)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end])

  return <span ref={ref}>{value.toLocaleString('en-IN')}</span>
}

export default function Sections() {
  return (
    <>
      <SolarStory />

      <section className="block impact" id="why">
        <div className="block-inner">
          <Reveal>
            <p className="kicker">Why families stay</p>
            <HighlightHeading className="display">
              A ladder you can walk without changing school.
            </HighlightHeading>
          </Reveal>
          <div className="impact-grid">
            <Reveal>
              <article className="impact-card">
                <small>Years on campus</small>
                <strong>
                  <CountUp end={14} />
                  <em> +</em>
                </strong>
                <p>From junior KG through Std. 12 — the same ground, the same house.</p>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="impact-card gold">
                <small>Streams</small>
                <strong>
                  Two
                  <em> desks</em>
                </strong>
                <p>Science and commerce under one red-and-gold mark.</p>
              </article>
            </Reveal>
            <Reveal delay={200}>
              <article className="impact-card">
                <small>Campus days</small>
                <strong>
                  Lab
                  <em> + field</em>
                </strong>
                <p>Practicals, sport, fitness and the stage — not only the timetable.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <QuoteDesk />
    </>
  )
}
