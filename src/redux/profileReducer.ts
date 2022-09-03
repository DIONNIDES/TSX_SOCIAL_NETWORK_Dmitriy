import {ActionTypes, ProfilePageType} from './redux-store';
import {v1} from 'uuid';

export type AddPostType = ReturnType<typeof addPostActionCreator>;//тип создания экшна для добавления поста
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>;//тип создания экшна для обновления текста поста
export type UpdateNewPortfolioFieldTextType = ReturnType<typeof updateNewPortfolioFieldTextActionCreator>


export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const UPDATE_NEW_PORTFOLIO_FIELD_TEXT = 'UPDATE-NEW-PORTFOLIO-FIELD-TEXT';

export const profileReducer = (state: ProfilePageType = {
    posts: [
        {id: v1(), message: 'It`s my first post', time: '20:00', likes: 23},
        {id: v1(), message: 'It`s my second post', time: '20:05', likes: 33},
        {id: v1(), message: 'It`s my third post', time: '20:50', likes: 44},
        {id: v1(), message: 'It`s my fourth post', time: '20:58', likes: 55},
        {id: v1(), message: 'It`s my fifth post', time: '21:00', likes: 66},
    ],
    newPostText: '',
    profileStatus: 'Its my first status',
    usersCharacteristics: [
        {id: v1(), field: 'Name', fietldTitle: 'Dmitriy'},
        {id: v1(), field: 'Lastname', fietldTitle: 'Kurgan'},
        {id: v1(), field: 'Education', fietldTitle: 'Engineering'},
        {id: v1(), field: 'Profession', fietldTitle: 'Web-developer'},
        {id: v1(), field: 'Skills', fietldTitle: 'React+Redux, JS/TS'},
    ],
    /*    newPortfolioFieldText: 'Dmitriy'*/
}, action: ActionTypes) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: v1(),
                message: state.newPostText,
                time: '20:00', likes: 23
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:

            state.newPostText = action.postText;
            return state;

        case UPDATE_NEW_PORTFOLIO_FIELD_TEXT:
            return {...state,
                usersCharacteristics: state.usersCharacteristics.map(ch => ch.id === action.fieldID ? {
                    ...ch,
                    fietldTitle: action.fieldText
                } : ch)
            }

        default:
            return state;


    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextActionCreator = (postText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, postText
    } as const
}

export const updateNewPortfolioFieldTextActionCreator = (fieldID: string, fieldText: string) => {
    return {
        type: UPDATE_NEW_PORTFOLIO_FIELD_TEXT,
        fieldText,
        fieldID
    } as const
}