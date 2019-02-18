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
      }).then(function (res) {

        console.log(res);
        var docs=[];
        docs = res.rows.map(function (row) { return row.doc.content.value; });
         console.log(docs);
        this.setState({
            messages: [...this.state.messages]
        })
      }).catch(function (err) {
        console.log(err);
      });  
        return (
            <div className="message-list">
                <div className="help-text">MessageList</div>
    
                   <li>{this.value}</li>

            </div>
        )
    }
  }


export default MessageList