import React, {ComponentType} from 'react';
import {sendMessage, updateNewMessageText} from '../../../redux/dialogsReducer';
import {StateType} from '../../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {DialogType} from './Dialog/Dialog';
import {MessageType} from './Message/Message';
import {wIthAuthRedirect} from '../../HOK/WIthAuthRedirect';
import {compose} from 'redux';


type MapStateToPropsType ={
    newMessageText:string
    dialogs:Array<DialogType>
    messages:Array<MessageType>
    isAuth:boolean
}

const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        newMessageText:state.dialogsPage.newMessageText,
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        isAuth:state.auth.isAuth
    }
};

export const DialogsContainer =  compose<ComponentType> (
    connect(mapStateToProps, {sendMessage,updateNewMessageText}),
    wIthAuthRedirect
)(Dialogs);