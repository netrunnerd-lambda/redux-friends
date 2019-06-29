import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
        />
        <input
          type="text"
        />
        <button type="submit">
          ADD
        </button>
      </form>
    );
  }
}