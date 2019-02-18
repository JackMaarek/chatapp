import React from 'react'
import { remotedb } from '../dbconfig'

class SendMessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);

      }
    
      handleChange(event) {
        console.log(event.target.value)
      }
    
    render() {
    
        var message = {
            "_id": "m2",
            "content": this.message,
            "date": "date",
            "user":"jacko"
          };
        
          remotedb.put(message);
    
        return (
            <form className="send-message-form" name='message'>
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