const router = require('express').Router();
//const apiRoutes = require('./api');
const homeroutes = require('./homeRoutes.js');
const dashboardroutes = require('./dashboardRoutes.js');

router.use('/', homeroutes);

module.exports = router