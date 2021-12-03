import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const accessToken = getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer ${accessToken}`,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
   
export const create = (form) => 
    httpClient.post(`${urls.common}/exhibitions`, form, {headers});