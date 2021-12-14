import { Router } from 'express';
import { ExhibitionService } from '../../services/index.js';
import { isAccessTokenValid, upload } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

const route = Router();
const uploads = upload.fields([{ name: 'main_image', maxCount: 1 }, { name: 'sub_image', maxCount: 1 }]);

export default (app) => {
    app.use('/exhibitions', route);

    // 전시회 등록
    route.post('/', isAccessTokenValid, uploads, asyncErrorWrapper(async function(req, res, next) {
        const userId = req.user.id;
        let exhibitionDTO = req.body;
        if(req.files.main_image!=undefined) exhibitionDTO.main_image = req.files.main_image[0].filename;  // '../../uploads/' + main_image에서 사진쓰려무낭!
        if(req.files.sub_image!=undefined) exhibitionDTO.sub_image = req.files.sub_image[0].filename;
        console.log(exhibitionDTO)
        const exhibition = await ExhibitionService.registerExhibition(userId, exhibitionDTO);
        
        res.status(201).json(exhibition); 
    }));

    // 진행 중인 전시 목록 조회
    route.get('/ongoing', asyncErrorWrapper(async (req, res, next) => {
        const exhibitions = await ExhibitionService.findOngoingExhibitions();

        res.status(200).json(exhibitions);
    }));

    // 전시회 정보 조회(by id)
    route.get('/:id', asyncErrorWrapper(async (req, res, next) => {
        console.log(`전시회 정보 조회(by id)`);
        const exhibitionId = req.params.id;
        const exhibition = await ExhibitionService.findExhibitionById(exhibitionId);

        res.status(200).json(exhibition);
    }));

    // 전시회 정보 조회(by User)
    route.get('/', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const userId = req.user.id;
        const exhibitions = await ExhibitionService.findExhibitionByUser(userId);

        console.log(exhibitions.progress);

        res.status(200).json(exhibitions);
    }));

    // 전시회 정보 수정
    route.patch('/:id', uploads, isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const exhibitionId = req.params.id;
        const exhibitionDTO = req.body;
        if(req.files.main_image!=undefined) exhibitionDTO.main_image = req.files.main_image[0].filename;
        if(req.files.sub_image!=undefined) exhibitionDTO.sub_image = req.files.sub_image[0].filename;

        const result = await ExhibitionService.modifyExhibition(exhibitionId, exhibitionDTO);
        
        res.status(200).json({
            "success": Boolean(result)
        });
    }));

    // 전시회 삭제
    route.delete('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const exhibitionId = req.params.id;
        const result = await ExhibitionService.deleteExhibition(exhibitionId);
        
        res.status(204).json({
            "success": Boolean(result)
        });
    }));
    
    // 좋아요 등록
    route.post('/likes', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const exhibitionId = req.body;
        const userId = req.user.id;
        
        const exhibition = await ExhibitionService.addLike(exhibitionId, userId);

        return res.status(201).json({likeUsers: exhibition.likes});
    }));

    // 좋아요 삭제
    route.delete('/likes/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
            const exhibitionId = req.params.id;
            const userId = req.user.id;

            const exhibition = await ExhibitionService.deleteLike(exhibitionId, userId);
            res.status(201).json({likeUsers: exhibition.likes});
    }));
}