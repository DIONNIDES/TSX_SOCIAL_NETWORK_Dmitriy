import React from 'react';
import styles from './App.module.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {Profile} from './components/Content/Profile/Profile';
import {PostType} from './components/Content/Profile/MyPosts/Post/Post';
import {UserInfoType} from './components/Content/Profile/Description/Description';
import {Dialogs} from './components/Content/Dialogs/Dialogs';
import {DialogType} from './components/Content/Dialogs/Dialog/Dialog';
import {BrowserRouter, Route} from 'react-router-dom';
import {MyFriends} from './components/Content/MyFriends/MyFriends';
import {MyProjects} from './components/Content/MyProjects/MyProjects';
import {Gallery} from './components/Content/Gallery/Gallery';
import {MyMusic} from './components/Content/MyMusic/MyMusic';
import {Settings} from './components/Content/Settings/Settings';
import {Videos} from './components/Content/Videos/Videos';
import {MyGroups} from './components/Content/MyGroups/MyGroups';
import {MessageType} from './components/Content/Dialogs/Message/Message';


type AppPropsType = {
    posts: Array<PostType>;
    usersCharacteristics: Array<UserInfoType>;
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={styles.App_wrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.Main_wrapper}>
                    <Route path="/profile" render={() => <Profile
                        posts={props.posts}
                        usersCharacteristics={props.usersCharacteristics}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/friends" render={() => <MyFriends/>}/>
                    <Route path="/gallery" render={() => <Gallery/>}/>
                    <Route path="/videos" render={() => <Videos/>}/>
                    <Route path="/projects" render={() => <MyProjects/>}/>
                    <Route path="/groups" render={() => <MyGroups/>}/>
                    <Route path="/music" render={() => <MyMusic/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
