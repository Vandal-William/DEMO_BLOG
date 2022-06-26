require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const sessionMiddleware = require('./app/middlewares/sessionMiddleware');


const app = express();
app.use(sessionMiddleware);


const port = process.env.PORT || 3000;

app.use((req, res, next) =>{
    const session = req.session;
    app.locals.session = session;

    next();
});

app.set('views', './views');
app.set('view engine', 'ejs');

// parse le body de la requete, pour qu'il puisse etre récuperer
// avec une méthode post
app.use(express.urlencoded({extended: true }));

// 1. Créer la boite req.session en mémoire
// 2. L'accroche systématiquement à la req.session à CHAQUE requête pour que les middleware suivant y ai accès.

app.use(express.static('public'));
app.use(router);

app.use((req, res) =>{
    res.render('404');
});

app.listen(port, () => {
    
    console.log(`Listening at http://localhost:${port}`);
});