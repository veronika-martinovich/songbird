import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BirdsList.scss";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import {
  actionSetSuccessGameResult,
  actionSetErrorGameResult,
} from "../../reducers/app/appActions";

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
  const dispatch = useDispatch();

  const handleBirdItemClick = (e) => {
    if (e.target.textContent === randomBird.name && !isAnswerCorrect) {
      dispatch(actionSetSuccessGameResult(totalScore + currentPoints));
      e.target.firstChild.classList.add("answer-indicator_success");
    } else if (e.target.textContent !== randomBird.name && !isAnswerCorrect) {
      dispatch(actionSetErrorGameResult(currentPoints - 1));
      e.target.firstChild.classList.add("answer-indicator_error");
    }
  };

  return (
    <ul className="birds-list">
      {birds.map((item) => (
        <li
          key={item.id}
          className="birds-list__item"
          onClick={handleBirdItemClick}
        >
          <span className="answer-indicator"></span>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
