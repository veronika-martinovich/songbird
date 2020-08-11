export const UPDATE_TOTAL_SCORE = "UPDATE_TOTAL_SCORE";
export const actionUpdateTotalscore = (score) => ({
  type: UPDATE_TOTAL_SCORE,
  payload: score,
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

export const SET_IS_QUIZE_FINISHED = "SET_IS_QUIZE_FINISHED";
export const actionSetIsQuizeFinished = (flag) => ({
  type: SET_IS_QUIZE_FINISHED,
  payload: flag,
});

export const UPDATE_DEFAULT_APP_DATA = "UPDATE_DEFAULT_APP_DATA";
export const actionUpdateDefaultAppData = () => ({
  type: UPDATE_DEFAULT_APP_DATA,
});
