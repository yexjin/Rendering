import Sequelize from 'sequelize';

export default class Pamphlet extends Sequelize.Model {
    static init(sequelize) {
        return super.init({ // 테이블 컬럼 설정
            title: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            subtitle: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            side_text: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            emphasis_text: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            text: {
                type: Sequelize.STRING(300),
                allowNull: true,
            },
            color: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
        }, { // 테이블 자체에 대한 설정
            sequelize,
            timestamps: false,             // createdTime, updatedTime 추가할지!
            paranoid: false,               // deletedTime 추가할지
            underscored: false,            // 스네이크 케이스를 쓸지(ex. created_at)
            modelName: 'Pamphlet',       // 노드 프로젝트에서 사용할 모델 이름
            tableName: 'pamphlets',      // 실제 데이터베이스의 테이블 이름
            charset: 'utf8',               // 한글 설정
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Pamphlet.belongsTo(db.Exhibition, { foreignKey: 'exhibition', targetKey: 'id'}) // Pamphlet(1) : Exhibition(1)
    }
};