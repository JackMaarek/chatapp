import React from 'react'
import { remotedb } from '../dbconfig'

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
          "content": {value: this.state.value},
          "date": Date(),
          "user":"jacko"
        };
        
        //Post data to DB
      remotedb.post(message);
      this.setState({
       value: ''
     });
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