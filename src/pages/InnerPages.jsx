import { Link, NavLink } from 'react-router-dom'
import { Image } from 'antd'
import HighlightHeading from '../components/HighlightHeading'
import Reveal from '../components/Reveal'
import LordIcon from '../components/LordIcon'
import { LORD, asset } from '../icons'
import { school } from '../school'
import { aboutLinks } from '../components/About'
import QuoteDesk from '../components/QuoteDesk'
import './InnerPages.css'

function Banner({ kicker, title, lead, image, alt }) {
  return (
    <header className="inner-banner">
      <img src={asset(image)} alt={alt || ''} />
      <div className="inner-banner-copy">
        <p className="kicker">{kicker}</p>
        <HighlightHeading as="h1">{title}</HighlightHeading>
        <p>{lead}</p>
      </div>
    </header>
  )
}

function InnerSubnav({ root }) {
  const group = aboutLinks.find((item) => item.to === root)
  if (!group) return null
  const cls = ({ isActive }) => (isActive ? 'is-active' : undefined)
  return (
    <nav className="inner-subnav" aria-label={`${group.title} pages`}>
      <NavLink to={group.to} end className={cls}>
        Overview
      </NavLink>
      {group.kids.map((kid) => (
        <NavLink key={kid.to} to={kid.to} className={cls}>
          {kid.label}
        </NavLink>
      ))}
    </nav>
  )
}

