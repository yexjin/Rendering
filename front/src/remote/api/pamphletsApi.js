import urls from '../urls'
import httpClient from '../httpClient'

// export const login = (form) => 
//     httpClient.post(`${urls.user}/login`, form);

  
export const create = (form) => 
    httpClient.post(`${urls.common}/pamphlets`, form);