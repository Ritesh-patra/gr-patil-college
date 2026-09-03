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
            <p className="trustee-name">{school.trustee}</p>
            <HighlightHeading>A Message from Our Trustee</HighlightHeading>
          </header>

          <p className="trustee-mark">Leadership &amp; vision</p>
          <HighlightHeading as="h3" variant="split">
            Building a strong foundation for every student
          </HighlightHeading>
          <p>
            At G. R. Patil Vidyamandir &amp; Junior College, we believe education
            is a continuous journey that begins with strong foundations and
            grows through knowledge, discipline and experience. Our aim is to
            provide students with a supportive learning environment where they
            can develop academically, build confidence and prepare thoughtfully
            for the opportunities ahead.
          </p>

          <blockquote>
            <span aria-hidden="true">“</span>
            Every student deserves the opportunity to learn, grow and move
            forward with confidence.
          </blockquote>

          <div className="trustee-sign">
            <LordIcon src={LORD.person} trigger="loop" colors="primary:#f0c419,secondary:#c41e26" size={34} />
            <div>
              <strong>{school.trustee}</strong>
              <small>Trustee · School &amp; Junior College</small>
            </div>
          </div>

          <div className="trustee-reach">
            <div className="reach-phone">
              <LordIcon src={LORD.plant} trigger="hover" colors="primary:#f0c419,secondary:#ffffff" size={24} />
              <strong>Education</strong>
              <span>School education with a focus on strong academic foundations and student development.</span>
            </div>
            <div className="reach-mail">
              <LordIcon src={LORD.note} trigger="hover" colors="primary:#c41e26,secondary:#f0c419" size={24} />
              <strong>Junior college</strong>
              <span>Science and Commerce pathways for students pursuing higher secondary education.</span>
            </div>
            <div className="reach-degree">
              <LordIcon src={LORD.globe} trigger="hover" colors="primary:#3a0d14,secondary:#c41e26" size={24} />
              <strong>Our approach</strong>
              <span>A supportive environment that encourages learning, discipline, confidence and responsibility.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
