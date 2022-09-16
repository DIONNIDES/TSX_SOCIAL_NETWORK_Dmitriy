import {ActionTypes, UsersPageType, UserType} from './redux-store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type FollowType = ReturnType<typeof followAC>;
export type UnfollowType = ReturnType<typeof unfollowAC>;
export type SetUsersType = ReturnType<typeof setUsersAC>;

let initialState = {
    users: [
    ] as Array<UserType>
}

export const usersReducer = (state:UsersPageType = initialState, action:ActionTypes) =>{
    switch (action.type){
        case FOLLOW:{
            return {...state, users:state.users.map(u=>u.id===action.payload.userID ? {...u, followed:true } : u) }
        }

        case UNFOLLOW:{
            return {...state, users:state.users.map(u=>u.id===action.payload.userID ? {...u, followed:false } : u) }
        }
        case SET_USERS:{
    return {...state, users:[...state.users, ...action.payload.users]}
        }
        default:{
            return state
        }

    }

}

export const followAC = (userID:number) =>{
    return{
        type:FOLLOW,
        payload:{
            userID
        }
    }as const
}

export const unfollowAC = (userID:number) =>{
    return{
        type:UNFOLLOW,
        payload:{
            userID
        }
    }as const
}

export const setUsersAC = (users:Array<UserType>) =>{
    return{
        type:SET_USERS,
        payload:{
            users
        }
    }as const
}