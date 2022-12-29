import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {StateType, UserType} from '../../../redux/redux-store';
import {UsersAPI} from './UsersAPI';
import {
    followUser, requestUsers,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollowUser
} from '../../../redux/usersReducer';
import {wIthAuthRedirect} from '../../HOK/WIthAuthRedirect';
import {compose} from 'redux';


type MapStateToPropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = compose<ComponentType>(
    (connect(mapStateToProps, {
        followUser, unfollowUser, setUsers, setTotalCount,
        setCurrentPage, toggleIsFetching, toggleIsFollowingProgress,
        requestUsers
    })),
    wIthAuthRedirect
)(UsersAPI);