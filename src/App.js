import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import { remotedb } from "./dbconfig";

class App extends React.Component {

    constructor(){
        super()
        this.state = {

            messages : []
        }
    }

    newMessage(message){
        this.setState({
        messages: [...this.state.messages, message]
        });
        console.log('this'+ message);
    }

    render() {
      console.log(remotedb);
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <SendMessageForm />
                <NewRoomForm />
            </div>
            
        );
    }
}

export default App
