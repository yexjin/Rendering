import { Router } from 'express';
import { WorkService } from '../../services/index.js';
import { isAccessTokenValid, upload } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

const route = Router();

export default (app) => {
    app.use('/works', route);

    // 작품 등록 
    const uploads = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'content', maxCount: 1 }]);
    route.post('/', isAccessTokenValid, uploads, asyncErrorWrapper(async function(req, res, next) {
        let workDTO = req.body;
        workDTO.thumbnail = req.files.thumbnail[0].filename;  // '../../uploads/' + main_image에서 사진쓰려무낭!
        workDTO.content = req.files.content[0].filename;
        const work = await WorkService.registerWork(workDTO);

        res.status(201).json(work); 
    }));

    // 작품 조회
    route.get('/:id', asyncErrorWrapper(async (req, res, next) => {
        const worktId = req.params.id;
        const work = await WorkService.findWorkById(worktId);

        res.status(200).json(work);
    }));

    // 작품 수정
    route.patch('/:id', isAccessTokenValid, uploads, asyncErrorWrapper(async (req, res, next) => {
        const worktId = req.params.id;
        let workDTO = req.body;
        if(req.files.thumbnail!=undefined) workDTO.thumbnail = req.files.thumbnail[0].filename;  // '../../uploads/' + main_image에서 사진쓰려무낭!
        if(req.files.content!=undefined) workDTO.content = req.files.content[0].filename;
        const result = await WorkService.modifyWork(worktId, workDTO);
        
        res.status(200).json({
            "success": Boolean(result)
        });
    }));

    // 작품 삭제
    route.delete('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const worktId = req.params.id;
        const result = await WorkService.deleteWork(worktId);
        
        res.status(200).json({
            "success": Boolean(result)
        });
    }));
}