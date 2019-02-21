import React from 'react'
import {register} from '../api/api'

class Register extends React.Component {  
    
    constructor(props){
        super(props)
          this.state={
              email:'',
              password:''
          }

          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handlePasswordChange = this.handlePasswordChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        

        handleEmailChange (evt) {
            this.setState({ email: evt.target.value });
          }
          
          handlePasswordChange (evt) {
            this.setState({ password: evt.target.value });            
          }

        handleSubmit(evt) {

          evt.preventDefault();

            this.setState({ email: this.state.email });
            this.setState({ password: this.state.password });
            register({email: this.state.email, password: this.state.password });
          }

    render() {
        return (
            <div className="LoginForm">
            <form className="send-login-form" onSubmit={this.handleSubmit}>
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

                {/* <label htmlFor="pwd-confirm">Confirm Password</label>
                <input 
                onChange={this.handleConfirmPasswordChange}
                value={this.state.value}
                type='password' 
                name="pwd-confirm" 
                placeholder="Confirm Password"
                /> */}
                <button type="submit">Register</button>

            </form>
            </div>
        )
    }
}

export default Register