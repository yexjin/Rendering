import { Router } from 'express';
import { CommentService } from '../../services/index.js';
import { isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

const route = Router();

export default (app) => {
    app.use('/comments', route);

    // 코멘트 등록 
<<<<<<< HEAD
    route.post('/:id', isAccessTokenValid, asyncErrorWrapper(async function(req, res, next) {
        const commentDTO = req.body;
        const exhibitionId = req.params.id;
        const userId = req.user.id;

        const comment = await CommentService.createComment(userId, exhibitionId, commentDTO);
=======
    route.post('/', isAccessTokenValid, asyncErrorWrapper(async function(req, res, next) {
        const commentDTO = req.body;
        const userId = req.user.id;

        const comment = await CommentService.createComment(userId, commentDTO);
>>>>>>> b08a9d333499da63e768eb9112fed75d9011b8ec
        
        res.status(201).json(comment); 
    }));

    // 해당 전시회의 코멘트 리스트
    route.get('/:id', asyncErrorWrapper(async (req, res, next) => {
        const exhibitionId = req.params.id;
        const comments = await CommentService.findByExhibitionId(exhibitionId);

        res.status(200).json(comments);
    }));

    // 코멘트 수정
    route.patch('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const commentId = req.params.id;
        const commentDTO = req.body;

        const commentRecord = await CommentService.modifyComment(commentId, commentDTO);
        
        res.status(200).json(commentRecord);
    }));

    // 코멘트 삭제
    route.delete('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
        const commentId = req.params.id;
        const result = await CommentService.deleteComment(commentId);
        
        res.status(204).json({
            "success": Boolean(result)
        });
    }));
    
}