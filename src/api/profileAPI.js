import axios from 'axios'

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '968a5ad2-5b1e-4553-a1f2-d04051eb6e28',
    },
})

export const profileAPI = {
    async getProfile(userId) {
        const response = await instanse.get(`profile/${userId}`)
        return response
    },
    async getStatus(userId) {
        const response = await instanse.get(`profile/status/${userId}`)
        return response
    },

    async updateStatus(status) {
        debugger
        return instanse.put(`profile/status/`, {status})
    },

    // async updateStatus(status) {
    //     try {
    //         const route = `profile/status`
    //         const payload = {status}
    //         const response = await instanse.put(route, payload)
    //         return response
    //     } catch (err) {
    //         return errroLogging(err)
    //     }
    // },
}

// function errroLogging(err) {
//     console.log('\n\n========================')
//     console.warn('API: ERROR', err)
//     console.log('========================\n\n')
//     return {
//         data: null,
//     }
// }
