import React, { useState } from "react";
import SavedPhotos from "./components/SavedPhotos";
import RandomDog from "./components/RandomDog";
import "./App.css";

export default function App() {
  const [savedPhotos, setSavedPhotos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dogs! 🐶</h1>
      </header>
      <RandomDog />
      <SavedPhotos />
    </div>
  );
}
