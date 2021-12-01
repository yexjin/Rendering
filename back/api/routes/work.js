import { Router } from 'express';
import { WorkService } from '../../services/index.js';
import { isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

const route = Router();

export default (app) => {
    app.use('/works', route);

    // 작품 등록 
    route.post('/:id', isAccessTokenValid, asyncErrorWrapper(async function(req, res, next) {
        const workDTO = req.body;
        const exhibitionId = req.params.id;

        const work = await WorkService.registerWork(exhibitionId, workDTO);
        
        res.status(201).json(work); 
    }));

    // 작품 조회
    route.get('/:id', asyncErrorWrapper(async (req, res, next) => {
        const worktId = req.params.id;
        const work = await WorkService.findWorkById(worktId);

        res.status(200).json(work);
    }));

    // 작품 수정
    route.patch('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const worktId = req.params.id;
        const workDTO = req.body;

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