import React from 'react';
import { remotedb } from "./dbconfig";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
<<<<<<< HEAD
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout'
import { remotedb } from "./dbconfig";
=======
import IdentificationSignin from './components/Identification/IdentificationSignin/IdentificationSignin';
import IdentificationSignup from './components/Identification/IdentificationSignup/IdentificationSignup';
import Dashboard from './components/Dashboard/Dashboard';
>>>>>>> f1c4297bc02bbb42b1ec7136c032e38a270af623

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
<<<<<<< HEAD
                <RoomList />
                <MessageList />
                <div className="modal">
                <Login />
                <Register />
                </div>
                <SendMessageForm />
                <NewRoomForm />
                <Logout/>         
=======
                <Router>
                    <Switch>
                        <Route path='/signin' component={IdentificationSignin} />
                        <Route path='/signup' component={IdentificationSignup} />
                        <Route path='/' component={Dashboard} />
                    </Switch>
                </Router>
>>>>>>> f1c4297bc02bbb42b1ec7136c032e38a270af623
            </div>
            
        );
    }
}

export default App
