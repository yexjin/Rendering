import { default as userModel} from '../models/user.js';
import { CustomError } from "../CustomError.js";

export class UserService {

  /**
   *  사용자 생성
   */
   static async createUser(userDTO) {
    const { name, job, password, email } = userDTO;
    const user = await userModel.create({
      name,
      password,
      job,
      email,
  });
    
    return user;
  }

  /**
   *  사용자 정보 조회(By Id)
   */
  static async findUserById(userId) {
    const user = await userModel.findById(userId);
    return user;
  }

  static async findUserByEmail(email) {
    const user = await userModel.findByEmail(email);
    return user;
  }

  /**
   *  사용자 정보 수정
   */
  static async modifyUser(userId, userDTO) {
    return await userModel.modifyUser(userId, userDTO);
  }

  /**
   *  사용자 제거
   */
  static async deleteUser(userId) {
    return await userModel.deleteUser(userId);
  }

}