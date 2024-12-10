import "./App.css";

function App() {
  const handleWorkTogether = () => {
    console.log("Work together clicked");
  };

  const handleKnowMore = () => {
    console.log("Know more about uvais");
  };

  return (
    <>
      <header class="header">
        <span className="logo">{"{ }"}</span>
        <span className="download-resume">
          <button>Resume</button>
        </span>
      </header>
      <main>
        <section className="hero-content">
          <article className="introduction">
            <h1>Mohammad Uvais</h1>
            <p className="profession">Front End Developer</p>
            <article className="contact-links">
              <a
                href="https://www.linkedin.com/in/mohammaduvais"
                target="_blank"
              >
                LinkedIn
              </a>
              <a href="https://github.com/mohammad-uvais" target="_blank">
                GitHub
              </a>
            </article>
            <article className="action-btn">
              <button onClick={handleWorkTogether}>Let's work together</button>
              <button onClick={handleKnowMore}>Know more about Uvais</button>
            </article>
          </article>
          <article className="technologies">
            {/* <h1>Mohammad Uvais</h1> */}
          </article>
        </section>
        <div style={{ border: "1px solid yellow" }}>Other content</div>
      </main>
      <footer>additional info</footer>
    </>
  );
}

export default App;
{
  /* <h1>Mohammad Uvais</h1>
            <p className="profession">React Developer</p>
            <article className="contact-links">
              <a href="https://www.linkedin.com/in/mohammaduvais">LinkedIn</a>
              <a href="https://github.com/mohammad-uvais">GitHub</a>
            </article>
            <article className="action-btn">
              <button>Let's work together</button>
              <button>Know more about Uvais</button>
            </article> */
}
