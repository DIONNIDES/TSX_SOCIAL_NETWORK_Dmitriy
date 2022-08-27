import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import store from './redux/store';
import {StoreType} from './redux/store';
import App from './App';


let callSubscriber = () =>{
    ReactDOM.render(
        <App state={store.getState()}  dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

store.subscribe(callSubscriber);

callSubscriber();