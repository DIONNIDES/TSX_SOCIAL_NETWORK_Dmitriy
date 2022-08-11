import React from 'react';
import styles from './Ava.module.css';
import my_ava from './../../../../asets/my_photo.png';
import {UserInfoType} from '../../../../redux/store';



type AvaPropsType = {
    usersCharacteristics: Array<UserInfoType>;
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
                        <h1>{props.usersCharacteristics[0].name} {props.usersCharacteristics[0].lastName}</h1>
                    </div>
                    <div className={styles.main_status}>
                        <p>{props.usersCharacteristics[0].status}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};
