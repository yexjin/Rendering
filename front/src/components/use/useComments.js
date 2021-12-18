import * as reducer from '../../modules/reducer/comments';
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const useComments = () => {
    const comments = useShallowEqualSelectorToJS((state)=>
        state.comments.get('list')
    )

    const actions = useActions(reducer);

    return {
        comments,

        createCommentApi: reducer.createCommentApi,
        getComments: actions.getComments

    }
}

export default useComments;