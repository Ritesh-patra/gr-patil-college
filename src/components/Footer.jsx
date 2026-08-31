import { Link } from 'react-router-dom'
import HighlightHeading from './HighlightHeading'
import AnimatedLogo from './AnimatedLogo'
import LordIcon from './LordIcon'
import { LORD } from '../icons'
import { school } from '../school'
import './Footer.css'

const hops = [
  { to: '/', label: 'Home' },
  { to: '/pre-primary', label: 'Pre-primary' },
  { to: '/school', label: 'School' },
  { to: '/jr-college', label: 'Jr college' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/information-desk', label: 'Info desk' },
]

export default function Footer() {
  return (
    <footer className="dusk">
      <svg className="dusk-cut" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#ffffff" d="M0,70 C240,10 480,90 720,40 C960,-10 1200,80 1440,20 L1440,0 L0,0 Z" />
      </svg>

      <div className="dusk-inner">
        <p className="dusk-mark" aria-hidden="true">
          GR
        </p>

        <div className="dusk-top">
          <p className="kicker dusk-kicker">Campus</p>
          <div className="dusk-brand">
            <AnimatedLogo size={48} height={62} light />
            <div>
              <HighlightHeading
                borderColor="#f0c419"
                glowColor="rgba(240, 196, 25, 0.5)"
              >
                {school.name}
              </HighlightHeading>
              <p className="dusk-motto">
                Arts, science
                <br />
                & commerce
              </p>
            </div>
          </div>
          <div className="dusk-hops">
            {hops.map((h) => (
              <Link key={h.to} to={h.to}>
                {h.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="dusk-ticket">
          <div className="ticket-face">
            <span className="ticket-stub">Dombivli</span>
            <address>
              <LordIcon
                src={LORD.pin}
                trigger="loop"
                colors="primary:#3a0d14,secondary:#c41e26"
                size={22}
              />
              <span>
                {school.full}
                <br />
                {school.address}
              </span>
            </address>
          </div>
          <div className="ticket-tear" aria-hidden="true" />
          <div className="ticket-codes">
            <div>
              <small>Streams</small>
              <strong>Arts · Sci · Com</strong>
            </div>
            <div>
              <small>Years</small>
              <strong>KG to XII</strong>
            </div>
          </div>
        </div>

        <div className="dusk-reach">
          <a className="reach-chip" href={`tel:${school.tel[0]}`}>
            <LordIcon
              src={LORD.phone}
              trigger="loop-on-hover"
              colors="primary:#f0c419,secondary:#6d2d91"
              target=".reach-chip"
              size={26}
            />
            <span>
              <small>Call</small>
              {school.displayPhones[0]}
            </span>
          </a>
          <a className="reach-chip" href={`tel:${school.tel[1]}`}>
            <LordIcon
              src={LORD.phone}
              trigger="loop-on-hover"
              colors="primary:#f0c419,secondary:#6d2d91"
              target=".reach-chip"
              size={26}
            />
            <span>
              <small>Call</small>
              {school.displayPhones[1]}
            </span>
          </a>
        </div>
      </div>

      <div className="dusk-bar">
        <span>© {new Date().getFullYear()} {school.name}</span>
        <span>Vidyamandir & Jr. College · {school.place}</span>
      </div>
    </footer>
  )
}
