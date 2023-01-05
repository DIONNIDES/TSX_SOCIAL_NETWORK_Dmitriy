import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {requestUserProfile, requestUserStatus} from '../../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {wIthAuthRedirect} from '../../HOK/WIthAuthRedirect';
import {RootStateType} from '../../../redux/redux-store';
import {UpdatedProfileType} from '../../../DAL/API';

type PathParamsType = {
    userId: string | undefined
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


type MapStatePropsType = {
    authorizedUserID:number
    profile:UpdatedProfileType
}
type MapDispatchPropsType = {
    requestUserProfile: (userID: number) => void
    requestUserStatus: (userID: number) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<PathParamsType>> {
     refreshProfile = () =>{
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserID;
            if (!userId){
                this.props.history.push('/login');
            }
        }
        this.props.requestUserProfile(userId);
        this.props.requestUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType & RouteComponentProps<PathParamsType>>, prevState: Readonly<{}>, snapshot?: any) {
          if(this.props.match.params.userId !== prevProps.match.params.userId ){
              this.refreshProfile();
          }
    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId} {...this.props} />
        );
    }
};

const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        authorizedUserID: state.auth.id
    }
}

export default compose<ComponentType>(
  wIthAuthRedirect,
    connect(mapStateToProps, {requestUserProfile,requestUserStatus}),
    withRouter
)(ProfileContainer);