import React from 'react';
import {StateType} from '../../../../redux/redux-store';
import {Ava} from './Ava';
import {connect} from 'react-redux';
import {setUserStatus, updateUserStatus} from '../../../../redux/profileReducer';


type MapStateToPropsType ={
    profile:any
    profileStatus:string
}


const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        profile:state.profilePage.profile,
        profileStatus:state.profilePage.profileStatus
    }
}



export const AvaContainer = connect(mapStateToProps, {setUserStatus,updateUserStatus})(Ava);