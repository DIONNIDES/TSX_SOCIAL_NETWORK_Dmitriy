import {PostType} from '../../components/Content/Profile/MyPosts/Post/Post';
import {UserInfoType} from '../redux-store';
import {
    addPostActionCreator,
    profileReducer,
    updateNewPortfolioFieldTextActionCreator,
    updateNewPostTextActionCreator
} from '../profileReducer';


test('new post should be added',()=>{
    let initialState = {
        posts: [
            {id: '1', message: 'It`s my first post', time: '20:00', likes: 23},
            {id: '2', message: 'It`s my second post', time: '20:05', likes: 33},
            {id: '3', message: 'It`s my third post', time: '20:50', likes: 44},
            {id: '4', message: 'It`s my fourth post', time: '20:58', likes: 55},
            {id: '5', message: 'It`s my fifth post', time: '21:00', likes: 66},
        ] as Array<PostType>,
        newPostText: '' as string,
        profileStatus: 'Its my first status' as string,
        usersCharacteristics: [
            {id: '1', field: 'Name', fietldTitle: 'Dmitriy'},
            {id: '2', field: 'Lastname', fietldTitle: 'Kurgan'},
            {id: '3', field: 'Education', fietldTitle: 'Engineering'},
            {id: '4', field: 'Profession', fietldTitle: 'Web-developer'},
            {id: '5', field: 'Skills', fietldTitle: 'React+Redux, JS/TS'},
        ] as Array<UserInfoType>,

    }

    const endState = profileReducer(initialState, addPostActionCreator());

    expect(initialState.posts.length).toBe(5);
    expect(endState.posts.length).toBe(6);
})

test('new post text should be changed',()=>{
    let initialState = {
        posts: [
            {id: '1', message: 'It`s my first post', time: '20:00', likes: 23},
            {id: '2', message: 'It`s my second post', time: '20:05', likes: 33},
            {id: '3', message: 'It`s my third post', time: '20:50', likes: 44},
            {id: '4', message: 'It`s my fourth post', time: '20:58', likes: 55},
            {id: '5', message: 'It`s my fifth post', time: '21:00', likes: 66},
        ] as Array<PostType>,
        newPostText: '' as string,
        profileStatus: 'Its my first status' as string,
        usersCharacteristics: [
            {id: '1', field: 'Name', fietldTitle: 'Dmitriy'},
            {id: '2', field: 'Lastname', fietldTitle: 'Kurgan'},
            {id: '3', field: 'Education', fietldTitle: 'Engineering'},
            {id: '4', field: 'Profession', fietldTitle: 'Web-developer'},
            {id: '5', field: 'Skills', fietldTitle: 'React+Redux, JS/TS'},
        ] as Array<UserInfoType>,

    }

    const endState = profileReducer(initialState, updateNewPostTextActionCreator('dima'));

    expect(initialState.newPostText).toBe('');
    expect(endState.newPostText).toBe('dima');
})

test('new portfolio field text should be changed',()=>{
    let initialState = {
        posts: [
            {id: '1', message: 'It`s my first post', time: '20:00', likes: 23},
            {id: '2', message: 'It`s my second post', time: '20:05', likes: 33},
            {id: '3', message: 'It`s my third post', time: '20:50', likes: 44},
            {id: '4', message: 'It`s my fourth post', time: '20:58', likes: 55},
            {id: '5', message: 'It`s my fifth post', time: '21:00', likes: 66},
        ] as Array<PostType>,
        newPostText: '' as string,
        profileStatus: 'Its my first status' as string,
        usersCharacteristics: [
            {id: '1', field: 'Name', fietldTitle: 'Dmitriy'},
            {id: '2', field: 'Lastname', fietldTitle: 'Kurgan'},
            {id: '3', field: 'Education', fietldTitle: 'Engineering'},
            {id: '4', field: 'Profession', fietldTitle: 'Web-developer'},
            {id: '5', field: 'Skills', fietldTitle: 'React+Redux, JS/TS'},
        ] as Array<UserInfoType>,

    }

    const endState = profileReducer(initialState, updateNewPortfolioFieldTextActionCreator('1','new text'));

    expect(initialState.usersCharacteristics[0].fietldTitle).toBe('Dmitriy');
    expect(endState.usersCharacteristics[0].fietldTitle).toBe('new text');

})