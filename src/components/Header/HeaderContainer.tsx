import React from 'react';
import {Header} from './Header';
import {AuthType, requestUserData} from '../../redux/authReducer';
import {connect} from 'react-redux';

type MapStateToPropsType = ReturnType<typeof mapStateToProps >


type PropsType = MapStateToPropsType & {
    requestUserData:(id: number | null,
                    email: string | null,
                    login: string | null) => void
}


export class HeaderAPI extends React.Component<any>{

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
const mapStateToProps = (state: AuthType) => {
    debugger
    return {
        isAuth: state.isAuth,
        id: state.id,
        login: state.login,
        email: state.email
    }
}
export const HeaderContainer = connect(mapStateToProps, {requestUserData})(HeaderAPI);

// const mapDispatchToProps = (dispatch:Dispatch) =>{
//     return{
//         requestUserData: (id: number | null,
//                           email: string | null,
//                           login: string | null)=>{
//
//             dispatch (requestUserData(id, email, login))
//
//         }
//     }
// }