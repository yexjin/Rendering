import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import userReducer from "./user";
import pamphletsReducer from "./pamphlets";

export default combineReducers({
  pender: penderReducer,
  user: userReducer,
  pamphlets: pamphletsReducer,
});
