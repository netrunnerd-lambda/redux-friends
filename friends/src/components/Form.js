import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addFriend,
  updateFriend
} from '../store/actions';

class Form extends Component {
  state = {
    friend: this.props.activeFriend || {
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

    const { id, name, age, email } = this.state.friend;

    if (!name || !age || !email)
      return;
    
    if (this.props.activeFriend) {
      const friend = {
        name,
        age,
        email
      };

      this.props.updateFriend(id, friend);
    } else {
      this.props.addFriend(this.state.friend)
    }

    this.props.history.push('/friends');
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
          {this.props.activeFriend ? 'UPDATE' : 'ADD'} FRIEND
        </button>
      </form>
    );
  }
}

const mapState = state => ({
  activeFriend: state.activeFriend,
  error: state.error
});

export default connect(
  mapState,
  {
    addFriend,
    updateFriend
  }
)(Form);