import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/actionTypes';

const initialState = {
  error: null,
  friends: [],
  isLoggedIn: null,
  isLoggingIn: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false
      };
    case LOGOUT:
      return {
        ...state,
        friends: [],
        isLoggedIn: false
      };
    default:
      return state;
  }
};
