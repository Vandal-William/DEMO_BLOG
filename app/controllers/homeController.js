const db = require('../database/client');

const homeController = {
    renderHomePage(req, res){
        db.query('SELECT * FROM article ORDER BY id DESC LIMIT 4')
          .then(results => {
            const lastArticle = results.rows;
            res.render('home', { lastArticle });
          })
          .catch(error => {
            res.status(500).render('500', {error});
          }); 
        
    }
};

module.exports = homeController;