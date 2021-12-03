import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { PamphletsApi } from "../../remote";

export const createPamphletApi = PamphletsApi.create;

const initialState = Map({
    list: Map({
      count: 0,
      results: List([]),
    }),
    pamphlets: Map({
        title: "",
        subtitle: "",
        side_text: "",
        emphasis_text: "",
        text: "",
        color: "",
        exhibition:""
      }),
      my_pamphlets: Map({
        count: 0,
        results: List([]),
        })
})

export default handleActions(
    {
    //   ...pender({
    //     type: LISTALL_EXHIBITIONS,
    //     onSuccess: (state, action) => {
    //       return state.set("list", fromJS(action.payload.data));
    //     },
    //   }),
    //   ...pender({
    //     type: GET_EXHIBITIONS,
    //     onSuccess: (state, action) => {
    //       return state.set("exhibitions", fromJS(action.payload.data));
    //     },
    //   }),
    //   ...pender({
    //     type: LISTTOTAL_EXHIBITIONS,
    //     onSuccess: (state, action) => {
    //       return state.set("my_exhibitions", fromJS(action.payload.data));
    //     }
    //   })
    },
    initialState
  );