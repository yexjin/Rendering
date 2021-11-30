import Sequelize from 'sequelize';
import jwt from 'jsonwebtoken'
import config from '../config/index.js';
import Exhibition from './exhibition.js';

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
        db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourcekey: 'id'}); // User(1) : Comment(N)
        db.User.hasMany(db.Exhibition, {foreignKey: 'manager', sourcekey: 'id'}); // User(1) : Exhibition(N)
    }

    // User 관련 데이터 처리 함수
    static async findById(id) {
        return await User.findOne({where:{id}});
    }

    static async findByEmail(email) {
        return await User.findOne({where:{email}});
    }

    static async findByToken(token) {
        return await User.findOne({where:{token}});
    }

    static async modifyUser(id, data) {
        const userRecord = await User.update(data, {where:{id}});
        return userRecord;
    }

    static async deleteUser(id) {
        await User.destroy({where:{id}});
    }

    static async findeUserExhibitions(id) {
        const user = await User.findOne({
            include: [{
                model: Exhibition,
                where: {id}
            }]
        });
        const exhibitions = await user.getExhibitions();
        return exhibitions;
    }

    async generateRefreshToken() {
        console.log("generateRefreshToken() 호출!")
        const user = this;
        const refreshToken = jwt.sign(
          {
            email: user.email,
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

    async generateAccessToken() {
        const user = this;
        const accessToken = jwt.sign(
          {
            email: user.email,
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