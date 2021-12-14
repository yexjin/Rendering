import { default as userModel} from '../models/user.js';
import { CustomError } from "../CustomError.js";
import config from '../config/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthService {

    /**
        로그인 - 사용자 정보를 조회하고 Token(Access, Refresh)을 생성
    */
    static async login(email, password) {
        const user =  await userModel.findByEmail(email);
        if(!user) throw new CustomError('InvaildParameterError', 401, 'User not found');
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            // 로그인 성공! Access Token, Refresh Token 발급
            const accessToken = await user.generateAccessToken();
            const refreshToken = await user.generateRefreshToken();
            
            return { user, accessToken, refreshToken };
        } else throw new CustomError('InvaildParameterError', 402, 'Password is incorrect');
    }

    /**
        로그아웃 - 사용자 정보를 조회하고 DB에 있는 Refresh Token을 삭제
    */
    static async logout(userId) {
        return await userModel.modifyUser(userId, {token: null});
    }

    /**
        Access Token 재발급 (Refresh Token을 이용하여)
    */
    static async reissueAccessToken(refreshToken) {
        let decodeSuccess = true;
        let decodeRefreshToken = '';
        try {
            decodeRefreshToken = jwt.verify(
                refreshToken,
                config.jwtSecretKey,
            );
            const user = await userModel.findById(decodeRefreshToken.id);
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