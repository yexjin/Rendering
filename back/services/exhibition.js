import { default as exhibitionModel} from '../models/exhibition.js';
import { CustomError } from "../CustomError.js";

export class ExhibitionService {

  // 전시회 등록!
  static async registerExhibition(userId, exhibitionDTO) {
    const { exhibition_name, description, host_name, start_date, end_date, main_image, sub_image } = exhibitionDTO;
    let exhibition = await exhibitionModel.create({
      manager: userId,
      exhibition_name,
      description,
      host_name,
      start_date,
      end_date,
      main_image,
      sub_image
    });

    return exhibition;
  }

  // id를 이용하여 전시회 정보 조회
  static async findExhibitionById(id) {
    return await exhibitionModel.findExhibitionById(id);
  }

  // userId를 이용하여 전시회 정보 조회
  static async findExhibitionByUser(id) {
    const exhibitions = await exhibitionModel.findExhibitionByUserId(id);

    const total_project = (await exhibitions).length;
    let completed = 0, progress = 0, schedule = 0;

    (await exhibitions).forEach((exhibit, index, array)=> {
      const state = this.checkExhibitionState(exhibit);
      switch(state) {
        case 0:  // 종료된 전시
          completed += 1;
          break

        case 1:  // 진행 중 전시
          progress += 1;
          break;

        case 2:  // 예정된 전시
          schedule += 1;
          break;
      
        default: break;
      }
    })

    console.log(`total_project: ${total_project}, completed: ${completed}, progress: ${progress}, schedule: ${schedule}`);
    const userExhibitionInfo = { total_project, completed, progress, schedule, exhibitions}

    return userExhibitionInfo;
  }

  // 전시회 상태 조회(0: 전시 종료, 1: 전시 중, 2:전시 예정)
  static checkExhibitionState(exhibition) {
    const today = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
    if(exhibition.start_date > today) return 2;
    else if(exhibition.end_date < today) return 0;
    else return 1;
  }

  // 진행 중인 전시회 조회
  static async findOngoingExhibitions() {
    return await exhibitionModel.findOngoingExhibitions();
  }

  // 전시회 정보 수정
  static async modifyExhibition(exhibitionId, data) {
    const exhibitionRecord = await exhibitionModel.modifyExhibition(exhibitionId, data);
    
    return exhibitionRecord;
  }

  // 전시회 제거
  static async deleteExhibition(exhibitionId) {
    await exhibitionModel.deleteExhibition(exhibitionId);
  }

  // 전시회 좋아요 누르기 (no)
  // async addLike(exhibitionId, userId) {
  //   const { exhibition, isLikeExist} = await this.exhibitionModel.addLike(exhibitionId, userId);
  //       if(!isLikeExist) {
  //          await this.userModel.addLikeStudy(exhibitionId, userId);
  //       }
  //       return exhibition;
  // }

  // 전시회 좋아요 취소 (no)
  // async deleteLike(exhibitionId, userId) {
    
  // }

}