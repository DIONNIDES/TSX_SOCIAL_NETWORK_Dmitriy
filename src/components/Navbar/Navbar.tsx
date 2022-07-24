import React from "react";
import styles from './Navbar.module.css';
import my_photo from './../../asets/my_photo.png';


export const Navbar = () => {
    return (
        <div className={styles.Navbar_wrapper}>
            <div className={styles.user_photo}>
                <a href="#"><img src={my_photo} /></a>
            </div>
            <div className={styles.navigation_menu}>
                <ul>
                    <li><a href='#' className={styles.nav_item}>Profile</a></li>
                    <li><a href='#' className={styles.nav_item} >Dialogs</a></li>
                    <li><a href='#' className={styles.nav_item}>MyFriends</a></li>
                    <li><a href='#' className={styles.nav_item}>Gallery</a></li>
                    <li><a href='#' className={styles.nav_item}>Videos</a></li>
                    <li><a href='#' className={styles.nav_item}>MyProjects</a></li>
                    <li><a href='#' className={styles.nav_item}>MyGroups</a></li>
                    <li><a href='#' className={styles.nav_item}>MyMusic</a></li>
                    <li><a href='#' className={styles.nav_item}>Settings</a></li>
                </ul>
            </div>

        </div>
    );
};
