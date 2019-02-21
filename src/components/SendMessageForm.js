import React from 'react'
import { db, remotedb } from '../dbconfig'

class SendMessageForm extends React.Component {

    constructor() {
        super();
        var userCookie = document.cookie
        console.log(userCookie);

        this.state = {
          value: ''
        };
        //Bind values on change && submit
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

        //Handle state of the input
      handleChange(event) {
        this.setState({ 
          value: event.target.value}
          );}


        //Handle onSubmit of the input
      handleSubmit(event){
        event.preventDefault();
      

        let mydate = ()=>{
          var creation = new Date();
          var dd = creation.getDate();
          var mm = creation.getMonth() + 1; 
          var yyyy = creation.getFullYear();
          var h = creation.getHours();
          var mn = creation.getMinutes();
          var s = creation.getSeconds();
          var ms = creation.getMilliseconds();
          
          if (dd < 10) {
            dd = '0' + dd;
          }
          
          if (mm < 10) {
            mm = '0' + mm;
          }
          
          creation =  h + 'h ' + mn + 'mn ' + s + 's ' + ms + 'ms ' + dd + '/' + mm + '/' + yyyy ;
          console.log(creation)
          return creation
        }

        //Data
        var message = {
          "id": 'message',
          "content": {value: this.state.value},
          "date": mydate(),
          "user":"jacko"
        };

          if({value: this.state.value}.value!==''){
            console.log({value: this.state.value}.value);
            //Post data to DB
            db.post(message);
            this.setState({
            value: ''
            });
          }
        }

    render() {    
        return (
            <form className="send-message-form" name='message' onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder="Send Your Message"
                    type="text" 
                    />
            </form>
        )
    }
}

export default SendMessageForm