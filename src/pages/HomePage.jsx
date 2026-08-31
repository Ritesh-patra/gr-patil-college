import Hero from '../components/Hero'
import Aim from '../components/Aim'
import Trustee from '../components/Trustee'
import ServiceShowcase from '../components/ServiceShowcase'
import Sections from '../components/Sections'
import PageDoors from '../components/PageDoors'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PageDoors />
      <Aim />
      <Trustee />
      <ServiceShowcase />
      <Sections />
    </main>
  )
}
