import React from 'react';
import styles from './Header.module.css';
import user_logo from '../../asets/user_logo.png';
import header_logo from './../../asets/header_logo.png';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    id:null|number,
    email:null|string,
    login:null|string,
    isAuth:boolean
}

export const Header = (props:HeaderPropsType) => {
    return (
        <div className={styles.Header_wrapper}>
            <div className={styles.Header_top}>
                <div className={styles.logo_image}>
                    <NavLink to={"/login"}><img src={header_logo} alt="logo"/></NavLink>
                </div>
                <div className={styles.main_username}>
                    {props.isAuth ? <NavLink to={"/login"}>{props.login}</NavLink> : "Authorize please"}
                </div>
                <div className={styles.header_login}>
                    {props.isAuth ?  <NavLink to={"/login"}><span>{props.login}</span></NavLink> : <NavLink to={"/login"}><span>Login</span></NavLink>}
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
