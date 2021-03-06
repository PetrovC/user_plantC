import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './typeLogin'
import {LOGOUT } from '../logout/typeLogout'

const loginKey = "login"
let localdata = JSON.parse(localStorage.getItem(loginKey))

const initialStateComments = localdata || {
// const initialStateComments ={   
    isLoading: false,
    isLogged: false,
    token: '',
    error: '',
}

const reducerLogin = (state = initialStateComments, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true,
                isLogged: false,
                token: '',
                error: ''
            }
            case LOGIN_SUCCESS:
                localStorage.setItem(loginKey, JSON.stringify({
                    ...state,
                    isLoading: false,
                    isLogged: true,
                    token: action.payload,
                    error: ''
                }))
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                token: action.payload,
                error: ''
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isLogged: false,
                token: '',
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: false,
                isLogged: false,
                token: '',
                error: ''
            }
    
        default: return state
    }
}

export default reducerLogin