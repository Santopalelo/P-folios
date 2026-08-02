import profilePhoto from "../img/profile-photo.jpg";

const summary =
  "I’m a full-stack developer focused on React, Vite, and performance-first web experiences. I build responsive, accessible apps with clean architecture and modern SEO best practices.";

const skills = [
  "React",
  "Vite",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "SEO Optimization",
  "Accessibility",
  "Performance",
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Independent Projects",
    period: "2025 — Present",
    details:
      "Delivered React + Vite applications, integrated backend APIs, and optimized page performance for fast loading on mobile and desktop.",
  },
  {
    role: "Frontend Developer",
    company: "Portfolio & Product Builds",
    period: "2024 — 2025",
    details:
      "Built user-friendly interfaces, polished UI systems, and SEO-focused landing pages using modern JavaScript and responsive design.",
  },
];

const projects = [
  {
    title: "React Vite Portfolio",
    summary:
      "A performance-first professional CV experience with responsive design, SEO metadata, and smooth section navigation.",
    stack: "React · Vite · CSS · SEO",
  },
  {
    title: "Full-Stack Product App",
    summary:
      "A scalable web app that combines reusable frontend components, secure API integration, and cloud-ready backend logic.",
    stack: "Node.js · Express · MongoDB · REST APIs",
  },
  {
    title: "Landing Page Experience",
    summary:
      "A conversion-focused interface designed for speed, clarity, and a polished brand presence.",
    stack: "React · JavaScript · Performance",
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#hero">
            LAWRENCE ONWE
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="hero" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack Developer</p>
            <h1>Fast, polished web products with React + Vite</h1>
            <p className="intro">{summary}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Selected work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <aside className="profile-card">
            <img src={profilePhoto} alt="Lawrence Onwe portrait" />
            <div>
              <p className="eyebrow">Available now</p>
              <h2>React, Vite & full-stack delivery</h2>
              <p>
                I specialize in building modern web applications that load fast,
                adapt to every screen, and rank well in search engines.
              </p>
            </div>
          </aside>
        </section>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Professional summary</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I create user experiences with a strong focus on speed, clarity,
                and maintainable code. My preferred stack includes React, Vite,
                Node.js, and database-driven backend services.
              </p>
            </div>
            <div>
              <ul>
                <li>Responsive, mobile-first UI development</li>
                <li>SEO-friendly page structure and metadata</li>
                <li>Clean frontend architecture with reusable components</li>
                <li>
                  Backend APIs, database integration, and deployment-ready
                  systems
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Recent full-stack work</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-card">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Core technologies</h2>
          </div>
          <div className="chip-list">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span>{project.stack}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Ready to collaborate</h2>
          </div>
          <div className="contact-box">
            <p>
              Let’s talk about building your next web application, product
              landing page, or full-stack feature set.
            </p>
            <div className="contact-links">
              <a href="mailto:onwesomtolawrence@gmail.com">
                onwesomtolawrence@gmail.com
              </a>
              <a href="tel:+2349026094432">+234 902 609 4432</a>
              <a
                href="https://github.com/Santopalelo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
