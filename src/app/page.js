const projects = [
  {
    name: "Project One",
    type: "Web design",
    description: "A short description of a project you worked on.",
  },
  {
    name: "Project Two",
    type: "Development",
    description: "A short description of another project you worked on.",
  },
  {
    name: "Project Three",
    type: "Branding",
    description: "A short description of one more project.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="logo" href="#home">SHREYA PATIL</a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="eyebrow">Designer · Developer · Creator</p>
        <h1>
          Hello, I’m <span>Shreya Patil</span>
          <br />
          I make things for the web.
        </h1>
        <p className="intro">
          I create clean, useful digital experiences for people and businesses.
        </p>
        <a className="button" href="#work">See my work ↓</a>
      </section>

      <section className="section" id="work">
        <p className="eyebrow">A few things I’ve made</p>
        <h2>Selected work</h2>

        <div className="projects">
          {projects.map((project, index) => (
            <article className="project" key={project.name}>
              <div className={`project-image color-${index + 1}`}>
                <span>0{index + 1}</span>
              </div>
              <p className="eyebrow">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow">A little about me</p>
        <h2>Curious by nature.<br />Intentional by design.</h2>
        <p>
          I’m a designer and developer who enjoys turning ideas into clear,
          easy-to-use websites. I like working with thoughtful people and
          learning something new with every project.
        </p>
      </section>

      <footer className="footer" id="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let’s make something great.</h2>
        <a className="button" href="mailto:hello@example.com">
          hello@example.com ↗
        </a>

        <div className="footer-bottom">
          <span>© 2025 Your Name</span>
          <a href="https://www.linkedin.com/">LinkedIn ↗</a>
        </div>
      </footer>
    </main>
  );
}