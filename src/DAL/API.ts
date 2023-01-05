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
        return axiosInstance.get<UpdatedProfileType>(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus: (userId = 14933) => {
        return axiosInstance.get<string>(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus: (status: string) => {
        return axiosInstance.put<ResponseType>(`/profile/status`, {status: status})
            .then(response => response.data)
    },
    updateUserPhoto: (photoFile: any) => {
        let formData = new FormData();
        formData.append('image', photoFile)
        return axiosInstance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    updateUserProfile: (profile: UpdatedProfileType) => {
        return axiosInstance.put<ResponseType>(`profile`, profile)
            .then(response => response.data)
    },
}

export const authAPI = {
    getUserData: () => {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    },
    login: (email: string, password: string, rememberMe: boolean = false, captcha: string | null) => {
        return axiosInstance.post<any>('auth/login', {email, password, rememberMe, captcha})
    },
    logout: () => {
        return axiosInstance.delete('auth/login')
    },
    getCaptchaUrl: () => {
        return axiosInstance.get(`security/get-captcha-url`).then(response => response.data)
    },
}

export type ResponseType<T = {}> = {
    data: T,
    messages: [],
    fieldsErrors: [],
    resultCode: 0
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
}


export type UpdatedProfileType = {
    userId?: string;
    aboutMe?: string;
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    fullName?: string;
    contacts?: ContactsType
    photos?: PhotosType
}


export type PhotosType = {
    small?: string | undefined
    large?: string | undefined
}