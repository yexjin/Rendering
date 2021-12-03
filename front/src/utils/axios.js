import axios from "axios";
import { getDataFromStorage } from '../utils/storage'

const DOMAIN = "http://localhost:3000";
const accessToken = getDataFromStorage().accessToken;


export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};