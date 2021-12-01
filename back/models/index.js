import Sequelize from 'sequelize';
import config from '../config/index.js';
const env = process.env.NODE_ENV || 'development';
const dbconfig = config.database[env];
const db = {};

// MySQL 연결 객체
const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig);
db.sequelize = sequelize

import User from './user.js';
import Comment from './comment.js';
import Exhibition from './exhibition.js';
import Work from './work.js';
import Pamphlet from './pamphlet.js';

// DB 객체에 모델 담기
db.User = User;
db.Comment = Comment;
db.Exhibition = Exhibition;
db.Work = Work;
db.Pamphlet = Pamphlet;

// 모델의 static.init 호출 (테이블이 모델로 연결)
User.init(sequelize);
Comment.init(sequelize);
Exhibition.init(sequelize);
Work.init(sequelize);
Pamphlet.init(sequelize);

// 다른 테이블과의 관계 연결 메서드
User.associate(db);
Comment.associate(db);
Exhibition.associate(db);
Work.associate(db);
Pamphlet.associate(db);

export default db;