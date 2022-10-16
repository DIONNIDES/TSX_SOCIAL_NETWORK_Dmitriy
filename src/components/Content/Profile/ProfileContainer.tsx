import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {requestUserProfile} from '../../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {wIthAuthRedirect} from '../../HOK/WIthAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string | undefined
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


type MapStatePropsType = {
    profile: any
}
type MapDispatchPropsType = {
    requestUserProfile: (userID: number) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<PathParamsType>> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 14933;
        }
        this.props.requestUserProfile(userId);
    }
    render() {
        return (
            <Profile {...this.props} />
        );
    }
};

const mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose<ComponentType>(
    wIthAuthRedirect,
    connect(mapStateToProps, {requestUserProfile}),
    withRouter
)(ProfileContainer);