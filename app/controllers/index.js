const homeController = require('./homeController');
const articlesControllers = require('./articlesControllers');
const adminControllers = require('./adminControllers');
const connexion = require('./connexionController');


const controllers = {
    homeController,
    articlesControllers,
    adminControllers,
    connexion,
    
}

module.exports = controllers;