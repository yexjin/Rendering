import Sequelize from 'sequelize';
import Work from './work.js'

const Op = Sequelize.Op;

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
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            end_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            main_image: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            sub_image: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            likes: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            }
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
        db.Exhibition.hasOne(db.Pamphlet, { foreignKey: 'exhibition' })   // Exhibition(1) : Pamphlet(1)
        db.Exhibition.belongsTo(db.User, { foreignKey: 'manager' })       // Exhibition(N) : User(1)
        db.Exhibition.hasMany(db.Work, { foreignKey: 'exhibition' });     // Exhibition(1) : Work(N)
        db.Exhibition.hasMany(db.Comment, { foreignKey: 'exhibition' });  // Exhibition(1) : Comment(N)
    }

    /**
     *  전시 조회 (Read)
     */
    static async findExhibitionById(id) {
        return await Exhibition.findOne({
            include:[{ model: Work }],
            where:{id}});
    }

    static async findExhibitionByUserId(userId) {
        return await Exhibition.findAll({
            include:[{ model: Work }],
            where:{manager: userId}});
    }

    static async findOngoingExhibitions() {
        const today = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
        console.log(`오늘은 : ${today}`)
        const exhibitions = await Exhibition.findAll({
            where: {
                [Op.and]: [
                    {start_date: {[Op.lte]: today}}, // start_date <= today
                    {end_date: {[Op.gte]: today}} // end_date >= today
                ]
            },
            order: Sequelize.col('start_date'), // start_date 기준으로 오름차순 정렬
        });
        return exhibitions;
    }

    /**
     *  전시 검색
     */
    static async searchExhibitions(keyword) {
        return await Exhibition.findAll({
            where : {exhibition_name : {[Op.like] : "%" + keyword + "%"}}
        });
    }

    /**
     *  전시 수정 (Update)
     */
     static async modifyExhibition(id, data) {
        return await Exhibition.update(data, {where:{id}});
    }

    /**
     *  전시 삭제 (Delete)
     */
     static async deleteExhibition(id) {
        await Exhibition.destroy({where:{id}});
    }
};