import User from '../../models/user.js';
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js';

// 회원 가입 시 이메일이 중복되었는지 체크한다.
const emailDuplicationCheck = asyncErrorWrapper(async (req, res, next) => {
    let email = req.query.email || req.body.email;
    if(email) {
        const user = await User.findByEmail(email);
        if(user) {
            return res.status(200).json({
                message : `Email is duplicated.`,
                isExists: true
            });
        }
    }
    next();
});

export { emailDuplicationCheck };