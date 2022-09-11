import {ActionTypes, DialogsPageType} from './redux-store';
import {DialogType} from '../components/Content/Dialogs/Dialog/Dialog';
import {MessageType} from '../components/Content/Dialogs/Message/Message';

export type SendMessageType = ReturnType<typeof sendMessageActionCreator>;//тип создания экшна для добавления сообщений
export type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextActionCreator>;//тип создания экшна для обновления текста сообщений

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmitriy', lastName: 'Kurgan', lastData: '20:00'},
        {id: 2, name: 'Kolyan', lastName: 'Poltorak', lastData: '20:00'},
        {id: 3, name: 'Olga', lastName: 'Lezhentseva', lastData: '20:00'},
        {id: 4, name: 'Ivan', lastName: 'Mamonov', lastData: '20:00'},
        {id: 5, name: 'Artem', lastName: 'Ryaboshapko', lastData: '20:00'},
        {id: 6, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 7, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
    ] as Array<DialogType>,
    messages: [
        {
            id: 1,
            name: 'Dmitriy',
            lastName: 'Kurgan',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 2,
            name: 'Kolyan',
            lastName: 'Poltorak',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 3,
            name: 'Olga',
            lastName: 'Lezhentseva',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 4,
            name: 'Ivan',
            lastName: 'Mamonov',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 5,
            name: 'Artem',
            lastName: 'Ryaboshapko',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 6,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 7,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        }
    ] as Array<MessageType>,
    newMessageText: '' as string,
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                name: 'Dmitriy',
                lastName: 'Kurgan',
                lastData: '20:00',
                message: state.newMessageText
            };
            return {...state, messages: [newMessage, ...state.messages], newMessageText: ''};

        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.messageText};
    }
    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageTextActionCreator = (messageText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText
} as const);