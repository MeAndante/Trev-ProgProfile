import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    number: '01',
    title: 'Everyday Calculators',
    description:
      'A collection of practical mobile app concepts: a temperature converter, wage calculator, BMI calculator, grades calculator, and a basic arithmetic calculator.',
    stack: ['Mobile applications', 'Calculator logic'],
    note: 'Individual implementation tools were not listed in the project notes.',
  },
  {
    number: '02',
    title: 'College of Information Technology Website',
    description:
      'A college information site concept featuring academic programs, events, news, and department information.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  },
  {
    number: '03',
    title: 'Student Information Page',
    description:
      'A student profile page concept centered on a photo gallery for sharing campus programs and experiences.',
    stack: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    number: '04',
    title: 'Pokémon TCG Deck Builder',
    description:
      'A front-end deck building concept with a selection of early-generation cards and simple card selection and management.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Trevor Santos home">TS<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="header-contact" href="mailto:trevorparong@gmail.com">Let’s talk <span>↗</span></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> IT STUDENT · WEB &amp; MOBILE</p>
            <h1>Making useful<br />things for the <em>web.</em></h1>
            <p className="intro">Hi, I’m <strong>Trevor Garrett P. Santos</strong> — a third-year Information Technology student who enjoys turning ideas into clear, practical digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span>↓</span></a>
              <a className="text-link" href="mailto:trevorparong@gmail.com">trevorparong@gmail.com <span>↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative code-inspired illustration" role="img">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="art-core"><span>&lt;</span><b>build</b><span>/&gt;</span></div>
            <span className="art-label label-top">curious by nature</span>
            <span className="art-label label-bottom">designed to be useful</span>
            <span className="spark spark-a">✳</span><span className="spark spark-b">✳</span>
          </div>
          <div className="hero-index"><span>01</span><span className="index-line" /> PORTFOLIO / 2026</div>
        </section>

        <section className="education section-wrap" id="education">
          <div className="section-heading">
            <p className="eyebrow">THE LEARNING SO FAR</p>
            <h2>Education<span>.</span></h2>
          </div>
          <div className="education-card">
            <div className="edu-year">2023 — PRESENT</div>
            <div className="edu-main">
              <p className="edu-kicker">TERTIARY · CURRENTLY ENROLLED</p>
              <h3>Bachelor of Science in<br className="desktop-break" /> Information Technology</h3>
              <p className="edu-school">Nueva Vizcaya State University</p>
              <p className="edu-detail">Third-year student · Web and Mobile Applications specialization</p>
            </div>
            <div className="edu-mark">BS<span>IT</span></div>
          </div>
          <div className="education-card secondary-card">
            <div className="edu-year">AUGUST 2022</div>
            <div className="edu-main">
              <p className="edu-kicker">TECHNICAL-VOCATIONAL TRAINING</p>
              <h3>Driving National Certificate II</h3>
              <p className="edu-school">TESDA Provincial Training Center Nueva Vizcaya</p>
            </div>
            <div className="edu-mark small-mark">NC<span>II</span></div>
          </div>
          <div className="education-card secondary-card">
            <div className="edu-year">SEPTEMBER 2026</div>
            <div className="edu-main">
              <p className="edu-kicker">GLOBAL IMMERSION · ACADEMIC EXCHANGE</p>
              <h3>AIT–CODE Student Exchange &amp; Technical Bootcamp</h3>
              <p className="edu-school">Asian Institute of Technology · Collaborative Overseas Digital Engagement</p>
              <p className="edu-detail">Five-day program exploring AI-powered diagnostics, IoT health monitoring, and machine learning for health data.</p>
            </div>
            <div className="edu-mark small-mark">AIT<span>↗</span></div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="projects-top">
            <div className="section-heading">
              <p className="eyebrow">SELECTED SCHOOL &amp; PERSONAL WORK</p>
              <h2>Projects<span>.</span></h2>
            </div>
            <p className="projects-note">Small steps, useful ideas, and plenty of room to keep learning.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.note && <p className="project-note">{project.note}</p>}
                </div>
                <div className="tech-list" aria-label="Tech stack used">
                  {project.stack.map((item) => <span className="tech-pill" key={item}>{item}</span>)}
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">TS<span>.</span></a>
        <p>Built with curiosity in Nueva Vizcaya, Philippines.</p>
        <a href="mailto:trevorparong@gmail.com">Get in touch <span>↗</span></a>
        <span className="copyright">© 2026 Trevor Santos</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
