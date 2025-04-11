import "./App.css";
import logo from "./adventurepic.jpg.jpg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small className="source">
            <a
              href="https://github.com/CodeCassie4169E1/reactweatherapp"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://www.shecodes.io/graduates/86602-cassie-sichmeller"
              target="_blank"
              rel="noreferrer"
            >
              Cassie Sichmeller
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
