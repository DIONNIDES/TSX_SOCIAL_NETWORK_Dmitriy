import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from './components/Content/Profile/MyPosts/Post/Post';
import {UserInfoType} from './components/Content/Profile/Description/Description';
import {DialogType} from './components/Content/Dialogs/Dialog/Dialog';
import {message} from 'antd';
import {MessageType} from './components/Content/Dialogs/Message/Message';


let posts: Array<PostType>= [
    {id:1, message:"It`s my first post", time:"20:00", likes:23},
    {id:2, message:"It`s my second post", time:"20:05", likes:33},
    {id:3, message:"It`s my third post", time:"20:50", likes:44},
    {id:4, message:"It`s my fourth post", time:"20:58", likes:55},
    {id:5, message:"It`s my fifth post", time:"21:00", likes:66},
];

let usersCharacteristics:Array<UserInfoType> =[
    {id:1, name:"Dmitriy", lastName:"Kurgan", education: "Engineer",
        profession:"Web-Developer", knowledges:"React,Redux,JS,TS", status: "It`s my first status on this page"}

];

let dialogs:Array<DialogType> = [
    {id:1, name:'Dmitriy', lastName:'Kurgan', lastData:'20:00'},
    {id:2, name:'Kolyan', lastName:'Poltorak', lastData:'20:00'},
    {id:3, name:'Olga', lastName:'Lezhentseva', lastData:'20:00'},
    {id:4, name:'Ivan', lastName:'Mamonov', lastData:'20:00'},
    {id:5, name:'Artem', lastName:'Ryaboshapko', lastData:'20:00'},
    {id:6, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:7, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:8, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:9, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:10, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:11, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:12, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:13, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:14, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
    {id:15, name:'Victor', lastName:'Pobeditel', lastData:'20:00'},
];

let messages:Array<MessageType> = [
    {id:1, name:'Dmitriy', lastName:'Kurgan', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem' },
    {id:2, name:'Kolyan', lastName:'Poltorak', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:3, name:'Olga', lastName:'Lezhentseva', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:4, name:'Ivan', lastName:'Mamonov', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:5, name:'Artem', lastName:'Ryaboshapko', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:6, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:7, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:8, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:9, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:10, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:11, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:12, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:13, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id:14, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem loremm'},
    {id:15, name:'Victor', lastName:'Pobeditel', lastData:'20:00', messageText:'lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
];

ReactDOM.render(
    <App posts={posts} usersCharacteristics={usersCharacteristics} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);