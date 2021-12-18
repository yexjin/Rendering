import * as reducer from '../../modules/reducer/works'
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const useWorks = () => {

    const work = useShallowEqualSelectorToJS((state)=>
    state.works.get('work'))

    const actions = useActions(reducer);

    return{
        work,

        getWork : actions.getWork,
        createWorksApi: reducer.createWorksApi
    }
}

export default useWorks;