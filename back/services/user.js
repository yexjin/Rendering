import config from "../config/index.js";
// import AWS from "aws-sdk";
import { CustomError } from "../CustomError.js";

export class UserService {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  // email를 이용하여 사용자 정보를 조회
  async findByEmail(email) {
    const users = await this.userModel.findByEmail(email);
    return users;
  }

  // 사용자 정보를 수정한다.
  async modifyUser(id, user) {
    const userRecord = await this.userModel.modifyUser(id, user);
    return { userRecord };
  }

  async deleteUser(id) {
    // 사용자가 호스팅한 전시회 제거 (N)
    await this.studyModel.deleteMany({ "author": id});

    // 사용자가 작성한 코멘트 제거 (N)
    await this.studyModel.findOneAndUpdate({ comments: {$elemMatch: { author : id }}},
      { $pull: { comments: { author: id } } });
    
  }

  // 사용자가 호스팅한 전시회 리스트를 조회한다. (N)
  async findUserLikes(id) {
    const userLikes = await this.userModel.findById(id)
    .populate({
      path: 'likeStudies',
      match: { isDeleted: false},
      options: { sort: { createdAt: -1 } }
    })
    .select('likeStudies')
    return userLikes;
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