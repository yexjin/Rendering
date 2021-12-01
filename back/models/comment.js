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
        db.Comment.belongsTo(db.User, { foreignKey: 'commenter',  onDelete: 'CASCADE' }) // Comment(N) : User(1)
        db.Comment.belongsTo(db.Exhibition, {foreignKey: 'exhibition', onDelete: 'cascade'}) // Comment(N) : Exhibition(1)
    }

    /**
     * 코멘트 조회 (Read)
     */
    static async findCommentById(id) {
        return await Comment.findOne({where:{id}});
    }

    static async findByUserId(userId) {
        return await Comment.findAll({where:{commenter: userId}});
    }

    static async findByExhibitionId(exhibitionId) {
        return await Comment.findAll({where:{exhibition: exhibitionId}});
    }
        
    /**
     *  코멘트 수정 (Update)
     */
    static async modifyComment(id, data) {
        return await Comment.update(data, {where:{id}});
    }
    
    /**
     *  코멘트 삭제 (Delete)
     */
    static async deleteComment(id) {
        return await Comment.destroy({where:{id}});
    }
};