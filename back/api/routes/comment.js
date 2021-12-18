import { Router } from 'express';
import { CommentService } from '../../services/index.js';
import { isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

const route = Router();

export default (app) => {
    app.use('/comments', route);

    // 코멘트 등록 
    route.post('/', isAccessTokenValid, asyncErrorWrapper(async function(req, res, next) {
        let commentDTO = req.body;
        const userId = req.user.id;
        const now = new Date(+new Date() + 3240 * 10000).toISOString();
        commentDTO.created_at = now;
        const comment = await CommentService.createComment(userId, commentDTO);
        
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