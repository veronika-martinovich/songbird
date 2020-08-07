import { SET_RANDOM_BIRD } from "./appActions";

const defaultData = {
  currentCategory: 0,
  randomBird: null,
  isAnswerCorrect: false,
};

export const appStateSelector = (state) => state.app;

export const app = (state = defaultData, action) => {
  switch (action.type) {
    case SET_RANDOM_BIRD:
      return {
        ...state,
        randomBird: action.payload,
      };
    default:
      return state;
  }
};
