import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/dialogsReducer';
import {ActionTypes, StateType} from '../../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';


const mapStateToProps = (state:StateType)=>{
    return{
        newMessageText:state.dialogsPage.newMessageText,
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages
    }
};

const mapDispatchToProps = (dispatch:(action:ActionTypes)=>void) =>{
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