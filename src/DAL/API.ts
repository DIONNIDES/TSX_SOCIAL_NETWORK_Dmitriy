import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a2c89266-3e53-449e-830d-ead973bdb3fa'
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser: (userID: number) => {
        return axiosInstance.post(`follow/${userID}`)
            .then(response => response.data)
    },
    unfollowUser: (userID: number) => {
        return axiosInstance.delete(`follow/${userID}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile: (userId = 14933) => {
        return axiosInstance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus: (userId = 14933) => {
        return axiosInstance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus: (status:string) => {
        return axiosInstance.put(`/profile/status` , {status:status})
            .then(response => response.data)
    }
}

export const authAPI = {
    getUserData: () => {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    }
}