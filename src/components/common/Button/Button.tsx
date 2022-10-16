import React from 'react';
import {inspect} from 'util';
import styles from './Button.module.css'

export type PropsType = {
    disabled?:boolean
    className?:string
    title:string;
    callback:()=>void
}

export const Button:React.FC<PropsType> = (props) => {
    const{title, callback, ...restProps} = props
    const finalClassName = `${styles.floating_button} ${restProps.className}`

    const onClickHandler = () =>{
        callback();
    }

    return (
        <button className={finalClassName} onClick={onClickHandler} disabled={restProps.disabled}>
            {title}
        </button>
    );
};
