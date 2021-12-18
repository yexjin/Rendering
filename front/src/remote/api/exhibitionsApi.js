import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const token = getDataFromStorage() === null ? null : getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer ${token}`,
}

const headers_encode = {
  'Authorization' : `Bearer ${token}`,
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
}
   
export const create = (form) => 
    httpClient.post(`${urls.common}/exhibitions`, form,{headers});

export const ongoingExhibitionsList = () => httpClient.get(`${urls.common}/exhibitions/ongoing`);

export const exhibitionById = (id) => httpClient.get(`${urls.common}/exhibitions/${id}`);

export const exhibitionInfo = () => httpClient.get(`${urls.common}/exhibitions`, {headers});

export const exhibitionModify = (id, form) => httpClient.patch(`${urls.common}/exhibitions/${id}`, form, {headers_encode}); 