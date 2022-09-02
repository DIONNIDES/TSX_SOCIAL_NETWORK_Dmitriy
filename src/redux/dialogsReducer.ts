import {ActionTypes, DialogsPageType} from './redux-store';

export type SendMessageType = ReturnType<typeof sendMessageActionCreator>;//тип создания экшна для добавления сообщений
export type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextActionCreator>;//тип создания экшна для обновления текста сообщений

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state:DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dmitriy', lastName: 'Kurgan', lastData: '20:00'},
        {id: 2, name: 'Kolyan', lastName: 'Poltorak', lastData: '20:00'},
        {id: 3, name: 'Olga', lastName: 'Lezhentseva', lastData: '20:00'},
        {id: 4, name: 'Ivan', lastName: 'Mamonov', lastData: '20:00'},
        {id: 5, name: 'Artem', lastName: 'Ryaboshapko', lastData: '20:00'},
        {id: 6, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 7, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 8, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 9, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 10, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 11, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 12, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 13, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 14, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
        {id: 15, name: 'Victor', lastName: 'Pobeditel', lastData: '20:00'},
    ],

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
        },
        {
            id: 8,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 9,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 10,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 11,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 12,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 13,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
        {
            id: 14,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem loremm'
        },
        {
            id: 15,
            name: 'Victor',
            lastName: 'Pobeditel',
            lastData: '20:00',
            message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
        },
    ],
    newMessageText: '',
}, action:ActionTypes) => {
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

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE}as const);
export const updateNewMessageTextActionCreator = (messageText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText
}as const);