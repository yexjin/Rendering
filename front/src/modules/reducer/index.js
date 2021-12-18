import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import userReducer from "./user";
import pamphletsReducer from "./pamphlets";
import exhibitionsReducer from './exhibitions';
import worksReducer from './works';
import commentsReducer from './comments';

export default combineReducers({
  pender: penderReducer,
  user: userReducer,
  pamphlets: pamphletsReducer,
  exhibitions: exhibitionsReducer,
  works: worksReducer,
  comments: commentsReducer
});
