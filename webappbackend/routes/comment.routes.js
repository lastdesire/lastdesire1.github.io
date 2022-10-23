const Router = require('express')
const router = new Router();
const commentController = require('../controllers/comment.controllers')

router.post('/comment', commentController.createComment)
router.get('/comment', commentController.getComments)

module.exports = router
