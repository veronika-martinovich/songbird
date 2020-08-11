import React from "react";
import "./Quize.scss";
import { useSelector, useDispatch } from "react-redux";
import { RandomBird } from "../RandomBird/RandomBird";
import { BirdsList } from "../BirdsList/BirdsList";
import { CurrentBird } from "../CurrentBird/CurrentBird";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import {
  actionSetCurrentCategory,
  actionSetIsAnswerCorrect,
  actionSetCurrentBird,
  actionSetIsQuizeFinished,
} from "../../reducers/app/appActions";

export const Quize = () => {
  const { currentCategory, isAnswerCorrect } = useSelector(appStateSelector);
  const { birdsData } = useSelector(birdsSelector);
  const dispatch = useDispatch();

  const handleNextLevelClick = () => {
    if (isAnswerCorrect && currentCategory < birdsData.length - 1) {
      dispatch(actionSetCurrentCategory(currentCategory + 1));
      dispatch(actionSetIsAnswerCorrect(false));
      dispatch(actionSetCurrentBird(null));
      [].forEach.call(
        document.querySelectorAll(".answer-indicator"),
        (item) => {
          item.classList.remove("answer-indicator_error");
          item.classList.remove("answer-indicator_success");
        }
      );
    } else if (isAnswerCorrect && currentCategory >= birdsData.length - 1) {
      dispatch(actionSetIsQuizeFinished(true));
    }
  };

  return (
    <>
      <RandomBird />
      <div className="birds-list-wrapper">
        <BirdsList />
        <CurrentBird />
      </div>
      <PrimaryButton
        onNextLevelClick={handleNextLevelClick}
        isButtonActive={isAnswerCorrect}
      />
    </>
  );
};
