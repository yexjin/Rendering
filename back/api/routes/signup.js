import { Router } from 'express'; 
import { AuthService, UserService } from '../../services/index.js';
import { emailDuplicationCheck } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { default as userModel} from '../../models/user.js';
import bcrypt from 'bcrypt';
const route = Router();

export default (app) => {
    /*
    회원가입에 관련된 Router를 정의한다.
    */
    app.use('/signup', route);

    route.post('/', emailDuplicationCheck, asyncErrorWrapper(async (req, res, next) => {
        const { name, job, password, email } = req.body;
        const salt = await bcrypt.genSalt(12); // 기본이 10번이고 숫자가 올라갈수록 연산 시간과 보안이 높아진다.
        const hash = await bcrypt.hash(password, salt);
        console.log("hash : " + hash);
        let user = await userModel.create({
            name,
            password: hash,
            job,
            email,
        });
        
        // Refresh Token, AccessToken
        let AuthServiceInstance = new AuthService({ userModel });
        const { id, accessToken, refreshToken } = await AuthServiceInstance.SignIn(user.email, password);

        res.cookie("R_AUTH", refreshToken, {
            sameSite: 'none',
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 14    // 2 Week
        });
        
        return res.status(200).json({
            loginSuccess: true,
            id: id,
            name: user.name,
            email: user.email,
            job: user.job,
            accessToken: accessToken
        });
    }));
}