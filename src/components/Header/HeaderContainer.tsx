import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {logout} from '../../redux/authReducer';

type MapStateToPropsType = ReturnType<typeof mapStateToProps >


type PropsType = MapStateToPropsType & {
    logout:()=>void
}

export class HeaderAPI extends React.Component<PropsType>{
    render() {
        return (
            <Header
                id={this.props.id}
                login={this.props.login}
                email={this.props.email}
                isAuth={this.props.isAuth}
                logout={this.props.logout}
            />
        );
    }
}
const mapStateToProps = (state:RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email
    }

}
export const HeaderContainer = connect(mapStateToProps, {logout})(HeaderAPI);

