import React from 'react';
import styles from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';


type MyPostsPropsType = {
    posts: Array<PostType>;
};

export const MyPosts = (props:MyPostsPropsType) => {

    let posts = props.posts.map(p => <Post  id={p.id} message={p.message} time={p.time} likes={p.likes}/>);

    return (
        <div className={styles.my_posts_wrapper}>
            {posts}
        </div>
    );
};
