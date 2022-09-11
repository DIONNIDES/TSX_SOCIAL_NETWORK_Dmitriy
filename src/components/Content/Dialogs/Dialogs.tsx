import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import {Dialog, DialogType} from './Dialog/Dialog';
import {Message, MessageType} from './Message/Message';
import {Button} from '../../common/Button/Button';


type DialogsPropsType = {
    sendMessage:()=>void
    updateNewMessagetext:(text:string)=>void
    newMessageText:string
    dialogs:Array<DialogType>
    messages:Array<MessageType>
}


export const Dialogs = (props: DialogsPropsType) => {

    const onMessageChange = (e:ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
            props.updateNewMessagetext(text);

    }
    const sendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={styles.dialogs_wrapper}>
            <div className={styles.dialogs_description}>
                <h2 className={styles.dialogs_title}>Dialogs:</h2>

                <input value={props.newMessageText}
                        onChange={onMessageChange}
                        placeholder="search dialogs..."/>
                <Button title={'Search dialog'} callback={sendMessage} className={styles.search_dialog_button}/>
            </div>
            <div className={styles.dialogs_container}>
                {
                    props.dialogs.map(dialog => <Dialog
                        id={dialog.id} name={dialog.name}
                        lastName={dialog.lastName}
                        lastData={dialog.lastData}/>)}
            </div>
            <div className={styles.messages_container}>
                <div className={styles.messages_description}>
                    <input className={styles.messages_input}
                           value={props.newMessageText}
                           onChange={onMessageChange}
                        placeholder="send message..."/>
                    <Button title={'Send message'} callback={sendMessage} className={styles.send_message_button}/>
                </div>

                {
                    props.messages.map(message => <Message
                        name={message.name}
                        lastName={message.lastName} lastData={message.lastData}
                        id={message.id} message={message.message} />
                    )
                }
            </div>
        </div>
    );
};
