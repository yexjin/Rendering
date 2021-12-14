import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import userReducer from "./user";
import pamphletsReducer from "./pamphlets";
import exhibitionsReducer from './exhibitions';

export default combineReducers({
  pender: penderReducer,
  user: userReducer,
  pamphlets: pamphletsReducer,
  exhibitions: exhibitionsReducer
});
