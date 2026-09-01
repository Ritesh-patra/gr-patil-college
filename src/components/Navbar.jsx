import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Drawer } from 'antd'
import BrandLockup from './BrandLockup'
import AnimatedLogo from './AnimatedLogo'
import LordIcon from './LordIcon'
import { LORD } from '../icons'
import { school } from '../school'
import { scrollToId } from './SmoothScroll'
import './Navbar.css'

const deskLinks = [
  { to: '/notices', label: 'Notices', hint: 'Dates and updates' },
  { to: '/guidelines', label: 'Guidelines', hint: 'Rules and process' },
  { to: '/circular', label: 'Circular', hint: 'Office circulars' },
]

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
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (pathname !== '/') return
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
  }, [pathname])

  const close = () => setOpen(false)

  const go = (e, href) => {
    e.preventDefault()
    close()
    setActive(href)
    if (pathname !== '/') {
      navigate({ pathname: '/', hash: href.slice(1) })
      return
    }
    scrollToId(href)
  }

  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <Link to="/" className="brand" onClick={(e) => go(e, '#home')}>
          <span className="brand-mark">
            <AnimatedLogo size={44} height={52} />
          </span>
          <BrandLockup />
        </Link>

        <nav className="nav-pills" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={pathname === '/' ? link.href : `/${link.href}`}
              className={pathname === '/' && active === link.href ? 'is-active' : ''}
              onClick={(e) => go(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className={`nav-drop ${deskLinks.some((d) => pathname === d.to) ? 'is-on' : ''}`}>
            <span className="nav-drop-btn">Info desk</span>
            <div className="nav-drop-menu" role="menu">
              {deskLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  role="menuitem"
                  className={pathname === item.to ? 'is-active' : ''}
                  onClick={close}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
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
        onClose={close}
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
              onClick={close}
            >
              <span aria-hidden="true" />
            </button>
          </header>

          <div className="sheet-scroll">
            <nav className="sheet-nav" aria-label="Mobile">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={pathname === '/' ? link.href : `/${link.href}`}
                  className={`sheet-link ${pathname === '/' && active === link.href ? 'is-active' : ''}`}
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
                          : pathname === '/' && active === link.href
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
              <p className="sheet-desk-label">Info desk</p>
              {deskLinks.map((item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`sheet-link ${pathname === item.to ? 'is-active' : ''}`}
                  style={{ '--i': links.length + i }}
                  onClick={close}
                >
                  <span className="sheet-mark">
                    <LordIcon
                      src={LORD.note}
                      trigger="loop-on-hover"
                      colors={
                        pathname === item.to
                          ? 'primary:#ffffff,secondary:#f0c419'
                          : 'primary:#f0c419,secondary:#6d2d91'
                      }
                      target=".sheet-link"
                      size={32}
                    />
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.hint}</small>
                  </span>
                  <LordIcon
                    src={LORD.send}
                    trigger="hover"
                    colors="primary:#6d2d91,secondary:#f0c419"
                    target=".sheet-link"
                    size={18}
                  />
                </Link>
              ))}
            </nav>

            <div className="sheet-foot">
              <a className="sheet-cta" href={pathname === '/' ? '#contact' : '/#contact'} onClick={(e) => go(e, '#contact')}>
                Admissions
                <LordIcon
                  src={LORD.send}
                  trigger="hover"
                  colors="primary:#3a0d14,secondary:#c41e26"
                  target=".sheet-cta"
                  size={22}
                />
              </a>
              {school.displayPhones.map((n, i) => (
                <a key={n} href={`tel:${school.tel[i]}`}>
                  <LordIcon src={LORD.phone} trigger="hover" colors="primary:#f0c419,secondary:#6d2d91" target="a" size={22} />
                  {n}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </header>
  )
}
