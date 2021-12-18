import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { CommentsApi } from '../../remote';

export const createCommentApi = CommentsApi.create;
export const GET_COMMENTS = "comments/GET";

export const getComments = createAction(
    GET_COMMENTS,
    CommentsApi.getByExhibitionId
)

const initialState = Map({
    list: List([])
})

export default handleActions(
    {
        ...pender({
            type: GET_COMMENTS,
            onSuccess: (state, action) => {
                return state.set('list', fromJS(action.payload.data));
            }
        })
    },
    initialState
)



