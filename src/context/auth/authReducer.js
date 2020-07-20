//what happens in state based on reducer
import {
    GET_USER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    AUTH_ERROR,
    CLEAR_ERRORS
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload //user data
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                //add token to state
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }


        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTH_ERROR:
            localStorage.removeItem("token")
            console.log("error payload", action.payload)
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
