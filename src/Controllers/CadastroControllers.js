const db  = require('../../models');
const session = require('express-session');

const index = (req, res) => {
  res.render('cadastro');
}

const store = async (req, res) => {
  try {
    const user = await db.users.create(req.body);

    if (user) {
      req.session = {
        email: req.body.email,
        senha: req.body.senha
      }
      res.redirect('/', );
    }
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
   
};

module.exports = {
  index,
  store
};

//index, Store, show, update, delete, store