import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Profile} from './components/Content/Profile/Profile';
import {PostType} from './components/Content/Profile/MyPosts/Post/Post';
import {UserInfoType} from './components/Content/Profile/Description/Description';


type AppPropsType = {
    posts: Array<PostType>;
    usersCharacteristics: Array<UserInfoType>;
}


function App(props:AppPropsType) {
  return (
    <div className={styles.App_wrapper}>
     <Header />
        <Navbar />
        <div className={styles.Main_wrapper}>
            <Profile posts={props.posts} usersCharacteristics={props.usersCharacteristics} />
        </div>
        <Footer />
    </div>
  );
}

export default App;
