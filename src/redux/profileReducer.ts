import {ActionTypes, ProfilePageType, UserInfoType} from './redux-store';
import {v1} from 'uuid';
import {PostType} from '../components/Content/Profile/MyPosts/Post/Post';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../DAL/API';
import {toggleIsFetching, toggleIsFollowingProgress, unfollowSuccess} from './usersReducer';

export type AddPostType = ReturnType<typeof addPost>;//тип создания экшна для добавления поста
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>;//тип создания экшна для обновления текста поста
export type UpdateNewPortfolioFieldTextType = ReturnType<typeof updateNewPortfolioFieldText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>


export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const UPDATE_NEW_PORTFOLIO_FIELD_TEXT = 'UPDATE-NEW-PORTFOLIO-FIELD-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: v1(), message: 'It`s my first post', time: '20:00', likes: 23},
        {id: v1(), message: 'It`s my second post', time: '20:05', likes: 33},
        {id: v1(), message: 'It`s my third post', time: '20:50', likes: 44},
        {id: v1(), message: 'It`s my fourth post', time: '20:58', likes: 55},
        {id: v1(), message: 'It`s my fifth post', time: '21:00', likes: 66},
    ] as Array<PostType>,
    newPostText: '' as string,
    profileStatus: 'Its my first status' as string,
    usersCharacteristics: [
        {id: v1(), field: 'Name', fietldTitle: 'Dmitriy'},
        {id: v1(), field: 'Lastname', fietldTitle: 'Kurgan'},
        {id: v1(), field: 'Education', fietldTitle: 'Engineering'},
        {id: v1(), field: 'Profession', fietldTitle: 'Web-developer'},
        {id: v1(), field: 'Skills', fietldTitle: 'React+Redux, JS/TS'},
    ] as Array<UserInfoType>,
    profile: {
        /*        aboutMe: "я круто чувак 1001%",
                   contacts: {
                    facebook: "facebook.com",
                    website: null,
                    vk: "vk.com/dimych",
                    twitter: "https://twitter.com/@sdf",
                    instagram: "instagra.com/sds",
                    youtube: null,
                    github: "github.com",
                    mainLink: null
                },
                lookingForAJob: true,
                lookingForAJobDescription: "не ищу, а дурачусь",
                fullName: "samurai dimych",
                userId: 2,
                photos: {
                    small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                    large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
                }*/
    }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: v1(),
                message: state.newPostText,
                time: '20:00', likes: 23
            };
            return {...state, posts: [newPost, ...state.posts], newPostText: ''};

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText};

        case UPDATE_NEW_PORTFOLIO_FIELD_TEXT:
            return {
                ...state,
                usersCharacteristics: state.usersCharacteristics.map(ch => ch.id === action.fieldID ? {
                    ...ch,
                    fietldTitle: action.fieldText
                } : ch)
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;


    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostText = (postText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, postText
    } as const
}

export const updateNewPortfolioFieldText = (fieldID: string, fieldText: string) => {
    return {
        type: UPDATE_NEW_PORTFOLIO_FIELD_TEXT,
        fieldText,
        fieldID
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
//thunkCreator для запроса и установки профиля пользователя
export const requestUserProfile = (userID:number)=>(dispatch:Dispatch)=>{
    dispatch(toggleIsFetching(true));
    profileAPI.getUserProfile(userID).then(data => {
        dispatch(setUserProfile(data))
        dispatch(toggleIsFetching(false))
    })
}


