import React from 'react';
import styles from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {AvaContainer} from './Ava/AvaContainer';
import {DescriptionContainer} from './Description/DescriptionContainer';

type ProfilePropsType = {
    isOwner:boolean
}

export const Profile = ({isOwner}:ProfilePropsType) => {
    return (
        <div className={styles.profile_wrapper}>
            <AvaContainer isOwner={isOwner} />
            <DescriptionContainer />
            <MyPostsContainer
            />
        </div>
    );
};
