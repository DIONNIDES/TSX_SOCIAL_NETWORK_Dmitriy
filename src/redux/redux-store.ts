import {combineReducers, createStore} from 'redux';
import {PostType} from '../components/Content/Profile/MyPosts/Post/Post';
import {DialogType} from '../components/Content/Dialogs/Dialog/Dialog';
import {MessageType} from '../components/Content/Dialogs/Message/Message';
import {AddPostType, profileReducer, UpdateNewPostTextType} from './profileReducer';
import {dialogsReducer, SendMessageType, UpdateNewMessageTextType} from './dialogsReducer';



export type ActionTypes = AddPostType | UpdateNewPostTextType | SendMessageType | UpdateNewMessageTextType;//типы action creators , обьединенные в один


export type UserInfoType = {
    id: number
    name: string
    lastName: string
    education: string
    profession: string
    knowledges: string
    status: string
}

export type ProfilePageType = {
    posts: Array<PostType>
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
}
export type StoreType = {
    _state?:StateType
    getState:()=>StateType
    dispatch:(action:ActionTypes)=>void
    subscribe:(observer:()=>void)=>void
    callSubscriber?:(_state:StateType)=>void
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});


let store = createStore(reducers);

export default store;