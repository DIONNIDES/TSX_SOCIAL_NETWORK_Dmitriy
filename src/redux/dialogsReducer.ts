import {DialogsPageType} from './store';

export type SendMessageType = ReturnType<typeof sendMessageActionCreator>;//тип создания экшна для добавления сообщений
export type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextActionCreator>;//тип создания экшна для обновления текста сообщений

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state:DialogsPageType, action:any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                name: 'Dmitriy',
                lastName: 'Kurgan',
                lastData: '20:00',
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;
    }
    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (messageText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText
});