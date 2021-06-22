import axios from 'axios'

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '968a5ad2-5b1e-4553-a1f2-d04051eb6e28',
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
            return response.data
        })
    },

    // async follow(userId) {
    //     const response = instanse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    //     return response
    // },
    async follow(userId) {
        try {
            const response = await instanse.post(`follow/${userId}`)
            return response
        } catch (e) {
            console.log(e)
        }
    },
    async unfollow(userId) {
        const response = await instanse.delete(`follow/${userId}`)
        return response
    },
}
