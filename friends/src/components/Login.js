import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';

import { login } from '../store/actions';

class Login extends Component {
  state = {
    creds: {
      username: '',
      password: ''
    }
  };

  handleChange = e => this.setState({ 
    creds: {
      ...this.state.creds, 
      [e.target.name]: e.target.value 
    }});

  handleSubmit = e => {
    e.preventDefault();

    this.props.login(this.state.creds)
              .then(_ => this.props.history.push('/friends'));

    this.setState({
      creds: {
        username: '',
        password: ''
      }
    });
  };

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        {this.props.error &&
          <p>{this.props.error}</p>
        }
        <input
          autoFocus
          name="username"
          onChange={this.handleChange}
          type="text"
          value={this.state.creds.username}
        />
        <input
          name="password"
          onChange={this.handleChange}
          type="password"
          value={this.state.creds.password}
        />
        <button type="submit">
          LOGIN
        </button>
      </form>
    );
  }
}

const mapState = state => ({ 
  error: state.error
});

export default connect(
  mapState,
  { login }
)(ReactTimeout(Login));
