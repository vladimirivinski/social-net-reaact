import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '815906c6-b718-4f56-b3f0-1350b2b55765',
    },
})

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
}
