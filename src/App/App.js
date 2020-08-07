import React from "react";
import { Header } from "../components/Header/Header";
import { RandomBird } from "../components/RandomBird/RandomBird";
import { BirdsList } from "../components/BirdsList/BirdsList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <RandomBird />
        <BirdsList />
      </main>
    </div>
  );
};

export default App;
