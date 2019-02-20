import React from 'react'
import { db, remotedb } from '../dbconfig'

class Login extends React.Component {  
    
    constructor(props){
        super(props)

          this.state={
              email:'',
              password:''
          }

          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handlePasswordChange = this.handlePasswordChange.bind(this)
        }
        

        handleEmailChange (evt) {
            this.setState({ email: evt.target.value });
            console.log(({ email: evt.target.value }));
          }
          
          handlePasswordChange (evt) {
            this.setState({ password: evt.target.value });
            console.log({ password: evt.target.value });
          }
          

    render() {
        return (
            <div className="LoginForm">
            <form className="send-login-form">
                <label htmlFor="email">Email</label>
                <input 
                onChange={this.handleEmailChange}
                value={this.state.value}
                type='email' 
                name="email" 
                placeholder="email"
                />

                <label htmlFor="pwd">Password</label>
                <input 
                onChange={this.handlePasswordChange}
                value={this.state.value}
                type='password' 
                name="pwd" 
                placeholder="password"
                />

            </form>
            </div>
        )
    }
}

export default Login