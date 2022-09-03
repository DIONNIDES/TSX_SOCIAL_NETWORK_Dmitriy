import React from 'react';
import styles from './Post.module.css';
import user_post_ava from './../../../../../asets/user_post_ava.png';
import like_icon from './../../../../../asets/like_icon.png'


export type PostType = {
    id: string;
    message: string;
    time: string;
    likes: number;
}


export const Post = (props:PostType) => {
    return (
        <div className={styles.post_wrapper}>
            <div className={styles.user_post_ava}>
                <a href="#"><img src={user_post_ava} alt="user_ava"/></a>
            </div>
            <div className={styles.user_post_description}>
                <div className={styles.post_message}>
                    {props.message}
                </div>
                <div className={styles.post_time}>
                    {props.time}
                </div>
                <div className={styles.likes_count}>
                    <a href='#'><img src={like_icon}/></a><p>{props.likes}</p>
                </div>
            </div>
        </div>
    );
};
