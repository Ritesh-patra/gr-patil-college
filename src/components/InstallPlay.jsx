import { useState } from 'react'
import Reveal from './Reveal'
import './InstallPlay.css'

const installs = [
  {
    id: 'roof',
    no: '01',
    title: 'On-grid rooftop',
    hint: 'Tap the house',
    copy: 'Homes, shops and offices. Extra units go back to the DISCOM through net metering.',
  },
  {
    id: 'hybrid',
    no: '02',
    title: 'Hybrid & off-grid',
    hint: 'Tap the battery',
    copy: 'When the grid drops, lights stay on. Batteries sized to the loads you actually need.',
  },
  {
    id: 'ground',
    no: '03',
    title: 'Ground mount & parks',
    hint: 'Tap the field',
    copy: 'Open land and campuses. Rows of modules, walkable aisles, built to last decades.',
  },
  {
    id: 'pumps',
    no: '04',
    title: 'Pumps & street lights',
    hint: 'Tap the lamp',
    copy: 'Farms, roads and societies. Water when the sun is up; light when it goes down.',
  },
]

export default function InstallPlay() {
  const [active, setActive] = useState('roof')
  const [charged, setCharged] = useState(false)
  const current = installs.find((i) => i.id === active)

  return (
    <section className="block alt play-block" id="process">
      <div className="block-inner">
        <Reveal>
          <p className="kicker">What we install</p>
          <h2 className="display">Click the picture. Play with the sun.</h2>
          <p className="intro">
            House, field, battery or lamp — tap a spot to see that install light
            up. Hit the sun to send power down the line.
          </p>
        </Reveal>

        <div className="play-board">
          <svg className="play-scene" viewBox="0 0 860 420" role="img" aria-label="Interactive solar map">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff8e8" />
                <stop offset="100%" stopColor="#f3e4b8" />
              </linearGradient>
              <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c419" />
                <stop offset="100%" stopColor="#9b3dbe" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width="860" height="420" rx="28" fill="url(#sky)" />
            <path d="M0 300 C 180 260, 320 330, 480 290 S 720 250, 860 300 L 860 420 L 0 420 Z" fill="#dfe8c4" />
            <path d="M0 340 C 200 310, 400 370, 860 330 L 860 420 L 0 420 Z" fill="#c5d49a" />

            <g
              className={`spot sun ${charged ? 'is-hot' : ''}`}
              onClick={() => setCharged((v) => !v)}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => e.key === 'Enter' && setCharged((v) => !v)}
            >
              <circle cx="780" cy="78" r="38" fill="url(#sunGrad)" filter="url(#glow)" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
                <rect
                  key={d}
                  x="776"
                  y="18"
                  width="8"
                  height="18"
                  rx="4"
                  fill="#f0c419"
                  transform={`rotate(${d} 780 78)`}
                />
              ))}
            </g>

            <path
              className={`juice ${charged ? 'is-on' : ''}`}
              d="M742 95 C 640 140, 520 90, 430 160 S 280 210, 200 188"
              fill="none"
              stroke="#c41e26"
              strokeWidth="3"
              strokeDasharray="8 10"
            />

            <g
              className={`spot house ${active === 'roof' ? 'is-on' : ''}`}
              onClick={() => setActive('roof')}
            >
              <rect x="70" y="210" width="130" height="90" rx="6" fill="#fffdf7" stroke="#c41e26" />
              <polygon points="64,214 135,150 206,214" fill="#6d4450" />
              <g fill={active === 'roof' ? '#3a0d14' : '#3d5c12'}>
                <rect x="88" y="168" width="28" height="18" rx="1" />
                <rect x="120" y="168" width="28" height="18" rx="1" />
                <rect x="152" y="168" width="28" height="18" rx="1" />
              </g>
              <rect x="118" y="248" width="28" height="52" fill="#fff8e8" stroke="#c41e26" />
              <text x="135" y="328" textAnchor="middle" className="spot-label">Home</text>
            </g>

            <g
              className={`spot batt ${active === 'hybrid' ? 'is-on' : ''}`}
              onClick={() => setActive('hybrid')}
            >
              <rect x="250" y="248" width="70" height="52" rx="8" fill="#3a0d14" />
              <rect x="262" y="238" width="46" height="12" rx="3" fill="#6d2d91" />
              <rect
                x="258"
                y="256"
                width={active === 'hybrid' || charged ? 54 : 22}
                height="28"
                rx="4"
                fill="#f0c419"
              />
              <text x="285" y="328" textAnchor="middle" className="spot-label">Battery</text>
            </g>

            <g
              className={`spot field ${active === 'ground' ? 'is-on' : ''}`}
              onClick={() => setActive('ground')}
            >
              {[0, 1, 2, 3].map((row) =>
                [0, 1, 2, 3, 4].map((col) => (
                  <rect
                    key={`${row}-${col}`}
                    x={400 + col * 28}
                    y={250 + row * 16}
                    width="24"
                    height="12"
                    rx="1"
                    fill={active === 'ground' ? '#1e3a0a' : '#4a6418'}
                    transform={`skewX(-18) translate(${row * 6}, 0)`}
                  />
                )),
              )}
              <text x="490" y="340" textAnchor="middle" className="spot-label">Field</text>
            </g>

            <g
              className={`spot lamp ${active === 'pumps' ? 'is-on' : ''}`}
              onClick={() => setActive('pumps')}
            >
              <rect x="690" y="200" width="8" height="110" rx="3" fill="#3a0d14" />
              <path d="M694 200 Q 730 188 742 220" fill="none" stroke="#3a0d14" strokeWidth="6" />
              <circle cx="748" cy="226" r="16" fill={active === 'pumps' || charged ? '#f0c419' : '#e8c4c8'} />
              <ellipse cx="640" cy="318" rx="22" ry="10" fill="#5d8a2a" />
              <rect x="632" y="292" width="16" height="28" fill="#c41e26" />
              <text x="710" y="340" textAnchor="middle" className="spot-label">Lamp & pump</text>
            </g>
          </svg>

          <aside className="play-panel">
            <small>{current.no}</small>
            <h3>{current.title}</h3>
            <p>{current.copy}</p>
            <p className="play-hint">{current.hint} · click the sun to charge the line.</p>
            <div className="play-tabs">
              {installs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === active ? 'on' : ''}
                  onClick={() => setActive(item.id)}
                >
                  {item.no} {item.title}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
