import axios from 'axios';
import withAuth from './auth';

import {
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
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
} from './actionTypes';

const endpoint = 'http://localhost:5000/api';

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });

  return withAuth().post(`${endpoint}/friends`, friend)
                   .then(({ data }) => dispatch({
                     type: ADD_FRIEND_SUCCESS,
                     payload: data
                   }))
                   .catch(err => dispatch({
                     type: ADD_FRIEND_FAILURE,
                     payload: err.response.data.error
                   }));
}

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });

  return withAuth().delete(`${endpoint}/friends/${id}`)
                   .then(({ data }) => dispatch({
                     type: DELETE_FRIEND_SUCCESS,
                     payload: data
                   }))
                   .catch(err => dispatch({
                     type: DELETE_FRIEND_FAILURE,
                     payload: err.response.data.error
                   }));
};

export const fetchFriends = _ => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });

  return withAuth().get(`${endpoint}/friends`)
                   .then(({ data }) => dispatch({
                     type: FETCH_FRIENDS_SUCCESS,
                     payload: data
                   }))
                   .catch(err => dispatch({
                     type: FETCH_FRIENDS_FAILURE,
                     payload: err.response.data.error
                   }));
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post(`${endpoint}/login`, {...creds})
              .then(({ data }) => {
                dispatch({
                  type: LOGIN_SUCCESS,
                  token: data.payload
                });
              })
              .catch(err => {
                dispatch({
                  type: LOGIN_FAILURE,
                  payload: err.response.data.error
                });
              });
};

export const logout = _ => ({
  type: LOGOUT
});

export const setActiveFriend = friend => ({
  type: SET_ACTIVE_FRIEND,
  payload: friend
});

export const updateFriend = (id, friend) => dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });

  return withAuth().put(`${endpoint}/friends/${id}`, friend)
                   .then(({ data }) => dispatch({
                     type: UPDATE_FRIEND_SUCCESS,
                     payload: data
                   }))
                   .catch(err => dispatch({
                     type: UPDATE_FRIEND_FAILURE,
                     payload: err.response.data.error
                   }));
};