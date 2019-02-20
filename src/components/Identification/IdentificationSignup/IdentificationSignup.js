import React from 'react'
import { db, remotedb } from '../../../dbconfig'

class IdentificationSignup extends React.Component {  
    
    constructor(props){
        super(props)
          this.state={
              email:'',
              password:''
          }

          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handlePasswordChange = this.handlePasswordChange.bind(this)
          this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
        }
        

        handleEmailChange (evt) {
            this.setState({ email: evt.target.value });
            console.log(({ email: evt.target.value }));
          }
          
          handlePasswordChange (evt) {
            this.setState({ password: evt.target.value });
            console.log({ password: evt.target.value });
            
          }
          handleConfirmPasswordChange (evt) {
            console.log({ confirmPassword: evt.target.value });
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
                placeholder="Password"
                />

                <label htmlFor="pwd-confirm">Confirm Password</label>
                <input 
                onChange={this.handleConfirmPasswordChange}
                value={this.state.value}
                type='password' 
                name="pwd-confirm" 
                placeholder="Confifm Password"
                />

            </form>
            </div>
        )
    }
}

export default IdentificationSignup