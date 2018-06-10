const router = require('express').Router()
const user = require('./user')
var db = require('../../models')
var isAuthenticated = require('./utils/isAuthenticated.js')

// API Routes - '/api/...'
router.route('/user/data')
  .get(/* isAuthenticated, */(req, res, next) => {
    res.json({ msg: 'api server received `GET` request' })
  })

  .post(/* isAuthenticated, */(req, res, next) => {
    res.json({ msg: 'api server received `POST` request' })
  })

  .put(/* isAuthenticated, */(req, res, next) => {
    res.json({ msg: 'api server received `PUT` request' })
  })

module.exports = router
