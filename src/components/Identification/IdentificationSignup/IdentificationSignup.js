import React from 'react'
import { Link } from 'react-router-dom';

import Indentification from '../Indentification';

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
          <Indentification title='CRÉER UN COMPTE'>
              <form className="send-login-form">
                  <label htmlFor="email">Email</label>
                  <input 
                    onChange={this.handleEmailChange}
                    value={this.state.value}
                    type='email' 
                    name="email" 
                    placeholder="Email"
                  />

                  <label htmlFor="pwd">Password</label>
                  <input 
                    onChange={this.handlePasswordChange}
                    value={this.state.value}
                    type='password' 
                    name="pwd" 
                    placeholder="Mot de passe"
                  />

                  <label htmlFor="pwd-confirm">Confirm Password</label>
                  <input 
                    onChange={this.handleConfirmPasswordChange}
                    value={this.state.value}
                    type='password' 
                    name="pwd-confirm" 
                    placeholder="Confirmez le mot de passe"
                  />

                  <button type="submit">S'INSCRIRE</button>
                  <p className='identification__text'>En vous inscrivant, vous acceptez les Conditions Générales.</p>
                  <div className='identification__signup__separator'></div>
                  <p className='identification__text'>Vous avez déjà un compte ? <Link to='signin'>Se connecter</Link></p>
              </form>
          </Indentification>
        )
    }
}

export default IdentificationSignup