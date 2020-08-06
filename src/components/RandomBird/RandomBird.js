import React from "react";
import { useSelector } from "react-redux";
import { BirdImage } from "../BirdImage/BirdImage";
import { BirdName } from "../BirdName/BirdName";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import { getRandomInteger } from "../../utilities/getRandomInteger";
import { classes } from "../../App/classes";
import "./RandomBird.scss";

export const RandomBird = () => {
  const { currentCategory, isAnswerCorrect } = useSelector(appStateSelector);
  const { birdsData } = useSelector(birdsSelector);
  const category = birdsData[currentCategory];
  const randomBird = getRandomInteger(0, category.length - 1);

  return (
    <div className="random-bird">
      <BirdImage imageSrc={category[randomBird].image} />
      <div className="random-bird__details-container">
        <BirdName
          name={category[randomBird].name}
          isAnswerCorrect={isAnswerCorrect}
          nameClass={classes.random}
        />
        <AudioPlayer
          audioSrc={category[randomBird].audio}
          audioClass={classes.random}
        />
      </div>
    </div>
  );
};
