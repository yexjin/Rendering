import { Router } from 'express';
import { UserService } from '../../services/index.js';
import { emailDuplicationCheck, isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { User as userModel} from '../../models/User.js';

const route = Router();

export default (app) => {
    app.use('/users', route);
    
    // s3 pre-sign url 발급
    // route.post('/sign', asyncErrorWrapper(async (req, res, next) => {
    //     const { fileName } = req.body;
    //     let UserServiceInstance = new UserService({studyModel, userModel, notificationModel});
    //     const signedUrlPut = await UserServiceInstance.getPreSignUrl(fileName);

    //     res.status(200).json({
    //         preSignUrl: signedUrlPut
    //     });
    // }));
      
    // 사용자 정보 조회(by email)
    route.get('/', asyncErrorWrapper(async (req, res, next) => {
        const { email } = req.query;
        let UserServiceInstance = new UserService({ userModel });
        const user = await UserServiceInstance.findByEmail(email);

        res.status(200).json(user);
    }));

    // 사용자 정보 상세 보기
    route.get('/:id', asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        
        let UserServiceInstance = new UserService({ userModel });
        const user = await UserServiceInstance.findById(id);

        res.status(200).json(user);
    }));

    // 사용자 정보 수정
    route.patch('/:id', isAccessTokenValid, emailDuplicationCheck, asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        const tokenUserId = req.user._id;
        const userDTO = req.body;
        let UserServiceInstance = new UserService({ userModel });
        const { userRecord, accessToken, refreshToken } = await UserServiceInstance.modifyUser(id, tokenUserId, userDTO);

        res.cookie("R_AUTH", refreshToken, {
            sameSite: 'none',
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 14    // 2 Week
        });
        
        return res.status(200).json({
            _id: userRecord._id,
            nickName: userRecord.nickName,
            image: userRecord.image,
            accessToken: accessToken,
            isExists: false
        });
    }));


    // 사용자 이메일 중복 체크
    route.get('/:id/exists', emailDuplicationCheck, asyncErrorWrapper(async (req, res, next) => {
        return res.status(200).json({
            isExists: false
        });
    }));

    // 사용자 정보 삭제(회원탈퇴)
    route.delete('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        const tokenUserId = req.user._id;

        let UserServiceInstance = new UserService({ userModel });
        await UserServiceInstance.deleteUser(id, tokenUserId);
        res.clearCookie('R_AUTH');
        res.status(204).json();
    }));

    // 사용자 전시 목록 조회
    route.get('/myStudies/:id', isUserIdValid, isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const id = req.params.id;
        let UserServiceInstance = new UserService({studyModel, userModel, notificationModel});
        const user = await UserServiceInstance.findMyStudies(id);

        res.status(200).json(user);
    }));
    
}