import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profileReducer';
import {StateType} from '../../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {PostType} from './Post/Post';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    posts:Array<PostType>
    newPostText:string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string)=>void
}

export const mapStateToProps= (state:StateType):MapStateToPropsType=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps =(dispatch:Dispatch):MapDispatchToPropsType=>{
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

