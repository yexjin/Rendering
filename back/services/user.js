import config from "../config/index.js";
// import AWS from "aws-sdk";
import { CustomError } from "../CustomError.js";

export class UserService {
  constructor({ userModel, exhibitionModel, commentModel }) {
    this.userModel = userModel;
    this.exhibitionModel = exhibitionModel;
    this.commentModel = commentModel;
  }

  // id를 이용하여 사용자 정보 조회
  async findById(id) {
    const user = await this.userModel.findById(id);
    return user;
  }

  // email를 이용하여 사용자 정보 조회
  async findByEmail(email) {
    const user = await this.userModel.findByEmail(email);
    return user;
  }

  // 사용자 정보 수정
  async modifyUser(id, data) {
    const userRecord = await this.userModel.modifyUser(id, data);
    return userRecord;
  }

  // 사용자 제거
  async deleteUser(id) {
    const user = await this.userModel.findById(id);
  
    await user.removeExhibitions(); // 사용자 전시회 제거
    await user.removeComments(); // 사용자 댓글 제거
    await this.userModel.deleteUser(user.id); // 사용자 제거
  }

  // 사용자가 호스팅한 전시회 리스트 조회
  async findUserExhibitions(id) {
    const exhibitions = await this.userModel.findeUserExhibitions(id);

    return exhibitions;
  }

  // 사용자가 작성한 코멘트 리스트 조회
  async findUserComments(id) {
    const user = await this.userModel.findById(id);
  
    return await user.getComments();
  }

  // S3 Pre-Sign Url을 발급한다.
//   async getPreSignUrl(fileName) {
//     const s3 = new AWS.S3({
//       accessKeyId: config.S3AccessKeyId,
//       secretAccessKey: config.S3SecretAccessKey,
//       region: config.S3BucketRegion,
//     });

//     const params = {
//       Bucket: config.S3BucketName,
//       Key: fileName,
//       Expires: 60 * 60 * 3,
//     };

//     const signedUrlPut = await s3.getSignedUrlPromise("putObject", params);
//     return signedUrlPut;
//   }

}