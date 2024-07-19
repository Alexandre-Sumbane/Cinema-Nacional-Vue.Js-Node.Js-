const express = require('express');
const route = express.Router();
const { index, store } = require('../Controllers/CadastroControllers');

route.get('/', index);
route.post('/', store);


module.exports = route;