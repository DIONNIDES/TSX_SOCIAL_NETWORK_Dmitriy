import React from 'react';
import styles from './Navbar.module.css';
import my_photo from './../../asets/my_photo.png';
import {NavLink} from 'react-router-dom';


export const Navbar = () => {
    return (
        <div className={styles.Navbar_wrapper}>
            <div className={styles.user_photo}>
                <a href="#"><img src={my_photo}/></a>
            </div>
            <div className={styles.navigation_menu}>
                <ul>
                    <li><NavLink to="/profile"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>Dialogs</NavLink></li>
                    <li><NavLink to="/friends"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>MyFriends</NavLink></li>
                    <li><NavLink to="/gallery"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>Gallery</NavLink></li>
                    <li><NavLink to="/videos"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>Videos</NavLink></li>
                    <li><NavLink to="/projects"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>MyProjects</NavLink></li>
                    <li><NavLink to="/groups"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>MyGroups</NavLink></li>
                    <li><NavLink to="/music"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>MyMusic</NavLink></li>
                    <li><NavLink to="/settings"
                                 activeClassName={styles.active}
                                 className={styles.nav_item}>Settings</NavLink></li>
                </ul>
            </div>

        </div>
    );
};
