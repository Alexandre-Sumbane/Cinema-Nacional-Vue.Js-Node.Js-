const express = require('express');
const route = express.Router();
const homeController = require('../Controllers/home');

route.get('/', homeController);


module.exports = route;