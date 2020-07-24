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
  EDIT_TRANSACTION_SUCCESS,
  ADD_BUDGET_SUCCESS,
  DELETE_BUDGET_SUCCESS,
  EDIT_BUDGET_SUCCESS,
  CATEGORY_ERROR,
  UPDATE_CATEGORY_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS
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
          transactions: [
            ...state.user.transactions.filter(
              (transaction) => transaction._id !== action.payload._id
            ),
          ],
        },
      };
    case EDIT_TRANSACTION_SUCCESS:
      const index = state.user.transactions.findIndex(
        (transaction) => transaction._id === action.payload._id
      );
      return {
        ...state,
        user: {
          ...state.user,
          transactions: [
            ...state.user.transactions.slice(0, index),
            action.payload,
            ...state.user.transactions.slice(index + 1),
          ],
        },
      };
    case ADD_BUDGET_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          budgets: [...state.user.budgets, action.payload],
        },
        error: null,
      };
    case DELETE_BUDGET_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          budgets: [
            ...state.user.budgets.filter(
              (budget) => budget._id !== action.payload._id
            ),
          ],
        },
      };
    case EDIT_BUDGET_SUCCESS:
      const budget_index = state.user.budgets.findIndex(
        (budget) => budget._id === action.payload._id
      );
      return {
        ...state,
        user: {
          ...state.user,
          budgets: [
            ...state.user.budgets.slice(0, budget_index),
            action.payload,
            ...state.user.budgets.slice(budget_index + 1),
          ],
        },
      };
    case GET_CATEGORY:
      return {
        ...state,
        current_category: action.payload
      }

    case UPDATE_CATEGORY_SUCCESS:
      // console.log("cat reducer", action.payload)
      return {
        ...state,
        user: {
          ...state.user,
          categories: state.user.categories.map(cat => {
            if (cat._id === action.payload._id) {
              return action.payload
            } else {
              return cat
            }
          })
        },

      }
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          categories: [...state.user.categories, action.payload]
        }
      }

    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          categories: state.user.categories.filter(item =>
            item._id !== action.payload
          )
        }
      }
    case CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state

    default:
      return state;
  }
};


