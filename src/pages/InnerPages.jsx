import { Link } from 'react-router-dom'
import HighlightHeading from '../components/HighlightHeading'
import Reveal from '../components/Reveal'
import LordIcon from '../components/LordIcon'
import { LORD, asset } from '../icons'
import { school } from '../school'
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
        lead="Jr. KG and Sr. KG. Little children learn by playing, singing and being noticed."
        image="assembly.jpeg"
        alt="Pre-primary assembly"
      />
      <div className="inner-body">
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
        image="secondary.jpeg"
        alt="School students"
      />
      <div className="inner-body">
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
        image="lab1.jpeg"
        alt="Science laboratory"
      />
      <div className="inner-body">
        <Reveal>
          <p className="kicker">Junior college</p>
          <HighlightHeading as="h2">Streams after Std. 10</HighlightHeading>
        </Reveal>
        <div className="inner-grid">
          {[
            { title: 'Science', text: 'Physics, chemistry, mathematics and biology for technical and medical paths.' },
            { title: 'Commerce', text: 'Accounts, business and economics — a foundation for finance and further study.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="inner-gold">
                <h3>{item.title}</h3>
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

const shots = [
  { src: asset('assembly.jpeg'), title: 'Assembly' },
  { src: asset('secondary.jpeg'), title: 'School day' },
  { src: asset('lab1.jpeg'), title: 'Science lab' },
  { src: asset('lab2.jpeg'), title: 'Practicals' },
  { src: asset('campus.png'), title: 'Campus' },
  { src: asset('sports.jpeg'), title: 'Sports' },
  { src: asset('fitness.jpg'), title: 'Fitness' },
  { src: asset('cultural.jpg'), title: 'Culture' },
  { src: asset('celebrate.jpg'), title: 'Occasions' },
  { src: asset('event.jpeg'), title: 'Gathering' },
  { src: asset('skilldev.jpeg'), title: 'Skill hours' },
  { src: asset('teachers.jpg'), title: 'Teachers' },
  { src: asset('team.jpg'), title: 'Team' },
  { src: asset('everyday.jpeg'), title: 'Everyday' },
  { src: asset('occasion.jpeg'), title: 'Festival' },
]

export function GalleryPage() {
  return (
    <main className="inner">
      <Banner
        kicker="04 · Gallery"
        title="Life on campus, in photographs."
        lead="Assemblies, labs, sport, culture and the people who stay."
        image="event.jpeg"
        alt="Campus gathering"
      />
      <div className="inner-body">
        <div className="inner-gallery">
          {shots.map((item, i) => (
            <Reveal key={item.src} delay={(i % 6) * 40}>
              <figure>
                <img src={item.src} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
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
        image="teachers.jpg"
        alt="Information desk"
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
    image: 'teachers.jpg',
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
    image: 'secondary.jpeg',
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
    image: 'event.jpeg',
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
