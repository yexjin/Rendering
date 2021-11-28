import Sequelize from 'sequelize';

export default class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({ // 테이블 컬럼 설정
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,

            },
        }, { // 테이블 자체에 대한 설정
            sequelize,
            timestamps: false,       // createdTime, updatedTime 추가할지!
            paranoid: false,         // deletedTime 추가할지
            underscored: false,      // 스네이크 케이스를 쓸지(ex. created_at)
            modelName: 'Comment',    // 노드 프로젝트에서 사용할 모델 이름
            tableName: 'comments',   // 실제 데이터베이스의 테이블 이름
            charset: 'utf8',         // 한글 설정
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetkey: 'id'}) // Comment(N) : User(1)
        db.Comment.belongsTo(db.Exhibition, {foreignKey: 'exhibition', targetkey: 'id'}) // Comment(N) : Exhibition(1)
    }

};