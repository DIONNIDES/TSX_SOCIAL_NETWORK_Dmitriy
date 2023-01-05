import React from 'react';
import styles from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Content/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import store, {RootStateType} from './redux/redux-store';
import {initializeApp} from './redux/appReducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './components/common/utils/withSuspense';

// lazy loading for fast app start
const DialogsContainer = React.lazy(() => import('./components/Content/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Content/Users/UsersContainer'));
const MyFriends = React.lazy(() => import('./components/Content/MyFriends/MyFriends'));
const MyProjects = React.lazy(() => import('./components/Content/MyProjects/MyProjects'));
const Gallery = React.lazy(() => import('./components/Content/Gallery/Gallery'));
const MyMusic = React.lazy(() => import('./components/Content/MyMusic/MyMusic'));
const Settings = React.lazy(() => import('./components/Content/Settings/Settings'));
const Videos = React.lazy(() => import('./components/Content/Videos/Videos'));
const MyGroups = React.lazy(() => import('./components/Content/MyGroups/MyGroups'));


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
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className={styles.App_wrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={styles.Main_wrapper}>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={withSuspense(UsersContainer)}/>
                        <Route path="/friends" render={withSuspense(MyFriends)}/>
                        <Route path="/gallery" render={withSuspense(Gallery)}/>
                        <Route path="/videos" render={withSuspense(Videos)}/>
                        <Route path="/projects" render={withSuspense(MyProjects)}/>
                        <Route path="/groups" render={withSuspense(MyGroups)}/>
                        <Route path="/music" render={withSuspense(MyMusic)}/>
                        <Route path="/settings" render={withSuspense(Settings)}/>
                        <Route path="/login" render={() => <LoginContainer/>}/>
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

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp}))(App)

export let SamuraiJsApp = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}