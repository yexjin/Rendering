import { Router } from 'express';
import { UserService } from '../../services/index.js';
import { emailDuplicationCheck, isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { default as userModel} from '../../models/user.js';
import { default as exhibitionModel} from '../../models/exhibition.js';
import { default as commentModel} from '../../models/comment.js';

const route = Router();

export default (app) => {
    app.use('/users', route);

    // 사용자 이메일 중복 체크
    route.get('/exists', emailDuplicationCheck, asyncErrorWrapper(async (req, res, next) => {
        return res.status(200).json({
            isExists: false
        });
    }));

    // 사용자 정보 조회(by id)
    route.get('/:id', asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        
        let UserServiceInstance = new UserService({ userModel, exhibitionModel, commentModel });
        const user = await UserServiceInstance.findById(id);

        res.status(200).json(user);
    }));
      
    // 사용자 정보 조회(by email)
    route.get('/', asyncErrorWrapper(async (req, res, next) => {
        const email = req.query; // ?email=test@naver.com

        let UserServiceInstance = new UserService({ userModel, exhibitionModel, commentModel });
        const user = await UserServiceInstance.findByEmail(email);

        res.status(200).json(user);
    }));

    // 사용자 전시 목록 조회
    route.get('/exhibitions/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        let UserServiceInstance = new UserService({ userModel, exhibitionModel, commentModel });
        const user = await UserServiceInstance.findUserExhibitions(id);

        res.status(200).json(user);
    }));

    // 사용자 댓글 목록 조회
    route.get('/comments/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        let UserServiceInstance = new UserService({ userModel, exhibitionModel, commentModel });
        const user = await UserServiceInstance.findUserComments(id);

        res.status(200).json(user);
    }));

    // 사용자 정보 수정
    route.patch('/:id', isAccessTokenValid, emailDuplicationCheck, asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        const userDTO = req.body;
        let UserServiceInstance = new UserService({ userModel, exhibitionModel, commentModel });
        const userRecord = await UserServiceInstance.modifyUser(id, userDTO);
        
        return res.status(200).json(userRecord);
    }));

    // 사용자 정보 삭제(회원탈퇴)
    route.delete('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;

        let UserServiceInstance = new UserService({ userModel });
        await UserServiceInstance.deleteUser(id);
        res.clearCookie('R_AUTH');
        res.status(204).json();
    }));

    // s3 pre-sign url 발급
    // route.post('/sign', asyncErrorWrapper(async (req, res, next) => {
    //     const { fileName } = req.body;
    //     let UserServiceInstance = new UserService({studyModel, userModel, notificationModel});
    //     const signedUrlPut = await UserServiceInstance.getPreSignUrl(fileName);

    //     res.status(200).json({
    //         preSignUrl: signedUrlPut
    //     });
    // }));
    
}