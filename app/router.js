const { Router } = require('express');

const { 

    homeController,
    articlesControllers,
    adminControllers, 
    
} = require('./controllers');

const upload = require('../upload/multer');


const router = Router();

router.get('/', homeController.renderHomePage);
router.get('/articles', articlesControllers.renderAllArticlesPage);
router.get('/articles/:id', articlesControllers.renderOneArticlePage);
router.get('/admin/articles', adminControllers.renderFromArticlePage);

router.post('/admin/articles', upload.single('picture'), adminControllers.addArticleAndRedirect);

router.get('/admin/:id', adminControllers.oneDeleteArticle);




module.exports = router;