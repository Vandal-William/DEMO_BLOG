const { Router } = require('express');
const homeController = require('./controllers/homeController');
const articlesControllers = require('./controllers/articlesControllers');

const router = Router();

router.get('/', homeController.renderHomePage);

module.exports = router;