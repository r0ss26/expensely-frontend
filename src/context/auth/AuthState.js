//initial state, make axios call and all actions here eg fetch
import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setToken from '../../utils/setToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  CLEAR_ERRORS,
  ADD_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_FAIL,
  DELETE_TRANSACTION_SUCCESS,
  EDIT_TRANSACTION_SUCCESS,
  ADD_BUDGET_SUCCESS,
  DELETE_BUDGET_SUCCESS,
  EDIT_BUDGET_SUCCESS,
  GET_CATEGORY,
  CATEGORY_ERROR,
  CURRENT_USER,
  UPDATE_CATEGORY_SUCCESS
} from '../types';

//create initial state
const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    error: null,
    user: null,
    current_category: null,
    current_user: null,
    categories: []
  }
  //call and dispatch action types to reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //get user after register/login
  const getUser = async () => {
    //load token into headers
    //  console.log("token", localStorage.token)
    if (localStorage.token) {
      setToken(localStorage.token);

      try {
        const res = await axios.get('/auth');

        dispatch({
          type: GET_USER,
          payload: res.data, //user data
        });
      } catch (error) {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    };
  }
  //register user - to sigup user
  const register = async (formData) => {
    try {
      const res = await axios.post('/users/register', formData);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      //get user after register
      getUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
    }
  };

  //login user
  const login = async (formData) => {
    try {
      const res = await axios.post('/auth/login', formData);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      //get user after login
      getUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg,
      });
    }
  };

  //logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  //clear errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  // Add Transaction
  const addTransaction = async (transactionType, transactionData) => {
    try {
      console.log('here');
      const res = await axios.post('/transactions', {
        transactionType,
        ...transactionData,
      });
      dispatch({
        type: ADD_TRANSACTION_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ADD_TRANSACTION_FAIL,
        payload: error.response,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      const res = await axios.delete(`/transactions/${id}`);
      console.log(res.data);
      dispatch({
        type: DELETE_TRANSACTION_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editTransaction = async (id, transactionType, body) => {
    try {
      const res = await axios.put(`/transactions/${id}`, { transactionType, ...body });
      console.log(res);
      dispatch({
        type: EDIT_TRANSACTION_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addBudget = async (formData) => {
    try {
      const res = await axios.post(`/budgets`, formData)
      dispatch({
        type: ADD_BUDGET_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBudget = async (id) => {
    try {
      const res = await axios.delete(`/budgets/${id}`)
      dispatch({
        type: DELETE_BUDGET_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const editBudget = async (id, body) => {
    try {
      const res = await axios.put(`/budgets/${id}`, body)
      dispatch({
        type: EDIT_BUDGET_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getCategory = category => {
    dispatch({
      type: GET_CATEGORY,
      payload: category
    })
  }

  const updateCategory = async formData => {
    console.log("action formdata", formData)
    console.log("action id", formData.id)
    try {
      const res = await axios.put(`/categories/${formData.id}`, formData)
      console.log("action res", res.data)
      dispatch({
        type: UPDATE_CATEGORY_SUCCESS,
        payload: res.data
      })

    } catch (error) {
      dispatch({
        type: CATEGORY_ERROR,
        payload: error.response.data.msg
      })
    }
  }

  //wrap the app with the auth provider
  return (
    <AuthContext.Provider
      //pass state available to the app here
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        current_category: state.current_category,
        register,
        logout,
        getUser,
        login,
        clearErrors,
        addTransaction,
        deleteTransaction,
        editTransaction,
        addBudget,
        deleteBudget,
        editBudget,
        getCategory,
        updateCategory
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};



export default AuthState;
