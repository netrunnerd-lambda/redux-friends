import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { handleLogging } from './middleware';
import { rootReducer } from './reducers';

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, handleLogging, logger)
  ));
