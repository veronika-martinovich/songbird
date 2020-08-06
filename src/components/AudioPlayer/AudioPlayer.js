import React from "react";
import { PlayPause } from "./PlayPause/PlayPause";
import { Bar } from "./Bar/Bar";
import { useAudioPlayer } from "./useAudioPlayer";
import "./AudioPlayer.scss";

export const AudioPlayer = ({ audioSrc, audioClass }) => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer(audioClass);

  const handlePlayPauseClick = () => {
    playing ? setPlaying(false) : setPlaying(true);
  };

  const handleTimeUpdate = (time) => {
    setClickedTime(time);
  };

  if (!audioSrc) return null;
  return (
    <div className="player">
      <audio className={`audio audio_${audioClass}`} src={audioSrc} autoPlay></audio>
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
