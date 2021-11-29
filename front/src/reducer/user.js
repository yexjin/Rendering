import { request } from "../utils/axios";

const USER_URL = "/api/user";

export function registerUser(dataToSubmit) {
  const data = request("post", USER_URL + "/register", dataToSubmit);

  return {
    payload: data,
  };
}