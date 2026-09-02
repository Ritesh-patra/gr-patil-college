import { useRef } from 'react'
import { CheckCircleFilled } from '@ant-design/icons'
import HighlightHeading from './HighlightHeading'
import Reveal from './Reveal'
import { scrollToId } from './SmoothScroll'
import { asset } from '../icons'
import './Aim.css'

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}

export default function Aim() {
  return (
    <div className="aim">
      <div className="aim-wrap">
        <Reveal className="aim-intro">
          <p className="kicker">Our aim</p>
          <HighlightHeading>
            We raise students who can think, compete and belong.
          </HighlightHeading>
          <p className="aim-lede">
            Our aim is a complete ladder — from Nursery to junior college —
            where science labs and commerce desks sit beside sport
            and culture, not after them.
          </p>
          <ul className="aim-checks">
            <li>
              <CheckCircleFilled /> Pre-primary to Std. 10
            </li>
            <li>
              <CheckCircleFilled /> Jr. college and degree college
            </li>
            <li>
              <CheckCircleFilled /> Labs, sport and stage
            </li>
          </ul>
          <button type="button" className="aim-link" onClick={() => scrollToId('#services')}>
            See campus life
            <span />
          </button>
        </Reveal>

        <div className="aim-mosaic">
          <Reveal delay={80} className="aim-shot farm">
            <TiltCard>
              <figure>
                <img src={asset('preprimary-class.jpg')} alt="Pre-primary students in class" />
                <figcaption>Pre-primary days</figcaption>
              </figure>
            </TiltCard>
          </Reveal>
          <Reveal delay={160} className="aim-shot roof">
            <TiltCard>
              <figure>
                <img src={asset('college-class.jpg')} alt="Junior college classroom" />
                <figcaption>College classrooms</figcaption>
              </figure>
            </TiltCard>
          </Reveal>
          <Reveal delay={240} className="aim-shot crew">
            <TiltCard>
              <figure>
                <img src={asset('school-sports.jpg')} alt="Sports and PE on the school ground" />
                <figcaption>Sport on campus</figcaption>
              </figure>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      <div className="aim-wrap aim-trio">
        <Reveal>
          <article className="trio-photo">
            <img src={asset('faculty-flag.jpg')} alt="Faculty on a national day" />
            <div>
              <small>01 · Teaching</small>
              <HighlightHeading as="h3" variant="split">
                Classroom first
              </HighlightHeading>
              <p>
                Teachers who stay with the child from the early years through
                board classes and junior college.
              </p>
              <ul className="trio-board">
                <li>Mumbra Shikshan Prasarak Mandal&apos;s, Mumbra (Thane)</li>
                <li>G.R. Patil Vidyamandir / G.R. Patil College of Science &amp; Commerce</li>
                <li>Affiliated to University of Mumbai</li>
                <li>Nursery · Jr. KG · Sr. KG · Std. 1–7 · Std. 8–10</li>
                <li>Junior College · Degree College</li>
              </ul>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="trio-steps">
            <small>02 · Path</small>
            <HighlightHeading as="h3" variant="split">
              How a year runs
            </HighlightHeading>
            <ol>
              <li>
                <b>Welcome</b>
                <span>Admission & orientation</span>
              </li>
              <li>
                <b>Learn</b>
                <span>Class, lab, library</span>
              </li>
              <li>
                <b>Play</b>
                <span>Sport and fitness</span>
              </li>
              <li>
                <b>Show</b>
                <span>Culture and occasions</span>
              </li>
            </ol>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <article className="trio-bill">
            <small>03 · Streams</small>
            <HighlightHeading as="h3" variant="split">
              Science and commerce
            </HighlightHeading>
            <p>
              One campus. Two streams. Students pick the desk that fits —
              without leaving the house they already know.
            </p>
            <div className="trio-sum">
              <span>
                <em>School</em>
                1–10
              </span>
              <span className="now">
                <em>College</em>
                11–12
              </span>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  )
}
