import React, { Component } from 'react';

class ChatMainItemMessage extends Component {
  render() {
    const { date, name, content } = this.props
    return (
      <div className='chat__item-message'>
        <div className='chat__item-message__header'>
          <span className="chat__item-message__header__name">{name}</span>
          <span className="chat__item-message__header__date">{date}</span>
        </div>
        <p className='chat__item-message__content'>{content}</p>
      </div>
    );
  }
}

export default ChatMainItemMessage;