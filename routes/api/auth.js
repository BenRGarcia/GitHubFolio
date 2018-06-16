const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const isAuthenticated = require('../../utils/isAuthenticated')

/**
 *  Helpful hint:
 *    `req.user` is the user's MongoDB `_id`
 */

// API Routes - '/api/auth'
router.route('/github/callback')
  .get(passport.authenticate('github'), (req, res, next) => {
    res.redirect('/dashboard')
  })

router.route('/logout')
  .get(isAuthenticated, (req, res, next) => {
    // Passport
    req.logout()
    // Redis/Session
    req.session.destroy()
    // Client-side
    res
      .clearCookie('sessionId')
      .redirect('/')
  })

module.exports = router
