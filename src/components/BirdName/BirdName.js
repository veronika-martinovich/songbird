import React from "react";
import "./BirdName.scss";

export const BirdName = ({ name, isAnswerCorrect, nameClass }) => {
  const text = isAnswerCorrect ? name : "******";

  return <h3 className={`bird-name bird-name_${nameClass}`}>{text}</h3>;
};
