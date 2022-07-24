import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from './components/Content/Profile/MyPosts/Post/Post';
import {UserInfoType} from './components/Content/Profile/Description/Description';


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

ReactDOM.render(
    <App posts={posts} usersCharacteristics={usersCharacteristics}/>,
  document.getElementById('root')
);