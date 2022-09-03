import React from 'react';
import styles from './Ava.module.css';
import my_ava from './../../../../asets/my_photo.png';
import {UserInfoType} from '../../../../redux/redux-store';



type AvaPropsType = {
    profileStatus: string;
}
export const Ava = (props:AvaPropsType) => {
    return (
        <div className={styles.ava_wrapper}>
            <div className={styles.main_ava}>
                <a href="#"><img src={my_ava}/></a>
            </div>
            <div className={styles.main_description_wrapper}>
                <div className={styles.main_description}>
                    <div className={styles.main_title}>
                        <h1>Dmitriy Kurgan</h1>
                    </div>
                    <div className={styles.main_status}>
                        <p>{props.profileStatus}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};
