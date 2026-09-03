import Reveal from './Reveal'
import HighlightHeading from './HighlightHeading'
import SolarStory from './SolarStory'
import QuoteDesk from './QuoteDesk'
import './Sections.css'

export default function Sections() {
  return (
    <>
      <SolarStory />

      <section className="block impact" id="why">
        <div className="block-inner">
          <Reveal>
            <p className="kicker">Why families choose us</p>
            <HighlightHeading className="display">
              One Educational Journey, From School to Higher Education
            </HighlightHeading>
          </Reveal>
          <div className="impact-grid">
            <Reveal>
              <article className="impact-card">
                <small>Academic journey</small>
                <strong>
                  School to Std. 12
                </strong>
                <p>A continuous pathway from early schooling through secondary and higher secondary education.</p>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="impact-card gold">
                <small>Junior college</small>
                <strong>
                  Science
                  <em> &amp; Commerce</em>
                </strong>
                <p>Students can choose Science or Commerce at the junior college level based on their academic interests and goals.</p>
              </article>
            </Reveal>
            <Reveal delay={200}>
              <article className="impact-card">
                <small>Learning beyond classrooms</small>
                <strong>
                  Knowledge
                  <em> + Experience</em>
                </strong>
                <p>Classroom learning is supported by practical activities, events, sports and opportunities for overall student development.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <QuoteDesk />
    </>
  )
}
