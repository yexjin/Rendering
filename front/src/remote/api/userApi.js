import urls from '../urls'
import httpClient from '../httpClient'

export const signup = (form) => 
    httpClient.post(`${urls.common}/signup`, form);
export const login = (form) => 
    httpClient.post(`${urls.common}/login`, form);

export const getUser = (id) =>
    httpClient.get(`${urls.common}/users/${id}`);