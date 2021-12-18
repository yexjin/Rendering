import urls from '../urls'
import httpClient from '../httpClient'
import {getDataFromStorage} from "../../utils/storage";

const token = getDataFromStorage() === null ? null : getDataFromStorage().accessToken;

const headers = {
    'Authorization' : `Bearer ${token}`,
}

export const create = (form) => httpClient.post(`${urls.common}/works`, {headers}, form);

export const worksById = (id) => httpClient.get(`${urls.common}/works/${id}`);