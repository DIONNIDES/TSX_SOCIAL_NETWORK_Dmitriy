import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/dialogsReducer';
import {StateType} from '../../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {DialogType} from './Dialog/Dialog';
import {MessageType} from './Message/Message';
import {Dispatch} from 'redux';


type MapStateToPropsType ={
    newMessageText:string
    dialogs:Array<DialogType>
    messages:Array<MessageType>
}

type MapDispatchToPropsType ={
    sendMessage:()=>void
    updateNewMessagetext:(text:string)=>void
}

const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        newMessageText:state.dialogsPage.newMessageText,
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages
    }
};

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType =>{
    return{
        sendMessage:()=>{
            dispatch(sendMessageActionCreator());
        },
        updateNewMessagetext:(text:string)=>{
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);