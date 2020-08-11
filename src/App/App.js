import React from "react";
import "./App.scss";
import { Header } from "../components/Header/Header";
import { Quize } from "../components/Quize/Quize";
import { useSelector } from "react-redux";
import { appStateSelector } from "../reducers/app/appReducer";
import { QuizeResult } from "../components/QuizeResult/QuizeResult";

const App = () => {
  const { isQuizeFinished } = useSelector(appStateSelector);
  return (
    <div className="App">
      <Header />
      <main className="main">
        {isQuizeFinished ? <QuizeResult /> : <Quize />}
      </main>
    </div>
  );
};

export default App;
