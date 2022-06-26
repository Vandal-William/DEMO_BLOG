const { Router } = require('express');

const { 

    homeController,
    articlesControllers,
    adminControllers,
    connexion,
    
} = require('./controllers');

const upload = require('../upload/multer');


const router = Router();

router.get('/', homeController.renderHomePage);
router.get('/connexion', connexion.connexionRenderPage);
router.get('/articles', articlesControllers.renderAllArticlesPage);
router.get('/articles/:id', articlesControllers.renderOneArticlePage);
router.get('/admin/articles', adminControllers.renderFromArticlePage);
router.get('/admin/:id', adminControllers.oneDeleteArticle);
router.get('/deconnected', connexion.deconnectAndRenderHomePage);

router.post('/connected', connexion.connectedMethode);
router.post('/admin/articles', upload.single('picture'), adminControllers.addArticleAndRedirect);





module.exports = router;