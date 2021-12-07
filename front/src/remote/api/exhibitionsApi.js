import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const token = getDataFromStorage() === null ? null : getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
   
export const create = (form) => 
    httpClient.post(`${urls.common}/exhibitions`, form,{headers});