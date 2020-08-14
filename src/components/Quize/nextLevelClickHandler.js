import { store } from "../../store/store";
import {
  actionSetIsAnswerCorrect,
  actionSetIsQuizeFinished,
} from "../../reducers/app/appActions";
import {
  actionSetCurrentCategory,
  actionSetCurrentBird,
} from "../../reducers/birds/birdsActions";

export const nextLevelClickHandler = (
  birdsData,
  currentCategory,
  isAnswerCorrect
) => {
  if (isAnswerCorrect && currentCategory < birdsData.length - 1) {
    store.dispatch(actionSetCurrentCategory(currentCategory + 1));
    store.dispatch(actionSetIsAnswerCorrect(false));
    store.dispatch(actionSetCurrentBird(null));
    [].forEach.call(document.querySelectorAll(".answer-indicator"), (item) => {
      item.classList.remove("answer-indicator_error");
      item.classList.remove("answer-indicator_success");
    });
  } else if (isAnswerCorrect && currentCategory >= birdsData.length - 1) {
    store.dispatch(actionSetIsQuizeFinished(true));
  }
};
