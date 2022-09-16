import {combineReducers, createStore} from 'redux';
import {PostType} from '../components/Content/Profile/MyPosts/Post/Post';
import {DialogType} from '../components/Content/Dialogs/Dialog/Dialog';
import {MessageType} from '../components/Content/Dialogs/Message/Message';
import {AddPostType, profileReducer, UpdateNewPortfolioFieldTextType, UpdateNewPostTextType} from './profileReducer';
import {dialogsReducer, SendMessageType, UpdateNewMessageTextType} from './dialogsReducer';
import {FollowType, SetUsersType, UnfollowType, usersReducer} from './users-reducer';


export type ActionTypes =
    AddPostType
    | UpdateNewPostTextType
    | SendMessageType
    | UpdateNewMessageTextType
    | UpdateNewPortfolioFieldTextType
    | FollowType
    | UnfollowType
    | SetUsersType;
//типы action creators , обьединенные в один

export type LocationType = {
    country:string
    city:string
}

/*export type PhotosType={
    small?:string | undefined
    large?:string| undefined
}*/

export type UserType = {
    id:number
    photos:any
    followed:boolean
    name:string
    location?:LocationType
    userStatus?:string
    wasOnline?:string
}

export type UsersPageType = {
    users:Array<UserType>
}

export type UserInfoType = {
    id: string
    field: string
    fietldTitle: string

}

export type ProfilePageType = {
    posts: Array<PostType>
    profileStatus: string
    usersCharacteristics: Array<UserInfoType>
    newPostText: string
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
}

export type StoreType = {
    _state?: StateType
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
    subscribe: (observer: () => void) => void
    callSubscriber?: (_state: StateType) => void
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);

export default store;