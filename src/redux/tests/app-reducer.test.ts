import {appReducer, initializedSuccess} from '../appReducer';


test('App should correct initialized',()=>{
    let initialState = {
       isInitialized: false
    }
    const endState = appReducer(initialState, initializedSuccess());

    expect(initialState.isInitialized).toBe(false);
    expect(endState.isInitialized).toBe(true);

})
