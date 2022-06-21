const { Router } = require('express');
const homeController = require('./controllers/homeController');
const articlesControllers = require('./controllers/articlesControllers');
const formArticleController = require('./controllers/formArticleController');

const router = Router();

router.get('/', homeController.renderHomePage);
router.get('/articles', articlesControllers.renderAllArticlesPage);
router.get('/articles/:id', articlesControllers.renderOneArticlePage);
router.get('/form', formArticleController.renderFromArticlePage);


module.exports = router;