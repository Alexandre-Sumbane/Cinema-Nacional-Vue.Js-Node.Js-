const express = require('express');
const route = express.Router();

const { index } = require('../Controllers/HomeControllers');



route.get('/', index);


module.exports = route;