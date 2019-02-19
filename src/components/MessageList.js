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

        let docs=[];
        let date=[];
        var self = this;
        let ordinatedData = []

        //fetch All docs
        remotedb.allDocs({
          include_docs: true,
          attachments: true,
        }).then(function (res) {
          //Map message & date arrays
          console.log(res.rows);

          for( let item of res.rows ){
            ordinatedData.push({ _id: item.id, content: item.doc.content.value, date: item.doc.date })
          }
          console.log(ordinatedData)

          docs = res.rows.map(function (row) {
            return row.doc.content 
          });
          date = res.rows.map(function (row) {
            return row.doc.date

          });
          //Set state for constructor
          self.setState({messages: docs.map(item => {return item.value })});
          self.setState({date: date.map(item => { return item})});
          self.setState({ordinatedData: self.state.ordinatedData.concat(ordinatedData)
            })

        }).catch(function (err) {
          //fetch error 
          console.log(err);
        });

        remotedb.sync(db, {
          live: true
        }).on('change', function (change) {
          //On chang in Db fetch All docs
          remotedb.allDocs({
            include_docs: true,
            attachments: true,
          }).then(function (res) {
            //Update message & date arrays map
            docs = res.rows.map(function (row) {return row.doc.content});
            date = res.rows.map(function (row) {return row.doc.date});
            for( let item of res.rows ){
              ordinatedData.push({ _id: item.id, content: item.doc.content.value, date: item.doc.date })
            }
            
            //Update state for constructor
            self.setState({messages: docs.map(item => {return item.value})});
            self.setState({date: date.map(item => {return item} )});
            self.setState({ordinatedData: ordinatedData.map(item=> { 
              console.log(item.id, item.content, item.date);
               return item.id, item.content, item.date })})

          }).catch(function (err) {
            //fetch error 
            console.log(err);
          });
      }).on('error', function (err) {
        // error syncing db
        console.log('errooor')
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
        
        return new Date(timeA.date) - new Date(timeB.date)
      });
      console.log('>>>>>', ordinatedList)
      
        return (
            <div className="message-list">
                <div className="help-text">MessageList</div>
                <ul>
                  {listItem}
                  {dateItem}
                  {ordinatedList.map((item, index) => {
                    console.log('item', item)
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