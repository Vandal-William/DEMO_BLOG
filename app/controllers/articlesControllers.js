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

    async renderOneArticleAndCommentsPage(req, res, next){
      const articleId = req.params.id;
      try {
        const oneArticleWant = await dataMapper.fetchOneArticleAndComments(articleId);
        const commentsWanted = await dataMapper.fetchAllComments(articleId);
        if(! oneArticleWant) {
          next();
        }else{
          res.render('oneArticle', {oneArticleWant, commentsWanted} );
        }
      }catch(error) {
          res.status(500).render('500', {error});
        }
    },

    async addCommentsOnArticle(req, res){
      // récupérer le body de la requet
      const comment = req.body.content;
      console.log(comment);
      // // récupérer le user id
      sessionUserId = req.session.user_id;
      // // récupérer l'article id
      const articleId = req.params.id;
      if(comment){
        await dataMapper.addComment(comment, sessionUserId, articleId);
      }
      res.redirect(`/article/${articleId}`);

    },

};

module.exports = articlesControllers;