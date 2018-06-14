const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

// API Routes - '/api/auth'
router.route('/github/callback')
  .get(passport.authenticate('github'), (req, res, next) => {
    res.redirect('/dashboard')
  })

module.exports = router
