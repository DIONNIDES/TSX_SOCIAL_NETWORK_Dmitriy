import React from 'react';
import './index.css';
import store from './redux/store';
import {rerenderEntireTree} from './render';


rerenderEntireTree(store);