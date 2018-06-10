const express = require('express')
const router = express.Router()
var db = require('../../models')
var isAuthenticated = require('../../utils/isAuthenticated')

// API Routes - '/api/user'
router.route('/data')
  .get(/* isAuthenticated, */(req, res, next) => {
    res.json({ status: 'api server received `GET` request' })
  })

  .post(/* isAuthenticated, */(req, res, next) => {
    res.json({ status: 'api server received `POST` request' })
  })

  .put(/* isAuthenticated, */(req, res, next) => {
    res.json({ status: 'api server received `PUT` request' })
  })

module.exports = router
