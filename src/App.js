import React from "react";
import './App.css';
import { Reviews } from "./Reviews";

function App() {
  return (
    <div className="App">
        <header>
          <h1>Small reviews</h1>
        </header>

        <Reviews />

        <footer>
          <p>Site by <a href="https://sally.dev">Sally</a> for herself</p>
        </footer>

    </div>
  );
}

export default App;
