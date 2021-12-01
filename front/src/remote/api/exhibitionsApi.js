import urls from '../urls'
import httpClient from '../httpClient'

const headers = {
    'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRwd2xzMDQyMUBzZW91bHRlY2guYWMua3IiLCJpYXQiOjE2MzgzNzA1ODgsImV4cCI6MTYzODM3NDE4OCwiaXNzIjoiUmVuZGVyaW5nIn0.8XaNTPL8i4kNMX2AWJ8Pi_7rIo_DmS9mMOt-6Ia8QPQ'
}
   
export const create = (form) => 
    httpClient.post(`${urls.common}/exhibitions`, form, {headers});