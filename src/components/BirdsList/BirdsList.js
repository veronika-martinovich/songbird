import React from "react";
import { useSelector } from "react-redux";
import "./BirdsList.scss";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";

export const BirdsList = () => {
  const { currentCategory } = useSelector(appStateSelector);
  const { birdsData } = useSelector(birdsSelector);
  const birds = birdsData[currentCategory];

  const handleBirdItemClick = () => {};

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
