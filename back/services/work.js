import { default as workModel} from '../models/work.js';
import { CustomError } from "../CustomError.js";

export class WorkService {

  // 작품 등록!
  static async registerWork(exhibitionId, workDTO) {
    const { content, thumbnail } = workDTO;
    let work = await workModel.create({
      content,
      thumbnail,
      exhibition: exhibitionId
    });

    return work;
  }

  // id를 이용하여 작품 정보 조회
  static async findWorkById(workId) {
    return await workModel.findWorkById(workId);
  }

  // 전시회 id를 이용하여 작품 정보 조회
  static async findWorksByExhibitionId(exhibitionId) {
    return await workModel.findWorksByExhibitionId(exhibitionId);
  }

  // 작품 정보 수정
  static async modifyWork(workId, workDTO) {
    return await workModel.modifyWork(workId, workDTO);
  }

  // 작품 제거
  static async deleteWork(workId) {
    return await workModel.deleteWork(workId);
  }

}