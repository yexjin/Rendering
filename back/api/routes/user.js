import { Router } from 'express';
import { UserService } from '../../services/index.js';
import { emailDuplicationCheck, isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

const route = Router();

export default (app) => {
    app.use('/users', route);

    // 사용자 이메일 중복 체크
    route.get('/exists', emailDuplicationCheck, asyncErrorWrapper(async (req, res, next) => {
        res.status(200).json({
            isExists: false
        });
    }));

    // 사용자 정보 조회(by id)
    route.get('/:id', asyncErrorWrapper(async (req, res, next) => {
        const userId = req.params.id;
        const user = await UserService.findUserById(userId);
        user.token = undefined; // 'delete user.token'이 왜 안될까?
        user.password = undefined;
        
        res.status(200).json(user);
    }));

    // 사용자 정보 수정
    route.patch('/:id', isAccessTokenValid, emailDuplicationCheck, asyncErrorWrapper(async (req, res, next) => {
        const userId = req.params.id;
        const userDTO = req.body;
        const result = await UserService.modifyUser(userId, userDTO);
        
        res.status(200).json({
            "success": Boolean(result)
        });
    }));

    // 사용자 정보 삭제(회원탈퇴)
    route.delete('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        const result = await UserService.deleteUser(id);
        
        res.clearCookie('R_AUTH');
        res.status(204).json({
            "success": Boolean(result)
        });
    }));
    
}