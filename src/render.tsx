import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreType} from './redux/store';


export let rerenderEntireTree = (store:StoreType) =>{
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}
