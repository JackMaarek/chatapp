import React, { Component } from 'react';

class ChatMainItemMessage extends Component {
  render() {
    const { date, name, content } = this.props
    const isUser = false
    const isUserClass = isUser ? 'is-user-message' : ''
    return (
      <div className={`chat__item-message ${isUserClass}`}>
        <div className='chat__item-message__container'>
          <div className='chat__item-message__container__header'>
            <span className="chat__item-message__container__header__name">{name}</span>
          </div>
          <div className="chat__item-message__container__content">
            <p className='chat__item-message__container__content__message'>{content}</p>
            <span className="chat__item-message__container__content__date">{date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatMainItemMessage;