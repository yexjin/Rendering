import config from "../config/index.js";
// import AWS from "aws-sdk";
import { CustomError } from "../CustomError.js";

export class ExhibitionService {
  constructor({ exhibitionModel, workModel, pamphletModel, userModel, commentModel }) {
    this.exhibitionModel = exhibitionModel;
    this.workModel = workModel;
    this.pamphletModel = pamphletModel;
    this.userModel = userModel;
    this.commentModel = commentModel;
  }

  // 전시회 등록!
  async registerExhibition(id, exhibitionDTO) {
    const { exhibition_name, description, host_name, start_date, end_date, main_image, sub_image } = exhibitionDTO;
    let exhibition = await this.exhibitionModel.create({
      manager: id,
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

  // id를 이용하여 전시회 정보 조회 (no)
  async findById(id) {
    const exhibition = await this.exhibitionModel.findById(id);
    return user;
  }

  // 전시회 정보 수정 (no)
  async modifyUser(id, data) {
    const userRecord = await this.userModel.modifyUser(id, data);
    return { userRecord };
  }

  // 전시회 제거 (no)
  async deleteUser(id) {
    const user = await this.userModel.findById(id);
  
    await user.removeExhibitions(); // 사용자 전시회 제거
    await user.removeComments(); // 사용자 댓글 제거
    await this.userModel.deleteUser(user.id); // 사용자 제거
  }

  // 전시회 작품 리스트 조회 (no)
  async findUserExhibition(id) {
    const user = await this.userModel.findById(id);
  
    return await user.getComments();
  }

  // 전시회 코멘트 리스트 조회 (no)
  async findUserExhibition(id) {
    const user = await this.userModel.findById(id);
  
    return await user.getComments();
  }

  // 전시회 좋아요 누르기 (no)
  async findUserExhibition(id) {
    const user = await this.userModel.findById(id);
  
    return await user.getExhibitions();
  }

}