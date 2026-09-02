import Hero from '../components/Hero'
import About from '../components/About'
import Trustee from '../components/Trustee'
import ServiceShowcase from '../components/ServiceShowcase'
import Sections from '../components/Sections'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Trustee />
      <ServiceShowcase />
      <Sections />
    </main>
  )
}
