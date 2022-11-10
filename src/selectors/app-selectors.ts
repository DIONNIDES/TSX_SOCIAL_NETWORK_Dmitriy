import {RootStateType} from '../redux/redux-store';

export const getIsInitialiaed = (state:RootStateType) =>{
    return state.app.isInitialized;
}

