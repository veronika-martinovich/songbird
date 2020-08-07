import React from "react";
import "./App.scss";
import { Header } from "../components/Header/Header";
import { RandomBird } from "../components/RandomBird/RandomBird";
import { BirdsList } from "../components/BirdsList/BirdsList";
import { CurrentBird } from "../components/CurrentBird/CurrentBird";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <RandomBird />
        <div className="birds-list-wrapper">
          <BirdsList />
          <CurrentBird />
        </div>
      </main>
    </div>
  );
};

export default App;
