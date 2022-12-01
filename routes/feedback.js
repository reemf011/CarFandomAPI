const {Router} = require('express');

const feedbackController = require('../controllers/feedback');

const feedbackRouter = Router();


feedbackRouter.get('/', feedbackController.getFeedback);

module.exports = feedbackRouter;