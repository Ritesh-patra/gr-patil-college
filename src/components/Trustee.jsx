import HighlightHeading from './HighlightHeading'
import Reveal from './Reveal'
import LordIcon from './LordIcon'
import { LORD, asset } from '../icons'
import { school } from '../school'
import './Trustee.css'

export default function Trustee() {
  return (
    <section className="trustee" id="leadership">
      <p className="trustee-watermark" aria-hidden="true">
        GR
      </p>

      <div className="trustee-inner">
        <Reveal className="trustee-portrait">
          <span className="trustee-spine">Trustee</span>
          <figure>
            <img src={asset('trustee.png')} alt={school.trustee} />
            <span className="trustee-cut" aria-hidden="true" />
            <figcaption>
              <strong>{school.trustee}</strong>
              <span>Trustee</span>
            </figcaption>
          </figure>
          <div className="trustee-seal">
            <b>20+</b>
            <span>years on campus</span>
          </div>
        </Reveal>

        <Reveal delay={90} className="trustee-panel">
          <header className="trustee-head">
            <p className="kicker">Our leadership</p>
            <HighlightHeading>A message from our trustee</HighlightHeading>
          </header>

          <p className="trustee-mark">Leadership &amp; vision</p>
          <HighlightHeading as="h3" variant="split">
            Empowering young minds for a better tomorrow
          </HighlightHeading>
          <p>
            G. R. Patil Vidyamandir, Jr. College of Science &amp; Commerce and
            Degree College stand as one house: early years, board classes,
            XI–XII and undergraduate study on the same campus.
          </p>
          <p>
            We want every student to leave with discipline, opportunity and the
            confidence to take the next step — whether that is junior college
            or a degree.
          </p>

          <blockquote>
            <span aria-hidden="true">“</span>
            Every child has the potential to achieve greatness when given the
            right guidance, opportunities and encouragement.
          </blockquote>

          <div className="trustee-sign">
            <LordIcon src={LORD.person} trigger="loop" colors="primary:#f0c419,secondary:#c41e26" size={34} />
            <div>
              <strong>{school.trustee}</strong>
              <small>Trustee · School · Junior college · Degree college</small>
            </div>
          </div>

          <div className="trustee-reach">
            <div className="reach-phone">
              <LordIcon src={LORD.phone} trigger="hover" colors="primary:#f0c419,secondary:#ffffff" size={24} />
              <strong>Phone</strong>
              {school.phones.map((n) => (
                <a key={n} href={`tel:+91${n}`}>
                  +91 {n}
                </a>
              ))}
            </div>
            <a className="reach-mail" href={`mailto:${school.email}`}>
              <LordIcon src={LORD.mail} trigger="hover" colors="primary:#c41e26,secondary:#f0c419" size={24} />
              <strong>Email</strong>
              <span>{school.email}</span>
            </a>
            <div className="reach-degree">
              <LordIcon src={LORD.shop} trigger="hover" colors="primary:#3a0d14,secondary:#c41e26" size={24} />
              <strong>Degree college</strong>
              <span>Undergraduate · University of Mumbai</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
