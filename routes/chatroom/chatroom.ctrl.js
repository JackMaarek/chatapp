/* 
Imports
*/
    
    // Inner
    const ChatRoomModel = require('../../models/chatroom.model');
//


/* 
Méthodes CRUD
*/
    const createItem = (body) => {
        return new Promise( (resolve, reject) => {
            // Look for used chatroom by slug
            ChatRoomModel.findOne( { title: body.title }, ( error, chatroom ) => {
                if(error) return reject(error) // Mongo Error
                else if(chatroom) return reject('chatroom already exist')
                else {
                    ChatRoomModel.create(body)
                    // res.cookie('hetic-room',ChatRoomModel)
                    .then( mongoResponse => resolve(mongoResponse) )
                    .catch( mongoResponse => reject(mongoResponse) )
                }
            })
        });
    };

    const enterChatRoom = (body, res) => {
        return new Promise( (resolve, reject) => {
            // Search chatroom by title
             ChatRoomModel.findOne( {title: body.title}, (error, chatroom) =>{
                if(error) reject(error) // Mongo error
                else if(!chatroom) reject('Unknow chatroom')
                else{
                        // Set cookie
                        res.cookie( 'hetic-room', chatroom.title )

                        return resolve(chatroom);
                };
            });
        });
    };

    const updateItem = () => {

    }

    const deleteItem = () => {

    }
//

/* 
Exports
*/
    module.exports = {
        createItem,
        enterChatRoom,
        updateItem,
        deleteItem
    }
//