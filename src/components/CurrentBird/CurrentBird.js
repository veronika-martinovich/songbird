import React from "react";
import "./CurrentBird.scss";
import { useSelector } from "react-redux";
import { BirdImage } from "../BirdImage/BirdImage";
import { BirdName } from "../BirdName/BirdName";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { BirdDescription } from "../BirdDescription/BirdDescription";
import { BirdSpecies } from "../BirdSpecies/BirdSpecies";
import { appStateSelector } from "../../reducers/app/appReducer";
import { classes } from "../../App/classes";

export const CurrentBird = () => {
  const { currentBird } = useSelector(appStateSelector);

  if (!currentBird)
    return (
      <div className="current-bird">
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка.</p>
      </div>
    );
  return (
    <div className="current-bird">
      <div className="current-bird__container">
        <BirdImage imageSrc={currentBird.image} isImageDisplayed={true} />
        <div className="current-bird__info-container">
          <BirdName
            name={currentBird.name}
            nameClass={classes.current}
            isNameDisplayed={true}
          />
          <BirdSpecies species={currentBird.species} />
          <AudioPlayer
            audioSrc={currentBird.audio}
            audioClass={classes.current}
          />
        </div>
      </div>
      <BirdDescription description={currentBird.description} />
    </div>
  );
};
