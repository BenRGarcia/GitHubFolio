const express = require('express')
const router = express.Router()

/**
 * Public Routes - '/portfolio'
 */

/**
 * Psuedocode:
 *   1) Endpoint receives a GET request
 *   2) Extract req param
 *   3) Grab data about user from DB
 *   4) Feed data into component
 *   5) Work some SSR magic
 *   6) Send response of static assets
 */

// React Server Side Rendering, send fully rendered page
router.route('/user/:gitHubId')
  .get((req, res, next) => {
    const { gitHubId } = req.param
    res.send(`Got 'emmmmmmmm`)
  })

/**
 * Psuedocode:
 *   1) Endpoint receives a GET request
 *   2) Extract req param
 *   3) Grab data about user from DB
 *   4) Feed data into component
 *   5) Work some SSR magic
 *   6) Create zip file with rendered output
 *   7) Send response of zip file
 */

router.route('/ssr/:gitHubId')
  .get((req, res, next) => {
    res.send(`Got 'emmmmmmmm`)
  })

module.exports = router
