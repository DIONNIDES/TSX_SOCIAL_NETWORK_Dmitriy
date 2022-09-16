import React from 'react';
import {connect} from 'react-redux';
import {StateType, UserType} from '../../../redux/redux-store';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC} from '../../../redux/users-reducer';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    users:Array<UserType>
}

type MapDispatchToPropsType = {
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
}


const mapStateToProps = (state:StateType):MapStateToPropsType =>{
    return{
        users:state.usersPage.users
    }
}

const mapDispatchToProps =(dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
        follow:(userID:number)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:number)=>{
            dispatch(unfollowAC(userID));
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);