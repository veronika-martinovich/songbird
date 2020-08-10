import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BirdImage } from "../BirdImage/BirdImage";
import { BirdName } from "../BirdName/BirdName";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import { getRandomInteger } from "../../utilities/getRandomInteger";
import { classes, MAX_POINTS } from "../../App/constants";
import {
  actionSetRandomBird,
  actionUpdateCurrentPoints,
} from "../../reducers/app/appActions";
import "./RandomBird.scss";

export const RandomBird = () => {
  const { currentCategory, isAnswerCorrect, randomBird } = useSelector(
    appStateSelector
  );
  const { birdsData } = useSelector(birdsSelector);
  const birds = birdsData[currentCategory];
  const dispatch = useDispatch();

  useEffect(() => {
    const randomBirdIndex = getRandomInteger(0, birds.length - 1);
    dispatch(actionSetRandomBird(birds[randomBirdIndex]));
    dispatch(actionUpdateCurrentPoints(MAX_POINTS));
  }, [currentCategory]);

  if (!randomBird) return null;
  return (
    <div className="random-bird">
      <BirdImage
        imageSrc={randomBird.image}
        isImageDisplayed={isAnswerCorrect}
      />
      <div className="random-bird__details-container">
        <BirdName
          name={randomBird.name}
          isNameDisplayed={isAnswerCorrect}
          nameClass={classes.random}
        />
        <AudioPlayer audioSrc={randomBird.audio} audioClass={classes.random} />
      </div>
    </div>
  );
};
