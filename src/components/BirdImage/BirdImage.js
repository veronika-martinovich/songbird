import React from "react";
import "./BirdImage.scss";
import imgPlaceholder from "./assets/img-placeholder.jpg";

export const BirdImage = ({ imageSrc, isAnswerCorrect }) => {
  return (
    <img
      src={isAnswerCorrect ? imageSrc : imgPlaceholder}
      className="bird-img"
      alt="Bird"
    />
  );
};
