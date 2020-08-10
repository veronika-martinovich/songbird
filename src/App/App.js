import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { Header } from "../components/Header/Header";
import { RandomBird } from "../components/RandomBird/RandomBird";
import { BirdsList } from "../components/BirdsList/BirdsList";
import { CurrentBird } from "../components/CurrentBird/CurrentBird";
import { NextLevelButton } from "../components/NextLevelButton/NextLevelButton";
import { appStateSelector } from "../reducers/app/appReducer";
import {
  actionSetCurrentCategory,
  actionSetIsAnswerCorrect,
} from "../reducers/app/appActions";

const App = () => {
  const { currentCategory, isAnswerCorrect, randomBird, currentBird } = useSelector(appStateSelector);
  const dispatch = useDispatch();

  const handleNextLevelClick = () => {
    if (randomBird && currentBird && currentBird.id === randomBird.id) {
      dispatch(actionSetCurrentCategory(currentCategory + 1));
      dispatch(actionSetIsAnswerCorrect(false));
      [].forEach.call(document.querySelectorAll(".answer-indicator"), (item) => {
        item.classList.remove("answer-indicator_error");
        item.classList.remove("answer-indicator_success");
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <RandomBird />
        <div className="birds-list-wrapper">
          <BirdsList />
          <CurrentBird />
        </div>
        <NextLevelButton
          onNextLevelClick={handleNextLevelClick}
          isButtonActive={isAnswerCorrect}
        />
      </main>
    </div>
  );
};

export default App;
