import React from 'react';
import {StoreType} from '../../../../redux/redux-store';
import {Ava} from './Ava';


type AvaPropsType = {
    store: StoreType;
}
export const AvaContainer = (props:AvaPropsType) => {
    let state = props.store.getState().profilePage;

    return <Ava usersCharacteristics={state.usersCharacteristics} />
};
