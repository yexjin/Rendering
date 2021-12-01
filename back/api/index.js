import { Router } from 'express';
import signup from './routes/signup.js';
import login from './routes/login.js';
import logout from './routes/logout.js';
import auth from './routes/auth.js';
import user from './routes/user.js';
import exhibition from './routes/exhibition.js';
import work from './routes/work.js';
import commment from './routes/comment.js';
import pamphlet from './routes/pamphlet.js';

export default () => {
    const app = Router();
    signup(app);
    login(app);
    logout(app);
    auth(app);
    user(app);
    exhibition(app);
    work(app);
    commment(app);
    pamphlet(app);
    return app;
}