import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const accessToken = getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer ${accessToken}`,
  }
 
export const create = (form) => 
    httpClient.post(`${urls.common}/pamphlets`, form, {headers});