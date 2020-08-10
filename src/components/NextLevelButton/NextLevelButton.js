import React from "react";
import "./NextLevelButton.scss";

export const NextLevelButton = ({ isButtonActive, onNextLevelClick }) => {
  return (
    <button
      type="button"
      className={
        isButtonActive ? "next-level-button next-level-button_active" : "next-level-button"
      }
      onClick={() => onNextLevelClick()}
    >
      Следующий уровень
    </button>
  );
};
