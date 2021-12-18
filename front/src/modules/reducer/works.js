import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { WorksApi } from "../../remote";

export const createWorksApi = WorksApi.create;
export const GET_WORK = "works/GET";

export const getWork = createAction(
    GET_WORK,
    WorksApi.worksById
)

const initialState = Map({
    work: Map({
        id: "",
        content: "",
        thumbnail: "",
        exhibition: ""
    })
})

export default handleActions({
    ...pender({
        type: GET_WORK,
        onSuccess: (state, action) => {
            const data = action.payload.data;
            return state.set('work', fromJS(data));
        }
    })
}, initialState)
