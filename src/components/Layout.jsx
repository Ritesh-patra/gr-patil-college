import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import SmoothScroll, { scrollToId } from './SmoothScroll'

function ScrollTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.startsWith('#') ? hash : `#${hash}`
      const t = window.setTimeout(() => scrollToId(id), 80)
      return () => window.clearTimeout(t)
    }
    const lenis = window.__lenis
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <SmoothScroll />
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
