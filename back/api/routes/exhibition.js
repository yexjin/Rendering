import { Router } from 'express';
import { ExhibitionService } from '../../services/index.js';
import { emailDuplicationCheck, isAccessTokenValid } from '../middlewares/index.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { default as exhibitionModel} from '../../models/exhibition.js';
import { default as workModel} from '../../models/work.js';
import { default as pamphletModel} from '../../models/pamphlet.js';
import { default as userModel} from '../../models/user.js';
import { default as commentModel} from '../../models/comment.js';

const route = Router();

export default (app) => {
    app.use('/exhibitions', route);

    // 전시회 등록 
    route.post('/', isAccessTokenValid, asyncErrorWrapper(async function(req, res, next) {
        try {
            const exhibitionDTO = req.body;
            console.log(exhibitionDTO.exhibition_name);
            const id = req.user.id;

            let ExhibitionServiceInstance = new ExhibitionService({ exhibitionModel, workModel, pamphletModel, userModel, commentModel });
            const exhibition = await ExhibitionServiceInstance.registerExhibition(id, exhibitionDTO);
            res.status(201).json(exhibition);
        } catch (error) {
        res.status(400).json({ errors: [
            {
                location: 'body',
                param: 'name',
                error: 'TypeError',
                message: 'must be String'
            }
        ], error }); 
        }
    }));
    
}