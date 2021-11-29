import config from "../config/index.js";
// import AWS from "aws-sdk";
import { CustomError } from "../CustomError.js";

export class PamphletService {
  constructor({ exhibitionModel, pamphletModel }) {
    this.exhibitionModel = exhibitionModel;
    this.pamphletModel = pamphletModel;
  }

  // id를 이용하여 팜플랫 정보 조회 (no)
  async findById(email) {
    const user = await this.userModel.findByEmail(email);
    return user;
  }

  // 팜플랫 정보 수정 (no)
  async modifyUser(id, data) {
    const userRecord = await this.userModel.modifyUser(id, data);
    return { userRecord };
  }

  // 팜플랫 제거 (no)
  async deleteUser(id) {
    const user = await this.userModel.findById(id);
  
    await user.removeExhibitions(); // 사용자 전시회 제거
    await user.removeComments(); // 사용자 댓글 제거
    await this.userModel.deleteUser(user.id); // 사용자 제거
  }

}