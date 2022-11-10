import {RootStateType} from '../redux/redux-store';

export const getUsers = (state:RootStateType) =>{
    return state.usersPage.users;
}
export const getUsersTotalCount = (state:RootStateType) =>{
    return state.usersPage.totalCount;
}
export const getUsersPageSize= (state:RootStateType) =>{
    return state.usersPage.pageSize;
}
export const getUsersCurrentPage = (state:RootStateType) =>{
    return state.usersPage.currentPage;
}
export const getIsFetching = (state:RootStateType) =>{
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state:RootStateType) =>{
    return state.usersPage.followingInProgress;
}

