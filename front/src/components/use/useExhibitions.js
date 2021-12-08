import * as reducer from '../../modules/reducer/exhibitions';
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const useExhibitions = () => {
    const exhibitionsList = useShallowEqualSelectorToJS((state) =>
    state.pamphlets.get("list")
);

const actions = useActions(reducer);

    return {
        exhibitionsList,

        listExhibitionsOngoing: actions.listExhibitionsOngoing,
        createExhibitionApi: reducer.createExhibitionApi,
    }
}

export default useExhibitions;