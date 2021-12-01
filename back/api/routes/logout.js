import { Router } from 'express'; 
import { AuthService } from '../../services/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

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
        const userId = req.params.id;
        const result = await AuthService.logout(userId);
        if(result) {
            return res.status(204).json();
        }
    }));
}