const express = require("express");
const app = express();
const routes = require('./src/Routes/Routes'); 
const path = require('path');
const session = require('express-session');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.resolve(__dirname, 'public')));


app.set('views', path.resolve(__dirname, 'src', 'Views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: "12345",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, 
        httpOnly: true
    }
}));


app.use('/', routes.homeRoute);
app.use('/admin', routes.adminRoute);
app.use('/cadastro', routes.cadastroRoute);
app.use('/login', routes.loginRoute);


module.exports = {
    app
};
