import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import store, {StateType, StoreType} from './redux/redux-store';
import App from './App';


let callSubscriber = (state: StateType) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

callSubscriber(store.getState());

store.subscribe(() => {
        let state = store.getState();
        callSubscriber(state)
    }
);

