import React, {useEffect} from 'react';
import styles from './Users.module.css';
import {User} from './User/User';
import {UserType} from '../../../redux/redux-store';
import axios from 'axios';
import {Button} from '../../common/Button/Button';


export type PropsType = {
    users:Array<UserType>
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
    totalCount: number
    pageSize: number
    currentPage:number
    setTotalCount:(totalCount:number)=>void
    setCurrentPage:(currentPage:number)=>void
}

export class Users extends React.Component<PropsType, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
            console.log(response.data.totalCount)
        })
    }


    render(){

        let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        console.log(pagesCount)
        let pages = [];

        for (let i = 1; i <=pagesCount ; i++) {
            pages.push(i)
        }

        const onCurrentPageHandler = (page:number)=>{
            this.props.setCurrentPage(page)
            console.log(page)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response=>{
                this.props.setUsers(response.data.items);
            })
        }

       let users =  this.props.users.map(u=><User key ={u.id} id={u.id} name={u.name}
                                      userStatus={u.userStatus} followed={u.followed}
                                      location={u.location} photos={u.photos && u.photos.small} wasOnline={u.wasOnline}
                                      follow={()=>this.props.follow(u.id)} unfollow={()=>this.props.unfollow(u.id)}
        />)
        return (
            <div className={styles.users_wrapper} >
                <div className={styles.paginatorWrap}>
                    {pages.map(p=><Button  className={p===this.props.currentPage? styles.currentPage: ''} title={p.toString()} callback={()=>onCurrentPageHandler(p)} />)}
                </div>
                {users.length > 0
                    ? users
                    : 'There are currently no users...'
                }
            </div>
        );
    }

}


//FUNCTIONAL COMPONENT + USE EFFECT

/*

export type PropsType = {
    users:Array<UserType>
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
}

export const Users = (props:PropsType) => {/!**!/
    useEffect(()=>{

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            props.setUsers(response.data.items);
            debugger
        })

    }, [])

    const users = props.users.map(u=><User key ={u.id} id={u.id} name={u.name}
                                           userStatus={u.userStatus} followed={u.followed}
                                           location={u.location} photos={u.photos && u.photos.small} wasOnline={u.wasOnline}
                                           follow={()=>props.follow(u.id)} unfollow={()=>props.unfollow(u.id)}
    />)
    return (
        <div className={styles.users_wrapper} >

            {users.length > 0
                ? users
                : 'There are currently no users...'
            }
        </div>
    );
};

*/
