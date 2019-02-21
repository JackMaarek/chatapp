import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout'
import { remotedb } from "./dbconfig";

class App extends React.Component {

    constructor(){
        super()
        this.state = {

            messages : []
        }
    
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
                <Logout/>         
            </div>
            
        );
    }
}

export default App
