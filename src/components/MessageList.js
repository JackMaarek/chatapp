import React from 'react'
import { remotedb } from '../dbconfig'

class MessageList extends React.Component {
    
    constructor(){
        super()
        this.state={
            messages:[]
        }
    }

    
    render() {
        //Fetch all Messages
        remotedb.allDocs({
            include_docs: true,
            attachments: true,
          }).then(function (result) {
            console.log(result);

            result.forEach(row => {
                console.log(row);    
            });

            this.setState({
                messages: [...this.state.messages]
            })

          }).catch(function (err) {
            console.log(err);
          });

        return (
            <div className="message-list">
                <div className="help-text">MessageList</div>
            </div>
        )
    }
}

export default MessageList