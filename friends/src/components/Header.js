import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

class Header extends Component {
  handleLogout = e => {
    this.props.logout();
  };

  render() {
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
        {this.props.token || localStorage.getItem('token') ? userNav : null}
      </header>
    );
  }
}

const mapState = state => ({
  token: state.userToken
});

export default connect(
  mapState,
  { logout }
)(Header);
