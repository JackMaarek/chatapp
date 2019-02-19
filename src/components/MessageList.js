import React from 'react'
import { db, remotedb } from '../dbconfig'

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

        remotedb.sync(db, {
          live: true
        }).on('change', function (change) {
          // yo, something changed!
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
      }).on('error', function (err) {
        // yo, we got an error! (maybe the user went offline?)
        console.log('errooor')
      });

      if(docs.count>25){
        remotedb.remove(docs[25]);
      }
      
    }
    render() { 

      let listItem 
           //Fetch all Messages
      listItem = this.state.messages.map((message, index)=>{
        return <ul key={index}><li className="messageList">{message}</li></ul>
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