import React from "react";
import "./BirdSpecies.scss";

export const BirdSpecies = ({ species }) => {
  return <h6 className="bird-species">{species}</h6>;
};
