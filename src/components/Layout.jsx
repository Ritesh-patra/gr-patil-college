import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import SmoothScroll from './SmoothScroll'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const lenis = window.__lenis
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])
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
