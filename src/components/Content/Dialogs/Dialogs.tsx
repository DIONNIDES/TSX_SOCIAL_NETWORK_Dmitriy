import React from 'react';
import styles from './Dialogs.module.css';
import {Dialog, DialogType} from './Dialog/Dialog';
import {Message, MessageType} from './Message/Message';
import {DialogsPageType} from '../../../redux/store';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageText: (messageText: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    let newMessagetext = props.dialogsPage.newMessageText;
    let newMessageElement = React.createRef<HTMLInputElement>();

    const onMessageChange = () => {
        let text = newMessageElement.current?.value;
        text && props.updateNewMessageText(text);
    }
    const sendMessage = () => {
        let text = newMessageElement.current?.value;
        text && props.sendMessage();
    }

    return (
        <div className={styles.dialogs_wrapper}>
            <div className={styles.dialogs_description}>
                <h2>Dialogs:</h2>

                <input ref={newMessageElement}
                       value={newMessagetext}
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
                           value={newMessagetext}
                           onChange={onMessageChange}
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
