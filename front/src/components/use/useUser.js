import * as reducer from '../../modules/reducer/user';
import { useActions, useShallowEqualSelectorToJS } from './components';

const useUser = () =>{

    const user = useShallowEqualSelectorToJS((state) => 
        state.user.get("user")
    )

    const actions = useActions(reducer);

    return {
        user,

        getUser: actions.getUser,
        signupApi: reducer.signupApi,
        loginApi: reducer.loginApi,
    }
}

export default useUser;