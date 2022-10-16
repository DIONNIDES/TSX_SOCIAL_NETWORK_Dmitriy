import {DialogType} from '../../components/Content/Dialogs/Dialog/Dialog';
import {MessageType} from '../../components/Content/Dialogs/Message/Message';
import {dialogsReducer, sendMessage, updateNewMessageText} from '../dialogsReducer';


test('new message should be added',()=>{
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

    const endState = dialogsReducer(initialState, sendMessage());

    expect(initialState.messages.length).toBe(7);
    expect(endState.messages.length).toBe(8);
})

test('new messagetext should be changed',()=>{
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

    const endState = dialogsReducer(initialState, updateNewMessageText('message'));

    expect(initialState.newMessageText).toBe('');
    expect(endState.newMessageText).toBe('message');
})