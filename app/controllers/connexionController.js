const dataMapper = require("../database/dataMapper");

const connexion = {

    connexionRenderPage(req, res){
        
        res.render('connexion');
        
    },

    async connectedMethode(req, res){
        // je récupère les information saisie
        const username = req.body.username;
        const password = req.body.password;
        // je récupère ma table users
        const users = await dataMapper.fetchAllUsers();
        // je vérifie que le user name et le password mach avec la table user
        const usernameVerify = users.find(user => user.username === username);
        const passwordVerify = users.find(user => user.password === password);

        if(usernameVerify && passwordVerify){
            // si sa match j'ajoute le username et le role dans la session
            const session = req.session;
            session.user_id = usernameVerify.id
            session.role = usernameVerify.role;
            session.user = usernameVerify.username;
            // et je rédirige vers la page d'accueil 
            res.status(200).redirect('/');
            console.log(session);   
        }     
    },

    deconnectAndRenderHomePage(req, res){
        req.session.user = '';
        req.session.role = '';
        req.session.user_id = null;
        res.redirect('/');
    }

};

module.exports = connexion;