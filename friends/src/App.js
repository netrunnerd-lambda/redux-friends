import React from 'react';
import { Route } from 'react-router-dom';

import {
  FriendsList,
  PrivateRoute
} from './components';

import {
  Header,
  Login
} from './components';

const App = _ => (
  <>
    <Header />
    <Route
      exact path="/"
      component={Login}
    />
    <PrivateRoute
      path="/friends"
      component={FriendsList}
    />
  </>
);

export default App;
