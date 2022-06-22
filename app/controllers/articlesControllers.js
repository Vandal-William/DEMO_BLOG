const dataMapper = require('../database/dataMapper');

const articlesControllers = {

    async renderAllArticlesPage(req, res){
        try{

          const allArticlesWant = await dataMapper.fetchAllArticles();
          res.render('allArticles', { allArticlesWant });

        }catch(error) {

            res.status(500).render('500', {error});
          }
    },

    async renderOneArticlePage(req, res, next){

      const articleId = req.params.id;

      try {
        const oneArticleWant = await dataMapper.fetchOneArticle(articleId);
        // const deleted = await dataMapper.deleteArticle(articleId)
        if(! oneArticleWant) {

          next();

        }else{

          res.render('oneArticle', {oneArticleWant});

        }

      }catch(error) {
          res.status(500).render('500', {error});
        }
    }

};

module.exports = articlesControllers;