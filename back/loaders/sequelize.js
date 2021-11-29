import db from '../models/index.js';

export default (app) => {
    db.sequelize.sync({force: true}) // force: true(서버 실행 시마다 테이블을 재생성)
}