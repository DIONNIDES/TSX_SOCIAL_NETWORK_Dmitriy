import React from 'react';
import styles from './Dialogs.module.css';
import {Dialog, DialogType} from './Dialog/Dialog';
import {Message, MessageType} from './Message/Message';
import {DialogsPageType, sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/store';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch:(action:any)=>void
}


export const Dialogs = (props: DialogsPropsType) => {
    let newMessageText = props.dialogsPage.newMessageText;
    let newMessageElement = React.createRef<HTMLInputElement>();

    const onMessageChange = () => {
        let text = newMessageElement.current?.value;
       /* text && props.updateNewMessageText(text);*/
       // text && props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', messageText:text});

       text && props.dispatch(updateNewMessageTextActionCreator(text));

    }
    const sendMessage = () => {
        let text = newMessageElement.current?.value;
        /*text && props.sendMessage();*/
        //text && props.dispatch({type:'SEND-MESSAGE'});

        text && props.dispatch(sendMessageActionCreator());
    }

    return (
        <div className={styles.dialogs_wrapper}>
            <div className={styles.dialogs_description}>
                <h2>Dialogs:</h2>

                <input ref={newMessageElement}
                       value={newMessageText}
                        onChange={onMessageChange}
                        placeholder="search dialogs..."/>
                <button >Search dialog</button>
            </div>
            <div className={styles.dialogs_container}>
                {
                    props.dialogsPage.dialogs.map(dialog => <Dialog
                        id={dialog.id} name={dialog.name}
                        lastName={dialog.lastName}
                        lastData={dialog.lastData}/>)}
            </div>
            <div className={styles.messages_container}>
                <div className={styles.dialogs_description}>
                    <input ref={newMessageElement}
                           value={newMessageText}
                           onChange={onMessageChange}
                        placeholder="send message..."/>
                    <button onClick={sendMessage}>Send message</button>
                </div>

                {
                    props.dialogsPage.messages.map(message => <Message
                        name={message.name}
                        lastName={message.lastName} lastData={message.lastData}
                        id={message.id} message={message.message}/>
                    )
                }
            </div>
        </div>
    );
};
