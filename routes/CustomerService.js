const {Router} = require('express');

const custServiceController = require('../controllers/Customer-Service');

const custServiceRouter = Router();


custServiceRouter.get('/', custServiceController.getCar);

module.exports = custServiceRouter;