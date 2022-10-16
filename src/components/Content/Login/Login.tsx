import React from 'react';
import {Button} from '../../common/Button/Button';
import styles from './Login.module.css';

export const Login = () => {
    return (
        <div className={styles.loginFormWrapper}>
           <h2>Welcome to my Social Network</h2>
           <label>Login</label> <input type="text"/>
            <label>Password</label><input type="password"/>
            <Button title={'Sign In'} callback={()=>{}}/>
        </div>
    );
};

