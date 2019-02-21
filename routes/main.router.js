/*
Imports
*/
    // Nodejs
    const { Router } = require('express');

    // Inner
    const AuthRouterClass = require('./auth/auth.routes');
    const ChatRoomRouterClass = require('./chatroom/chatroom.routes');
//


//Passport

const passport = require('passport');
const { setAuthentication } = require('../services/authentication');
setAuthentication(passport);

/* 
Routers Definition
*/  
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();

    // Child
    const authRouter = new AuthRouterClass();
    const chatRoomRouter = new ChatRoomRouterClass();
//

/* 
Routes Definition
*/
    mainRouter.use( '/api', apiRouter );
    apiRouter.use( '/auth', authRouter.init() );
    apiRouter.use( '/chatroom', chatRoomRouter.init() );
//

/* 
Export
*/
    module.exports = mainRouter;
//
