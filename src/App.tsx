import React from 'react';
import styles from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
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
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import Login from './components/Content/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import store, {RootStateType} from './redux/redux-store';
import {initializeApp} from './redux/appReducer';
import {Preloader} from './components/common/Preloader/Preloader';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type AppPropsType = MapStateToPropsType & {
    initializeApp: any
}

class App extends React.Component<AppPropsType, any> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className={styles.App_wrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={styles.Main_wrapper}>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/friends" render={() => <MyFriends/>}/>
                        <Route path="/gallery" render={() => <Gallery/>}/>
                        <Route path="/videos" render={() => <Videos/>}/>
                        <Route path="/projects" render={() => <MyProjects/>}/>
                        <Route path="/groups" render={() => <MyGroups/>}/>
                        <Route path="/music" render={() => <MyMusic/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

let AppContainer =  compose(
    connect(mapStateToProps, {initializeApp}))(App)

export let SamuraiJsApp = ()=>{
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}