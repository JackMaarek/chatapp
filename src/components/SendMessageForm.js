import React from 'react'
import { remotedb } from '../dbconfig'

class SendMessageForm extends React.Component {

    constructor() {
        super();

        this.state = {
          value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleChange(event) {
        console.log(event.target.value)
      
        this.setState({ 
          value: event.target.value}
          );}

      handleSubmit(event){
        event.preventDefault()
        console.log(this.state.value);
        var message = {
          "content": {value: this.state.value},
          "date": Date(),
          "user":"jacko"
        };
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