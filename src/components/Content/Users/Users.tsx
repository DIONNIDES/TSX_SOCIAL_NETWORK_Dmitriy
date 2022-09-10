import React, {useEffect} from 'react';
import styles from './Users.module.css';
import {User} from './User/User';
import {UserType} from '../../../redux/redux-store';
import {v1} from 'uuid';
import usersAva from '../../../asets/usersInitialAva.jpg';

export type PropsType = {
    users:Array<UserType>
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:Array<UserType>)=>void
}

export const Users = (props:PropsType) => {/**/
    useEffect(()=>{
        props.setUsers([
            {id:v1(), photoUrl:usersAva, followed:false, userName:'Dimas K.',
                location:{country:'Ukraine' ,city:'Mykolaiv'}, userStatus:'Its my status...', wasOnline:'20:58'},
            {id:v1(), photoUrl:usersAva, followed:false, userName:'Kolyan P.',
                location:{country:'Ukraine' ,city:'Mykolaiv'}, userStatus:'Its my status...', wasOnline:'20:59'},
            {id:v1(), photoUrl:usersAva, followed:false, userName:'Ivan M.',
                location:{country:'Ukraine' ,city:'Mykolaiv'}, userStatus:'Its my status...', wasOnline:'23:45'},
        ])
    }, [])

    const users = props.users.map(u=><User key ={u.id} id={u.id} userName={u.userName}
                                           userStatus={u.userStatus} followed={u.followed}
                                           location={u.location} photoUrl={u.photoUrl} wasOnline={u.wasOnline}
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

