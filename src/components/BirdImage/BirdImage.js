import React from "react";
import "./BirdImage.scss";
import imgPlaceholder from "./assets/img-placeholder.jpg";

export const BirdImage = ({ imageSrc, isImageDisplayed }) => {
  return (
    <img
      src={isImageDisplayed ? imageSrc : imgPlaceholder}
      className="bird-img"
      alt="Bird"
    />
  );
};
