import React from "react";
import { useSelector } from "react-redux";
import { BirdImage } from "../BirdImage/BirdImage";
import { Answer } from "../Answer/Answer";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import {getRandomInteger} from "../../utilities/getRandomInteger";
import "./QuestionContainer.scss";

export const QuestionContainer = () => {
  const { currentCategory } = useSelector(appStateSelector);
  const { birdsData } = useSelector(birdsSelector);
  const category = birdsData[currentCategory];
  const randomBird = getRandomInteger(0, category.length - 1);

  return (
    <div className="question-container">
      <BirdImage imageSrc={category[randomBird].image}/>
      <Answer />
      <AudioPlayer />
    </div>
  );
};
