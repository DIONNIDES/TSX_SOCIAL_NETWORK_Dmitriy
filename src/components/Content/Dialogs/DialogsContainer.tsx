import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/dialogsReducer';
import {StoreType} from '../../../redux/redux-store';
import {Dialogs} from './Dialogs';


type DialogsContainerPropsType = {
    store:StoreType
}


export const DialogsContainer = (props: DialogsContainerPropsType) => {
    let state = props.store.getState().dialogsPage;
    let newMessageText = state.newMessageText;

    const onMessageChange = (text:string) => {
       /* text && props.updateNewMessageText(text);*/
       // text && props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', messageText:text});
        props.store.dispatch(updateNewMessageTextActionCreator(text));

    }
    const sendMessage = () => {
        /*text && props.sendMessage();*/
        //text && props.dispatch({type:'SEND-MESSAGE'});
        props.store.dispatch(sendMessageActionCreator());
    }

    return <Dialogs sendMessage= {sendMessage}
                    updateNewMessagetext={onMessageChange}
                    newMessageText={newMessageText}
                    dialogs={state.dialogs}
                    messages={state.messages}
    />
};
