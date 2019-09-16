import {
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/actionTypes';

export const handleLogging = store => next => action => {
  if (action.type === LOGIN_SUCCESS)
    localStorage.setItem('token', action.token)

  if (action.type === LOGOUT)
    localStorage.removeItem('token');

  next(action);
};
