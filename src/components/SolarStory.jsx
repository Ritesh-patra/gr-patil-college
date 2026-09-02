import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import HighlightHeading from './HighlightHeading'
import { asset } from '../icons'
import './SolarStory.css'

const beats = [
  {
    no: '01',
    title: 'The day begins',
    copy: 'Assembly, uniform, the same ground. A campus that already knows the child.',
    img: asset('preprimary-flags.jpg'),
  },
  {
    no: '02',
    title: 'Class and lab',
    copy: 'Notebooks in the morning. Pipettes and benches when the science hour comes.',
    img: asset('college-lecture.jpg'),
  },
  {
    no: '03',
    title: 'The yard',
    copy: 'Sport and fitness after the bell — not as a once-a-year photograph.',
    img: asset('school-pe.jpg'),
  },
  {
    no: '04',
    title: 'Stage and occasion',
    copy: 'Culture days, celebrations, the hall full. A school that can be heard.',
    img: asset('aarambh-function.jpg'),
  },
  {
    no: '05',
    title: 'The house',
    copy: 'Teachers, team, the people who stay. That is the whole point.',
    img: asset('faculty-flag.jpg'),
  },
]

export default function SolarStory() {
  const [step, setStep] = useState(0)
  const [live, setLive] = useState(false)
  const wrap = useRef(null)

  useEffect(() => {
    const node = wrap.current
    if (!node) return
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting), {
      threshold: 0.4,
    })
    io.observe(node)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!live) return
    const id = setInterval(() => setStep((s) => (s + 1) % beats.length), 4000)
    return () => clearInterval(id)
  }, [live])

  return (
    <section className="film" id="process" ref={wrap}>
      <div className="film-head">
        <Reveal>
          <p className="kicker">How a day runs</p>
          <HighlightHeading>Five beats. Automatic. No cartoon.</HighlightHeading>
        </Reveal>
      </div>

      <div className="film-stage">
        <div className="film-photo">
          {beats.map((b, i) => (
            <img
              key={b.no}
              src={b.img}
              alt=""
              className={i === step ? 'is-on' : ''}
            />
          ))}
          <div className="film-shade" />
          <div className="film-progress">
            <i style={{ animationPlayState: live ? 'running' : 'paused' }} key={step} />
          </div>
        </div>

        <ol className="film-rail">
          {beats.map((b, i) => (
            <li key={b.no}>
              <button
                type="button"
                className={i === step ? 'on' : ''}
                onClick={() => setStep(i)}
              >
                <span>{b.no}</span>
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.copy}</p>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
