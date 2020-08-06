import React from "react";
import "./BirdImage.scss";

export const BirdImage = ({imageSrc}) => {
  return (
    <img src={imageSrc} className="bird-img" alt="Bird"/>
  )
}