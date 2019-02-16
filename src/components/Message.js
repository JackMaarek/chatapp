import React from 'react'
import ReactDOM from "react-dom";
import { db, remotedb } from '../dbconfig'

class Message extends React.Component {  
    render() {
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            const input= node.querySelector('.message');
            console.log(input);
        }
        
        var message = {
            "_id": "m1",
            "content": "Hey i'm your first message after 3days",
            "date": Date,
            "user":"jack"
          };
          remotedb.put(message);
          db.put(message);


          db.get('m1').then(function (doc) {
            console.log(doc);
          });

        return (
            <div className="message">
            </div>
        )
    }
}

export default Message