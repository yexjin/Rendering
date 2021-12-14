import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { ExhibitionsApi } from "../../remote";

export const createExhibitionApi = ExhibitionsApi.create;
export const LISTEXHIBITIONS_ONGOING = "exhibitions/ONGOING";
export const GET_EXHIBITION = "exhibitions/GET";

export const listExhibitionsOngoing = createAction(
  LISTEXHIBITIONS_ONGOING,
  ExhibitionsApi.ongoingExhibitionsList
)

export const getExhibition = createAction(
  GET_EXHIBITION,
  ExhibitionsApi.exhibitionById
)

export const exhibitpatchApi = ExhibitionsApi.exhibitionModify;

const initialState = Map({
    list: List([]),
    exhibition: Map({
      id: "",
      exhibition_name: "",
      description: "",
      host_name: "",
      start_date: "",
      end_date: "",
      main_image: "",
      sub_image: "",
      likes: "",
      manager: "",
      Works: List([
        {
          id: "",
          thumbnail: "",
          content: "",
          exhibition: "",
        }
      ])
    }),
    my_exhibitions: Map({
      count: 0,
      results: List([]),
      })
  });

  export default handleActions(
    {
      ...pender({
        type: LISTEXHIBITIONS_ONGOING,
        onSuccess: (state, action) => {
          return state.set("list", fromJS(action.payload.data));
        },
      }),
      ...pender({
        type: GET_EXHIBITION,
        onSuccess: (state, action) => {
          return state.set("exhibition", fromJS(action.payload.data));
        },
      }),
    //   ...pender({
    //     type: LISTTOTAL_EXHIBITIONS,
    //     onSuccess: (state, action) => {
    //       return state.set("my_exhibitions", fromJS(action.payload.data));
    //     }
    //   })
    },
    initialState
  );