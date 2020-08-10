export const SET_RANDOM_BIRD = "SET_RANDOM_BIRD";
export const actionSetRandomBird = (bird) => ({
  type: SET_RANDOM_BIRD,
  payload: bird,
});

export const SET_SUCCESS_GAME_RESULTS = "SET_SUCCESS_GAME_RESULTS";
export const actionSetSuccessGameResult = (score) => ({
  type: SET_SUCCESS_GAME_RESULTS,
  payload: score,
});

export const SET_ERROR_GAME_RESULTS = "SET_ERROR_GAME_RESULTS";
export const actionSetErrorGameResult = (points) => ({
  type: SET_ERROR_GAME_RESULTS,
  payload: points,
});

export const SET_CURRENT_BIRD = "SET_CURRENT_BIRD";
export const actionSetCurrentBird = (bird) => ({
  type: SET_CURRENT_BIRD,
  payload: bird,
});

export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";
export const actionSetCurrentCategory = (category) => ({
  type: SET_CURRENT_CATEGORY,
  payload: category,
});

export const SET_IS_ANSWER_CORRECT = "SET_IS_ANSWER_CORRECT";
export const actionSetIsAnswerCorrect = (flag) => ({
  type: SET_IS_ANSWER_CORRECT,
  payload: flag,
});

export const UPDATE_CURRENT_POINTS = "UPDATE_CURRENT_POINTS";
export const actionUpdateCurrentPoints = (points) => ({
  type: UPDATE_CURRENT_POINTS,
  payload: points,
});
