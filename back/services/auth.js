import config from '../config/index.js';
import jwt from 'jsonwebtoken';
import { CustomError } from "../CustomError.js";
import bcrypt from 'bcrypt';

export class AuthService {
    constructor({ userModel }) {
        this.userModel = userModel;
    }

    // 로그인 시 사용자 정보를 조회하고 Token을 생성한다.
    async SignIn(email, password) {
        const user =  await this.userModel.findByEmail(email);
        if(!user) throw new CustomError('InvaildParameterError', 401, 'User not found');
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            // Access Token, Refresh Token 발급
            const id = user.id;
            const name = user.name;
            const job = user.job;
            const accessToken = await user.generateAccessToken();
            const refreshToken = await user.generateRefreshToken();
            return { id, email, name, job, accessToken, refreshToken };
        } else throw new CustomError('InvaildParameterError', 402, 'Password is incorrect');
    }

    // 로그아웃 시 사용자 정보를 조회하고 Token을 삭제한다.
    async Logout(id) {
        const user =  await this.userModel.findById(id);
        user.modifyUser(id, {token: null});
        return true;
    }

    // Refresh Token을 이용하여 Access Token 재발급한다.
    async reissueAccessToken(refreshToken) {
        let decodeSuccess = true;
        let decodeRefreshToken = '';
        try {
            decodeRefreshToken = jwt.verify(
                refreshToken,
                config.jwtSecretKey,
            );
            const user = await this.userModel.findByEmail(decodeRefreshToken.email);
            if(!user) throw new CustomError('InvaildParameterError', 401, 'User not found');
            const { id, name, job, email } = user;
            const accessToken = await user.generateAccessToken();
            return { decodeSuccess, id, name, job, email, accessToken };
        } 
        catch(err) {
            decodeSuccess = false;
            return { decodeSuccess };
        }
    }
}