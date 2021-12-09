import * as reducer from '../../modules/reducer/exhibitions';
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const useExhibitions = () => {
    // const exhibitionsList = useShallowEqualSelectorToJS((state) =>
    // state.exhibitions.get("list")
    // );

    const exhibition = useShallowEqualSelectorToJS((state) =>
        state.exhibitions.get("exhibition")
    );

    const actions = useActions(reducer);

    return {
        // exhibitionsList,
        exhibition,

        // listExhibitionsOngoing: actions.listExhibitionsOngoing,
        getExhibition: actions.getExhibition,
        createExhibitionApi: reducer.createExhibitionApi,
    }
}

export default useExhibitions;