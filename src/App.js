import React from "react";
import './App.css';
import { Reviews } from "./Reviews";


function App() {
  return (
    <div className="App">

      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="shape-blob three"></div>

      <div className="container">

        <header>
            <h1 className="logo">
                <span role="img" aria-label="Stack of books">📚</span> Small reviews
            </h1>
        </header>

        <div className="container-inner">
          <Reviews />
        </div>

        <footer>
          <p>Site by <a href="https://sally.dev">Sally</a> for herself</p>
        </footer>
      </div>

    </div>
  );
}

export default App;
