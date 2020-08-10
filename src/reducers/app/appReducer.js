import {
  SET_RANDOM_BIRD,
  SET_SUCCESS_GAME_RESULTS,
  SET_ERROR_GAME_RESULTS,
  SET_CURRENT_BIRD,
  SET_CURRENT_CATEGORY,
  SET_IS_ANSWER_CORRECT,
  UPDATE_CURRENT_POINTS,
} from "./appActions";

const defaultData = {
  currentCategory: 0,
  randomBird: null,
  currentBird: null,
  isAnswerCorrect: false,
  totalScore: 0,
  currentPoints: null,
};

export const appStateSelector = (state) => state.app;

export const app = (state = defaultData, action) => {
  switch (action.type) {
    case SET_RANDOM_BIRD:
      return {
        ...state,
        randomBird: action.payload,
      };
    case SET_SUCCESS_GAME_RESULTS:
      return {
        ...state,
        isAnswerCorrect: true,
        totalScore: action.payload,
      };
    case SET_ERROR_GAME_RESULTS:
      return {
        ...state,
        currentPoints: action.payload,
      };
    case SET_CURRENT_BIRD:
      return {
        ...state,
        currentBird: action.payload,
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
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
    default:
      return state;
  }
};
