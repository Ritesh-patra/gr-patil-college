import { useState } from 'react'
import HighlightHeading from './HighlightHeading'
import Reveal from './Reveal'
import LordIcon from './LordIcon'
import { LORD } from '../icons'
import { school, ink, light, onBtn } from '../school'
import { asset } from '../icons'
import './QuoteDesk.css'

const ic = LORD

const types = [
  { id: 'Pre-primary', note: 'Jr. KG / Sr. KG', icon: ic.home },
  { id: 'School', note: 'Std. 1 to 10', icon: ic.person },
  { id: 'Jr. college', note: 'Science / commerce', icon: ic.shop },
  { id: 'Degree college', note: 'Undergraduate', icon: ic.globe },
]

const empty = {
  type: 'School',
  name: '',
  phone: '',
  email: '',
  notes: '',
}

export default function QuoteDesk() {
  const [sent, setSent] = useState(false)
  const [data, setData] = useState(empty)
  const set = (key) => (e) => setData((d) => ({ ...d, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!data.name.trim() || !data.phone.trim()) return
    const body = [
      `Admission enquiry — ${data.type}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || '—'}`,
      '',
      data.notes || '',
    ].join('\n')
    window.open(
      `https://wa.me/91${school.whatsapp}?text=${encodeURIComponent(body)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
    setData(empty)
  }

  return (
    <section className="quote-desk" id="contact">
      <div className="quote-shell">
        <aside
          className="quote-side"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(42, 10, 16, 0.45), rgba(18, 5, 8, 0.88)), url(${asset('event.jpeg')})`,
          }}
        >
          <Reveal>
            <p className="kicker">Admission</p>
            <HighlightHeading
              borderColor="#f0c419"
              glowColor="rgba(240, 196, 25, 0.5)"
            >
              Talk to the office
            </HighlightHeading>
            <p>
              Tell us the class you need and how to reach you. We reply from
              the campus desk — not a call-centre list.
            </p>
          </Reveal>
          <div className="quote-reach">
            {school.displayPhones.map((n, i) => (
              <a key={n} href={`tel:${school.tel[i]}`}>
                <LordIcon src={ic.phone} trigger="hover" colors={light} target="a" size={26} />
                {n}
              </a>
            ))}
            <p className="quote-addr">
              <LordIcon src={ic.pin} trigger="hover" colors={light} size={26} />
              {school.address}
            </p>
          </div>
        </aside>

        <div className="quote-pane">
          {sent ? (
            <div className="quote-done">
              <LordIcon src={ic.party} trigger="hover" size={72} colors={ink} />
              <HighlightHeading as="h3" variant="split">
                Thank you so much.
              </HighlightHeading>
              <p>WhatsApp should be open with your enquiry. If nothing opened, call {school.displayPhones[0]}.</p>
              <button type="button" className="quote-go" onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form className="quote-card" onSubmit={submit}>
              <p className="quote-tag">Enquiry</p>
              <HighlightHeading as="h3">Your details</HighlightHeading>

              <p className="quote-hint">Class</p>
              <div className="quote-kinds" role="group" aria-label="Class">
                {types.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={data.type === t.id ? 'on' : ''}
                    onClick={() => setData((d) => ({ ...d, type: t.id }))}
                  >
                    <LordIcon src={t.icon} trigger="hover" colors={ink} target="button" size={28} />
                    <strong>{t.id}</strong>
                    <small>{t.note}</small>
                  </button>
                ))}
              </div>

              <div className="quote-fields">
                <label>
                  Name *
                  <span className="glass-row">
                    <LordIcon src={ic.person} trigger="hover" colors={ink} target=".glass-row" size={26} />
                    <input
                      required
                      value={data.name}
                      onChange={set('name')}
                      placeholder="Student or parent name"
                    />
                  </span>
                </label>
                <label>
                  Phone *
                  <span className="glass-row">
                    <LordIcon src={ic.phone} trigger="hover" colors={ink} target=".glass-row" size={26} />
                    <input
                      required
                      value={data.phone}
                      onChange={set('phone')}
                      placeholder="Phone number"
                    />
                  </span>
                </label>
                <label className="wide">
                  Email
                  <span className="glass-row">
                    <LordIcon src={ic.mail} trigger="hover" colors={ink} target=".glass-row" size={26} />
                    <input
                      type="email"
                      value={data.email}
                      onChange={set('email')}
                      placeholder="you@email.com"
                    />
                  </span>
                </label>
                <label className="wide">
                  Notes
                  <span className="glass-row tall">
                    <LordIcon src={ic.note} trigger="hover" colors={ink} target=".glass-row" size={26} />
                    <textarea
                      rows={3}
                      value={data.notes}
                      onChange={set('notes')}
                      placeholder="Class, stream, or anything we should know"
                    />
                  </span>
                </label>
              </div>

              <button type="submit" className="quote-go">
                <LordIcon src={ic.send} trigger="hover" colors={onBtn} target="button" size={26} />
                Send on WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
