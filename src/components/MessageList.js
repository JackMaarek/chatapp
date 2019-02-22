import React from 'react'
import { db, remotedb } from '../dbconfig'

import ChatItemMessage from './Dashboard/Chat/ChatItemMessage/ChatMainItemMessage'

class MessageList extends React.Component {
    constructor(props){
      super(props)
        this.state={
              messages:[],
              date:[],
              docs:[],
              ordinatedData:[]
        }

        var self = this;
        let ordinatedData = []

        db.sync(remotedb, {
          live: true
        }).on('change', function (change) {
          //On chang in Db fetch All docs
          remotedb.allDocs({
            include_docs: true,
            attachments: true,
          }).then(function (res) {
            //Update message & date arrays map
            
            const TMP = [];
            for( let item of res.rows ){
              var last_element = ordinatedData[ordinatedData.length - 1];
              console.log(last_element)
              TMP.push({ _id: item.id, content: item.doc.content.value, date: item.doc.date , name: item.doc.name })   
            }
            //Update state for constructor
            self.setState({ordinatedData: TMP})
          }).catch(function (err) {
            //fetch error 
            console.log(err);
          });
      }).on('error', function (err) {
        // error syncing db
        console.log('errooor')
      });
      
    }

    componentDidMount() {
      var self = this;
      let ordinatedData = []

       //fetch All docs
       remotedb.allDocs({
        include_docs: true,
        attachments: true,
      }).then(function (res) {
        //Push message items
        for( let item of res.rows ){
          ordinatedData.push({ _id: item.id, content: item.doc.content.value, date: item.doc.date, name: item.doc.name })
        }
        //Set state for constructor
        self.setState({ordinatedData: ordinatedData
          })

      }).catch(function (err) {
        //fetch error 
        console.log(err);
      });
     
    }
  
    render() { 
      var ordinatedData = this.state.ordinatedData
       ordinatedData.sort((messageA ,messageB)=>{
        const timATimestamp = (new Date(messageA.date)).getTime();
        const timBTimestamp = (new Date(messageB.date)).getTime();
        console.log(timATimestamp)
        console.log(timBTimestamp)
        if(timATimestamp > timBTimestamp){
          return 1
        }
        if(timBTimestamp>timATimestamp){
          return -1
        }
      return 0

      });
      
        return (
            <div className="message-list">
                <ul>
                  {ordinatedData.map((item, index) => {
                    return (
                    <div key={item._id}>
                      <li>
                        <ChatItemMessage date={item.date} name={item.name} content={item.content} _id={item._id} />
                      {/* {item.date}
                      <p>{item.name}</p>
                      <p>{item.content}</p> */}
                      </li>
                      
                    </div>
                      )
                  })}
                </ul>
            </div>
        )
    }
  }


export default MessageList