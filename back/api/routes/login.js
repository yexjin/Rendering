import { Router } from 'express'; 
import { AuthService } from '../../services/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { default as userModel} from '../../models/user.js';
const route = Router();

export default (app) => {
    /*
    로그인에 관련된 Router를 정의한다.
    */
    app.use('/login', route);

    route.post('/', asyncErrorWrapper(async (req, res, next) => {
        const { email, password } = req.body;

        let AuthServiceInstance =new AuthService({ userModel });
        const { id, name, job, accessToken, refreshToken } = await AuthServiceInstance.SignIn(email, password);
        res.cookie("R_AUTH", refreshToken, {
            sameSite: 'none',
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 14    // 2 Week
        });
        return res.status(200).json({
            loginSuccess: true,
            id: id,
            name: name,
            email: email,
            job: job,
            accessToken: accessToken,
        });
    }));
}