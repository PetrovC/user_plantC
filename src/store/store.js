import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import missionsReducer from './missionsSlice';
import alertesReducer from './alertesSlice';

const store =configureStore({
    reducer:{
        missions: missionsReducer,
        alertes: alertesReducer,
    },
    middleware:[thunkMiddleware]
})

export default store