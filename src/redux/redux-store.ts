import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {PostType} from '../components/Content/Profile/MyPosts/Post/Post';
import {DialogType} from '../components/Content/Dialogs/Dialog/Dialog';
import {MessageType} from '../components/Content/Dialogs/Message/Message';
import {ProfileActionTypes, profileReducer} from './profileReducer';
import {DialogsActionTypes, dialogsReducer} from './dialogsReducer';
import {UsersActionTypes, usersReducer} from './usersReducer';
import {AuthActionTypes, authReducer, AuthType} from './authReducer';

export type MainActionsType =
    ProfileActionTypes
    | DialogsActionTypes
    | AuthActionTypes
    | UsersActionTypes
//типы action creators , обьединенные в один

export type LocationType = {
    country: string
    city: string
}

export type PhotosType = {
    small?: string | undefined
    large?: string | undefined
}

export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    location?: LocationType
    userStatus?: string
    wasOnline?: string
}

export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UserInfoType = {
    id: string
    field: string
    fietldTitle: string

}

export type ProfilePageType = {
    posts: Array<PostType>
    status: string
    usersCharacteristics: Array<UserInfoType>
    newPostText: string
    profile: any
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthType
}

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});
export type RootStateType = ReturnType<typeof store.getState>
export type ReduxStore = typeof store

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, unknown, RootStateType, MainActionsType>;

export default store;