import React from 'react';
import styles from './User.module.css'
import {Button} from '../../../common/Button/Button';
import {UserType} from '../../../../redux/redux-store';
import {NavLink} from 'react-router-dom';

export type PropsType = UserType & {
    id:number
    followed:boolean
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    name:string
    photos:string
    wasOnline:string|undefined
}

export const User = ({
                            id,
                         followUser,
                         unfollowUser,
                         followingInProgress,
                         followed,
                         name,
                         photos,
                         wasOnline
}: PropsType) => {

    const followHandler = () => {
        followUser(id)
    }
    const unfollowHandler = () => {
        unfollowUser(id)
    }
    const finalCallback = followed ? unfollowHandler : followHandler;
    const finalTitle = followed ? 'Unfollow' : 'Follow';
    const disabledButton = followingInProgress.some(id => id === id)

    return (
        <>
            {
                <div className={styles.user_wrapper}>
                    <div className={styles.user_ava_block}>
                        <NavLink to={'/profile/' + String(id)}> <img src={photos}/></NavLink>
                        <Button disabled={disabledButton} title={finalTitle} callback={finalCallback}
                                className={styles.button_follow_unfollow}/>
                    </div>
                    <div className={styles.user_description_block}>
                        <div className={styles.user_name}>
                            {name}
                        </div>
                        <div className={styles.user_location}>
                            {`${'city'}, ${'country'}`}
                        </div>
                        <div className={styles.user_last_data}>
                            {wasOnline ? wasOnline : '22:59'}
                        </div>
                        <div className={styles.user_description}>
                            <p>
                                {'props.userStatus'}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};