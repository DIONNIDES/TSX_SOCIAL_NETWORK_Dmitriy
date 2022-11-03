import {AppThunkType, UsersPageType, UserType} from './redux-store';
import {Dispatch} from 'redux';
import {usersAPI} from '../DAL/API';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type FollowType = ReturnType<typeof followSuccess>;
export type UnfollowType = ReturnType<typeof unfollowSuccess>;
export type SetUsersType = ReturnType<typeof setUsers>;
export type SetTotalCountType = ReturnType<typeof setTotalCount>;
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>;
export type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetching>;
export type ToggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>;

export type UsersActionTypes =
    FollowType
    | UnfollowType
    | SetUsersType
    | SetTotalCountType
    | SetCurrentPageType
    | ToggleIsFetchingAC
    | ToggleIsFollowingProgressType

let initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionTypes) => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        }

        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...action.payload.users]}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.payload.totalCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter(userId => userId !== action.payload.userID)
            }
        }
        default: {
            return state
        }

    }

}

export const followSuccess = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}

export const unfollowSuccess = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

export const setTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}

export const toggleIsFollowingProgress = (userID: number, isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            userID,
            isFetching
        }
    } as const
}
//thunkCreator для запроса с пользователями, возвращает нам санку
export const requestUsers = (currentPage: number, pageSize: number): AppThunkType => async dispatch => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(toggleIsFetching(false));
}

//thunkCreator для добавления подписки, возвращает нам санку
export const followUser = (userID: number): AppThunkType => async dispatch => {
    dispatch(toggleIsFollowingProgress(userID, true));
    let data = await usersAPI.followUser(userID)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userID));
    }
    dispatch(toggleIsFollowingProgress(userID, false));
}

//thunkCreator для удаления подписки, возвращает нам санку
export const unfollowUser = (userID: number): AppThunkType => async dispatch => {
    dispatch(toggleIsFollowingProgress(userID, true));
    let data = await usersAPI.unfollowUser(userID)
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userID))
    }
    dispatch(toggleIsFollowingProgress(userID, false));
}