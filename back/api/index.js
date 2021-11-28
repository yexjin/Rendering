import { Router } from 'express';
import signup from './routes/signup.js';
// import exhibition from './routes/exhibition.js';
import auth from './routes/auth.js';
import login from './routes/login.js';
import logout from './routes/logout.js';
// import user from './routes/user.js';
// import work from './routes/work.js';
// import commment from './routes/comment.js';
// import pamphlet from './routes/pamphlet.js';

export default () => {
    const app = Router();
    auth(app);
    login(app);
    signup(app);
    logout(app);
    // user(app);
    // exhibition(app);
    // work(app);
    // commment(app);
    // pamphlet(app);
    return app;
}