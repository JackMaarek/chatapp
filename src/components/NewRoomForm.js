import React from 'react'
import { db, remotedb } from '../dbconfig'
import jwt_decode from '../../node_modules/jwt-decode'

class NewRoomForm extends React.Component {

    constructor() {
        super();
        this.state = {
          value: '',
          userCookie:''
        };
        //Bind values on change && submit
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

        //Handle state of the input
      handleChange(event) {
        this.setState({ 
          value: event.target.value}
          );}

        //Handle onSubmit of the input
      handleSubmit(event){
        event.preventDefault();
      

        let mydate = ()=>{
          var creation = new Date();
          var dd = creation.getDate();
          var mm = creation.getMonth() + 1; 
          var yyyy = creation.getFullYear();
          var h = creation.getHours();
          var mn = creation.getMinutes();
          var s = creation.getSeconds();
          var ms = creation.getMilliseconds();
          
          if (dd < 10) {
            dd = '0' + dd;
          }
          
          if (mm < 10) {
            mm = '0' + mm;
          }
        
          creation =  h + 'h ' + mn + 'mn ' + s + 's ' + ms + 'ms ' + dd + '/' + mm + '/' + yyyy ;
          return creation
        }

        var userToken = document.cookie
        var subUser = userToken.substring(11);
        console.log(subUser);
        this.setState({
          userCookie: jwt_decode(subUser)
        })
        
        console.log('COOOKIE',{userCookie: jwt_decode(subUser)}.userCookie._id);
        

        //Data
        var chatroom = {
          "id": 'chatroom',
          "name": {value: this.state.value},
          "UserAturized": {userCookie: jwt_decode(subUser)}.userCookie.name,
          "date": mydate(),
          "userAdmin":{userCookie: jwt_decode(subUser)}.userCookie._id
        };

          if({value: this.state.value}.value!==''){
            console.log({value: this.state.value}.value);
            //Post data to DB
            db.post(chatroom);
            this.setState({
            value: ''
            });
          }
        }

    render() {    
        return (
            <form className="send-message-form" name='chatroom' onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder="Chatroom name"
                    type="text" 
                    />
            </form>
        )
    }
}

export default NewRoomForm