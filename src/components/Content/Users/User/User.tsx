import React from 'react';
import styles from './User.module.css'
import {Button} from '../../../common/Button/Button';
import {UserType} from '../../../../redux/redux-store';
import {NavLink} from 'react-router-dom';

export type PropsType = UserType & {
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    isFetching:boolean
    followingInProgress:Array<number>
    toggleIsFetching:(isFetching:boolean)=>void
    toggleIsFollowingProgress:(userID:number,isFetching: boolean) => void

}

export const User = (props: PropsType) => {

    const followHandler = () => {
       props.followUser(props.id)
    }
    const unfollowHandler = () => {
        props.unfollowUser(props.id)
    }
    const finalCallback = props.followed ? unfollowHandler : followHandler;
    const finalTitle = props.followed ? 'Unfollow' : 'Follow';
    const disabledButton = props.followingInProgress.some(id => id === props.id)

    return (
       <>
           {
                   <div className={styles.user_wrapper}>
                       <div className={styles.user_ava_block}>
                           <NavLink to={'/profile/' + String(props.id)}> <img src={props.photos}/></NavLink>
                           <Button disabled={disabledButton} title={finalTitle} callback={finalCallback} className={styles.button_follow_unfollow}/>
                       </div>
                       <div className={styles.user_description_block}>
                           <div className={styles.user_name}>
                               {props.name}
                           </div>
                           <div className={styles.user_location}>
                               {`${'city'}, ${'country'}`}
                           </div>
                           <div className={styles.user_last_data}>
                               {props.wasOnline ? props.wasOnline : '22:59'}
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