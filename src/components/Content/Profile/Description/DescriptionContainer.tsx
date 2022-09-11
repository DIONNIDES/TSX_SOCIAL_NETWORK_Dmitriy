import React from 'react';
import {StateType, UserInfoType} from '../../../../redux/redux-store';
import {Description} from './Description';
import {updateNewPortfolioFieldTextActionCreator} from '../../../../redux/profileReducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


type MapStateToPropsType ={
    usersCharacteristics:Array<UserInfoType>
}

type MapDispatchToPropsType ={
    updateNewPortfolioFieldText: (fieldID:string, fieldText:string)=>void
}

const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        usersCharacteristics:state.profilePage.usersCharacteristics
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType =>{
    return{
        updateNewPortfolioFieldText: (fieldID:string, fieldText:string)=>{
            dispatch(updateNewPortfolioFieldTextActionCreator(fieldID, fieldText));
        }
    }

}

export const DescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(Description);
