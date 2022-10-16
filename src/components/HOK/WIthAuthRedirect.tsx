import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function wIthAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props;
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return (
                 <Component  {...restProps as T}/>
        )
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent;
}