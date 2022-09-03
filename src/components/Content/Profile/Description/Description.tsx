import React from 'react';
import styles from './Description.module.css';
import {UserInfoType} from '../../../../redux/redux-store';
import {EditableSpan} from '../../../common/EditableSpan';


type DescriptionPropsType = {
    usersCharacteristics: Array<UserInfoType>;
    updateNewPortfolioFieldText: (fieldID: string, fieldText: string) => void
}

export const Description = (props: DescriptionPropsType) => {

    const updateFieldTextHandler = (fieldID: string, fieldText: string) => {
        props.updateNewPortfolioFieldText(fieldID, fieldText);
    }

    return (
        <div className={styles.description_wrapper}>
            <div className={styles.buttons_block}>
                <div className={styles.top_menu}>
                    <button>Likes</button>
                    <button>Followers</button>
                    <button>Info</button>
                </div>
                <div className={styles.add_status_block}>
                    <label>Add status</label>
                    <input placeholder="Write your status..."/>
                </div>
                <div className={styles.search_friends_block}>
                    <label>Search friend</label>
                    <input placeholder="Search your friend..."/>
                </div>
                <div className={styles.search_users_block}>
                    <label>Search user</label>
                    <input placeholder="Search any user..."/>
                </div>
            </div>
            <div className={styles.portfolio_block}>

                {
                    props.usersCharacteristics.map(ch => <div className={styles.portfolio_item}>
                        <span>{ch.field}: </span> <EditableSpan value={ch.fietldTitle} callback={(fieldText) => updateFieldTextHandler(ch.id, fieldText)}/>
                    </div>)
                }
            </div>
        </div>
    );
};
