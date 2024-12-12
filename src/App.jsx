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
          <div className="introduction">
            <h1>Wolverine</h1>
            <p className="profession">Front End Developer</p>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/mohammaduvais"
                target="_blank"
              >
                LinkedIn
              </a>
              <a href="https://github.com/mohammad-uvais" target="_blank">
                GitHub
              </a>
            </div>
            <div className="action-btn">
              <button onClick={handleWorkTogether}>Let's work together</button>
              <button onClick={handleKnowMore} className="know-more">
                Know more about Uvais
              </button>
            </div>
          </div>
          <div className="technologies">
            <h2 style={{ textAlign: "center" }}>Technologies</h2>
            <div className="technology-items">
              <p>React</p>
              <p>React Native</p>
              <p>Redux</p>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>HTML</p>
            </div>
          </div>
        </section>
        <section className="projects-section">Projects</section>
      </main>
      <footer>additional info</footer>
    </>
  );
}

export default App;
