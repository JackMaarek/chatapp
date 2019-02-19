import React from 'react'
import { db, remotedb } from '../dbconfig'

class SendMessageForm extends React.Component {

    constructor() {
        super();

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
        event.preventDefault()

        //Data
        var message = {
          "id": 'message',
          "content": {value: this.state.value},
          "date": Date(),
          "user":"jacko"
        };

          if({value: this.state.value}.value!==''){
            console.log({value: this.state.value}.value);
            //Post data to DB
            db.post(message);
            db.sync(remotedb);
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