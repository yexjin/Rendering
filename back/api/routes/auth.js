import { Router } from 'express'; 
import { AuthService } from '../../services/index.js';
import { isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { CustomError } from "../../CustomError.js";
import { default as userModel} from '../../models/user.js';

const route = Router();

export default (app) => {
    /*
    권한(AccessToken)에 관련된 Router를 정의한다. 
    */
    app.use('/auth', route);

    // Refresh Token을 이용해 Access Token(1h) 발급
    route.get('/', asyncErrorWrapper(async (req, res, next) => {
        if(!req.cookies.R_AUTH) {
            throw new CustomError('RefreshTokenError', 401, 'Refresh token not found'); // 사용자가 로그아웃 상태
        }

        let AuthServiceInstance = new AuthService({ userModel });
        const { decodeSuccess, id, name, email, job, accessToken } = await AuthServiceInstance.reissueAccessToken(req.cookies.R_AUTH);
        if(!decodeSuccess) { // Refresh Token 유효기간 만료 (재로그인)
            throw new CustomError('RefreshTokenError', 401, 'Invalid refresh token');
        }
        else {
            return res.status(200).json({
                id,
                name,
                email,
                job,
                accessToken,
            });
        }
    }));

    // Access Token이 유효한지 체크
    route.get('/isValid', isAccessTokenValid, async (req, res, next) => {
        return res.status(200).json({
            isValid: true
        });
    });
}