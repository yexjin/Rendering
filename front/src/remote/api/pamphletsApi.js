import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const token = getDataFromStorage() === null ? null : getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer ${token}`,
}
   
export const create = (form) => 
    httpClient.post(`${urls.common}/pamphlets`, form, {headers});   // 팜플렛 등록

export const ongoingList = () => httpClient.get(`${urls.common}/pamphlets/ongoing`);  // 진행중인 팜플렛 목록 불러오기

export const pamphletById = (id) => httpClient.get(`${urls.common}/pamphlets/${id}`); // 선택한 팜플렛 get