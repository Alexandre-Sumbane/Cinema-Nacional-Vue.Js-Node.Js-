const session = require('express-session');

const sessionMiddleware = (req, res, next) => {
    try {
        if (req.session.email && req.session.senha) {
            return next();
        } else {
            return res.redirect('/login')
        }
    } catch (e) {
        console.log("Algum problema com a sessao")    
    }
}

module.exports = { sessionMiddleware };