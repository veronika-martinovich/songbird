import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./BirdsList.scss";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import { birdItemClickHandler } from "./birdItemClickHandler";
export const BirdsList = () => {
  const {
    currentCategory,
    randomBird,
    totalScore,
    currentPoints,
    isAnswerCorrect,
  } = useSelector(appStateSelector);
  const { birdsData } = useSelector(birdsSelector);
  const birds = birdsData[currentCategory];
  const audioElement = useRef(null);

  const handleBirdItemClick = (e) => {
    birdItemClickHandler(
      e,
      birds,
      randomBird,
      totalScore,
      currentPoints,
      isAnswerCorrect,
      audioElement,
    );
  };

  return (
    <>
      <ul className="birds-list">
        {birds.map((item) => (
          <li
            key={item.id}
            data-bird-id={item.id}
            className="birds-list__item"
            onClick={handleBirdItemClick}
          >
            <span className="answer-indicator"></span>
            {item.name}
          </li>
        ))}
      </ul>
      <audio
        ref={audioElement}
        autoPlay
        className="audio audio_result"
        src=""
      ></audio>
    </>
  );
};
