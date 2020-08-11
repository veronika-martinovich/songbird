export const SET_RANDOM_BIRD = "SET_RANDOM_BIRD";
export const actionSetRandomBird = (bird) => ({
  type: SET_RANDOM_BIRD,
  payload: bird,
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

export const UPDATE_DEFAULT_BIRDS_DATA = "UPDATE_DEFAULT_BIRDS_DATA";
export const actionUpdateDefaultBirdsData = () => ({
  type: UPDATE_DEFAULT_BIRDS_DATA,
});
