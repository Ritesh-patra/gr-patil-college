import { Button } from 'antd'
import { PlayCircleOutlined, EnvironmentOutlined } from '@ant-design/icons'
import HighlightHeading from './HighlightHeading'
import HeroSun from './HeroSun'
import { scrollToId } from './SmoothScroll'
import './Hero.css'

const stats = [
  { value: 'Jr. KG', label: 'Pre-primary start' },
  { value: '1 – 10', label: 'School years' },
  { value: '11 – 12', label: 'Junior college' },
  { value: 'A · S · C', label: 'Arts, science, commerce' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="grid" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <EnvironmentOutlined /> G. R. Patil · Dombivli (East)
          </p>
          <HighlightHeading as="h1">
            A campus for every stage — KG to junior college.
          </HighlightHeading>
          <p className="lede">
            G. R. Patil Vidyamandir & Jr. College of Science & Commerce.
            Pre-primary, school and junior college on one campus — arts,
            science and commerce, with labs, sport and a full calendar of
            culture.
          </p>
          <div className="hero-actions">
            <Button type="primary" size="large" onClick={() => scrollToId('#services')}>
              See campus life
            </Button>
            <Button
              size="large"
              icon={<PlayCircleOutlined />}
              className="ghost-btn"
              onClick={() => scrollToId('#aim')}
            >
              Our aim
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <span className="hero-ring" aria-hidden="true" />
          <HeroSun />
          <figure className="hero-photo">
            <img
              src="/campus.png"
              alt="G. R. Patil campus building"
            />
            <span className="hero-shine" aria-hidden="true" />
          </figure>
          <span className="hero-chip">Arts · Science · Commerce</span>
        </div>

        <dl className="hero-stats">
          {stats.map((item) => (
            <div key={item.label}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <svg
        className="waves"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="wave wave-1" d="M0,80 C240,160 480,0 720,80 C960,160 1200,20 1440,90 L1440,180 L0,180 Z" />
        <path className="wave wave-2" d="M0,110 C280,40 520,180 760,110 C1000,40 1220,150 1440,90 L1440,180 L0,180 Z" />
        <path className="wave wave-3" d="M0,140 C360,90 720,180 1080,130 C1260,110 1380,140 1440,150 L1440,180 L0,180 Z" />
      </svg>
    </section>
  )
}
