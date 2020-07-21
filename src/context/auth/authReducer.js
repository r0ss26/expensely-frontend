//reducer - what happens in state
import {
  GET_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS,
  ADD_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_FAIL,
  DELETE_TRANSACTION_SUCCESS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload, //user data
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        //add token to state
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      //console.log("error payload", action.payload)
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          transactions: [...state.user.transactions, action.payload],
        },
        error: null,
      };
    case ADD_TRANSACTION_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          transactions: [...state.user.transactions.filter(transaction => transaction._id !== action.payload._id)]
        }
        
      }
    default:
      return state;
  }
};
