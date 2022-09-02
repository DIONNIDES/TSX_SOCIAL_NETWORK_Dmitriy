import React, {LegacyRef, RefObject} from 'react';
import styles from './Description.module.css';
import {StoreType, UserInfoType} from '../../../../redux/redux-store';
import {Description} from './Description';


type DescriptionPropsType = {
    store: StoreType;
}

export const DescriptionContainer = (props: DescriptionPropsType) => {
    let state = props.store.getState().profilePage;
    return <Description usersCharacteristics={state.usersCharacteristics}/>
};
