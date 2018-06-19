const express = require('express')
const router = express.Router()

/**
 * Public Routes - '/portfolio'
 */

// Use React Server Side Rendering
router.route('/')
  .get((req, res, next) => {
    res.send(`Got 'emmmmmmmm`)
  })

module.exports = router
