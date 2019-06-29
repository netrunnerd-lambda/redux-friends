import {
  ADD_FRIEND_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_ACTIVE_FRIEND,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE
} from '../actions/actionTypes';

const initialState = {
  activeFriend: null,
  addingFriend: null,
  deletingFriend: null,
  error: null,
  friends: [],
  isFetching: null,
  isLoggingIn: null,
  updatingFriend: null,
  userToken: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND_START:
      return {
        ...state,
        addingFriend: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        addingFriend: false,
        friends: action.payload
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        addingFriend: false,
        error: action.payload
      };
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
    case SET_ACTIVE_FRIEND:
      return {
        ...state,
        activeFriend: action.payload
      };
    case UPDATE_FRIEND_START:
      return {
        ...state,
        updatingFriend: true,
      };
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        activeFriend: null,
        friends: action.payload,
        updatingFriend: false
      };
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
