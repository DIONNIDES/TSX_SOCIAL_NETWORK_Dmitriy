import React from 'react';
import styles from './Profile.module.css';
import {Ava} from './Ava/Ava';
import {Description} from './Description/Description';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfilePageType} from '../../../redux/store';

type ProfilePropsType = {
    profilePage:ProfilePageType
    addPost:()=>void
    updateNewPostText:(postText:string)=>void
}

export const Profile = (props:ProfilePropsType) => {
    return (
                <div className={styles.profile_wrapper}>
            <Ava usersCharacteristics={props.profilePage.usersCharacteristics}/>
            <Description addPost={props.addPost}
                usersCharacteristics={props.profilePage.usersCharacteristics}/>
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};
