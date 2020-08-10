import { store } from "../../store/store";
import {
  actionSetSuccessGameResult,
  actionSetErrorGameResult,
  actionSetCurrentBird,
  actionSetCurrentCategory,
} from "../../reducers/app/appActions";
import errorSound from "../../assets/error_sound.mp3";
import successSound from "../../assets/success_sound.mp3";

export const birdItemClickHandler = (
  e,
  birds,
  randomBird,
  totalScore,
  currentPoints,
  isAnswerCorrect,
  audioElement,
) => {
  const curBirdId = Number(e.currentTarget.dataset.birdId);
  const curBird = birds.find((item) => item.id === curBirdId);
  store.dispatch(actionSetCurrentBird(curBird));

  if (curBirdId === randomBird.id && !isAnswerCorrect) {
    store.dispatch(actionSetSuccessGameResult(totalScore + currentPoints));
    e.currentTarget.firstChild.classList.add("answer-indicator_success");
    document.querySelector(".audio_result").setAttribute("src", successSound);
  } else if (curBirdId !== randomBird.id && !isAnswerCorrect) {
    store.dispatch(actionSetErrorGameResult(currentPoints - 1));
    e.currentTarget.firstChild.classList.add("answer-indicator_error");
    audioElement.current.setAttribute("src", errorSound);
  }
};
