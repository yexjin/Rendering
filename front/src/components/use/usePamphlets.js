import * as reducer from '../../modules/reducer/pamphlets';
import { useActions, useShallowEqualSelectorToJS } from './components';

const usePamphlets = () =>{
    // const actions = useActions(reducer);

    return {
        createPamphletApi: reducer.createPamphletApi
    }
}

export default usePamphlets;