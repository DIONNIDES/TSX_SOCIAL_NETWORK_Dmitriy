import React from 'react';
import styles from './App.module.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {Profile} from './components/Content/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {MyFriends} from './components/Content/MyFriends/MyFriends';
import {MyProjects} from './components/Content/MyProjects/MyProjects';
import {Gallery} from './components/Content/Gallery/Gallery';
import {MyMusic} from './components/Content/MyMusic/MyMusic';
import {Settings} from './components/Content/Settings/Settings';
import {Videos} from './components/Content/Videos/Videos';
import {MyGroups} from './components/Content/MyGroups/MyGroups';
import {DialogsContainer} from './components/Content/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Content/Users/UsersContainer';


function App() {
    return (
        <BrowserRouter>
            <div className={styles.App_wrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.Main_wrapper}>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
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
