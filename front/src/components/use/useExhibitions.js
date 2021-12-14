import * as reducer from '../../modules/reducer/exhibitions';
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const useExhibitions = () => {

    const exhibition = useShallowEqualSelectorToJS((state) =>
        state.exhibitions.get("exhibition")
    );

    const actions = useActions(reducer);

    return {
        exhibition,

        getExhibition: actions.getExhibition,
        createExhibitionApi: reducer.createExhibitionApi,
        modifyExhibitApi: reducer.exhibitpatchApi
    }
}

export default useExhibitions;