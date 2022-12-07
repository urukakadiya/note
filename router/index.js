const express = require('express');

const routes = express.Router();

routes.use('/API', require('./API/V1/Api'));

module.exports = routes;