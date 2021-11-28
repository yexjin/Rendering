import Sequelize from 'sequelize';

export default class Exhibition extends Sequelize.Model {
    static init(sequelize) {
        return super.init({ // 테이블 컬럼 설정
            exhibition_name: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING(300),
                allowNull: true,
            },
            host_name: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            main_image: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            sub_image: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
        }, { // 테이블 자체에 대한 설정
            sequelize,
            timestamps: false,             // createdTime, updatedTime 추가할지!
            paranoid: false,               // deletedTime 추가할지
            underscored: false,            // 스네이크 케이스를 쓸지(ex. created_at)
            modelName: 'Exhibition',       // 노드 프로젝트에서 사용할 모델 이름
            tableName: 'exhibitions',      // 실제 데이터베이스의 테이블 이름
            charset: 'utf8',               // 한글 설정
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Exhibition.hasOne(db.Pamphlet, {foreignKey: 'exhibition', targetkey: 'id'}) // Exhibition(1) : Pamphlet(1)
        db.Exhibition.belongsTo(db.User, {foreignKey: 'manager', targetkey: 'id'}) // Exhibition(N) : User(1)
        db.Exhibition.hasMany(db.Work, {foreignKey: 'exhibition', sourcekey: 'id'}); // Exhibition(1) : Work(N)
        db.Exhibition.hasMany(db.Comment, {foreignKey: 'exhibition', sourcekey: 'id'}); // Exhibition(1) : Comment(N)
    }
};