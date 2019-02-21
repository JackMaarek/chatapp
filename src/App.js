import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import Login from './components/Login';
import Register from './components/Register';
import { remotedb } from "./dbconfig";

class App extends React.Component {

    constructor(){
        super()
        this.state = {

            messages : []
        }
    
    }
    
    handleLogout(event) {
        event.preventDefault();
        console.log('JOOJ');
      }

    render() {

        

      console.log(remotedb);
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <div className="modal">
                <Login />
                <Register />
                </div>
                <SendMessageForm />
                <NewRoomForm />
                <button onClick={this.handleLogout.bind(this)}>Logout</button>
            </div>
            
        );
    }
}

export default App
