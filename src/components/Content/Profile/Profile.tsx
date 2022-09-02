import React from 'react';
import styles from './Profile.module.css';
import {StoreType} from '../../../redux/redux-store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {AvaContainer} from './Ava/AvaContainer';
import {DescriptionContainer} from './Description/DescriptionContainer';

type ProfilePropsType = {
    store:StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.profile_wrapper}>
            <AvaContainer store={props.store}/>
            <DescriptionContainer store={props.store}/>
            <MyPostsContainer store={props.store}
            />
        </div>
    );
};
