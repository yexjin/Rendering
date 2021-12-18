import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { UserApi } from "../../remote";

export const signupApi = UserApi.signup;
export const loginApi = UserApi.login;
export const GET_USER = 'users/GET';

export const getUser = createAction(
  GET_USER,
  UserApi.getUser
)


const initialState = Map({
  user: Map({
    name: "",
    email: "",
    job: "",
    password: "",
  })
})

export default handleActions({
  ...pender({
    type: GET_USER,
    onSuccess: (state, action)=>{
      return state.set('user', fromJS(action.payload.data));
    }
  })
  
}, initialState)