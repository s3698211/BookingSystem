import { combineReducers } from "redux";

import stadiumsReducer from "./stadiumsReducer";
export default combineReducers({
  stadiums: stadiumsReducer,
});
