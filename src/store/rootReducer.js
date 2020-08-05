import { combineReducers } from "redux";
import { app } from "../reducers/app/appReducer";
import { birds } from "../reducers/birds/birdsReducer";

export const rootReducer = combineReducers({
  app,
  birds,
});
