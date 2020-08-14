import React from "react";
import "./PlayPause.scss";

export const PlayPause = ({ handleClick, playing }) => {
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <span
        className={playing ? "player__indicator_on" : "player__indicator_off"}
      ></span>
    </button>
  );
};
