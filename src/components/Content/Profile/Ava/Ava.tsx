import React from 'react';
import styles from './Ava.module.css';
import ava from './../../../../asets/user_post_ava.png';


type AvaPropsType = {
    profile:any
}
export const Ava = (props:AvaPropsType) => {
    return (
        <div className={styles.ava_wrapper}>
            <div className={styles.main_ava}>
                <a href="#"><img src={props.profile.photos && props.profile.photos.large? props.profile.photos.large:ava }/></a>
            </div>
            <div className={styles.main_description_wrapper}>
                <div className={styles.main_description}>
                    <div className={styles.main_title}>
                        <h1>{props.profile.fullName}</h1>
                    </div>
                    <div className={styles.main_status}>
                        <p>{props.profile.aboutMe}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};
