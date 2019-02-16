import React from 'react'
import Message from './Message';
import { db, remotedb } from '../dbconfig'

class MessageList extends React.Component {
    render() {
        remotedb.get('m1').then(function (doc) {
            console.log(doc);
          });
        return (
            <div className="message-list">
                <div className="help-text">MessageList</div>
            </div>
        )
    }
}

export default MessageList