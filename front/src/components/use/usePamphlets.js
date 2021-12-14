import * as reducer from '../../modules/reducer/pamphlets';
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const usePamphlets = () =>{
    const pamphletsList = useShallowEqualSelectorToJS((state) =>
      state.pamphlets.get("list")
  );

    const pamphletInfo = useShallowEqualSelectorToJS((state)=>
      state.pamphlets.get("pamphlet")
    );

  const actions = useActions(reducer);

  return {
      pamphletsList,
      pamphletInfo,

      listAllOngoing: actions.listAllOngoing,
      getPamphlet: actions.getPamphlet,

      createPamphletApi: reducer.createPamphletApi
  }
}

export default usePamphlets;