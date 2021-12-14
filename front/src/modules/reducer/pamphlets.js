import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { PamphletsApi } from "../../remote";

export const createPamphletApi = PamphletsApi.create;
export const LISTALL_ONGOING = "pamphlets/ONGOING";
export const GET_PAMPHLET = "pamphlets/GET";

export const listAllOngoing = createAction(
  LISTALL_ONGOING,
  PamphletsApi.ongoingList
);

export const getPamphlet = createAction(
  GET_PAMPHLET,
  PamphletsApi.pamphletById
);

const initialState = Map({
    list: List([]),
    pamphlet: Map({
      id: "",
      title: "",
      subtitle: "",
      side_text: "",
      emphasis_text: "",
      text: "",
      color: "",
      exhibition: ""
    })
})

export default handleActions(
    {
      ...pender({
        type: LISTALL_ONGOING,
        onSuccess: (state, action) => {
          const data = action.payload.data;
          return state.set("list", fromJS(data));
        },
      }),
      ...pender({
        type: GET_PAMPHLET,
        onSuccess: (state, action) => {
          const data = action.payload.data;
          return state.set("pamphlet", fromJS(data));
        },
      }),
    },
    initialState
  );