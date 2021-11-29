import expressLoader from './express.js';
import sequelizeLoader from './sequelize.js';
import logger from './logger.js';
import errorHandler from './errorHandler.js';

export default (app) => {
    sequelizeLoader(app);
    logger.info('✌️ MySQL Connected');
    expressLoader(app);
    errorHandler(app);
    logger.info('✌️ Express loaded');
};