const session = require('express-session');
const sequelize = require('../../models');
const user = sequelize.users;

const index = (req, res)=>{
    res.render('loginView');
};

const show = async (req, res) => {
    try {
        const dadosLogin = await user.findOne({
            where: {
                email: req.body.email,
                senha: req.body.senha
            }  
        });

        if (dadosLogin) {
                req.session.email = dadosLogin.email,
                req.session.senha = dadosLogin.senha,
                req.session.nome = dadosLogin.nome

            if (req.session.email && req.session.senha) {

                if (dadosLogin.tipo_usuario == 'Admin') {
                    res.redirect('/admin');
                } else {
                   res.redirect('/'); 
                }

            } else {
                res.render('index');
            }

        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (e) {
        console.error("Error during login process", e);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    index,
    show
};