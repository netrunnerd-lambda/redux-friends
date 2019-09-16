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
      exact path="/friends"
      component={FriendsList}
    />
    <PrivateRoute
      exact path="/add"
      component={Form}
    />
    <PrivateRoute
      exact path="/update"
      component={Form}
    />
  </>
);

export default App;
