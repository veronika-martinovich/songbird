import React from "react";
import "./PrimaryButton.scss";

export const PrimaryButton = ({ isButtonActive, onNextLevelClick }) => {
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
