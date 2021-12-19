import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const token = getDataFromStorage() === null ? null : getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer ${token}`,
}

export const create = (form) => 
    httpClient.post(`${urls.common}/comments`, form, {headers});

export const getByExhibitionId = (id) => 
    httpClient.get(`${urls.common}/comments/${id}`);

export const remove = (id) => 
    httpClient.delete(`${urls.common}/comments/${id}`, {headers});