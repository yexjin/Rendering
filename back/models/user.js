import Sequelize from 'sequelize';
import Exhibition from './exhibition.js';
import Comment from './comment.js';

import jwt from 'jsonwebtoken'
import config from '../config/index.js';

export default class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({ // 테이블 컬럼 설정
            email: {
                type: Sequelize.STRING(45),
                allowNull: false,
                unique: true,
            },
            job: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            password: {
                type: Sequelize.STRING(300),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            token: {  // Refresh Token
                type: Sequelize.STRING(200),
                allowNull: true
             },
        }, { // 테이블 자체에 대한 설정
            sequelize,
            timestamps: false,       // createdTime, updatedTime 추가할지!
            paranoid: false,         // deletedTime 추가할지
            underscored: false,      // 스네이크 케이스를 쓸지(ex. created_at)
            modelName: 'User',       // 노드 프로젝트에서 사용할 모델 이름
            tableName: 'users',      // 실제 데이터베이스의 테이블 이름
            charset: 'utf8',         // 한글 설정
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.User.hasMany(db.Comment, {foreignKey: 'commenter'});   // User(1) : Comment(N)
        db.User.hasMany(db.Exhibition, {foreignKey: 'manager'});  // User(1) : Exhibition(N)
    }

    /**
        유저 조회 (Read)
     */
    static async findById(id) {
        return await User.findOne({where:{id}});
    }

    static async findByEmail(email) {
        return await User.findOne({where:{email}});
    }

    static async findByToken(token) {
        return await User.findOne({where:{token}});
    }

    static async findeUserWithAllData(id) {
        const user = await User.findOne({
            include: [{model: Exhibition}, {model: Comment}],
            where: {id},
        });
        return user;
    }

    /**
        유저 수정 (Update)
     */
    static async modifyUser(id, data) {
        return await User.update(data, {where:{id}});;
    }

    /**
        유저 삭제 (Delete)
     */
    static async deleteUser(id) {
        return await User.destroy({where:{id}});
    }

    /**
        RefreshToken 생성
     */
    async generateRefreshToken() {
        const user = this;
        const refreshToken = jwt.sign(
          {
            id: user.id,
          },
          config.jwtSecretKey,
          {
            expiresIn: "2w",
            issuer: config.issuer,
          }
        );
        user.token = refreshToken;
        user.update({token: refreshToken},{where:{id: user.id}});
        return refreshToken;
    }

    /**
        AccessToken 생성
     */
    async generateAccessToken() {
        const user = this;
        const accessToken = jwt.sign(
          {
            id: user.id,
          },
          config.jwtSecretKey,
          {
            expiresIn: "1h",
            issuer: config.issuer,
          }
        );
        return accessToken;
    }
}