import React from 'react';
import {ActionTypes, StateType} from '../../../../redux/redux-store';
import {Ava} from './Ava';
import {Action} from 'redux';
import {connect} from 'react-redux';


/*
type AvaPropsType = {
    store: StoreType;
}
export const AvaContainer = (props:AvaPropsType) => {
    let state = props.store.getState().profilePage;

    return <Ava profileStatus={state.profileStatus}   />
};
*/


const mapStateToProps = (state:StateType)=>{
    return{
        profileStatus:state.profilePage.profileStatus
    }
}

const mapDispatchToProps = (dispatch:(action:ActionTypes)=>void) =>{
    return{

    }
}

export const AvaContainer = connect(mapStateToProps,mapDispatchToProps)(Ava);