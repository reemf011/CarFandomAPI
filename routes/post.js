const {Router} = require('express');

const postController = require('../controllers/Post');
const feedbackRouter = require('./feedback');

const postRouter = Router();


postRouter.get('/', postController.getPost);

module.exports = postRouter;

postRouter.post('/', postController.postPost);