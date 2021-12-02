import { default as pamphletModel} from '../models/pamphlet.js';
import config from "../config/index.js";
import { CustomError } from "../CustomError.js";

export class PamphletService {

   // 팜플랫 등록!
<<<<<<< HEAD
   static async createPamphlet(exhibitionId, pamphletDTO) {
    const { title, subtitle, side_text, emphasis_text, text, color } = pamphletDTO;
=======
   static async createPamphlet(pamphletDTO) {
    const { exhibition, title, subtitle, side_text, emphasis_text, text, color } = pamphletDTO;
>>>>>>> b08a9d333499da63e768eb9112fed75d9011b8ec
    let pamphlet = await pamphletModel.create({
      title,
      subtitle,
      side_text,
      emphasis_text,
      text,
      color,
<<<<<<< HEAD
      exhibition: exhibitionId
=======
      exhibition
>>>>>>> b08a9d333499da63e768eb9112fed75d9011b8ec
    });

    return pamphlet;
  }

  // id를 이용하여 팜플랫 정보 조회
  static async findPamphletById(pamphletId) {
    return await pamphletModel.findPamphletById(pamphletId);
  }

  // 진행 중인 전시의 팜플랫 리스트
  static async findOngoingPamphlets() {
    return await pamphletModel.findOngoingPamphlets();
  }

  // 팜플랫 정보 수정
  static async modifyPamphlet(pamphletId, pamphletDTO) {
    return await pamphletModel.modifyPamphlet(pamphletId, pamphletDTO);
  }

  // 팜플랫 제거
  static async deletePamphlet(pamphletId) {
    await pamphletModel.deletePamphlet(pamphletId);
  }

}