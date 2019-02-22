import React from 'react'
import { logout } from '../../../../api/api'
import { Link } from 'react-router-dom'

import LogoutIcon from './../../../../assets/logout-icon.png'

class Logout extends React.Component {  
   
    handleLogout(event) {
        event.preventDefault();
        console.log('JOOJ');
        logout();
      }
      
      render() {
          return (
            <Link to='signin'>
              <button onClick={this.handleLogout.bind(this)}><img src={LogoutIcon} alt='logout'/></button>
            </Link>
          )
      }
}


export default Logout
