import {RootStateType} from '../redux/redux-store';

export const getUserID = (state:RootStateType) =>{
    return state.auth.id;
}
export const getEmail = (state:RootStateType) =>{
    return state.auth.email;
}
export const getLogin= (state:RootStateType) =>{
    return state.auth.login;
}

export const getIsAuth= (state:RootStateType) =>{
    return state.auth.isAuth;
}

