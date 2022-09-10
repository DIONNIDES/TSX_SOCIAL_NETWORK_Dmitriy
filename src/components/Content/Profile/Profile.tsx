import React from 'react';
import styles from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {AvaContainer} from './Ava/AvaContainer';
import {DescriptionContainer} from './Description/DescriptionContainer';


export const Profile = () => {
    return (
        <div className={styles.profile_wrapper}>
            <AvaContainer />
            <DescriptionContainer />
            <MyPostsContainer
            />
        </div>
    );
};
