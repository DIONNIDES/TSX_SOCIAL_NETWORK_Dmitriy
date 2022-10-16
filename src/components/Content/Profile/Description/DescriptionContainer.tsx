import React from 'react';
import {StateType, UserInfoType} from '../../../../redux/redux-store';
import {Description} from './Description';
import {updateNewPortfolioFieldText} from '../../../../redux/profileReducer';
import {connect} from 'react-redux';

type MapStateToPropsType ={
    usersCharacteristics:Array<UserInfoType>
}

/*type MapDispatchToPropsType ={
    updateNewPortfolioFieldText: (fieldID:string, fieldText:string)=>void
}*/

const mapStateToProps = (state:StateType):MapStateToPropsType=>{
    return{
        usersCharacteristics:state.profilePage.usersCharacteristics
    }
}

/*const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType =>{
    return{
        updateNewPortfolioFieldText: (fieldID:string, fieldText:string)=>{
            dispatch(updateNewPortfolioFieldText(fieldID, fieldText));
        }
    }
}*/

export const DescriptionContainer = connect(mapStateToProps, {updateNewPortfolioFieldText})(Description);
