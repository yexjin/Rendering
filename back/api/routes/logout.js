import { Router } from 'express'; 
import { AuthService } from '../../services/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { default as userModel} from '../../models/user.js';

const route = Router();

export default (app) => {
    /*
    로그아웃에 관련된 Router를 정의한다.
    # POST /logout : 로그아웃
    */
    app.use('/logout', route);

    // 로그아웃(Refresh Token 삭제)
    route.post('/:id', asyncErrorWrapper( async (req, res, next) => {
        res.clearCookie('R_AUTH');
        const _id = parseInt(req.params.id, 10);
        console.log("/logout")
        let AuthServiceInstance = new AuthService({ userModel });
        const result = await AuthServiceInstance.Logout(_id);
        if(result) {
            return res.status(204).json();
        }
    }));
}