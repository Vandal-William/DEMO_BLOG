require('dotenv').config();

const express = require('express');
const router = require('./app/router');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(router);

app.use((req, res) =>{
    res.render('404');
});

app.listen(port);