import React, { Component } from 'react';
import { db, remotedb } from '../../../../dbconfig';
import jwt_decode from '../../../../../node_modules/jwt-decode';

class ChatMainItemMessage extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      userCookie:''
    };
  
  
  var userToken = document.cookie
  var subUser = userToken.substring(11);
  console.log(subUser);
  this.setState({
    userCookie: jwt_decode(subUser)
  })
  console.log('COOKIE',{userCookie: jwt_decode(subUser)}.userCookie._id)
  }

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