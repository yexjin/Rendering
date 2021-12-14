import { Router } from 'express'; 
import { AuthService } from '../../services/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

const route = Router();

export default (app) => {
    /*
    로그인에 관련된 Router를 정의한다.
    */
    app.use('/login', route);

    route.post('/', asyncErrorWrapper(async (req, res, next) => {
        const { email, password } = req.body;

        const { user, accessToken, refreshToken } = await AuthService.login(email, password);
        res.cookie("R_AUTH", refreshToken, {
            sameSite: 'none',
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 14    // 2 Week
        });
        return res.status(200).json({
            loginSuccess: true,
            id: user.id,
            name: user.name,
            email: user.email,
            job: user.job,
            accessToken: accessToken,
        });
    }));
}