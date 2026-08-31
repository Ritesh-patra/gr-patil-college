import { Link } from 'react-router-dom'
import HighlightHeading from './HighlightHeading'
import Reveal from './Reveal'
import './PageDoors.css'

const doors = [
  { to: '/pre-primary', no: '01', title: 'Pre-primary', text: 'Jr. KG and Sr. KG — a first classroom that still feels like home.', skin: 'cream' },
  { to: '/school', no: '02', title: 'School', text: 'Std. 1 to 10 — academics, sport and values on one ground.', skin: 'ink' },
  { to: '/jr-college', no: '03', title: 'Jr college & degree', text: 'XI–XII streams, then undergraduate years under the University of Mumbai.', skin: 'gold' },
  { to: '/gallery', no: '04', title: 'Gallery', text: 'Campus life as it looks here — assemblies, labs, sport and occasions.', skin: 'cream' },
  { to: '/information-desk', no: '05', title: 'Information desk', text: 'Admissions, timings and a WhatsApp enquiry — not a brochure maze.', skin: 'violet' },
]

export default function PageDoors() {
  return (
    <section className="doors">
      <div className="doors-inner">
        <Reveal>
          <p className="kicker">Subpages</p>
          <HighlightHeading>Five doors off the homepage.</HighlightHeading>
        </Reveal>
        <div className="doors-grid">
          {doors.map((item, i) => (
            <Reveal key={item.to} delay={i * 70}>
              <Link className={`door door-${item.skin}`} to={item.to}>
                <small>{item.no}</small>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
