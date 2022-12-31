import React from 'react';
import {UserType} from '../../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader/Preloader';


export type PropsType = {
    users: Array<UserType>
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    totalCount: number
    pageSize: number
    currentPage: number
    setTotalCount: (totalCount: number) => void
    setCurrentPage:(page: number,portionNumber:number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<number>
    toggleIsFollowingProgress: (userID: number, isFetching: boolean) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    portion:number
}

export class UsersAPI extends React.Component<PropsType, any> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {

        const onCurrentPageHandler = (page: number, portionNumber:number) => {
            this.props.setCurrentPage(page, portionNumber)
            this.props.requestUsers(page, this.props.pageSize);
        }


        return (
            <>{this.props.isFetching
                ? <Preloader/>
                : <Users
                    users={this.props.users}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onCurrentPageHandler={onCurrentPageHandler}
                    isFetching={this.props.isFetching}
                    toggleIsFetching={this.props.toggleIsFetching}
                    followingInProgress={this.props.followingInProgress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    portion={this.props.portion}
                />
            }
            </>
        );
    }

}
