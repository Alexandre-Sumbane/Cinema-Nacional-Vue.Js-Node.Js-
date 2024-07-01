const express = require('express');
const route = express.Router();
const homePage = require("../Controllers/homePage");

route.get('/', homePage);


module.exports = route;