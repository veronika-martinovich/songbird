import {
  UPDATE_TOTAL_SCORE,
  SET_IS_ANSWER_CORRECT,
  UPDATE_CURRENT_POINTS,
  SET_IS_QUIZE_FINISHED,
  UPDATE_DEFAULT_APP_DATA,
} from "./appActions";

const defaultData = {
  isAnswerCorrect: false,
  totalScore: 0,
  currentPoints: null,
  isQuizeFinished: false,
};

export const appStateSelector = (state) => state.app;

export const app = (state = defaultData, action) => {
  switch (action.type) {
    case UPDATE_TOTAL_SCORE:
      return {
        ...state,
        totalScore: action.payload,
      };
    case UPDATE_CURRENT_POINTS:
      return {
        ...state,
        currentPoints: action.payload,
      };
    case SET_IS_ANSWER_CORRECT:
      return {
        ...state,
        isAnswerCorrect: action.payload,
      };
    case SET_IS_QUIZE_FINISHED:
      return {
        ...state,
        isQuizeFinished: action.payload,
      };
    case UPDATE_DEFAULT_APP_DATA:
      return {
        ...state,
        isAnswerCorrect: false,
        totalScore: 0,
        currentPoints: null,
        isQuizeFinished: false,
      };

    default:
      return state;
  }
};
