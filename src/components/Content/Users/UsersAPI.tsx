import React from 'react';
import {UserType} from '../../../redux/redux-store';
import axios from 'axios';
import {Users} from './Users';


export type PropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    totalCount: number
    pageSize: number
    currentPage: number
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

export class UsersAPI extends React.Component<PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
            console.log(response.data.totalCount)
        })
    }


    render() {

        const onCurrentPageHandler = (page: number) => {
            this.props.setCurrentPage(page)
            console.log(page)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            })
        }


        return (
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setTotalCount={this.props.setTotalCount}
                setCurrentPage={this.props.setCurrentPage}
                onCurrentPageHandler={onCurrentPageHandler}
            />
        );
    }

}
