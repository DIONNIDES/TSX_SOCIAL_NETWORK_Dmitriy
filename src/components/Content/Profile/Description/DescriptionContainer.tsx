import React from 'react';
import {StateType, UserInfoType} from '../../../../redux/redux-store';
import {Description} from './Description';
import {updateNewPortfolioFieldText} from '../../../../redux/profileReducer';
import {connect} from 'react-redux';

type MapStateToPropsType ={
    usersCharacteristics:Array<UserInfoType>
}

const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        usersCharacteristics:state.profilePage.usersCharacteristics
    }
}

export const DescriptionContainer = connect(mapStateToProps, {updateNewPortfolioFieldText})(Description);
