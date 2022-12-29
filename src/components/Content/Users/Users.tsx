import React from 'react';
import styles from './Users.module.css';
import {User} from './User/User';
import {UserType} from '../../../redux/redux-store';
import userDefaulAva from './../../../asets/usersInitialAva.jpg';
import {Paginator} from '../../common/Paginator/Paginator';

export type PropsType = {
    users: Array<UserType>
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    onCurrentPageHandler: (page: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<number>
    toggleIsFollowingProgress: (userID: number, isFetching: boolean) => void
}

export const Users: React.FC<PropsType> = ({
                                               users,
                                               followUser,
                                               unfollowUser,
                                               totalCount,
                                               pageSize,
                                               currentPage,
                                               onCurrentPageHandler,
                                               isFetching,
                                               followingInProgress,
                                               ...restProps
}) => {

    let mappedUsers = users.map(u => <User key={u.id} id={u.id} name={u.name + u.id}
                                           userStatus={u.userStatus} followed={u.followed}
                                           location={u.location}
                                           photos={u.photos.small ? u.photos.small : userDefaulAva}
                                           wasOnline={u.wasOnline}
                                           followUser={() => followUser(u.id)}
                                           unfollowUser={() => unfollowUser(u.id)}
                                           isFetching={isFetching}
                                           followingInProgress={followingInProgress}

    />)
    return (

        <>
            <div className={styles.users_wrapper}>
                <Paginator totalCount={totalCount}
                           pageSize={pageSize}
                           currentPage={currentPage}
                           onCurrentPageHandler={onCurrentPageHandler}
                />
                {mappedUsers.length > 0
                    ? mappedUsers
                    : 'There are currently no users...'
                }
            </div>
        </>

    );
}
