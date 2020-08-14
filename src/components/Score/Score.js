import React from "react";
import "./Score.scss";

export const Score = ({ score }) => {
  return <div className="score">Очки: {score}</div>;
};
