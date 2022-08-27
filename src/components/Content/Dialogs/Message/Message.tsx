import React from 'react';
import styles from './Message.module.css';
import {NavLink} from 'react-router-dom';
import dialogAva from '../../../../asets/user_logo.png';

export type MessageType = {
    name:string;
    lastName:string;
    lastData:string;
    id:number;
    message: string;
}

export const Message = (props:MessageType) => {
    return (
        <NavLink to={'/dialogs/'+props.id}>
            <div className={styles.message_wrapper}>
                <div className={styles.message_ava_block}>
                   <img src={dialogAva}/>
                </div>
                <div className={styles.radius}>

                </div>
                <div className={styles.message_description_block}>
                    <div className={styles.message_name}>
                        {props.name} {props.lastName}
                    </div>
                    <div className={styles.message_last_data}>
                        {props.lastData}
                    </div>
                    <div className={styles.message_description}>
                        <p>
                            {props.message}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>

    );
};
