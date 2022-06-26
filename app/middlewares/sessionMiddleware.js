const expressSession = require('express-session');
const client = require('../database/client');
const pgStore = require('connect-pg-simple')(expressSession);

module.exports = expressSession({
    store: new pgStore({
        pool: client,
        tableName: "user_session",
        createTableIfMissing: true
    }),

    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: false,
        maxAge: 1 * 365 * 24 * 60 * 60 * 1000 // 1an
    }
})