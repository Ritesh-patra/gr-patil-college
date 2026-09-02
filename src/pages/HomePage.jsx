import Hero from '../components/Hero'
import About from '../components/About'
import Aim from '../components/Aim'
import Trustee from '../components/Trustee'
import ServiceShowcase from '../components/ServiceShowcase'
import Sections from '../components/Sections'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Aim />
      <Trustee />
      <ServiceShowcase />
      <Sections />
    </main>
  )
}
