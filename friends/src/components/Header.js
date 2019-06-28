import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const Header = props => {
  return (
    <header>
      <h1>FriendSpace</h1>
      {props.isLoggedIn &&
        <nav>
          <Link to="/" onClick={_ => props.logout()}>
            Logout
          </Link>
        </nav>
      }
    </header>
  );
}

const mapState = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapState,
  { logout }
)(Header);
