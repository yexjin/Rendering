import Sequelize from 'sequelize';

export default class Work extends Sequelize.Model {
    static init(sequelize) {
        return super.init({ // 테이블 컬럼 설정
            thumbnail: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            content: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
        }, { // 테이블 자체에 대한 설정
            sequelize,
            timestamps: false,             // createdTime, updatedTime 추가할지!
            paranoid: false,               // deletedTime 추가할지
            underscored: false,            // 스네이크 케이스를 쓸지(ex. created_at)
            modelName: 'Work',             // 노드 프로젝트에서 사용할 모델 이름
            tableName: 'works',            // 실제 데이터베이스의 테이블 이름
            charset: 'utf8',               // 한글 설정
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Work.belongsTo(db.Exhibition, {foreignKey: 'exhibition',  onDelete: 'CASCADE'}) // Work(N) : Exhibition(1)
    }

    /**
        작품 조회 (Read)
     */
    static async findWorkById(id) {
        return await Work.findOne({where:{id}});
    }

    static async findWorksByExhibitionId(id) {
        return await Work.findAll({where:{exhibition: id}});
    }
    
    /**
        작품 수정 (Update)
    */
    static async modifyWork(id, data) {
        return await Work.update(data, {where:{id}});
    }
    
    /**
        작품 삭제 (Delete)
    */
    static async deleteWork(id) {
        return await Work.destroy({where:{id}});
    }
};