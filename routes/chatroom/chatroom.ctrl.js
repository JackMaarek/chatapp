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
            ChatRoomModel.findOne( { slug: body.slug }, ( error, chatroom ) => {
                if(error) return reject(error) // Mongo Error
                else if(chatroom) return reject('chatroom already exist')
                else {
                    ChatRoomModel.create(body)
                    .then( mongoResponse => resolve(mongoResponse) )
                    .catch( mongoResponse => reject(mongoResponse) )
                }
            })
        });
    };

    const readItem = () => {
        
    }

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
        readItem,
        updateItem,
        deleteItem
    }
//