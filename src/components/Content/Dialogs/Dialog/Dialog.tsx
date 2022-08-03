import React from 'react';
import styles from './Dialog.module.css';
import dialogAva from './../../../../asets/user_logo.png';
import {NavLink} from 'react-router-dom';

export type DialogType = {
    id: number;
    name: string;
    lastName: string;
    lastData: string;
}

export const Dialog = (props: DialogType) => {
    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={styles.active}>
            <div className={styles.dialog_wrapper}>
                <div className={styles.dialog_ava_block}>
                    <img src={dialogAva}/>
                </div>
                <div className={styles.dialog_description_block}>
                    <div className={styles.dialog_name}>
                        {props.name} {props.lastName}
                    </div>
                    <div className={styles.dialog_last_data}>
                        {props.lastData}
                    </div>
                    <div className={styles.dialog_description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, velit?
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};
