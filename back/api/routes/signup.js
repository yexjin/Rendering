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
        const hash = await bcrypt.hash(password, 12);
        console.log("hash : " + hash);
        let user = await userModel.create({
            name,
            password : hash,
            job,
            email,
        });
        
        // Refresh Token, AccessToken
        let AuthServiceInstance = new AuthService({userModel});
        const { id, accessToken, refreshToken } = await AuthServiceInstance.SignIn(user.email, user.password);

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