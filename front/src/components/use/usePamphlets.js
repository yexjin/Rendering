import * as reducer from '../../modules/reducer/pamphlets';
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const usePamphlets = () =>{
    const pamphletsList = useShallowEqualSelectorToJS((state) =>
      state.pamphlets.get("list")
  );

  const actions = useActions(reducer);

  return {
      pamphletsList,

      listAllOngoing: actions.listAllOngoing,

      createPamphletApi: reducer.createPamphletApi
  }
}

export default usePamphlets;