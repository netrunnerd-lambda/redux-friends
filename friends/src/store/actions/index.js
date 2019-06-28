import axios from 'axios';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './actionTypes';

const endpoint = 'http://localhost:5000/api';

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
