/*
Imports
*/
    // Nodejs
    const { Router } = require('express');

    // Inner
    const AuthRouterClass = require('./auth/auth.routes');
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
//

/* 
Routes Definition
*/
    mainRouter.use( '/api', apiRouter );
    apiRouter.use( '/auth', authRouter.init() );

//

/* 
Export
*/
    module.exports = mainRouter;
//
