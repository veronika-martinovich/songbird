import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BirdImage } from "../BirdImage/BirdImage";
import { BirdName } from "../BirdName/BirdName";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import { getRandomInteger } from "../../utilities/getRandomInteger";
import { classes } from "../../App/classes";
import { actionSetRandomBird } from "../../reducers/app/appActions";
import "./RandomBird.scss";

export const RandomBird = () => {
  const { currentCategory, isAnswerCorrect, randomBird } = useSelector(
    appStateSelector
  );
  const { birdsData } = useSelector(birdsSelector);
  const birds = birdsData[currentCategory];
  const randomBirdIndex = getRandomInteger(0, birds.length - 1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionSetRandomBird(birds[randomBirdIndex]));
  }, [randomBirdIndex, dispatch, birds]);

  if (!randomBird) return null;
  return (
    <div className="random-bird">
      <BirdImage
        imageSrc={randomBird.image}
        isAnswerCorrect={isAnswerCorrect}
      />
      <div className="random-bird__details-container">
        <BirdName
          name={randomBird.name}
          isAnswerCorrect={isAnswerCorrect}
          nameClass={classes.random}
        />
        <AudioPlayer audioSrc={randomBird.audio} audioClass={classes.random} />
      </div>
    </div>
  );
};
