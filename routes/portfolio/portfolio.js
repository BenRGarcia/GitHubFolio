const express = require('express')
const router = express.Router()
const { findOneByGitHubId } = require('../../controllers/UserController')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')

// Jumble everything into one file to get it working, will modularize later
class Template extends React.Component {
  render () {
    return React.createElement()
  }
}

const template = (title) => (
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Portfolio Site</title>
</head>
<body>
  <div id='app'>
    ${title}
  </div>
</body>
</html>`
)

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

    // const { gitHubId } = req.params
    // findOneByGitHubId({ gitHubId })
    //   .then(userData => res.json(userData))
    //   .catch(err => res.json(err))
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

// React Server Side Rendering, send zip file of fully rendered page
router.route('/ssr/:gitHubId')
  .get((req, res, next) => {
    res.send(`Got 'emmmmmmmm`)
  })

module.exports = router
