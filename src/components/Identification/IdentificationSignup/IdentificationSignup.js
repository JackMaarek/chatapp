import React from 'react'
import { Link } from 'react-router-dom';
import { register } from '../../../api/api'

import Indentification from '../Indentification';

class IdentificationSignup extends React.Component {  
    
    constructor(props){
        super(props)
          this.state={
              email:'',
              password:'',
              name: ''
          }

          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handlePasswordChange = this.handlePasswordChange.bind(this)
          this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
          this.handleNameChange = this.handleNameChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        

        handleEmailChange (evt) {
            this.setState({ email: evt.target.value });
            console.log(({ email: evt.target.value }));
          }

          handleNameChange (evt) {
            this.setState({ name: evt.target.value });
            console.log(({ name: evt.target.value }));
          }
          
          handlePasswordChange (evt) {
            this.setState({ password: evt.target.value });
            console.log({ password: evt.target.value });
          }

          handleConfirmPasswordChange (evt) {
            console.log({ confirmPassword: evt.target.value });
          }

          handleSubmit(evt) {

            evt.preventDefault();
              this.setState({ email: this.state.email });
              this.setState({ password: this.state.password });
              this.setState({ name: this.state.name});
              register({email: this.state.email, password: this.state.password, name: this.state.name });
          }

    render() {
        return (
          <Indentification title='CRÉER UN COMPTE'>
              <form className="send-login-form" onSubmit={this.handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input 
                    onChange={this.handleEmailChange}
                    value={this.state.value}
                    type='email' 
                    name="email" 
                    placeholder="Email"
                  />

                  <label htmlFor="name">Nom d'utilisateur</label>
                  <input 
                    onChange={this.handleNameChange}
                    value={this.state.value}
                    type='name' 
                    name="name" 
                    placeholder="Nom d'utilisateur"
                  />

                  <label htmlFor="pwd">MOT DE PASSE</label>
                  <input 
                    onChange={this.handlePasswordChange}
                    value={this.state.value}
                    type='password' 
                    name="pwd" 
                    placeholder="Mot de passe"
                  />

                  <label htmlFor="pwd-confirm">CONFIRMEZ LE MOT DE PASSE</label>
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