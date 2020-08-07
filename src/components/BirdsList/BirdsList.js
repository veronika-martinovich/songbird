import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BirdsList.scss";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import {
  actionSetSuccessGameResult,
  actionSetErrorGameResult,
  actionSetCurrentBird,
} from "../../reducers/app/appActions";
import errorSound from "../../assets/error_sound.mp3";
import successSound from "../../assets/success_sound.mp3";

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
  const dispatch = useDispatch();

  const handleBirdItemClick = (e) => {
    const curBirdId = Number(e.currentTarget.dataset.birdId);
    const curBird = birds.find((item) => item.id === curBirdId);
    dispatch(actionSetCurrentBird(curBird));

    if (curBirdId === randomBird.id && !isAnswerCorrect) {
      dispatch(actionSetSuccessGameResult(totalScore + currentPoints));
      e.currentTarget.firstChild.classList.add("answer-indicator_success");
      document.querySelector(".audio_result").setAttribute("src", successSound);
    } else if (curBirdId !== randomBird.id && !isAnswerCorrect) {
      dispatch(actionSetErrorGameResult(currentPoints - 1));
      e.currentTarget.firstChild.classList.add("answer-indicator_error");
      audioElement.current.setAttribute("src", errorSound);
    }
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
