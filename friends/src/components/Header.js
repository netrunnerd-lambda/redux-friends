import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

class Header extends Component {
  handleLogout = e => {
    this.props.logout();
  };

  render() {
    const token = localStorage.getItem('token');

    const unregNav = (
      <nav>
        <Link to="/sign-up">
          Sign Up
        </Link>
      </nav>
    );

    const userNav = (
      <nav>
        <Link to="/add">
          Add
        </Link>
        <Link to="/friends">
          List
        </Link>
        <Link to="/" onClick={this.handleLogout}>
          Logout
        </Link>
      </nav>
    );

    return (
      <header>
        <h1>FriendSpace</h1>
        {token ? userNav : unregNav}
      </header>
    );
  }
}

export default connect(
  null,
  { logout }
)(Header);
