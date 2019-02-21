/* 
Import & config
*/
    // NodeJS
    const express = require('express');
    const chatRoomRouter = express.Router();

    // Inner
    const checkFields = require('../../services/request.checker');
    const { createItem } = require('./chatroom.ctrl');
//

/* 
Definition
*/
    class ChatRoomRouterClass {
        constructor(){}

        routes(){
            // Update
            chatRoomRouter.post( '/room', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.json( { msg: 'No body data provided', data: null } )
                }
                
                // // Check fields in the body
                // const { ok, extra, miss } = checkFields( [ 'name', 'title', 'slug'], req.body )

                //=> Error: bad fields provided
                // if( !ok ) res.json( { msg: 'Bad fields provided', data: { miss: miss, extra: extra } } )
                // else{
                    // Register new user
                    createItem(req.body, res)
                    .then( apiResponse => res.json( { msg: 'ChatRoom registered', data: apiResponse } ) )
                    .catch(apiResponse => res.json( { msg: 'ChatRoom not registered', data: apiResponse } ) );
                // }
            })

        }

        init(){
            this.routes();
            return chatRoomRouter;
        }
    }
//

/* 
Export
*/
    module.exports = ChatRoomRouterClass;
//