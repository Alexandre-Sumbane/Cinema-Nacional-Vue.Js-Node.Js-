const db = require('../../models');

const index = async (req, res) => {
    try {
        const users = await db.users.findAll()
        res.render('admin', { users }); 
    } catch (e) {
        console.log("Usuarios nao encontrados");
    }
};

module.exports = { index };