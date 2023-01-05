import {authReducer, AuthType, setUserData} from '../authReducer';


test('Users data should correct updated',()=>{
    let initialState:AuthType = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        captcha:null
    }

    const endState = authReducer(initialState, setUserData(14933, 'dimakurgan123789@gmail.com', 'DIONNIDES', true));

    expect(initialState.id).toBe(null);
    expect(endState.id).toBe(14933);

    expect(initialState.email).toBe(null);
    expect(endState.email).toBe('dimakurgan123789@gmail.com');

    expect(initialState.login).toBe(null);
    expect(endState.login).toBe('DIONNIDES');

    expect(initialState.isAuth).toBe(false);
    expect(endState.isAuth).toBe(true);

})
