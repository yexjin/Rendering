import { Router } from 'express';
import { PamphletService } from '../../services/index.js';
import { isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

const route = Router();

export default (app) => {
    app.use('/pamphlets', route);

    // 팜플랫 등록 
    route.post('/:id', isAccessTokenValid, asyncErrorWrapper(async function(req, res, next) {
        const pamphletDTO = req.body;
        const exhibitionId = req.params.id;

        const pamphlet = await PamphletService.createPamphlet(exhibitionId, pamphletDTO);
        
        res.status(201).json(pamphlet); 
    }));

    // 팜플랫 조회
    route.get('/:id', asyncErrorWrapper(async (req, res, next) => {
        const pamphletId = req.params.id;
        const pamphlet = await PamphletService.findPamphletById(pamphletId);

        res.status(200).json(pamphlet);
    }));

    // 진행 중인 전시회 팜플랫 조회
    route.get('/ongoing', asyncErrorWrapper(async (req, res, next) => {
        const pamphlets = await PamphletService.findOngoingPamphlets();

        res.status(200).json(pamphlets);
    }));

    // 팜플랫 수정
    route.patch('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const pamphletId = req.params.id;
        const pamphletDTO = req.body;

        const result = await PamphletService.modifyPamphlet(pamphletId, pamphletDTO);
        
        res.status(200).json({
            "success": Boolean(result)
        });
    }));
    
}