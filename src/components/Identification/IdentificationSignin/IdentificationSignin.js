import React from 'react'
import { Link } from 'react-router-dom';

import Identification from '../Indentification'

class IdentificationSignin extends React.Component {  
    
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
            <Identification title='SE CONNECTER'>
                <form className="send-login-form">
                    <label htmlFor="email">EMAIL</label>
                    <input 
                    onChange={this.handleEmailChange}
                    value={this.state.value}
                    type='email' 
                    name="email" 
                    placeholder="Email"
                    />

                    <label htmlFor="pwd">MOT DE PASSE</label>
                    <input 
                    onChange={this.handlePasswordChange}
                    value={this.state.value}
                    type='password' 
                    name="pwd" 
                    placeholder="Mot de passe"
                    />

                    <button type="submit">CONNEXION</button>
                    <p className='identification__text'>Pas encore de compte ? <Link to='signup'>Créer mon compte</Link></p>

                </form>
            </Identification>
        )
    }
}

export default IdentificationSignin