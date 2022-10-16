import React from 'react';
import styles from './Users.module.css';
import {User} from './User/User';
import {UserType} from '../../../redux/redux-store';
import {Button} from '../../common/Button/Button';
import userDefaulAva from './../../../asets/usersInitialAva.jpg';


export type PropsType = {
    users: Array<UserType>
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    totalCount: number
    pageSize: number
    currentPage: number
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    onCurrentPageHandler: (page: number) => void
    isFetching:boolean
    toggleIsFetching: (isFetching:boolean)=>void
    followingInProgress:Array<number>
    toggleIsFollowingProgress:(userID:number,isFetching: boolean) => void
}

export const Users: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    console.log(pagesCount)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let users = props.users.map(u => <User key={u.id} id={u.id} name={u.name + u.id}
                                           userStatus={u.userStatus} followed={u.followed}
                                           location={u.location} photos={u.photos.small ? u.photos.small : userDefaulAva}
                                           wasOnline={u.wasOnline}
                                           followUser={() => props.followUser(u.id)} unfollowUser={() => props.unfollowUser(u.id)}
                                           isFetching={props.isFetching}
                                           followingInProgress={props.followingInProgress}
                                           toggleIsFetching={props.toggleIsFetching}
                                           toggleIsFollowingProgress={props.toggleIsFollowingProgress}

    />)
    return (

        <>
            <div className={styles.users_wrapper}>
                <div className={styles.paginatorWrap}>
                    {pages.map(p => <Button className={p === props.currentPage ? styles.currentPage : ''}
                                            title={p.toString()} callback={() => props.onCurrentPageHandler(p)}/>)}
                </div>
                {users.length > 0
                    ? users
                    : 'There are currently no users...'
                }
            </div>
        </>

    );
}


//FUNCTIONAL COMPONENT + USE EFFECT

/*

export type PropsType = {
    users:Array<UserType>
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
}

export const Users = (props:PropsType) => {/!**!/
    useEffect(()=>{

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            props.setUsers(response.data.items);
            debugger
        })

    }, [])

    const users = props.users.map(u=><User key ={u.id} id={u.id} name={u.name}
                                           userStatus={u.userStatus} followed={u.followed}
                                           location={u.location} photos={u.photos && u.photos.small} wasOnline={u.wasOnline}
                                           follow={()=>props.follow(u.id)} unfollow={()=>props.unfollow(u.id)}
    />)
    return (
        <div className={styles.users_wrapper} >

            {users.length > 0
                ? users
                : 'There are currently no users...'
            }
        </div>
    );
};

*/
