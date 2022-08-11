import React, {ChangeEventHandler} from 'react';
import styles from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';
import {ProfilePageType} from '../../../../redux/store';


type MyPostsPropsType = {
    profilePage:ProfilePageType
    addPost: (postText:string)=>void
    updateNewPostText: (postText:string)=>void
};

export const MyPosts = (props:MyPostsPropsType) => {
    let newPostText = props.profilePage.newPostText;
    let posts = props.profilePage.posts.map(p => <Post  id={p.id} message={p.message} time={p.time} likes={p.likes}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value;
        text && props.addPost(text);
        props.updateNewPostText('');
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        text && props.updateNewPostText(text);

    }

    return (
        <div className={styles.my_posts_wrapper}>
            <div className={styles.add_post_wrapper}>
                <div className={styles.add_post_block}>
                    <h2>My posts:</h2>
                    <textarea
                        value={newPostText}
                        onChange={onPostChange}
                        ref={newPostElement}
                        placeholder="Write you post..."/>
                </div>
                <button onClick={addPost}
                        className={styles.add_post_button}>Add post
                </button>
            </div>
            {posts}
        </div>
    );
};
