import React, { Component } from 'react';

class ChatMainItemMessage extends Component {
  render() {
    const { date, name, content } = this.props
    return (
      <div className='chat__item-message'>
        <div className='chat__item-message__header'>
          <span className="chat__item-message__header__name">{name}</span>
        </div>
        <div className="chat__item-message__content">
          <p className='chat__item-message__content__message'>{content}</p>
          <span className="chat__item-message__content__date">{date}</span>
        </div>
      </div>
    );
  }
}

export default ChatMainItemMessage;