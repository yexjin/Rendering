import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { PamphletsApi } from "../../remote";

export const createPamphletApi = PamphletsApi.create;
export const LISTALL_ONGOING = "pamphlets/ONGOING";

export const listAllOngoing = createAction(
  LISTALL_ONGOING,
  PamphletsApi.ongoingList
);

const initialState = Map({
    list: List([]),
    // pamphlets: Map({
    //     id: "",
    //     title: "",
    //     subtitle: "",
    //     side_text: "",
    //     emphasis_text: "",
    //     text: "",
    //     color: "",
    //     exhibition:"",
    //     Exhibition: Map({
    //       id: "",
    //       exhibition_name: "",
    //       description: "",
    //       host_name: "",
    //       start_date: "",
    //       end_date: "",
    //       main_image: "",
    //       sub_image: "",
    //       likes: "",
    //       manager: ""
    //     })
    //   }),
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
    },
    initialState
  );