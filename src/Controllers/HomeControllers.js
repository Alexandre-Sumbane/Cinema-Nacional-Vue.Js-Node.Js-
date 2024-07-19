const { where } = require('sequelize');
const sequelize = require('../../models');
const user = sequelize.users;

const index = async (req, res) => {
    try {
        if (req.session.email && req.session.senha) {
            const User = await user.findOne({
                where: {
                    email: req.session.email,
                    senha: req.session.senha
                }
            }); 
            
            res.render('index', {
                User
            });
        } else {
            res.render('index', {
                User: false
            });
        }
        
    } catch (e) {
        res.send('Usuario nao logado'); 
    }
    
};


module.exports = {
    index,
};