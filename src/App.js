import React from 'react';
import { remotedb } from "./dbconfig";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import IdentificationSignin from './components/Identification/IdentificationSignin/IdentificationSignin';
import IdentificationSignup from './components/Identification/IdentificationSignup/IdentificationSignup';
import Dashboard from './components/Dashboard/Dashboard';
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
                {/* <RoomList />
                <MessageList />
                <div className="modal">
                <Login />
                <Register />
                </div>
                <SendMessageForm />
                <NewRoomForm />
                <Logout/>          */}
                <Router>
                    <Switch>
                        <Route path='/signin' component={IdentificationSignin} />
                        <Route path='/signup' component={IdentificationSignup} />
                        <Route path='/' component={Dashboard} />
                    </Switch>
                </Router>
            </div>
            
        );
    }
}

export default App