import React from "react";
import { Header } from "./components/Header/Header";
import { QuestionContainer } from "./components/QuestionContainer/QuestionContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <QuestionContainer />
    </div>
  );
};

export default App;
