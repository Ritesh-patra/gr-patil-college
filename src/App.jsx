import { ConfigProvider } from 'antd'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aim from './components/Aim'
import Trustee from './components/Trustee'
import ServiceShowcase from './components/ServiceShowcase'
import Sections from './components/Sections'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import SmoothScroll from './components/SmoothScroll'
import { appTheme } from './theme'

export default function App() {
  return (
    <ConfigProvider theme={appTheme}>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Aim />
        <Trustee />
        <ServiceShowcase />
        <Sections />
      </main>
      <Footer />
      <WhatsAppFloat />
    </ConfigProvider>
  )
}
