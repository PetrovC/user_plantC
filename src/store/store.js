import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import missionsReducer from './missionsSlice';
import alertesReducer from './alertesSlice';
import reducerLogin from '../authentication/login/reducerLogin'

const store =configureStore({
    reducer:{
        login: reducerLogin,
        missions: missionsReducer,
        alertes: alertesReducer,
    },
    middleware:[thunkMiddleware]
})

export default store