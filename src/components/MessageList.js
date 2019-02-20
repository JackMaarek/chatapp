import React from 'react'
import { db, remotedb } from '../dbconfig'

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

        remotedb.sync(db, {
          live: true
        }).on('change', function (change) {
          //On chang in Db fetch All docs
          remotedb.allDocs({
            include_docs: true,
            attachments: true,
          }).then(function (res) {
            //Update message & date arrays map
            for( let item of res.rows ){
              ordinatedData.push({ _id: item.id, content: item.doc.content.value, date: item.doc.date })
            }
            
            //Update state for constructor
            self.setState({ordinatedData: ordinatedData
            })

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
          //Map message & date arrays

          for( let item of res.rows ){
            ordinatedData.push({ _id: item.id, content: item.doc.content.value, date: item.doc.date })
          }
          console.log('component mounted', ordinatedData)

          //Set state for constructor

          self.setState({ordinatedData: ordinatedData
            })

        }).catch(function (err) {
          //fetch error 
          console.log(err);
        });
    }
  
    render() { 
      let listItem 
      let dateItem 
      let ordinatedList

         /*  //map all Messages in listItem
      listItem = this.state.messages.map((message, indexOne)=>{
        return <li className="messageList" key={indexOne}>{message}</li> 
        });
          //map all Dates in dateItem
      dateItem = this.state.date.map((date, indexTwo)=>{
        return <li className="dateList" key={indexTwo}>{date}</li> 
      });*/

      console.log('ordiinated data', this.state.ordinatedData)
      ordinatedList = this.state.ordinatedData.sort((timeA ,timeB)=>{
        
        return new Date(timeA.date).getTime() - new Date(timeB.date).getTime()
      });
      console.log('>>>>>', ordinatedList)
      
        return (
            <div className="message-list">
                <div className="help-text">MessageList</div>
                <ul>
                  {listItem}
                  {dateItem}
                  {ordinatedList.map((item, index) => {
                    console.log('salope', item)
                    return (
                    <div key={index + 1}>
                      <li>
                      {item.date}
                      <p>{item.content}</p>
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