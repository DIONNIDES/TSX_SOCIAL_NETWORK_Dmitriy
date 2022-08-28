import {ProfilePageType} from './store';

export type AddPostType = ReturnType <typeof addPostActionCreator>;//тип создания экшна для добавления поста
export type UpdateNewPostTextType = ReturnType <typeof updateNewPostTextActionCreator>;//тип создания экшна для обновления текста поста

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const profileReducer = (state: ProfilePageType, action: any) => {
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

    export const addPostActionCreator = () => ({type: ADD_POST}as const);

    export const updateNewPostTextActionCreator = (postText: string) => ({type: UPDATE_NEW_POST_TEXT, postText});