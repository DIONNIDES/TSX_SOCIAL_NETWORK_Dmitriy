import React from 'react';
import {Header} from './Header';
import {AuthType, requestUserData} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';

type MapStateToPropsType = ReturnType<typeof mapStateToProps >


type PropsType = MapStateToPropsType & {
    requestUserData:() => void
}

export class HeaderAPI extends React.Component<PropsType>{
    componentDidMount() {
       this.props.requestUserData()
    }
    render() {
        return (
            <Header
                id={this.props.id}
                login={this.props.login}
                email={this.props.email}
                isAuth={this.props.isAuth}
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
export const HeaderContainer = connect(mapStateToProps, {requestUserData})(HeaderAPI);

