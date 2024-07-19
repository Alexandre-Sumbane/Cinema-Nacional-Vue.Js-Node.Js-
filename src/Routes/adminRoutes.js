const express = require('express');
const route = express.Router();
const { index } = require('../Controllers/adminController');
const { sessionMiddleware } = require('../middlewares/sessionMidleware');

route.get('/',sessionMiddleware, index);

module.exports = route;