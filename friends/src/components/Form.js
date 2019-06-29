import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addFriend
} from '../store/actions';

class Form extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  };

  handleChange = e => this.setState({
    friend: {
      ...this.state.friend,
      [e.target.name]: e.target.value
    }
  });

  handleSubmit = e => {
    e.preventDefault();

    const { name, age, email } = this.state.friend;

    if (!name || !age || !email)
      return;
    
    this.props.addFriend(this.state.friend)
              .then(this.props.history.push('/friends'));
    
    const friend = {
      name: '',
      age: '',
      email: ''
    };

    this.setState({ friend });
  };

  render() {
    return (
      <form className="opForm" onSubmit={this.handleSubmit}>
        {this.props.error && <p>{this.props.error}</p>}
        <input
          autoFocus
          name="name"
          onChange={this.handleChange}
          placeholder="name"
          type="text"
          value={this.state.friend.name}
        />
        <input
          name="age"
          onChange={this.handleChange}
          placeholder="age"
          type="text"
          value={this.state.friend.age}
        />
        <input
          name="email"
          onChange={this.handleChange}
          placeholder="email"
          type="text"
          value={this.state.friend.email}
        />
        <button type="submit">
          {this.props.updatingFriend ? 'UPDATE' : 'ADD'} FRIEND
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
  { addFriend }
)(Form);