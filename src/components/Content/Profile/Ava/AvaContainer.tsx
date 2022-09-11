import React from 'react';
import {ActionTypes, StateType, UserInfoType} from '../../../../redux/redux-store';
import {Ava} from './Ava';
import {Action, Dispatch} from 'redux';
import {connect} from 'react-redux';


type MapStateToPropsType ={
    profileStatus:string
}

type MapDispatchToPropsType ={

}

const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        profileStatus:state.profilePage.profileStatus
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType =>{
    return{

    }
}

export const AvaContainer = connect(mapStateToProps,mapDispatchToProps)(Ava);