import React from "react";
import "./BirdName.scss";

export const BirdName = ({ name, isAnswerCorrect }) => {
  const text = isAnswerCorrect ? name : "******";

  return <p>{text}</p>;
};
