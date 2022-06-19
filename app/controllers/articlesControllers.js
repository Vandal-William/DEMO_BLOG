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
    }


};

module.exports = articlesControllers;