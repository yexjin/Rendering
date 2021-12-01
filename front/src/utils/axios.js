import axios from "axios";
import {getDataFromStorage} from "../utils/storage";
const DOMAIN = "http://localhost:3000";

axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

const accessToken = getDataFromStorage().accessToken;

const headers = {
  'Authorization' : `Bearer ${accessToken}`
}

export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
    headers
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
