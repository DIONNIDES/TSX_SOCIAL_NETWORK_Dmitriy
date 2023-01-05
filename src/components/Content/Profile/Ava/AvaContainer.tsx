import React from 'react';
import {StateType} from '../../../../redux/redux-store';
import {Ava} from './Ava';
import {connect} from 'react-redux';
import {setUserPhoto, setUserStatus, updateUserProfile, updateUserStatus} from '../../../../redux/profileReducer';
import {UpdatedProfileType} from '../../../../DAL/API';


type MapStateToPropsType ={
    profile:UpdatedProfileType
    profileStatus:string
    userID:number |null
}


const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        userID:state.auth.id,
        profile:state.profilePage.profile,
        profileStatus:state.profilePage.profileStatus
    }
}



export const AvaContainer = connect(mapStateToProps,
    {setUserStatus,updateUserStatus,setUserPhoto,updateUserProfile})(Ava);