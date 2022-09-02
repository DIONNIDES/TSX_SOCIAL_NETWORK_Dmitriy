import React from 'react';
import {Post, PostType} from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profileReducer';
import {StoreType} from '../../../../redux/redux-store';
import {MyPosts} from './MyPosts';


type MyPostsContainerPropsType = {
    store: StoreType
};

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState().profilePage;
    let newPostText = state.newPostText;
    let posts:Array<PostType> = state.posts
    const addPost = () => {
        /*text && props.addPost();*/
        /*text && props.dispatch({type:'ADD-POST'});*/
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text: string) => {
        text && props.store.dispatch(updateNewPostTextActionCreator(text))

    }
    return <MyPosts addPost={addPost} updateNewPostText={onPostChange} newPostText={newPostText} posts={posts}/>
};
