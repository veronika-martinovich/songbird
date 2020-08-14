import React from "react";
import "./PrimaryButton.scss";

export const PrimaryButton = ({
  isButtonActive,
  onPrimaryButtonClick,
  buttonName,
}) => {
  return (
    <button
      type="button"
      className={
        isButtonActive
          ? "primary-button primary-button_active"
          : "primary-button"
      }
      onClick={() => onPrimaryButtonClick()}
    >
      {buttonName}
    </button>
  );
};
