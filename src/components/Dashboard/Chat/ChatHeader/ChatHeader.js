import React, { Component } from 'react';
import Logout from './Logout';

class ChatHeader extends Component {
  render() {
    const { title } = this.props
    return (
      <div className='chat__header'>
        <h1>{title}</h1>
        <Logout />
      </div>
    );
  }
}

export default ChatHeader;