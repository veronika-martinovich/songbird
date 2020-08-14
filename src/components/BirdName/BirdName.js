import React from "react";
import "./BirdName.scss";

export const BirdName = ({ name, nameClass, isNameDisplayed }) => {
  return (
    <h3 className={`bird-name bird-name_${nameClass}`}>
      {isNameDisplayed ? name : "******"}
    </h3>
  );
};
