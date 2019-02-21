import React from 'react'
import {logout} from '../api/api'

class Logout extends React.Component {  
   
    handleLogout(event) {
        event.preventDefault();
        console.log('JOOJ');
        logout();
      }
      
      render() {
          return (
            <button onClick={this.handleLogout.bind(this)}>Logout</button>
          )
      }
}


export default Logout
