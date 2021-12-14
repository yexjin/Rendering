import * as reducer from '../../modules/reducer/user';
import { useActions, useShallowEqualSelectorToJS } from './components';

const useUser = () =>{
    // const actions = useActions(reducer);

    return {
        signupApi: reducer.signupApi,
        loginApi: reducer.loginApi,
    }
}

export default useUser;