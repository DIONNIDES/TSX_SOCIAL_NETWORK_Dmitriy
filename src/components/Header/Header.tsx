import React from 'react';
import styles from './Header.module.css';
import user_logo from '../../asets/user_logo.png';
import header_logo from './../../asets/header_logo.png';


export const Header = () => {
    return (
        <div className={styles.Header_wrapper}>
            <div className={styles.Header_top}>
                <div className={styles.logo_image}>
                    <a href="#"><img src={header_logo} alt="logo"/></a>
                </div>
                <div className={styles.main_username}>
                    <a href="#">Dmitriy Kurgan</a>
                </div>
                <div className={styles.header_login}>
                    <a href="#">Login</a>
                </div>
            </div>
            <div className={styles.Header_bottom}>
                <div className={styles.user_list_item}><a href="#">
                    <img src={user_logo} alt="user"/></a>
                </div>
                <div className={styles.user_list_item}><a href="#">
                    <img src={user_logo} alt="user"/></a>
                </div>
                <div className={styles.user_list_item}><a href="#">
                    <img src={user_logo} alt="user"/></a>
                </div>
                <div className={styles.user_list_item}><a href="#">
                    <img src={user_logo} alt="user"/></a>
                </div>
                <div className={styles.user_list_item}><a href="r#">
                    <img src={user_logo} alt="user"/></a>
                </div>
                <div className={styles.user_list_item}><a href="#">
                    <img src={user_logo} alt="user"/></a>
                </div>
                <div className={styles.user_list_item}><a href="#">
                    <img src={user_logo} alt="user"/></a>
                </div>
                <div className={styles.user_list_item}><a href="#">
                    <img src={user_logo} alt="user"/></a>
                </div>
            </div>
        </div>
    );
};
