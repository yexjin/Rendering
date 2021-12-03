import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import userReducer from "./user";

export default combineReducers({
  pender: penderReducer,
  user: userReducer,
});
