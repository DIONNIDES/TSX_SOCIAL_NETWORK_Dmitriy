import {ActionTypes} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI} from '../DAL/API';

const SET_USER_DATA = 'SET_USER_DATA';

export type SetUserDataType = ReturnType<typeof setUserData>;

export type AuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: AuthType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA: {
            debugger
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        default: {
            return state
        }

    }

}

export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login
        }
    } as const
}
//thunkCreator для запроса данных пользователя (аутентификация)
export const requestUserData = (id: number, email: string, login: string) => (dispatch: Dispatch) => {
    authAPI.getUserData(id, email, login).then(data=>{
        let {id, email, login} = data.data;
        if (data.resultCode === 0) {
            dispatch(setUserData(id, email, login));
        }
    })
}