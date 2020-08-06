import React from "react";
import { useSelector } from "react-redux";
import { BirdImage } from "../BirdImage/BirdImage";
import { BirdName } from "../BirdName/BirdName";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import { getRandomInteger } from "../../utilities/getRandomInteger";
import "./QuestionContainer.scss";

export const QuestionContainer = () => {
  const { currentCategory, isAnswerCorrect } = useSelector(appStateSelector);
  const { birdsData } = useSelector(birdsSelector);
  const category = birdsData[currentCategory];
  const randomBird = getRandomInteger(0, category.length - 1);

  return (
    <div className="question-container">
      <BirdImage imageSrc={category[randomBird].image} />
      <BirdName
        name={category[randomBird].name}
        isAnswerCorrect={isAnswerCorrect}
      />
      <AudioPlayer
        audioSrc={category[randomBird].audio}
        audioClass="question"
      />
    </div>
  );
};
