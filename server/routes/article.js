const express = require('express'),
      router = express.Router(),
      Controller = require('../controllers/article'),
      { authenticate, authorize } = require('../middlewares/auth')


router
    .post('/add', authenticate, authorize, Controller.create)
    .get('/all', Controller.showAllArticle)
    .get('/mine', authenticate, authorize, Controller.showAllUserArticle)
    .get('/:id', authenticate, authorize, Controller.getArticle)
    .put('/update/:id', authenticate, authorize, Controller.update)

module.exports = router