import React, {useEffect} from 'react';
import styles from './Users.module.css';
import {User} from './User/User';
import {UserType} from '../../../redux/redux-store';
import axios from 'axios';


export type PropsType = {
    users:Array<UserType>
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
}

export class Users extends React.Component<PropsType, any>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            this.props.setUsers(response.data.items);
        })
    }

    users = this.props.users.map(u=><User key ={u.id} id={u.id} name={u.name}
                                           userStatus={u.userStatus} followed={u.followed}
                                           location={u.location} photos={u.photos && u.photos.small} wasOnline={u.wasOnline}
                                           follow={()=>this.props.follow(u.id)} unfollow={()=>this.props.unfollow(u.id)}
    />)

    render(){

        return (
            <div className={styles.users_wrapper} >

                {this.users.length > 0
                    ? this.users
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
