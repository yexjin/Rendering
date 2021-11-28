import { Router } from 'express'; 
import { AuthService } from '../../services/index.js';
import { isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { CustomError } from "../../CustomError.js";
import { default as userModel} from '../../models/user.js';

const route = Router();

export default (app) => {
    /*
    권한에 관련된 Router를 정의한다. 
    */
    app.use('/auth', route);

    // Refresh Token을 이용해 Access Token(1h) 발급
    route.get('/', asyncErrorWrapper(async (req, res, next) => {
        if(!req.cookies.R_AUTH) { // 쿠키에 R_AUTH(Refresh token)을 넣어서 요청!
            throw new CustomError('RefreshTokenError', 401, 'Refresh token not found');
        }
        let AuthServiceInstance = new AuthService({ userModel });
        const { decodeSuccess, _id, name, email, job, accessToken } = await AuthServiceInstance.reissueAccessToken(req.cookies.R_AUTH);
        // Refresh Token가 유효하지 않을 경우
        if(!decodeSuccess) {
            throw new CustomError('RefreshTokenError', 401, 'Invalid refresh token'); // 다시 로그인!
        }
        else {
            return res.status(200).json({
                _id,
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