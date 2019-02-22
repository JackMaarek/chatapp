import React, { Component } from 'react';
import MessageList from '../../MessageList';
import ChatInput from './ChatInput/ChatInput';


class Chat extends Component {
  render() {
    return (
      <div>
        <MessageList />
        <ChatInput />
      </div>
    );
  }
}

export default Chat;