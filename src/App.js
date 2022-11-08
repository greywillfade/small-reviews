import React from "react";
import './App.css';
import { Reviews } from "./Reviews";


function App() {
  return (
    <div className="App">

      <div className="container">

        <header>
            <h1 className="logo">
                <span role="img" aria-label="Stack of books">📚</span> <span className="logo-text">Small reviews</span>
            </h1>
        </header>

        <div className="container-inner">
          <Reviews />
        </div>

        <footer>
          <p>Site by <a href="https://sally.dev">Sally</a> for myself</p>
        </footer>
      </div>

    </div>
  );
}

export default App;
