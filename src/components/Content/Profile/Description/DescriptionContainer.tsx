import React, {LegacyRef, RefObject} from 'react';
import styles from './Description.module.css';
import {StoreType, UserInfoType} from '../../../../redux/redux-store';
import {Description} from './Description';
import {updateNewPortfolioFieldTextActionCreator} from '../../../../redux/profileReducer';


type DescriptionPropsType = {
    store: StoreType;
}

export const DescriptionContainer = (props: DescriptionPropsType) => {
    let state = props.store.getState().profilePage;


    const updateNewPortfolioFieldText = (fieldID:string,fieldText:string) =>{
        props.store.dispatch(updateNewPortfolioFieldTextActionCreator(fieldID,fieldText))
    }

    return <Description usersCharacteristics={state.usersCharacteristics}
                        updateNewPortfolioFieldText={updateNewPortfolioFieldText}

    />
};
