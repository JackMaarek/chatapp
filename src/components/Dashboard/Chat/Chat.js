import React, { Component } from 'react';

import MessageList from '../../MessageList';
import ChatInput from './ChatInput/ChatInput';


import ChatHeader from './ChatHeader/ChatHeader'
import ChatInput from './ChatInput/ChatInput'

class Chat extends Component {
  render() {
    const chatTitle = 'Stack MEAN team'
    return (
      <div className='chat'>
        <ChatHeader title={chatTitle} />
        <MessageList />
        <ChatInput />
      </div>
    );
  }
}

export default Chat;