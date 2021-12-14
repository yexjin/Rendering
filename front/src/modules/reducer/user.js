import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { UserApi } from "../../remote";

export const signupApi = UserApi.signup;
export const loginApi = UserApi.login;

const initialState = Map({
  list: Map({
    count:0,
    results: List([])
  }),
  info: Map({
    name: "",
    email: "",
    job: "",
    password: "",
  })
})

export default handleActions({
  
}, initialState)