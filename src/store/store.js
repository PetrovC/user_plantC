import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import missionsReducer from './missionsSlice';

const store =configureStore({
    reducer:{
        missions: missionsReducer,
    },
    middleware:[thunkMiddleware]
})

export default store