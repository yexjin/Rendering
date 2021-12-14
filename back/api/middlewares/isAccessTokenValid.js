import config from '../../config/index.js';
import jwt from 'jsonwebtoken';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';
import { CustomError } from "../../CustomError.js";
import { UserService } from '../../services/index.js';

// Access Token이 유효한지 확인한다.
const isAccessTokenValid = asyncErrorWrapper(async function(req, res, next) {
      if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // 요청을 보낼 때마다 headers에 authorization: 'bearer ' + accessToken
        let token = req.headers.authorization.split(' ')[1];
        const decodedUser = jwt.verify(token, config.jwtSecretKey);
        const user = await UserService.findUserById(decodedUser.id);
        if(!user) {
            throw new CustomError('JsonWebTokenError', 401, 'User not found');
        }
        else{
            req.user = {
                id: user.id,
                email: user.email
            };
        }
        next();
      } else {
          throw new CustomError('JsonWebTokenError', 401, 'Token not found');
      }
  })
  export { isAccessTokenValid };