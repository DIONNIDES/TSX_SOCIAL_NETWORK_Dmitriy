import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profileReducer';
import {ActionTypes, StateType} from '../../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';


/*type MyPostsContainerPropsType = {
    store: StoreType
};*/
/*
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState().profilePage;
    let newPostText = state.newPostText;
    let posts:Array<PostType> = state.posts
    const addPost = () => {
        /!*text && props.addPost();*!/
        /!*text && props.dispatch({type:'ADD-POST'});*!/
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text: string) => {
        text && props.store.dispatch(updateNewPostTextActionCreator(text))

    }
    return <MyPosts addPost={addPost}
    updateNewPostText={onPostChange} newPostText={newPostText} posts={posts}/>
};*/

export const mapStateToProps = (state:StateType)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps =(dispatch:(action:ActionTypes)=>void)=>{
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text: string)=>{
            text && dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

