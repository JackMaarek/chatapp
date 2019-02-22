import React from 'react';
import { remotedb } from "./dbconfig";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
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
                <NewRoomForm />
                */}
                <Router>
                    <Switch>
                        <Route path='/signin' component={IdentificationSignin} />
                        <Route path='/signup' component={IdentificationSignup} />
                        <Route path='/' render={() => <Dashboard messages={this.state.messages} />} />
                    </Switch>
                </Router>
            </div>
            
        );
    }
}

export default App