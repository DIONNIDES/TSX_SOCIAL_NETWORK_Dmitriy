import {authAPI} from '../DAL/API';
import {AppThunkType} from './redux-store';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

export type SetUserDataType = ReturnType<typeof setUserData>;
export type GetCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>;

export type AuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captcha: null | string
}

export type AuthActionTypes = SetUserDataType | GetCaptchaUrlSuccessType

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}


export const authReducer = (state: AuthType = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default: {
            return state
        }

    }
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl
        }
    } as const
}


//thunkCreator для запроса данных пользователя (аутентификация)
export const requestUserData = (): AppThunkType => async dispatch => {
    let data = await authAPI.getUserData()
    let {id, email, login} = data.data;
    if (data.resultCode === 0) {
        dispatch(setUserData(id, email, login, true));
    }
}

//thunkCreator для создания новой сессии авторизованного пользователя (авторизация)
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunkType => async dispatch => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(requestUserData());
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaURL());
    }
}

//thunkCreator для удаление сесси авторизованного поьзователя(вылогинивание)
export const logout = (): AppThunkType => async dispatch => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}


//thunkCreator для запроса урла капчи
export const getCaptchaURL = (): AppThunkType => async dispatch => {
    const response = await authAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
