const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const { isAuthenticated } = require('../../utils/isAuthenticated')

/**
 * API Routes - '/api/auth'
 */

router.route('/github/callback')
  // Login with GitHub - oAuth 2.0 callback
  // PASS OR FAIL? -> PASS
  .get(passport.authenticate('github'), (req, res, next) => {
    res.redirect('/dashboard')
  })

router.route('/logout')
  // User logout, redirection
  // PASS OR FAIL? -> PASS
  .get(isAuthenticated, (req, res, next) => {
    req.logout()
    req.session.destroy()
    res
      .clearCookie('sessionId')
      .redirect('/')
  })

module.exports = router
