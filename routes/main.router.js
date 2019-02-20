/*
Imports
*/
    // Nodejs
    const { Router } = require('express');

    // Inner
    const AuthRouterClass = require('./auth/auth.routes');
    const UserRouterClass = require('./user/user.routes');
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
    const userRouter = new UserRouterClass();
//

/* 
Routes Definition
*/
    mainRouter.use( '/api', apiRouter );
    apiRouter.use( '/auth', authRouter.init() );
    apiRouter.use( '/user', userRouter.init() );
//

/* 
Export
*/
    module.exports = mainRouter;
//
