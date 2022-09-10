import React from 'react';
import styles from './User.module.css'
import userAva from './../../../../asets/usersInitialAva.jpg';
import {Button} from '../../../common/Button/Button';
import {UserType} from '../../../../redux/redux-store';

export type PropsType = UserType & {
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
}

export const User = (props:PropsType) => {

    const followHandler = ()=>{
        props.follow(props.id)
    }
    const unfollowHandler = ()=>{
        props.unfollow(props.id)
    }

    const finalCallback = props.followed ? unfollowHandler:followHandler;
    const finalTitle = props.followed ? 'Unfollow' :'Follow';
    return (
        <div className={styles.user_wrapper}>
            <div className={styles.user_ava_block}>
                <img src={userAva}/>
                <Button title={finalTitle} callback={finalCallback} className={styles.button_follow_unfollow}/>
            </div>
            <div className={styles.user_description_block}>
                <div className={styles.user_name}>
                    {props.userName}
                </div>
                <div className={styles.user_location}>
                    {`${props.location.city}, ${props.location.country}`}
                </div>
                <div className={styles.user_last_data}>
                    {props.wasOnline}
                </div>
                <div className={styles.user_description}>
                    <p>
                        {props.userStatus}
                    </p>
                </div>
            </div>
        </div>
    );
};