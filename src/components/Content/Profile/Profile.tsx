import React from 'react';
import styles from './Profile.module.css';
import {Ava} from './Ava/Ava';
import {Description, UserInfoType} from './Description/Description';
import {MyPosts} from './MyPosts/MyPosts';
import {PostType} from './MyPosts/Post/Post';

type ProfilePropsType = {
    posts: Array<PostType>;
    usersCharacteristics: Array<UserInfoType>
}

export const Profile = (props:ProfilePropsType) => {
    return (
                <div className={styles.profile_wrapper}>
            <Ava usersCharacteristics={props.usersCharacteristics}/>
            <Description usersCharacteristics={props.usersCharacteristics}/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};
