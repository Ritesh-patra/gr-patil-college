import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button, Drawer } from 'antd'
import BrandLockup from './BrandLockup'
import AnimatedLogo from './AnimatedLogo'
import LordIcon from './LordIcon'
import { LORD } from '../icons'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', hint: 'Start here', icon: LORD.home, end: true },
  { to: '/pre-primary', label: 'Pre-primary', hint: 'Jr. KG & Sr. KG', icon: LORD.plant },
  { to: '/school', label: 'School', hint: 'Std. 1 to 10', icon: LORD.globe },
  { to: '/jr-college', label: 'Jr college & degree', hint: 'XI–XII and UG', icon: LORD.note },
  { to: '/gallery', label: 'Gallery', hint: 'Campus photos', icon: LORD.shop },
  { to: '/information-desk', label: 'Info desk', hint: 'Ask us anything', icon: LORD.mail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  const goDesk = () => {
    close()
    navigate('/information-desk')
  }

  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">
            <AnimatedLogo size={44} height={52} />
          </span>
          <BrandLockup />
        </Link>

        <nav className="nav-pills" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              {link.label}
            </NavLink>
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
            onClick={goDesk}
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
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `sheet-link ${isActive ? 'is-active' : ''}`}
                  style={{ '--i': i }}
                  onClick={close}
                >
                  <span className="sheet-mark">
                    <LordIcon
                      src={link.icon}
                      trigger="loop-on-hover"
                      colors={
                        link.to === '/pre-primary'
                          ? 'primary:#f0c419,secondary:#f0c419'
                          : pathname === link.to || (link.end && pathname === '/')
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
                </NavLink>
              ))}
            </nav>

            <div className="sheet-foot">
              <NavLink className="sheet-cta" to="/information-desk" onClick={close}>
                Admissions
                <LordIcon
                  src={LORD.send}
                  trigger="hover"
                  colors="primary:#3a0d14,secondary:#c41e26"
                  target=".sheet-cta"
                  size={22}
                />
              </NavLink>
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
