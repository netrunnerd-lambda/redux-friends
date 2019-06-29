import {
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/actionTypes';

const initialState = {
  deletingFriend: null,
  error: null,
  friends: [],
  isFetching: null,
  isLoggingIn: null,
  userToken: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FRIEND_START:
      return {
        ...state,
        deletingFriend: true
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        friends: action.payload
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isFetching: false
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        userToken: action.payload
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
        userToken: null
      };
    default:
      return state;
  }
};
