import { useEffect, useState } from 'react'
import { Button, Drawer } from 'antd'
import BrandLockup from './BrandLockup'
import AnimatedLogo from './AnimatedLogo'
import LordIcon from './LordIcon'
import { LORD } from '../icons'
import { scrollToId } from './SmoothScroll'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home', hint: 'Start here', icon: LORD.home },
  { href: '#aim', label: 'Aim', hint: 'Why we teach', icon: LORD.globe },
  { href: '#leadership', label: 'Trustee', hint: 'A message', icon: LORD.note },
  { href: '#about', label: 'About', hint: 'Who we are', icon: LORD.person },
  { href: '#services', label: 'Campus', hint: 'Life at school', icon: LORD.shop },
  { href: '#why', label: 'Why us', hint: 'What you gain', icon: LORD.plant },
  { href: '#contact', label: 'Admission', hint: 'Talk to us', icon: LORD.mail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = links.map((l) => l.href.slice(1))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${id}`)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    setActive(href)
    scrollToId(href)
  }

  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <a href="#home" className="brand" onClick={(e) => go(e, '#home')}>
          <span className="brand-mark">
            <AnimatedLogo size={44} height={52} />
          </span>
          <BrandLockup />
        </a>

        <nav className="nav-pills" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'is-active' : ''}
              onClick={(e) => go(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <Button
            type="primary"
            className="nav-cta"
            icon={
              <LordIcon
                src={LORD.send}
                trigger="hover"
                colors="primary:#ffffff,secondary:#f0c419"
                target="button"
                size={22}
              />
            }
            onClick={(e) => go(e, '#contact')}
          >
            Admissions
          </Button>
          <button
            type="button"
            className="nav-burger"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="burger-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        closable={false}
        width="min(100vw, 420px)"
        rootClassName="nav-drawer"
        styles={{
          header: { display: 'none' },
          body: { padding: 0, height: '100%' },
          content: { background: 'transparent' },
        }}
      >
        <div className="sheet">
          <span className="sheet-sun" aria-hidden="true" />
          <header className="sheet-head">
            <div className="brand">
              <span className="brand-mark">
                <AnimatedLogo size={32} height={38} light />
              </span>
              <BrandLockup light />
            </div>
            <button
              type="button"
              className="sheet-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true" />
            </button>
          </header>

          <div className="sheet-scroll">
            <nav className="sheet-nav" aria-label="Mobile">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`sheet-link ${active === link.href ? 'is-active' : ''}`}
                style={{ '--i': i }}
                onClick={(e) => go(e, link.href)}
              >
                <span className="sheet-mark">
                  <LordIcon
                    src={link.icon}
                    trigger="loop-on-hover"
                    colors={
                      link.href === '#aim'
                        ? 'primary:#f0c419,secondary:#f0c419'
                        : active === link.href
                          ? 'primary:#ffffff,secondary:#f0c419'
                          : 'primary:#f0c419,secondary:#6d2d91'
                    }
                    target=".sheet-link"
                    size={32}
                  />
                </span>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.hint}</small>
                </span>
                <LordIcon
                  src={LORD.send}
                  trigger="hover"
                  colors="primary:#6d2d91,secondary:#f0c419"
                  target=".sheet-link"
                  size={18}
                />
              </a>
            ))}
          </nav>

          <div className="sheet-foot">
            <a className="sheet-cta" href="#contact" onClick={(e) => go(e, '#contact')}>
              Admissions
              <LordIcon
                src={LORD.send}
                trigger="hover"
                colors="primary:#3a0d14,secondary:#c41e26"
                target=".sheet-cta"
                size={22}
              />
            </a>
            <a href="tel:+919136800532">
              <LordIcon src={LORD.phone} trigger="hover" colors="primary:#f0c419,secondary:#6d2d91" target="a" size={22} />
              91368 00532
            </a>
            <a href="tel:+919136545145">
              <LordIcon src={LORD.phone} trigger="hover" colors="primary:#f0c419,secondary:#6d2d91" target="a" size={22} />
              91365 45145
            </a>
          </div>
          </div>
        </div>
      </Drawer>
    </header>
  )
}