function LeafPage({ root, kicker, title, lead, image, items }) {
  return (
    <main className="inner">
      <Banner kicker={kicker} title={title} lead={lead} image={image} alt={title} />
      <div className="inner-body">
        <InnerSubnav root={root} />
        <div className="inner-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article>
                <small>0{i + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link className="inner-go" to={root}>
          Back to {aboutLinks.find((g) => g.to === root)?.title}
        </Link>
      </div>
    </main>
  )
}

export function PrePrimaryPage() {
  const points = [
    { title: 'Care first', text: 'Settling-in, rest time and a teacher who knows each child’s name.' },
    { title: 'Play & colour', text: 'Stories, colour, clay and outdoor play — the real work of the early years.' },
    { title: 'First language', text: 'Songs and conversation that open language and the joy of speaking up.' },
    { title: 'Parents beside us', text: 'Daily notes and an open door, so home and school tell the same story.' },
  ]
  return (
    <main className="inner">
      <Banner
        kicker="01 · Pre-primary"
        title="A first classroom that still feels like home."
        lead="Nursery, Jr. KG and Sr. KG. Little children learn by playing, singing and being noticed."
        image="preprimary-class.jpg"
        alt="Pre-primary students"
      />
      <div className="inner-body">
        <InnerSubnav root="/pre-primary" />
        <div className="inner-grid three"> text: 'The first classroom — settling in, play and a teacher who knows each name.' },
            { to: '/pre-primary/jr-kg', title: 'Jr. KG', text: 'The school day becomes familiar: songs, friends, and the first habits of a desk.' },
            { to: '/pre-primary/sr-kg', title: 'Sr. KG', text: 'A year that points toward Std. 1, without rushing the play out of the day.' },
          ].map((item, i) => (
            <Reveal key={item.to} delay={i * 40}>
              <article className="inner-gold">
                <h3>
                  <Link to={item.to}>{item.title}</Link>
                </h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="inner-grid">
          {points.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article>
                <small>0{i + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link className="inner-go" to="/information-desk">
          Ask the information desk
        </Link>
      </div>
    </main>
  )
}

export function SchoolPage() {
  const points = [
    { title: 'Academics', text: 'A clear syllabus, regular assessment and teachers who explain until it makes sense.' },
    { title: 'Sport & movement', text: 'Grounds and games so energy has a place, and teamwork is practised.' },
    { title: 'Clubs', text: 'Music, drama and student clubs — a child is more than a rank list.' },
    { title: 'Values', text: 'Respect, punctuality and kindness are part of the timetable, not a poster.' },
  ]
  return (
    <main className="inner">
      <Banner
        kicker="02 · School"
        title="Years that build character as carefully as marks."
        lead="Std. 1 to 10. From the first notebook to the board years — think clearly, work honestly."
        image="school-sports.jpg"
        alt="School sports on the ground"
      />
      <div className="inner-body">
        <InnerSubnav root="/school" />
        <div className="inner-grid">
          {[
            { to: '/school/primary', title: 'Primary 1–7', text: 'First notebooks, reading and number sense — the years a child learns to love a desk.' },
            { to: '/school/secondary', title: 'Secondary 8–10', text: 'The board years: a clearer syllabus, labs, sport, and honest work toward +2.' },
          ].map((item, i) => (
            <Reveal key={item.to} delay={i * 40}>
              <article className="inner-gold">
                <h3>
                  <Link to={item.to}>{item.title}</Link>
                </h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="inner-grid">
          {points.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article>
                <small>0{i + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link className="inner-go" to="/information-desk">
          Ask the information desk
        </Link>
      </div>
    </main>
  )
}

export function CollegePage() {
  return (
    <main className="inner">
      <Banner
        kicker="03 · Jr college & degree"
        title="After school, a path with a name — then a degree on the same campus."
        lead="XI and XII in science and commerce. Undergraduate years follow here, affiliated to the University of Mumbai."
        image="college-class.jpg"
        alt="Junior college classroom"
      />
      <div className="inner-body">
        <InnerSubnav root="/jr-college" />
        <Reveal>
          <p className="kicker">Junior college</p>
          <HighlightHeading as="h2">Streams after Std. 10</HighlightHeading>
        </Reveal>
        <div className="inner-grid three">
          {[
            { title: 'Science', to: '/jr-college/science', text: 'Physics, chemistry, mathematics and biology for technical and medical paths.' },
            { title: 'Commerce', to: '/jr-college/commerce', text: 'Accounts, business and economics — a foundation for finance and further study.' },
            { title: 'Degree', to: '/jr-college/degree', text: 'Undergraduate years on this campus after +2, affiliated to the University of Mumbai.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="inner-gold">
                <h3>
                  <Link to={item.to}>{item.title}</Link>
                </h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="kicker">Degree college</p>
          <HighlightHeading as="h2">Undergraduate years, same house</HighlightHeading>
        </Reveal>
        <div className="inner-grid">
          {[
            { title: 'Undergraduate study', text: 'Degree programmes after junior college, with teachers who already know the student.' },
            { title: 'Labs & classrooms', text: 'A familiar campus for the years that look toward work and further study.' },
            { title: 'Guidance after +2', text: 'Help choosing a course and staying on a path — not only getting a seat.' },
            { title: 'One campus, next stage', text: 'Pre-primary to degree under one roof, so families do not start again at every turn.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article>
                <small>0{i + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link className="inner-go" to="/information-desk">
          Ask the information desk
        </Link>
      </div>
    </main>
  )
}

export function NurseryPage() {
  return (
    <LeafPage
      root="/pre-primary"
      kicker="Pre-primary · Nursery"
      title="The first classroom — small, kind, and named."
      lead="Nursery is where a child learns the school day: a peg for a bag, a song, a rest, a teacher who knows their name."
      image="preprimary-class.jpg"
      items={[
        { title: 'Settling in', text: 'The first weeks are slow on purpose. Tears are expected. A teacher stays close until the room feels like theirs.' },
        { title: 'Play is the work', text: 'Blocks, colour, clay and outdoor time. Nursery is not a tiny Std. 1 — it is play with a watchful adult.' },
        { title: 'Language at the table', text: 'Songs, stories and conversation. Speaking up starts here, in a room that waits for the child.' },
        { title: 'Parents beside us', text: 'A note home, an open door. Home and school tell the same story in these early weeks.' },
      ]}
    />
  )
}

export function JrKgPage() {
  return (
    <LeafPage
      root="/pre-primary"
      kicker="Pre-primary · Jr. KG"
      title="A year that makes the school day feel ordinary."
      lead="After Nursery, Jr. KG keeps play at the centre and quietly adds friends, songs and the first habits of a longer day."
      image="preprimary-flags.jpg"
      items={[
        { title: 'A familiar room', text: 'The child already knows a teacher and a peg. Jr. KG is not a new start — it is a longer, kinder day.' },
        { title: 'Play is still the work', text: 'Blocks, colour, clay and outdoor time. We do not drill a four-year-old into a rank list.' },
        { title: 'Language at the table', text: 'Songs, stories and conversation. Speaking up grows in a room that already knows the child.' },
        { title: 'Toward Sr. KG', text: 'Teachers talk across the corridor. The child who leaves Jr. KG is known, not a new file.' },
      ]}
    />
  )
}

export function SrKgPage() {
  return (
    <LeafPage
      root="/pre-primary"
      kicker="Pre-primary · Sr. KG"
      title="A year that points toward Std. 1 — without rushing it."
      lead="Senior KG keeps play at the centre, and quietly adds the habits a first notebook will need: listening, sharing, letters and number sense."
      image="preprimary-ground.jpg"
      items={[
        { title: 'Ready, not rushed', text: 'Letters and numbers arrive through stories and games. We do not drill a five-year-old into a rank list.' },
        { title: 'A longer day', text: 'More circle time, more outdoor play, more chance to finish a task. Confidence grows in small, finished things.' },
        { title: 'Friends and fairness', text: 'Sharing, waiting, speaking in turn — the social work of the year before school proper.' },
        { title: 'Handover to Std. 1', text: 'Teachers talk across the corridor. The child who leaves Sr. KG is known, not a new file.' },
      ]}
    />
  )
}

export function PrimaryPage() {
  return (
    <LeafPage
      root="/school"
      kicker="School · Primary"
      title="Std. 1 to 7 — the years a child learns to love a notebook."
      lead="Primary school on this campus is reading, number sense, the first games, and a teacher who still knows the family at the gate."
      image="preprimary-flags.jpg"
      items={[
        { title: 'First notebooks', text: 'Handwriting, reading and the joy of a sum that finally works. We explain until it makes sense.' },
        { title: 'A full day', text: 'Class, the ground, the hall. Primary is not only desks — sport and song sit on the timetable.' },
        { title: 'Care that stays', text: 'The same house as Nursery. A child does not start again; the campus already knows them.' },
        { title: 'Values in the day', text: 'Punctuality, kindness and honesty are practised, not posted. Primary is where they become habit.' },
      ]}
    />
  )
}

export function SecondaryPage() {
  return (
    <LeafPage
      root="/school"
      kicker="School · Secondary"
      title="Std. 8 to 10 — the years that ask for honest work."
      lead="Secondary school builds toward the board years: a clearer syllabus, labs, sport, and teachers who will not let a gap stay unexplained."
      image="school-pe.jpg"
      items={[
        { title: 'The syllabus, plainly', text: 'Regular assessment and a desk that asks for the work. Board years are prepared, not crammed at the end.' },
        { title: 'Labs & the ground', text: 'Science practicals and games after the bell. A student is more than a rank list.' },
        { title: 'Clubs & the hall', text: 'Music, drama and student clubs — secondary is where a voice finds a stage.' },
        { title: 'Toward +2', text: 'Science or commerce after Std. 10, on this campus. We help choose a stream; we do not offer Arts.' },
      ]}
    />
  )
}

export function SciencePage() {
  return (
    <LeafPage
      root="/jr-college"
      kicker="Jr college · Science"
      title="Physics, chemistry, mathematics and biology — labs that are used."
      lead="XI and XII science on this campus. A path toward engineering, medicine and further study, with practicals that are not a display."
      image="college-class.jpg"
      items={[
        { title: 'The four desks', text: 'Physics, chemistry, mathematics and biology. The week has hours in the lab, not only in the notebook.' },
        { title: 'Labs that work', text: 'Pipettes, benches and a teacher on duty. Practicals follow the syllabus and the safety rules.' },
        { title: 'A technical path', text: 'The stream is for students who want engineering, medicine or a science degree — not a holding place.' },
        { title: 'Next, a degree', text: 'Undergraduate years continue here, affiliated to the University of Mumbai, so the lab does not change houses.' },
      ]}
    />
  )
}

export function CommercePage() {
  return (
    <LeafPage
      root="/jr-college"
      kicker="Jr college · Commerce"
      title="Accounts, business and economics — a foundation with a name."
      lead="XI and XII commerce on this campus. Numbers that will follow into a degree, a CA pathway or work in finance."
      image="college-lecture.jpg"
      items={[
        { title: 'Accounts first', text: 'Book-keeping taught until the ledger is a habit. Commerce here starts with numbers that balance.' },
        { title: 'Business & economics', text: 'How a firm works, how a market moves. The syllabus is the real world, explained at a desk.' },
        { title: 'Toward work and study', text: 'A foundation for finance, further study and a degree on the same ground.' },
        { title: 'Two doors only', text: 'Science or commerce after Std. 10. This campus does not run an Arts stream.' },
      ]}
    />
  )
}

export function DegreePage() {
  return (
    <LeafPage
      root="/jr-college"
      kicker="Jr college · Degree"
      title="Undergraduate years in the house you already know."
      lead="After +2, a degree on this campus — affiliated to the University of Mumbai — so a family does not start again at a new gate."
      image="campus-building.jpg"
      items={[
        { title: 'Same campus, next stage', text: 'Teachers who already know the student. The walk from junior college to a degree does not need a new city.' },
        { title: 'Science & commerce', text: 'Undergraduate study follows the two streams this house keeps. There is no Arts degree here.' },
        { title: 'Labs & classrooms', text: 'Familiar benches, a familiar yard. The years that look toward work still happen under this mark.' },
        { title: 'Guidance after +2', text: 'Help choosing a course and staying on a path — not only getting a seat. Ask the information desk.' },
      ]}
    />
  )
}

const shots = [
  { src: asset('aarambh-function.jpg'), title: 'Aarambh annual function' },
  { src: asset('preprimary-class.jpg'), title: 'Pre-primary classroom' },
  { src: asset('preprimary-flags.jpg'), title: 'National day' },
  { src: asset('preprimary-ground.jpg'), title: 'Ground performance' },
  { src: asset('school-sports.jpg'), title: 'Sports meet' },
  { src: asset('school-pe.jpg'), title: 'Physical education' },
  { src: asset('college-class.jpg'), title: 'College classroom' },
  { src: asset('college-lecture.jpg'), title: 'Lecture hour' },
  { src: asset('faculty-flag.jpg'), title: 'Faculty' },
  { src: asset('campus-building.jpg'), title: 'Campus' },
]

export function GalleryPage() {
  return (
    <main className="inner">
      <Banner
        kicker="04 · Gallery"
        title="Life on campus, in photographs."
        lead="Tap a photograph to open it full size."
        image="aarambh-function.jpg"
        alt="Aarambh annual function"
      />
      <div className="inner-body">
        <Image.PreviewGroup>
          <div className="inner-gallery">
            {shots.map((item, i) => (
              <Reveal key={item.src} delay={(i % 6) * 40}>
                <figure className="inner-gallery-shot">
                  <Image src={item.src} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Image.PreviewGroup>
      </div>
    </main>
  )
}

export function DeskPage() {
  return (
    <main className="inner">
      <Banner
        kicker="05 · Information desk"
        title="Come with a question. Leave with a next step."
        lead="Admissions, timings, transport and fees — write to us or walk in."
        image="faculty-flag.jpg"
        alt="Faculty at the information desk"
      />
      <div className="inner-body">
        <div className="inner-reach">
          <div>
            <LordIcon src={LORD.phone} trigger="loop" colors="primary:#c41e26,secondary:#f0c419" size={32} />
            <strong>Phone</strong>
            {school.displayPhones.map((n, i) => (
              <a key={n} href={`tel:${school.tel[i]}`}>
                {n}
              </a>
            ))}
          </div>
          <div>
            <LordIcon src={LORD.mail} trigger="loop" colors="primary:#c41e26,secondary:#f0c419" size={32} />
            <strong>Email</strong>
            <a href={`mailto:${school.email}`}>{school.email}</a>
          </div>
        </div>
        <div className="inner-grid">
          {[
            { title: 'Admissions', text: 'How to apply for pre-primary, school, +2 or degree — dates, documents and the next step.' },
            { title: 'Timings', text: 'School hours, office hours and when the desk is open for walk-in queries.' },
            { title: 'Transport', text: 'Ask about routes and seats. We will confirm what is running this year.' },
            { title: 'Fees', text: 'Fee structure and any support available — we answer plainly.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article>
                <small>0{i + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <QuoteDesk />
    </main>
  )
}

const deskDocs = {
  notices: {
    kicker: 'Information desk',
    title: 'Notices',
    lead: 'Dates, holidays and anything the office needs families to know this term.',
    image: 'faculty-flag.jpg',
    items: [
      { title: 'Admissions window', text: 'Ask the desk for the current dates for pre-primary, school, junior college and degree.' },
      { title: 'Term calendar', text: 'Working days, assessments and campus occasions as they are confirmed.' },
      { title: 'Holiday list', text: 'The list for this year is issued from the office — collect it or ask us to send it.' },
      { title: 'Urgent notes', text: 'Weather, transport or a changed timetable will be posted here first.' },
    ],
  },
  guidelines: {
    kicker: 'Information desk',
    title: 'Guidelines',
    lead: 'How the campus runs — uniform, attendance, labs and what we ask of families.',
    image: 'campus-building.jpg',
    items: [
      { title: 'Attendance', text: 'A regular day, on time. Leave is informed to the class teacher, not assumed.' },
      { title: 'Uniform & conduct', text: 'The same ground, the same standard — dress and behaviour are part of the timetable.' },
      { title: 'Labs & safety', text: 'Science practicals follow the lab rules. Students stay with the teacher on duty.' },
      { title: 'Parents', text: 'Walk in during office hours, or write. We answer from this campus, not a call centre.' },
    ],
  },
  circular: {
    kicker: 'Information desk',
    title: 'Circular',
    lead: 'Office circulars for fees, exams and any change the school puts in writing.',
    image: 'college-lecture.jpg',
    items: [
      { title: 'Fee circulars', text: 'When a fee notice is issued, it sits here so families can read it plainly.' },
      { title: 'Exam circulars', text: 'Internal tests, board dates and practicals as the office confirms them.' },
      { title: 'Campus circulars', text: 'Events, transport and any change to the day that needs a signature from the desk.' },
      { title: 'Ask for a copy', text: 'If a circular is not yet online, call or walk in. We will print what is current.' },
    ],
  },
}

function DeskDocsPage({ kind }) {
  const doc = deskDocs[kind]
  return (
    <main className="inner">
      <Banner
        kicker={doc.kicker}
        title={doc.title}
        lead={doc.lead}
        image={doc.image}
        alt={doc.title}
      />
      <div className="inner-body">
        <div className="inner-grid">
          {doc.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article>
                <small>0{i + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="inner-note">{school.address}</p>
        <Link className="inner-go" to="/information-desk">
          Talk to the information desk
        </Link>
      </div>
    </main>
  )
}

export function NoticesPage() {
  return <DeskDocsPage kind="notices" />
}

export function GuidelinesPage() {
  return <DeskDocsPage kind="guidelines" />
}

export function CircularPage() {
  return <DeskDocsPage kind="circular" />
}
