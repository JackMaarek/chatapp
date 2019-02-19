import React from 'react'
import { remotedb } from '../dbconfig'

class MessageList extends React.Component {
  
    constructor(props){
      super(props)
        this.state={
            messages:[],
            docs:[]
        }
        let docs=[];
        var self = this;
        remotedb.allDocs({
          include_docs: true,
          attachments: true,
        }).then(function (res) {
          docs = res.rows.map(function (row) {return row.doc.content});
          console.log(docs)
          self.setState({messages: docs.map(item => {return item.value})});
        }).catch(function (err) {
          console.log(err);
        });
    }
    render() { 

      let listItem 
           //Fetch all Messages
      listItem = this.state.messages.map((message, index)=>{
        return <ul key={index}><li>{message}</li></ul>
      })
  
        return (
            <div className="message-list">
                <div className="help-text">MessageList</div>
                <ul>
                  {listItem}
                </ul>
            </div>
        )
    }
  }


export default MessageList