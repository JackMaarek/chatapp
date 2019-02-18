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
        
        remotedb.allDocs({
            include_docs: true,
            attachments: true
          }).then(function (result) {
            console.log(result.rows);

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