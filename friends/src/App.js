import React from 'react';
import { Route } from 'react-router-dom';

import {
  Header,
  Login,
  FriendsList,
  Form,
  PrivateRoute
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
    <PrivateRoute
      path="/add"
      component={Form}
    />
  </>
);

export default App;
