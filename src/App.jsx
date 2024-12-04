import "./App.css";

function App() {
  return (
    <>
      <header>
        <span>{"{ MU }"}</span> <span className="download-icon">Resume</span>
      </header>
      <main>
        <h1>Don't Look into my screen</h1>
        <p>React Developer</p>
        <section>
          <a href="https://www.linkedin.com/in/mohammaduvais">LinkedIn</a>
          <a href="https://github.com/mohammad-uvais">GitHub</a>
          {/* contact svgs */}
        </section>
        <section>
          <button>Let's work together</button>
          <button>Know more about Uvais</button>
        </section>
      </main>
      <footer>additional info</footer>
    </>
  );
}

export default App;
