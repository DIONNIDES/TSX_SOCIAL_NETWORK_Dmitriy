import React from 'react';
import {connect} from 'react-redux';
import {ActionTypes, StateType, UserType} from '../../../redux/redux-store';
import {Users} from './Users';
import {followAC, setUsercAC, unfollowAC} from '../../../redux/users-reducer';

const mapStateToProps = (state:StateType) =>{
    return{
        users:state.usersPage.users
    }
}

const mapDispatchToProps =(dispatch:(action:ActionTypes)=>void)=>{
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