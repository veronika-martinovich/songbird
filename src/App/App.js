import React from "react";
import { Header } from "../components/Header/Header";
import { RandomBird } from "../components/RandomBird/RandomBird";
import { BirdsList } from "../components/BirdsList/BirdsList";
import { BirdInfo } from "../components/BirdInfo/BirdInfo";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <RandomBird />
        <BirdsList />
        <BirdInfo />
      </main>
    </div>
  );
};

export default App;
