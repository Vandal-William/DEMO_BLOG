const db = require('../database/client');

const articlesControllers = {

    renderAllArticlesPage(req, res){
        db.query('SELECT * FROM article ORDER BY id ASC')
          .then(results => {
            const allArticles = results.rows;
            res.render('allArticles', { allArticles });
          })
          .catch(error => {
            res.status(500).render('500', {error});
          })
    },

    renderOneArticlePage(req, res, next){
      const articleId = req.params.id;
      const query = `SELECT * FROM article WHERE id = ${articleId}`;
      db.query(query)
        .then(results => {
          if(results.rows.length === 0){
            next();
            return;
          }
          const oneArticleWant = results.rows[0];
          res.render('oneArticle', {oneArticleWant})
        })
        .catch(error => {
          res.status(500).render('500', {error});
        })
    }

};

module.exports = articlesControllers;