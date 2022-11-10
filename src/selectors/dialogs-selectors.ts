import {RootStateType} from '../redux/redux-store';

export const getNewMessageText = (state:RootStateType) =>{
    return state.dialogsPage.newMessageText;
}
export const getDialogs = (state:RootStateType) =>{
    return state.dialogsPage.dialogs;
}
export const getMessages= (state:RootStateType) =>{
    return state.dialogsPage.messages;
}

