import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Drawer } from 'antd'
import BrandLockup from './BrandLockup'
import AnimatedLogo from './AnimatedLogo'
import LordIcon from './LordIcon'
import { LORD } from '../icons'
import { school } from '../school'
import { aboutPathOn } from './About'
import { scrollToId } from './SmoothScroll'
import './Navbar.css'

const deskLinks = [
  { to: '/notices', label: 'Notices', hint: 'Dates and updates' },
  { to: '/guidelines', label: 'Guidelines', hint: 'Rules and process' },
  { to: '/circular', label: 'Circular', hint: 'Office circulars' },
]

const links = [
  { href: '#home', label: 'Home', hint: 'Start here', icon: LORD.home },
  { href: '#about', label: 'About', hint: 'Who we are', icon: LORD.person },
  { href: '#services', label: 'Campus', hint: 'Life at school', icon: LORD.shop },
  { href: '#why', label: 'Why us', hint: 'What you gain', icon: LORD.plant },
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

  const hashOn = (href) => {
    if (pathname !== '/') {
      return href === '#about' && aboutPathOn(pathname)
    }
    return active === href
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
              className={hashOn(link.href) ? 'is-active' : ''}
              onClick={(e) => go(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Link to="/gallery" className={pathname === '/gallery' ? 'is-active' : ''}>
            Gallery
          </Link>
          <div className={`nav-drop ${pathname === '/information-desk' || deskLinks.some((d) => pathname === d.to) ? 'is-on' : ''}`}>
            <Link to="/information-desk" className="nav-drop-btn">
              Info desk
            </Link>
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
                  className={`sheet-link ${hashOn(link.href) ? 'is-active' : ''}`}
                  style={{ '--i': i }}
                  onClick={(e) => go(e, link.href)}
                >
                  <span className="sheet-mark">
                    <LordIcon
                      src={link.icon}
                      trigger="loop-on-hover"
                      colors={
                        hashOn(link.href)
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
              <Link
                to="/gallery"
                className={`sheet-link ${pathname === '/gallery' ? 'is-active' : ''}`}
                style={{ '--i': links.length }}
                onClick={close}
              >
                <span className="sheet-mark">
                  <LordIcon
                    src={LORD.shop}
                    trigger="loop-on-hover"
                    colors={
                      pathname === '/gallery'
                        ? 'primary:#ffffff,secondary:#f0c419'
                        : 'primary:#f0c419,secondary:#6d2d91'
                    }
                    target=".sheet-link"
                    size={32}
                  />
                </span>
                <span>
                  <strong>Gallery</strong>
                  <small>Campus in photographs</small>
                </span>
                <LordIcon
                  src={LORD.send}
                  trigger="hover"
                  colors="primary:#6d2d91,secondary:#f0c419"
                  target=".sheet-link"
                  size={18}
                />
              </Link>
              <p className="sheet-desk-label">Info desk</p>
              <Link
                to="/information-desk"
                className={`sheet-link ${pathname === '/information-desk' ? 'is-active' : ''}`}
                style={{ '--i': links.length + 1 }}
                onClick={close}
              >
                <span className="sheet-mark">
                  <LordIcon
                    src={LORD.mail}
                    trigger="loop-on-hover"
                    colors={
                      pathname === '/information-desk'
                        ? 'primary:#ffffff,secondary:#f0c419'
                        : 'primary:#f0c419,secondary:#6d2d91'
                    }
                    target=".sheet-link"
                    size={32}
                  />
                </span>
                <span>
                  <strong>Information desk</strong>
                  <small>Ask a question</small>
                </span>
                <LordIcon
                  src={LORD.send}
                  trigger="hover"
                  colors="primary:#6d2d91,secondary:#f0c419"
                  target=".sheet-link"
                  size={18}
                />
              </Link>
              {deskLinks.map((item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`sheet-link ${pathname === item.to ? 'is-active' : ''}`}
                  style={{ '--i': links.length + i + 2 }}
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
