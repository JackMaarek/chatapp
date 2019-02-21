/* 
Imports
*/
    // Node
    const bcrypt = require('bcrypt');
    
    // Inner
    const UserModel = require('../../models/user.model');
//


/* 
Méthodes CRUD
*/
    const register = (body, res) => {
    return new Promise( (resolve, reject) => {

        UserModel.findOne( { email: body.email }, (error, user) => {
            if(error) return reject(error) // Mongo Error
            else if(user) return reject('User already exist')
            else{
                // Hash user password
                bcrypt.hash( body.password, 10 )
                .then( hashedPassword => {  
                    // Change user pasword
                    body.password = hashedPassword;

                    // Register new user
                    UserModel.create(body)
                    .then( mongoResponse => resolve(mongoResponse) )
                    .catch( mongoResponse => reject(mongoResponse) )
                })
                .catch( hashError => reject(hashError) );
            };
        });
        
    });
};


    const login = (body, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findOne( {email: body.email}, (error, user) =>{
                if(error) reject(error) // Mongo error
                else if(!user) reject('Unknow user')
                else{
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) reject('Password not valid')
                    else{
                        // Set cookie
                        res.cookie( 'hetic-chat', user.generateJwt() )

                        return resolve(user);
                    };
                };
            });
        });
    };

    const logout = (res) => {
        return new Promise((resolve,reject)=>{
            res.clearCookie('hetic-chat')
            return resolve();
        })
    };
//

/* 
Exports
*/
    module.exports = {
        register,
        login,
        logout
    }
//
