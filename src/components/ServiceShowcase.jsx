import { useEffect, useRef, useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import HighlightHeading from './HighlightHeading'
import { asset } from '../icons'
import './ServiceShowcase.css'

const services = [
  {
    id: 'preprimary',
    no: '01',
    title: 'Pre-primary',
    tag: 'Jr. KG · Sr. KG',
    copy: 'First years on campus — play, language and the habits that make a school day feel like home.',
    img: asset('assembly.jpeg'),
    tone: '#5a1020',
  },
  {
    id: 'school',
    no: '02',
    title: 'Std. 1 to 10',
    tag: 'Vidyamandir',
    copy: 'A full school ladder through the board years, with the same teachers and the same ground.',
    img: asset('secondary.jpeg'),
    tone: '#3a0d14',
  },
  {
    id: 'science',
    no: '03',
    title: 'Science',
    tag: 'Jr. college',
    copy: 'Labs that are used, not displayed. Practicals, pipettes and the quiet of real work.',
    img: asset('lab1.jpeg'),
    tone: '#2a0818',
  },
  {
    id: 'commerce',
    no: '04',
    title: 'Commerce',
    tag: 'Jr. college',
    copy: 'Accounts, business and the numbers that follow a student into the degree years.',
    img: asset('everyday.jpeg'),
    tone: '#4a1024',
  },
  {
    id: 'arts',
    no: '05',
    title: 'Arts & culture',
    tag: 'Stage',
    copy: 'Occasions, dance and the calendar that makes a campus more than a timetable.',
    img: asset('cultural.jpg'),
    tone: '#5c1830',
  },
  {
    id: 'sports',
    no: '06',
    title: 'Sports',
    tag: 'Ground',
    copy: 'Matches, drills and the hours after class when the yard is still loud.',
    img: asset('sports.jpeg'),
    tone: '#1f3a18',
  },
  {
    id: 'fitness',
    no: '07',
    title: 'Fitness',
    tag: 'Body',
    copy: 'Strength and stamina taught as part of the week, not a poster on the wall.',
    img: asset('fitness.jpg'),
    tone: '#3a2810',
  },
  {
    id: 'skills',
    no: '08',
    title: 'Skill hours',
    tag: 'Hands-on',
    copy: 'Workshops and skill days — making, building, and learning that does not live only in a notebook.',
    img: asset('skilldev.jpeg'),
    tone: '#3a0d14',
  },
  {
    id: 'degree',
    no: '09',
    title: 'Degree college',
    tag: 'Undergraduate',
    copy: 'Undergraduate programmes after junior college — arts, science and commerce under the University of Mumbai.',
    img: asset('campus.png'),
    tone: '#4a1028',
  },
]

function wrappedOffset(i, active, n) {
  let offset = i - active
  if (offset > n / 2) offset -= n
  if (offset < -n / 2) offset += n
  return offset
}

export default function ServiceShowcase() {
  const n = services.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const current = services[active]

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % n), 3800)
    return () => clearInterval(id)
  }, [paused, n])

  const go = (dir) => setActive((a) => (a + dir + n) % n)

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
    setPaused(true)
  }
  const onTouchEnd = (e) => {
    const start = touchX.current
    if (start == null) return
    const dx = e.changedTouches[0].clientX - start
    if (dx > 40) go(-1)
    if (dx < -40) go(1)
    touchX.current = null
  }

  return (
    <section
      className="showcase"
      id="services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="showcase-head">
        <p className="kicker">Campus</p>
        <HighlightHeading>
          School life as it looks here — not stock photos of somewhere else.
        </HighlightHeading>
      </div>

      <div
        className="coverflow"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button type="button" className="flow-nav prev" onClick={() => go(-1)} aria-label="Previous">
          <LeftOutlined />
        </button>

        <div className="flow-stage">
          {services.map((item, i) => {
            const offset = wrappedOffset(i, active, n)
            const abs = Math.abs(offset)
            return (
              <button
                type="button"
                key={item.id}
                className={`pv-card ${offset === 0 ? 'is-active' : ''}`}
                style={{
                  '--o': offset,
                  zIndex: 30 - abs,
                  opacity: abs > 3 ? 0 : 1,
                  pointerEvents: abs > 3 ? 'none' : 'auto',
                }}
                onClick={() => setActive(i)}
                aria-pressed={offset === 0}
              >
                <span className="pv-edge left" />
                <span className="pv-edge right" />
                <span className="pv-edge bottom" />
                <span className="pv-face">
                  <span className="pv-cells" style={{ '--tone': item.tone }} />
                  <img src={item.img} alt={item.title} />
                  <span className="pv-meta">
                    <small>{item.no} · {item.tag}</small>
                    <strong>{item.title}</strong>
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <button type="button" className="flow-nav next" onClick={() => go(1)} aria-label="Next">
          <RightOutlined />
        </button>
      </div>

      <div className="showcase-detail">
        <p className="detail-tag">{current.tag}</p>
        <HighlightHeading as="h3" variant="split" key={current.title}>
          {current.title}
        </HighlightHeading>
        <p>{current.copy}</p>
        <div className="flow-dots">
          {services.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={i === active ? 'on' : ''}
              onClick={() => setActive(i)}
              aria-label={s.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
