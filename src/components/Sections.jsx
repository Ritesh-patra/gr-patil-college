import { useEffect, useRef, useState } from 'react'
import {
  HomeOutlined,
  ShopOutlined,
  BuildOutlined,
} from '@ant-design/icons'
import Reveal from './Reveal'
import HighlightHeading from './HighlightHeading'
import SolarStory from './SolarStory'
import QuoteDesk from './QuoteDesk'
import './Sections.css'

const pillars = [
  {
    n: '01',
    icon: <HomeOutlined />,
    title: 'School',
    text: 'Jr. KG through Std. 10 — one Vidyamandir, one set of teachers, one ground.',
  },
  {
    n: '02',
    icon: <ShopOutlined />,
    title: 'Junior college',
    text: 'XI and XII in science and commerce, with labs and desks that stay on this campus.',
  },
  {
    n: '03',
    icon: <BuildOutlined />,
    title: 'Campus culture',
    text: 'Sport, fitness, skill hours and the occasions that fill the calendar after class.',
  },
]

const ticker = [
  'Pre-primary',
  'Std. 1 to 10',
  'Science',
  'Commerce',
  'Arts',
  'Laboratories',
  'Sports',
  'Admissions',
]

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
      <section className="block about" id="about">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...ticker, ...ticker].map((w, i) => (
              <span key={`${w}-${i}`}>{w}</span>
            ))}
          </div>
        </div>

        <div className="block-inner">
          <Reveal>
            <p className="kicker">About us</p>
            <HighlightHeading className="display">
              G. R. Patil College. Arts, science and commerce.
            </HighlightHeading>
            <p className="intro">
              G. R. Patil Vidyamandir & Jr. College of Science & Commerce,
              Dombivli (East). We take a child from the early years through
              school and into junior college — without splitting the campus
              into three different stories.
            </p>
          </Reveal>

          <div className="pillar-grid">
            {pillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <article className="pillar">
                  <span className="pillar-n">{item.n}</span>
                  <span className="feature-icon">{item.icon}</span>
                  <HighlightHeading as="h3" variant="split">
                    {item.title}
                  </HighlightHeading>
                  <p>{item.text}</p>
                  <i className="pillar-glow" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                  Three
                  <em> desks</em>
                </strong>
                <p>Arts, science and commerce under one red-and-gold mark.</p>
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
