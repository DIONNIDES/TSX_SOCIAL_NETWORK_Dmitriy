import {UserType} from '../redux-store';
import {followSuccess, setUsers, unfollowSuccess, usersReducer} from '../usersReducer';


test('new followed status should be followed',()=>{
    let initialState = {
        users: [
        ] as Array<UserType>,
        totalCount: 0,
        pageSize: 5,
        currentPage:1,
        isFetching: false,
        followingInProgress: []
    }

    const endState = usersReducer(initialState, followSuccess(1));

    expect(initialState.users[0].followed).toBe(false);
    expect(endState.users[0].followed).toBe(true);
})

test('new followed status should be unfollowed',()=>{
    let initialState = {
        users: [
        ] as Array<UserType>,
        totalCount: 0,
        pageSize: 5,
        currentPage:1,
        isFetching: false,
        followingInProgress: []
    }

    const endState = usersReducer(initialState, unfollowSuccess(1));

    expect(initialState.users[0].followed).toBe(true);
    expect(endState.users[0].followed).toBe(false);
})

test('users should be added to state',()=>{
    let initialState = {
        users: [
        ] as Array<UserType>,
        totalCount: 0,
        pageSize: 5,
        currentPage:1,
        isFetching:false,
        followingInProgress: []
    }
    const endState = usersReducer(initialState, setUsers([{id:11, name:'Dima', followed:false, photos:'none', userStatus:'status', wasOnline:'11111'}]));

    expect(initialState.users.length).toBe(0);
    expect(endState.users.length).toBe(1);

})
