import {Component} from "react";
import React from "react";


class Messages extends Component {
  render(message){
      console.log(message);
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
        "Messages-message currentMember" : "Messages-message";
    return (
        <div>
            <li className={className}>
            <span
                className="avatar"
                style={{backgroundColor: member.clientData.color}}
            />
            <div className="Message-content">
                <div className="username">
                {member.clientData.username}
                </div>
                <div className="text">{text}</div>
            </div>
            </li>
        </div>
    );
  }
}
export default Messages;
