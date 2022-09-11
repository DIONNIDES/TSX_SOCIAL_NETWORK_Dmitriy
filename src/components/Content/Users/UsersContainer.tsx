import React from 'react';
import {connect} from 'react-redux';
import {ActionTypes, StateType, UserType} from '../../../redux/redux-store';
import {Users} from './Users';
import {followAC, setUsercAC, unfollowAC} from '../../../redux/users-reducer';
import {PostType} from '../Profile/MyPosts/Post/Post';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    users:Array<UserType>
}

type MapDispatchToPropsType = {
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:Array<UserType>)=>void
}


const mapStateToProps = (state:StateType):MapStateToPropsType =>{
    return{
        users:state.usersPage.users
    }
}

const mapDispatchToProps =(dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
        follow:(userID:string)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:string)=>{
            dispatch(unfollowAC(userID));
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsercAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);