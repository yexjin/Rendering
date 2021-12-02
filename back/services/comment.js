import { default as commentModel} from '../models/comment.js';
import { CustomError } from "../CustomError.js";

export class CommentService {

  // 코멘트 생성
<<<<<<< HEAD
  static async createComment(userId, exhibitionId, commentDTO) {
    const { comment } = commentDTO;
    let _comment = await commentModel.create({
      comment,
      commenter: userId,
      exhibition: exhibitionId
=======
  static async createComment(userId, commentDTO) {
    const { comment, exhibition } = commentDTO;
    let _comment = await commentModel.create({
      comment,
      commenter: userId,
      exhibition
>>>>>>> b08a9d333499da63e768eb9112fed75d9011b8ec
    });

    return _comment;
  }

  // id를 이용하여 코멘트 정보 조회
  static async findCommentById(commentId) {
    return await commentModel.findCommentById(commentId);
  }

  // 전시회 id를 이용하여 코멘트 정보 조회
  static async findByExhibitionId(exhibitionId) {
    return await commentModel.findByExhibitionId(exhibitionId);
  }

  // 코멘트 수정
  static async modifyComment(commentId, commentDTO) {
    return await commentModel.modifyUser(commentId, commentDTO);;
  }

  // 코멘트 제거
  static async deleteComment(commentId) {
    return await commentModel.deleteComment(commentId);
  }

}