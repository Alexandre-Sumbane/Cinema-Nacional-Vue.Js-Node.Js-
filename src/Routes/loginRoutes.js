const express = require('express');
const route = express.Router();

const {index, show} = require('../Controllers/loginController'); 

route.get('/', index);
route.post('/', show);

module.exports = route;