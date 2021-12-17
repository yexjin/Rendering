import * as reducer from '../../modules/reducer/exhibitions';
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const useExhibitions = () => {

    const ongoing = useShallowEqualSelectorToJS((state) => 
        state.exhibitions.get("list")
    )

    const exhibition = useShallowEqualSelectorToJS((state) =>
        state.exhibitions.get("exhibition")
    );

    const exhibitionInfo = useShallowEqualSelector((state)=>
        state.exhibitions.get("inform")
    )

    const actions = useActions(reducer);

    return {
        ongoing,
        exhibition,
        exhibitionInfo,

        listExhibitionsOngoing : actions.listExhibitionsOngoing,
        getInfo : actions.getInfo,
        getExhibition: actions.getExhibition,
        createExhibitionApi: reducer.createExhibitionApi,
        modifyExhibitApi: reducer.exhibitpatchApi
    }
}

export default useExhibitions;