import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const token = getDataFromStorage() === null ? null : getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjM4OTg1MDI5LCJleHAiOjE2NDAxOTQ2MjksImlzcyI6IlJlbmRlcmluZyJ9.FvewYUU52ttqBNTLmN30GER9a4E9dOywb0ihHW0TxWs`,
}

const headers_encode = {
  'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjM4OTg1MDI5LCJleHAiOjE2NDAxOTQ2MjksImlzcyI6IlJlbmRlcmluZyJ9.FvewYUU52ttqBNTLmN30GER9a4E9dOywb0ihHW0TxWs`,
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
}
   
export const create = (form) => 
    httpClient.post(`${urls.common}/exhibitions`, form,{headers});

export const ongoingExhibitionsList = () => httpClient.get(`${urls.common}/exhibitions/ongoing`);

export const exhibitionById = (id) => httpClient.get(`${urls.common}/exhibitions/${id}`);

export const exhibitionModify = (id, form) => httpClient.patch(`${urls.common}/exhibitions/${id}`, form, {headers_encode});

export const exhibitionInfo = () => httpClient.get(`${urls.common}/exhibitions/`, {headers});