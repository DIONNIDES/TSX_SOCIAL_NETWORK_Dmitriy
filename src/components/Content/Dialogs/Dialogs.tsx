import React from 'react';
import styles from './Dialogs.module.css';
import {Dialog, DialogType} from './Dialog/Dialog';
import {Message, MessageType} from './Message/Message';
import {DialogsPageType} from '../../../redux/store';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (messageText: string) => void
    updateNewMessageText: (messageText: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    let newDialogElement = React.createRef<HTMLInputElement>();
    let newMessageElement = React.createRef<HTMLInputElement>();
    let newMessageText = props.dialogsPage.newMessageText;

    const searchDialog = () => {
        let dialogName = newDialogElement.current?.value;
        alert(dialogName);
    }

    const sendMessage = () => {
        let messageText = newMessageElement.current?.value;
        messageText && props.sendMessage(messageText);
        props.updateNewMessageText('');
    }
    const onMessageChange = () => {
        let messageText = newMessageElement.current?.value;
        messageText && props.updateNewMessageText(messageText);
    }
    return (
        <div className={styles.dialogs_wrapper}>
            <div className={styles.dialogs_description}>
                <h2>Dialogs:</h2>

                <input
                    onChange={onMessageChange}
                    value={newMessageText}
                    ref={newDialogElement}
                    placeholder="search dialogs..."/>
                <button onClick={searchDialog}>Search dialog</button>
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
                    <input
                        onChange={onMessageChange}
                        value={newMessageText}
                        ref={newMessageElement}
                        placeholder="send message..."/>
                    <button onClick={sendMessage}>Send message</button>
                </div>

                {
                    props.dialogsPage.messages.map(message => <Message
                        name={message.name}
                        lastName={message.lastName} lastData={message.lastData}
                        id={message.id} messageText={message.messageText}/>
                    )
                }
            </div>
        </div>
    );
};
