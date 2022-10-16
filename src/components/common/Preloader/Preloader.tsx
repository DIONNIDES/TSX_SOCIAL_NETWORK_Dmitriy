import React from 'react';
import styles from './Preloader.module.css';

export const Preloader = () => {
    return (
        <div className={styles.loader}>
            <span>Loading...</span>
        </div>
    );
};

