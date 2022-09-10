import React from 'react';
import {ActionTypes, StateType} from '../../../../redux/redux-store';
import {Description} from './Description';
import {updateNewPortfolioFieldTextActionCreator} from '../../../../redux/profileReducer';
import {connect} from 'react-redux';


const mapStateToProps = (state:StateType)=>{
    return{
        usersCharacteristics:state.profilePage.usersCharacteristics
    }
}

const mapDispatchToProps = (dispatch:(action:ActionTypes)=>void) =>{
    return{
        updateNewPortfolioFieldText: (fieldID:string, fieldText:string)=>{
            dispatch(updateNewPortfolioFieldTextActionCreator(fieldID, fieldText));
        }
    }

}

export const DescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(Description);
