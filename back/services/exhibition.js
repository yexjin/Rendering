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