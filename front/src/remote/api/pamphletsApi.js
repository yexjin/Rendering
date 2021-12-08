import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const token = getDataFromStorage() === null ? null : getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjM4OTg1MDI5LCJleHAiOjE2NDAxOTQ2MjksImlzcyI6IlJlbmRlcmluZyJ9.FvewYUU52ttqBNTLmN30GER9a4E9dOywb0ihHW0TxWs`,
}
   
export const create = (form) => 
    httpClient.post(`${urls.common}/pamphlets`, form, {headers});   // 팜플렛 등록

export const ongoingList = () => httpClient.get(`${urls.common}/pamphlets/ongoing`);  // 진행중인 팜플렛 목록 불러오기