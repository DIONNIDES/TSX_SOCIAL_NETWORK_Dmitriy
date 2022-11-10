import {requestUserData} from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>;

export type AppType = {
    isInitialized: boolean
}

export type AuthActionTypes = InitializedSuccessActionType

let initialState: AppType = {
    isInitialized: false
}


export const appReducer = (state: AppType = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                isInitialized: true
            }
        }
        default: {
            return state
        }

    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}
//thunkCreator для запроса данных пользователя (аутентификация)
export const initializeApp = (): any => async (dispatch:any) => {
    let promise = dispatch(requestUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    });

}

