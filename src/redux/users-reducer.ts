import {ActionTypes, UsersPageType, UserType} from './redux-store';
import {v1} from 'uuid';
import usersAva from './../asets/usersInitialAva.jpg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type FollowType = ReturnType<typeof followAC>;
export type UnfollowType = ReturnType<typeof unfollowAC>;
export type SetUsersType = ReturnType<typeof setUsercAC>;

let initialState = {
    users: [
        /*{id:v1(), photoUrl:usersAva, followed:false, userName:'Dimas K.',
            location:{country:'Ukraine' ,city:'Mykolaiv'}, userStatus:'Its my status...', wasOnline:'20:58'},
        {id:v1(), photoUrl:usersAva, followed:false, userName:'Kolyan P.',
            location:{country:'Ukraine' ,city:'Mykolaiv'}, userStatus:'Its my status...', wasOnline:'20:59'},
        {id:v1(), photoUrl:usersAva, followed:false, userName:'Ivan M.',
            location:{country:'Ukraine' ,city:'Mykolaiv'}, userStatus:'Its my status...', wasOnline:'23:45'},*/
    ]
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

export const followAC = (userID:string) =>{
    return{
        type:FOLLOW,
        payload:{
            userID
        }
    }as const
}

export const unfollowAC = (userID:string) =>{
    return{
        type:UNFOLLOW,
        payload:{
            userID
        }
    }as const
}

export const setUsercAC = (users:Array<UserType>) =>{
    return{
        type:SET_USERS,
        payload:{
            users
        }
    }as const
}