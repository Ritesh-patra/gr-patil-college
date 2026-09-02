import { Link } from 'react-router-dom'
import HighlightHeading from './HighlightHeading'
import Reveal from './Reveal'
import { school } from '../school'
import { asset } from '../icons'
import './About.css'

export const aboutLinks = [
  {
    to: '/pre-primary',
    no: '01',
    title: 'Pre-primary',
    hint: 'Jr. KG & Sr. KG',
    text: 'A first classroom that still feels like home — settling in, play and the start of language.',
    skin: 'ink',
    kids: [
      { to: '/pre-primary/jr-kg', label: 'Jr. KG' },
      { to: '/pre-primary/sr-kg', label: 'Sr. KG' },
    ],
  },
  {
    to: '/school',
    no: '02',
    title: 'School',
    hint: 'Std. 1 to 10',
    text: 'From the first notebook to the board years — academics, sport and values on one ground.',
    skin: 'gold',
    kids: [
      { to: '/school/primary', label: 'Primary 1–5' },
      { to: '/school/secondary', label: 'Secondary 6–10' },
    ],
  },
  {
    to: '/jr-college',
    no: '03',
    title: 'Jr college & degree',
    hint: 'XI–XII and UG',
    text: 'Science and commerce after Std. 10, then a degree on the same campus.',
    skin: 'violet',
    kids: [
      { to: '/jr-college/science', label: 'Science' },
      { to: '/jr-college/commerce', label: 'Commerce' },
      { to: '/jr-college/degree', label: 'Degree' },
    ],
  },
]

export function aboutPathOn(pathname) {
  return aboutLinks.some(
    (item) => pathname === item.to || item.kids.some((k) => pathname === k.to),
  )
}

export default function About() {
  return (
    <section className="about-stage" id="about">
      <p className="about-mark" aria-hidden="true">
        About
      </p>
      <div className="about-stage-inner">
        <div className="about-hero">
          <Reveal className="about-copy">
            <p className="kicker">About us</p>
            <HighlightHeading>A house for science and commerce — from KG to a degree.</HighlightHeading>
            <p>
              {school.full} sits at {school.street}. Pre-primary, school and junior
              college live on this campus. Gallery and the information desk stay
              separate — these three doors are the years a child walks.
            </p>
            <ul className="about-facts">
              <li>
                <b>Science</b>
                <span>Labs that are used, not displayed.</span>
              </li>
              <li>
                <b>Commerce</b>
                <span>Accounts and business that follow into a degree.</span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={80} className="about-frame">
            <img src={asset('campus.png')} alt="G. R. Patil campus" />
            <span>Ambernath (E)</span>
          </Reveal>
        </div>

        <div className="about-doors">
          {aboutLinks.map((item, i) => (
            <Reveal key={item.to} delay={i * 70}>
              <article className={`about-door about-door-${item.skin}`}>
                <small>{item.no}</small>
                <Link to={item.to}>
                  <strong>{item.title}</strong>
                </Link>
                <p>{item.text}</p>
                <div className="about-door-kids">
                  {item.kids.map((kid) => (
                    <Link key={kid.to} to={kid.to}>
                      {kid.label}
                    </Link>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
