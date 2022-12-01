const {Router} = require('express');

const carController = require('../controllers/car');

const carRouter = Router();


carRouter.get('/', carController.getCar);

module.exports = carRouter;