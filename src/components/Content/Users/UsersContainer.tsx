import React from 'react';
import {connect} from 'react-redux';
import {StateType, UserType} from '../../../redux/redux-store';
import {UsersAPI} from './UsersAPI';
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from '../../../redux/users-reducer';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    users:Array<UserType>
    totalCount: number
    pageSize: number
    currentPage:number
}

type MapDispatchToPropsType = {
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
    setTotalCount:(totalCount:number)=>void
    setCurrentPage:(currentPage:number)=>void
}


const mapStateToProps = (state:StateType):MapStateToPropsType =>{
    return{
        users:state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage
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
        },
        setTotalCount:(totalCount:number)=>{
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);