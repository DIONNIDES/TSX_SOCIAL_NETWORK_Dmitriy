import React from 'react';
import {StateType} from '../../../../redux/redux-store';
import {Ava} from './Ava';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


type MapStateToPropsType ={
    profile:any
}

type MapDispatchToPropsType ={

}

const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        profile:state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType =>{
    return{

    }
}

export const AvaContainer = connect(mapStateToProps,mapDispatchToProps)(Ava);