import React from "react";
import "./Quize.scss";
import { useSelector } from "react-redux";
import { RandomBird } from "../RandomBird/RandomBird";
import { BirdsList } from "../BirdsList/BirdsList";
import { CurrentBird } from "../CurrentBird/CurrentBird";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import { nextLevelClickHandler } from "./nextLevelClickHandler";

export const Quize = () => {
  const { isAnswerCorrect } = useSelector(appStateSelector);
  const { birdsData, currentCategory } = useSelector(birdsSelector);

  const handleNextLevelClick = () => {
    nextLevelClickHandler(birdsData, currentCategory, isAnswerCorrect);
  };

  return (
    <>
      <RandomBird />
      <div className="birds-list-wrapper">
        <BirdsList />
        <CurrentBird />
      </div>
      <PrimaryButton
        onPrimaryButtonClick={handleNextLevelClick}
        isButtonActive={isAnswerCorrect}
        buttonName="Следующий уровень"
      />
    </>
  );
};
