const defaultData = {
  currentCategory: 0
};

export const appStateSelector = (state) => state.app;

export const app = (state = defaultData, action) => {
  switch (action.type) {
    /* case 'ADD_TODO':
      return state.concat([action.text]) */
    default:
      return state;
  }
};
