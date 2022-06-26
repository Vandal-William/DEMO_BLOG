const dataMapper = require('../database/dataMapper');


const homeController = {
   async renderHomePage(req, res){
     try {
       const lastArticle = await dataMapper.fetchLastArticles();
      
      res.render('home', { lastArticle });

    } catch(error) {

      res.status(500).render('500', {error});

    }
        
        
    }
};

module.exports = homeController;