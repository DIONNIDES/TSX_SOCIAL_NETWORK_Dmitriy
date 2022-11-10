import {RootStateType} from '../redux/redux-store';

export const getProfile = (state:RootStateType) =>{
    return state.profilePage.profile;
}
export const getAuthorizedUserID= (state:RootStateType) =>{
    return state.auth.id;
}
