import React from "react";
import { getTimeFromSeconds } from "../../../utilities/getTimeFromSeconds";
import "./Bar.scss";

export const Bar = ({ duration, curTime, onTimeUpdate, audioClass }) => {
  const curPercentage = (curTime / duration) * 100;

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(`.bar__progress_${audioClass}`);
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleTimeDrag = (e) => {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (e) => {
      onTimeUpdate(calcClickedTime(e));
    };

    document.addEventListener("mousemove", updateTimeOnMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  };

  return (
    <div className="player__bar bar">
      <div
        className={`bar__progress bar__progress_${audioClass}`}
        style={{
          background: `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${curPercentage}%, rgb(115, 115, 115) ${curPercentage}%, rgb(115, 115, 115) 100%)`,
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <span
          className="bar__knob"
          style={{ left: `${curPercentage - 1}%` }}
        ></span>
      </div>
      <div className="bar__time-container">
        <span className="bar__time">{getTimeFromSeconds(curTime)}</span>
        <span className="bar__time">{getTimeFromSeconds(duration)}</span>
      </div>
    </div>
  );
};
