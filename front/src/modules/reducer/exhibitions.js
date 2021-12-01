import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { ExhibitionsApi } from "../../remote";

export const createExhibitionApi = ExhibitionsApi.create;

const initialState = Map({
    list: Map({
      count: 0,
      results: List([]),
    }),
    exhibitions: Map({
        like : 0,
        id : 1,
        manager : 1,
        exhibition_name : "",
        description: "",
        host_name: "",
        start_date: "",
        end_date: "",
        main_image: "",
        sub_image: ""
    }),
    my_exhibitions: Map({
      count: 0,
      results: List([]),
      })
  });

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