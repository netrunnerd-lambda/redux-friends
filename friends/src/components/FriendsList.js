import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  deleteFriend,
  fetchFriends,
  setActiveFriend
} from '../store/actions';

import { Friend } from './Friend';

class FriendsList extends Component {
  handleClick = (e, friend) => {
    switch (e.target.name) {
      case 'DELETE':
        return this.props.deleteFriend(friend.id);
      case 'UPDATE':
        this.props.setActiveFriend(friend);
        return this.props.history.push('/update');
      default:
        return console.log('i like unicorns');
    }
  };

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <main className="friendList">
        {this.props.friends.map(f => <Friend
          key={f.id}
          {...f}
          onClick={e => this.handleClick(e, {...f})} 
        />)}
      </main>
    );
  }
}

const mapState = state => ({
  friends: state.friends,
  isFetching: state.isFetching
});

export default connect(
  mapState,
  {
    deleteFriend,
    fetchFriends,
    setActiveFriend
  }
)(FriendsList);
