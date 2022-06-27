const dataMapper = require("../database/dataMapper");

const adminControllers = {
    renderFromArticlePage(req, res) {
       
        res.render('articleCreationForm');
       
    },
   async addArticleAndRedirect(req, res) {
        // je récupère le path de l'image
        let pathImageWant = req.file.path;
        // je récupère le nom de l'image
        const originalName = req.file.filename;
        // j'applique un path de fichier qui match avec mon app
        pathImageWant = `/images/${originalName}`;
        // je récupérer les données du body de la requete POST
        const article = req.body;
        const sessionUserId = req.session.user_id; 
        //j'applique le path dans le champ picture
        article.picture = pathImageWant;
        // Formater l'article et l'envoyer a la bdd
        const addedArticle = await dataMapper.addArticle(article, sessionUserId);
        // rediriger sur la homePage
        res.status(200).redirect('/');
   },

    async oneDeleteArticle(req, res) {
    try{
        const { id } = req.params;
        await dataMapper.deleteArticle(id);
        res.status(200).redirect('/');

    }catch (error) {
        res.status(500).render('500', {error});
    }
       
   
    } 
  

};

module.exports = adminControllers;