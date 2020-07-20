//what happens in state based on reducer
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    GET_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_USER:
            console.log("get user payload", action.payload)
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload //user data
            }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            console.log("actionpayload", action.payload)
            return {
                ...state,
                //add token to state
                ...action.payload,
                isAuthenticated: true,
                // loading: false
            }


        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTH_ERROR:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                // loading: false,
                user: null,
                error: action.payload
            }
        // case LOGOUT:
        //     localStorage.removeItem("jwt")
        //     return {
        //         ...state,
        //         isAuthenticated: false,
        //         user: null
        //     }
        default:
            return state
    }
}
