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
          <a
            className="App-link"
            href="https://github.com/CodeCassie4169E1/searchingappreact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          by Cassie Sichmeller
        </footer>
      </div>
    </div>
  );
}

export default App;
