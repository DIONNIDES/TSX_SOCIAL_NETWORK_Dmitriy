import {ActionTypes, ProfilePageType} from './redux-store';

export type AddPostType = ReturnType <typeof addPostActionCreator>;//тип создания экшна для добавления поста
export type UpdateNewPostTextType = ReturnType <typeof updateNewPostTextActionCreator>;//тип создания экшна для обновления текста поста

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType = {
    posts: [
        {id: 1, message: 'It`s my first post', time: '20:00', likes: 23},
        {id: 2, message: 'It`s my second post', time: '20:05', likes: 33},
        {id: 3, message: 'It`s my third post', time: '20:50', likes: 44},
        {id: 4, message: 'It`s my fourth post', time: '20:58', likes: 55},
        {id: 5, message: 'It`s my fifth post', time: '21:00', likes: 66},
    ],
    newPostText: '',
    usersCharacteristics: [
        {
            id: 1,
            name: 'Dmitriy',
            lastName: 'Kurgan',
            education: 'Engineer',
            profession: 'Web-Developer',
            knowledges: 'React,Redux,JS,TS',
            status: 'It`s my first status on this page'
        }

    ],
}, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText,
                time: '20:00', likes: 23
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:

            state.newPostText = action.postText;
            return state;
        default:
            return state;


    }
}

    export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }as const }

    export const updateNewPostTextActionCreator = (postText:string) => {
      return  {type: UPDATE_NEW_POST_TEXT, postText
    }as const}