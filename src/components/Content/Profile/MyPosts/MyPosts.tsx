import React, {ChangeEvent, ChangeEventHandler} from 'react';
import styles from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';



type MyPostsPropsType = {
    addPost:()=>void
    updateNewPostText:(text:string)=>void
    newPostText:string
    posts:Array<PostType>
};

export const MyPosts = (props:MyPostsPropsType) => {

    let posts = props.posts.map(p => <Post id={p.id} message={p.message} time={p.time} likes={p.likes}/>);

    const addPostHandler = () =>{
        props.addPost();
    }

    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)

    }
    return (
        <div className={styles.my_posts_wrapper}>
            <div className={styles.add_post_wrapper}>
                <div className={styles.add_post_block}>
                    <h2>My posts:</h2>
                    <textarea
                        onChange={onPostChangeHandler}
                        value={props.newPostText}
                        placeholder="Write you post..."/>
                </div>
                <button
                    onClick={addPostHandler}
                    className={styles.add_post_button}>Add post
                </button>
            </div>
            {posts}
        </div>
    );
};
