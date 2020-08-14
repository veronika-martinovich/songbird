import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { PlayPause } from "./PlayPause/PlayPause";
import { Bar } from "./Bar/Bar";
import { useAudioPlayer } from "./useAudioPlayer";
import { appStateSelector } from "../../reducers/app/appReducer";
import "./AudioPlayer.scss";

export const AudioPlayer = ({ audioSrc, audioClass }) => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer(audioClass);
  const { isAnswerCorrect } = useSelector(appStateSelector);

  const handlePlayPauseClick = () => {
    playing ? setPlaying(false) : setPlaying(true);
  };

  const handleTimeUpdate = (time) => {
    setClickedTime(time);
  };

  useEffect(() => {
    if (isAnswerCorrect) setPlaying(false);
    // eslint-disable-next-line
  }, [isAnswerCorrect]);

  if (!audioSrc) return null;
  return (
    <div className="player">
      <audio className={`audio audio_${audioClass}`} src={audioSrc}></audio>
      <div className="controls">
        <PlayPause handleClick={handlePlayPauseClick} playing={playing} />
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={handleTimeUpdate}
          audioClass={audioClass}
        />
      </div>
    </div>
  );
};
