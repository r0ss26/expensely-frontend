//initial state, make axios call and all actions here eg fetch
import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext'
import authReducer from './authReducer'
import setToken from '../../utils/setToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    CLEAR_ERRORS
} from '../types'


//create initial state
const AuthState = props => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: false,
        loading: true,
        error: null,
        user: null
    }

    //call and dispatch action types to reducer
    const [state, dispatch] = useReducer(authReducer, initialState)

    //get user after register/login
    const getUser = async () => {

        //load token into headers
        //  console.log("token", localStorage.token)
        if (localStorage.token) {
            setToken(localStorage.token)
        }

        try {
            const res = await axios.get('/auth')

            dispatch({
                type: GET_USER,
                payload: res.data //user data
            })

        } catch (error) {
            dispatch({
                type: AUTH_ERROR
            })
        }
    }

    //register user - to sigup user
    const register = async formData => {

        try {
            const res = await axios.post('/users/register', formData)

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })

            //get user after register
            getUser()

        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.msg
            })
        }

    }


    //login user
    const login = async formData => {

        try {
            const res = await axios.post('/auth/login', formData)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })

            //get user after login
            getUser()

        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.msg
            })
        }
    }


    //logout 
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    //clear errors
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }


    //wrap the app with the auth provider
    return <AuthContext.Provider
        //pass state available to the app here
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            loading: state.loading,
            error: state.error,
            register,
            logout,
            getUser,
            login,
            clearErrors
        }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthState
