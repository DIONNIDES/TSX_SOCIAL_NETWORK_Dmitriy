import React from 'react';
import styles from './Dialogs.module.css';
import {Dialog, DialogType} from './Dialog/Dialog';
import {Message, MessageType} from './Message/Message';

type DialogsPropsType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>
}


export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={styles.dialogs_wrapper}>
            <div className={styles.dialogs_description}>
                <h2>Dialogs:</h2>
                <input placeholder="search dialogs..."/>
            </div>
            <div className={styles.dialogs_container}>
                {
                    props.dialogs.map(dialog => <Dialog
                        id={dialog.id} name={dialog.name}
                        lastName={dialog.lastName}
                        lastData={dialog.lastData}/>)}
            </div>
            <div className={styles.messages_container}>
                {
                    props.messages.map(message => <Message
                        name={message.name}
                        lastName={message.lastName} lastData={message.lastData}
                        id={message.id} messageText={message.messageText}/>
                    )
                }
            </div>
        </div>
    );
};
